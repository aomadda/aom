import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { childCareLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/child-care-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Child Care Leave"
      quizId="child-care-leave"
      questions={childCareLeave['child-care-leave'] ?? []}
    />
  )
}
