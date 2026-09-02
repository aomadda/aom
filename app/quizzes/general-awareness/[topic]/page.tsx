'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import {
  formatGeneralAwarenessQuizLabel,
  getGeneralAwarenessQuizTopic,
} from '@/lib/general-awareness-quiz-topics'

export default function GeneralAwarenessTopicQuizzesPage() {
  const params = useParams<{ topic: string }>()
  const pathname = usePathname()
  const topicSlug = typeof params.topic === 'string' ? params.topic : ''
  const topic = getGeneralAwarenessQuizTopic(topicSlug)

  if (!topic) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-50 via-teal-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">Topic not found</h1>
          <p className="mb-6 text-gray-600">This General Awareness quiz topic does not exist.</p>
          <Link
            href="/quizzes/general-awareness"
            className="inline-flex rounded-full bg-linear-to-r from-teal-600 to-indigo-600 px-6 py-2.5 font-medium text-white"
          >
            Back to General Awareness
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 via-teal-50 to-indigo-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {topic.title}
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice {topic.examTitle} questions quiz-wise in exam mode
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a quiz below and attempt it with timer, palette, and answer key
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {topic.quizIds.map((quizId) => {
            const href = `/quizzes/general-awareness/${topic.slug}/${quizId}`
            const isActive = pathname === href
            const label = formatGeneralAwarenessQuizLabel(quizId)
            return (
              <Link key={quizId} href={href} className="group">
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                    isActive ? 'ring-2 ring-teal-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-linear-to-r ${topic.color} p-4 sm:p-6`}>
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 text-3xl sm:text-4xl">{topic.icon}</div>
                        <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                          {label}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <svg
                          className="h-6 w-6 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <p className="mb-4 flex-1 line-clamp-3 text-sm text-gray-600 sm:text-base">
                      Practice {topic.examTitle} {label} questions in exam mode
                    </p>

                    <div className="mt-auto border-t border-gray-200 pt-4">
                      <div
                        className={`inline-flex items-center bg-linear-to-r ${topic.color} bg-clip-text text-sm font-semibold text-transparent`}
                      >
                        Open test
                        <svg
                          className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-teal-600">{topic.quizIds.length}</span>{' '}
              {topic.title} quizzes available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
