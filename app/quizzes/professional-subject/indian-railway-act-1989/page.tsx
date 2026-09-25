'use client'

import { indianRailwayAct1989 } from '@/assets/quizzes/professional-subject/indian-railway-act-1989'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'indian-railway-act-1989'

export default function IndianRailwayAct1989QuizPage() {
  const questions = indianRailwayAct1989[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Indian Railway Act 1989"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
