'use client'

import { operatingStatistics } from '@/assets/quizzes/professional-subject/operating-statistics'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'operating-statistics'

export default function OperatingStatisticsQuizPage() {
  const questions = operatingStatistics[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Operating Statistics"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
