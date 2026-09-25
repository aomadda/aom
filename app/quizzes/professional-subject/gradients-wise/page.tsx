'use client'

import { gradientsWise } from '@/assets/quizzes/professional-subject/gradients-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'gradients-wise'

export default function GradientsWiseQuizPage() {
  const questions = gradientsWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Gradients Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
