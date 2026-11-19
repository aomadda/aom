'use client'

import { storesMaterials } from '@/assets/quizzes/financial-rules/stores-materials'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'stores-materials'
const CATEGORY_ID = 'stores-materials'

export default function StoresMaterialsPage() {
  const questions = storesMaterials.storesMaterials ?? []

  return (
    <AomExamTest
      title="Stores & Materials"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/financial-rules"
      backLabel="Back to Financial Rules"
    />
  )
}
