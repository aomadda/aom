const ICONS = ['📝', '🌐', '🇮🇳', '📖'] as const
const COLORS = [
  'from-lime-500 to-green-600',
  'from-green-500 to-emerald-600',
  'from-emerald-500 to-teal-600',
  'from-green-600 to-lime-500',
] as const

export const RAJABHASHA_QUIZ_CHAPTERS = Array.from({ length: 4 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `Rajabhasha Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index],
    color: COLORS[index],
    description: `Practice Chapter ${number} questions from Rajabhasha in exam mode`,
  }
})

export type RajabhashaQuizChapter = (typeof RAJABHASHA_QUIZ_CHAPTERS)[number]

export function getRajabhashaQuizChapter(slug: string) {
  return RAJABHASHA_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
