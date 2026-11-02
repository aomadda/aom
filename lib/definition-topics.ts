import { definitions } from '@/assets/definitions'
import type { SearchTopic } from '@/lib/search-topics'

export function definitionHref(index: number, term: string) {
  const params = new URLSearchParams({
    i: String(index),
    q: term,
  })
  return `/definitions?${params.toString()}`
}

export const definitionSearchTopics: SearchTopic[] = definitions.map((item, index) => ({
  href: definitionHref(index, item.term),
  title: item.term,
  category: 'Definitions',
  parent: 'Definitions',
  keywords: `${item.term} ${item.term.replace(/[^a-z0-9]/gi, '')}`,
}))

export function findDefinition(index: number) {
  if (!Number.isInteger(index) || index < 0 || index >= definitions.length) return null
  return definitions[index]
}
