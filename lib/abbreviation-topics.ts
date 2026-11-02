import { abbreviations } from '@/assets/abbreviations'
import type { SearchTopic } from '@/lib/search-topics'

export function abbreviationHref(letter: string, index: number, acronym: string) {
  const params = new URLSearchParams({
    letter,
    i: String(index),
    q: acronym,
  })
  return `/abbreviations?${params.toString()}`
}

export const abbreviationSearchTopics: SearchTopic[] = Object.entries(abbreviations).flatMap(
  ([letter, items]) =>
    items.map((item, index) => ({
      href: abbreviationHref(letter, index, item.acronym),
      title: item.acronym,
      category: 'Abbreviations',
      parent: item.fullForm,
      keywords: `${item.acronym} ${item.acronym.replace(/[^a-z0-9]/gi, '')} ${item.fullForm}`,
    })),
)

export function findAbbreviation(letter: string, index: number) {
  const items = abbreviations[letter]
  if (!items || !Number.isInteger(index) || index < 0 || index >= items.length) return null
  return { letter, item: items[index] }
}
