const ICONS = ['📘', '📗', '📕', '📙', '📑', '📝', '🚂', '🚦', '📡', '📋', '🛠️', '⚠️'] as const
const COLORS = [
  'from-sky-500 to-blue-600',
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-sky-600',
  'from-sky-600 to-indigo-500',
  'from-blue-600 to-sky-500',
  'from-indigo-600 to-blue-500',
  'from-sky-500 to-indigo-600',
  'from-blue-500 to-sky-600',
] as const

export const OPERATING_MANUAL_QUIZ_CHAPTERS = Array.from({ length: 25 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `Operating Manual Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index % ICONS.length],
    color: COLORS[index % COLORS.length],
    description: `Practice Chapter ${number} questions from the Operating Manual in exam mode`,
  }
})

export type OperatingManualQuizChapter = (typeof OPERATING_MANUAL_QUIZ_CHAPTERS)[number]

export function getOperatingManualQuizChapter(slug: string) {
  return OPERATING_MANUAL_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
