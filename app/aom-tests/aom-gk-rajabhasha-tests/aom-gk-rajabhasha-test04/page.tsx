'use client'

import { aomGkRajabhashaTest04 } from '@/assets/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test-04'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-gk-rajabhasha-test-04'

export default function AOMGKRajabhashaTest04Page() {
  const questions = aomGkRajabhashaTest04.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM GK & Rajabhasha Test 04"
      categoryId="aom-gk-rajabhasha-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-gk-rajabhasha-tests"
      backLabel="Back to AOM GK & Rajabhasha Tests"
    />
  )
}
