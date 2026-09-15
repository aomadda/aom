'use client'

import { aomProfessionalSubjectTest21 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test21'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-21'

export default function AOMProfessionalSubjectTest21Page() {
  const questions = aomProfessionalSubjectTest21.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 21"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
