'use client'

import { aomProfessionalSubjectTest48 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test48'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-48'

export default function AOMProfessionalSubjectTest48Page() {
  const questions = aomProfessionalSubjectTest48.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 48"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
