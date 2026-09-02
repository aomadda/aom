'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { kavachQuizzes } from '@/assets/quizzes/kavach'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getKavachQuizChapter } from '@/lib/kavach-quiz-chapters'

export default function KavachChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getKavachQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-orange-50 via-amber-50 to-red-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Quiz not found</h1>
          <p className="mb-6 text-gray-600">This Kavach quiz does not exist.</p>
          <Link
            href="/quizzes/kavach"
            className="inline-flex rounded-full bg-linear-to-r from-orange-600 to-red-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Kavach
          </Link>
        </div>
      </div>
    )
  }

  const questions = (kavachQuizzes[chapter.quizId] ?? []).map((question) => ({
    question: question.question,
    options: question.options,
    correct: question.correctAnswer,
    explanation: question.explanation,
  }))

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="kavach"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/kavach"
      backLabel="Back to Kavach"
    />
  )
}
