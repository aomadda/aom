'use client'

import { overDimensionalConsignment } from '@/assets/quizzes/professional-subject/over-dimensional-consignment'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'over-dimensional-consignment'

export default function OverDimensionalConsignmentQuizPage() {
  const questions = overDimensionalConsignment[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Over Dimensional Consignment"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
