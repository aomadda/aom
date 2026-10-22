import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { maternityLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/maternity-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Maternity Leave"
      quizId="maternity-leave"
      questions={maternityLeave['maternity-leave'] ?? []}
    />
  )
}
