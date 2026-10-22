import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { specialPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/special-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Special Pass"
      quizId="special-pass"
      questions={specialPass['special-pass'] ?? []}
    />
  )
}
