'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { commercialDepartmentQuizzes } from '@/assets/quizzes/commercial-department'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getCommercialDepartmentQuizChapter } from '@/lib/commercial-department-quiz-chapters'

export default function CommercialDepartmentChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getCommercialDepartmentQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-50 via-purple-50 to-violet-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Commercial Department quiz does not exist.</p>
          <Link
            href="/quizzes/commercial-department"
            className="inline-flex rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Commercial Department
          </Link>
        </div>
      </div>
    )
  }

  const questions = commercialDepartmentQuizzes.quizzes[chapter.quizId] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="commercial-department"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/commercial-department"
      backLabel="Back to Commercial Department"
    />
  )
}
