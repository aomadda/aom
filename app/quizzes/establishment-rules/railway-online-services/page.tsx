'use client'

import { railwayOnlineServicesQuizzes } from '@/assets/quizzes/establishment-rules/railway-online-services'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-online-services'
const CATEGORY_ID = 'railway-online-services'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayOnlineServicesQuizzes.quizzes['railway-online-services'] ?? []

  return (
    <AomExamTest
      title="Railway Online Services"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
