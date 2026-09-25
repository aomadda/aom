'use client'

import { distanceWise } from '@/assets/quizzes/professional-subject/distance-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'distance-wise'

export default function DistanceWiseQuizPage() {
  const questions = distanceWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Distance Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
