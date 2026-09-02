'use client'

import { staffBenefitFundQuizzes } from '@/assets/quizzes/establishment-rules/staff-benefit-fund'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'staff-benefit-fund'
const CATEGORY_ID = 'staff-benefit-fund'

export default function EstablishmentRulesQuizPage() {
  const questions = staffBenefitFundQuizzes.quizzes['staff-benefit-fund'] ?? []

  return (
    <AomExamTest
      title="Staff Benefit Fund"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
