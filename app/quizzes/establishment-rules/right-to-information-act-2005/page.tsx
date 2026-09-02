'use client'

import { rightToInformationAct2005 } from '@/assets/quizzes/establishment-rules/right-to-information-act-2005'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'right-to-information-act-2005'
const CATEGORY_ID = 'right-to-information-act-2005'

export default function EstablishmentRulesQuizPage() {
  const questions = (rightToInformationAct2005['right-to-information-act-2005'] ?? []).filter((q) => q.question && q.question.trim() !== '')

  return (
    <AomExamTest
      title="Right to Information Act 2005"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
