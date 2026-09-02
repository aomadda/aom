'use client'

import { railwayServantDisciplineAppealRules1968 } from '@/assets/quizzes/establishment-rules/railway-servant-discipline-appeal-rules-1968'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-servants-discipline-appeal-rules-1968'
const CATEGORY_ID = 'railway-servants-discipline-appeal-rules-1968'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayServantDisciplineAppealRules1968['railway-servant-discipline-appeal-rules-1968'] ?? []

  return (
    <AomExamTest
      title="Railway Servants (Discipline & Appeal) Rules 1968"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
