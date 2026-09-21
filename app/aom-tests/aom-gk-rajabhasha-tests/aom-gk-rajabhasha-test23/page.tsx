'use client'

import { aomGkRajabhashaTest23 } from '@/assets/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test-23'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-gk-rajabhasha-test-23'

export default function AOMGKRajabhashaTest23Page() {
  const questions = aomGkRajabhashaTest23.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM GK & Rajabhasha Test 23"
      categoryId="aom-gk-rajabhasha-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-gk-rajabhasha-tests"
      backLabel="Back to AOM GK & Rajabhasha Tests"
    />
  )
}
