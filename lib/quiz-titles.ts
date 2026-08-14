const QUIZ_TITLES: Record<string, string> = {
  'aom-previous-paper-2022': 'AOM Previous Paper 2022',
  'professional-subject': 'AOM Previous Papers 2026 — Professional Subject',
  'gk-rajabhasha': 'AOM Previous Papers 2026 — GK & Rajabhasha',
  'establishment-finance-rules': 'AOM Previous Papers 2026 — Establishment & Financial Rules',
  'accident-manual': 'Accident Manual',
  'block-working-manual': 'Block Working Manual',
  'commercial-department': 'Commercial Department',
  'disaster-management': 'Disaster Management',
  apar: 'Annual Performance Appraisal Report (APAR)',
  cga: 'Compassionate Grounds Appointment (CGA)',
  'conduct-rules': 'Railway Servants (Conduct) Rules 1966',
  cpc: 'Central Pay Commission (CPC)',
  'discipline-appeal-rules': 'Railway Servants (Discipline & Appeal) Rules 1968',
  hrms: 'Human Resource Management System (HRMS)',
  'leave-rules': 'Railway Servants (Leave) Rules 1949',
  lhb: 'Linke Hofmann Busch (LHB)',
  miscelaneous: 'Miscellaneous',
  nps: 'National Pension System (NPS)',
  ops: 'Old Pension Scheme (OPS)',
  'pass-rules': 'Railway Servants (Pass) Rules 1986',
  'rest-rules': 'Railway Servants (Rest) Rules 2005',
  'rti-act-2005': 'Right to Information Act 2005',
  ups: 'Unified Pension System (UPS)',
  accounts: 'Accounts',
  finance: 'Finance',
  tenders: 'Tenders',
  kavach: 'Kavach',
  'operating-department': 'Operating Department',
  'operating-manual': 'Operating Manual',
  'railway-gk': 'Railway GK',
  rajabhasha: 'Rajabhasha',
  'general-awareness-art-culture': 'Art & Culture',
  'general-awareness-biology': 'Biology',
  'general-awareness-botany': 'Botany',
  'general-awareness-chemistry': 'Chemistry',
  'general-awareness-current-affairs': 'Current Affairs',
  'general-awareness-geography': 'Geography',
  'general-awareness-history': 'History',
  'general-awareness-physics': 'Physics',
  'general-awareness-polity': 'Indian Polity',
  'general-awareness-zoology': 'Zoology',
}

export function getQuizTitle(quizId: string, categoryId?: string) {
  if (QUIZ_TITLES[quizId]) return QUIZ_TITLES[quizId]
  if (categoryId && QUIZ_TITLES[categoryId]) return QUIZ_TITLES[categoryId]
  return quizId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
