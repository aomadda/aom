import { generalRules } from '@/assets/general-rules/general-rules'

export type GeneralRulePage = {
  key: string
  number: number
  chapter: string
  title: string
  rule: string
  description: string
  slug: string
}

export function generalRuleSlug(rule: string) {
  return rule
    .trim()
    .toLowerCase()
    .replace(/[.\s]+/g, '-')
    .replace(/-+/g, '-')
}

function listGeneralRulePages(): GeneralRulePage[] {
  const items: GeneralRulePage[] = []
  let number = 0

  for (const chapter of generalRules) {
    const chapterRecord = chapter as {
      id: number
      chapter: string
      pages?: Array<{ id: number; title: string; rule: string; description: string }>
      rules?: Array<{ id: number; title: string; rule: string; description: string }>
    }
    const pages = chapterRecord.pages ?? chapterRecord.rules ?? []

    for (const page of pages) {
      number += 1
      items.push({
        key: `${chapterRecord.id}-${page.id}`,
        number,
        chapter: chapterRecord.chapter,
        title: page.title,
        rule: page.rule,
        description: page.description,
        slug: generalRuleSlug(page.rule),
      })
    }
  }

  return items
}

export const generalRulePages = listGeneralRulePages()

export function findGeneralRulePage(slug: string) {
  return generalRulePages.find((item) => item.slug === slug) ?? null
}

export function generalRuleNeighbors(slug: string) {
  const index = generalRulePages.findIndex((item) => item.slug === slug)
  if (index < 0) return { previous: null, next: null }
  return {
    previous: generalRulePages[index - 1] ?? null,
    next: generalRulePages[index + 1] ?? null,
  }
}
