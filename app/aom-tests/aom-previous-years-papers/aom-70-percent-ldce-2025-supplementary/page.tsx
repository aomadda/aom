'use client'

import { aom70Ldce2025Supplementary } from '@/assets/aom-tests/aom-previous-years-papers/aom-70%-ldce-2025-supplementary'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-70%-ldce-2025-supplementary'

export default function Aom70PercentLdce2025SupplementaryPage() {
  const questions = aom70Ldce2025Supplementary.quizzes['aom-70-ldce-2025-supplementary'] ?? []

  return (
    <AomExamTest
      title="AOM 70% LDCE 2025 Supplementary"
      categoryId="aom-70%-ldce-2025-supplementary"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
