'use client'

import { accidentInquiries } from '@/assets/quizzes/professional-subject/accident-inquiries'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'accident-inquiries'

export default function AccidentInquiriesQuizPage() {
  const questions = accidentInquiries[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Accident Inquiries"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
