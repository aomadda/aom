'use client'

import React, { useEffect, useState } from 'react'
import { Check, Loader2, RefreshCw, Trash2, Users, X } from 'lucide-react'

type UserStatus = 'pending' | 'accepted' | 'rejected'

type RegisteredUser = {
  id: string
  fullName: string
  designation: string
  department: string
  preparingPost: string
  division: string
  zone: string
  mobileNumber: string
  email: string
  status: UserStatus
  createdAt?: string
}

export default function AdminDashboardPage() {
  const [users, setUsers] = useState<RegisteredUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  const loadUsers = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/admin/users')
      const data = (await response.json()) as {
        users?: RegisteredUser[]
        error?: string
      }

      if (!response.ok) {
        setError(data.error || 'Unable to load registrations')
        setUsers([])
        return
      }

      setUsers(data.users || [])
    } catch {
      setError('Network error while loading registrations')
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const response = await fetch('/api/admin/users')
        const data = (await response.json()) as {
          users?: RegisteredUser[]
          error?: string
        }

        if (cancelled) return

        if (!response.ok) {
          setError(data.error || 'Unable to load registrations')
          setUsers([])
          return
        }

        setUsers(data.users || [])
        setError('')
      } catch {
        if (cancelled) return
        setError('Network error while loading registrations')
        setUsers([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  const updateStatus = async (userId: string, status: 'accepted' | 'rejected') => {
    setUpdatingId(userId)
    setError('')
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, status }),
      })

      const data = (await response.json()) as { error?: string }
      if (!response.ok) {
        setError(data.error || 'Unable to update user status')
        return
      }

      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? { ...user, status } : user)),
      )
    } catch {
      setError('Network error while updating user status')
    } finally {
      setUpdatingId(null)
    }
  }

  const deleteUser = async (userId: string, fullName: string) => {
    const confirmed = window.confirm(
      `Delete "${fullName}" permanently from MongoDB? This cannot be undone.`,
    )
    if (!confirmed) return

    setUpdatingId(userId)
    setError('')
    try {
      const response = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })

      const data = (await response.json()) as { error?: string }
      if (!response.ok) {
        setError(data.error || 'Unable to delete user')
        return
      }

      setUsers((prev) => prev.filter((user) => user.id !== userId))
    } catch {
      setError('Network error while deleting user')
    } finally {
      setUpdatingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-indigo-50 to-purple-50 px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              <Users className="h-3.5 w-3.5" />
              Admin Panel
            </div>
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Register Details</h1>
            <p className="mt-1 text-sm text-gray-600">
              Use Accept / Reject / Delete for each registration. ({users.length})
            </p>
          </div>

          <button
            type="button"
            onClick={() => void loadUsers()}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 rounded-3xl bg-white px-6 py-16 text-gray-600 shadow">
            <Loader2 className="h-5 w-5 animate-spin" />
            Loading registrations...
          </div>
        ) : error ? (
          <div className="rounded-3xl bg-white px-6 py-10 text-center text-red-600 shadow">{error}</div>
        ) : users.length === 0 ? (
          <div className="rounded-3xl bg-white px-6 py-16 text-center text-gray-500 shadow">
            No registrations found yet.
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {users.map((user, index) => {
              const busy = updatingId === user.id
              return (
                <div
                  key={user.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">
                      #{index + 1}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">{user.fullName}</h2>
                    <span
                      style={{
                        backgroundColor:
                          user.status === 'accepted'
                            ? '#dcfce7'
                            : user.status === 'rejected'
                              ? '#fee2e2'
                              : '#fef3c7',
                        color:
                          user.status === 'accepted'
                            ? '#166534'
                            : user.status === 'rejected'
                              ? '#991b1b'
                              : '#92400e',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                      }}
                    >
                      {user.status}
                    </span>
                  </div>

                  <div className="mb-5 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    <p>
                      <b>Designation:</b> {user.designation}
                    </p>
                    <p>
                      <b>Department:</b> {user.department}
                    </p>
                    <p>
                      <b>Preparing Post:</b> {user.preparingPost}
                    </p>
                    <p>
                      <b>Division:</b> {user.division}
                    </p>
                    <p>
                      <b>Zone:</b> {user.zone}
                    </p>
                    <p>
                      <b>Mobile:</b> {user.mobileNumber}
                    </p>
                    <p>
                      <b>Email:</b> {user.email}
                    </p>
                    <p>
                      <b>Registered:</b>{' '}
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString('en-IN')
                        : '—'}
                    </p>
                  </div>

                  {/* Always-visible action row */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginTop: '8px',
                    }}
                  >
                    <button
                      type="button"
                      disabled={busy || user.status === 'accepted'}
                      onClick={() => void updateStatus(user.id, 'accepted')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        minWidth: '140px',
                        padding: '14px 22px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: '#16a34a',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '15px',
                        cursor: busy || user.status === 'accepted' ? 'not-allowed' : 'pointer',
                        opacity: busy || user.status === 'accepted' ? 0.45 : 1,
                        boxShadow: '0 8px 16px rgba(22, 163, 74, 0.35)',
                      }}
                    >
                      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                      ACCEPT
                    </button>

                    <button
                      type="button"
                      disabled={busy || user.status === 'rejected'}
                      onClick={() => void updateStatus(user.id, 'rejected')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        minWidth: '140px',
                        padding: '14px 22px',
                        borderRadius: '12px',
                        border: '2px solid #b91c1c',
                        backgroundColor: '#dc2626',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '15px',
                        cursor: busy || user.status === 'rejected' ? 'not-allowed' : 'pointer',
                        opacity: busy || user.status === 'rejected' ? 0.45 : 1,
                        boxShadow: '0 8px 16px rgba(220, 38, 38, 0.45)',
                      }}
                    >
                      {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
                      REJECT
                    </button>

                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void deleteUser(user.id, user.fullName)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        minWidth: '140px',
                        padding: '14px 22px',
                        borderRadius: '12px',
                        border: '2px solid #7f1d1d',
                        backgroundColor: '#991b1b',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '15px',
                        cursor: busy ? 'not-allowed' : 'pointer',
                        opacity: busy ? 0.45 : 1,
                        boxShadow: '0 8px 16px rgba(153, 27, 27, 0.4)',
                      }}
                    >
                      {busy ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                      DELETE
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
