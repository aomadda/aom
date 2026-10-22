import { ACCIDENT_MANUAL_QUIZ_CHAPTERS } from '@/lib/accident-manual-quiz-chapters'
import { BLOCK_WORKING_MANUAL_QUIZ_CHAPTERS } from '@/lib/block-working-manual-quiz-chapters'
import { COMMERCIAL_DEPARTMENT_QUIZ_CHAPTERS } from '@/lib/commercial-department-quiz-chapters'
import { DISASTER_MANAGEMENT_QUIZ_CHAPTERS } from '@/lib/disaster-management-quiz-chapters'
import {
  formatGeneralAwarenessQuizLabel,
  GENERAL_AWARENESS_QUIZ_TOPICS,
} from '@/lib/general-awareness-quiz-topics'
import { GENERAL_SUBSIDIARY_RULES_QUIZ_CHAPTERS } from '@/lib/general-subsidiary-rules-quiz-chapters'
import { KAVACH_QUIZ_CHAPTERS } from '@/lib/kavach-quiz-chapters'
import { NATIONAL_RAIL_PLAN_QUIZ_CHAPTERS } from '@/lib/national-rail-plan-quiz-chapters'
import { OPERATING_DEPARTMENT_QUIZ_CHAPTERS } from '@/lib/operating-department-quiz-chapters'
import { OPERATING_MANUAL_QUIZ_CHAPTERS } from '@/lib/operating-manual-quiz-chapters'
import { RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS } from '@/lib/railway-current-affairs-2026-quiz-months'
import { RAILWAY_GK_QUIZ_CHAPTERS } from '@/lib/railway-gk-quiz-chapters'
import { RAILWAY_STATISTICS_QUIZ_CHAPTERS } from '@/lib/railway-statistics-quiz-chapters'
import { LEAVE_RULES_1949_QUIZZES } from '@/lib/leave-rules-1949-quizzes'
import { PASS_RULES_1986_QUIZZES } from '@/lib/pass-rules-1986-quizzes'
import { RAJABHASHA_QUIZ_CHAPTERS } from '@/lib/rajabhasha-quiz-chapters'

export type NextQuiz = {
  href: string
  title: string
}

type QuizLink = NextQuiz & {
  categoryId: string
  quizId: string
}

type ChapterLike = {
  slug: string
  quizId: string
  title: string
}

function chapters(base: string, categoryId: string, items: readonly ChapterLike[]): QuizLink[] {
  return items.map((item) => ({
    href: `${base}/${item.slug}`,
    title: item.title,
    categoryId,
    quizId: item.quizId,
  }))
}

function numberedTests(folder: string, slugPrefix: string, titlePrefix: string, count: number): QuizLink[] {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    const slug = `${slugPrefix}${number}`
    return {
      href: `/aom-tests/${folder}/${slug}`,
      title: `${titlePrefix} ${number}`,
      categoryId: folder,
      quizId: slug.replace(/test(\d{2})$/, 'test-$1'),
    }
  })
}

const FINANCIAL_RULES: QuizLink[] = [
  ['accounts', 'Accounts'],
  ['finance', 'Finance'],
  ['tenders', 'Tenders'],
].map(([slug, title]) => ({
  href: `/quizzes/financial-rules/${slug}`,
  title,
  categoryId: slug,
  quizId: slug,
}))

