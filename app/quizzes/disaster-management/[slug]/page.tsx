'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { disasterManagementQuizzes } from '@/assets/quizzes/disaster-management'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getDisasterManagementQuizChapter } from '@/lib/disaster-management-quiz-chapters'

export default function DisasterManagementChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getDisasterManagementQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-orange-50 via-rose-50 to-red-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This Disaster Management quiz does not exist.</p>
          <Link
            href="/quizzes/disaster-management"
            className="inline-flex rounded-full bg-linear-to-r from-orange-600 to-rose-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Disaster Management
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    disasterManagementQuizzes.quizzes[
      chapter.quizId as keyof typeof disasterManagementQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="disaster-management"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/disaster-management"
      backLabel="Back to Disaster Management"
    />
  )
}
