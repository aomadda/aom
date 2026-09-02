'use client'

import { indianRailwayEstablishmentCodeQuizzes } from '@/assets/quizzes/establishment-rules/indian-railway-establishment-code'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'indian-railway-establishment-code'
const CATEGORY_ID = 'indian-railway-establishment-code'

export default function EstablishmentRulesQuizPage() {
  const questions = indianRailwayEstablishmentCodeQuizzes.quizzes['indian-railway-establishment-code'] ?? []

  return (
    <AomExamTest
      title="Indian Railway Establishment Code"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
