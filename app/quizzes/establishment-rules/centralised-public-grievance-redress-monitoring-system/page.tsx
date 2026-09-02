'use client'

import { centralisedPublicGrievanceRedressMonitoringSystem } from '@/assets/quizzes/establishment-rules/centralised-public-grievance-redress-monitoring-system'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'centralised-public-grievance-redress-monitoring-system'
const CATEGORY_ID = 'centralised-public-grievance-redress-monitoring-system'

export default function EstablishmentRulesQuizPage() {
  const questions = centralisedPublicGrievanceRedressMonitoringSystem.quizzes['centralised-public-grievance-redress-monitoring-system'] ?? []

  return (
    <AomExamTest
      title="Centralised Public Grievance Redress Monitoring System"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
