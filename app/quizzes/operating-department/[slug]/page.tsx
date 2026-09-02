'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { operatingDepartmentQuizzes } from '@/assets/quizzes/operating-department'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getOperatingDepartmentQuizChapter } from '@/lib/operating-department-quiz-chapters'

export default function OperatingDepartmentChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getOperatingDepartmentQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-emerald-50 to-cyan-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Operating Department quiz does not exist.</p>
          <Link
            href="/quizzes/operating-department"
            className="inline-flex rounded-full bg-linear-to-r from-teal-600 to-emerald-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Operating Department
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    operatingDepartmentQuizzes.quizzes[
      chapter.quizId as keyof typeof operatingDepartmentQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="operating-department"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/operating-department"
      backLabel="Back to Operating Department"
    />
  )
}
