export const NATIONAL_RAIL_PLAN_QUIZ_CHAPTERS = [
  {
    slug: 'chapter-1',
    quizId: 'chapter-1',
    title: 'National Rail Plan Chapter 1',
    shortTitle: 'Chapter 1',
    icon: '🗺️',
    color: 'from-indigo-500 to-blue-600',
    description: 'Practice Chapter 1 questions from the National Rail Plan in exam mode',
  },
  {
    slug: 'chapter-2',
    quizId: 'chapter-2',
    title: 'National Rail Plan Chapter 2',
    shortTitle: 'Chapter 2',
    icon: '🛤️',
    color: 'from-blue-500 to-indigo-600',
    description: 'Practice Chapter 2 questions from the National Rail Plan in exam mode',
  },
] as const

export type NationalRailPlanQuizChapter = (typeof NATIONAL_RAIL_PLAN_QUIZ_CHAPTERS)[number]

export function getNationalRailPlanQuizChapter(slug: string) {
  return NATIONAL_RAIL_PLAN_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
