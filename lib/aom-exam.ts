export type AomExamQuestion = {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

export type AomQuestionStatus =
  | 'not-visited'
  | 'not-answered'
  | 'answered'
  | 'review'
  | 'answered-review'

export const AOM_EXAM_SECONDS_PER_QUESTION = 60
export const AOM_EXAM_NEGATIVE_MARK = 0.33
export const AOM_EXAM_POSITIVE_MARK = 1

export function getExamDurationSeconds(questionCount: number) {
  return Math.max(1, questionCount) * AOM_EXAM_SECONDS_PER_QUESTION
}

export function formatExamTimer(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds)
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function formatExamMarks(value: number) {
  const rounded = Math.round(value * 100) / 100
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2)
}

export function getQuestionStatus(
  visited: boolean,
  answered: boolean,
  markedForReview: boolean,
): AomQuestionStatus {
  if (!visited) return 'not-visited'
  if (markedForReview && answered) return 'answered-review'
  if (markedForReview) return 'review'
  if (answered) return 'answered'
  return 'not-answered'
}

export function scoreExam(questions: AomExamQuestion[], answers: (number | null)[]) {
  let correct = 0
  let wrong = 0
  let unanswered = 0

  questions.forEach((question, index) => {
    const answer = answers[index]
    if (answer === null || answer === undefined) {
      unanswered += 1
      return
    }
    if (answer === question.correct) {
      correct += 1
      return
    }
    wrong += 1
  })

  const marks =
    Math.round((correct * AOM_EXAM_POSITIVE_MARK - wrong * AOM_EXAM_NEGATIVE_MARK) * 100) / 100
  const maxMarks = questions.length * AOM_EXAM_POSITIVE_MARK
  const percentage = maxMarks === 0 ? 0 : Math.round((Math.max(0, marks) / maxMarks) * 100)

  return { correct, wrong, unanswered, marks, maxMarks, percentage }
}