const ESTABLISHMENT_RULES: QuizLink[] = [
  ['railway-servants-discipline-appeal-rules-1968', 'Railway  Servants (Discipline & Appeal) Rules 1968'],
  ['railway-servants-rest-rules-2005', 'Railway Servants (Rest) Rules 2005'],
  ['railway-services-conduct-rules-1966', 'Railway Servants (Conduct) Rules 1966'],
  ['compassionate-grounds-appointment', 'Compassionate Grounds Appointment (CGA)'],
  ['annual-performance-appraisal-report', 'Annual Performance Appraisal Report (APAR)'],
  ['national-pension-system', 'National Pension System (NPS)'],
  ['unified-pension-system', 'Unified Pension System (UPS)'],
  ['old-pension-system', 'Old Pension Scheme (OPS)'],
  ['central-pay-commission', 'Central Pay Commission (CPC)'],
  ['centralised-public-grievance-redress-monitoring-system', 'Centralised Public Grievance Redress Monitoring System'],
  ['employees-compensation-act-1923', 'Employees Compensation Act 1923'],
  ['indian-railway-establishment-code', 'Indian Railway Establishment Code'],
  ['indian-railway-establishment-manual', 'Indian Railway Establishment Manual'],
  ['modified-assured-career-progression', 'Modified Assured Career Progression'],
  ['permanent-negotiating-machinery', 'Permanent Negotiating Machinery'],
  ['railway-allowances', 'Railway Allowances'],
  ['railway-online-services', 'Railway Online Services'],
  ['railway-quarters', 'Railway Quarters'],
  ['railway-recruitment-posting-promotion', 'Railway Recruitment Posting Promotion'],
  ['railway-services-pension-rules-1993', 'Railway Services Pension Rules 1993'],
  ['staff-benefit-fund', 'Staff Benefit Fund'],
  ['trade-union-act-1926', 'Trade Union Act 1926'],
  ['right-to-information-act-2005', 'Right to Information Act 2005'],
  ['linke-holfmann-busch', 'Linke Hofmann Busch (LHB)'],
  ['human-resource-management-system', 'Human Resource Management System (HRMS)'],
  ['miscelaneous', 'Miscellaneous'],
]
  .map(([slug, title]) => ({
    href: `/quizzes/establishment-rules/${slug}`,
    title: title.replace(/\s+/g, ' ').trim(),
    categoryId: slug === 'annual-performance-appraisal-report' ? 'apar' : slug,
    quizId: slug,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))

const PROFESSIONAL_SUBJECT_TOPICS: { href: string; title: string }[] = [
  ['accident-inquiries', 'Accident Inquiries'],
  ['accidents-classification', 'Accidents Classification'],
  ['authority-forms', 'Authority Forms'],
  ['authorization-permissions', 'Authorization Permissions'],
  ['bell-whistle-codes', 'Bell Whistle Codes'],
  ['brake-power-certificate', 'Brake Power Certificate'],
  ['coaches-data', 'Coaches Data'],
  ['dedicated-freight-corridors', 'Dedicated Freight Corridors'],
  ['distance-wise', 'Distance Wise'],
  ['gati-shakti-cargo-terminal', 'Gati Shakti Cargo Terminal'],
  ['gradients-wise', 'Gradients Wise'],
  ['indian-railway-act-1989', 'Indian Railway Act 1989'],
  ['kavach', 'Kavach'],
  ['locos-data', 'Locos Data'],
  ['marshalling', 'Marshalling'],
  ['national-rail-plan', 'National Rail Plan'],
  ['numbers-wise', 'Numbers Wise'],
  ['operating-statistics', 'Operating Statistics'],
  ['over-dimensional-consignment', 'Over Dimensional Consignment'],
  ['percentage-wise', 'Percentage Wise'],
  ['preferential-traffic-order', 'Preferential Traffic Order'],
  ['premium-special-trains', 'Premium Special Trains'],
  ['registers-records-preserved', 'Registers Records Preserved'],
  ['speed-restrictions', 'Speed Restrictions'],
  ['station-working-rules', 'Station Working Rules'],
  ['timings-wise', 'Timings Wise'],
  ['wagon-turn-round', 'Wagon Turn Round'],
  ['wagons-data', 'Wagons Data'],
  ['years-wise', 'Years Wise'],
]
  .map(([slug, title]) => ({
    href: `/quizzes/professional-subject/${slug}`,
    title,
  }))
  .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))

function professionalSubjectQuizzes(): QuizLink[] {
  return PROFESSIONAL_SUBJECT_TOPICS.flatMap((topic) => {
    if (topic.href.endsWith('/kavach')) {
      return chapters('/quizzes/professional-subject/kavach', 'kavach', KAVACH_QUIZ_CHAPTERS)
    }
    if (topic.href.endsWith('/national-rail-plan')) {
      return chapters(
        '/quizzes/professional-subject/national-rail-plan',
        'national-rail-plan',
        NATIONAL_RAIL_PLAN_QUIZ_CHAPTERS,
      )
    }
    const quizId = topic.href.split('/').pop() || ''
    return [
      {
        href: topic.href,
        title: topic.title,
        categoryId: 'professional-subject',
        quizId,
      },
    ]
  })
}

