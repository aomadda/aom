'use client'

import { useParams } from 'next/navigation'

import { zoologyQuiz } from '@/assets/quizzes/general-awareness-quizzes/zoology'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    zoologyQuiz.quizzes[quizId as keyof typeof zoologyQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="zoology"
      quizId={quizId}
      questions={questions}
    />
  )
}
