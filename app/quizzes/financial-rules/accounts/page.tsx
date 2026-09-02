'use client'

import { financialRulesQuizzes } from '@/assets/quizzes/financial-rules'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'accounts'
const CATEGORY_ID = 'accounts'

export default function FinancialRulesQuizPage() {
  const questions = financialRulesQuizzes.quizzes['accounts'] ?? []

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
