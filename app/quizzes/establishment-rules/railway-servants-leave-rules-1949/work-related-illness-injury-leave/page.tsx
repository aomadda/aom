import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { workRelatedIllnessInjuryLeave } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/work-related-illness-injury-leave'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Work Related Illness Injury Leave"
      quizId="work-related-illness-injury-leave"
      questions={workRelatedIllnessInjuryLeave['work-related-illness-injury-leave'] ?? []}
    />
  )
}
