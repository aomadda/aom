'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const GeneralAwarenessQuiz = () => {
  const pathname = usePathname()

  const topics = [
    {
      href: '/quizzes/general-awareness/biology',
      title: 'Biology',
      icon: '🧬',
      color: 'from-emerald-500 to-green-600',
      description:
        'Quiz questions on cells, physiology, ecology, genetics, and core concepts in biology for exam preparation.'
    },
    {
      href: '/quizzes/general-awareness/botany',
      title: 'Botany',
      icon: '🌿',
      color: 'from-green-500 to-teal-600',
      description:
        'Plant morphology, taxonomy, physiology, ecology, and important botanical facts for GA practice.'
    },
    {
      href: '/quizzes/general-awareness/chemistry',
      title: 'Chemistry',
      icon: '⚗️',
      color: 'from-cyan-500 to-blue-600',
      description:
        'Organic, inorganic, and physical chemistry questions covering periodic trends, reactions, and everyday concepts.'
    },
    {
      href: '/quizzes/general-awareness/current-affairs',
      title: 'Current Affairs',
      icon: '📰',
      color: 'from-sky-500 to-indigo-600',
      description:
        'Recent events, appointments, indexes, honours, defence, economics, and global developments for GK.'
    },
    {
      href: '/quizzes/general-awareness/geography',
      title: 'Geography',
      icon: '🌍',
      color: 'from-teal-500 to-cyan-600',
      description:
        'Physical and human geography, Indian and world geography, maps, climates, rivers, and natural resources.'
    },
    {
      href: '/quizzes/general-awareness/history',
      title: 'History',
      icon: '📜',
      color: 'from-amber-500 to-orange-600',
      description:
        'Ancient, medieval, and modern history timelines, personalities, wars, treaties, and major movements.'
    },
    {
      href: '/quizzes/general-awareness/physics',
      title: 'Physics',
      icon: '⚡',
      color: 'from-violet-500 to-purple-600',
      description:
        'Mechanics, heat, light, electricity, modern physics fundamentals, SI units, and formula-based revisions.'
    },
    {
      href: '/quizzes/general-awareness/polity',
      title: 'Polity',
      icon: '⚖️',
      color: 'from-blue-600 to-indigo-700',
      description:
        'Indian Constitution, central and state organs, judiciary, Panchayati Raj, and fundamental duties and rights.'
    },
    {
      href: '/quizzes/general-awareness/zoology',
      title: 'Zoology',
      icon: '🦎',
      color: 'from-rose-500 to-pink-600',
      description:
        'Animal taxonomy, physiology, ecology, genetics, evolutionary concepts, and important species facts.'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 via-teal-50 to-indigo-50 py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-5 inline-flex">
            <div className="rounded-full bg-linear-to-r from-cyan-400 via-teal-500 to-indigo-500 p-[3px]">
              <div className="rounded-full bg-white px-5 py-3 shadow-inner shadow-white/70">
                <span className="text-4xl" aria-hidden>
                  🌐
                </span>
              </div>
            </div>
          </div>
          <h1 className="mb-6 bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            General Awareness
          </h1>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/40 bg-white/85 p-6 shadow-xl shadow-teal-500/10 backdrop-blur-sm sm:p-8">
            <p className="mb-3 text-base font-medium text-gray-700 sm:text-lg">
              Pick a subject and start practicing General Awareness quizzes
            </p>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Each category opens a focused quiz area. Topics cover science streams, humanities, and current affairs.
            </p>
          </div>
        </div>

        {/* Subtopic count */}
        <div className="mb-8 sm:mb-10">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/30 bg-white/70 px-6 py-4 text-center shadow-md backdrop-blur-sm">
            <span className="text-2xl font-bold bg-linear-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
              {topics.length}
            </span>
            <span className="ml-2 text-sm font-semibold uppercase tracking-wide text-gray-600"> quiz topics</span>
          </div>
        </div>

        {/* Topic cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-8">
          {topics.map((topic) => {
            const isActive = pathname === topic.href || pathname.startsWith(topic.href + '/')
            return (
              <Link key={topic.href} href={topic.href} className="group outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-50">
                <div
                  className={`relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/15 ${isActive ? 'ring-2 ring-teal-500 ring-offset-2 shadow-teal-500/25' : ''}`}
                >
                  <div
                    className={`relative overflow-hidden bg-linear-to-br ${topic.color} p-6 sm:p-7`}
                  >
                    <div className="absolute inset-0 bg-black/8 transition-colors group-hover:bg-black/4" />
                    <div className="absolute right-0 top-0 h-36 w-36 translate-x-1/4 -translate-y-1/4 rounded-full bg-white/15 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div>
                        <span className="mb-3 block text-4xl sm:text-[2.75rem] drop-shadow-md transition-transform duration-300 group-hover:scale-105">
                          {topic.icon}
                        </span>
                        <h2 className="text-xl font-bold leading-snug text-white drop-shadow-md sm:text-2xl">
                          {topic.title}
                        </h2>
                      </div>
                      <svg
                        className="mt-2 h-6 w-6 shrink-0 text-white/85 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">{topic.description}</p>
                    <div className="mt-auto inline-flex items-center text-sm font-bold text-teal-700 transition-colors group-hover:text-indigo-700">
                      Open quiz
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Back link */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <Link
            href="/quizzes"
            className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/90 px-5 py-2.5 text-sm font-semibold text-teal-800 shadow-md transition hover:border-teal-400 hover:bg-white hover:text-teal-950"
          >
            <span aria-hidden>←</span>
            Back to all quizzes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GeneralAwarenessQuiz
