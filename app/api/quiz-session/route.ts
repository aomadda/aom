import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/session'
import { connectDB } from '@/lib/db'
import { QuizInProgress } from '@/lib/models/QuizInProgress'

type SessionBody = {
  categoryId?: unknown
  quizId?: unknown
  currentQuestion?: unknown
  userAnswers?: unknown
  endsAt?: unknown
  startedAt?: unknown
}

function isAnswerArray(value: unknown): value is (number | null)[] {
  return (
    Array.isArray(value) &&
    value.every((item) => item === null || (typeof item === 'number' && Number.isFinite(item)))
  )
}

export async function GET(request: Request) {
  const session = await getSession()
  if (!session || session.role === 'admin') {
    return NextResponse.json({ session: null })
  }

  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('categoryId')?.trim() || ''
  const quizId = searchParams.get('quizId')?.trim() || ''

  if (!categoryId) {
    return NextResponse.json({ error: 'categoryId is required' }, { status: 400 })
  }

  try {
    await connectDB()

    const query: Record<string, string> = {
      userId: session.userId,
      categoryId,
    }
    if (quizId) query.quizId = quizId

    const docs = await QuizInProgress.find(query).sort({ updatedAt: -1 }).lean()
    const sessions = docs.map((doc) => ({
      categoryId: doc.categoryId,
      quizId: doc.quizId,
      currentQuestion: doc.currentQuestion,
      userAnswers: doc.userAnswers as (number | null)[],
      endsAt: doc.endsAt,
      startedAt: doc.startedAt,
    }))

    return NextResponse.json({
      session: sessions[0] || null,
      sessions,
    })
  } catch (error) {
    console.error('Quiz session GET error:', error)
    return NextResponse.json({ session: null, sessions: [] })
  }
}

export async function PUT(request: Request) {
  const session = await getSession()
  if (!session || session.role === 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: SessionBody
  try {
    body = (await request.json()) as SessionBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const categoryId = typeof body.categoryId === 'string' ? body.categoryId.trim() : ''
  const quizId = typeof body.quizId === 'string' ? body.quizId.trim() : ''
  const currentQuestion =
    typeof body.currentQuestion === 'number' && Number.isFinite(body.currentQuestion)
      ? Math.max(0, Math.floor(body.currentQuestion))
      : -1
  const endsAt =
    typeof body.endsAt === 'number' && Number.isFinite(body.endsAt) ? body.endsAt : NaN
  const startedAt =
    typeof body.startedAt === 'number' && Number.isFinite(body.startedAt) ? body.startedAt : NaN

  if (!categoryId || !quizId || currentQuestion < 0 || Number.isNaN(endsAt) || Number.isNaN(startedAt)) {
    return NextResponse.json({ error: 'Invalid session payload' }, { status: 400 })
  }
  if (!isAnswerArray(body.userAnswers)) {
    return NextResponse.json({ error: 'userAnswers must be an array' }, { status: 400 })
  }

  try {
    await connectDB()

    // One in-progress quiz per category for cleaner resume UX.
    await QuizInProgress.deleteMany({
      userId: session.userId,
      categoryId,
      quizId: { $ne: quizId },
    })

    await QuizInProgress.findOneAndUpdate(
      { userId: session.userId, categoryId, quizId },
      {
        userId: session.userId,
        categoryId,
        quizId,
        currentQuestion,
        userAnswers: body.userAnswers,
        endsAt,
        startedAt,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    )

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Quiz session PUT error:', error)
    return NextResponse.json({ error: 'Unable to save session' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const session = await getSession()
  if (!session || session.role === 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('categoryId')?.trim() || ''
  const quizId = searchParams.get('quizId')?.trim() || ''

  if (!categoryId) {
    return NextResponse.json({ error: 'categoryId is required' }, { status: 400 })
  }

  try {
    await connectDB()
    const filter: Record<string, string> = {
      userId: session.userId,
      categoryId,
    }
    if (quizId) filter.quizId = quizId
    await QuizInProgress.deleteMany(filter)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Quiz session DELETE error:', error)
    return NextResponse.json({ error: 'Unable to clear session' }, { status: 500 })
  }
}
