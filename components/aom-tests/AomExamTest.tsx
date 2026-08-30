'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Flag,
  RotateCcw,
} from 'lucide-react'

import { scopedQuizStorageKey } from '@/lib/quiz-browser-storage'
import {
  bindQuizSessionFlush,
  clearLocalQuizSession,
  clearServerQuizSession,
  fetchServerQuizSessions,
  persistQuizSession,
  readLocalQuizSession,
  type ClientQuizSession,
} from '@/lib/quiz-session-client'
import { getTimestamp } from '@/lib/timestamp'
import {
  type AomExamQuestion,
  type AomQuestionStatus,
  AOM_EXAM_NEGATIVE_MARK,
  AOM_EXAM_POSITIVE_MARK,
  AOM_EXAM_SECONDS_PER_QUESTION,
  formatExamMarks,
  formatExamTimer,
  getExamDurationSeconds,
  getQuestionStatus,
  scoreExam,
} from '@/lib/aom-exam'

type ExamSession = ClientQuizSession & {
  visited?: boolean[]
  markedForReview?: boolean[]
}

type StoredResult = {
  answers: (number | null)[]
}

type AomExamTestProps = {
  title: string
  categoryId: string
  quizId: string
  questions: AomExamQuestion[]
  backHref: string
  backLabel: string
}

const STATUS_STYLES: Record<AomQuestionStatus, string> = {
  'not-visited': 'bg-slate-200 text-slate-700',
  'not-answered': 'bg-red-500 text-white',
  answered: 'bg-emerald-500 text-white',
  review: 'bg-violet-600 text-white',
  'answered-review': 'bg-violet-600 text-white',
}

const LEGEND: { status: AomQuestionStatus; label: string }[] = [
  { status: 'not-visited', label: 'You have not visited the question yet' },
  { status: 'not-answered', label: 'You have not answered the question' },
  { status: 'answered', label: 'You have answered the question' },
  {
    status: 'review',
    label: 'You have NOT answered the question but have marked the question for review',
  },
  {
    status: 'answered-review',
    label: 'You have answered the question but marked it for review',
  },
]

function boolArray(length: number, fill = false, source?: boolean[]) {
  return Array.from({ length }, (_, index) => Boolean(source?.[index] ?? fill))
}

function answerArray(length: number, source?: (number | null)[]) {
  return Array.from({ length }, (_, index) => {
    const value = source?.[index]
    return typeof value === 'number' ? value : null
  })
}

function StatusSwatch({ status }: { status: AomQuestionStatus }) {
  return (
    <span
      className={`relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${STATUS_STYLES[status]}`}
    >
      {status === 'answered-review' ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : null}
    </span>
  )
}

