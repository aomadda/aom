'use client'

import { premiumSpecialTrains } from '@/assets/quizzes/professional-subject/premium-special-trains'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'premium-special-trains'

export default function PremiumSpecialTrainsQuizPage() {
  const questions = premiumSpecialTrains[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Premium Special Trains"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
