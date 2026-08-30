import { scopedQuizStorageKey } from '@/lib/quiz-browser-storage'

export type ClientQuizSession = {
  quizId?: string
  currentQuestion: number
  userAnswers: (number | null)[]
  endsAt: number
  startedAt: number
  visited?: boolean[]
  markedForReview?: boolean[]
}

type PersistArgs = {
  storageKey: string
  categoryId: string
  quizId: string
  session: ClientQuizSession
}

export function readLocalQuizSession(storageKey: string): ClientQuizSession | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(scopedQuizStorageKey(storageKey))
    if (!raw) return null
    const parsed = JSON.parse(raw) as ClientQuizSession
    if (
      !parsed ||
      typeof parsed.currentQuestion !== 'number' ||
      typeof parsed.endsAt !== 'number' ||
      typeof parsed.startedAt !== 'number' ||
      !Array.isArray(parsed.userAnswers)
    ) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function writeLocalQuizSession(storageKey: string, session: ClientQuizSession) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(scopedQuizStorageKey(storageKey), JSON.stringify(session))
  } catch (error) {
    console.error('Failed to save quiz session locally:', error)
  }
}

export function clearLocalQuizSession(storageKey: string) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(scopedQuizStorageKey(storageKey))
  } catch {
    // ignore
  }
}

export async function persistQuizSession({
  storageKey,
  categoryId,
  quizId,
  session,
}: PersistArgs) {
  writeLocalQuizSession(storageKey, { ...session, quizId })

  try {
    await fetch('/api/quiz-session', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        categoryId,
        quizId,
        currentQuestion: session.currentQuestion,
        userAnswers: session.userAnswers,
        endsAt: session.endsAt,
        startedAt: session.startedAt,
      }),
      keepalive: true,
    })
  } catch (error) {
    console.error('Failed to sync quiz session:', error)
  }
}

export async function fetchServerQuizSessions(categoryId: string, quizId?: string) {
  try {
    const params = new URLSearchParams({ categoryId })
    if (quizId) params.set('quizId', quizId)
    const response = await fetch(`/api/quiz-session?${params.toString()}`)
    if (!response.ok) return { session: null as ClientQuizSession | null, sessions: [] as ClientQuizSession[] }
    const data = (await response.json()) as {
      session?: ClientQuizSession | null
      sessions?: ClientQuizSession[]
    }
    return {
      session: data.session || null,
      sessions: Array.isArray(data.sessions) ? data.sessions : [],
    }
  } catch {
    return { session: null as ClientQuizSession | null, sessions: [] as ClientQuizSession[] }
  }
}

export async function clearServerQuizSession(categoryId: string, quizId?: string) {
  try {
    const params = new URLSearchParams({ categoryId })
    if (quizId) params.set('quizId', quizId)
    await fetch(`/api/quiz-session?${params.toString()}`, {
      method: 'DELETE',
      keepalive: true,
    })
  } catch (error) {
    console.error('Failed to clear server quiz session:', error)
  }
}

export function bindQuizSessionFlush(save: () => void) {
  if (typeof window === 'undefined') return () => {}

  const onHide = () => {
    if (document.visibilityState === 'hidden') save()
  }

  window.addEventListener('pagehide', save)
  document.addEventListener('visibilitychange', onHide)
  return () => {
    window.removeEventListener('pagehide', save)
    document.removeEventListener('visibilitychange', onHide)
  }
}
