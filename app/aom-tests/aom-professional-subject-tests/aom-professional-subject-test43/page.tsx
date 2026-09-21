'use client'

import { aomProfessionalSubjectTest43 } from '@/assets/aom-tests/aom-professional-subject-tests/aom-professional-subject-test43'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-professional-subject-test-43'

export default function AOMProfessionalSubjectTest43Page() {
  const questions = aomProfessionalSubjectTest43.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Professional Subject Test 43"
      categoryId="aom-professional-subject-tests"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-professional-subject-tests"
      backLabel="Back to AOM Professional Subject Tests"
    />
  )
}
