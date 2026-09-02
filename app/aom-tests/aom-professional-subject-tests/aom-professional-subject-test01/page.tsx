'use client'

import { aomProfessionalSubjectTest01 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test01'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-01'

export default function AOMProfessionalSubjectTest01Page() {
  const questions = aomProfessionalSubjectTest01.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 01"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
