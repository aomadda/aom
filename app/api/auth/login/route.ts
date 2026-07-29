import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/lib/models/User'
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

    const token = await createSessionToken({
      userId: user._id.toString(),
      email: user.email,
      fullName: user.fullName,
    })

    const response = NextResponse.json({
      ok: true,
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        preparingPost: user.preparingPost,
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
          : 'Unable to login. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
