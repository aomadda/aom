'use client'

import { tenders } from '@/assets/quizzes/financial-rules/tenders'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'tenders'
const CATEGORY_ID = 'tenders'

export default function FinancialRulesQuizPage() {
  const questions = tenders.tenders ?? []

  return (
    <AomExamTest
      title="Tenders"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
