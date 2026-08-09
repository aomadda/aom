'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import {
  DEPARTMENTS,
  PREPARING_POSTS,
  formatZodErrors,
  registerSchema,
} from '@/lib/validations/auth'

const emptyForm = {
  fullName: '',
  designation: '',
  department: '',
  preparingPost: '',
  division: '',
  zone: '',
  mobileNumber: '',
  email: '',
  password: '',
}

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200'

const errorInputClassName =
  'w-full rounded-lg border border-red-300 bg-red-50/40 px-4 py-3 text-sm text-gray-800 shadow-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200'

const labelClassName = 'mb-1.5 block text-sm font-semibold text-gray-700'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState(emptyForm)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (field: keyof typeof emptyForm, value: string) => {
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

    const parsed = registerSchema.safeParse(form)
    if (!parsed.success) {
      setFieldErrors(formatZodErrors(parsed.error))
      setError('All fields are required. Please fill every field.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/auth/register', {
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
        setError(data.error || 'Registration failed. Please try again.')
        return
      }

      router.push('/login?registered=1')
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpeg"
              alt="AOM Aspirant profile"
              width={96}
              height={96}
              className="size-20 rounded-full border-4 border-purple-200 object-cover object-top shadow-xl sm:size-24"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Create Account</h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            All fields are required. Password must be 8+ characters with letters and numbers.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-500/10 backdrop-blur-sm sm:p-8"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className={labelClassName}>
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                required
                value={form.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={fieldClass('fullName')}
                placeholder="Enter your full name"
              />
              {fieldErrors.fullName ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="designation" className={labelClassName}>
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                id="designation"
                type="text"
                required
                value={form.designation}
                onChange={(e) => updateField('designation', e.target.value)}
                className={fieldClass('designation')}
                placeholder="e.g. Station Master"
              />
              {fieldErrors.designation ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.designation}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="department" className={labelClassName}>
                Department <span className="text-red-500">*</span>
              </label>
              <select
                id="department"
                required
                value={form.department}
                onChange={(e) => updateField('department', e.target.value)}
                className={fieldClass('department')}
              >
                <option value="">Select department</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {fieldErrors.department ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.department}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="preparingPost" className={labelClassName}>
                Preparing the Post <span className="text-red-500">*</span>
              </label>
              <select
                id="preparingPost"
                required
                value={form.preparingPost}
                onChange={(e) => updateField('preparingPost', e.target.value)}
                className={fieldClass('preparingPost')}
              >
                <option value="">Select post</option>
                {PREPARING_POSTS.map((post) => (
                  <option key={post} value={post}>
                    {post}
                  </option>
                ))}
              </select>
              {fieldErrors.preparingPost ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.preparingPost}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="division" className={labelClassName}>
                Division <span className="text-red-500">*</span>
              </label>
              <input
                id="division"
                type="text"
                required
                value={form.division}
                onChange={(e) => updateField('division', e.target.value)}
                className={fieldClass('division')}
                placeholder="e.g. Secunderabad"
              />
              {fieldErrors.division ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.division}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="zone" className={labelClassName}>
                Zone <span className="text-red-500">*</span>
              </label>
              <input
                id="zone"
                type="text"
                required
                value={form.zone}
                onChange={(e) => updateField('zone', e.target.value)}
                className={fieldClass('zone')}
                placeholder="e.g. South Central Railway"
              />
              {fieldErrors.zone ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.zone}</p>
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
                autoComplete="tel"
                required
                maxLength={10}
                value={form.mobileNumber}
                onChange={(e) =>
                  updateField('mobileNumber', e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                className={fieldClass('mobileNumber')}
                placeholder="10-digit mobile number"
              />
              {fieldErrors.mobileNumber ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.mobileNumber}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={fieldClass('email')}
                placeholder="you@example.com"
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="password" className={labelClassName}>
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={form.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  className={`${fieldClass('password')} pr-12`}
                  placeholder="Min 8 chars, letters + numbers"
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
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
            {loading ? 'Creating account...' : 'Register'}
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-purple-600 hover:text-purple-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
