'use client'

import { humanResourceManagementSystem } from '@/assets/quizzes/establishment-rules/human-resource-management-system'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'human-resource-management-system'
const CATEGORY_ID = 'human-resource-management-system'

export default function EstablishmentRulesQuizPage() {
  const questions = humanResourceManagementSystem['human-resource-management-system'] ?? []

  return (
    <AomExamTest
      title="Human Resource Management System (HRMS)"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
