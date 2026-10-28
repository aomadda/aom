'use client'

import { generalDepartmentalCompetitiveExam } from '@/assets/quizzes/establishment-rules/general-departmental-competitive-exam'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'general-departmental-competitive-exam'
const CATEGORY_ID = 'general-departmental-competitive-exam'

export default function GeneralDepartmentalCompetitiveExamPage() {
  const questions =
    generalDepartmentalCompetitiveExam['general-departmental-competitive-exam'] ?? []

  return (
    <AomExamTest
      title="General Departmental Competitive Exam"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
