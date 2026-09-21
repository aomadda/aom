'use client'

import { aomGkRajabhashaTest26 } from '@/assets/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test-26'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-gk-rajabhasha-test-26'

export default function AOMGKRajabhashaTest26Page() {
  const questions = aomGkRajabhashaTest26.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM GK & Rajabhasha Test 26"
      categoryId="aom-gk-rajabhasha-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-gk-rajabhasha-tests"
      backLabel="Back to AOM GK & Rajabhasha Tests"
    />
  )
}
