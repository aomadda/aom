import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { hospitalLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/hospital-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Hospital Leave"
      quizId="hospital-leave"
      questions={hospitalLeave['hospital-leave'] ?? []}
    />
  )
}
