export const AUTH_USER_STORAGE_KEY = 'aom_current_user_id'

export function setCurrentQuizUserId(userId: string | null) {
  if (typeof window === 'undefined') return
  try {
    if (!userId) {
      window.localStorage.removeItem(AUTH_USER_STORAGE_KEY)
      return
    }
    window.localStorage.setItem(AUTH_USER_STORAGE_KEY, userId)
  } catch {
    // ignore quota / private mode
  }
}

export function getCurrentQuizUserId() {
  if (typeof window === 'undefined') return 'anon'
  try {
    return window.localStorage.getItem(AUTH_USER_STORAGE_KEY)?.trim() || 'anon'
  } catch {
    return 'anon'
  }
}

/** Keep quiz session/results isolated per logged-in user in the same browser. */
export function scopedQuizStorageKey(baseKey: string) {
  return `${baseKey}__u_${getCurrentQuizUserId()}`
}
