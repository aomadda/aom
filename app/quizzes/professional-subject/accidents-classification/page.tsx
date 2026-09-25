'use client'

import { accidentsClassification } from '@/assets/quizzes/professional-subject/accidents-classification'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'accidents-classification'

export default function AccidentsClassificationQuizPage() {
  const questions = accidentsClassification[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Accidents Classification"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
