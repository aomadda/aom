'use client'

import { aomFinanceEstablishmentRulesTest35 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test35'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-35'
const SOURCE_ID = 'aom-finance-establishment-rules-test35'

export default function AOMFinanceEstablishmentRulesTest35Page() {
  const paper = aomFinanceEstablishmentRulesTest35.test[SOURCE_ID]
  const questions = toAomExamQuestions(paper ? [paper] : [])

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 35"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
