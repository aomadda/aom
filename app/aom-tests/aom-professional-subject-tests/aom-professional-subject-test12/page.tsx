'use client'

import { aomProfessionalSubjectTest12 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test12'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-12'

export default function AOMProfessionalSubjectTest12Page() {
  const questions = aomProfessionalSubjectTest12.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 12"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
