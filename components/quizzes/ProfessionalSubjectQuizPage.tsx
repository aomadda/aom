'use client'

import AomExamTest from '@/components/aom-tests/AomExamTest'
import type { AomExamQuestion } from '@/lib/aom-exam'

type ProfessionalSubjectQuizPageProps = {
  title: string
  quizId: string
  questions: AomExamQuestion[]
}

export default function ProfessionalSubjectQuizPage({
  title,
  quizId,
  questions,
}: ProfessionalSubjectQuizPageProps) {
  return (
    <AomExamTest
      title={title}
      categoryId="professional-subject"
      quizId={quizId}
      questions={questions}
      backHref="/quizzes/professional-subject"
      backLabel="Back to Professional Subject"
    />
  )
}
