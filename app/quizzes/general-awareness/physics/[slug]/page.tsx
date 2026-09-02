'use client'

import { useParams } from 'next/navigation'

import { physicsQuiz } from '@/assets/quizzes/general-awareness-quizzes/physics'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    physicsQuiz.quizzes[quizId as keyof typeof physicsQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="physics"
      quizId={quizId}
      questions={questions}
    />
  )
}
