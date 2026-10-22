import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { passDistanceRestrictions } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/pass-distance-restrictions'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Pass Distance Restrictions"
      quizId="pass-distance-restrictions"
      questions={passDistanceRestrictions['pass-distance-restrictions'] ?? []}
    />
  )
}
