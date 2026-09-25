'use client'

import { wagonsData } from '@/assets/quizzes/professional-subject/wagons-data'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'wagons-data'

export default function WagonsDataQuizPage() {
  const questions = wagonsData[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Wagons Data"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
