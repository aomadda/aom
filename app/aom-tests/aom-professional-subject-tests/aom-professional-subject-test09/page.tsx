'use client'

import { aomProfessionalSubjectTest09 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test09'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-09'

export default function AOMProfessionalSubjectTest09Page() {
  const questions = aomProfessionalSubjectTest09.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 09"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
