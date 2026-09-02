'use client'

import { useParams } from 'next/navigation'

import { chemistryQuiz } from '@/assets/quizzes/general-awareness-quizzes/chemistry'
import GeneralAwarenessTopicExam from '@/components/quizzes/GeneralAwarenessTopicExam'

export default function GeneralAwarenessQuizPage() {
  const params = useParams<{ slug: string }>()
  const quizId = typeof params.slug === 'string' ? params.slug : ''
  const questions =
    chemistryQuiz.quizzes[quizId as keyof typeof chemistryQuiz.quizzes] ?? []

  return (
    <GeneralAwarenessTopicExam
      topicSlug="chemistry"
      quizId={quizId}
      questions={questions}
    />
  )
}
