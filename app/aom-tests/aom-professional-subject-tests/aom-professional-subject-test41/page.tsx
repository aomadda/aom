'use client'

import { aomProfessionalSubjectTest41 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test41'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-41'

export default function AOMProfessionalSubjectTest41Page() {
  const questions = aomProfessionalSubjectTest41.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 41"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
