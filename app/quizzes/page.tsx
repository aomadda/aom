'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Quizzes = () => {
  const pathname = usePathname()

  const quizzes = [
    {
      href: '/quizzes/accident-manual',
      title: 'Accident Manual',
      icon: '⚠️',
      color: 'from-red-500 to-rose-600',
      hoverColor: 'from-red-600 to-rose-700',
      description: 'Test your knowledge of accident investigation procedures, reporting protocols, and safety regulations'
    },
    {
      href: '/quizzes/aom-previous-paper-2022',
      title: 'AOM Previous Paper 2022',
      icon: '📝',
      color: 'from-emerald-500 to-green-600',
      hoverColor: 'from-emerald-600 to-green-700',
      description: 'Practice the AOM Previous Paper 2022 with 175 questions covering operating, establishment and related topics'
    },
    {
      href: '/quizzes/aom-previous-papers',
      title: 'AOM Previous Papers',
      icon: '📑',
      color: 'from-emerald-500 to-teal-600',
      hoverColor: 'from-emerald-600 to-teal-700',
      description: 'Practice AOM exam papers: Professional Subject, GK & Rajabhasha, and Establishment & Financial Rules'
    },
    {
      href: '/quizzes/block-working-manual',
      title: 'Block Working Manual',
      icon: '🔧',
      color: 'from-blue-500 to-cyan-600',
      hoverColor: 'from-blue-600 to-cyan-700',
      description: 'Master the rules and procedures for block working systems, signaling, and track maintenance'
    },
    {
      href: '/quizzes/commercial-department',
      title: 'Commercial Department',
      icon: '💼',
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'from-indigo-600 to-purple-700',
      description: 'Understand commercial operations, ticket booking, freight management, and customer service protocols'
    },
    {
      href: '/quizzes/disaster-management',
      title: 'Disaster Management',
      icon: '🚨',
      color: 'from-orange-500 to-rose-600',
      hoverColor: 'from-orange-600 to-rose-700',
      description: 'Test your knowledge of Railway Disaster Management, NDMA, response teams, and DM Act 2005'
    },
    {
      href: '/quizzes/establishment-rules',
      title: 'Establishment Rules',
      icon: '📜',
      color: 'from-violet-500 to-purple-600',
      hoverColor: 'from-violet-600 to-purple-700',
      description: 'Learn about conduct rules, discipline procedures, leave policies, and employee regulations'
    },
    {
      href: '/quizzes/financial-rules',
      title: 'Financial Rules',
      icon: '💰',
      color: 'from-amber-500 to-yellow-600',
      hoverColor: 'from-amber-600 to-yellow-700',
      description: 'Explore financial regulations, accounts management, tendering processes, and budget procedures'
    },
    {
      href: '/quizzes/general-awareness',
      title: 'General Awareness',
      icon: '🌐',
      color: 'from-cyan-500 to-teal-600',
      hoverColor: 'from-cyan-600 to-teal-700',
      description:
        'Practice questions across geography, history, polity, science, current affairs, and other core general-awareness topics.'
    },
    {
      href: '/quizzes/general-subsidiary-rules',
      title: 'General Subsidiary Rules',
      icon: '📋',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'from-green-600 to-emerald-700',
      description: 'Comprehensive rules covering general operations, subsidiary procedures, and standard protocols'
    },
    {
      href: '/quizzes/kavach',
      title: 'Kavach',
      icon: '🛡️',
      color: 'from-orange-500 to-red-600',
      hoverColor: 'from-orange-600 to-red-700',
      description: 'Master the Kavach train protection system, safety features, and collision avoidance technology'
    },
    {
      href: '/quizzes/operating-department',
      title: 'Operating Department',
      icon: '🚂',
      color: 'from-teal-500 to-cyan-600',
      hoverColor: 'from-teal-600 to-cyan-700',
      description: 'Test your knowledge of train operations, scheduling, route management, and operational procedures'
    },
    {
      href: '/quizzes/operating-manual',
      title: 'Operating Manual',
      icon: '📘',
      color: 'from-sky-500 to-blue-600',
      hoverColor: 'from-sky-600 to-blue-700',
      description: 'Learn operating procedures, train movement rules, station operations, and safety protocols'
    },
    {
      href: '/quizzes/railway-gk',
      title: 'Railway GK',
      icon: '🧠',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'from-pink-600 to-rose-700',
      description: 'Test your general knowledge about Indian Railways, history, facts, and railway infrastructure'
    },
    {
      href: '/quizzes/rajabhasha',
      title: 'Rajabhasha',
      icon: '📝',
      color: 'from-lime-500 to-green-600',
      hoverColor: 'from-lime-600 to-green-700',
      description: 'Understand official language rules, Hindi implementation, translation procedures, and language policies'
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 via-indigo-50 to-pink-50 py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4">
            <div className="bg-linear-to-r from-purple-500 via-blue-500 to-indigo-500 p-1 rounded-full">
              <div className="bg-white rounded-full p-3">
                <span className="text-4xl">🧠</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 bg-linear-to-r from-purple-600 via-blue-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Quizzes
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-3 sm:mb-4 font-medium">
              Test your knowledge and master railway regulations
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Explore comprehensive quizzes covering all aspects of railway operations, rules, manuals, and procedures. 
              Practice and enhance your understanding of Indian Railways.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/30">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {quizzes.length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Quiz Categories</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Questions</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Free
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {quizzes.map((quiz) => {
            const isActive = pathname === quiz.href || pathname.startsWith(quiz.href + '/')
            return (
              <Link
                key={quiz.href}
                href={quiz.href}
                className="group"
              >
                <div className={`bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/30 overflow-hidden h-full flex flex-col ${
                  isActive ? 'ring-2 ring-purple-500 ring-offset-2 shadow-purple-500/20' : ''
                }`}>
                  {/* Header with Gradient */}
                  <div className={`bg-linear-to-br ${quiz.color} p-5 sm:p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                          {quiz.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2 drop-shadow-lg">
                          {quiz.title}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                        <svg
                          className="w-6 h-6 text-white/90"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4 flex-1 leading-relaxed">
                      {quiz.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className={`inline-flex items-center text-sm font-bold bg-linear-to-r ${quiz.color} bg-clip-text text-transparent group-hover:scale-105 transition-all duration-300`}>
                        Start Quiz
                        <svg
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
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
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 inline-block max-w-2xl">
            <p className="text-base sm:text-lg text-gray-700 mb-2 font-semibold">
              Ready to test your knowledge?
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Select any quiz category above to begin practicing. Track your progress and improve your understanding of railway operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quizzes
