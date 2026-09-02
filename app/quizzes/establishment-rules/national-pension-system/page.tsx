'use client'

import { nationalPensionSystem } from '@/assets/quizzes/establishment-rules/national-pension-system'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'national-pension-system'
const CATEGORY_ID = 'national-pension-system'

export default function EstablishmentRulesQuizPage() {
  const questions = nationalPensionSystem['national-pension-system'] ?? []

  return (
    <AomExamTest
      title="National Pension System (NPS)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
