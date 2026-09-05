'use client'

import { aomFinanceEstablishmentRulesTest02 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test02'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-finance-establishment-rules-test-02'

export default function AOMFinanceEstablishmentRulesTest02Page() {
  const questions = aomFinanceEstablishmentRulesTest02.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 02"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
