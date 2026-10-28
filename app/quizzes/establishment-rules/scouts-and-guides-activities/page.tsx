'use client'

import { scoutsAndGuidesActivities } from '@/assets/quizzes/establishment-rules/scouts-and-guides-activities'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'scouts-and-guides-activities'
const CATEGORY_ID = 'scouts-and-guides-activities'

export default function ScoutsAndGuidesActivitiesPage() {
  const questions = scoutsAndGuidesActivities['scouts-and-guides-activities'] ?? []

  return (
    <AomExamTest
      title="Scouts and Guides Activities"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
