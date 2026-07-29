'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FinancialRules = () => {
  const pathname = usePathname()

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
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50 to-teal-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-amber-600 via-yellow-600 to-teal-600 bg-clip-text text-transparent">
            Financial Rules
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
              Explore comprehensive collection of financial rules and regulations
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Navigate through various rules governing railway accounts, tendering processes, and financial procedures
            </p>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {rules.map((rule) => {
            const isActive = pathname === rule.href
            return (
              <Link
                key={rule.href}
                href={rule.href}
                className="group"
              >
                <div className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 overflow-hidden h-full flex flex-col ${
                  isActive ? 'ring-2 ring-amber-500 ring-offset-2' : ''
                }`}>
                  {/* Header with Gradient */}
                  <div className={`bg-linear-to-r ${rule.color} p-4 sm:p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-3xl sm:text-4xl mb-2">{rule.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2">
                          {rule.title}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-6 h-6 text-white/80"
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

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4 flex-1">
                      {rule.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className={`inline-flex items-center text-sm font-semibold bg-linear-to-r ${rule.color} bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-teal-600 transition-all duration-300`}>
                        Start Quiz
                        <svg
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 inline-block">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-amber-600">{rules.length}</span> financial rules available for practice
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialRules
