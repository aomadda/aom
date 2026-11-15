'use client'

import { aom70Ldce2025SecondBatch } from '@/assets/aom-tests/aom-previous-years-papers/aom-70%-ldce-2025-second-batch'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-70%-ldce-2025-second-batch'

export default function Aom70PercentLdce2025SecondBatchPage() {
  const questions = aom70Ldce2025SecondBatch.quizzes['aom-70-ldce-2025-second-batch'] ?? []

  return (
    <AomExamTest
      title="AOM 70% LDCE 2025 Second Batch"
      categoryId="aom-70%-ldce-2025-second-batch"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
