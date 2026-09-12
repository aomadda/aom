'use client'

import { aomProfessionalSubjectTest18 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test18'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-18'

export default function AOMProfessionalSubjectTest18Page() {
  const questions = aomProfessionalSubjectTest18.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 18"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
