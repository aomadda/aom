import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { studyLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/study-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Study Leave"
      quizId="study-leave"
      questions={studyLeave['study-leave'] ?? []}
    />
  )
}
