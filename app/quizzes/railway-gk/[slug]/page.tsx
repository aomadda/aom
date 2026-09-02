'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { railwayGkQuizzes } from '@/assets/quizzes/railway-gk'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getRailwayGkQuizChapter } from '@/lib/railway-gk-quiz-chapters'

export default function RailwayGkChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getRailwayGkQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-50 via-rose-50 to-orange-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Railway GK quiz does not exist.</p>
          <Link
            href="/quizzes/railway-gk"
            className="inline-flex rounded-full bg-linear-to-r from-pink-600 to-rose-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Railway GK
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    railwayGkQuizzes.quizzes[chapter.quizId as keyof typeof railwayGkQuizzes.quizzes] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="railway-gk"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/railway-gk"
      backLabel="Back to Railway GK"
    />
  )
}
