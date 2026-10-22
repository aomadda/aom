import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { leaveAveragePay } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/leave-average-pay'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Leave on Average Pay"
      quizId="leave-average-pay"
      questions={leaveAveragePay['leave-average-pay'] ?? []}
    />
  )
}
