'use client'

import { aom70Ldce2025FirstBatch } from '@/assets/aom-tests/aom-previous-years-papers/aom-70%-ldce-2025-first-batch'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-70%-ldce-2025-first-batch'

export default function Aom70PercentLdce2025FirstBatchPage() {
  const questions = aom70Ldce2025FirstBatch.quizzes['aom-70-ldce-2025-first-batch'] ?? []

  return (
    <AomExamTest
      title="AOM 70% LDCE 2025 First Batch"
      categoryId="aom-70%-ldce-2025-first-batch"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
