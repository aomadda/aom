'use client'

import { setCurrentQuizUserId } from '@/lib/quiz-browser-storage'

/**
 * Keeps quiz localStorage keys scoped to the signed-in MongoDB user.
 * Runs during render (parent before children) so resume can read the correct key.
 */
export default function QuizUserSync({ userId }: { userId: string | null }) {
  setCurrentQuizUserId(userId)
  return null
}
