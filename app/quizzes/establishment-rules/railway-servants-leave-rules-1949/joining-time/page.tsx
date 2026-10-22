import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { joiningTime } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/joining-time'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Joining Time"
      quizId="joining-time"
      questions={joiningTime['joining-time'] ?? []}
    />
  )
}
