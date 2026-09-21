'use client'

import { aomFinanceEstablishmentRulesTest15 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test15'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-15'
const SOURCE_ID = 'aom-finance-establishment-rules-test15'

export default function AOMFinanceEstablishmentRulesTest15Page() {
  const paper = aomFinanceEstablishmentRulesTest15.test[SOURCE_ID]
  const questions = toAomExamQuestions(paper ? [paper] : [])

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 15"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
