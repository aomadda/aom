import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/lib/models/User'
import { Admin } from '@/lib/models/Admin'
import { ensureAdminAccount } from '@/lib/auth/ensureAdmin'
import { attachSessionCookie, createSessionToken } from '@/lib/auth/session'
import { formatZodErrors, loginSchema } from '@/lib/validations/auth'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = loginSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        fieldErrors: formatZodErrors(parsed.error),
      },
      { status: 400 },
    )
  }

  const { email, password } = parsed.data

  try {
    await connectDB()

    // Admin login (same login form)
    await ensureAdminAccount()
    const admin = await Admin.findOne({ email }).select('+password')
    if (admin?.password) {
      const isAdminValid = await bcrypt.compare(password, admin.password)
      if (isAdminValid) {
        const token = await createSessionToken({
          userId: admin._id.toString(),
          email: admin.email,
          fullName: admin.fullName,
          role: 'admin',
        })

        const response = NextResponse.json({
          ok: true,
          user: {
            id: admin._id.toString(),
            fullName: admin.fullName,
            email: admin.email,
            role: 'admin',
          },
        })

        return attachSessionCookie(response, token)
      }
    }

    const user = await User.findOne({ email }).select('+password')
    if (!user || !user.password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 },
      )
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 },
      )
    }

    const status = user.status || 'pending'
    if (status === 'pending') {
      return NextResponse.json(
        { error: 'Your registration is pending admin approval. Please try again later.' },
        { status: 403 },
      )
    }
    if (status === 'rejected') {
      return NextResponse.json(
        { error: 'Your registration was rejected by admin. Contact support for help.' },
        { status: 403 },
      )
    }

    const token = await createSessionToken({
      userId: user._id.toString(),
      email: user.email,
      fullName: user.fullName,
      role: 'user',
    })

    const response = NextResponse.json({
      ok: true,
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        preparingPost: user.preparingPost,
        role: 'user',
      },
    })

    return attachSessionCookie(response, token)
  } catch (error) {
    console.error('Login error:', error)
    const message =
      error instanceof Error && error.message.includes('MONGODB_URI')
        ? error.message
        : error instanceof Error && error.message.includes('AUTH_SECRET')
          ? error.message
          : error instanceof Error && error.message.includes('ADMIN_')
            ? error.message
            : 'Unable to login. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
