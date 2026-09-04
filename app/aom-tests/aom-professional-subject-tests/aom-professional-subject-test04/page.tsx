'use client'

import { aomProfessionalSubjectTest04 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test04'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-04'

export default function AOMProfessionalSubjectTest04Page() {
  const questions = aomProfessionalSubjectTest04.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 04"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
