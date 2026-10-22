type DescriptionKind = 'number' | 'letter' | 'roman' | 'plain'

type DescriptionPart = {
  marker: string
  text: string
  kind: DescriptionKind
  depth: number
}

const ROMAN_RE = /^(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)$/i

function classifyMarker(marker: string): DescriptionKind {
  if (/^\d+$/.test(marker)) return 'number'
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

function parseDescription(description: string): DescriptionPart[] {
  const normalized = description.replace(/\r\n/g, '\n').trim()
  if (!normalized) return []

  const parts = normalized
    .split(
      /(?=(?:^|\n)\s*(?:\(\d+\)|\((?:i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii|xiii|xiv|xv)\)|\([a-z]\)|[a-z]\.)|(?<=[–—])\s*\([a-z]\))/i,
    )
    .map((part) => part.trim())
    .filter(Boolean)

  const result: DescriptionPart[] = []

  for (const part of parts) {
    const explicit = part.match(/^\(([0-9]+|[a-z]+)\)\s*([\s\S]*)$/i)
    const dotted = part.match(/^([a-z])\.\s*([\s\S]*)$/i)

    let marker = ''
    let text = ''

    if (explicit) {
      marker = explicit[1]
      text = explicit[2]
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
          return (
            <p key={`plain-${index}`} className="text-sm leading-relaxed text-gray-300">
              {part.text}
            </p>
          )
        }

        const styles = markerStyles(part.kind)
        const indent = Math.min(part.depth, 3) * 14
        const isNestedList = part.kind === 'letter' || part.kind === 'roman' || part.depth > 0

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
                <p className="min-w-0 flex-1 pt-1 text-sm leading-relaxed text-blue-50/95">
                  {part.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
