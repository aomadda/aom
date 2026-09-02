'use client'

import { centralPayCommission } from '@/assets/quizzes/establishment-rules/central-pay-commission'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'central-pay-commission'
const CATEGORY_ID = 'central-pay-commission'

export default function EstablishmentRulesQuizPage() {
  const questions = centralPayCommission['central-pay-commission'] ?? []

  return (
    <AomExamTest
      title="Central Pay Commission (CPC)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
