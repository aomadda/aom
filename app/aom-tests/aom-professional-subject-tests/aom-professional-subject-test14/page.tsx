'use client'

import { aomProfessionalSubjectTest14 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test14'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-14'

export default function AOMProfessionalSubjectTest14Page() {
  const questions = aomProfessionalSubjectTest14.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 14"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
