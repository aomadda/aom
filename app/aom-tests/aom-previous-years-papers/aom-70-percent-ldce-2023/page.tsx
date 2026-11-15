'use client'

import { aom70Ldce2023 } from '@/assets/aom-tests/aom-previous-years-papers/aom-70%-ldce-2023'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-70%-ldce-2023'

export default function Aom70PercentLdce2023Page() {
  const questions = aom70Ldce2023.quizzes['aom-70-ldce-2023'] ?? []

  return (
    <AomExamTest
      title="AOM 70% LDCE 2023"
      categoryId="aom-70%-ldce-2023"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
