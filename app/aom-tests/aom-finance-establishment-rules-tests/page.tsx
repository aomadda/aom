'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tests = [
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test01',
    title: 'Finance & Establishment Rules Test 01',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 1 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test02',
    title: 'Finance & Establishment Rules Test 02',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 2 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test03',
    title: 'Finance & Establishment Rules Test 03',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 3 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test04',
    title: 'Finance & Establishment Rules Test 04',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 4 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test05',
    title: 'Finance & Establishment Rules Test 05',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 5 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test06',
    title: 'Finance & Establishment Rules Test 06',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 6 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test07',
    title: 'Finance & Establishment Rules Test 07',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 7 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test08',
    title: 'Finance & Establishment Rules Test 08',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 8 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test09',
    title: 'Finance & Establishment Rules Test 09',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 9 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test10',
    title: 'Finance & Establishment Rules Test 10',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 10 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test11',
    title: 'Finance & Establishment Rules Test 11',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 11 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test12',
    title: 'Finance & Establishment Rules Test 12',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 12 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test13',
    title: 'Finance & Establishment Rules Test 13',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 13 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test14',
    title: 'Finance & Establishment Rules Test 14',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 14 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test15',
    title: 'Finance & Establishment Rules Test 15',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 15 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test16',
    title: 'Finance & Establishment Rules Test 16',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 16 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test17',
    title: 'Finance & Establishment Rules Test 17',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 17 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test18',
    title: 'Finance & Establishment Rules Test 18',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 18 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test19',
    title: 'Finance & Establishment Rules Test 19',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 19 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test20',
    title: 'Finance & Establishment Rules Test 20',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 20 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test21',
    title: 'Finance & Establishment Rules Test 21',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 21 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test22',
    title: 'Finance & Establishment Rules Test 22',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 22 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test23',
    title: 'Finance & Establishment Rules Test 23',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 23 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test24',
    title: 'Finance & Establishment Rules Test 24',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 24 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test25',
    title: 'Finance & Establishment Rules Test 25',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 25 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test26',
    title: 'Finance & Establishment Rules Test 26',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 26 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test27',
    title: 'Finance & Establishment Rules Test 27',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 27 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test28',
    title: 'Finance & Establishment Rules Test 28',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 28 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test29',
    title: 'Finance & Establishment Rules Test 29',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 29 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test30',
    title: 'Finance & Establishment Rules Test 30',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 30 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test31',
    title: 'Finance & Establishment Rules Test 31',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 31 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test32',
    title: 'Finance & Establishment Rules Test 32',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 32 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test33',
    title: 'Finance & Establishment Rules Test 33',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 33 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test34',
    title: 'Finance & Establishment Rules Test 34',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 34 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test35',
    title: 'Finance & Establishment Rules Test 35',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 35 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test36',
    title: 'Finance & Establishment Rules Test 36',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 36 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test37',
    title: 'Finance & Establishment Rules Test 37',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 37 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test38',
    title: 'Finance & Establishment Rules Test 38',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 38 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test39',
    title: 'Finance & Establishment Rules Test 39',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 39 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test40',
    title: 'Finance & Establishment Rules Test 40',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 40 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test41',
    title: 'Finance & Establishment Rules Test 41',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 41 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test42',
    title: 'Finance & Establishment Rules Test 42',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 42 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test43',
    title: 'Finance & Establishment Rules Test 43',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 43 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test44',
    title: 'Finance & Establishment Rules Test 44',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 44 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test45',
    title: 'Finance & Establishment Rules Test 45',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 45 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test46',
    title: 'Finance & Establishment Rules Test 46',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    description:
      'Practice paper 46 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test47',
    title: 'Finance & Establishment Rules Test 47',
    icon: '📊',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Practice paper 47 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test48',
    title: 'Finance & Establishment Rules Test 48',
    icon: '🧾',
    color: 'from-green-500 to-emerald-600',
    description:
      'Practice paper 48 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test49',
    title: 'Finance & Establishment Rules Test 49',
    icon: '📋',
    color: 'from-lime-500 to-green-600',
    description:
      'Practice paper 49 on finance, accounts, tenders, and establishment rules for the AOM examination',
  },
  {
    href: '/aom-tests/aom-finance-establishment-rules-tests/aom-finance-establishment-rules-test50',
    title: 'Finance & Establishment Rules Test 50',
    icon: '🏦',
    color: 'from-cyan-500 to-teal-600',
    description:
      'Practice paper 50 on finance, accounts, tenders, and establishment rules for the AOM examination',
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
