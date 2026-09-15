'use client'

import { aomProfessionalSubjectTest20 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test20'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-20'

export default function AOMProfessionalSubjectTest20Page() {
  const questions = aomProfessionalSubjectTest20.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 20"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
