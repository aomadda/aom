'use client'

import { useParams } from 'next/navigation'

import { historyQuiz } from '@/assets/quizzes/general-awareness-quizzes/history'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    historyQuiz.quizzes[quizId as keyof typeof historyQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="history"
      quizId={quizId}
      questions={questions}
    />
  )
}
