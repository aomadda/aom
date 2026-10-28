'use client'

import { codeOnWages2019 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/code-on-wages-2019'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'code-on-wages-2019'
const CATEGORY_ID = 'code-on-wages-2019'

export default function CodeOnWages2019Page() {
  const questions = codeOnWages2019.codeOnWages2019 ?? []

  return (
    <AomExamTest
      title="Code on Wages 2019"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
