'use client'

import { financialRulesQuizzes } from '@/assets/quizzes/financial-rules'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'finance'
const CATEGORY_ID = 'finance'

export default function FinancialRulesQuizPage() {
  const questions = financialRulesQuizzes.quizzes['finance'] ?? []

  return (
    <AomExamTest
      title="Finance"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
