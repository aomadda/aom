import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { otherLeaveRules } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/other-leave-rules'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Other Leave Rules"
      quizId="other-leave-rules"
      questions={otherLeaveRules['other-leave-rules'] ?? []}
    />
  )
}
