'use client'

import { modifiedAssuredCareerProgressionQuizzes } from '@/assets/quizzes/establishment-rules/modified-assured-career-progression'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'modified-assured-career-progression'
const CATEGORY_ID = 'modified-assured-career-progression'

export default function EstablishmentRulesQuizPage() {
  const questions = modifiedAssuredCareerProgressionQuizzes.quizzes['modified-assured-career-progression'] ?? []

  return (
    <AomExamTest
      title="Modified Assured Career Progression"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
