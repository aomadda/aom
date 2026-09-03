'use client'

import { aomProfessionalSubjectTest02 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test02'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-02'

export default function AOMProfessionalSubjectTest02Page() {
  const questions = aomProfessionalSubjectTest02.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 02"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
