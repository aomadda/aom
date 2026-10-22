import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { splitPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/split-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Split Pass"
      quizId="split-pass"
      questions={splitPass['split-pass'] ?? []}
    />
  )
}
