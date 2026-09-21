'use client'

import { aomProfessionalSubjectTest32 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test32'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-32'

export default function AOMProfessionalSubjectTest32Page() {
  const questions = aomProfessionalSubjectTest32.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 32"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
