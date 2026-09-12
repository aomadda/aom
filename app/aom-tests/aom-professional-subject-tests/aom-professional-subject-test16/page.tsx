'use client'

import { aomProfessionalSubjectTest16 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test16'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-16'

export default function AOMProfessionalSubjectTest16Page() {
  const questions = aomProfessionalSubjectTest16.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 16"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
