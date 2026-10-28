'use client'

import QuizAttemptFooter from '@/components/quizzes/QuizAttemptFooter'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const rules = [
  {
    href: '/quizzes/financial-rules/accounts',
    title: 'Accounts',
    icon: '💰',
    color: 'from-amber-500 to-yellow-600',
    hoverColor: 'from-amber-600 to-yellow-700',
    description: 'Comprehensive rules and regulations governing railway accounts, financial records, and accounting procedures'
  },
  {
    href: '/quizzes/financial-rules/budget',
    title: 'Budget',
    icon: '📒',
    color: 'from-indigo-500 to-violet-600',
    hoverColor: 'from-indigo-600 to-violet-700',
    description: 'Railway budget, demands for grants, and budget rules'
  },
  {
    href: '/quizzes/financial-rules/contracts',
    title: 'Contracts',
    icon: '📄',
    color: 'from-violet-500 to-purple-600',
    hoverColor: 'from-violet-600 to-purple-700',
    description: 'Railway contract rules, agreement terms, and contract management'
  },
  {
    href: '/quizzes/financial-rules/demands',
    title: 'Demands',
    icon: '🗂️',
    color: 'from-orange-500 to-amber-600',
    hoverColor: 'from-orange-600 to-amber-700',
    description: 'Demands for grants, railway budget demands, and demand rules'
  },
  {
    href: '/quizzes/financial-rules/finance',
    title: 'Finance',
    icon: '📊',
    color: 'from-emerald-500 to-green-600',
    hoverColor: 'from-emerald-600 to-green-700',
    description: 'Railway budget, earnings classification, funds management, and financial procedures'
  },
  {
    href: '/quizzes/financial-rules/tenders',
    title: 'Tenders',
    icon: '📋',
    color: 'from-teal-500 to-cyan-600',
    hoverColor: 'from-teal-600 to-cyan-700',
    description: 'Rules and procedures for tendering processes, bid security, and contract management in railway operations'
  },
  {
    href: '/quizzes/financial-rules/government-e-marketplace',
    title: 'Government e-Marketplace',
    icon: '🛒',
    color: 'from-sky-500 to-blue-600',
    hoverColor: 'from-sky-600 to-blue-700',
    description: 'GeM portal, procurement of goods and services, GFR 149, and Government e-Marketplace rules'
  },
  {
    href: '/quizzes/financial-rules/plan-head',
    title: 'Plan Heads',
    icon: '🏗️',
    color: 'from-cyan-500 to-blue-600',
    hoverColor: 'from-cyan-600 to-blue-700',
    description: 'Plan heads, capital works allocation, and railway plan head rules'
  },
]

const FinancialRules = () => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-teal-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-amber-600 via-yellow-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Financial Rules
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice Financial Rules questions topic-wise in exam mode
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a topic below and attempt it with timer, palette, and answer key
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {rules.map((rule) => {
            const isActive = pathname === rule.href
            return (
              <Link key={rule.href} href={rule.href} className="group">
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                    isActive ? 'ring-2 ring-amber-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-linear-to-r ${rule.color} p-4 sm:p-6`}>
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 text-3xl sm:text-4xl">{rule.icon}</div>
                        <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                          {rule.title}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <svg
                          className="h-6 w-6 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <p className="mb-4 flex-1 line-clamp-3 text-sm text-gray-600 sm:text-base">
                      {rule.description}
                    </p>

                    <QuizAttemptFooter href={rule.href} colorClass={rule.color} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-amber-600">{rules.length}</span>{' '}
              Financial Rules quizzes available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialRules
