'use client'

import { useParams } from 'next/navigation'

import { botanyQuiz } from '@/assets/quizzes/general-awareness-quizzes/botany'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    botanyQuiz.quizzes[quizId as keyof typeof botanyQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="botany"
      quizId={quizId}
      questions={questions}
    />
  )
}
