import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { passTypes } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/pass-types'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Pass Types"
      quizId="pass-types"
      questions={passTypes['pass-types'] ?? []}
    />
  )
}
