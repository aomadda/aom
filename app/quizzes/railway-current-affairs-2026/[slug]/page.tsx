'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { railwayCurrentAffairs2026 } from '@/assets/quizzes/railway-current-affairs/railway-current-affairs-2026'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getRailwayCurrentAffairs2026QuizMonth } from '@/lib/railway-current-affairs-2026-quiz-months'

export default function RailwayCurrentAffairs2026MonthQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const month = getRailwayCurrentAffairs2026QuizMonth(slug)

  if (!month) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-50 via-sky-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Month not found</h1>
          <p className="mb-6 text-gray-600">This Railway Current Affairs 2026 quiz does not exist.</p>
          <Link
            href="/quizzes/railway-current-affairs-2026"
            className="inline-flex rounded-full bg-linear-to-r from-cyan-600 to-sky-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Railway Current Affairs 2026
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    railwayCurrentAffairs2026.quizzes[
      month.quizId as keyof typeof railwayCurrentAffairs2026.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={month.title}
      categoryId="railway-current-affairs-2026"
      quizId={month.quizId}
      questions={questions}
      backHref="/quizzes/railway-current-affairs-2026"
      backLabel="Back to Railway Current Affairs 2026"
    />
  )
}
