import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { COOKIE_NAME } from '@/lib/auth/constants'

const PUBLIC_PAGE_PATHS = new Set(['/login', '/register', '/admin/login'])
const PUBLIC_API_PREFIXES = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/logout',
  '/api/auth/me',
  '/api/admin/login',
]

type SessionInfo = {
  valid: boolean
  role: 'user' | 'admin' | null
}

async function getSessionInfo(request: NextRequest): Promise<SessionInfo> {
  const token = request.cookies.get(COOKIE_NAME)?.value
  if (!token) return { valid: false, role: null }

  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) return { valid: false, role: null }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret))
    const role = payload.role === 'admin' ? 'admin' : 'user'
    return { valid: true, role }
  } catch {
    return { valid: false, role: null }
  }
}

function isPublicPath(pathname: string) {
  if (PUBLIC_PAGE_PATHS.has(pathname)) return true
  return PUBLIC_API_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = await getSessionInfo(request)

  const isAdminRoute =
    pathname === '/admin' ||
    (pathname.startsWith('/admin/') && pathname !== '/admin/login') ||
    pathname.startsWith('/api/admin/')

  if (!session.valid && !isPublicPath(pathname)) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = pathname.startsWith('/admin') ? '/admin/login' : '/login'
    loginUrl.search = ''
    if (pathname !== '/' && pathname !== '/admin') {
      loginUrl.searchParams.set('next', pathname)
    }
    return NextResponse.redirect(loginUrl)
  }

  if (session.valid && (pathname === '/login' || pathname === '/register')) {
    if (session.role === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (session.valid && pathname === '/admin/login') {
    if (session.role === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (isAdminRoute && pathname !== '/api/admin/login') {
    if (!session.valid || session.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
