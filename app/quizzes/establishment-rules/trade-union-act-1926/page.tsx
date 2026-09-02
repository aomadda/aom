'use client'

import { tradeUnionAct1926Quizzes } from '@/assets/quizzes/establishment-rules/trade-union-act-1926'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'trade-union-act-1926'
const CATEGORY_ID = 'trade-union-act-1926'

export default function EstablishmentRulesQuizPage() {
  const questions = tradeUnionAct1926Quizzes.quizzes['trade-union-act-1926'] ?? []

  return (
    <AomExamTest
      title="Trade Union Act 1926"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
