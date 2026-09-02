'use client'

import { railwayServantsRestRules2005 } from '@/assets/quizzes/establishment-rules/railway-servants-rest-rules-2005'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-servants-rest-rules-2005'
const CATEGORY_ID = 'railway-servants-rest-rules-2005'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServantsRestRules2005['railway-servants-rest-rules-2005'] ?? []

  return (
    <AomExamTest
      title="Railway Servants (Rest) Rules 2005"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
