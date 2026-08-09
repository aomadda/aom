'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { formatZodErrors, loginSchema, type LoginInput } from '@/lib/validations/auth'
import { setCurrentQuizUserId } from '@/lib/quiz-browser-storage'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200'

const errorInputClassName =
  'w-full rounded-lg border border-red-300 bg-red-50/40 px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200'

const labelClassName = 'mb-1.5 block text-sm font-semibold text-gray-700'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get('registered') === '1'
  const [form, setForm] = useState<LoginInput>({ identifier: '', password: '' })
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (field: keyof LoginInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
    setError('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setFieldErrors({})

    const parsed = loginSchema.safeParse(form)
    if (!parsed.success) {
      setFieldErrors(formatZodErrors(parsed.error))
      setError('All fields are required. Please fill every field.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const data = (await response.json()) as {
        error?: string
        fieldErrors?: Record<string, string>
        user?: { id?: string; role?: 'user' | 'admin' }
      }

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors)
        setError(data.error || 'Login failed. Please try again.')
        return
      }

      setCurrentQuizUserId(data.user?.id || null)

      if (data.user?.role === 'admin') {
        router.push('/admin')
        router.refresh()
        return
      }

      // Full navigation so session cookie is applied, then open Rule of the Day on home.
      try {
        sessionStorage.setItem('aom-open-rule-of-the-day', '1')
      } catch {
        // ignore storage errors
      }
      window.location.assign('/?ruleOfTheDay=1')
      return
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = (name: string) =>
    fieldErrors[name] ? errorInputClassName : inputClassName

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-lg">
        {/* Profile — small devices only, top center rounded circle */}
        <div className="mb-6 flex justify-center lg:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpeg"
            alt="AOM Aspirant profile"
            width={96}
            height={96}
            className="size-20 rounded-full border-4 border-purple-200 object-cover object-top shadow-xl sm:size-24"
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Login with registered email or mobile number.
          </p>
        </div>

        {registered ? (
          <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Registration successful. Please wait for admin approval, then login.
          </p>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-sm sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="identifier" className={labelClassName}>
                Email or Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="identifier"
                type="text"
                autoComplete="username"
                required
                value={form.identifier}
                onChange={(e) => updateField('identifier', e.target.value.trim())}
                className={fieldClass('identifier')}
                placeholder="Email or 10-digit mobile number"
              />
              {fieldErrors.identifier ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.identifier}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className={labelClassName}>
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  className={`${fieldClass('password')} pr-12`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {fieldErrors.password ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.password}</p>
              ) : null}
              <div className="mt-2 text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            {loading ? 'Signing in...' : 'Login'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            New to AOM Adda?{' '}
            <Link href="/register" className="font-semibold text-purple-600 hover:text-purple-700">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-600">
          Loading...
        </div>
      }
    >
      <LoginForm />
    </React.Suspense>
  )
}
