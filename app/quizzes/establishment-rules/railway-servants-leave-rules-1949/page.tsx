'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import QuizAttemptFooter from '@/components/quizzes/QuizAttemptFooter'
import { LEAVE_RULES_1949_QUIZZES } from '@/lib/leave-rules-1949-quizzes'

export default function RailwayServantsLeaveRules1949Page() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-fuchsia-50 to-indigo-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Railway Servants (Leave) Rules 1949
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice Railway Servants (Leave) Rules 1949 questions topic-wise in exam mode
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a leave topic below and attempt it with timer, palette, and answer key
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {LEAVE_RULES_1949_QUIZZES.map((quiz) => {
            const href = `/quizzes/establishment-rules/railway-servants-leave-rules-1949/${quiz.slug}`
            const isActive = pathname === href
            return (
              <Link key={quiz.slug} href={href} className="group">
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                    isActive ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-linear-to-r ${quiz.color} p-4 sm:p-6`}>
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 text-3xl sm:text-4xl">{quiz.icon}</div>
                        <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                          {quiz.title}
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
                      {quiz.description}
                    </p>
                    <QuizAttemptFooter href={href} colorClass={quiz.color} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-purple-600">{LEAVE_RULES_1949_QUIZZES.length}</span>{' '}
              Leave Rules quizzes available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
