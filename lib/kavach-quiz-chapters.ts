export const KAVACH_QUIZ_CHAPTERS = [
  {
    slug: 'kavach',
    quizId: 'kavach',
    title: 'Kavach',
    shortTitle: 'Kavach',
    icon: '🛡️',
    color: 'from-orange-500 to-red-600',
    description: 'Practice Kavach train protection system questions in exam mode',
  },
] as const

export type KavachQuizChapter = (typeof KAVACH_QUIZ_CHAPTERS)[number]

export function getKavachQuizChapter(slug: string) {
  return KAVACH_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
