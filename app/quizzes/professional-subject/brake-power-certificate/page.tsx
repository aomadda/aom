'use client'

import { brakePowerCertificate } from '@/assets/quizzes/professional-subject/brake-power-certificate'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'brake-power-certificate'

export default function BrakePowerCertificateQuizPage() {
  const questions = brakePowerCertificate[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Brake Power Certificate"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
