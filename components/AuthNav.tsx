'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut, Loader2 } from 'lucide-react'

export type AuthUser = {
  fullName: string
  email: string
  role?: 'user' | 'admin'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setMenuOpen(false)
      onNavigate?.()
      router.push('/login')
      router.refresh()
    } finally {
      setLoggingOut(false)
    }
  }

  if (user) {
    const isMobile = variant === 'mobile'
    const displayName = user.fullName.trim().slice(0, 8)

    return (
      <div ref={menuRef} className={`relative ${isMobile ? 'w-full' : ''}`}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-label={`Account menu for ${user.fullName}`}
          className={`inline-flex h-10 items-center rounded-full border border-white/20 bg-white/15 px-4 text-white shadow-md backdrop-blur-sm transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
            isMobile ? 'h-12 w-full justify-center rounded-xl px-4 py-3 text-base' : ''
          }`}
        >
          <span
            className={`font-semibold ${
              isMobile ? 'w-full text-center text-base' : 'text-sm'
            }`}
          >
            {displayName}
          </span>
        </button>

        {menuOpen ? (
          <div
            role="menu"
            className={`absolute z-50 mt-2 overflow-hidden rounded-xl border border-purple-100 bg-white shadow-xl ${
              isMobile ? 'left-0 right-0 w-full' : 'right-0 min-w-44'
            }`}
          >
            <div className="border-b border-gray-100 px-4 py-3">
              <p className="truncate text-sm font-semibold text-gray-800">{user.fullName}</p>
              <p className="truncate text-xs text-gray-500">{user.email}</p>
            </div>
            <Link
              href="/dashboard"
              role="menuitem"
              onClick={() => {
                setMenuOpen(false)
                onNavigate?.()
              }}
              className="flex w-full items-center gap-2 border-b border-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-800"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex w-full items-center gap-2 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-70"
            >
              {loggingOut ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4" />
              )}
              Logout
            </button>
          </div>
        ) : null}
      </div>
    )
  }

  if (variant === 'mobile') {
    return (
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
    )
  }

  return (
    <Link
      href="/register"
      className={`inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
        pathname === '/register'
          ? 'bg-white text-purple-700 shadow-lg'
          : 'border border-white/20 bg-white/15 text-white hover:bg-white/25'
      }`}
    >
      Register
    </Link>
  )
}
