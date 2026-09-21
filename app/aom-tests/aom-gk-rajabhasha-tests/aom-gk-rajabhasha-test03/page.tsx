'use client'

import { aomGkRajabhashaTest03 } from '@/assets/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test-03'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-gk-rajabhasha-test-03'

export default function AOMGKRajabhashaTest03Page() {
  const questions = aomGkRajabhashaTest03.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM GK & Rajabhasha Test 03"
      categoryId="aom-gk-rajabhasha-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-gk-rajabhasha-tests"
      backLabel="Back to AOM GK & Rajabhasha Tests"
    />
  )
}
