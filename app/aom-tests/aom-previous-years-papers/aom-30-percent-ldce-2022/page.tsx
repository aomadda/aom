'use client'

import { aom30PercentLdce2022 } from '@/assets/aom-tests/aom-previous-years-papers/aom-30%-ldce-2022'
import AomExamTest, { type AomExamPaperSection } from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-30%-ldce-2022'

export default function Aom30PercentLdce2022Page() {
  const professional = aom30PercentLdce2022.tests['professional-subject'] ?? []
  const gkRajabhasha = aom30PercentLdce2022.tests['gk-rajabhasha'] ?? []
  const establishment = aom30PercentLdce2022.tests['establishment-finance-rules'] ?? []
  const questions = [...professional, ...gkRajabhasha, ...establishment]
  const sections: AomExamPaperSection[] = [
    {
      id: 'professional-subject',
      title: 'Professional Subject',
      startIndex: 0,
      count: professional.length,
      attemptLimit: 80,
    },
    {
      id: 'gk-rajabhasha',
      title: 'GK & Rajabhasha',
      startIndex: professional.length,
      count: gkRajabhasha.length,
      attemptLimit: 40,
    },
    {
      id: 'establishment-finance-rules',
      title: 'Establishment & Financial Rules',
      startIndex: professional.length + gkRajabhasha.length,
      count: establishment.length,
      attemptLimit: 30,
    },
  ].filter((section) => section.count > 0)

  return (
    <AomExamTest
      title="AOM 30% LDCE 2022"
      categoryId="aom-30%-ldce-2022"
      quizId={QUIZ_ID}
      questions={questions}
      sections={sections}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
