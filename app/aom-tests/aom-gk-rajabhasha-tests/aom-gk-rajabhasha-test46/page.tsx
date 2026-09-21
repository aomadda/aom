'use client'

import { aomGkRajabhashaTest46 } from '@/assets/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test-46'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-gk-rajabhasha-test-46'

export default function AOMGKRajabhashaTest46Page() {
  const questions = aomGkRajabhashaTest46.test[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM GK & Rajabhasha Test 46"
      categoryId="aom-gk-rajabhasha-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-gk-rajabhasha-tests"
      backLabel="Back to AOM GK & Rajabhasha Tests"
    />
  )
}
