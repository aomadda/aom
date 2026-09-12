'use client'

import { aomProfessionalSubjectTest17 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test17'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-17'

export default function AOMProfessionalSubjectTest17Page() {
  const questions = aomProfessionalSubjectTest17.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 17"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
