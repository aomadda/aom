'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tests = [
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test01',
    title: 'AOM GK & Rajabhasha Test 01',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 1 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test02',
    title: 'AOM GK & Rajabhasha Test 02',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 2 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test03',
    title: 'AOM GK & Rajabhasha Test 03',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 3 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test04',
    title: 'AOM GK & Rajabhasha Test 04',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 4 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test05',
    title: 'AOM GK & Rajabhasha Test 05',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 5 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test06',
    title: 'AOM GK & Rajabhasha Test 06',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 6 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test07',
    title: 'AOM GK & Rajabhasha Test 07',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 7 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test08',
    title: 'AOM GK & Rajabhasha Test 08',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 8 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test09',
    title: 'AOM GK & Rajabhasha Test 09',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 9 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test10',
    title: 'AOM GK & Rajabhasha Test 10',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 10 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test11',
    title: 'AOM GK & Rajabhasha Test 11',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 11 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test12',
    title: 'AOM GK & Rajabhasha Test 12',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 12 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test13',
    title: 'AOM GK & Rajabhasha Test 13',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 13 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test14',
    title: 'AOM GK & Rajabhasha Test 14',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 14 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test15',
    title: 'AOM GK & Rajabhasha Test 15',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 15 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test16',
    title: 'AOM GK & Rajabhasha Test 16',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 16 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test17',
    title: 'AOM GK & Rajabhasha Test 17',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 17 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test18',
    title: 'AOM GK & Rajabhasha Test 18',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 18 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test19',
    title: 'AOM GK & Rajabhasha Test 19',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 19 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test20',
    title: 'AOM GK & Rajabhasha Test 20',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 20 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test21',
    title: 'AOM GK & Rajabhasha Test 21',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 21 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test22',
    title: 'AOM GK & Rajabhasha Test 22',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 22 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test23',
    title: 'AOM GK & Rajabhasha Test 23',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 23 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test24',
    title: 'AOM GK & Rajabhasha Test 24',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 24 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test25',
    title: 'AOM GK & Rajabhasha Test 25',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 25 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test26',
    title: 'AOM GK & Rajabhasha Test 26',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 26 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test27',
    title: 'AOM GK & Rajabhasha Test 27',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 27 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test28',
    title: 'AOM GK & Rajabhasha Test 28',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 28 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test29',
    title: 'AOM GK & Rajabhasha Test 29',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 29 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test30',
    title: 'AOM GK & Rajabhasha Test 30',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 30 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test31',
    title: 'AOM GK & Rajabhasha Test 31',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 31 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test32',
    title: 'AOM GK & Rajabhasha Test 32',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 32 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test33',
    title: 'AOM GK & Rajabhasha Test 33',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 33 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test34',
    title: 'AOM GK & Rajabhasha Test 34',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 34 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test35',
    title: 'AOM GK & Rajabhasha Test 35',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 35 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test36',
    title: 'AOM GK & Rajabhasha Test 36',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 36 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test37',
    title: 'AOM GK & Rajabhasha Test 37',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 37 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test38',
    title: 'AOM GK & Rajabhasha Test 38',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 38 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test39',
    title: 'AOM GK & Rajabhasha Test 39',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 39 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test40',
    title: 'AOM GK & Rajabhasha Test 40',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 40 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test41',
    title: 'AOM GK & Rajabhasha Test 41',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 41 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test42',
    title: 'AOM GK & Rajabhasha Test 42',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 42 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test43',
    title: 'AOM GK & Rajabhasha Test 43',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 43 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test44',
    title: 'AOM GK & Rajabhasha Test 44',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 44 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test45',
    title: 'AOM GK & Rajabhasha Test 45',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 45 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test46',
    title: 'AOM GK & Rajabhasha Test 46',
    icon: '🌐',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Practice paper 46 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test47',
    title: 'AOM GK & Rajabhasha Test 47',
    icon: '🧠',
    color: 'from-indigo-500 to-blue-600',
    description:
      'Practice paper 47 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test48',
    title: 'AOM GK & Rajabhasha Test 48',
    icon: '🇮🇳',
    color: 'from-blue-500 to-sky-600',
    description:
      'Practice paper 48 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test49',
    title: 'AOM GK & Rajabhasha Test 49',
    icon: '📰',
    color: 'from-cyan-500 to-indigo-600',
    description:
      'Practice paper 49 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
  {
    href: '/aom-tests/aom-gk-rajabhasha-tests/aom-gk-rajabhasha-test50',
    title: 'AOM GK & Rajabhasha Test 50',
    icon: '🗣️',
    color: 'from-violet-500 to-indigo-600',
    description:
      'Practice paper 50 on general knowledge, current affairs, and Rajabhasha for the AOM examination',
  },
]

const GKRajabhashaPage = () => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-indigo-50 to-blue-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-sky-600 via-indigo-600 to-blue-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            AOM GK & Rajabhasha Tests
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice general knowledge, current affairs, and Rajabhasha (official language)
              questions for the AOM test
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a test below and check your knowledge of GK and Rajabhasha
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
                    isActive ? 'ring-2 ring-sky-500 ring-offset-2' : ''
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
              <span className="font-semibold text-sky-600">{tests.length}</span> GK & Rajabhasha
              tests available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GKRajabhashaPage
