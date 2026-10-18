export type ExplanationItem = {
  label: string
  text: string
}

export type FormattedExplanation =
  | { kind: 'list'; lead: string; items: ExplanationItem[] }
  | { kind: 'sentences'; sentences: string[] }
  | { kind: 'plain'; text: string }

const ABBREVIATION =
  /(?:^|\s)(?:No|Nos|Rs|Mr|Mrs|Ms|Dr|Sr|Jr|St|vs|etc|Fig|Ref|Vol|Art|Sec|Approx|Gen|Col|Smt|Shri)\.$/i

const ROMANS = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x', 'xi', 'xii']

type Hit = {
  index: number
  end: number
  label: string
  order: number
}

function tidy(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function sequentialRun(hits: Hit[], text: string) {
  const start = hits.findIndex((hit) => hit.order === 1)
  if (start < 0) return null
  const run = [hits[start]]
  let expect = 2
  for (let index = start + 1; index < hits.length; index += 1) {
    if (hits[index].order === expect) {
      run.push(hits[index])
      expect += 1
    } else if (hits[index].order > expect) {
      break
    }
  }
  if (run.length < 2) return null
  for (let index = 0; index < run.length; index += 1) {
    const next = run[index + 1]
    if (!text.slice(run[index].end, next ? next.index : text.length).trim()) return null
  }
  return run
}

function listFromHits(text: string, hits: Hit[]) {
  const run = sequentialRun(hits, text)
  if (!run) return null
  return {
    lead: tidy(text.slice(0, run[0].index)),
    items: run.map((hit, index) => {
      const next = run[index + 1]
      return {
        label: hit.label,
        text: tidy(text.slice(hit.end, next ? next.index : text.length)),
      }
    }),
  }
}

function numberHits(text: string) {
  const hits: Hit[] = []
  const pattern = /(?:^|\n|\s)(\d+)[.)](?=\s+\S)/g
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text))) {
    const punctuation = match[0].slice(-1)
    const token = `${match[1]}${punctuation}`
    const index = match.index + match[0].length - token.length
    hits.push({
      index,
      end: match.index + match[0].length,
      label: match[1],
      order: Number(match[1]),
    })
  }
  return hits
}

function letterHits(text: string) {
  const hits: Hit[] = []
  const pattern = /(?:^|\n|\s)([A-Za-z])[.)](?=\s+\S)/g
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text))) {
    const letter = match[1]
    const punctuation = match[0].slice(-1)
    const token = `${letter}${punctuation}`
    hits.push({
      index: match.index + match[0].length - token.length,
      end: match.index + match[0].length,
      label: letter,
      order: letter.toUpperCase().charCodeAt(0) - 64,
    })
  }
  const first = hits.find((hit) => hit.order === 1)
  if (!first) return []
  const upper = first.label === first.label.toUpperCase()
  return hits.filter((hit) => (hit.label === hit.label.toUpperCase()) === upper)
}

function wrappedHits(text: string) {
  const hits: Hit[] = []
  const pattern = /(?:^|\n)[ \t]*\(([A-Za-z0-9]+)\)(?=\s+\S)/g
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text))) {
    const token = match[1]
    const raw = `(${token})`
    const index = text.indexOf(raw, match.index)
    let order = 0
    if (/^\d+$/.test(token)) order = Number(token)
    else if (/^[A-Za-z]$/.test(token)) order = token.toUpperCase().charCodeAt(0) - 64
    else {
      const roman = ROMANS.indexOf(token.toLowerCase())
      order = roman >= 0 ? roman + 1 : 0
    }
    if (!order || index < 0) continue
    hits.push({ index, end: index + raw.length, label: token, order })
  }

  const inlineRoman = /\(([ivx]+|[IVX]+)\)(?=\s+\S)/g
  if (hits.length < 2) {
    const inline: Hit[] = []
    let romanMatch: RegExpExecArray | null
    while ((romanMatch = inlineRoman.exec(text))) {
      const token = romanMatch[1]
      const order = ROMANS.indexOf(token.toLowerCase()) + 1
      if (!order) continue
      const raw = `(${token})`
      inline.push({
        index: romanMatch.index,
        end: romanMatch.index + raw.length,
        label: token,
        order,
      })
    }
    if (inline[0]?.index === 0) return inline
  }
  return hits
}

function parseList(text: string) {
  return (
    listFromHits(text, numberHits(text)) ||
    listFromHits(text, letterHits(text)) ||
    listFromHits(text, wrappedHits(text))
  )
}

export function splitExplanationSentences(value: string) {
  const normalized = tidy(value)
  if (!normalized) return []
  const sentences: string[] = []
  let start = 0
  for (let index = 0; index < normalized.length; index += 1) {
    if (normalized[index] !== '.') continue
    const previous = normalized[index - 1] ?? ''
    const next = normalized[index + 1] ?? ''
    if (/\d/.test(previous) && /\d/.test(next)) continue
    if (next && !/\s/.test(next)) continue
    const earlier = normalized[index - 2] ?? ' '
    if (/[A-Za-z]/.test(previous) && !/[A-Za-z]/.test(earlier)) continue
    const chunk = normalized.slice(start, index + 1)
    if (ABBREVIATION.test(chunk)) continue
    const sentence = chunk.trim()
    if (sentence) sentences.push(sentence)
    while (normalized[index + 1] && /\s/.test(normalized[index + 1])) index += 1
    start = index + 1
  }
  const rest = normalized.slice(start).trim()
  if (rest) sentences.push(rest)
  return sentences
}

export function formatExplanation(value: string): FormattedExplanation {
  const text = value.replace(/\r\n/g, '\n')
  const list = parseList(text)
  if (list) return { kind: 'list', lead: list.lead, items: list.items }
  const sentences = splitExplanationSentences(text)
  if (sentences.length > 1) return { kind: 'sentences', sentences }
  return { kind: 'plain', text: tidy(text) }
}
