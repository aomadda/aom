'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, KeyRound, Loader2 } from 'lucide-react'
import {
  formatZodErrors,
  forgotPasswordSchema,
  type ForgotPasswordInput,
} from '@/lib/validations/auth'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200'

const errorInputClassName =
  'w-full rounded-lg border border-red-300 bg-red-50/40 px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200'

const labelClassName = 'mb-1.5 block text-sm font-semibold text-gray-700'

const initialForm: ForgotPasswordInput = {
  email: '',
  mobileNumber: '',
  newPassword: '',
  confirmPassword: '',
}

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [form, setForm] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (field: keyof ForgotPasswordInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setFieldErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setFieldErrors({})

    const parsed = forgotPasswordSchema.safeParse(form)
    if (!parsed.success) {
      setFieldErrors(formatZodErrors(parsed.error))
      setError('Please fill all fields correctly.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const data = (await response.json()) as {
        error?: string
        message?: string
        fieldErrors?: Record<string, string>
      }

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors)
        setError(data.error || 'Unable to reset password.')
        return
      }

      setSuccess(data.message || 'Password updated successfully.')
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = (name: string) =>
    fieldErrors[name] ? errorInputClassName : inputClassName

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30">
            <KeyRound className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Forgot Password</h1>
          <p className="mt-2 text-sm text-gray-600">
            Verify your email and registered mobile number to set a new password.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-500/10 sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className={labelClassName}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={fieldClass('email')}
                placeholder="Registered email"
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="mobileNumber" className={labelClassName}>
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobileNumber"
                type="tel"
                inputMode="numeric"
                required
                maxLength={10}
                value={form.mobileNumber}
                onChange={(e) =>
                  updateField('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                className={fieldClass('mobileNumber')}
                placeholder="Registered 10-digit mobile"
              />
              {fieldErrors.mobileNumber ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.mobileNumber}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="newPassword" className={labelClassName}>
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.newPassword}
                  onChange={(e) => updateField('newPassword', e.target.value)}
                  className={`${fieldClass('newPassword')} pr-12`}
                  placeholder="Min 8 chars, letters + numbers"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 p-1.5 text-gray-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {fieldErrors.newPassword ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.newPassword}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="confirmPassword" className={labelClassName}>
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  required
                  value={form.confirmPassword}
                  onChange={(e) => updateField('confirmPassword', e.target.value)}
                  className={`${fieldClass('confirmPassword')} pr-12`}
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((p) => !p)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 p-1.5 text-gray-500"
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {fieldErrors.confirmPassword ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.confirmPassword}</p>
              ) : null}
            </div>
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          {success ? (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {success}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            {loading ? 'Updating...' : 'Set New Password'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Remember password?{' '}
            <Link href="/login" className="font-semibold text-purple-600 hover:text-purple-700">
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
