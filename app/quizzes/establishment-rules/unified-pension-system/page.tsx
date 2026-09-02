'use client'

import { unifiedPensionSystem } from '@/assets/quizzes/establishment-rules/unified-pension-system'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'unified-pension-system'
const CATEGORY_ID = 'unified-pension-system'

export default function EstablishmentRulesQuizPage() {
  const questions = unifiedPensionSystem['unified-pension-system'] ?? []

  return (
    <AomExamTest
      title="Unified Pension System (UPS)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
