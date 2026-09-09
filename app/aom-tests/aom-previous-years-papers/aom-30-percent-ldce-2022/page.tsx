'use client'

import { aom30PercentLdce2022 } from '@/assets/aom-tests/aom-previous-years-papers/aom-30%-ldce-2022'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-30%-ldce-2022'

export default function Aom30PercentLdce2022Page() {
  const questions = aom30PercentLdce2022.tests[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM 30% LDCE 2022"
      categoryId="aom-30%-ldce-2022"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
