import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { leaveEncashment } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/leave-encashment'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Leave Encashment"
      quizId="leave-encashment"
      questions={leaveEncashment['leave-encashment'] ?? []}
    />
  )
}
