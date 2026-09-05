'use client'

import { aomProfessionalSubjectTest05 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test05'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-05'

export default function AOMProfessionalSubjectTest05Page() {
  const questions = aomProfessionalSubjectTest05.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 05"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
