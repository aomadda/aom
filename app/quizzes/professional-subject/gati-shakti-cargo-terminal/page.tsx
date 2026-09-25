'use client'

import { gatiShaktiCargoTerminal } from '@/assets/quizzes/professional-subject/gati-shakti-cargo-terminal'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'gati-shakti-cargo-terminal'

export default function GatiShaktiCargoTerminalQuizPage() {
  const questions = gatiShaktiCargoTerminal[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Gati Shakti Cargo Terminal"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
