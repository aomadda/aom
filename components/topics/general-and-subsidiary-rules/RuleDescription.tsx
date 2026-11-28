type DescriptionKind = 'number' | 'letter' | 'roman' | 'plain'

type DescriptionPart = {
  marker: string
  text: string
  kind: DescriptionKind
  depth: number
}

const ROMAN_RE = /^(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)$/i

function classifyMarker(marker: string): DescriptionKind {
  if (/^\d+(?:\.\d+)*$/.test(marker)) return 'number'
  if (ROMAN_RE.test(marker)) return 'roman'
  if (/^[a-z]$/i.test(marker)) return 'letter'
  return 'plain'
}

function computeDepth(
  kind: DescriptionKind,
  marker: string,
  previous: DescriptionPart[],
): number {
  if (kind === 'number') {
    if (marker.includes('.')) {
      const parent = [...previous].reverse().find((part) => part.kind === 'number')
      return (parent?.depth ?? 0) + 1
    }
    const n = Number(marker)
    const lastNumber = [...previous].reverse().find((part) => part.kind === 'number')
    if (lastNumber) {
      const prev = Number(lastNumber.marker)
      if (lastNumber.depth > 0 && n === prev + 1) return lastNumber.depth
      if (n < prev && n <= 10) return lastNumber.depth + 1
    }
    return 0
  }

  if (kind === 'letter') {
    const parent = [...previous]
      .reverse()
      .find((part) => part.kind === 'number' || part.kind === 'letter')
    if (parent?.kind === 'number') return parent.depth + 1
    if (parent?.kind === 'letter') return parent.depth
    return 1
  }

  if (kind === 'roman') {
    const parent = [...previous]
      .reverse()
      .find((part) => part.kind === 'letter' || part.kind === 'roman' || part.kind === 'number')
    if (parent?.kind === 'letter') return parent.depth + 1
    if (parent?.kind === 'roman') return parent.depth
    if (parent?.kind === 'number') return parent.depth + 1
    return 2
  }

  return 0
}

function cleanClauseText(text: string) {
  return text.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim()
}

function bareMarker(line: string) {
  const trimmed = line.trim()
  const wrapped = trimmed.match(/^\(([0-9]+(?:\.[0-9]+)?|[a-z]+)\)\.?$/i)
  if (wrapped) return wrapped[1]
  const dotted = trimmed.match(/^(\d+(?:\.\d+)*)\.$/)
  if (dotted) return dotted[1]
  if (/^\d+$/.test(trimmed)) return trimmed
  if (ROMAN_RE.test(trimmed) && trimmed.toLowerCase() !== 'i' && trimmed.toLowerCase() !== 'v' && trimmed.toLowerCase() !== 'x') {
    return trimmed
  }
  if (/^[a-z]$/i.test(trimmed)) return trimmed
  if (ROMAN_RE.test(trimmed)) return trimmed
  return null
}

function liftBareMarkers(description: string) {
  const lines = description.replace(/\r\n/g, '\n').split('\n')
  const chunks: string[] = []
  let index = 0

  while (index < lines.length) {
    const marker = bareMarker(lines[index])
    if (marker) {
      const body: string[] = []
      index += 1
      while (index < lines.length && bareMarker(lines[index]) === null) {
        body.push(lines[index])
        index += 1
      }
      const text = body.join(' ').replace(/\s+/g, ' ').trim()
      chunks.push(text ? `(${marker}) ${text}` : `(${marker})`)
      continue
    }

    const body = [lines[index]]
    index += 1
    while (index < lines.length && bareMarker(lines[index]) === null && lines[index].trim() !== '') {
      body.push(lines[index])
      index += 1
    }
    const text = body.join(' ').replace(/\s+/g, ' ').trim()
    if (text) chunks.push(text)
    while (index < lines.length && lines[index].trim() === '') index += 1
  }

  return chunks.join('\n')
}

