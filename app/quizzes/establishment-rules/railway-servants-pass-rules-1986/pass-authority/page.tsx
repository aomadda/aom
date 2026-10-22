import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { passAuthority } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/pass-authority'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Pass Authority"
      quizId="pass-authority"
      questions={passAuthority['pass-authority'] ?? []}
    />
  )
}
