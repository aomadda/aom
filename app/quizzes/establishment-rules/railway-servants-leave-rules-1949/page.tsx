'use client'

import { railwayServantsLeaveRules1949 } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-servants-leave-rules-1949'
const CATEGORY_ID = 'railway-servants-leave-rules-1949'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServantsLeaveRules1949['railway-servants-leave-rules-1949'] ?? []

  return (
    <AomExamTest
      title="Railway Servants (Leave) Rules 1949"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
