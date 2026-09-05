'use client'

import { aomFinanceEstablishmentRulesTest01 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test01'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-finance-establishment-rules-test-01'

export default function AOMFinanceEstablishmentRulesTest01Page() {
  const questions = aomFinanceEstablishmentRulesTest01.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 01"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
