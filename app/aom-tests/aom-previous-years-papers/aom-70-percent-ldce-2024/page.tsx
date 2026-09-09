'use client'

import { aom70Ldce2024 } from '@/assets/aom-tests/aom-previous-years-papers/aom-70%-ldce-2024'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-70%-ldce-2024'

export default function Aom70PercentLdce2024Page() {
  const questions = aom70Ldce2024.quizzes['aom-70-ldce-2024'] ?? []

  return (
    <AomExamTest
      title="AOM 70% LDCE 2024"
      categoryId="aom-70%-ldce-2024"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
