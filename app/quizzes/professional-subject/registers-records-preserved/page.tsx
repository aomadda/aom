'use client'

import { registersRecordsPreserved } from '@/assets/quizzes/professional-subject/registers-records-preserved'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'registers-records-preserved'

export default function RegistersRecordsPreservedQuizPage() {
  const questions = registersRecordsPreserved[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Registers Records Preserved"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
