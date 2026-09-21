'use client'

import { aomFinanceEstablishmentRulesTest11 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test11'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-11'
const SOURCE_ID = 'aom-finance-establishment-rules-test11'

export default function AOMFinanceEstablishmentRulesTest11Page() {
  const paper = aomFinanceEstablishmentRulesTest11.test[SOURCE_ID]
  const questions = toAomExamQuestions(paper ? [paper] : [])

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 11"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
