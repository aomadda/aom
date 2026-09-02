'use client'

import { railwayAllowancesQuizzes } from '@/assets/quizzes/establishment-rules/railway-allowances'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-allowances'
const CATEGORY_ID = 'railway-allowances'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayAllowancesQuizzes.quizzes['railway-allowances'] ?? []

  return (
    <AomExamTest
      title="Railway Allowances"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
