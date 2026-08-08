'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Award, BookOpen, Loader2, Trophy, Users } from 'lucide-react'

type LeaderboardEntry = {
  fullName: string
  score: number
  rank: number
  isYou: boolean
}

type CompletedQuiz = {
  categoryId: string
  quizId: string
  quizTitle: string
  score: number
  totalQuestions: number
  correctAnswers: number
  studyTime: number | null
  completedAt: string
  rank: number
  totalParticipants: number
  leaderboard: LeaderboardEntry[]
}

type DashboardData = {
  fullName: string
  email: string
  totalCompleted: number
  completedQuizzes: CompletedQuiz[]
}

function formatDate(value: string) {
  try {
    return new Date(value).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return value
  }
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const response = await fetch('/api/dashboard')
        const json = (await response.json()) as DashboardData & { error?: string }
        if (cancelled) return
        if (!response.ok) {
          setError(json.error || 'Unable to load dashboard')
          setData(null)
          return
        }
        setData(json)
        setError('')
      } catch {
        if (cancelled) return
        setError('Unable to load dashboard')
        setData(null)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-emerald-50 to-teal-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-wide text-emerald-700 uppercase">Dashboard</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
            {data?.fullName ? `${data.fullName}'s Progress` : 'Your Progress'}
          </h1>
          <p className="mt-2 text-slate-600">
            Your completed quizzes only — ranks are compared with other logged-in users.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center rounded-2xl bg-white py-20 shadow-lg">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-white p-8 text-center shadow-lg">
            <p className="mb-4 text-red-600">{error}</p>
            <Link
              href="/login"
              className="inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-500">Quizzes completed by you</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">{data?.totalCompleted ?? 0}</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Trophy className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-500">Best rank so far</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {data?.completedQuizzes?.length
                    ? `#${Math.min(...data.completedQuizzes.map((q) => q.rank))}`
                    : '—'}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
              <h2 className="mb-5 text-xl font-bold text-slate-900">Completed quizzes</h2>

              {!data?.completedQuizzes?.length ? (
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center">
                  <p className="text-slate-600">You have not completed any quizzes yet.</p>
                  <Link
                    href="/quizzes"
                    className="mt-4 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Browse Quizzes
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {data.completedQuizzes.map((quiz) => (
                    <div
                      key={`${quiz.categoryId}-${quiz.quizId}`}
                      className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{quiz.quizTitle}</h3>
                          <p className="mt-1 text-sm text-slate-500">
                            Completed {formatDate(quiz.completedAt)}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-800">
                          <Award className="h-4 w-4" />
                          Your rank #{quiz.rank}
                          <span className="font-normal text-amber-700/80">
                            / {quiz.totalParticipants} users
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <div className="rounded-lg bg-white px-3 py-2">
                          <p className="text-xs text-slate-500">Your score</p>
                          <p className="text-base font-bold text-emerald-700">{quiz.score}%</p>
                        </div>
                        <div className="rounded-lg bg-white px-3 py-2">
                          <p className="text-xs text-slate-500">Correct</p>
                          <p className="text-base font-bold text-slate-800">
                            {quiz.correctAnswers}/{quiz.totalQuestions}
                          </p>
                        </div>
                        <div className="rounded-lg bg-white px-3 py-2">
                          <p className="text-xs text-slate-500">Study time</p>
                          <p className="text-base font-bold text-slate-800">
                            {quiz.studyTime != null ? `${quiz.studyTime} min` : '—'}
                          </p>
                        </div>
                        <div className="rounded-lg bg-white px-3 py-2">
                          <p className="text-xs text-slate-500">Participants</p>
                          <p className="text-base font-bold text-slate-800">
                            {quiz.totalParticipants}
                          </p>
                        </div>
                      </div>

                      {quiz.leaderboard?.length ? (
                        <div className="mt-4 rounded-lg border border-emerald-100 bg-white p-3">
                          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <Users className="h-4 w-4 text-emerald-600" />
                            Rank comparison
                          </div>
                          <div className="space-y-1.5">
                            {quiz.leaderboard.map((row) => (
                              <div
                                key={`${row.rank}-${row.fullName}-${row.score}`}
                                className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm ${
                                  row.isYou
                                    ? 'bg-emerald-50 font-semibold text-emerald-800'
                                    : 'text-slate-700'
                                }`}
                              >
                                <span>
                                  #{row.rank} {row.fullName}
                                </span>
                                <span>{row.score}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
