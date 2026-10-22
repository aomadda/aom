import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { previlegeTicketOrder } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/previlege-ticket-order'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Privilege Ticket Order"
      quizId="previlege-ticket-order"
      questions={previlegeTicketOrder['previlege-ticket-order'] ?? []}
    />
  )
}
