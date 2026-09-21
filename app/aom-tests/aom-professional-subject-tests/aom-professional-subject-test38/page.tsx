'use client'

import { aomProfessionalSubjectTest38 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test38'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-38'

export default function AOMProfessionalSubjectTest38Page() {
  const questions = aomProfessionalSubjectTest38.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 38"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
