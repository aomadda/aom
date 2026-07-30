'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Shield, Eye, EyeOff, Loader2 } from 'lucide-react'
import { formatZodErrors, loginSchema, type LoginInput } from '@/lib/validations/auth'

const inputClassName =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200'

const errorInputClassName =
  'w-full rounded-xl border border-red-300 bg-red-50/40 px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200'

const labelClassName = 'mb-1.5 block text-sm font-semibold text-gray-700'

export default function AdminLoginPage() {
  const router = useRouter()
  const [form, setForm] = useState<LoginInput>({ email: '', password: '' })
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
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const data = (await response.json()) as {
        error?: string
        fieldErrors?: Record<string, string>
      }

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors)
        setError(data.error || 'Admin login failed. Please try again.')
        return
      }

      router.push('/admin')
      router.refresh()
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = (name: string) =>
    fieldErrors[name] ? errorInputClassName : inputClassName

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-indigo-50 to-purple-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 to-indigo-700 shadow-lg">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Admin Login</h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Sign in to view registered aspirant details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-indigo-100 bg-white/95 p-6 shadow-xl shadow-indigo-500/10 backdrop-blur-sm sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="admin-email" className={labelClassName}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={fieldClass('email')}
                placeholder="admin@example.com"
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="admin-password" className={labelClassName}>
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  className={`${fieldClass('password')} pr-12`}
                  placeholder="Enter admin password"
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
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-slate-800 via-indigo-700 to-purple-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            {loading ? 'Signing in...' : 'Admin Login'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            User login?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Go to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
