'use client'

import { aomFinanceEstablishmentRulesTest03 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test03'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-finance-establishment-rules-test-03'

export default function AOMFinanceEstablishmentRulesTest03Page() {
  const questions = aomFinanceEstablishmentRulesTest03.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 03"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
