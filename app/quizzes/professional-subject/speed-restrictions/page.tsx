'use client'

import { speedRestrictions } from '@/assets/quizzes/professional-subject/speed-restrictions'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'speed-restrictions'

export default function SpeedRestrictionsQuizPage() {
  const questions = speedRestrictions[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Speed Restrictions"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
