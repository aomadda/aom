'use client'

import { aomProfessionalSubjectTest36 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test36'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-36'

export default function AOMProfessionalSubjectTest36Page() {
  const questions = aomProfessionalSubjectTest36.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 36"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
