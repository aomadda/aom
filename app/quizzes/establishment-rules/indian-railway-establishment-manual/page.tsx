'use client'

import { indianRailwayEstablishmentManualQuizzes } from '@/assets/quizzes/establishment-rules/indian-railway-establishment-manual'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'indian-railway-establishment-manual'
const CATEGORY_ID = 'indian-railway-establishment-manual'

export default function EstablishmentRulesQuizPage() {
  const questions = indianRailwayEstablishmentManualQuizzes.quizzes['indian-railway-establishment-manual'] ?? []

  return (
    <AomExamTest
      title="Indian Railway Establishment Manual"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
