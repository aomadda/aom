'use client'

import { useParams } from 'next/navigation'

import { artCultureQuizzes } from '@/assets/quizzes/general-awareness-quizzes/art-culture'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    artCultureQuizzes.quizzes[quizId as keyof typeof artCultureQuizzes.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="art-culture"
      quizId={quizId}
      questions={questions}
    />
  )
}
