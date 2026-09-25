'use client'

import { numbersWise } from '@/assets/quizzes/professional-subject/numbers-wise'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'numbers-wise'

export default function NumbersWiseQuizPage() {
  const questions = numbersWise[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Numbers Wise"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
