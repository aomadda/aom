'use client'

import { employeesCompensationAct1923Quizzes } from '@/assets/quizzes/establishment-rules/employees-compensation-act-1923'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'employees-compensation-act-1923'
const CATEGORY_ID = 'employees-compensation-act-1923'

export default function EstablishmentRulesQuizPage() {
  const questions = employeesCompensationAct1923Quizzes.quizzes['employees-compensation-act-1923'] ?? []

  return (
    <AomExamTest
      title="Employees Compensation Act 1923"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
