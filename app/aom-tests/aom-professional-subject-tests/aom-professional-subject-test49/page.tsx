'use client'

import { aomProfessionalSubjectTest49 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test49'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-49'

export default function AOMProfessionalSubjectTest49Page() {
  const questions = aomProfessionalSubjectTest49.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 49"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
