'use client'

import { aomProfessionalSubjectTest29 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test29'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-29'

export default function AOMProfessionalSubjectTest29Page() {
  const questions = aomProfessionalSubjectTest29.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 29"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
