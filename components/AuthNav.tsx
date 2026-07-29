'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LogOut, Loader2 } from 'lucide-react'

export type AuthUser = {
  fullName: string
  email: string
} | null

type AuthNavProps = {
  user: AuthUser
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export default function AuthNav({ user, variant = 'desktop', onNavigate }: AuthNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      onNavigate?.()
      router.push('/login')
      router.refresh()
    } finally {
      setLoggingOut(false)
    }
  }

  if (user) {
    if (variant === 'mobile') {
      return (
        <>
          <div className="px-4 py-3 text-sm font-medium text-white/90 bg-white/10 rounded-lg border border-white/20">
            Hi, {user.fullName.split(' ')[0]}
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white bg-red-500/80 hover:bg-red-500 border border-white/20 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
            Logout
          </button>
        </>
      )
    }

    return (
      <div className="flex items-center gap-2">
        <span className="hidden lg:inline max-w-32 truncate text-sm font-medium text-white/90">
          Hi, {user.fullName.split(' ')[0]}
        </span>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-base font-semibold text-purple-700 shadow-lg transition hover:bg-white/90 disabled:opacity-70"
        >
          {loggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
          Logout
        </button>
      </div>
    )
  }

  if (variant === 'mobile') {
    return (
      <>
        <Link
          href="/login"
          onClick={onNavigate}
          className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
            pathname === '/login'
              ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
              : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
          }`}
        >
          Login
        </Link>
        <Link
          href="/register"
          onClick={onNavigate}
          className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
            pathname === '/register'
              ? 'bg-white text-purple-700 shadow-lg'
              : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
          }`}
        >
          Register
        </Link>
      </>
    )
  }

  return (
    <>
      <Link
        href="/login"
        className={`relative rounded-xl px-4 py-2.5 text-base font-semibold transition-all duration-300 ${
          pathname === '/login'
            ? 'bg-white/25 text-white shadow-lg'
            : 'text-white/90 hover:bg-white/15'
        }`}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={`relative rounded-xl px-5 py-2.5 text-base font-semibold transition-all duration-300 ${
          pathname === '/register'
            ? 'bg-white text-purple-700 shadow-lg'
            : 'bg-white/15 text-white hover:bg-white/25'
        }`}
      >
        Register
      </Link>
    </>
  )
}
