import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { complimentaryCardPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/complimentary-card-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Complimentary Card Pass"
      quizId="complimentary-card-pass"
      questions={complimentaryCardPass['complimentary-card-pass'] ?? []}
    />
  )
}
