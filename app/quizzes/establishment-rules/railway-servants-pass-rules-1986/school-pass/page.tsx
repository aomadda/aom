import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { schoolPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/school-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="School Pass"
      quizId="school-pass"
      questions={schoolPass['school-pass'] ?? []}
    />
  )
}
