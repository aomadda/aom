'use client'

import { aom30Ldce2023 } from '@/assets/aom-tests/aom-previous-years-papers/aom-30%-ldce-2023'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-30%-ldce-2023'

export default function Aom30PercentLdce2023Page() {
  const questions = aom30Ldce2023.quizzes['aom-30-ldce-2023'] ?? []

  return (
    <AomExamTest
      title="AOM 30% LDCE 2023"
      categoryId="aom-30%-ldce-2023"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
