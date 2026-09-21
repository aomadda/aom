'use client'

import { aomFinanceEstablishmentRulesTest39 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test39'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-39'
const SOURCE_ID = 'aom-finance-establishment-rules-test39'

export default function AOMFinanceEstablishmentRulesTest39Page() {
  const paper = aomFinanceEstablishmentRulesTest39.test[SOURCE_ID]
  const questions = toAomExamQuestions(paper ? [paper] : [])

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 39"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
