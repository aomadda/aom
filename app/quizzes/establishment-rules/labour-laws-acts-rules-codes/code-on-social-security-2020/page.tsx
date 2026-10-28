'use client'

import { codeOnSocialSecurity2020 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/code-on-social-security-2020'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'code-on-social-security-2020'
const CATEGORY_ID = 'code-on-social-security-2020'

export default function CodeOnSocialSecurity2020Page() {
  const questions = codeOnSocialSecurity2020.codeOnSocialSecurity2020 ?? []

  return (
    <AomExamTest
      title="Code on Social Security 2020"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
