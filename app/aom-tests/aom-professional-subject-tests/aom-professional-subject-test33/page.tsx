'use client'

import { aomProfessionalSubjectTest33 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test33'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-33'

export default function AOMProfessionalSubjectTest33Page() {
  const questions = aomProfessionalSubjectTest33.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 33"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
