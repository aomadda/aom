'use client'

import { marshalling } from '@/assets/quizzes/professional-subject/marshalling'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'marshalling'

export default function MarshallingQuizPage() {
  const questions = marshalling[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Marshalling"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
