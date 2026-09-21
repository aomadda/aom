'use client'

import { aomProfessionalSubjectTest46 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test46'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-46'

export default function AOMProfessionalSubjectTest46Page() {
  const questions = aomProfessionalSubjectTest46.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 46"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
