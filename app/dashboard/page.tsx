'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Award, BookOpen, Clock, Loader2, Sparkles, Trophy, Users } from 'lucide-react'

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

function rankTone(rank: number) {
  if (rank === 1) return 'from-amber-400 to-orange-500 text-white'
  if (rank === 2) return 'from-slate-300 to-slate-500 text-white'
  if (rank === 3) return 'from-orange-300 to-amber-600 text-white'
  return 'from-violet-500 to-fuchsia-600 text-white'
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

  const bestRank = useMemo(() => {
    if (!data?.completedQuizzes?.length) return null
    return Math.min(...data.completedQuizzes.map((quiz) => quiz.rank))
  }, [data])

  const averageScore = useMemo(() => {
    if (!data?.completedQuizzes?.length) return null
    const total = data.completedQuizzes.reduce((sum, quiz) => sum + quiz.score, 0)
    return Math.round(total / data.completedQuizzes.length)
  }, [data])

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-violet-100 via-fuchsia-50 to-amber-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full bg-violet-400/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-96 w-96 rounded-full bg-fuchsia-400/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-8 h-48 w-48 rounded-full bg-teal-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-6 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-8">
          <div className="absolute inset-0 bg-linear-to-r from-violet-600/10 via-fuchsia-500/5 to-amber-400/10" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-violet-700 uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  Dashboard
                </p>
                <h1 className="mt-1 bg-linear-to-r from-violet-800 via-fuchsia-700 to-amber-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {data?.fullName ? `${data.fullName}'s Progress` : 'Your Progress'}
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                  Your completed quizzes only — ranks are compared with other logged-in users.
                </p>
            </div>
            {data?.email ? (
              <div className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-sm text-slate-600 shadow-sm backdrop-blur-md">
                <p className="text-xs font-semibold tracking-wide text-violet-600 uppercase">Signed in</p>
                <p className="mt-0.5 font-medium text-slate-800">{data.email}</p>
              </div>
            ) : null}
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center rounded-3xl border border-white/60 bg-white/50 py-24 shadow-xl backdrop-blur-xl">
            <Loader2 className="h-8 w-8 animate-spin text-violet-600" />
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-red-200/80 bg-white/80 p-8 text-center shadow-xl backdrop-blur-xl">
            <p className="mb-4 text-red-600">{error}</p>
            <Link
              href="/login"
              className="inline-flex rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-linear-to-br from-violet-600 to-indigo-700 p-6 text-white shadow-xl shadow-violet-600/25">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="text-sm text-violet-100">Quizzes completed</p>
                <p className="mt-1 text-4xl font-bold">{data?.totalCompleted ?? 0}</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 p-6 text-white shadow-xl shadow-amber-500/25">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Trophy className="h-6 w-6" />
                </div>
                <p className="text-sm text-amber-50">Best rank so far</p>
                <p className="mt-1 text-4xl font-bold">{bestRank != null ? `#${bestRank}` : '—'}</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-fuchsia-500 to-rose-500 p-6 text-white shadow-xl shadow-fuchsia-500/25">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Award className="h-6 w-6" />
                </div>
                <p className="text-sm text-fuchsia-50">Average score</p>
                <p className="mt-1 text-4xl font-bold">
                  {averageScore != null ? `${averageScore}%` : '—'}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/55 p-6 shadow-2xl shadow-fuchsia-950/10 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Completed quizzes</h2>
                  <p className="mt-1 text-sm text-slate-500">Scores, ranks, and how you compare</p>
                </div>
              </div>

              {!data?.completedQuizzes?.length ? (
                <div className="rounded-2xl border border-dashed border-violet-200 bg-linear-to-br from-violet-50 to-amber-50 px-4 py-14 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <p className="text-slate-600">You have not completed any quizzes yet.</p>
                  <Link
                    href="/quizzes"
                    className="mt-5 inline-flex rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                  >
                    Browse Quizzes
                  </Link>
                </div>
              ) : (
                <div className="space-y-5">
                  {data.completedQuizzes.map((quiz) => (
                    <article
                      key={`${quiz.categoryId}-${quiz.quizId}`}
                      className="overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-lg shadow-violet-950/5"
                    >
                      <div className="h-1.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-amber-400" />
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900">{quiz.quizTitle}</h3>
                            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                              <Clock className="h-3.5 w-3.5" />
                              Completed {formatDate(quiz.completedAt)}
                            </p>
                          </div>
                          <div
                            className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r px-3 py-1.5 text-sm font-semibold shadow-sm ${rankTone(quiz.rank)}`}
                          >
                            <Award className="h-4 w-4" />
                            Your rank #{quiz.rank}
                            <span className="font-normal opacity-80">/ {quiz.totalParticipants} users</span>
                          </div>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                          <div className="rounded-xl bg-linear-to-br from-emerald-50 to-teal-50 px-3 py-3">
                            <p className="text-xs text-emerald-700">Your score</p>
                            <p className="text-xl font-bold text-emerald-800">{quiz.score}%</p>
                          </div>
                          <div className="rounded-xl bg-linear-to-br from-violet-50 to-indigo-50 px-3 py-3">
                            <p className="text-xs text-violet-700">Correct</p>
                            <p className="text-xl font-bold text-violet-900">
                              {quiz.correctAnswers}/{quiz.totalQuestions}
                            </p>
                          </div>
                          <div className="rounded-xl bg-linear-to-br from-amber-50 to-orange-50 px-3 py-3">
                            <p className="text-xs text-amber-700">Study time</p>
                            <p className="text-xl font-bold text-amber-900">
                              {quiz.studyTime != null ? `${quiz.studyTime} min` : '—'}
                            </p>
                          </div>
                          <div className="rounded-xl bg-linear-to-br from-fuchsia-50 to-rose-50 px-3 py-3">
                            <p className="text-xs text-fuchsia-700">Participants</p>
                            <p className="text-xl font-bold text-fuchsia-900">{quiz.totalParticipants}</p>
                          </div>
                        </div>

                        {quiz.leaderboard?.length ? (
                          <div className="mt-5 rounded-xl border border-violet-100 bg-linear-to-br from-slate-50 to-violet-50/70 p-3">
                            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                              <Users className="h-4 w-4 text-violet-600" />
                              Rank comparison
                            </div>
                            <div className="space-y-1.5">
                              {quiz.leaderboard.map((row) => (
                                <div
                                  key={`${row.rank}-${row.fullName}-${row.score}`}
                                  className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-sm ${
                                    row.isYou
                                      ? 'bg-linear-to-r from-violet-600 to-fuchsia-600 font-semibold text-white shadow-sm'
                                      : 'bg-white/70 text-slate-700'
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
                    </article>
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
