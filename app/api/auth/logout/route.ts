import { NextResponse } from 'next/server'
import { clearSessionCookieOnResponse } from '@/lib/auth/session'

const QUIZ_PROGRESS_COOKIE = 'quiz_progress'

export async function POST() {
  const response = NextResponse.json({ ok: true })
  clearSessionCookieOnResponse(response)
  response.cookies.set(QUIZ_PROGRESS_COOKIE, '', {
    path: '/',
    maxAge: 0,
    sameSite: 'lax',
    httpOnly: true,
  })
  return response
}
