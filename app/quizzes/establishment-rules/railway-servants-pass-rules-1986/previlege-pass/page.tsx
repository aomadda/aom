import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { previlegePass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/previlege-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Privilege Pass"
      quizId="previlege-pass"
      questions={previlegePass['previlege-pass'] ?? []}
    />
  )
}
