'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const topics = [
  {
    href: '/quizzes/professional-subject/accident-inquiries',
    title: 'Accident Inquiries',
    icon: '⚠️',
    color: 'from-rose-500 to-red-600',
    description: 'Practice Accident Inquiries questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/accidents-classification',
    title: 'Accidents Classification',
    icon: '🚨',
    color: 'from-orange-500 to-red-600',
    description: 'Practice Accidents Classification questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/authority-forms',
    title: 'Authority Forms',
    icon: '📄',
    color: 'from-sky-500 to-blue-600',
    description: 'Practice Authority Forms questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/authorization-permissions',
    title: 'Authorization Permissions',
    icon: '✅',
    color: 'from-emerald-500 to-teal-600',
    description: 'Practice Authorization Permissions questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/bell-whistle-codes',
    title: 'Bell Whistle Codes',
    icon: '🔔',
    color: 'from-amber-500 to-orange-600',
    description: 'Practice Bell Whistle Codes questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/brake-power-certificate',
    title: 'Brake Power Certificate',
    icon: '🛑',
    color: 'from-red-500 to-rose-600',
    description: 'Practice Brake Power Certificate questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/coaches-data',
    title: 'Coaches Data',
    icon: '🚃',
    color: 'from-indigo-500 to-blue-600',
    description: 'Practice Coaches Data questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/dedicated-freight-corridors',
    title: 'Dedicated Freight Corridors',
    icon: '🛤️',
    color: 'from-violet-500 to-purple-600',
    description: 'Practice Dedicated Freight Corridors questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/distance-wise',
    title: 'Distance Wise',
    icon: '📏',
    color: 'from-cyan-500 to-sky-600',
    description: 'Practice Distance Wise questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/gati-shakti-cargo-terminal',
    title: 'Gati Shakti Cargo Terminal',
    icon: '🏗️',
    color: 'from-lime-500 to-green-600',
    description: 'Practice Gati Shakti Cargo Terminal questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/gradients-wise',
    title: 'Gradients Wise',
    icon: '📐',
    color: 'from-teal-500 to-emerald-600',
    description: 'Practice Gradients Wise questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/indian-railway-act-1989',
    title: 'Indian Railway Act 1989',
    icon: '⚖️',
    color: 'from-slate-500 to-slate-700',
    description: 'Practice Indian Railway Act 1989 questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/kavach',
    title: 'Kavach',
    icon: '🛡️',
    color: 'from-orange-500 to-red-600',
    description: 'Practice Kavach questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/locos-data',
    title: 'Locos Data',
    icon: '🚂',
    color: 'from-orange-500 to-amber-600',
    description: 'Practice Locos Data questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/marshalling',
    title: 'Marshalling',
    icon: '🔗',
    color: 'from-fuchsia-500 to-pink-600',
    description: 'Practice Marshalling questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/national-rail-plan',
    title: 'National Rail Plan',
    icon: '🗺️',
    color: 'from-indigo-500 to-blue-600',
    description: 'Practice National Rail Plan questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/numbers-wise',
    title: 'Numbers Wise',
    icon: '🔢',
    color: 'from-blue-500 to-indigo-600',
    description: 'Practice Numbers Wise questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/operating-statistics',
    title: 'Operating Statistics',
    icon: '📊',
    color: 'from-emerald-500 to-green-600',
    description: 'Practice Operating Statistics questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/over-dimensional-consignment',
    title: 'Over Dimensional Consignment',
    icon: '📦',
    color: 'from-amber-500 to-yellow-600',
    description: 'Practice Over Dimensional Consignment questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/percentage-wise',
    title: 'Percentage Wise',
    icon: '📈',
    color: 'from-purple-500 to-violet-600',
    description: 'Practice Percentage Wise questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/preferential-traffic-order',
    title: 'Preferential Traffic Order',
    icon: '🥇',
    color: 'from-yellow-500 to-amber-600',
    description: 'Practice Preferential Traffic Order questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/premium-special-trains',
    title: 'Premium Special Trains',
    icon: '✨',
    color: 'from-pink-500 to-rose-600',
    description: 'Practice Premium Special Trains questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/registers-records-preserved',
    title: 'Registers Records Preserved',
    icon: '📚',
    color: 'from-stone-500 to-stone-700',
    description: 'Practice Registers Records Preserved questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/speed-restrictions',
    title: 'Speed Restrictions',
    icon: '🚦',
    color: 'from-red-500 to-orange-600',
    description: 'Practice Speed Restrictions questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/station-working-rules',
    title: 'Station Working Rules',
    icon: '🚉',
    color: 'from-blue-500 to-cyan-600',
    description: 'Practice Station Working Rules questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/timings-wise',
    title: 'Timings Wise',
    icon: '⏱️',
    color: 'from-sky-500 to-indigo-600',
    description: 'Practice Timings Wise questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/wagon-turn-round',
    title: 'Wagon Turn Round',
    icon: '🔄',
    color: 'from-teal-500 to-cyan-600',
    description: 'Practice Wagon Turn Round questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/wagons-data',
    title: 'Wagons Data',
    icon: '🚚',
    color: 'from-orange-600 to-amber-700',
    description: 'Practice Wagons Data questions in exam mode',
  },
  {
    href: '/quizzes/professional-subject/years-wise',
    title: 'Years Wise',
    icon: '📅',
    color: 'from-violet-500 to-indigo-600',
    description: 'Practice Years Wise questions in exam mode',
  },
]

const ProfessionalSubjectPage = () => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-rose-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Professional Subject
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice Professional Subject questions topic-wise in exam mode
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a topic below and attempt it with timer, palette, and answer key
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {[...topics]
            .sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }))
            .map((topic) => {
              const isActive = pathname === topic.href
              return (
                <Link key={topic.href} href={topic.href} className="group">
                  <div
                    className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                      isActive ? 'ring-2 ring-orange-500 ring-offset-2' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden bg-linear-to-r ${topic.color} p-4 sm:p-6`}>
                      <div className="absolute inset-0 bg-black/5" />
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 text-3xl sm:text-4xl">{topic.icon}</div>
                          <h3 className="mb-1 line-clamp-2 text-lg font-bold text-white sm:text-xl">
                            {topic.title}
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
                        {topic.description}
                      </p>

                      <div className="mt-auto border-t border-gray-200 pt-4">
                        <div
                          className={`inline-flex items-center bg-linear-to-r ${topic.color} bg-clip-text text-sm font-semibold text-transparent`}
                        >
                          Start Quiz
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
              <span className="font-semibold text-orange-600">{topics.length}</span> Professional Subject
              quizzes available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalSubjectPage
