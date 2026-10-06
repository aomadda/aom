'use client'

import { aomFinanceEstablishmentRulesTest06 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test06'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-06'
const SOURCE_ID = 'aom-finance-establishment-rules-test06'

export default function AOMFinanceEstablishmentRulesTest06Page() {
  const questions = toAomExamQuestions(
    aomFinanceEstablishmentRulesTest06.test[SOURCE_ID]?.questions ?? [],
  )

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 06"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
