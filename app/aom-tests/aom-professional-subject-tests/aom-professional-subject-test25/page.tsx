'use client'

import { aomProfessionalSubjectTest25 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test25'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-25'

export default function AOMProfessionalSubjectTest25Page() {
  const questions = aomProfessionalSubjectTest25.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 25"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
