'use client'

import { aomFinanceEstablishmentRulesTest26 } from '@/assets/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test26'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions } from '@/lib/aom-exam'

const QUIZ_ID = 'aom-finance-establishment-rules-test-26'
const SOURCE_ID = 'aom-finance-establishment-rules-test26'

export default function AOMFinanceEstablishmentRulesTest26Page() {
  const paper = aomFinanceEstablishmentRulesTest26.test[SOURCE_ID]
  const questions = toAomExamQuestions(paper ? [paper] : [])

  return (
    <AomExamTest
      title="AOM Finance & Establishment Rules Test 26"
      categoryId="aom-finance-establishment-rules-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-finance-establishment-rules-tests"
      backLabel="Back to AOM Finance & Establishment Rules Tests"
    />
  )
}
