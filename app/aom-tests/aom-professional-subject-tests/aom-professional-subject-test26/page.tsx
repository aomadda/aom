'use client'

import { aomProfessionalSubjectTest26 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test26'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-26'

export default function AOMProfessionalSubjectTest26Page() {
  const questions = aomProfessionalSubjectTest26.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 26"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
