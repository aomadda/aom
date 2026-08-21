import { searchTopics, type SearchTopic } from '@/lib/search-topics'

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const RAILWAY_QUERY =
  /\b(indian railways?|railways?|irctc|g\s*and\s*sr|gsr|aom|assistant operations|block working|operating manual|accident manual|station working|railway act|pcom|s\s*and\s*t)\b/i

const RAILWAY_CATEGORIES = new Set(['Study Topics', 'Manuals', 'Acts & Rules', 'Quizzes', 'PDFs'])

function scoreTopic(topic: SearchTopic, query: string, tokens: string[], railwayQuery: boolean) {
  const title = normalize(topic.title)
  const parent = normalize(topic.parent)
  const category = normalize(topic.category)
  const keywords = normalize(topic.keywords)
  const haystack = `${title} ${parent} ${category} ${keywords}`

  if (!haystack.includes(query) && !tokens.every((token) => haystack.includes(token))) {
    return -1
  }

  let score = 0
  if (title === query) score += 120
  if (title.startsWith(query)) score += 80
  if (title.includes(query)) score += 50
  if (category.includes(query)) score += 20
  if (parent.includes(query)) score += 15
  if (keywords.includes(query)) score += 10

  for (const token of tokens) {
    if (title.startsWith(token)) score += 25
    else if (title.includes(token)) score += 15
    else if (haystack.includes(token)) score += 8
  }

  score += Math.max(0, 30 - topic.href.split('/').length)

  if (railwayQuery && RAILWAY_CATEGORIES.has(topic.category)) {
    score += 18
  }
  if (railwayQuery && title.includes('indian railway')) {
    score += 40
  }

  return score
}

export function filterTopics(rawQuery: string, limit = 40): SearchTopic[] {
  const query = normalize(rawQuery)
  if (!query) return []

  const tokens = query.split(' ').filter(Boolean)
  const railwayQuery = RAILWAY_QUERY.test(rawQuery) || tokens.some((token) => token === 'railway' || token === 'railways' || token === 'aom')

  return searchTopics
    .map((topic) => ({ topic, score: scoreTopic(topic, query, tokens, railwayQuery) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.topic.title.localeCompare(b.topic.title))
    .slice(0, limit)
    .map((item) => item.topic)
}

export function findTopicByPath(pathname: string): SearchTopic | undefined {
  const exact = searchTopics.find((topic) => topic.href === pathname)
  if (exact) return exact

  return searchTopics
    .filter((topic) => topic.href !== '/' && pathname.startsWith(`${topic.href}/`))
    .sort((a, b) => b.href.length - a.href.length)[0]
}
