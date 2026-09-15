'use client'

import { aomProfessionalSubjectTest22 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test22'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-22'

export default function AOMProfessionalSubjectTest22Page() {
  const questions = aomProfessionalSubjectTest22.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 22"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
