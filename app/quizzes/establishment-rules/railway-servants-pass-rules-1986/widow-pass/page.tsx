import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { widowPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/widow-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Widow Pass"
      quizId="widow-pass"
      questions={widowPass['widow-pass'] ?? []}
    />
  )
}
