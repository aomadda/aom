'use client'

import { establishmentRulesQuizzes } from '@/assets/quizzes/establishment-rules'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'miscelaneous'
const CATEGORY_ID = 'miscelaneous'

export default function EstablishmentRulesQuizPage() {
  const questions = (establishmentRulesQuizzes.quizzes['miscelaneous'] ?? []).filter((q) => q.question && q.question.trim() !== '')

  return (
    <AomExamTest
      title="Miscellaneous"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
