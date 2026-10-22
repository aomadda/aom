import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { portersPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/porters-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Porters Pass"
      quizId="porters-pass"
      questions={portersPass['porters-pass'] ?? []}
    />
  )
}
