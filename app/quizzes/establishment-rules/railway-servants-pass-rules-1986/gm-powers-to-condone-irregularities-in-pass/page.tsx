import PassRules1986Quiz from '@/components/quizzes/PassRules1986Quiz'
import { gmPowersToCondoneIrregularitiesInPass } from '@/assets/quizzes/establishment-rules/railway-servants-pass-rules-1986/gm-powers-to-condone-irregularities-in-pass'

export default function Page() {
  return (
    <PassRules1986Quiz
      title="GM Powers to Condone Irregularities in Pass"
      quizId="gm-powers-to-condone-irregularities-in-pass"
      questions={
        gmPowersToCondoneIrregularitiesInPass['gm-powers-to-condone-irregularities-in-pass'] ?? []
      }
    />
  )
}
