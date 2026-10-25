import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { childAdoptionLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/child-adoption-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Child Adoption Leave"
      quizId="child-adoption-leave"
      questions={childAdoptionLeave.questions}
    />
  )
}
