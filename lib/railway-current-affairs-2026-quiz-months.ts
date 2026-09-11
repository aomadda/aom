export const RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS = [
  {
    slug: 'january-2026',
    quizId: 'january-2026',
    title: 'Railway Current Affairs — January 2026',
    shortTitle: 'January 2026',
    icon: '🗓️',
    color: 'from-cyan-500 to-sky-600',
    description:
      'Practice January 2026 railway current affairs — Vande Bharat Sleeper, KAVACH, DFC, and Economic Survey figures',
  },
  {
    slug: 'february-2026',
    quizId: 'february-2026',
    title: 'Railway Current Affairs — February 2026',
    shortTitle: 'February 2026',
    icon: '📰',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice February 2026 railway current affairs — TAG 2026, IRCTC Aadhaar booking, Amrit Bharat, and related updates',
  },
] as const

export type RailwayCurrentAffairs2026QuizMonth =
  (typeof RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS)[number]

export function getRailwayCurrentAffairs2026QuizMonth(slug: string) {
  return RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS.find((month) => month.slug === slug)
}
