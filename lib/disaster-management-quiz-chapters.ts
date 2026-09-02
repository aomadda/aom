const ICONS = ['🚨', '🚒', '🏥', '📡', '🦺', '🚑', '📋', '🧯', '🌊', '⚡', '📞', '🛠️', '📑'] as const
const COLORS = [
  'from-orange-500 to-rose-600',
  'from-rose-500 to-orange-600',
  'from-orange-500 to-red-600',
  'from-red-500 to-orange-600',
  'from-rose-500 to-red-600',
  'from-orange-600 to-rose-500',
  'from-red-500 to-rose-600',
  'from-orange-500 to-amber-600',
  'from-rose-600 to-orange-500',
  'from-amber-500 to-orange-600',
  'from-orange-500 to-pink-600',
  'from-rose-500 to-amber-600',
  'from-red-600 to-orange-500',
] as const

export const DISASTER_MANAGEMENT_QUIZ_CHAPTERS = Array.from({ length: 13 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `Disaster Management Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index],
    color: COLORS[index],
    description: `Practice Chapter ${number} questions from Disaster Management in exam mode`,
  }
})

export type DisasterManagementQuizChapter = (typeof DISASTER_MANAGEMENT_QUIZ_CHAPTERS)[number]

export function getDisasterManagementQuizChapter(slug: string) {
  return DISASTER_MANAGEMENT_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
