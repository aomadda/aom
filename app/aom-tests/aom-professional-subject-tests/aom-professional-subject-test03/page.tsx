'use client'

import { aomProfessionalSubjectTest03 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test03'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-03'

export default function AOMProfessionalSubjectTest03Page() {
  const questions = aomProfessionalSubjectTest03.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 03"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
