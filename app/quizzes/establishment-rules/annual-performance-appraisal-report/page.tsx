'use client'

import { annualPerformanceAppraisalReport } from '@/assets/quizzes/establishment-rules/annaul-performance-appraisal-report'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'annual-performance-appraisal-report'
const CATEGORY_ID = 'apar'

export default function EstablishmentRulesQuizPage() {
  const questions = annualPerformanceAppraisalReport['annual-performance-appraisal-report'] ?? []

  return (
    <AomExamTest
      title="Annual Performance Appraisal Report (APAR)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
