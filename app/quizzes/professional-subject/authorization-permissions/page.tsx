'use client'

import { authorizationPermissions } from '@/assets/quizzes/professional-subject/authorization-permissions'
import ProfessionalSubjectQuizPage from '@/components/quizzes/ProfessionalSubjectQuizPage'

const QUIZ_ID = 'authorization-permissions'

export default function AuthorizationPermissionsQuizPage() {
  const questions = authorizationPermissions[QUIZ_ID] ?? []

  return (
    <ProfessionalSubjectQuizPage
      title="Authorization Permissions"
      quizId={QUIZ_ID}
      questions={questions}
    />
  )
}
