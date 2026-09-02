'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { operatingManualQuizzes } from '@/assets/quizzes/operating-manual'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getOperatingManualQuizChapter } from '@/lib/operating-manual-quiz-chapters'

export default function OperatingManualChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getOperatingManualQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-50 via-blue-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Operating Manual quiz does not exist.</p>
          <Link
            href="/quizzes/operating-manual"
            className="inline-flex rounded-full bg-linear-to-r from-sky-600 to-indigo-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Operating Manual
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    operatingManualQuizzes.quizzes[
      chapter.quizId as keyof typeof operatingManualQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="operating-manual"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/operating-manual"
      backLabel="Back to Operating Manual"
    />
  )
}
