import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { yearEndingPassPto } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/year-ending-pass-pto'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Year Ending Pass / PTO"
      quizId="year-ending-pass-pto"
      questions={yearEndingPassPto['year-ending-pass-pto'] ?? []}
    />
  )
}
