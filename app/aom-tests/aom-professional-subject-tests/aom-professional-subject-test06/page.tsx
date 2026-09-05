'use client'

import { aomProfessionalSubjectTest06 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test06'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-06'

export default function AOMProfessionalSubjectTest06Page() {
  const questions = aomProfessionalSubjectTest06.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 06"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
