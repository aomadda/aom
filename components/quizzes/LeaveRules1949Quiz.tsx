'use client'

import AomExamTest from '@/components/aom-tests/AomExamTest'
import { toAomExamQuestions, type AomExamQuestionInput } from '@/lib/aom-exam'

export default function LeaveRules1949Quiz({
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
      categoryId="railway-servants-leave-rules-1949"
      quizId={quizId}
      questions={toAomExamQuestions(questions)}
      backHref="/quizzes/establishment-rules/railway-servants-leave-rules-1949"
      backLabel="Back to Railway Servants (Leave) Rules 1949"
    />
  )
}
