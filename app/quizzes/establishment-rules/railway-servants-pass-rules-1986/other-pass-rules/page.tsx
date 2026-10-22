import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { otherPassRules } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/other-pass-rules'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Other Pass Rules"
      quizId="other-pass-rules"
      questions={otherPassRules['other-pass-rules'] ?? []}
    />
  )
}
