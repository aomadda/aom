import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/session'
import { connectDB } from '@/lib/db'
import { QuizAttempt } from '@/lib/models/QuizAttempt'

export async function GET() {
  const session = await getSession()
  if (!session || session.role === 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const myAttempts = await QuizAttempt.find({ userId: session.userId })
      .sort({ completedAt: -1 })
      .lean()

    const completedQuizzes = await Promise.all(
      myAttempts.map(async (attempt) => {
        const betterCount = await QuizAttempt.countDocuments({
          quizId: attempt.quizId,
          categoryId: attempt.categoryId,
          $or: [
            { score: { $gt: attempt.score } },
            {
              score: attempt.score,
              completedAt: { $lt: attempt.completedAt },
            },
          ],
        })

        const totalParticipants = await QuizAttempt.countDocuments({
          quizId: attempt.quizId,
          categoryId: attempt.categoryId,
        })

        return {
          categoryId: attempt.categoryId,
          quizId: attempt.quizId,
          quizTitle: attempt.quizTitle,
          score: attempt.score,
          totalQuestions: attempt.totalQuestions,
          correctAnswers: attempt.correctAnswers,
          studyTime: attempt.studyTime ?? null,
          completedAt: attempt.completedAt.toISOString(),
          rank: betterCount + 1,
          totalParticipants,
        }
      }),
    )

    return NextResponse.json({
      fullName: session.fullName,
      email: session.email,
      totalCompleted: completedQuizzes.length,
      completedQuizzes,
    })
  } catch (error) {
    console.error('Dashboard fetch error:', error)
    return NextResponse.json({ error: 'Unable to load dashboard' }, { status: 500 })
  }
}
