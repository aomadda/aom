'use client'

import { wagonTurnRound } from '@/assets/quizzes/professional-subject/wagon-turn-round'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'wagon-turn-round'

export default function WagonTurnRoundQuizPage() {
  const questions = wagonTurnRound[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Wagon Turn Round"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
