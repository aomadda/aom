'use client'

import { percentageWise } from '@/assets/quizzes/professional-subject/percentage-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'percentage-wise'

export default function PercentageWiseQuizPage() {
  const questions = percentageWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Percentage Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