function splitSentences(text: string) {
  const cleaned = text.replace(/\s+/g, ' ').trim()
  if (!/[.:]/.test(cleaned)) return [cleaned]
  const masked = cleaned.replace(
    /\b(?:i\.\s*e|e\.\s*g|viz|etc|no|sr|jr|fig|para|km|vs|dr|mr|rs)\./gi,
    (match) => match.replaceAll('.', '\u0000'),
  )
  const pieces = masked
    .split(/(?<=[.:])\s+(?=[A-Z0-9(“"])/)
    .map((piece) => piece.replaceAll('\u0000', '.').trim())
    .filter(Boolean)

  const merged: string[] = []
  for (const piece of pieces) {
    const previous = merged[merged.length - 1]
    if (previous && previous.endsWith(':') && previous.length < 48) {
      merged[merged.length - 1] = `${previous} ${piece}`
    } else {
      merged.push(piece)
    }
  }

  return merged.length > 1 ? merged : [cleaned]
}

function parseDescription(description: string): DescriptionPart[] {
  const normalized = liftBareMarkers(description).trim()
  if (!normalized) return []

  const parts = normalized
    .split(
      /(?=(?:^|\n)\s*(?:\(\d+(?:\.\d+)?\)|\((?:i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)\)|\([a-z]\)|\d+(?:\.\d+)*\.|[a-z]\.)|(?<=[–—])\s*\([a-z]\))/i,
    )
    .map((part) => part.trim())
    .filter(Boolean)

  const result: DescriptionPart[] = []

  for (const part of parts) {
    const explicit = part.match(/^\(([0-9]+(?:\.[0-9]+)?|[a-z]+)\)\s*([\s\S]*)$/i)
    const dottedNumber = part.match(/^(\d+(?:\.\d+)*)\.\s*([\s\S]*)$/)
    const dotted = part.match(/^([a-z])\.\s*([\s\S]*)$/i)

    let marker = ''
    let text = ''

    if (explicit) {
      marker = explicit[1]
      text = explicit[2]
    } else if (dottedNumber) {
      marker = dottedNumber[1]
      text = dottedNumber[2]
    } else if (dotted) {
      marker = dotted[1]
      text = dotted[2]
    } else {
      result.push({ marker: '', text: cleanClauseText(part), kind: 'plain', depth: 0 })
      continue
    }

    const kind = classifyMarker(marker)
    if (kind === 'plain') {
      result.push({ marker: '', text: cleanClauseText(part), kind: 'plain', depth: 0 })
      continue
    }

    result.push({
      marker: marker.toLowerCase(),
      text: cleanClauseText(text),
      kind,
      depth: computeDepth(kind, marker, result),
    })
  }

  return result
}

function stepTone(kind: DescriptionKind | 'plain') {
  if (kind === 'letter') {
    return {
      row: 'border-violet-300/25 bg-violet-950/50',
      num: 'bg-violet-500/25 text-violet-50 ring-violet-300/40',
      text: 'text-violet-50',
    }
  }
  if (kind === 'roman') {
    return {
      row: 'border-amber-300/25 bg-amber-950/45',
      num: 'bg-amber-500/25 text-amber-50 ring-amber-300/40',
      text: 'text-amber-50',
    }
  }
  if (kind === 'number') {
    return {
      row: 'border-cyan-300/25 bg-slate-950/50',
      num: 'bg-cyan-500/25 text-cyan-50 ring-cyan-300/40',
      text: 'text-cyan-50',
    }
  }
  return {
    row: 'border-emerald-400/30 bg-emerald-950/30',
    num: 'bg-emerald-500/20 text-emerald-50 ring-emerald-400/45',
    text: 'text-emerald-50',
  }
}

function SentenceSteps({
  steps,
  kind,
}: {
  steps: string[]
  kind: DescriptionKind | 'plain'
}) {
  const tone = stepTone(kind)
  return (
    <ol className={`min-w-0 flex-1 space-y-2 ${kind === 'plain' ? 'space-y-2.5' : ''}`}>
      {steps.map((step, stepIndex) => (
        <li
          key={stepIndex}
          className={`flex items-start gap-2.5 rounded-xl border px-3 py-2.5 shadow-sm shadow-black/20 ${tone.row}`}
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ring-1 ${tone.num}`}
          >
            {stepIndex + 1}
          </span>
          <p className={`min-w-0 flex-1 text-sm leading-relaxed ${tone.text}`}>{step}</p>
        </li>
      ))}
    </ol>
  )
}

function markerStyles(kind: DescriptionKind) {
  if (kind === 'letter') {
    return {
      badge: 'bg-violet-500/20 text-violet-100 ring-violet-400/45',
      card: 'border-violet-400/30 bg-violet-950/35',
      glow: 'from-violet-500/15 via-transparent to-fuchsia-500/10',
      label: 'Letter',
    }
  }
  if (kind === 'roman') {
    return {
      badge: 'bg-amber-500/20 text-amber-50 ring-amber-400/45',
      card: 'border-amber-400/30 bg-amber-950/30',
      glow: 'from-amber-500/15 via-transparent to-orange-500/10',
      label: 'Roman',
    }
  }
  return {
    badge: 'bg-cyan-500/20 text-cyan-50 ring-cyan-400/45',
    card: 'border-cyan-400/30 bg-slate-900/55',
    glow: 'from-cyan-500/15 via-transparent to-blue-500/10',
    label: 'Number',
  }
}

export default function DescriptionBlock({ description }: { description: string }) {
  const parts = parseDescription(description)

  if (parts.length === 0) {
    return (
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-300">{description}</p>
    )
  }

  return (
    <div className="mt-2 space-y-2.5">
      {parts.map((part, index) => {
        if (part.kind === 'plain') {
          const steps = splitSentences(part.text)
          if (steps.length > 1) {
            return <SentenceSteps key={`plain-${index}`} steps={steps} kind="plain" />
          }

          return (
            <p key={`plain-${index}`} className="text-sm leading-relaxed text-gray-300">
              {part.text}
            </p>
          )
        }

        const styles = markerStyles(part.kind)
        const indent = Math.min(part.depth, 3) * 14
        const isNestedList = part.kind === 'letter' || part.kind === 'roman' || part.depth > 0
        const sentences = splitSentences(part.text)

        return (
          <div
            key={`${part.kind}-${part.marker}-${index}`}
            className="relative"
            style={{ marginLeft: indent }}
          >
            {isNestedList ? (
              <div
                className="pointer-events-none absolute top-3 bottom-3 -left-3 w-px bg-linear-to-b from-white/30 via-white/15 to-transparent sm:-left-3.5"
                aria-hidden
              />
            ) : null}

            <div
              className={`relative overflow-hidden rounded-xl border px-3.5 py-3 shadow-sm shadow-black/25 transition-all duration-300 ${styles.card}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br opacity-70 ${styles.glow}`}
              />
              <div className="relative flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg px-1.5 text-xs font-bold tracking-wide ring-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${styles.badge}`}
                  title={styles.label}
                >
                  {part.marker}
                </span>
                {sentences.length > 1 ? (
                  <SentenceSteps steps={sentences} kind={part.kind} />
                ) : (
                  <p className="min-w-0 flex-1 pt-1 text-sm leading-relaxed text-blue-50/95">
                    {part.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
