'use client'

import { aomFinanceEstablishmentRulesTest05 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test05'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-finance-establishment-rules-test-05'

export default function AOMFinanceEstablishmentRulesTest05Page() {
  const questions =
    aomFinanceEstablishmentRulesTest05.tests[QUIZ_ID]?.questions ?? []

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 05"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
