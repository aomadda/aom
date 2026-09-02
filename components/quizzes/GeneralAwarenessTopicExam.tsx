'use client'

import Link from 'next/link'

import AomExamTest from '@/components/aom-tests/AomExamTest'
import {
  formatGeneralAwarenessQuizLabel,
  getGeneralAwarenessQuizTopic,
} from '@/lib/general-awareness-quiz-topics'
import type { AomExamQuestion } from '@/lib/aom-exam'

type GeneralAwarenessTopicExamProps = {
  topicSlug: string
  quizId: string
  questions: AomExamQuestion[]
}

export default function GeneralAwarenessTopicExam({
  topicSlug,
  quizId,
  questions,
}: GeneralAwarenessTopicExamProps) {
  const topic = getGeneralAwarenessQuizTopic(topicSlug)
  const label = formatGeneralAwarenessQuizLabel(quizId)

  if (!topic || !topic.quizIds.includes(quizId)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-50 via-teal-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Quiz not found</h1>
          <p className="mb-6 text-gray-600">This General Awareness quiz does not exist.</p>
          <Link
            href="/quizzes/general-awareness"
            className="inline-flex rounded-full bg-linear-to-r from-teal-600 to-indigo-600 px-6 py-2.5 font-medium text-white"
          >
            Back to General Awareness
          </Link>
        </div>
      </div>
    )
  }

  return (
    <AomExamTest
      title={`${topic.examTitle} — ${label}`}
      categoryId={topic.categoryId}
      quizId={quizId}
      questions={questions}
      backHref={`/quizzes/general-awareness/${topic.slug}`}
      backLabel={`Back to ${topic.title}`}
    />
  )
}
