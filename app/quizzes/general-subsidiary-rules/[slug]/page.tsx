'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { generalSubsidiaryRulesQuizzes } from '@/assets/quizzes/general-subsidiary-rules'
import AomExamTest from '@/components/aom-tests/AomExamTest'
import { getGeneralSubsidiaryRulesQuizChapter } from '@/lib/general-subsidiary-rules-quiz-chapters'

export default function GeneralSubsidiaryRulesChapterQuizPage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const chapter = getGeneralSubsidiaryRulesQuizChapter(slug)

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-sky-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Chapter not found</h1>
          <p className="mb-6 text-gray-600">This General & Subsidiary Rules quiz does not exist.</p>
          <Link
            href="/quizzes/general-subsidiary-rules"
            className="inline-flex rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 font-medium text-white"
          >
            Back to General & Subsidiary Rules
          </Link>
        </div>
      </div>
    )
  }

  const questions =
    generalSubsidiaryRulesQuizzes.quizzes[
      chapter.quizId as keyof typeof generalSubsidiaryRulesQuizzes.quizzes
    ] ?? []

  return (
    <AomExamTest
      title={chapter.title}
      categoryId="general-subsidiary-rules"
      quizId={chapter.quizId}
      questions={questions}
      backHref="/quizzes/general-subsidiary-rules"
      backLabel="Back to General & Subsidiary Rules"
    />
  )
}
