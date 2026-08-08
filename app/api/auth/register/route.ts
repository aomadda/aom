import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { connectDB } from '@/lib/db'
import { User } from '@/lib/models/User'
import { formatZodErrors, registerSchema } from '@/lib/validations/auth'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = registerSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'All fields are required. Please fix the highlighted fields.',
        fieldErrors: formatZodErrors(parsed.error),
      },
      { status: 400 },
    )
  }

  const data = parsed.data

  try {
    await connectDB()

    const existing = await User.findOne({
      $or: [{ email: data.email }, { mobileNumber: data.mobileNumber }],
    }).lean()

    if (existing) {
      const fieldErrors: Record<string, string> = {}
      if (existing.email === data.email) {
        fieldErrors.email = 'An account with this email already exists'
      }
      if (existing.mobileNumber === data.mobileNumber) {
        fieldErrors.mobileNumber = 'An account with this mobile number already exists'
      }
      return NextResponse.json(
        { error: 'Account already exists', fieldErrors },
        { status: 409 },
      )
    }

    const passwordHash = await bcrypt.hash(data.password, 12)

    // Persist every registration field into MongoDB `users` collection.
    const user = await User.create({
      fullName: data.fullName,
      designation: data.designation,
      department: data.department,
      preparingPost: data.preparingPost,
      division: data.division,
      zone: data.zone,
      mobileNumber: data.mobileNumber,
      email: data.email,
      password: passwordHash,
      status: 'pending',
    })

    return NextResponse.json(
      {
        ok: true,
        message: 'Registration submitted. Please wait for admin approval before login.',
        user: {
          id: user._id.toString(),
          fullName: user.fullName,
          designation: user.designation,
          department: user.department,
          preparingPost: user.preparingPost,
          division: user.division,
          zone: user.zone,
          mobileNumber: user.mobileNumber,
          email: user.email,
          status: user.status,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Register error:', error)
    const message =
      error instanceof Error && error.message.includes('MONGODB_URI')
        ? error.message
        : error instanceof Error && error.message.includes('AUTH_SECRET')
          ? error.message
          : 'Unable to create account. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
