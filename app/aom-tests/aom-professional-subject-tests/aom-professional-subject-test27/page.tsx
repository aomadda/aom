'use client'

import { aomProfessionalSubjectTest27 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test27'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-27'

export default function AOMProfessionalSubjectTest27Page() {
  const questions = aomProfessionalSubjectTest27.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 27"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
