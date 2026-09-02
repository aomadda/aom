export const COMMERCIAL_DEPARTMENT_QUIZ_CHAPTERS = [
  {
    slug: 'chapter-1',
    quizId: 'chapter-1',
    title: 'Commercial Department Chapter 1',
    shortTitle: 'Chapter 1',
    icon: '💼',
    color: 'from-indigo-500 to-purple-600',
    description: 'Practice Chapter 1 questions from the Commercial Department in exam mode',
  },
  {
    slug: 'chapter-2',
    quizId: 'chapter-2',
    title: 'Commercial Department Chapter 2',
    shortTitle: 'Chapter 2',
    icon: '🎫',
    color: 'from-purple-500 to-indigo-600',
    description: 'Practice Chapter 2 questions from the Commercial Department in exam mode',
  },
] as const

export type CommercialDepartmentQuizChapter = (typeof COMMERCIAL_DEPARTMENT_QUIZ_CHAPTERS)[number]

export function getCommercialDepartmentQuizChapter(slug: string) {
  return COMMERCIAL_DEPARTMENT_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
