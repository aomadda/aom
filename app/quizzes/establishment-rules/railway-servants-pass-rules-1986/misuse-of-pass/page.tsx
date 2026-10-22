import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { misuseOfPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/misuse-of-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Misuse of Pass"
      quizId="misuse-of-pass"
      questions={misuseOfPass['misuse-of-pass'] ?? []}
    />
  )
}
