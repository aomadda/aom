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
  {
    slug: 'march-2026',
    quizId: 'march-2026',
    title: 'Railway Current Affairs — March 2026',
    shortTitle: 'March 2026',
    icon: '🌸',
    color: 'from-indigo-500 to-violet-600',
    description:
      'Practice March 2026 railway current affairs — Vande Bharat, Western DFC, Reform Express, MUTP, and KAVACH',
  },
  {
    slug: 'april-2026',
    quizId: 'april-2026',
    title: 'Railway Current Affairs — April 2026',
    shortTitle: 'April 2026',
    icon: '🌤️',
    color: 'from-violet-500 to-fuchsia-600',
    description:
      'Practice April 2026 railway current affairs — electrification, freight, summer specials, Amrit Bharat, and track safety',
  },
] as const

export type RailwayCurrentAffairs2026QuizMonth =
  (typeof RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS)[number]

export function getRailwayCurrentAffairs2026QuizMonth(slug: string) {
  return RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS.find((month) => month.slug === slug)
}
