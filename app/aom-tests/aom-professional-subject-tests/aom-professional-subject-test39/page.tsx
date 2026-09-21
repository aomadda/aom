'use client'

import { aomProfessionalSubjectTest39 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test39'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-39'

export default function AOMProfessionalSubjectTest39Page() {
  const questions = aomProfessionalSubjectTest39.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 39"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
