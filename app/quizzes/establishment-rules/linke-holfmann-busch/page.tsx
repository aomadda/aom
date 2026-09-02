'use client'

import { linkeHofmannBusch } from '@/assets/quizzes/establishment-rules/linke-hofmann-busch'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'linke-holfmann-busch'
const CATEGORY_ID = 'linke-holfmann-busch'

export default function EstablishmentRulesQuizPage() {
  const questions = linkeHofmannBusch['linke-hofmann-busch'] ?? []

  return (
    <AomExamTest
      title="Linke Hofmann Busch (LHB)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
