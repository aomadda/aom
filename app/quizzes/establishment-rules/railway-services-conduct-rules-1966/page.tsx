'use client'

import { railwayServicesConductRules1966 } from '@/assets/quizzes/establishment-rules/railway-services-conduct-rules-1966'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-services-conduct-rules-1966'
const CATEGORY_ID = 'railway-services-conduct-rules-1966'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServicesConductRules1966['railway-services-conduct-rules-1966'] ?? []

  return (
    <AomExamTest
      title="Railway Servants (Conduct) Rules 1966"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
