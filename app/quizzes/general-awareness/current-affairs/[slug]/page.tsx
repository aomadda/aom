'use client'

import { useParams } from 'next/navigation'

import { currentAffairsQuiz } from '@/assets/quizzes/general-awareness-quizzes/current-affairs'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    currentAffairsQuiz.quizzes[quizId as keyof typeof currentAffairsQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="current-affairs"
      quizId={quizId}
      questions={questions}
    />
  )
}
