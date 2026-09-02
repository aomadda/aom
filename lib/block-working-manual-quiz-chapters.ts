export const BLOCK_WORKING_MANUAL_QUIZ_CHAPTERS = [
  {
    slug: 'chapter-1',
    quizId: 'chapter-1',
    title: 'Block Working Manual Chapter 1',
    shortTitle: 'Chapter 1',
    icon: '🔧',
    color: 'from-teal-500 to-cyan-600',
    description: 'Practice Chapter 1 questions from the Block Working Manual in exam mode',
  },
  {
    slug: 'chapter-2',
    quizId: 'chapter-2',
    title: 'Block Working Manual Chapter 2',
    shortTitle: 'Chapter 2',
    icon: '📡',
    color: 'from-cyan-500 to-blue-600',
    description: 'Practice Chapter 2 questions from the Block Working Manual in exam mode',
  },
] as const

export type BlockWorkingManualQuizChapter = (typeof BLOCK_WORKING_MANUAL_QUIZ_CHAPTERS)[number]

export function getBlockWorkingManualQuizChapter(slug: string) {
  return BLOCK_WORKING_MANUAL_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
