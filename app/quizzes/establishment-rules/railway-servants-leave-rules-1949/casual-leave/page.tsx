import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { casualLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/casual-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Casual Leave"
      quizId="casual-leave"
      questions={casualLeave['casual-leave'] ?? []}
    />
  )
}
