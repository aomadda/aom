'use client'

import { aomProfessionalSubjectTest44 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test44'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-44'

export default function AOMProfessionalSubjectTest44Page() {
  const questions = aomProfessionalSubjectTest44.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 44"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
