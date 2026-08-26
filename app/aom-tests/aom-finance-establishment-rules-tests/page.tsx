'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tests = [
  {
    href: '/aom-tests/finance-establishment-rules/aom-finance-establishment-rules-test01',
    title: 'Finance & Establishment Rules Test 01',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 1 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/finance-establishment-rules/aom-finance-establishment-rules-test02',
    title: 'Finance & Establishment Rules Test 02',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 2 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/finance-establishment-rules/aom-finance-establishment-rules-test03',
    title: 'Finance & Establishment Rules Test 03',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 3 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/finance-establishment-rules/aom-finance-establishment-rules-test04',
    title: 'Finance & Establishment Rules Test 04',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 4 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/finance-establishment-rules/aom-finance-establishment-rules-test05',
    title: 'Finance & Establishment Rules Test 05',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 5 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
]

const FinanceEstablishmentRulesPage = () => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            AOM Finance & Establishment Rules Tests
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice finance, accounts, tenders, and establishment rules asked in the AOM
              promotional examination
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a test below and check your knowledge of financial and establishment rules
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {tests.map((test) => {
            const isActive = pathname === test.href
            return (
              <Link key={test.href} href={test.href} className="group">
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                    isActive ? 'ring-2 ring-emerald-500 ring-offset-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-linear-to-r ${test.color} p-4 sm:p-6`}>
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 text-3xl sm:text-4xl">{test.icon}</div>
                        <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                          {test.title}
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
                      {test.description}
                    </p>

                    <div className="mt-auto border-t border-gray-200 pt-4">
                      <div
                        className={`inline-flex items-center bg-linear-to-r ${test.color} bg-clip-text text-sm font-semibold text-transparent`}
                      >
                        Open test
                        <svg
                          className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="mt-12 text-center">
          <div className="inline-block rounded-xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-emerald-600">{tests.length}</span> Finance &
              Establishment Rules tests available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceEstablishmentRulesPage
