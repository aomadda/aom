'use client'

import { useParams } from 'next/navigation'

import { polityQuiz } from '@/assets/quizzes/general-awareness-quizzes/polity'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    polityQuiz.quizzes[quizId as keyof typeof polityQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="polity"
      quizId={quizId}
      questions={questions}
    />
  )
}
