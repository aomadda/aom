'use client'

import { planHeads } from '@/assets/quizzes/financial-rules/plan-heads'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'plan-head'
const CATEGORY_ID = 'plan-head'

export default function PlanHeadPage() {
  const questions = planHeads['plan-heads'] ?? []

  return (
    <AomExamTest
      title="Plan Heads"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
