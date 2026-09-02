'use client'

import { railwayServicesPensionRules1993Quizzes } from '@/assets/quizzes/establishment-rules/railway-services-pension-rules-1993'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-services-pension-rules-1993'
const CATEGORY_ID = 'railway-services-pension-rules-1993'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServicesPensionRules1993Quizzes.quizzes['railway-services-pension-rules-1993'] ?? []

  return (
    <AomExamTest
      title="Railway Services Pension Rules 1993"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
