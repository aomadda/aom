'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { railwayStatisticsQuizzes } from '@/assets/quizzes/railway-statistics'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getRailwayStatisticsQuizChapter } from '@/lib/railway-statistics-quiz-chapters'

export default function RailwayStatisticsChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getRailwayStatisticsQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Railway Statistics quiz does not exist.</p>
          <Link
            href="/quizzes/railway-statistics"
            className="inline-flex rounded-full bg-linear-to-r from-amber-600 to-orange-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Railway Statistics
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    railwayStatisticsQuizzes.quizzes[
      chapter.quizId as keyof typeof railwayStatisticsQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="railway-statistics"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/railway-statistics"
      backLabel="Back to Railway Statistics"
    />
  )
}
