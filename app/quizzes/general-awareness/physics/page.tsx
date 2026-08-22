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
import { physicsQuiz } from '@/assets/quizzes/general-awareness-quizzes/physics'

const CATEGORY_ID = 'general-awareness-physics'
const CATEGORY_TITLE = 'Physics'
const CATEGORY_COLOR = 'from-cyan-600 to-indigo-600'
const CATEGORY_QUIZZES = physicsQuiz.quizzes
const RESULTS_STORAGE_KEY = 'ga_physics_quiz_results'
const SESSION_STORAGE_KEY = 'ga_physics_quiz_session'

type StoredResults = Record<string, { answers: (number | null)[] }>

type QuizSession = {
  quizId: string
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

function formatQuizLabel(quizId: string) {
  return quizId.replace(/^quiz-(\d+)$/i, (_, n) => `Quiz ${n}`)
}

function loadStoredResults(): StoredResults {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(scopedQuizStorageKey(RESULTS_STORAGE_KEY))
    if (!raw) return {}
    const parsed = JSON.parse(raw) as StoredResults
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function saveStoredResult(quizId: string, answers: (number | null)[]) {
  if (typeof window === 'undefined') return
  try {
    const existing = loadStoredResults()
    existing[quizId] = { answers }
    window.localStorage.setItem(scopedQuizStorageKey(RESULTS_STORAGE_KEY), JSON.stringify(existing))
  } catch (error) {
    console.error('Failed to save quiz results:', error)
  }
}

function loadQuizSession(): QuizSession | null {
  const parsed = readLocalQuizSession(SESSION_STORAGE_KEY)
  if (!parsed || typeof parsed.quizId !== 'string') return null
  return parsed as QuizSession
}

function saveQuizSession(session: QuizSession) {
  void persistQuizSession({
    storageKey: SESSION_STORAGE_KEY,
    categoryId: CATEGORY_ID,
    quizId: session.quizId,
    session,
  })
}

function clearQuizSession(quizId?: string) {
  clearLocalQuizSession(SESSION_STORAGE_KEY)
  void clearServerQuizSession(CATEGORY_ID, quizId)
}

export default function PhysicsQuizPage() {
  const quizStartTimeRef = useRef<number>(getTimestamp())
  const endsAtRef = useRef<number>(0)
  const finishedRef = useRef(false)
  const userAnswersRef = useRef<(number | null)[]>([])
  const sessionRestoredRef = useRef(false)
  const router = useRouter()

  const [currentQuizId, setCurrentQuizId] = useState('quiz-1')
  const questions = useMemo(() => {
    const currentQuiz = CATEGORY_QUIZZES[currentQuizId as keyof typeof CATEGORY_QUIZZES]
    return currentQuiz || []
  }, [currentQuizId])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([])
  const [loadingProgress, setLoadingProgress] = useState(true)
  const [sessionReady, setSessionReady] = useState(false)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null),
  )
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getQuizDurationSeconds(questions.length || 1))
  const [storedResults, setStoredResults] = useState<StoredResults>(() => loadStoredResults())
  const [activeSessionQuizId, setActiveSessionQuizId] = useState<string | null>(null)
  const [quizActive, setQuizActive] = useState(false)

  useEffect(() => {
    userAnswersRef.current = userAnswers
  }, [userAnswers])

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        setLoadingProgress(true)
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = await response.json()
          const categoryCompletedQuizzes =
            data.recentActivity
              ?.filter(
                (quiz: { categoryId: string; quizId: string }) =>
                  quiz.categoryId === CATEGORY_ID,
              )
              ?.map((quiz: { quizId: string }) => quiz.quizId) || []
          setCompletedQuizzes(categoryCompletedQuizzes)
        }
      } catch (error) {
        console.error('Error fetching progress:', error)
      } finally {
        setLoadingProgress(false)
      }
    }

    fetchUserProgress()
  }, [])

  const applySession = useCallback((session: QuizSession) => {
    const quizQuestions = CATEGORY_QUIZZES[session.quizId as keyof typeof CATEGORY_QUIZZES] || []
    if (quizQuestions.length === 0 || session.userAnswers.length !== quizQuestions.length) {
      clearQuizSession()
      return false
    }

    const safeQuestion = Math.min(
      Math.max(0, session.currentQuestion),
      Math.max(0, quizQuestions.length - 1),
    )
    const remaining = Math.max(0, Math.floor((session.endsAt - Date.now()) / 1000))

    finishedRef.current = false
    quizStartTimeRef.current = session.startedAt
    endsAtRef.current = session.endsAt
    setCurrentQuizId(session.quizId)
    setCurrentQuestion(safeQuestion)
    setUserAnswers(session.userAnswers)
    setTimeLeft(remaining)
    setShowResults(false)
    setActiveSessionQuizId(session.quizId)
    setQuizActive(true)
    return true
  }, [])

  const startFreshQuiz = useCallback((quizId: string, questionCount: number) => {
    const startedAt = getTimestamp()
    const endsAt = Date.now() + getQuizDurationSeconds(questionCount) * 1000
    finishedRef.current = false
    quizStartTimeRef.current = startedAt
    endsAtRef.current = endsAt
    setCurrentQuizId(quizId)
    setCurrentQuestion(0)
    setUserAnswers(new Array(questionCount).fill(null))
    setShowResults(false)
    setTimeLeft(getQuizDurationSeconds(questionCount))
    setActiveSessionQuizId(quizId)
    setQuizActive(true)
    saveQuizSession({
      quizId,
      currentQuestion: 0,
      userAnswers: new Array(questionCount).fill(null),
      endsAt,
      startedAt,
    })
  }, [])

  useEffect(() => {
    if (loadingProgress || sessionRestoredRef.current) return
    sessionRestoredRef.current = true

    const completed = completedQuizzes

    ;(async () => {
      const localSession = loadQuizSession()
      const { session: serverSession, sessions } = await fetchServerQuizSessions(CATEGORY_ID)
      const candidate =
        (localSession && !completed.includes(localSession.quizId) ? localSession : null) ||
        (serverSession &&
        typeof serverSession.quizId === 'string' &&
        !completed.includes(serverSession.quizId)
          ? (serverSession as QuizSession)
          : null) ||
        (sessions.find(
          (row) => typeof row.quizId === 'string' && !completed.includes(row.quizId as string),
        ) as QuizSession | undefined) ||
        null

      if (candidate?.quizId) {
        const quizQuestions =
          CATEGORY_QUIZZES[candidate.quizId as keyof typeof CATEGORY_QUIZZES] || []
        if (quizQuestions.length > 0 && candidate.userAnswers.length === quizQuestions.length) {
          setCurrentQuizId(candidate.quizId)
          setCurrentQuestion(
            Math.min(candidate.currentQuestion, Math.max(0, quizQuestions.length - 1)),
          )
          setUserAnswers(candidate.userAnswers)
          quizStartTimeRef.current = candidate.startedAt
          endsAtRef.current = candidate.endsAt
          setTimeLeft(Math.max(0, Math.floor((candidate.endsAt - Date.now()) / 1000)))
          setActiveSessionQuizId(candidate.quizId)
          setQuizActive(false)
          saveQuizSession(candidate)
        } else {
          clearQuizSession(candidate.quizId)
          setActiveSessionQuizId(null)
          setQuizActive(false)
        }
      } else {
        const firstIncomplete =
          Object.keys(CATEGORY_QUIZZES).find((id) => !completed.includes(id)) || 'chapter-1'
        setCurrentQuizId(firstIncomplete)
        setActiveSessionQuizId(null)
        setQuizActive(false)
      }

      setSessionReady(true)
    })()
  }, [loadingProgress, completedQuizzes])

  const updateUserProgress = useCallback(
    async (finalScore: number, correctAnswers: number, quizId: string, total: number) => {
      try {
        const studyTime = Math.round((getTimestamp() - quizStartTimeRef.current) / 1000 / 60)
        const quizTitle = `${CATEGORY_TITLE} — ${formatQuizLabel(quizId)}`

        const response = await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            categoryId: CATEGORY_ID,
            quizId,
            quizTitle,
            score: finalScore,
            totalQuestions: total,
            correctAnswers,
            studyTime,
          }),
        })

        if (!response.ok) {
          console.error('Failed to update progress')
        } else {
          setCompletedQuizzes((prev) => [...new Set([...prev, quizId])])
        }
      } catch (error) {
        console.error('Error updating progress:', error)
      }
    },
    [],
  )

  const finishQuiz = useCallback(
    (answers: (number | null)[]) => {
      if (finishedRef.current || questions.length === 0) return
      finishedRef.current = true
      saveStoredResult(currentQuizId, answers)
      setStoredResults(loadStoredResults())
      setCompletedQuizzes((prev) => [...new Set([...prev, currentQuizId])])
      setShowResults(true)
      setQuizActive(false)
      setActiveSessionQuizId(null)
      clearQuizSession(currentQuizId)
      const correctAnswers = answers.filter(
        (answer, index) => answer === questions[index].correct,
      ).length
      const finalScore = Math.round((correctAnswers / questions.length) * 100)
      updateUserProgress(finalScore, correctAnswers, currentQuizId, questions.length)
    },
    [questions, currentQuizId, updateUserProgress],
  )

  const isCurrentCompleted = completedQuizzes.includes(currentQuizId)

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || questions.length === 0 || isCurrentCompleted) return
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
  }, [sessionReady, quizActive, showResults, questions.length, currentQuizId, isCurrentCompleted])

  useEffect(() => {
    if (
      sessionReady &&
      quizActive &&
      timeLeft === 0 &&
      !showResults &&
      !isCurrentCompleted &&
      questions.length > 0 &&
      endsAtRef.current > 0
    ) {
      finishQuiz(userAnswersRef.current)
    }
  }, [sessionReady, quizActive, timeLeft, showResults, isCurrentCompleted, questions.length, finishQuiz])

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || isCurrentCompleted || questions.length === 0) return
    if (userAnswers.length !== questions.length) return

    saveQuizSession({
      quizId: currentQuizId,
      currentQuestion,
      userAnswers,
      endsAt: endsAtRef.current,
      startedAt: quizStartTimeRef.current,
    })
  }, [
    sessionReady,
    quizActive,
    showResults,
    isCurrentCompleted,
    questions.length,
    currentQuizId,
    currentQuestion,
    userAnswers,
  ])

  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || isCurrentCompleted) return
    return bindQuizSessionFlush(() => {
      if (userAnswersRef.current.length !== questions.length) return
      saveQuizSession({
        quizId: currentQuizId,
        currentQuestion,
        userAnswers: userAnswersRef.current,
        endsAt: endsAtRef.current,
        startedAt: quizStartTimeRef.current,
      })
    })
  }, [
    sessionReady,
    quizActive,
    showResults,
    isCurrentCompleted,
    questions.length,
    currentQuizId,
    currentQuestion,
  ])


  useEffect(() => {
    if (!sessionReady || !quizActive || showResults || isCurrentCompleted) return
    if (activeSessionQuizId === currentQuizId) return
    queueMicrotask(() => setActiveSessionQuizId(currentQuizId))
  }, [sessionReady, quizActive, showResults, isCurrentCompleted, currentQuizId, activeSessionQuizId])

  const resetQuizState = (quizId: string, nextLength: number) => {
    startFreshQuiz(quizId, nextLength)
  }

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

  const handleViewResults = (quizId: string) => {
    const saved = storedResults[quizId]?.answers
    const quizQuestions = CATEGORY_QUIZZES[quizId as keyof typeof CATEGORY_QUIZZES] || []
    const answers =
      saved && saved.length === quizQuestions.length
        ? saved
        : new Array(quizQuestions.length).fill(null)

    finishedRef.current = true
    const session = loadQuizSession()
    if (session?.quizId === quizId) {
      clearQuizSession(quizId)
      setActiveSessionQuizId(null)
    }
    setCurrentQuizId(quizId)
    setUserAnswers(answers)
    setShowResults(true)
    setQuizActive(false)
  }

  const handleNextQuiz = () => {
    const quizIds = Object.keys(CATEGORY_QUIZZES)
    const currentIndex = quizIds.indexOf(currentQuizId)
    const nextQuizId = quizIds
      .slice(currentIndex + 1)
      .find((quizId) => !completedQuizzes.includes(quizId))

    if (!nextQuizId) return

    const nextLength = CATEGORY_QUIZZES[nextQuizId as keyof typeof CATEGORY_QUIZZES].length
    resetQuizState(nextQuizId, nextLength)
  }

  const handleQuizSelect = (quizId: string) => {
    if (completedQuizzes.includes(quizId)) {
      handleViewResults(quizId)
      return
    }

    const session = loadQuizSession()
    if (session?.quizId === quizId) {
      applySession(session)
      return
    }

    const nextLength = CATEGORY_QUIZZES[quizId as keyof typeof CATEGORY_QUIZZES].length
    resetQuizState(quizId, nextLength)
  }

  const quizCards = (
    <div className="mt-8 rounded-xl bg-white px-2 py-8 shadow-2xl lg:px-8">
      <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">All Quizzes</h3>
      <p className="mb-8 text-center text-gray-600">
        {showResults
          ? 'Continue your learning journey with all available quizzes'
          : 'Switch between quizzes or continue your progress'}
      </p>

      {loadingProgress ? (
        <div className="flex items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-cyan-600" />
          <span className="ml-3 text-gray-600">Loading progress...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(CATEGORY_QUIZZES).map((quizId) => {
            const isCompleted = completedQuizzes.includes(quizId)
            const isCurrentQuiz = quizActive && quizId === currentQuizId && !showResults
            const isInProgress = activeSessionQuizId === quizId && !isCompleted
            const quizNumber = quizId.replace(/^quiz-/i, '')
            const questionCount =
              CATEGORY_QUIZZES[quizId as keyof typeof CATEGORY_QUIZZES].length

            return (
              <div
                key={quizId}
                className={`transform rounded-lg border-2 bg-linear-to-br from-gray-50 to-gray-100 px-2 py-6 transition-all duration-300 hover:scale-105 lg:px-6 ${
                  isCurrentQuiz || isInProgress
                    ? 'border-cyan-400 shadow-lg'
                    : 'border-gray-400 hover:shadow-lg'
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br ${CATEGORY_COLOR} lg:h-12 lg:w-12`}
                  >
                    <span className="text-sm font-bold text-white lg:text-lg">{quizNumber}</span>
                  </div>
                  {isCompleted ? (
                    <div className="flex items-center rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
                      Completed
                    </div>
                  ) : isInProgress ? (
                    <div className="flex items-center rounded-full bg-amber-500 px-2 py-1 text-xs font-medium text-white">
                      In progress
                    </div>
                  ) : null}
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-700">{formatQuizLabel(quizId)}</h4>
                <p className="mb-1 text-sm text-gray-600">{questionCount} Questions</p>
                <p className="mb-4 text-xs text-gray-500">{questionCount} min timer</p>
                {isCompleted ? (
                  <button
                    type="button"
                    onClick={() => handleViewResults(quizId)}
                    className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-cyan-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-lg transition-all duration-200 hover:from-cyan-700 hover:to-indigo-700 hover:shadow-xl sm:px-6"
                  >
                    View Results
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleQuizSelect(quizId)}
                    disabled={isCurrentQuiz}
                    className={`flex w-full items-center justify-center space-x-2 rounded-full bg-linear-to-r ${CATEGORY_COLOR} px-4 py-2 font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl sm:px-6 ${
                      isCurrentQuiz ? 'cursor-not-allowed opacity-75' : ''
                    }`}
                  >
                    <span>
                      {isCurrentQuiz
                        ? 'Current quiz'
                        : isInProgress
                          ? 'Resume Quiz'
                          : 'Start quiz'}
                    </span>
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/quizzes/general-awareness"
          className="inline-flex items-center rounded-lg bg-linear-to-r from-gray-600 to-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
        >
          Back to General Awareness
        </Link>
      </div>
    </div>
  )

  if (!sessionReady || loadingProgress) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white px-8 py-10 text-center shadow-xl">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-cyan-600" />
          <p className="text-sm text-gray-600">Restoring your quiz session...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-cyan-50 to-indigo-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">{CATEGORY_TITLE}</h1>
          <p className="mb-6 text-gray-600">No questions found.</p>
          <Link
            href="/quizzes/general-awareness"
            className="inline-flex rounded-full bg-linear-to-r from-cyan-600 to-indigo-600 px-6 py-2.5 font-medium text-white"
          >
            Back to General Awareness
          </Link>
        </div>
      </div>
    )
  }

  if (!quizActive && !showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-cyan-50 to-indigo-50 px-4 py-8 sm:px-4 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-2 text-center">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">{CATEGORY_TITLE}</h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              {activeSessionQuizId
                ? 'You have an unfinished quiz. Resume where you left off.'
                : 'Choose a chapter to begin.'}
            </p>
          </div>
          {quizCards}
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
    const quizIds = Object.keys(CATEGORY_QUIZZES)
    const currentIndex = quizIds.indexOf(currentQuizId)
    const nextIncompleteQuizId = quizIds
      .slice(currentIndex + 1)
      .find((quizId) => !completedQuizzes.includes(quizId))

    return (
      <div className="min-h-screen bg-linear-to-br from-cyan-50 to-indigo-50 px-3 py-8 sm:px-4 sm:py-12">
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
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-cyan-600 to-indigo-600 sm:mb-6 sm:h-32 sm:w-32">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">{percentage}%</div>
                  <div className="text-xs text-cyan-100 sm:text-sm">Score</div>
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
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                {CATEGORY_TITLE} - {formatQuizLabel(currentQuizId)}
              </p>
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
                <div className="mb-1 text-2xl font-bold text-cyan-600 sm:text-3xl">
                  {skippedAnswers}
                </div>
                <div className="text-xs font-medium text-cyan-700 sm:text-sm">Skipped</div>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mb-1 text-2xl font-bold text-blue-600 sm:text-3xl">
                  {questions.length}
                </div>
                <div className="text-xs font-medium text-blue-700 sm:text-sm">Total</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => router.push('/quizzes/general-awareness')}
                className="flex-1 rounded-full bg-linear-to-r from-cyan-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-cyan-700 hover:to-indigo-700 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                Back to General Awareness
              </button>
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="flex-1 rounded-full bg-linear-to-r from-slate-700 to-slate-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-slate-800 hover:to-slate-900 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                View Dashboard
              </button>
              {nextIncompleteQuizId ? (
                <button
                  type="button"
                  onClick={handleNextQuiz}
                  className="flex-1 rounded-full bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-green-800 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
                >
                  Next Quiz
                </button>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-cyan-950/10">
            <div className="relative overflow-hidden bg-linear-to-r from-slate-950 via-cyan-950 to-indigo-950 px-6 py-8 text-center sm:px-10 sm:py-10">
              <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl" />
              <h3 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Quiz Summary & Explanation
              </h3>
              <div className="relative mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-cyan-400 to-indigo-300" />
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
                      <div className="mt-3 rounded-2xl border border-cyan-100 bg-linear-to-br from-cyan-50 to-indigo-50 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                          Explanation:
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-cyan-900">
                          {question.explanation}
                        </p>
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </div>

          {quizCards}
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const selectedAnswer = userAnswers[currentQuestion]
  const answered = selectedAnswer !== null
  const timerUrgent = timeLeft <= 5 * 60

  if (isCurrentCompleted && !showResults) {
    return (
      <div className="min-h-screen bg-linear-to-br from-cyan-50 to-indigo-50 px-3 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg sm:p-8">
            <h1 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">{CATEGORY_TITLE}</h1>
            <p className="mb-1 text-sm font-medium text-cyan-700">
              {formatQuizLabel(currentQuizId)} is completed
            </p>
            <p className="mb-6 text-sm text-gray-600">
              This quiz is locked. You can view your summary and explanations below.
            </p>
            <button
              type="button"
              onClick={() => handleViewResults(currentQuizId)}
              className="rounded-full bg-linear-to-r from-cyan-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-cyan-700 hover:to-indigo-700"
            >
              View Results
            </button>
          </div>
          {quizCards}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 to-indigo-50 px-3 py-6 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 lg:p-8">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-3 text-lg font-bold text-gray-800 sm:mb-4 sm:text-xl lg:text-2xl">
              {CATEGORY_TITLE}
            </h1>
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-gray-600 sm:mb-4">
              <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800 sm:px-3 sm:text-sm">
                {formatQuizLabel(currentQuizId)}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 sm:px-3 sm:text-sm">
                {questions.length} Questions · {questions.length} min
              </span>
              <span
                className={`rounded-full px-2 py-1 font-mono text-xs font-semibold sm:px-3 sm:text-sm ${
                  timerUrgent ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-800'
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
                className="h-1.5 rounded-full bg-linear-to-r from-cyan-600 to-indigo-600 transition-all duration-300 ease-out sm:h-2"
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
                    ' border-gray-300 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-sm cursor-pointer'
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
                              : 'border-gray-300 group-hover:border-cyan-400'
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
                          <span className="text-xs font-medium text-gray-400 group-hover:text-cyan-400">
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

          <div className="flex items-center justify-between gap-3">
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
              className="rounded-md bg-linear-to-r from-cyan-600 to-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-cyan-700 hover:to-indigo-700 hover:shadow-xl sm:rounded-lg sm:px-8 sm:py-3 sm:text-base"
            >
              {currentQuestion === questions.length - 1
                ? 'Finish Quiz'
                : selectedAnswer === null
                  ? 'Skip to Next'
                  : 'Next Question'}
            </button>
          </div>
        </div>

        {quizCards}
      </div>
    </div>
  )
}
