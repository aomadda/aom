'use client'

import { nationalAndRestrictedHolidayQuizzes } from '@/assets/quizzes/establishment-rules/national-and-restricted-holiday'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'national-and-restricted-holiday'
const CATEGORY_ID = 'national-and-restricted-holiday'

export default function NationalAndRestrictedHolidayPage() {
  const questions =
    nationalAndRestrictedHolidayQuizzes.quizzes['national-and-restricted-holiday'] ?? []

  return (
    <AomExamTest
      title="National and Restricted Holiday"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
