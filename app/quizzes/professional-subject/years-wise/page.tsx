'use client'

import { yearsWise } from '@/assets/quizzes/professional-subject/years-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'years-wise'

export default function YearsWiseQuizPage() {
  const questions = yearsWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Years Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
