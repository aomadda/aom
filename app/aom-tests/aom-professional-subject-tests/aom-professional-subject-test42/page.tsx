'use client'

import { aomProfessionalSubjectTest42 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test42'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-42'

export default function AOMProfessionalSubjectTest42Page() {
  const questions = aomProfessionalSubjectTest42.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 42"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
