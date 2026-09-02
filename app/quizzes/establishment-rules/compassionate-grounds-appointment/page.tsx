'use client'

import { compassionateGroundsAppointment } from '@/assets/quizzes/establishment-rules/compassionate-grounds-appointment'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'compassionate-grounds-appointment'
const CATEGORY_ID = 'compassionate-grounds-appointment'

export default function EstablishmentRulesQuizPage() {
  const questions = compassionateGroundsAppointment['compassionate-grounds-appointment'] ?? []

  return (
    <AomExamTest
      title="Compassionate Grounds Appointment (CGA)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
