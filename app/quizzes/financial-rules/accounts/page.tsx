'use client'

import { accounts } from '@/assets/quizzes/financial-rules/accounts'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'accounts'
const CATEGORY_ID = 'accounts'

export default function FinancialRulesQuizPage() {
  const questions = accounts.accounts ?? []

  return (
    <AomExamTest
      title="Accounts"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
