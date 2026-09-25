'use client'

import { stationWorkingRules } from '@/assets/quizzes/professional-subject/station-working-rules'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'station-working-rules'

export default function StationWorkingRulesQuizPage() {
  const questions = stationWorkingRules[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Station Working Rules"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
