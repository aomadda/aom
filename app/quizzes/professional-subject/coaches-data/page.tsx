'use client'

import { coachesData } from '@/assets/quizzes/professional-subject/coaches-data'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'coaches-data'

export default function CoachesDataQuizPage() {
  const questions = coachesData[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Coaches Data"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
