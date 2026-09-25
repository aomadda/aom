'use client'

import { dedicatedFreightCorridors } from '@/assets/quizzes/professional-subject/dedicated-freight-corridors'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'dedicated-freight-corridors'

export default function DedicatedFreightCorridorsQuizPage() {
  const questions = dedicatedFreightCorridors[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Dedicated Freight Corridors"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
