'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { nationalRailPlanQuizzes } from '@/assets/quizzes/national-rail-plan'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getNationalRailPlanQuizChapter } from '@/lib/national-rail-plan-quiz-chapters'

export default function NationalRailPlanChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getNationalRailPlanQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-blue-50 to-sky-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This National Rail Plan quiz does not exist.</p>
          <Link
            href="/quizzes/national-rail-plan"
            className="inline-flex rounded-full bg-linear-to-r from-indigo-600 to-blue-600 px-6 py-2.5 font-medium text-white"
          >
            Back to National Rail Plan
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    nationalRailPlanQuizzes.quizzes[
      chapter.quizId as keyof typeof nationalRailPlanQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="national-rail-plan"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/national-rail-plan"
      backLabel="Back to National Rail Plan"
    />
  )
}
