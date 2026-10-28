'use client'

import { minesAct1952 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/mines-act-1952'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'mines-act-1952'
const CATEGORY_ID = 'mines-act-1952'

export default function MinesAct1952Page() {
  const questions = minesAct1952.minesAct1952 ?? []

  return (
    <AomExamTest
      title="Mines Act 1952"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
