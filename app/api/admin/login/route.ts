import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { Admin } from '@/lib/models/Admin'
import { ensureAdminAccount } from '@/lib/auth/ensureAdmin'
import { attachSessionCookie, createSessionToken } from '@/lib/auth/session'
import { formatZodErrors, adminLoginSchema } from '@/lib/validations/auth'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = adminLoginSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'All fields are required. Please fix the highlighted fields.',
        fieldErrors: formatZodErrors(parsed.error),
      },
      { status: 400 },
    )
  }

  const { email, password } = parsed.data

  try {
    await ensureAdminAccount()

    const admin = await Admin.findOne({ email }).select('+password')
    if (!admin || !admin.password) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const isValid = await bcrypt.compare(password, admin.password)
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

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
  } catch (error) {
    console.error('Admin login error:', error)
    const message =
      error instanceof Error && error.message.includes('MONGODB_URI')
        ? error.message
        : error instanceof Error && error.message.includes('AUTH_SECRET')
          ? error.message
          : 'Unable to login. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
