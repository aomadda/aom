'use client'

import { finance } from '@/assets/quizzes/financial-rules/finance'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'finance'
const CATEGORY_ID = 'finance'

export default function FinancialRulesQuizPage() {
  const questions = finance.finance ?? []

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
