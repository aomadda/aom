'use client'

import { budget } from '@/assets/quizzes/financial-rules/budget'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'budget'
const CATEGORY_ID = 'budget'

export default function BudgetPage() {
  const questions = budget.budget ?? []

  return (
    <AomExamTest
      title="Budget"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
