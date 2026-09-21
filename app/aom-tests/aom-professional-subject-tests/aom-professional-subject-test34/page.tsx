'use client'

import { aomProfessionalSubjectTest34 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test34'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-34'

export default function AOMProfessionalSubjectTest34Page() {
  const questions = aomProfessionalSubjectTest34.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 34"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
