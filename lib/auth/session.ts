import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import type { NextResponse } from 'next/server'
import { COOKIE_NAME, SESSION_DAYS } from '@/lib/auth/constants'

export type SessionRole = 'user' | 'admin'

export type SessionPayload = {
  userId: string
  email: string
  fullName: string
  role: SessionRole
}

function getSecret() {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('Missing AUTH_SECRET (min 16 characters) in .env.local')
  }
  return new TextEncoder().encode(secret)
}

function cookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  }
}

export async function createSessionToken(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(getSecret())
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    if (
      typeof payload.userId !== 'string' ||
      typeof payload.email !== 'string' ||
      typeof payload.fullName !== 'string'
    ) {
      return null
    }

    const role = payload.role === 'admin' ? 'admin' : 'user'

    return {
      userId: payload.userId,
      email: payload.email,
      fullName: payload.fullName,
      role,
    }
  } catch {
    return null
  }
}

export function attachSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(COOKIE_NAME, token, cookieOptions())
  return response
}

export function clearSessionCookieOnResponse(response: NextResponse) {
  response.cookies.set(COOKIE_NAME, '', { ...cookieOptions(), maxAge: 0 })
  return response
}

export async function clearSessionCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifySessionToken(token)
}
