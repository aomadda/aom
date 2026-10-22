import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { leaveNotDue } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/leave-not-due'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Leave Not Due"
      quizId="leave-not-due"
      questions={leaveNotDue['leave-not-due'] ?? []}
    />
  )
}
