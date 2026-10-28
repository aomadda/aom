'use client'

import { employeesProvidentFundAndMiscellaneousProvisionsAct1952 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/employees-provident-fund-and-miscellaneous-provisions-act-1952'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'employees-provident-fund-and-miscellaneous-provisions-act-1952'
const CATEGORY_ID = 'employees-provident-fund-and-miscellaneous-provisions-act-1952'

export default function EmployeesProvidentFundAndMiscellaneousProvisionsAct1952Page() {
  const questions =
    employeesProvidentFundAndMiscellaneousProvisionsAct1952.employeesProvidentFundAndMiscellaneousProvisionsAct1952 ??
    []

  return (
    <AomExamTest
      title="Employees Provident Fund and Miscellaneous Provisions Act 1952"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
