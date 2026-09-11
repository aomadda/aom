'use client'

import { aomProfessionalSubjectTest10 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test10'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-10'

export default function AOMProfessionalSubjectTest10Page() {
  const questions = aomProfessionalSubjectTest10.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 10"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
