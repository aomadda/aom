const QUIZ_TITLES: Record<string, string> = {
  'aom-previous-paper-2022': 'AOM Previous Paper 2022',
  'professional-subject': 'AOM Previous Papers 2026 — Professional Subject',
  'gk-rajabhasha': 'AOM Previous Papers 2026 — GK & Rajabhasha',
  'establishment-finance-rules': 'AOM Previous Papers 2026 — Establishment & Financial Rules',
  'accident-manual': 'Accident Manual',
}

export function getQuizTitle(quizId: string, categoryId?: string) {
  if (QUIZ_TITLES[quizId]) return QUIZ_TITLES[quizId]
  if (categoryId && QUIZ_TITLES[categoryId]) return QUIZ_TITLES[categoryId]
  return quizId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
