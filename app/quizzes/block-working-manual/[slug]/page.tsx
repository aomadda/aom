'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { blockWorkingManualQuizzes } from '@/assets/quizzes/block-working-manual'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getBlockWorkingManualQuizChapter } from '@/lib/block-working-manual-quiz-chapters'

export default function BlockWorkingManualChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getBlockWorkingManualQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Block Working Manual quiz does not exist.</p>
          <Link
            href="/quizzes/block-working-manual"
            className="inline-flex rounded-full bg-linear-to-r from-teal-600 to-cyan-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Block Working Manual
          </Link>
        </div>
      </div>
    )
  }

  const questions = blockWorkingManualQuizzes.quizzes[chapter.quizId] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="block-working-manual"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/block-working-manual"
      backLabel="Back to Block Working Manual"
    />
  )
}
