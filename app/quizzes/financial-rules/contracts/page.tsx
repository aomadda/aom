'use client'

import { contracts } from '@/assets/quizzes/financial-rules/contracts'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'contracts'
const CATEGORY_ID = 'contracts'

export default function ContractsPage() {
  const questions = contracts.contracts ?? []

  return (
    <AomExamTest
      title="Contracts"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
