'use client'

import { scopedQuizStorageKey } from '@/lib/quiz-browser-storage'
import {
  bindQuizSessionFlush,
  clearLocalQuizSession,
  clearServerQuizSession,
  fetchServerQuizSessions,
  persistQuizSession,
  readLocalQuizSession,
} from '@/lib/quiz-session-client'

import { getTimestamp } from '@/lib/timestamp'
import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { railwayServantsRestRules2005 } from '@/assets/quizzes/establishment-rules/railway-servants-rest-rules-2005'

type QuizQuestion = {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

const QUIZ_ID = 'railway-servants-rest-rules-2005'
const CATEGORY_ID = 'railway-servants-rest-rules-2005'
const QUIZ_TITLE = 'Railway Servants (Rest) Rules 2005'
const SESSION_STORAGE_KEY = 'railway-servants-rest-rules-2005_quiz_session'
const RESULTS_STORAGE_KEY = 'railway-servants-rest-rules-2005_quiz_results'

type QuizSession = {
  currentQuestion: number
  userAnswers: (number | null)[]
  endsAt: number
  startedAt: number
}

function getQuizDurationSeconds(questionCount: number) {
  return Math.max(1, questionCount) * 60
}

function formatTimer(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds)
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function loadQuizSession(): QuizSession | null {
  const parsed = readLocalQuizSession(SESSION_STORAGE_KEY)
  if (!parsed) return null
  return parsed as QuizSession
}

function saveQuizSession(session: QuizSession) {
  void persistQuizSession({
    storageKey: SESSION_STORAGE_KEY,
    categoryId: CATEGORY_ID,
    quizId: QUIZ_ID,
    session,
  })
}

function clearQuizSession() {
  clearLocalQuizSession(SESSION_STORAGE_KEY)
  void clearServerQuizSession(CATEGORY_ID, QUIZ_ID)
}

function loadStoredAnswers(): (number | null)[] | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(scopedQuizStorageKey(RESULTS_STORAGE_KEY))
    if (!raw) return null
    const parsed = JSON.parse(raw) as { answers?: (number | null)[] }
    return Array.isArray(parsed?.answers) ? parsed.answers : null
  } catch {
    return null
  }
}

function saveStoredAnswers(answers: (number | null)[]) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(scopedQuizStorageKey(RESULTS_STORAGE_KEY), JSON.stringify({ answers }))
  } catch (error) {
    console.error('Failed to save quiz results:', error)
  }
}

