'use client'

import { governmentEMarketplace } from '@/assets/quizzes/financial-rules/government-e-marketplace'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'government-e-marketplace'
const CATEGORY_ID = 'government-e-marketplace'

export default function GovernmentEMarketplacePage() {
  const questions = governmentEMarketplace['government-e-marketplace'] ?? []

  return (
    <AomExamTest
      title="Government e-Marketplace"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
