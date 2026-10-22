import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { leaveHalfAveragePay } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/leave-half-average-pay'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Leave on Half Average Pay"
      quizId="leave-half-average-pay"
      questions={leaveHalfAveragePay['leave-half-average-pay'] ?? []}
    />
  )
}
