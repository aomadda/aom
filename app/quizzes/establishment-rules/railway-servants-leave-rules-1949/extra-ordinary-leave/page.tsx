import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { extraOrdinaryLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/extra-ordinary-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Extra Ordinary Leave"
      quizId="extra-ordinary-leave"
      questions={extraOrdinaryLeave['extra-ordinary-leave'] ?? []}
    />
  )
}
