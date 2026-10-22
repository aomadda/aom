import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { postRetirementComplimentaryPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/post-retirement-complimentary-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="Post Retirement Complimentary Pass"
      quizId="post-retirement-complimentary-pass"
      questions={postRetirementComplimentaryPass['post-retirement-complimentary-pass'] ?? []}
    />
  )
}
