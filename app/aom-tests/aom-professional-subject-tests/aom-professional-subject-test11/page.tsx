'use client'

import { aomProfessionalSubjectTest11 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test11'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-11'

export default function AOMProfessionalSubjectTest11Page() {
  const questions = aomProfessionalSubjectTest11.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 11"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
