'use client'

import { useParams } from 'next/navigation'

import { biologyQuiz } from '@/assets/quizzes/general-awareness-quizzes/biology'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    biologyQuiz.quizzes[quizId as keyof typeof biologyQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="biology"
      quizId={quizId}
      questions={questions}
    />
  )
}
