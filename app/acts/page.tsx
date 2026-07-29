'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Acts = () => {
  const pathname = usePathname()

  const acts = [
    {
      href: '/acts/workmen-compensation-act-1923',
      title: 'Workmen Compensation Act, 1923',
      year: '1923',
      icon: '⚖️',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      description: 'An act to provide for the payment of compensation to workmen for injuries sustained in the course of employment'
    },
    {
      href: '/acts/trade-union-act-1926',
      title: 'Trade Union Act, 1926',
      year: '1926',
      icon: '🤝',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      description: 'An act to provide for the registration of trade unions and to define the law relating to registered trade unions'
    },
    {
      href: '/acts/railway-servants-rest-rules-2005',
      title: 'Railway Servants (Rest) Rules, 2005',
      year: '2005',
      icon: '🛌',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700',
      description: 'Rules governing rest periods and working hours for railway servants'
    },
    {
      href: '/acts/rajabhasha',
      title: 'Rajabhasha',
      icon: '🗣️',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      description: 'Official language policies and regulations'
    },
    {
      href: '/acts/railway-servants-pass-rules-1986',
      title: 'Railway Servants (Pass) Rules, 1986',
      year: '1986',
      icon: '🎫',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'from-indigo-600 to-indigo-700',
      description: 'Rules and regulations for railway pass facilities for railway servants'
    },
    {
      href: '/acts/industrial-relations-code-2010',
      title: 'Industrial Relations Code, 2010',
      year: '2010',
      icon: '🏭',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'from-teal-600 to-teal-700',
      description: 'Comprehensive code governing industrial relations and labor laws'
    },
    {
      href: '/acts/factories-act-1948',
      title: 'Factories Act, 1948',
      year: '1948',
      icon: '🏗️',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'from-orange-600 to-orange-700',
      description: 'An act to consolidate and amend the law regulating labor in factories'
    },
    {
      href: '/acts/employees-compensation-act-2010',
      title: 'Employees Compensation Act, 2010',
      year: '2010',
      icon: '💼',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'from-cyan-600 to-cyan-700',
      description: 'An act to provide for the payment of compensation to employees for work-related injuries'
    },
    {
      href: '/acts/industrial-disputes-act-1947',
      title: 'Industrial Disputes Act, 1947',
      year: '1947',
      icon: '⚔️',
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
      description: 'An act to make provision for the investigation and settlement of industrial disputes'
    },
    {
      href: '/acts/disaster-management-act-2005',
      title: 'Disaster Management Act, 2005',
      year: '2005',
      icon: '🚨',
      color: 'from-yellow-500 to-yellow-600',
      hoverColor: 'from-yellow-600 to-yellow-700',
      description: 'An act to provide for the effective management of disasters and for matters connected therewith'
    },
    {
      href: '/acts/railway-servants-da-rules-1968',
      title: 'Railway Servants (DA) Rules, 1968',
      year: '1968',
      icon: '💰',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'from-emerald-600 to-emerald-700',
      description: 'Rules governing dearness allowance for railway servants'
    },
    {
      href: '/acts/railway-services-conduct-rules-1966',
      title: 'Railway Services (Conduct) Rules, 1966',
      year: '1966',
      icon: '📋',
      color: 'from-violet-500 to-violet-600',
      hoverColor: 'from-violet-600 to-violet-700',
      description: 'Rules of conduct for railway service employees'
    },
    {
      href: '/acts/right-to-information-act-2005',
      title: 'Right to Information Act, 2005',
      year: '2005',
      icon: '📖',
      color: 'from-rose-500 to-rose-600',
      hoverColor: 'from-rose-600 to-rose-700',
      description: 'An act to provide for setting out the practical regime of right to information for citizens'
    },
    {
      href: '/acts/indian-railway-acts-1989',
      title: 'Indian Railway Acts, 1989',
      year: '1989',
      icon: '🚂',
      color: 'from-sky-500 to-sky-600',
      hoverColor: 'from-sky-600 to-sky-700',
      description: 'Comprehensive acts governing Indian Railways operations and administration'
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Acts & Regulations
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
              Explore comprehensive collection of acts and regulations
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Navigate through various legal acts, rules, and codes governing railway services and industrial relations
            </p>
          </div>
        </div>

        {/* Acts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {acts.map((act) => {
            const isActive = pathname === act.href
            return (
              <Link
                key={act.href}
                href={act.href}
                className="group"
              >
                <div className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 overflow-hidden h-full flex flex-col ${
                  isActive ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                }`}>
                  {/* Header with Gradient */}
                  <div className={`bg-linear-to-r ${act.color} p-4 sm:p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-3xl sm:text-4xl mb-2">{act.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2">
                          {act.title}
                        </h3>
                        {act.year && (
                          <span className="inline-block px-2 py-1 text-xs font-semibold text-white/90 bg-white/20 rounded-md backdrop-blur-sm">
                            {act.year}
                          </span>
                        )}
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
                      {act.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className={`inline-flex items-center text-sm font-semibold bg-linear-to-r ${act.color} bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300`}>
                        View Details
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
              <span className="font-semibold text-purple-600">{acts.length}</span> acts and regulations available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acts
