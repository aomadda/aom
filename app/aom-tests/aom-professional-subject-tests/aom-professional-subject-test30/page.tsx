'use client'

import { aomProfessionalSubjectTest30 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test30'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-30'

export default function AOMProfessionalSubjectTest30Page() {
  const questions = aomProfessionalSubjectTest30.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 30"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
