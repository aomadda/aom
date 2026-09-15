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
  {
    slug: 'may-2026',
    quizId: 'may-2026',
    title: 'Railway Current Affairs — May 2026',
    shortTitle: 'May 2026',
    icon: '🌼',
    color: 'from-fuchsia-500 to-rose-600',
    description:
      'Practice May 2026 railway current affairs — CCEA multitracking, Kazipet–Vijayawada, and Sarkhej–Dholera semi-high-speed',
  },
  {
    slug: 'june-2026',
    quizId: 'june-2026',
    title: 'Railway Current Affairs — June 2026',
    shortTitle: 'June 2026',
    icon: '☀️',
    color: 'from-rose-500 to-orange-500',
    description:
      'Practice June 2026 railway current affairs — hydrogen train trials, RRB Technician vacancies, and related updates',
  },
  {
    slug: 'july-2026',
    quizId: 'july-2026',
    title: 'Railway Current Affairs — July 2026',
    shortTitle: 'July 2026',
    icon: '🌧️',
    color: 'from-orange-500 to-amber-500',
    description:
      'Practice July 2026 railway current affairs — indigenous hydrogen train, Jind–Sonipat operations, and related updates',
  },
  {
    slug: 'august-2026',
    quizId: 'august-2026',
    title: 'Railway Current Affairs — August 2026',
    shortTitle: 'August 2026',
    icon: '🌾',
    color: 'from-amber-500 to-cyan-600',
    description:
      'Practice August 2026 railway current affairs — KAVACH 4.0, CTO All India licence, and freight performance',
  },
] as const

export type RailwayCurrentAffairs2026QuizMonth =
  (typeof RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS)[number]

export function getRailwayCurrentAffairs2026QuizMonth(slug: string) {
  return RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS.find((month) => month.slug === slug)
}
