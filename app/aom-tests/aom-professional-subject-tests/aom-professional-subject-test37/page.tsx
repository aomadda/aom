'use client'

import { aomProfessionalSubjectTest37 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test37'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-37'

export default function AOMProfessionalSubjectTest37Page() {
  const questions = aomProfessionalSubjectTest37.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 37"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
