const ICONS = ['🚂', '🛤️', '🚦', '📡', '📋', '🛠️', '⚠️', '📑'] as const
const COLORS = [
  'from-teal-500 to-cyan-600',
  'from-emerald-500 to-teal-600',
  'from-green-500 to-emerald-600',
  'from-cyan-500 to-teal-600',
  'from-teal-600 to-emerald-500',
  'from-emerald-600 to-cyan-500',
  'from-green-600 to-teal-500',
  'from-cyan-600 to-emerald-600',
] as const

export const OPERATING_DEPARTMENT_QUIZ_CHAPTERS = Array.from({ length: 8 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `Operating Department Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index],
    color: COLORS[index],
    description: `Practice Chapter ${number} questions from Operating Department in exam mode`,
  }
})

export type OperatingDepartmentQuizChapter = (typeof OPERATING_DEPARTMENT_QUIZ_CHAPTERS)[number]

export function getOperatingDepartmentQuizChapter(slug: string) {
  return OPERATING_DEPARTMENT_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
