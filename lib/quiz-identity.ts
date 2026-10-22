const CHAPTER_CATEGORIES = new Set([
  'accident-manual',
  'block-working-manual',
  'commercial-department',
  'disaster-management',
  'general-subsidiary-rules',
  'operating-department',
  'operating-manual',
  'railway-current-affairs-2026',
  'railway-gk',
  'railway-statistics',
  'rajabhasha',
])

const TOPIC_INDEXES = new Set(['kavach', 'national-rail-plan'])

export type QuizIdentity = {
  categoryId: string
  quizId: string
}

/** Match the categoryId and quizId stored by AomExamTest for a listing-card href. */
export function quizIdentityFromHref(href: string): QuizIdentity | null {
  const parts = href.split('/').filter(Boolean)

  if (parts[0] === 'aom-tests' && parts.length === 3) {
    if (parts[1] === 'aom-previous-years-papers') {
      const quizId = parts[2].replace(/-percent-/g, '%-')
      return { categoryId: quizId, quizId }
    }
    const quizId = parts[2].replace(/test(\d{2})$/, 'test-$1')
    return { categoryId: parts[1], quizId }
  }

  if (parts[0] !== 'quizzes') return null

  if (parts[1] === 'professional-subject' && parts.length === 3) {
    if (TOPIC_INDEXES.has(parts[2])) return null
    return { categoryId: 'professional-subject', quizId: parts[2] }
  }

  if (parts[1] === 'professional-subject' && parts.length === 4) {
    return { categoryId: parts[2], quizId: parts[3] }
  }

  if (parts[1] === 'general-awareness' && parts.length === 4) {
    return { categoryId: `general-awareness-${parts[2]}`, quizId: parts[3] }
  }

  if (parts[1] === 'accident-manual' && parts[2] === 'am-appendix-v') {
    return { categoryId: 'accident-manual', quizId: 'AM Appendix V' }
  }

  if (parts.length === 3 && CHAPTER_CATEGORIES.has(parts[1])) {
    return { categoryId: parts[1], quizId: parts[2] }
  }

  if (parts[1] === 'establishment-rules' && parts[2] === 'railway-servants-leave-rules-1949') {
    if (parts.length === 4) {
      return { categoryId: 'railway-servants-leave-rules-1949', quizId: parts[3] }
    }
    return null
  }

  if (parts[1] === 'establishment-rules' && parts[2] === 'railway-servants-pass-rules-1986') {
    if (parts.length === 4) {
      return { categoryId: 'railway-servants-pass-rules-1986', quizId: parts[3] }
    }
    return null
  }

  if (
    parts.length === 3 &&
    (parts[1] === 'establishment-rules' || parts[1] === 'financial-rules')
  ) {
    const quizId = parts[2]
    const categoryId = quizId === 'annual-performance-appraisal-report' ? 'apar' : quizId
    return { categoryId, quizId }
  }

  return null
}
