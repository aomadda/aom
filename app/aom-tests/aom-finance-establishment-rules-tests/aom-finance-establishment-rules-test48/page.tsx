'use client'

import { aomFinanceEstablishmentRulesTest48 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test48'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { AomExamQuestion, toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-48'
const SOURCE_ID = 'aom-finance-establishment-rules-test48'

export default function AOMFinanceEstablishmentRulesTest48Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest48.test[SOURCE_ID] ?? [] as unknown as AomExamQuestion[],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 48"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
