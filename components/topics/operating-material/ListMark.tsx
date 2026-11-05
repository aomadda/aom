import type { ReactNode } from 'react'

function isRoman(value: string) {
  return value.length > 0 && /^(?:x{0,3})(?:ix|iv|v?i{0,3})$/i.test(value) && /[ivx]/i.test(value)
}

function markCore(raw: string) {
  const text = raw.trim()
  if (!text || text.length > 8) return null
  let core = text
  const wrapped = core.match(/^[(\[{<]\s*(.+?)\s*[)\]}>]$/)
  if (wrapped) core = wrapped[1].trim()
  core = core.replace(/^[(\[{<]+/, '').replace(/[.)\]}>]+$/, '').trim()
  if (!core) return null
  if (/^\d+(?:\s*[A-Za-z])?$/.test(core)) return core
  if (/^[A-Za-z]$/.test(core)) return core
  if (isRoman(core)) return core
  return null
}

export function ListMark({ children }: { children: ReactNode }) {
  const text = typeof children === 'string' || typeof children === 'number' ? String(children) : null
  const core = text === null ? null : markCore(text)
  const showBadge = text === null || core !== null

  if (!showBadge) {
    return <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{children}</span>
  }

  return (
    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-center text-xs font-bold leading-none text-amber-100 ring-1 ring-amber-400/35">
      {core ?? children}
    </span>
  )
}
