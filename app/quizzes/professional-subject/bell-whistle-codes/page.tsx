'use client'

import { bellWhistleCodes } from '@/assets/quizzes/professional-subject/bell-whistle-codes'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'bell-whistle-codes'

export default function BellWhistleCodesQuizPage() {
  const questions = bellWhistleCodes[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Bell Whistle Codes"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
