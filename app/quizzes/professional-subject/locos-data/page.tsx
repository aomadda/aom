'use client'

import { locosData } from '@/assets/quizzes/professional-subject/locos-data'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'locos-data'

export default function LocosDataQuizPage() {
  const questions = locosData[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Locos Data"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
