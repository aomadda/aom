'use client'

import { permanentNegotiatingMachineryQuizzes } from '@/assets/quizzes/establishment-rules/permanent-negotiating-machinery'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'permanent-negotiating-machinery'
const CATEGORY_ID = 'permanent-negotiating-machinery'

export default function EstablishmentRulesQuizPage() {
  const questions = permanentNegotiatingMachineryQuizzes.quizzes['permanent-negotiating-machinery'] ?? []

  return (
    <AomExamTest
      title="Permanent Negotiating Machinery"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
