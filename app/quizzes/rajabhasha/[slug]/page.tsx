'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { rajabhashaQuizzes } from '@/assets/quizzes/rajabhasha'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getRajabhashaQuizChapter } from '@/lib/rajabhasha-quiz-chapters'

export default function RajabhashaChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getRajabhashaQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-lime-50 via-green-50 to-emerald-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Rajabhasha quiz does not exist.</p>
          <Link
            href="/quizzes/rajabhasha"
            className="inline-flex rounded-full bg-linear-to-r from-lime-600 to-green-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Rajabhasha
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    rajabhashaQuizzes.quizzes[chapter.quizId as keyof typeof rajabhashaQuizzes.quizzes] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="rajabhasha"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/rajabhasha"
      backLabel="Back to Rajabhasha"
    />
  )
}
