import { railwayActs } from '@/assets/railway-acts/railway-acts'

export type RailwayActSection = {
  key: string
  number: number
  chapter: string
  title: string
  section: string
  description: string
}

function listRailwayActSections(): RailwayActSection[] {
  const sections: RailwayActSection[] = []
  let number = 0

  for (const chapter of railwayActs) {
    const entries = ('acts' in chapter ? chapter.acts : chapter.sections) ?? []
    for (const act of entries) {
      number += 1
      sections.push({
        key: `${chapter.id}-${act.id}-${act.section}`,
        number,
        chapter: chapter.chapter,
        title: act.title,
        section: act.section,
        description: act.description,
      })
    }
  }

  return sections
}

export const railwayActSections = listRailwayActSections()

export function findRailwayActSection(section: string) {
  const key = decodeURIComponent(section).trim().toLowerCase()
  return railwayActSections.find((item) => item.section.toLowerCase() === key) ?? null
}

export function railwayActNeighbors(section: string) {
  const index = railwayActSections.findIndex(
    (item) => item.section.toLowerCase() === decodeURIComponent(section).trim().toLowerCase(),
  )
  if (index < 0) return { previous: null, next: null }
  return {
    previous: railwayActSections[index - 1] ?? null,
    next: railwayActSections[index + 1] ?? null,
  }
}
