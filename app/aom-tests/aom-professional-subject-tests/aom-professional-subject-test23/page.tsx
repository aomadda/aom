'use client'

import { aomProfessionalSubjectTest23 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test23'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-23'

export default function AOMProfessionalSubjectTest23Page() {
  const questions = aomProfessionalSubjectTest23.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 23"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
