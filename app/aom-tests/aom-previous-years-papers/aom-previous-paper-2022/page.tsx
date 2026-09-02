'use client'

import { aomPreviousPaper2022 } from '@/assets/quizzes/aom-previous-papers/aom-previous-paper-2022/aom-previous-paper-2022'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'aom-previous-paper-2022'

export default function AomPreviousPaper2022Page() {
  const questions = aomPreviousPaper2022.quizzes[QUIZ_ID] ?? []

  return (
    <AomExamTest
      title="AOM Previous Paper 2022"
      categoryId="aom-previous-paper-2022"
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/aom-tests/aom-previous-years-papers"
      backLabel="Back to AOM Previous Years Papers"
    />
  )
}
