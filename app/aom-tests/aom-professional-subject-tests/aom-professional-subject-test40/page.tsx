'use client'

import { aomProfessionalSubjectTest40 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test40'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-40'

export default function AOMProfessionalSubjectTest40Page() {
  const questions = aomProfessionalSubjectTest40.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 40"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
