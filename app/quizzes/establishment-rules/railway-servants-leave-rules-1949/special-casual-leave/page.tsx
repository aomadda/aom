import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { specialCasualLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/special-casual-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Special Casual Leave"
      quizId="special-casual-leave"
      questions={specialCasualLeave['special-casual-leave'] ?? []}
    />
  )
}
