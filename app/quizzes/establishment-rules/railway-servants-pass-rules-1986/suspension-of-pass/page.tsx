import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { suspensionOfPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/suspension-of-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Suspension of Pass"
      quizId="suspension-of-pass"
      questions={suspensionOfPass['suspension-of-pass'] ?? []}
    />
  )
}
