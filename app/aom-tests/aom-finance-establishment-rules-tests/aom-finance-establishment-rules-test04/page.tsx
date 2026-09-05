'use client'

import { aomFinanceEstablishmentRulesTest04 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test04'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-finance-establishment-rules-test-04'

export default function AOMFinanceEstablishmentRulesTest04Page() {
  const questions =
    aomFinanceEstablishmentRulesTest04.test[QUIZ_ID]?.questions ?? []

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 04"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
