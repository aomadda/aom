'use client'

import { aom30Ldce2024 } from '@/assets/aom-tests/aom-previous-years-papers/aom-30%-ldce-2024'
import AomExamTest, { type AomExamPaperSection } from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-30%-ldce-2024'

export default function Aom30PercentLdce2024Page() {
  const professional = aom30Ldce2024.tests['professional-subject'] ?? []
  const gkRajabhasha = aom30Ldce2024.tests['gk-rajabhasha'] ?? []
  const establishment = aom30Ldce2024.tests['establishment-finance-rules'] ?? []
  const questions = [...professional, ...gkRajabhasha, ...establishment]
  const sections: AomExamPaperSection[] = [
    {
      id: 'professional-subject',
      title: 'Professional Subject',
      startIndex: 0,
      count: professional.length,
    },
    {
      id: 'gk-rajabhasha',
      title: 'GK & Rajabhasha',
      startIndex: professional.length,
      count: gkRajabhasha.length,
    },
    {
      id: 'establishment-finance-rules',
      title: 'Establishment & Financial Rules',
      startIndex: professional.length + gkRajabhasha.length,
      count: establishment.length,
    },
  ].filter((section) => section.count > 0)

  return (
    <AomExamTest
      title="AOM 30% LDCE 2024"
      categoryId="aom-30%-ldce-2024"
      quizId={QUIZ_ID}
      questions={questions}
      sections={sections}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
