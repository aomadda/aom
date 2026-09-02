'use client'

import { railwayRecruitmentPostingPromotionQuizzes } from '@/assets/quizzes/establishment-rules/railway-recruitment-posting-promotion'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'railway-recruitment-posting-promotion'
const CATEGORY_ID = 'railway-recruitment-posting-promotion'

export default function EstablishmentRulesQuizPage() {
  const questions = railwayRecruitmentPostingPromotionQuizzes.quizzes['railway-recruitment-posting-promotion'] ?? []

  return (
    <AomExamTest
      title="Railway Recruitment Posting Promotion"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules"
      backLabel="Back to Establishment Rules"
    />
  )
}
