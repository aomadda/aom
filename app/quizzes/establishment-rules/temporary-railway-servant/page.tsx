'use client'

import { temporaryRailwayServantQuizzes } from '@/assets/quizzes/establishment-rules/temporary-railway-servant'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'temporary-railway-servant'
const CATEGORY_ID = 'temporary-railway-servant'

export default function TemporaryRailwayServantPage() {
  const questions = temporaryRailwayServantQuizzes.quizzes['temporary-railway-servant'] ?? []

  return (
    <AomExamTest
      title="Temporary Railway Servant"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
