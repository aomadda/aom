import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { USER_STATUSES, User, type UserStatus } from '@/lib/models/User'
import { QuizAttempt } from '@/lib/models/QuizAttempt'
import { getSession } from '@/lib/auth/session'

export async function GET() {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const users = await User.find({})
      .select('-password')
      .sort({ createdAt: -1 })
      .lean()

    return NextResponse.json({
      users: users.map((user) => {
        const createdAt =
          'createdAt' in user && user.createdAt
            ? new Date(user.createdAt as Date).toISOString()
            : undefined

        return {
          id: String(user._id),
          fullName: user.fullName,
          designation: user.designation,
          department: user.department,
          preparingPost: user.preparingPost,
          division: user.division,
          zone: user.zone,
          mobileNumber: user.mobileNumber,
          email: user.email,
          status: (user.status as UserStatus | undefined) || 'pending',
          createdAt,
        }
      }),
    })
  } catch (error) {
    console.error('Admin users error:', error)
    return NextResponse.json({ error: 'Unable to fetch registrations' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const payload = body as { userId?: unknown; status?: unknown }
  const userId = typeof payload.userId === 'string' ? payload.userId : ''
  const status = typeof payload.status === 'string' ? payload.status : ''

  if (!userId || !USER_STATUSES.includes(status as UserStatus)) {
    return NextResponse.json(
      { error: 'userId and valid status (pending|accepted|rejected) are required' },
      { status: 400 },
    )
  }

  if (status === 'pending') {
    return NextResponse.json({ error: 'Use accepted or rejected' }, { status: 400 })
  }

  try {
    await connectDB()

    const user = await User.findByIdAndUpdate(
      userId,
      { status },
      { new: true, runValidators: true },
    ).select('-password')

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      ok: true,
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        status: user.status,
      },
    })
  } catch (error) {
    console.error('Admin user status error:', error)
    return NextResponse.json({ error: 'Unable to update user status' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const session = await getSession()
  if (!session || session.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const userId =
    body && typeof body === 'object' && typeof (body as { userId?: unknown }).userId === 'string'
      ? (body as { userId: string }).userId.trim()
      : ''

  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 })
  }

  try {
    await connectDB()

    const user = await User.findByIdAndDelete(userId).select('-password')
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    await QuizAttempt.deleteMany({ userId: user._id })

    return NextResponse.json({
      ok: true,
      message: 'User deleted from MongoDB',
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
      },
    })
  } catch (error) {
    console.error('Admin user delete error:', error)
    return NextResponse.json({ error: 'Unable to delete user' }, { status: 500 })
  }
}
