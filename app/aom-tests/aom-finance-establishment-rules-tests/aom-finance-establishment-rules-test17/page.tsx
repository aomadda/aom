'use client'

import { aomFinanceEstablishmentRulesTest17 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test17'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { AomExamQuestion, toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-17'
const SOURCE_ID = 'aom-finance-establishment-rules-test17'

export default function AOMFinanceEstablishmentRulesTest17Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest17.test[SOURCE_ID] ?? [] as unknown as AomExamQuestion[],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 17"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
