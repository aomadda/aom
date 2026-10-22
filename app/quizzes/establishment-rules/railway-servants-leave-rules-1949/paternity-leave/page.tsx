import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { paternityLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/paternity-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Paternity Leave"
      quizId="paternity-leave"
      questions={paternityLeave['paternity-leave'] ?? []}
    />
  )
}
