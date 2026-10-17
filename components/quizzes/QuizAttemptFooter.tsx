'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

import { getCurrentQuizUserId } from '@/lib/quiz-browser-storage'
import { quizIdentityFromHref } from '@/lib/quiz-identity'

type ProgressResponse = {
  recentActivity?: { categoryId: string; quizId: string }[]
}

let cachedIds: Set<string> | null = null
let loadPromise: Promise<Set<string>> | null = null
const listeners = new Set<(ids: Set<string>) => void>()

function readLocalAttemptIds() {
  const ids = new Set<string>()
  const suffix = `__u_${getCurrentQuizUserId()}`
  const marker = `_results${suffix}`
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index)
    if (!key?.endsWith(marker)) continue
    try {
      const parsed = JSON.parse(window.localStorage.getItem(key) || '') as { answers?: unknown }
      if (!Array.isArray(parsed.answers) || parsed.answers.length === 0) continue
      ids.add(key.slice(0, -marker.length))
    } catch {
      // ignore unreadable quiz results
    }
  }
  return ids
}

function loadAttemptIds() {
  if (!loadPromise) {
    loadPromise = (async () => {
      const ids = readLocalAttemptIds()
      try {
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = (await response.json()) as ProgressResponse
          for (const row of data.recentActivity ?? []) {
            if (row.categoryId && row.quizId) ids.add(`${row.categoryId}_${row.quizId}`)
          }
        }
      } catch {
        // local results still decide the buttons
      }
      cachedIds = ids
      listeners.forEach((listener) => listener(ids))
      return ids
    })().finally(() => {
      loadPromise = null
    })
  }
  return loadPromise
}

function useAttemptedQuizIds() {
  const [ids, setIds] = useState<Set<string>>(() => cachedIds ?? new Set())

  useEffect(() => {
    const listener = (next: Set<string>) => setIds(new Set(next))
    listeners.add(listener)
    if (cachedIds) listener(cachedIds)
    void loadAttemptIds()
    return () => {
      listeners.delete(listener)
    }
  }, [])

  return ids
}

function OpenLabel({ colorClass, label }: { colorClass: string; label: string }) {
  return (
    <div className="mt-auto border-t border-gray-200 pt-4">
      <div
        className={`inline-flex items-center bg-linear-to-r ${colorClass} bg-clip-text text-sm font-semibold text-transparent`}
      >
        {label}
        <svg
          className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default function QuizAttemptFooter({
  href,
  colorClass,
  idleLabel = 'Open test',
}: {
  href: string
  colorClass: string
  idleLabel?: string
}) {
  const router = useRouter()
  const attemptedIds = useAttemptedQuizIds()
  const identity = quizIdentityFromHref(href)
  const storageId = identity ? `${identity.categoryId}_${identity.quizId}` : ''
  const attempted = Boolean(storageId && attemptedIds.has(storageId))

  if (!attempted) {
    return <OpenLabel colorClass={colorClass} label={idleLabel} />
  }

  const open = (event: MouseEvent<HTMLButtonElement>, mode: 'result' | 'reattempt') => {
    event.preventDefault()
    event.stopPropagation()
    const query = mode === 'result' ? 'view=result' : 'reattempt=1'
    router.push(`${href}?${query}`)
  }

  return (
    <div
      className="mt-auto border-t border-gray-200 pt-4"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(event) => open(event, 'result')}
          className={`inline-flex items-center rounded-full bg-linear-to-r ${colorClass} px-4 py-2 text-sm font-semibold text-white`}
        >
          View Result
        </button>
        <button
          type="button"
          onClick={(event) => open(event, 'reattempt')}
          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Re-attempt
        </button>
      </div>
    </div>
  )
}
