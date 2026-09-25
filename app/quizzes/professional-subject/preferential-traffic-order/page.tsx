'use client'

import { preferentialTrafficOrder } from '@/assets/quizzes/professional-subject/preferential-traffic-order'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'preferential-traffic-order'

export default function PreferentialTrafficOrderQuizPage() {
  const questions = preferentialTrafficOrder[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Preferential Traffic Order"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