const PREVIOUS_PAPERS: QuizLink[] = [
  ['aom-30-percent-ldce-2022', 'aom-30%-ldce-2022', 'AOM 30% LDCE 2022'],
  ['aom-30-percent-ldce-2023', 'aom-30%-ldce-2023', 'AOM 30% LDCE 2023'],
  ['aom-70-percent-ldce-2024', 'aom-70%-ldce-2024', 'AOM 70% LDCE 2024'],
  ['aom-30-percent-ldce-2026', 'aom-30%-ldce-2026', 'AOM 30% LDCE 2026'],
].map(([slug, quizId, title]) => ({
  href: `/aom-tests/aom-previous-years-papers/${slug}`,
  title,
  categoryId: quizId,
  quizId,
}))

const QUIZ_SERIES: QuizLink[][] = [
  chapters('/quizzes/accident-manual', 'accident-manual', ACCIDENT_MANUAL_QUIZ_CHAPTERS),
  chapters('/quizzes/block-working-manual', 'block-working-manual', BLOCK_WORKING_MANUAL_QUIZ_CHAPTERS),
  chapters('/quizzes/commercial-department', 'commercial-department', COMMERCIAL_DEPARTMENT_QUIZ_CHAPTERS),
  chapters('/quizzes/disaster-management', 'disaster-management', DISASTER_MANAGEMENT_QUIZ_CHAPTERS),
  chapters('/quizzes/general-subsidiary-rules', 'general-subsidiary-rules', GENERAL_SUBSIDIARY_RULES_QUIZ_CHAPTERS),
  chapters('/quizzes/operating-department', 'operating-department', OPERATING_DEPARTMENT_QUIZ_CHAPTERS),
  chapters('/quizzes/operating-manual', 'operating-manual', OPERATING_MANUAL_QUIZ_CHAPTERS),
  chapters('/quizzes/railway-gk', 'railway-gk', RAILWAY_GK_QUIZ_CHAPTERS),
  chapters('/quizzes/railway-statistics', 'railway-statistics', RAILWAY_STATISTICS_QUIZ_CHAPTERS),
  chapters('/quizzes/rajabhasha', 'rajabhasha', RAJABHASHA_QUIZ_CHAPTERS),
  chapters(
    '/quizzes/railway-current-affairs-2026',
    'railway-current-affairs-2026',
    RAILWAY_CURRENT_AFFAIRS_2026_QUIZ_MONTHS,
  ),
  ...GENERAL_AWARENESS_QUIZ_TOPICS.map((topic) =>
    topic.quizIds.map((quizId) => ({
      href: `/quizzes/general-awareness/${topic.slug}/${quizId}`,
      title: `${topic.examTitle} — ${formatGeneralAwarenessQuizLabel(quizId)}`,
      categoryId: topic.categoryId,
      quizId,
    })),
  ),
  FINANCIAL_RULES,
  ESTABLISHMENT_RULES,
  LEAVE_RULES_1949_QUIZZES.map((quiz) => ({
    href: `/quizzes/establishment-rules/railway-servants-leave-rules-1949/${quiz.slug}`,
    title: quiz.title,
    categoryId: 'railway-servants-leave-rules-1949',
    quizId: quiz.slug,
  })),
  PASS_RULES_1986_QUIZZES.map((quiz) => ({
    href: `/quizzes/establishment-rules/railway-servants-pass-rules-1986/${quiz.slug}`,
    title: quiz.title,
    categoryId: 'railway-servants-pass-rules-1986',
    quizId: quiz.slug,
  })),
  professionalSubjectQuizzes(),
  numberedTests(
    'aom-finance-establishment-rules-tests',
    'aom-finance-establishment-rules-test',
    'Finance & Establishment Rules Test',
    50,
  ),
  numberedTests(
    'aom-gk-rajabhasha-tests',
    'aom-gk-rajabhasha-test',
    'AOM GK & Rajabhasha Test',
    50,
  ),
  numberedTests(
    'aom-professional-subject-tests',
    'aom-professional-subject-test',
    'AOM Professional Subject Test',
    50,
  ),
  PREVIOUS_PAPERS,
]

export function getNextQuiz(categoryId: string, quizId: string): NextQuiz | null {
  for (const series of QUIZ_SERIES) {
    const index = series.findIndex((item) => item.categoryId === categoryId && item.quizId === quizId)
    if (index < 0) continue
    const next = series[index + 1]
    return next ? { href: next.href, title: next.title } : null
  }
  return null
}
