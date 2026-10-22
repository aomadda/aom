'use client'

import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions, type AomExamQuestionInput } from '@/lib/aom-exam'

export default function PassRules1986Quiz({
  title,
  quizId,
  questions,
}: {
  title: string
  quizId: string
  questions: readonly AomExamQuestionInput[]
}) {
  return (
    <AomExamTest
      title={title}
      categoryId="railway-servants-pass-rules-1986"
      quizId={quizId}
      questions={toAomExamQuestions(questions)}
      backHref="/quizzes/establishment-rules/railway-servants-pass-rules-1986"
      backLabel="Back to Railway Servants (Pass) Rules 1986"
    />
  )
}
