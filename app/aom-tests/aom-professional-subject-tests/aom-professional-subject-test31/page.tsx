'use client'

import { aomProfessionalSubjectTest31 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test31'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-31'

export default function AOMProfessionalSubjectTest31Page() {
  const questions = aomProfessionalSubjectTest31.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 31"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
