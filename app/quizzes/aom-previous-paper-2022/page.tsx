'use client'

import { getTimestamp } from '@/lib/timestamp'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { aomPreviousPaper2022 } from '@/assets/aom-previous-paper-2022/aom-previous-paper-2022'

type QuizQuestion = {
  question: string
  options: string[]
  correct: number
  explanation?: string
}

const QUIZ_ID = 'aom-previous-paper-2022'
const CATEGORY_ID = 'aom-previous-paper-2022'

export default function AomPreviousPaper2022Quiz() {
  const quizStartTimeRef = useRef<number>(0)
  const router = useRouter()

  React.useEffect(() => {
    quizStartTimeRef.current = getTimestamp()
  }, [])

  const questions = (aomPreviousPaper2022.quizzes[QUIZ_ID] || []) as QuizQuestion[]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null),
  )
  const [showResults, setShowResults] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(true)

  React.useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        setLoadingProgress(true)
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = await response.json()
          const done =
            data.recentActivity?.some(
              (quiz: { categoryId: string; quizId: string }) =>
                quiz.categoryId === CATEGORY_ID && quiz.quizId === QUIZ_ID,
            ) || false
          setCompleted(done)
        }
      } catch (error) {
        console.error('Error fetching progress:', error)
      } finally {
        setLoadingProgress(false)
      }
    }

    fetchUserProgress()
  }, [])

  const updateUserProgress = async (finalScore: number, correctAnswers: number) => {
    try {
      const studyTime = Math.round((getTimestamp() - quizStartTimeRef.current) / 1000 / 60)

      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryId: CATEGORY_ID,
          quizId: QUIZ_ID,
          score: finalScore,
          totalQuestions: questions.length,
          correctAnswers,
          studyTime,
        }),
      })

      if (response.ok) {
        setCompleted(true)
      } else {
        console.error('Failed to update progress')
      }
    } catch (error) {
      console.error('Error updating progress:', error)
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const next = [...userAnswers]
    next[currentQuestion] = answerIndex
    setUserAnswers(next)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }

    setShowResults(true)
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correct,
    ).length
    const finalScore = Math.round((correctAnswers / questions.length) * 100)
    updateUserProgress(finalScore, correctAnswers)
  }

  const handleRestart = () => {
    quizStartTimeRef.current = getTimestamp()
    setCurrentQuestion(0)
    setUserAnswers(new Array(questions.length).fill(null))
    setShowResults(false)
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-emerald-50 to-teal-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-2 text-xl font-bold text-gray-800">AOM Previous Paper 2022</h1>
          <p className="mb-6 text-gray-600">No questions found.</p>
          <Link
            href="/quizzes"
            className="inline-flex rounded-full bg-linear-to-r from-emerald-600 to-teal-700 px-6 py-2.5 font-medium text-white"
          >
            Back to Quizzes
          </Link>
        </div>
      </div>
    )
  }

  if (showResults) {
    const correctAnswers = userAnswers.filter(
      (answer, index) => answer === questions[index].correct,
    ).length
    const wrongAnswers = questions.length - correctAnswers
    const percentage = Math.round((correctAnswers / questions.length) * 100)

    return (
      <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 px-3 py-8 sm:px-4 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              Quiz Completed!
            </h1>
            <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
              Great job! Here&apos;s how you performed
            </p>
          </div>

          <div className="mb-6 rounded-2xl bg-white p-6 shadow-2xl sm:mb-8 sm:rounded-3xl sm:p-8">
            <div className="mb-6 text-center sm:mb-8">
              <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 sm:mb-6 sm:h-32 sm:w-32">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white sm:text-3xl">{percentage}%</div>
                  <div className="text-xs text-emerald-100 sm:text-sm">Score</div>
                </div>
              </div>
              <h2 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl lg:text-2xl">
                {percentage >= 80
                  ? 'Excellent!'
                  : percentage >= 60
                    ? 'Good Job!'
                    : percentage >= 40
                      ? 'Not Bad!'
                      : 'Keep Practicing!'}
              </h2>
              <p className="text-sm text-gray-600 sm:text-base">
                You got {correctAnswers} out of {questions.length} questions correct
              </p>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">AOM Previous Paper 2022</p>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 sm:mb-4 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-bold text-green-600 sm:mb-2 sm:text-3xl">
                  {correctAnswers}
                </div>
                <div className="text-xs font-medium text-green-700 sm:text-sm lg:text-base">
                  Correct Answers
                </div>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 sm:mb-4 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-bold text-red-600 sm:mb-2 sm:text-3xl">
                  {wrongAnswers}
                </div>
                <div className="text-xs font-medium text-red-700 sm:text-sm lg:text-base">
                  Wrong Answers
                </div>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center sm:rounded-2xl sm:p-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 sm:mb-4 sm:h-16 sm:w-16">
                  <svg className="h-6 w-6 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mb-1 text-2xl font-bold text-blue-600 sm:mb-2 sm:text-3xl">
                  {questions.length}
                </div>
                <div className="text-xs font-medium text-blue-700 sm:text-sm lg:text-base">
                  Total Questions
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => router.push('/quizzes')}
                className="flex-1 rounded-full bg-linear-to-r from-emerald-600 to-teal-700 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-emerald-700 hover:to-teal-800 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                Back to Quizzes
              </button>
              <button
                onClick={handleRestart}
                className="flex-1 rounded-full bg-linear-to-r from-green-600 to-green-700 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-green-800 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
              >
                Retake Quiz
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-2xl sm:p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">Question Review</h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index]
                const isCorrect = userAnswer === question.correct

                return (
                  <div
                    key={`${index}-${question.question.slice(0, 24)}`}
                    className={`rounded-xl border-2 p-4 ${
                      isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-gray-800">Question {index + 1}</h4>
                      <div
                        className={`rounded-full px-3 py-1 text-sm font-medium text-white ${
                          isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </div>
                    </div>
                    <p className="mb-2 text-gray-700">{question.question}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Your answer:</span>{' '}
                      {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                    </div>
                    {!isCorrect && (
                      <div className="mt-1 text-sm text-green-700">
                        <span className="font-medium">Correct answer:</span>{' '}
                        {question.options[question.correct]}
                      </div>
                    )}
                    {question.explanation ? (
                      <div className="mt-2 rounded bg-blue-50 p-2 text-sm text-blue-700">
                        <span className="font-medium">Explanation:</span> {question.explanation}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const selectedAnswer = userAnswers[currentQuestion]
  const isCorrect = selectedAnswer === currentQ.correct
  const showExplanation = selectedAnswer !== null

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 px-3 py-6 sm:px-4 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 lg:p-8">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-3 text-lg font-bold text-gray-800 sm:mb-4 sm:text-xl lg:text-2xl">
              AOM Previous Paper 2022
            </h1>
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 text-gray-600 sm:mb-4">
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 sm:px-3 sm:text-sm">
                {questions.length} Questions
              </span>
              {!loadingProgress && completed ? (
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 sm:px-3 sm:text-sm">
                  Previously completed
                </span>
              ) : null}
              <span className="text-xs text-gray-500 sm:text-sm lg:text-base">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-gray-200 sm:h-2">
              <div
                className="h-1.5 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 transition-all duration-300 ease-out sm:h-2"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="mb-4 text-base leading-relaxed font-semibold text-gray-800 sm:mb-6 sm:text-lg lg:text-xl">
              {currentQ.question}
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectAnswer = index === currentQ.correct
                let optionClasses =
                  'w-full text-left p-2.5 sm:p-3.5 rounded-md sm:rounded-lg border-2 transition-all duration-200 flex items-center justify-between group'

                if (isSelected) {
                  optionClasses += isCorrectAnswer
                    ? ' border-green-500 bg-green-50 text-green-700 shadow-md'
                    : ' border-red-500 bg-red-50 text-red-700 shadow-md'
                } else if (showExplanation && isCorrectAnswer) {
                  optionClasses += ' border-green-500 bg-green-50 text-green-700 shadow-md'
                } else {
                  optionClasses +=
                    ' border-gray-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-sm'
                }

                return (
                  <button
                    key={`${index}-${option}`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`${optionClasses} ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:mr-4 sm:h-6 sm:w-6 ${
                          isSelected
                            ? isCorrectAnswer
                              ? 'border-green-500 bg-green-500'
                              : 'border-red-500 bg-red-500'
                            : showExplanation && isCorrectAnswer
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300 group-hover:border-emerald-400'
                        }`}
                      >
                        {isSelected || (showExplanation && isCorrectAnswer) ? (
                          <svg
                            className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <span className="text-xs font-medium text-gray-400 group-hover:text-emerald-400">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span className="text-left text-sm font-medium sm:text-base lg:text-lg">
                        {option}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {showExplanation ? (
            <div
              className={`mb-4 rounded-md border p-3 sm:mb-6 sm:rounded-lg sm:p-4 ${
                isCorrect
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-rose-500 bg-red-50 text-rose-700'
              }`}
            >
              <h4 className="mb-1 text-sm font-semibold sm:text-base">
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </h4>
              <p className="text-xs leading-relaxed sm:text-sm">{currentQ.explanation}</p>
            </div>
          ) : null}

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1)
              }}
              disabled={currentQuestion === 0}
              className="rounded-md border border-gray-400 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:px-6 sm:py-3 sm:text-base"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="rounded-md bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:px-8 sm:py-3 sm:text-base"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/quizzes"
            className="inline-flex items-center rounded-lg bg-linear-to-r from-gray-600 to-gray-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl"
          >
            Back to All Quizzes
          </Link>
        </div>
      </div>
    </div>
  )
}
