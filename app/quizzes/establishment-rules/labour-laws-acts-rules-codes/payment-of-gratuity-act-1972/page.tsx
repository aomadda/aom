'use client'

import { paymentOfGratuityAct1972 } from '@/assets/quizzes/establishment-rules/labour-laws-acts-rules-codes/payment-of-gratuity-act-1972'
import AomExamTest from '@/components/aom-tests/AomExamTest'

const QUIZ_ID = 'payment-of-gratuity-act-1972'
const CATEGORY_ID = 'payment-of-gratuity-act-1972'

export default function PaymentOfGratuityAct1972Page() {
  const questions = paymentOfGratuityAct1972.paymentOfGratuityAct1972 ?? []

  return (
    <AomExamTest
      title="Payment of Gratuity Act 1972"
      categoryId={CATEGORY_ID}
      quizId={QUIZ_ID}
      questions={questions}
      backHref="/quizzes/establishment-rules/labour-laws-acts-rules-codes"
      backLabel="Back to Labour Laws, Acts, Rules and Codes"
    />
  )
}
