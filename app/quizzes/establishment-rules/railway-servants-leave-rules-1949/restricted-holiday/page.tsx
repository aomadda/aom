import LeaveRules1949Quiz from '@/components/quizzes/LeaveRules1949Quiz'
import { restrictedHoliday } from '@/assets/quizzes/establishment-rules/railway-servants-leave-rules-1949/restricted-holiday'

export default function Page() {
  return (
    <LeaveRules1949Quiz
      title="Restricted Holiday"
      quizId="restricted-holiday"
      questions={restrictedHoliday['restricted-holiday'] ?? []}
    />
  )
}
