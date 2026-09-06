'use client'

import { aomProfessionalSubjectTest08 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test08'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-08'

export default function AOMProfessionalSubjectTest08Page() {
  const questions = aomProfessionalSubjectTest08.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 08"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
