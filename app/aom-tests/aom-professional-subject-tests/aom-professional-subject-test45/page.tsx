'use client'

import { aomProfessionalSubjectTest45 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test45'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-45'

export default function AOMProfessionalSubjectTest45Page() {
  const questions = aomProfessionalSubjectTest45.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 45"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
