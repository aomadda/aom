'use client'

import { railwayBoardEstablishment } from '@/assets/quizzes/establishment-rules/railway-board-establishment'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-board-establishment'
const CATEGORY_ID = 'railway-board-establishment'

export default function RailwayBoardEstablishmentPage() {
  const questions = railwayBoardEstablishment.railwayBoardEstablishment ?? []

  return (
    <AomExamTest
      title="Railway Board Establishment (RBE)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
