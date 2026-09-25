'use client'

import { timingsWise } from '@/assets/quizzes/professional-subject/timings-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'timings-wise'

export default function TimingsWiseQuizPage() {
  const questions = timingsWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Timings Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
