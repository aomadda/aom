'use client'

import { useParams } from 'next/navigation'

import { geographyQuiz } from '@/assets/quizzes/general-awareness-quizzes/geography'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    geographyQuiz.quizzes[quizId as keyof typeof geographyQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="geography"
      quizId={quizId}
      questions={questions}
    />
  )
}
