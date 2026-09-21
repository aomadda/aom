'use client'

import { aomProfessionalSubjectTest28 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test28'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-28'

export default function AOMProfessionalSubjectTest28Page() {
  const questions = aomProfessionalSubjectTest28.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 28"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
