'use client'

import { occupationalSafetyHealthAndWorkingConditionsCode2020 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/occupational-safety-health-and-working-conditions-code-2020'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'occupational-safey-health-and-working-conditions-code-2020'
const CATEGORY_ID = 'occupational-safey-health-and-working-conditions-code-2020'

export default function OccupationalSafetyHealthAndWorkingConditionsCode2020Page() {
  const questions =
    occupationalSafetyHealthAndWorkingConditionsCode2020.occupationalSafetyHealthAndWorkingConditionsCode2020 ??
    []

  return (
    <AomExamTest
      title="Occupational Safety, Health and Working Conditions Code 2020"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
