import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/lib/models/User'
import { formatZodErrors, forgotPasswordSchema } from '@/lib/validations/auth'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = forgotPasswordSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Please fix the highlighted fields.',
        fieldErrors: formatZodErrors(parsed.error),
      },
      { status: 400 },
    )
  }

  const { email, mobileNumber, newPassword } = parsed.data

  try {
    await connectDB()

    const user = await User.findOne({ email, mobileNumber }).select('+password')
    if (!user) {
      return NextResponse.json(
        {
          error: 'No account found with this email and mobile number.',
          fieldErrors: {
            email: 'Check email',
            mobileNumber: 'Check registered mobile number',
          },
        },
        { status: 404 },
      )
    }

    if ((user.status || 'pending') === 'rejected') {
      return NextResponse.json(
        { error: 'This account was rejected. Password reset is not allowed.' },
        { status: 403 },
      )
    }

    user.password = await bcrypt.hash(newPassword, 12)
    await user.save()

    return NextResponse.json({
      ok: true,
      message: 'Password updated successfully. Please login with your new password.',
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    const message =
      error instanceof Error && error.message.includes('MONGODB_URI')
        ? error.message
        : 'Unable to reset password. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
