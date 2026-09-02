const ICONS = [
  '📘',
  '📗',
  '📕',
  '📙',
  '📑',
  '📝',
  '🚂',
  '🚦',
  '📡',
  '🛡️',
  '⚠️',
  '📋',
  '📌',
  '🔖',
  '🛠️',
  '📖',
] as const

const COLORS = [
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-blue-600',
  'from-sky-500 to-blue-600',
  'from-blue-600 to-cyan-600',
  'from-indigo-500 to-sky-600',
  'from-blue-500 to-sky-600',
  'from-cyan-500 to-indigo-600',
  'from-sky-600 to-indigo-500',
  'from-indigo-600 to-blue-500',
  'from-blue-500 to-teal-600',
  'from-sky-500 to-indigo-600',
  'from-indigo-500 to-cyan-600',
  'from-blue-600 to-indigo-500',
  'from-cyan-600 to-blue-500',
  'from-sky-500 to-cyan-600',
  'from-indigo-600 to-sky-500',
] as const

export const GENERAL_SUBSIDIARY_RULES_QUIZ_CHAPTERS = Array.from({ length: 16 }, (_, index) => {
  const number = index + 1
  return {
    slug: `chapter-${number}`,
    quizId: `chapter-${number}`,
    title: `General & Subsidiary Rules Chapter ${number}`,
    shortTitle: `Chapter ${number}`,
    icon: ICONS[index],
    color: COLORS[index],
    description: `Practice Chapter ${number} questions from General & Subsidiary Rules in exam mode`,
  }
})

export type GeneralSubsidiaryRulesQuizChapter =
  (typeof GENERAL_SUBSIDIARY_RULES_QUIZ_CHAPTERS)[number]

export function getGeneralSubsidiaryRulesQuizChapter(slug: string) {
  return GENERAL_SUBSIDIARY_RULES_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
