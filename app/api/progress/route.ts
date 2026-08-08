import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/session'
import { connectDB } from '@/lib/db'
import { QuizAttempt } from '@/lib/models/QuizAttempt'
import { getQuizTitle } from '@/lib/quiz-titles'

const COOKIE_NAME = 'quiz_progress'
const MAX_ENTRIES = 40

type ProgressEntry = {
  categoryId: string
  quizId: string
  score: number
  totalQuestions?: number
  correctAnswers?: number
  studyTime?: number
  completedAt: string
}

function parseProgress(raw: string | undefined): ProgressEntry[] {
  if (!raw) return []
  try {
    const data = JSON.parse(raw) as unknown
    return Array.isArray(data) ? (data as ProgressEntry[]) : []
  } catch {
    return []
  }
}

function clearProgressCookie(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, '', {
    path: '/',
    maxAge: 0,
    sameSite: 'lax',
    httpOnly: true,
  })
}

export async function GET() {
  const session = await getSession()

  // Logged-in users: progress is per MongoDB account (never shared cookie).
  if (session && session.role !== 'admin') {
    try {
      await connectDB()
      const attempts = await QuizAttempt.find({ userId: session.userId })
        .sort({ completedAt: -1 })
        .lean()

      const recentActivity: ProgressEntry[] = attempts.map((attempt) => ({
        categoryId: attempt.categoryId,
        quizId: attempt.quizId,
        score: attempt.score,
        totalQuestions: attempt.totalQuestions,
        correctAnswers: attempt.correctAnswers,
        studyTime: typeof attempt.studyTime === 'number' ? attempt.studyTime : undefined,
        completedAt: attempt.completedAt.toISOString(),
      }))

      const response = NextResponse.json({ recentActivity })
      // Drop any leftover shared browser cookie from another account.
      clearProgressCookie(response)
      return response
    } catch (error) {
      console.error('Progress fetch error:', error)
      return NextResponse.json({ recentActivity: [] })
    }
  }

  const cookieStore = await cookies()
  const recentActivity = parseProgress(cookieStore.get(COOKIE_NAME)?.value)
  return NextResponse.json({ recentActivity })
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const categoryId = typeof body.categoryId === 'string' ? body.categoryId : ''
  const quizId = typeof body.quizId === 'string' ? body.quizId : ''
  const score = typeof body.score === 'number' ? body.score : NaN

  if (!categoryId || !quizId || Number.isNaN(score)) {
    return NextResponse.json({ error: 'Missing categoryId, quizId, or score' }, { status: 400 })
  }

  const entry: ProgressEntry = {
    categoryId,
    quizId,
    score,
    totalQuestions: typeof body.totalQuestions === 'number' ? body.totalQuestions : undefined,
    correctAnswers: typeof body.correctAnswers === 'number' ? body.correctAnswers : undefined,
    studyTime: typeof body.studyTime === 'number' ? body.studyTime : undefined,
    completedAt: new Date().toISOString(),
  }

  const session = await getSession()
  if (session && session.role !== 'admin') {
    try {
      await connectDB()
      const completedAt = new Date(entry.completedAt)
      const totalQuestions = typeof entry.totalQuestions === 'number' ? entry.totalQuestions : 0
      const correctAnswers =
        typeof entry.correctAnswers === 'number' ? entry.correctAnswers : 0
      const quizTitle =
        typeof body.quizTitle === 'string' && body.quizTitle.trim()
          ? body.quizTitle.trim()
          : getQuizTitle(quizId, categoryId)

      const existing = await QuizAttempt.findOne({
        userId: session.userId,
        categoryId,
        quizId,
      })

      if (!existing) {
        await QuizAttempt.create({
          userId: session.userId,
          categoryId,
          quizId,
          quizTitle,
          score,
          totalQuestions,
          correctAnswers,
          studyTime: entry.studyTime,
          completedAt,
        })
      } else if (
        score > existing.score ||
        (score === existing.score && completedAt < existing.completedAt)
      ) {
        existing.score = score
        existing.totalQuestions = totalQuestions
        existing.correctAnswers = correctAnswers
        existing.studyTime = entry.studyTime
        existing.quizTitle = quizTitle
        existing.completedAt = completedAt
        await existing.save()
      }
    } catch (error) {
      console.error('Failed to persist quiz attempt:', error)
    }

    const response = NextResponse.json({ ok: true })
    clearProgressCookie(response)
    return response
  }

  // Guests only: keep anonymous cookie progress.
  const cookieStore = await cookies()
  let recentActivity = parseProgress(cookieStore.get(COOKIE_NAME)?.value)
  recentActivity = recentActivity.filter(
    (q) => !(q.categoryId === categoryId && q.quizId === quizId),
  )
  recentActivity.unshift(entry)
  recentActivity = recentActivity.slice(0, MAX_ENTRIES)

  let payload = JSON.stringify(recentActivity)
  while (payload.length > 3800 && recentActivity.length > 1) {
    recentActivity = recentActivity.slice(0, -1)
    payload = JSON.stringify(recentActivity)
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, payload, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    httpOnly: true,
  })

  return response
}
