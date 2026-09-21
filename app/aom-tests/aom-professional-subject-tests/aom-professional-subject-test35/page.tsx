'use client'

import { aomProfessionalSubjectTest35 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test35'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-35'

export default function AOMProfessionalSubjectTest35Page() {
  const questions = aomProfessionalSubjectTest35.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 35"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
