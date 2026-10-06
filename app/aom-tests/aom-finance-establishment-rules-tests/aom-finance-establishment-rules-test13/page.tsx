'use client'

import { aomFinanceEstablishmentRulesTest13 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test13'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { AomExamQuestion, toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-13'
const SOURCE_ID = 'aom-finance-establishment-rules-test13'

export default function AOMFinanceEstablishmentRulesTest13Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest13.test[SOURCE_ID] ?? [] as unknown as AomExamQuestion[],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 13"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
