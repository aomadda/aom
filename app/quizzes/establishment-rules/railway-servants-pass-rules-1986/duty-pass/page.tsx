import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { dutyPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/duty-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Duty Pass"
      quizId="duty-pass"
      questions={dutyPass['duty-pass'] ?? []}
    />
  )
}
