'use client'

import { railwayServantsPassRules1986 } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-servants-pass-rules-1986'
const CATEGORY_ID = 'railway-servants-pass-rules-1986'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServantsPassRules1986['railway-servants-pass-rules-1986'] ?? []

  return (
    <AomExamTest
      title="Railway Servants (Pass) Rules 1986"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
