export const RAILWAY_STATISTICS_QUIZ_CHAPTERS = [
  {
    slug: 'chapter-1',
    quizId: 'chapter-1',
    title: 'Railway Statistics Chapter 1',
    shortTitle: 'Chapter 1',
    icon: '📊',
    color: 'from-amber-500 to-orange-600',
    description: 'Practice Chapter 1 questions from Railway Statistics in exam mode',
  },
  {
    slug: 'chapter-2',
    quizId: 'chapter-2',
    title: 'Railway Statistics Chapter 2',
    shortTitle: 'Chapter 2',
    icon: '📈',
    color: 'from-orange-500 to-amber-600',
    description: 'Practice Chapter 2 questions from Railway Statistics in exam mode',
  },
] as const

export type RailwayStatisticsQuizChapter = (typeof RAILWAY_STATISTICS_QUIZ_CHAPTERS)[number]

export function getRailwayStatisticsQuizChapter(slug: string) {
  return RAILWAY_STATISTICS_QUIZ_CHAPTERS.find((chapter) => chapter.slug === slug)
}
