'use client'

import { aomProfessionalSubjectTest07 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test07'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-07'

export default function AOMProfessionalSubjectTest07Page() {
  const questions = aomProfessionalSubjectTest07.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 07"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
