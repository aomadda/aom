'use client'

import { railwayQuartersQuizzes } from '@/assets/quizzes/establishment-rules/railway-quarters'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-quarters'
const CATEGORY_ID = 'railway-quarters'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayQuartersQuizzes.quizzes['railway-quarters'] ?? []

  return (
    <AomExamTest
      title="Railway Quarters"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
