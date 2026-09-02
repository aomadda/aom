'use client'

import { oldPensionSystem } from '@/assets/quizzes/establishment-rules/old-pension-system'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'old-pension-system'
const CATEGORY_ID = 'old-pension-system'

export default function EstablishmentRulesQuizPage() {
  const questions = oldPensionSystem['old-pension-system'] ?? []

  return (
    <AomExamTest
      title="Old Pension Scheme (OPS)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
