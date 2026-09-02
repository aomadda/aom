'use client'

import { aomPreviousPapersQuizzes } from '@/assets/quizzes/aom-previous-papers/aom-previous-papers-2026/aom-previous-papers-2026'
import AomExamTest, { type AomExamPaperSection } from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-previous-papers-2026'

export default function AomPreviousPapers2026Page() {
  const professional = aomPreviousPapersQuizzes.quizzes['professional-subject'] ?? []
  const gkRajabhasha = aomPreviousPapersQuizzes.quizzes['gk-rajabhasha'] ?? []
  const establishment = aomPreviousPapersQuizzes.quizzes['establishment-finance-rules'] ?? []
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
      title="AOM Previous Papers 2026"
      categoryId="aom-previous-papers-2026"
      quizId={QUIZ_ID}
      questions={questions}
      sections={sections}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