export default function RailwayServantsRestRules2005Quiz() {
  const quizStartTimeRef = useRef<number>(getTimestamp())
  const endsAtRef = useRef<number>(0)
  const finishedRef = useRef(false)
  const userAnswersRef = useRef<(number | null)[]>([])
  const sessionRestoredRef = useRef(false)
  const router = useRouter()

  const questions = useMemo(
    () =>
      (railwayServantsRestRules2005['railway-servants-rest-rules-2005'] || []) as QuizQuestion[],
    [],
  )

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null),
  )
  const [showResults, setShowResults] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [sessionReady, setSessionReady] = useState(false)
  const [quizActive, setQuizActive] = useState(false)
  const [hasResumeSession, setHasResumeSession] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getQuizDurationSeconds(questions.length || 1))

  useEffect(() => {
    userAnswersRef.current = userAnswers
  }, [userAnswers])

  const startFreshQuiz = useCallback(() => {
    const startedAt = getTimestamp()
    const endsAt = Date.now() + getQuizDurationSeconds(questions.length) * 1000
    finishedRef.current = false
    quizStartTimeRef.current = startedAt
    endsAtRef.current = endsAt
    setCurrentQuestion(0)
    setUserAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
    setTimeLeft(getQuizDurationSeconds(questions.length))
    setQuizActive(true)
    setHasResumeSession(false)
    saveQuizSession({
      currentQuestion: 0,
      userAnswers: new Array(questions.length).fill(null),
      endsAt,
      startedAt,
    })
  }, [questions.length])

  const updateUserProgress = useCallback(
    async (finalScore: number, correctAnswers: number) => {
      try {
        const studyTime = Math.round((getTimestamp() - quizStartTimeRef.current) / 1000 / 60)

        const response = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            categoryId: CATEGORY_ID,
            quizId: QUIZ_ID,
            quizTitle: QUIZ_TITLE,
            score: finalScore,
            totalQuestions: questions.length,
            correctAnswers,
            studyTime,
          }),
        })

        if (response.ok) {
          setCompleted(true)
        } else {
          console.error('Failed to update progress')
        }
      } catch (error) {
        console.error('Error updating progress:', error)
      }
    },
    [questions.length],
  )

  const finishQuiz = useCallback(
    (answers: (number | null)[]) => {
      if (finishedRef.current) return
      finishedRef.current = true
      clearQuizSession()
      saveStoredAnswers(answers)
      setCompleted(true)
      setShowResults(true)
      setQuizActive(false)
      setHasResumeSession(false)
      const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].correct,
      ).length
      const finalScore = Math.round((correctAnswers / questions.length) * 100)
      updateUserProgress(finalScore, correctAnswers)
    },
    [questions, updateUserProgress],
  )

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        setLoadingProgress(true)
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = await response.json()
          const done =
            data.recentActivity?.some(
              (quiz: { categoryId: string; quizId: string }) =>
                quiz.categoryId === CATEGORY_ID && quiz.quizId === QUIZ_ID,
            ) || false
          setCompleted(done)
        }
      } catch (error) {
        console.error('Error fetching progress:', error)
      } finally {
        setLoadingProgress(false)
      }
    }

    fetchUserProgress()
  }, [])

  useEffect(() => {
    if (loadingProgress || sessionRestoredRef.current || questions.length === 0) return
    sessionRestoredRef.current = true

    const totalQuestions = questions.length
    const savedAnswers = loadStoredAnswers()
    const alreadyCompleted = completed

    ;(async () => {
      const localSession = loadQuizSession()
      const { session: serverSession } = await fetchServerQuizSessions(CATEGORY_ID, QUIZ_ID)
      const session =
        (localSession && localSession.userAnswers.length === totalQuestions
          ? localSession
          : null) ||
        (serverSession && serverSession.userAnswers.length === totalQuestions
          ? (serverSession as QuizSession)
          : null)

      if (alreadyCompleted) {
        if (session) clearQuizSession()
        finishedRef.current = true
        if (savedAnswers && savedAnswers.length === totalQuestions) {
          setUserAnswers(savedAnswers)
        }
        setShowResults(false)
        setCompleted(true)
        setQuizActive(false)
        setHasResumeSession(false)
      } else if (session && session.userAnswers.length === totalQuestions) {
        const safeQuestion = Math.min(
          Math.max(0, session.currentQuestion),
          Math.max(0, totalQuestions - 1),
        )
        const remaining = Math.max(0, Math.floor((session.endsAt - Date.now()) / 1000))
        finishedRef.current = false
        quizStartTimeRef.current = session.startedAt
        endsAtRef.current = session.endsAt
        setCurrentQuestion(safeQuestion)
        setUserAnswers(session.userAnswers)
        setTimeLeft(remaining)
        setShowResults(false)
        setQuizActive(false)
        setHasResumeSession(true)
        saveQuizSession(session)
      } else {
        if (session) clearQuizSession()
        setQuizActive(false)
        setHasResumeSession(false)
      }

      setSessionReady(true)
    })()
  }, [loadingProgress, completed, questions.length])

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || completed || questions.length === 0) return
    if (!endsAtRef.current) {
      endsAtRef.current = Date.now() + getQuizDurationSeconds(questions.length) * 1000
    }

    const tick = () => {
      const remaining = Math.max(0, Math.floor((endsAtRef.current - Date.now()) / 1000))
      setTimeLeft(remaining)
    }

    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [sessionReady, quizActive, showResults, completed, questions.length])

  useEffect(() => {
    if (
      sessionReady &&
      quizActive &&
      timeLeft === 0 &&
      !showResults &&
      !completed &&
      questions.length > 0 &&
      endsAtRef.current > 0
    ) {
      finishQuiz(userAnswersRef.current)
    }
  }, [sessionReady, quizActive, timeLeft, showResults, completed, questions.length, finishQuiz])

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || completed || questions.length === 0) return
    if (userAnswers.length !== questions.length) return

    saveQuizSession({
      currentQuestion,
      userAnswers,
      endsAt: endsAtRef.current,
      startedAt: quizStartTimeRef.current,
    })
  }, [sessionReady, quizActive, showResults, completed, questions.length, currentQuestion, userAnswers])

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || completed) return
    return bindQuizSessionFlush(() => {
      if (userAnswersRef.current.length !== questions.length) return
      saveQuizSession({
        currentQuestion,
        userAnswers: userAnswersRef.current,
        endsAt: endsAtRef.current,
        startedAt: quizStartTimeRef.current,
      })
    })
  }, [sessionReady, quizActive, showResults, completed, questions.length, currentQuestion])


  const handleAnswerSelect = (answerIndex: number) => {
    if (userAnswers[currentQuestion] !== null) return
    const next = [...userAnswers]
    next[currentQuestion] = answerIndex
    setUserAnswers(next)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }
    finishQuiz(userAnswers)
  }

  const handleResumeQuiz = () => {
    const session = loadQuizSession()
    if (!session || session.userAnswers.length !== questions.length) {
      startFreshQuiz()
      return
    }
    const safeQuestion = Math.min(
      Math.max(0, session.currentQuestion),
      Math.max(0, questions.length - 1),
    )
    const remaining = Math.max(0, Math.floor((session.endsAt - Date.now()) / 1000))
    finishedRef.current = false
    quizStartTimeRef.current = session.startedAt
    endsAtRef.current = session.endsAt
    setCurrentQuestion(safeQuestion)
    setUserAnswers(session.userAnswers)
    setTimeLeft(remaining)
    setShowResults(false)
    setQuizActive(true)
    setHasResumeSession(false)
  }

  const handleViewResults = () => {
    const saved = loadStoredAnswers()
    const answers =
      saved && saved.length === questions.length
        ? saved
        : userAnswers.length === questions.length
          ? userAnswers
          : new Array(questions.length).fill(null)
    finishedRef.current = true
    clearQuizSession()
    setUserAnswers(answers)
    setShowResults(true)
  }

  if (!sessionReady || loadingProgress) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-50 to-rose-50 px-4">
        <div className="rounded-2xl bg-white px-8 py-10 text-center shadow-xl">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-pink-600" />
          <p className="text-sm text-gray-600">Restoring your quiz session...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-pink-50 to-rose-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">{QUIZ_TITLE}</h1>
          <p className="mb-6 text-gray-600">No questions found.</p>
          <Link
            href="/quizzes/establishment-rules"
            className="inline-flex rounded-full bg-linear-to-r from-pink-500 to-pink-600 px-6 py-2.5 font-medium text-white"
          >
            Back to Establishment Rules
          </Link>
        </div>
      </div>
    )
  }

  if (showResults) {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correct,
    ).length
    const skippedAnswers = userAnswers.filter((answer) => answer === null).length
    const wrongAnswers = questions.length - correctAnswers - skippedAnswers
    const percentage = Math.round((correctAnswers / questions.length) * 100)

    return (
      <div className="min-h-screen bg-linear-to-br from-pink-50 to-rose-50 px-3 py-8 sm:px-4 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              Quiz Completed!
            </h1>
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              Great job! Here&apos;s how you performed
            </p>
          </div>

          <div className="mb-6 rounded-2xl bg-white p-6 shadow-2xl sm:mb-8 sm:rounded-3xl sm:p-8">
            <div className="mb-6 text-center sm:mb-8">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-pink-600 sm:mb-6 sm:h-32 sm:w-32">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">{percentage}%</div>
                  <div className="text-xs text-pink-100 sm:text-sm">Score</div>
                </div>
              </div>
              <h2 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl lg:text-2xl">
                {percentage >= 80
                  ? 'Excellent!'
                  : percentage >= 60
                    ? 'Good Job!'
                    : percentage >= 40
                      ? 'Not Bad!'
                      : 'Keep Practicing!'}
              </h2>
              <p className="text-sm text-gray-600 sm:text-base">
                You got {correctAnswers} out of {questions.length} questions correct
              </p>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">{QUIZ_TITLE}</p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 sm:mb-8 sm:grid-cols-4 sm:gap-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mb-1 text-2xl font-bold text-green-600 sm:text-3xl">
                  {correctAnswers}
                </div>
                <div className="text-xs font-medium text-green-700 sm:text-sm">Correct</div>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mb-1 text-2xl font-bold text-red-600 sm:text-3xl">
                  {wrongAnswers}
                </div>
                <div className="text-xs font-medium text-red-700 sm:text-sm">Wrong</div>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mb-1 text-2xl font-bold text-amber-600 sm:text-3xl">
                  {skippedAnswers}
                </div>
                <div className="text-xs font-medium text-amber-700 sm:text-sm">Skipped</div>
              </div>
              <div className="rounded-xl border border-pink-200 bg-pink-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mb-1 text-2xl font-bold text-pink-600 sm:text-3xl">
                  {questions.length}
                </div>
                <div className="text-xs font-medium text-pink-700 sm:text-sm">Total</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => router.push('/quizzes/establishment-rules')}
                className="flex-1 rounded-full bg-linear-to-r from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-pink-600 hover:to-pink-700 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                Back to Establishment Rules
              </button>
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="flex-1 rounded-full bg-linear-to-r from-slate-700 to-slate-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-slate-800 hover:to-slate-900 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                View Dashboard
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-pink-950/10">
            <div className="relative overflow-hidden bg-linear-to-r from-slate-950 via-pink-950 to-rose-950 px-6 py-8 text-center sm:px-10 sm:py-10">
              <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-rose-400/20 blur-3xl" />
              <h3 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Quiz Summary & Explanation
              </h3>
              <div className="relative mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-pink-400 to-rose-300" />
            </div>

            <ol className="divide-y divide-slate-100">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index]
                const isSkipped = userAnswer === null
                const isCorrect = userAnswer === question.correct
                const statusLabel = isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect'
                const railClass = isSkipped
                  ? 'from-amber-400 to-orange-400'
                  : isCorrect
                    ? 'from-emerald-400 to-teal-400'
                    : 'from-rose-400 to-red-500'
                const chipClass = isSkipped
                  ? 'bg-amber-100 text-amber-800 ring-amber-200/80'
                  : isCorrect
                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-200/80'
                    : 'bg-rose-100 text-rose-800 ring-rose-200/80'

                return (
                  <li
                    key={`${index}-${question.question.slice(0, 24)}`}
                    className="relative px-4 py-6 sm:px-8 sm:py-7"
                  >
                    <div className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b ${railClass}`} />

                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h4 className="text-base font-semibold text-slate-800 sm:text-lg">
                        Question {index + 1}
                      </h4>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ring-1 sm:text-sm ${chipClass}`}
                      >
                        {statusLabel}
                      </div>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {question.question}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Your answer:
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-slate-800">
                          {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                          Correct answer:
                        </div>
                        <p className="mt-1.5 text-sm font-medium text-emerald-900">
                          {question.options[question.correct]}
                        </p>
                      </div>
                    </div>

                    {question.explanation ? (
                      <div className="mt-3 rounded-2xl border border-pink-100 bg-linear-to-br from-pink-50 to-rose-50 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-700">
                          Explanation:
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-pink-900">
                          {question.explanation}
                        </p>
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }

  if (!quizActive && !completed && !showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-pink-50 to-rose-50 px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg sm:p-8">
            <h1 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">{QUIZ_TITLE}</h1>
            <p className="mb-6 text-sm text-gray-600">
              {hasResumeSession
                ? 'Your previous attempt was interrupted. Resume to continue from where you left off.'
                : `${questions.length} Questions · ${questions.length} min timer`}
            </p>
            <button
              type="button"
              onClick={hasResumeSession ? handleResumeQuiz : startFreshQuiz}
              className="rounded-full bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-emerald-600 hover:to-teal-700"
            >
              {hasResumeSession ? 'Resume Quiz' : 'Start Quiz'}
            </button>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/quizzes"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-gray-600 to-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
            >
              Back to All Quizzes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (completed && !showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-pink-50 to-rose-50 px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg sm:p-8">
            <h1 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">{QUIZ_TITLE}</h1>
            <p className="mb-1 text-sm font-medium text-pink-700">This quiz is completed</p>
            <p className="mb-6 text-sm text-gray-600">
              This quiz is locked. You can view your summary and explanations below.
            </p>
            <button
              type="button"
              onClick={handleViewResults}
              className="rounded-full bg-linear-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-pink-600 hover:to-pink-700"
            >
              View Results
            </button>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/quizzes/establishment-rules"
              className="inline-flex items-center rounded-lg bg-linear-to-r from-gray-600 to-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
            >
              Back to Establishment Rules
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const selectedAnswer = userAnswers[currentQuestion]
  const answered = selectedAnswer !== null
  const timerUrgent = timeLeft <= 5 * 60

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 to-rose-50 px-3 py-6 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 lg:p-8">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-3 text-lg font-bold text-gray-800 sm:mb-4 sm:text-xl lg:text-2xl">
              {QUIZ_TITLE}
            </h1>
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-gray-600 sm:mb-4">
              <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800 sm:px-3 sm:text-sm">
                {questions.length} Questions · {questions.length} min
              </span>
              <span
                className={`rounded-full px-2 py-1 font-mono text-xs font-semibold sm:px-3 sm:text-sm ${
                  timerUrgent ? 'bg-red-100 text-red-700' : 'bg-pink-100 text-pink-800'
                }`}
                aria-live="polite"
              >
                Time left: {formatTimer(timeLeft)}
              </span>
              <span className="text-xs text-gray-500 sm:text-sm lg:text-base">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-gray-200 sm:h-2">
              <div
                className="h-1.5 rounded-full bg-linear-to-r from-pink-500 to-pink-600 transition-all duration-300 ease-out sm:h-2"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-base leading-relaxed font-semibold text-gray-800 sm:mb-6 sm:text-lg lg:text-xl">
              {currentQ.question}
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectAnswer = index === currentQ.correct
                let optionClasses =
                  'w-full text-left p-2.5 sm:p-3.5 rounded-md sm:rounded-lg border-2 transition-all duration-200 flex items-center justify-between group'

                if (answered && isSelected && !isCorrectAnswer) {
                  optionClasses += ' border-red-500 bg-red-50 text-red-700 shadow-md'
                } else if (answered && isCorrectAnswer) {
                  optionClasses += ' border-green-500 bg-green-50 text-green-700 shadow-md'
                } else if (!answered) {
                  optionClasses +=
                    ' border-gray-300 hover:border-pink-300 hover:bg-pink-50 hover:shadow-sm cursor-pointer'
                } else {
                  optionClasses += ' border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed'
                }

                const showCheck = answered && (isSelected || isCorrectAnswer)

                return (
                  <button
                    key={`${index}-${option}`}
                    type="button"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered}
                    className={`${optionClasses} ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:mr-4 sm:h-6 sm:w-6 ${
                          answered && isSelected && !isCorrectAnswer
                            ? 'border-red-500 bg-red-500'
                            : answered && isCorrectAnswer
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300 group-hover:border-pink-400'
                        }`}
                      >
                        {showCheck ? (
                          <svg
                            className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-xs font-medium text-gray-400 group-hover:text-pink-400">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span className="text-left text-sm font-medium sm:text-base lg:text-lg">
                        {option}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
              }}
              disabled={currentQuestion === 0}
              className="rounded-md border border-gray-400 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:px-6 sm:py-3 sm:text-base"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="rounded-md bg-linear-to-r from-pink-500 to-pink-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-pink-600 hover:to-pink-700 hover:shadow-xl sm:rounded-lg sm:px-8 sm:py-3 sm:text-base"
            >
              {currentQuestion === questions.length - 1
                ? 'Finish Quiz'
                : selectedAnswer === null
                  ? 'Skip to Next'
                  : 'Next Question'}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/quizzes/establishment-rules"
            className="inline-flex items-center rounded-lg bg-linear-to-r from-gray-600 to-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
          >
            Back to Establishment Rules
          </Link>
        </div>
      </div>
    </div>
  )
}
