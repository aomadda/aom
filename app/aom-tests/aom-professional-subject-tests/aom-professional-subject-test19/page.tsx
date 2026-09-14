'use client'

import { aomProfessionalSubjectTest19 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test19'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-19'

export default function AOMProfessionalSubjectTest19Page() {
  const questions = aomProfessionalSubjectTest19.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 19"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
