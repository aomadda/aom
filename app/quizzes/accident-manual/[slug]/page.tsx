'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { accidentManualQuizzes } from '@/assets/quizzes/accident-manual'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getAccidentManualQuizChapter } from '@/lib/accident-manual-quiz-chapters'

export default function AccidentManualChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getAccidentManualQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-red-50 via-rose-50 to-orange-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Accident Manual quiz does not exist.</p>
          <Link
            href="/quizzes/accident-manual"
            className="inline-flex rounded-full bg-linear-to-r from-red-600 to-rose-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Accident Manual
          </Link>
        </div>
      </div>
    )
  }

  const questions = accidentManualQuizzes.quizzes[chapter.quizId] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="accident-manual"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/accident-manual"
      backLabel="Back to Accident Manual"
    />
  )
}
