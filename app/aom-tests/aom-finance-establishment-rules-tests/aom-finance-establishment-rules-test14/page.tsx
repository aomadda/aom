'use client'

import { aomFinanceEstablishmentRulesTest14 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test14'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { AomExamQuestion, toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-14'
const SOURCE_ID = 'aom-finance-establishment-rules-test14'

export default function AOMFinanceEstablishmentRulesTest14Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest14.test[SOURCE_ID] ?? [] as unknown as AomExamQuestion[],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 14"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
