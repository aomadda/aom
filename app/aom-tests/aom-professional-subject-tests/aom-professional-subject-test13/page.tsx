'use client'

import { aomProfessionalSubjectTest13 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test13'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-13'

export default function AOMProfessionalSubjectTest13Page() {
  const questions = aomProfessionalSubjectTest13.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 13"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
