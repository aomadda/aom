import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { transferOfPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/transfer-of-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Transfer of Pass"
      quizId="transfer-of-pass"
      questions={transferOfPass['transfer-of-pass'] ?? []}
    />
  )
}
