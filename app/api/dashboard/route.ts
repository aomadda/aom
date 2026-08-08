import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth/session'
import { connectDB } from '@/lib/db'
import { QuizAttempt } from '@/lib/models/QuizAttempt'
import { User } from '@/lib/models/User'

type LeaderboardEntry = {
  fullName: string
  score: number
  rank: number
  isYou: boolean
}

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

        const topAttempts = await QuizAttempt.find({
          quizId: attempt.quizId,
          categoryId: attempt.categoryId,
        })
          .sort({ score: -1, completedAt: 1 })
          .limit(5)
          .lean()

        const userIds = [...new Set(topAttempts.map((row) => String(row.userId)))]
        const users = await User.find({ _id: { $in: userIds } })
          .select('fullName')
          .lean()
        const nameById = new Map(users.map((u) => [String(u._id), u.fullName]))

        const leaderboard: LeaderboardEntry[] = topAttempts.map((row, index) => ({
          fullName:
            String(row.userId) === session.userId
              ? 'You'
              : nameById.get(String(row.userId)) || 'User',
          score: row.score,
          rank: index + 1,
          isYou: String(row.userId) === session.userId,
        }))

        // Ensure current user appears in comparison even outside top 5.
        if (!leaderboard.some((row) => row.isYou)) {
          leaderboard.push({
            fullName: 'You',
            score: attempt.score,
            rank: betterCount + 1,
            isYou: true,
          })
        }

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
          leaderboard,
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
