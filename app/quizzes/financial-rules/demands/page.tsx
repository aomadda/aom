'use client'

import { demands } from '@/assets/quizzes/financial-rules/demands'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'demands'
const CATEGORY_ID = 'demands'

export default function DemandsPage() {
  const questions = demands.demands ?? []

  return (
    <AomExamTest
      title="Demands"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
