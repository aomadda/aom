'use client'

import { aomProfessionalSubjectTest15 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test15'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-15'

export default function AOMProfessionalSubjectTest15Page() {
  const questions = aomProfessionalSubjectTest15.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 15"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
