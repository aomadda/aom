import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { specialDisabilityLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/special-disability-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Special Disability Leave"
      quizId="special-disability-leave"
      questions={specialDisabilityLeave['special-disability-leave'] ?? []}
    />
  )
}
