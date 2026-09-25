'use client'

import { authorityForms } from '@/assets/quizzes/professional-subject/authority-forms'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'authority-forms'

export default function AuthorityFormsQuizPage() {
  const questions = authorityForms[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Authority Forms"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
