import { generalRulePages, generalRuleSlug, type GeneralRulePage } from '@/lib/general-rule-pages'

function normalizeTitle(value: string) {
  return value.replace(/\s+/g, ' ').trim().toLowerCase()
}

function normalizeCode(value: string) {
  return value.replace(/\s+/g, ' ').trim().toUpperCase()
}

function swapRulePrefix(value: string) {
  const cleaned = value.replace(/\s+/g, ' ').trim()
  if (/^GR\s/i.test(cleaned)) return cleaned.replace(/^GR/i, 'SR')
  if (/^SR\s/i.test(cleaned)) return cleaned.replace(/^SR/i, 'GR')
  return cleaned
}

const pagesByCode = new Map(generalRulePages.map((page) => [normalizeCode(page.rule), page]))

export function matchGeneralRule(rule: string, title: string): GeneralRulePage | null {
  const exact = pagesByCode.get(normalizeCode(rule))
  if (exact) return exact

  const swapped = pagesByCode.get(normalizeCode(swapRulePrefix(rule)))
  if (swapped) return swapped

  const titled = generalRulePages.filter((page) => normalizeTitle(page.title) === normalizeTitle(title))
  if (titled.length === 1) return titled[0]

  return null
}

export function generalRuleHref(rule: string, title: string) {
  const match = matchGeneralRule(rule, title)
  return match ? `/acts/general-and-subsidiary-rules/${generalRuleSlug(match.rule)}` : ''
}

export function generalRuleDescription(rule: string, title: string) {
  return matchGeneralRule(rule, title)?.description ?? ''
}
