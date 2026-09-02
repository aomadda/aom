const ICONS = ['🧠', '🚂', '📜', '🏛️', '🛤️', '📊', '🛡️'] as const
const COLORS = [
  'from-pink-500 to-rose-600',
  'from-rose-500 to-orange-600',
  'from-orange-500 to-amber-600',
  'from-pink-600 to-orange-500',
  'from-rose-600 to-pink-500',
  'from-amber-500 to-rose-600',
  'from-orange-600 to-pink-500',
] as const

export const RAILWAY_GK_QUIZ_CHAPTERS = Array.from({ length: 7 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `Railway GK Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index],
    color: COLORS[index],
    description: `Practice Chapter ${number} questions from Railway GK in exam mode`,
  }
})

export type RailwayGkQuizChapter = (typeof RAILWAY_GK_QUIZ_CHAPTERS)[number]

export function getRailwayGkQuizChapter(slug: string) {
  return RAILWAY_GK_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