export default function AomExamTest({
  title,
  categoryId,
  quizId,
  questions,
  backHref,
  backLabel,
}: AomExamTestProps) {
  const router = useRouter()
  const resultsKey = `${categoryId}_${quizId}_results`
  const sessionKey = `${categoryId}_${quizId}_session`

  const startedAtRef = useRef(0)
  const endsAtRef = useRef(0)
  const finishedRef = useRef(false)
  const answersRef = useRef<(number | null)[]>([])
  const visitedRef = useRef<boolean[]>([])
  const reviewRef = useRef<boolean[]>([])
  const currentQuestionRef = useRef(0)
  const restoredRef = useRef(false)

  const [phase, setPhase] = useState<'loading' | 'instructions' | 'exam' | 'results'>('loading')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(() =>
    new Array(questions.length).fill(null),
  )
  const [visited, setVisited] = useState<boolean[]>(() => boolArray(questions.length))
  const [markedForReview, setMarkedForReview] = useState<boolean[]>(() =>
    boolArray(questions.length),
  )
  const [timeLeft, setTimeLeft] = useState(() => getExamDurationSeconds(questions.length || 1))
  const [acceptedRules, setAcceptedRules] = useState(false)
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [hasResume, setHasResume] = useState(false)

  const durationSeconds = getExamDurationSeconds(questions.length || 1)
  const durationMinutes = Math.ceil(durationSeconds / 60)

  useEffect(() => {
    answersRef.current = userAnswers
  }, [userAnswers])

  useEffect(() => {
    visitedRef.current = visited
  }, [visited])

  useEffect(() => {
    reviewRef.current = markedForReview
  }, [markedForReview])

  useEffect(() => {
    currentQuestionRef.current = currentQuestion
  }, [currentQuestion])

  const saveSession = useCallback(() => {
    if (questions.length === 0 || finishedRef.current) return
    void persistQuizSession({
      storageKey: sessionKey,
      categoryId,
      quizId,
      session: {
        quizId,
        currentQuestion: currentQuestionRef.current,
        userAnswers: answersRef.current,
        endsAt: endsAtRef.current,
        startedAt: startedAtRef.current,
        visited: visitedRef.current,
        markedForReview: reviewRef.current,
      } as ExamSession,
    })
  }, [categoryId, quizId, questions.length, sessionKey])

  const clearSession = useCallback(() => {
    clearLocalQuizSession(sessionKey)
    void clearServerQuizSession(categoryId, quizId)
  }, [categoryId, quizId, sessionKey])

  const applySession = useCallback(
    (session: ExamSession) => {
      if (session.userAnswers.length !== questions.length) return false
      const remaining = Math.max(0, Math.floor((session.endsAt - Date.now()) / 1000))
      if (remaining <= 0) return false

      const nextVisited = boolArray(questions.length, false, session.visited)
      nextVisited[Math.min(session.currentQuestion, questions.length - 1)] = true
      session.userAnswers.forEach((answer, index) => {
        if (answer !== null) nextVisited[index] = true
      })

      finishedRef.current = false
      startedAtRef.current = session.startedAt
      endsAtRef.current = session.endsAt
      setCurrentQuestion(Math.min(Math.max(0, session.currentQuestion), questions.length - 1))
      setUserAnswers(answerArray(questions.length, session.userAnswers))
      setVisited(nextVisited)
      setMarkedForReview(boolArray(questions.length, false, session.markedForReview))
      setTimeLeft(remaining)
      setHasResume(true)
      return true
    },
    [questions.length],
  )

  useEffect(() => {
    if (restoredRef.current) return
    restoredRef.current = true

    ;(async () => {
      try {
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = (await response.json()) as {
            recentActivity?: { categoryId: string; quizId: string }[]
          }
          const done = data.recentActivity?.some(
            (row) => row.categoryId === categoryId && row.quizId === quizId,
          )
          if (done) setCompleted(true)
        }
      } catch {
        // keep going even if progress is unavailable
      }

      const local = readLocalQuizSession(sessionKey) as ExamSession | null
      const { session: serverSession } = await fetchServerQuizSessions(categoryId, quizId)
      const candidate = (local?.userAnswers?.length === questions.length ? local : null) ||
        (serverSession?.userAnswers?.length === questions.length
          ? (serverSession as ExamSession)
          : null)

      if (candidate) {
        const applied = applySession(candidate)
        if (!applied) clearSession()
      }

      setPhase('instructions')
    })()
  }, [applySession, categoryId, clearSession, questions.length, quizId, sessionKey])

  const startExam = useCallback(
    (resume: boolean) => {
      if (questions.length === 0) return
      finishedRef.current = false

      if (resume && endsAtRef.current > Date.now()) {
        setVisited((prev) => {
          const next = [...prev]
          next[currentQuestion] = true
          return next
        })
        setPhase('exam')
        return
      }

      const startedAt = getTimestamp()
      const endsAt = Date.now() + durationSeconds * 1000
      const nextVisited = boolArray(questions.length)
      nextVisited[0] = true
      const nextAnswers = answerArray(questions.length)
      const nextReview = boolArray(questions.length)

      startedAtRef.current = startedAt
      endsAtRef.current = endsAt
      setCurrentQuestion(0)
      setUserAnswers(nextAnswers)
      setVisited(nextVisited)
      setMarkedForReview(nextReview)
      setTimeLeft(durationSeconds)
      setHasResume(true)
      setPhase('exam')
      void persistQuizSession({
        storageKey: sessionKey,
        categoryId,
        quizId,
        session: {
          quizId,
          currentQuestion: 0,
          userAnswers: nextAnswers,
          endsAt,
          startedAt,
          visited: nextVisited,
          markedForReview: nextReview,
        } as ExamSession,
      })
    },
    [categoryId, currentQuestion, durationSeconds, questions.length, quizId, sessionKey],
  )

  const finishExam = useCallback(
    (answers: (number | null)[]) => {
      if (finishedRef.current || questions.length === 0) return
      finishedRef.current = true
      setShowSubmitConfirm(false)
      setHasResume(false)
      setCompleted(true)
      setPhase('results')
      clearSession()

      try {
        window.localStorage.setItem(
          scopedQuizStorageKey(resultsKey),
          JSON.stringify({ answers } satisfies StoredResult),
        )
      } catch {
        // ignore storage failures
      }

      const { correct, marks, maxMarks, percentage } = scoreExam(questions, answers)
      void fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryId,
          quizId,
          quizTitle: title,
          score: percentage,
          totalQuestions: questions.length,
          correctAnswers: correct,
          studyTime: Math.round((getTimestamp() - startedAtRef.current) / 1000 / 60),
          marks,
          maxMarks,
        }),
      }).catch(() => {})
    },
    [categoryId, clearSession, questions, quizId, resultsKey, title],
  )

  const openStoredResults = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(scopedQuizStorageKey(resultsKey))
      const parsed = raw ? (JSON.parse(raw) as StoredResult) : null
      if (parsed?.answers?.length === questions.length) {
        setUserAnswers(answerArray(questions.length, parsed.answers))
      }
    } catch {
      // show whatever answers we already have
    }
    finishedRef.current = true
    setPhase('results')
  }, [questions.length, resultsKey])

  useEffect(() => {
    if (phase !== 'exam') return
    const tick = () => {
      const remaining = Math.max(0, Math.floor((endsAtRef.current - Date.now()) / 1000))
      setTimeLeft(remaining)
    }
    tick()
    const interval = window.setInterval(tick, 1000)
    return () => window.clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase === 'exam' && timeLeft === 0 && endsAtRef.current > 0) {
      finishExam(answersRef.current)
    }
  }, [finishExam, phase, timeLeft])

  useEffect(() => {
    if (phase !== 'exam') return
    saveSession()
  }, [phase, currentQuestion, userAnswers, visited, markedForReview, saveSession])

  useEffect(() => {
    if (phase !== 'exam') return
    return bindQuizSessionFlush(saveSession)
  }, [phase, saveSession])

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index)
    setVisited((prev) => {
      if (prev[index]) return prev
      const next = [...prev]
      next[index] = true
      return next
    })
  }

  const selectAnswer = (optionIndex: number) => {
    setUserAnswers((prev) => {
      const next = [...prev]
      next[currentQuestion] = optionIndex
      return next
    })
  }

  const clearResponse = () => {
    setUserAnswers((prev) => {
      const next = [...prev]
      next[currentQuestion] = null
      return next
    })
  }

  const markForReviewAndNext = () => {
    setMarkedForReview((prev) => {
      const next = [...prev]
      next[currentQuestion] = true
      return next
    })
    if (currentQuestion < questions.length - 1) goToQuestion(currentQuestion + 1)
  }

  const saveAndNext = () => {
    if (currentQuestion < questions.length - 1) {
      goToQuestion(currentQuestion + 1)
      return
    }
    setShowSubmitConfirm(true)
  }

  const counts = useMemo(() => {
    const tally = {
      visited: 0,
      answered: 0,
      notAnswered: 0,
      notVisited: 0,
      review: 0,
    }
    questions.forEach((_, index) => {
      const status = getQuestionStatus(
        visited[index],
        userAnswers[index] !== null,
        markedForReview[index],
      )
      if (status === 'not-visited') tally.notVisited += 1
      else tally.visited += 1
      if (userAnswers[index] !== null) tally.answered += 1
      else if (visited[index]) tally.notAnswered += 1
      if (markedForReview[index]) tally.review += 1
    })
    return tally
  }, [markedForReview, questions, userAnswers, visited])

  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 px-4">
        <div className="rounded-2xl bg-white px-8 py-10 text-center shadow-xl">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-violet-600" />
          <p className="text-sm text-gray-600">Preparing your test...</p>
        </div>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">{title}</h1>
          <p className="mb-6 text-gray-600">No questions found.</p>
          <Link
            href={backHref}
            className="inline-flex rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-2.5 font-medium text-white"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    )
  }

  if (phase === 'instructions') {
    return (
      <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-2xl shadow-violet-950/10">
            <div className="relative overflow-hidden bg-linear-to-r from-violet-700 via-purple-700 to-fuchsia-700 px-6 py-8 text-white sm:px-10">
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-fuchsia-300/20 blur-3xl" />
              <p className="relative text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase">
                AOM Tests
              </p>
              <h1 className="relative mt-2 text-2xl font-bold sm:text-3xl">{title}</h1>
              <p className="relative mt-2 max-w-2xl text-sm text-violet-100 sm:text-base">
                Read the instructions carefully before you start. The timer begins only after you
                begin the exam.
              </p>
            </div>

            <div className="grid gap-4 px-6 py-6 sm:grid-cols-3 sm:px-10">
              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
                <p className="text-xs font-semibold tracking-wide text-violet-600 uppercase">
                  Questions
                </p>
                <p className="mt-1 text-2xl font-bold text-violet-900">{questions.length}</p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50 p-4">
                <p className="text-xs font-semibold tracking-wide text-purple-600 uppercase">
                  Duration
                </p>
                <p className="mt-1 text-2xl font-bold text-purple-900">{durationMinutes} min</p>
                <p className="text-xs text-purple-700">
                  {AOM_EXAM_SECONDS_PER_QUESTION / 60} minute per question
                </p>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                <p className="text-xs font-semibold tracking-wide text-rose-600 uppercase">
                  Marking
                </p>
                <p className="mt-1 text-2xl font-bold text-rose-900">
                  +{AOM_EXAM_POSITIVE_MARK} / −{AOM_EXAM_NEGATIVE_MARK}
                </p>
                <p className="text-xs text-rose-700">Unanswered questions carry 0 marks</p>
              </div>
            </div>

            <div className="space-y-3 px-6 pb-6 sm:px-10">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                <BookOpen className="h-5 w-5 text-violet-600" />
                Exam instructions
              </h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                <li>The total time is based on the number of questions in this paper.</li>
                <li>
                  Each correct answer carries <strong>{AOM_EXAM_POSITIVE_MARK} mark</strong>. Each
                  wrong answer attracts a negative mark of <strong>{AOM_EXAM_NEGATIVE_MARK}</strong>.
                </li>
                <li>You may change your answer at any time before submitting the test.</li>
                <li>Use Mark for Review to come back to a question later.</li>
                <li>The test is submitted automatically when the timer reaches 00:00.</li>
                <li>Do not refresh or close the tab during the exam. Your attempt will be saved.</li>
              </ul>
            </div>

            <div className="mx-6 mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:mx-10 sm:p-5">
              <h3 className="mb-3 text-sm font-bold text-slate-800">Question palette</h3>
              <div className="space-y-2.5">
                {LEGEND.map((item) => (
                  <div key={item.status} className="flex items-start gap-3 text-sm text-slate-700">
                    <StatusSwatch status={item.status} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {completed ? (
              <div className="mx-6 mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 sm:mx-10">
                You have already submitted this test. You can view your result and explanations.
              </div>
            ) : null}

            {!completed ? (
              <label className="mx-6 mb-6 flex items-start gap-3 rounded-2xl border border-violet-100 bg-violet-50/70 px-4 py-3 text-sm text-slate-700 sm:mx-10">
                <input
                  type="checkbox"
                  checked={acceptedRules}
                  onChange={(event) => setAcceptedRules(event.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-violet-300 text-violet-600"
                />
                I have read and understood the instructions, marking scheme, and timer rules.
              </label>
            ) : null}

            <div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-5 sm:flex-row sm:px-10">
              <Link
                href={backHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                {backLabel}
              </Link>
              {completed ? (
                <button
                  type="button"
                  onClick={openStoredResults}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-violet-700 hover:to-purple-700"
                >
                  View result
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!acceptedRules}
                  onClick={() => startExam(hasResume)}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-violet-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {hasResume ? 'Resume exam' : 'Start exam'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'results') {
    const result = scoreExam(questions, userAnswers)
    return (
      <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-violet-500 uppercase">
                Result
              </p>
              <h1 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">{title}</h1>
              <div className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-fuchsia-600 text-white">
                <div>
                  <div className="text-2xl font-bold">{formatExamMarks(result.marks)}</div>
                  <div className="text-xs text-violet-100">/ {result.maxMarks}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Net marks after −{AOM_EXAM_NEGATIVE_MARK} for each wrong answer
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                <div className="text-2xl font-bold text-emerald-700">{result.correct}</div>
                <div className="text-xs font-medium text-emerald-800">Correct</div>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center">
                <div className="text-2xl font-bold text-red-700">{result.wrong}</div>
                <div className="text-xs font-medium text-red-800">Wrong</div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                <div className="text-2xl font-bold text-amber-700">{result.unanswered}</div>
                <div className="text-xs font-medium text-amber-800">Unanswered</div>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 text-center">
                <div className="text-2xl font-bold text-violet-700">{result.percentage}%</div>
                <div className="text-xs font-medium text-violet-800">Score</div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-slate-500">
              {result.correct} × {AOM_EXAM_POSITIVE_MARK} − {result.wrong} × {AOM_EXAM_NEGATIVE_MARK}{' '}
              = {formatExamMarks(result.marks)} marks
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={backHref}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white"
              >
                {backLabel}
              </Link>
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white"
              >
                View dashboard
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="bg-linear-to-r from-slate-950 via-violet-950 to-fuchsia-950 px-6 py-7 text-center text-white">
              <h2 className="text-2xl font-bold">Answer key & explanation</h2>
            </div>
            <ol className="divide-y divide-slate-100">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index]
                const skipped = userAnswer === null
                const isCorrect = userAnswer === question.correct
                return (
                  <li key={`${index}-${question.question.slice(0, 24)}`} className="px-5 py-6 sm:px-8">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-slate-800">Question {index + 1}</h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          skipped
                            ? 'bg-amber-100 text-amber-800'
                            : isCorrect
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {skipped ? 'Unanswered' : isCorrect ? 'Correct' : 'Wrong (−0.33)'}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {question.question}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
                          Your answer
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-800">
                          {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                        <p className="text-[11px] font-semibold tracking-wide text-emerald-700 uppercase">
                          Correct answer
                        </p>
                        <p className="mt-1 text-sm font-medium text-emerald-900">
                          {question.options[question.correct]}
                        </p>
                      </div>
                    </div>
                    {question.explanation ? (
                      <div className="mt-3 rounded-2xl border border-sky-100 bg-sky-50 p-4">
                        <p className="text-[11px] font-semibold tracking-wide text-sky-700 uppercase">
                          Explanation
                        </p>
                        <p className="mt-1 text-sm text-sky-900">{question.explanation}</p>
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

  const question = questions[currentQuestion]
  const selected = userAnswers[currentQuestion]
  const timerUrgent = timeLeft <= 5 * 60

  return (
    <div className="min-h-screen bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50 px-3 py-4 sm:px-4 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-xs font-semibold tracking-wide text-violet-600 uppercase">
              AOM Tests
            </p>
            <h1 className="text-lg font-bold text-slate-800 sm:text-xl">{title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              Q {currentQuestion + 1} / {questions.length}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-bold ${
                timerUrgent ? 'bg-red-100 text-red-700' : 'bg-violet-100 text-violet-800'
              }`}
              aria-live="polite"
            >
              <Clock className="h-4 w-4" />
              {formatExamTimer(timeLeft)}
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-6">
            <h2 className="mb-5 text-base leading-relaxed font-semibold text-slate-800 sm:text-lg">
              {currentQuestion + 1}. {question.question}
            </h2>
            <div className="space-y-2.5">
              {question.options.map((option, index) => {
                const isSelected = selected === index
                return (
                  <button
                    key={`${index}-${option}`}
                    type="button"
                    onClick={() => selectAnswer(index)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 px-3 py-3 text-left transition ${
                      isSelected
                        ? 'border-violet-500 bg-violet-50 text-violet-900 shadow-sm'
                        : 'border-slate-200 hover:border-violet-300 hover:bg-violet-50/60'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        isSelected ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-sm font-medium sm:text-base">{option}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => currentQuestion > 0 && goToQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={clearResponse}
                className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800"
              >
                <RotateCcw className="h-4 w-4" />
                Clear response
              </button>
              <button
                type="button"
                onClick={markForReviewAndNext}
                className="inline-flex items-center gap-1.5 rounded-lg bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-800"
              >
                <Flag className="h-4 w-4" />
                Mark for review & next
              </button>
              <button
                type="button"
                onClick={saveAndNext}
                className="inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white"
              >
                <CheckCircle2 className="h-4 w-4" />
                {currentQuestion === questions.length - 1 ? 'Save & submit' : 'Save & next'}
              </button>
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="ml-auto rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Submit test
              </button>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-lg sm:p-5">
              <h3 className="mb-3 text-sm font-bold text-slate-800">Question palette</h3>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 lg:grid-cols-5">
                {questions.map((_, index) => {
                  const status = getQuestionStatus(
                    visited[index],
                    userAnswers[index] !== null,
                    markedForReview[index],
                  )
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => goToQuestion(index)}
                      className={`relative flex h-10 items-center justify-center rounded-lg text-sm font-bold ${STATUS_STYLES[status]} ${
                        currentQuestion === index ? 'ring-2 ring-offset-2 ring-slate-800' : ''
                      }`}
                      aria-label={`Question ${index + 1}, ${status}`}
                    >
                      {index + 1}
                      {status === 'answered-review' ? (
                        <Check className="absolute right-0.5 bottom-0.5 h-3 w-3 text-emerald-300" />
                      ) : null}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:p-5">
              <h3 className="mb-3 text-sm font-bold text-slate-800">Status legend</h3>
              <div className="space-y-2.5">
                {LEGEND.map((item) => (
                  <div key={item.status} className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm">
                    <StatusSwatch status={item.status} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <p>Answered: {counts.answered}</p>
                <p>Not answered: {counts.notAnswered}</p>
                <p>Not visited: {counts.notVisited}</p>
                <p>Marked for review: {counts.review}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {showSubmitConfirm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2 text-amber-700">
              <AlertTriangle className="h-5 w-5" />
              <h2 className="text-lg font-bold text-slate-800">Submit test?</h2>
            </div>
            <p className="mb-4 text-sm text-slate-600">
              You cannot change answers after submitting. Negative marks of {AOM_EXAM_NEGATIVE_MARK}{' '}
              will be applied for each wrong answer.
            </p>
            <div className="mb-5 grid grid-cols-2 gap-2 text-sm">
              <p>Answered: {counts.answered}</p>
              <p>Not answered: {counts.notAnswered + counts.notVisited}</p>
              <p>Marked for review: {counts.review}</p>
              <p>Time left: {formatExamTimer(timeLeft)}</p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Continue exam
              </button>
              <button
                type="button"
                onClick={() => finishExam(userAnswers)}
                className="flex-1 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
