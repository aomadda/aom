'use client'

import { aomFinanceEstablishmentRulesTest07 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test07'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-07'
const SOURCE_ID = 'aom-finance-establishment-rules-test07'

export default function AOMFinanceEstablishmentRulesTest07Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest07.test[SOURCE_ID]?.questions ?? [],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 07"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
