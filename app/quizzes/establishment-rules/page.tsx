'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const rules = [
  {
    href: '/quizzes/establishment-rules/railway-servants-discipline-appeal-rules-1968',
    title: 'Railway  Servants (Discipline & Appeal) Rules 1968',
    year: '1968',
    icon: '⚖️',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'from-blue-600 to-blue-700',
    description: 'Rules governing disciplinary proceedings and appeal mechanisms for railway employees'
  },
  {
    href: '/quizzes/establishment-rules/railway-servants-pass-rules-1986',
    title: 'Railway Servants (Pass) Rules 1986',
    year: '1986',
    icon: '🎫',
    color: 'from-green-500 to-green-600',
    hoverColor: 'from-green-600 to-green-700',
    description: 'Regulations for railway pass facilities and travel privileges for railway servants'
  },
  {
    href: '/quizzes/establishment-rules/railway-servants-leave-rules-1949',
    title: 'Railway Servants (Leave) Rules 1949',
    year: '1949',
    icon: '🏖️',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'from-purple-600 to-purple-700',
    description: 'Comprehensive rules regarding various types of leave available to railway employees'
  },
  {
    href: '/quizzes/establishment-rules/railway-servants-rest-rules-2005',
    title: 'Railway Servants (Rest) Rules 2005',
    year: '2005',
    icon: '🛌',
    color: 'from-pink-500 to-pink-600',
    hoverColor: 'from-pink-600 to-pink-700',
    description: 'Rules governing rest periods, working hours, and duty schedules for railway servants'
  },
  {
    href: '/quizzes/establishment-rules/railway-services-conduct-rules-1966',
    title: 'Railway Servants (Conduct) Rules 1966',
    year: '1966',
    icon: '📋',
    color: 'from-indigo-500 to-indigo-600',
    hoverColor: 'from-indigo-600 to-indigo-700',
    description: 'Standards of conduct and behavior expected from railway service employees'
  },
  {
    href: '/quizzes/establishment-rules/compassionate-grounds-appointment',
    title: 'Compassionate Grounds Appointment (CGA)',
    year: 'CGA',
    icon: '❤️',
    color: 'from-amber-500 to-orange-600',
    hoverColor: 'from-amber-600 to-orange-700',
    description: 'Rules for compassionate ground appointments for dependents of railway employees who die in harness'
  },
  {
    href: '/quizzes/establishment-rules/annual-performance-appraisal-report',
    title: 'Annual Performance Appraisal Report (APAR)',
    year: 'APAR',
    icon: '📈',
    color: 'from-teal-500 to-cyan-600',
    hoverColor: 'from-teal-600 to-cyan-700',
    description: 'Annual Performance Appraisal Report rules for staff assessment, promotion benchmarks, and MACP'
  },
  {
    href: '/quizzes/establishment-rules/national-pension-system',
    title: 'National Pension System (NPS)',
    year: 'NPS',
    icon: '🪙',
    color: 'from-slate-500 to-slate-600',
    hoverColor: 'from-slate-600 to-slate-700',
    description: 'National Pension System rules for railway employees - Tier-I, Tier-II, contributions, and withdrawal'
  },
  {
    href: '/quizzes/establishment-rules/unified-pension-system',
    title: 'Unified Pension System (UPS)',
    year: 'UPS',
    icon: '🏛️',
    color: 'from-rose-500 to-rose-600',
    hoverColor: 'from-rose-600 to-rose-700',
    description: 'Unified Pension System rules - assured pension, contributions, corpus, gratuity, and family pension'
  },
  {
    href: '/quizzes/establishment-rules/old-pension-system',
    title: 'Old Pension Scheme (OPS)',
    year: 'OPS',
    icon: '📜',
    color: 'from-violet-500 to-violet-600',
    hoverColor: 'from-violet-600 to-violet-700',
    description: 'Old Pension Scheme for employees appointed before 2004 - pension, GPF, gratuity, and family pension'
  },
  {
    href: '/quizzes/establishment-rules/central-pay-commission',
    title: 'Central Pay Commission (CPC)',
    year: 'CPC',
    icon: '💰',
    color: 'from-emerald-500 to-emerald-600',
    hoverColor: 'from-emerald-600 to-emerald-700',
    description: 'Central Pay Commission - pay structure, grade pay, levels, and salary revisions for railway employees'
  },
  {
    href: '/quizzes/establishment-rules/centralised-public-grievance-redress-monitoring-system',
    title: 'Centralised Public Grievance Redress Monitoring System',
    year: 'CPGRAMS',
    icon: '📨',
    color: 'from-fuchsia-500 to-pink-600',
    hoverColor: 'from-fuchsia-600 to-pink-700',
    description: 'Centralised Public Grievance Redress Monitoring System - CPGRAM complaint timelines and redressal'
  },
  {
    href: '/quizzes/establishment-rules/employees-compensation-act-1923',
    title: 'Employees Compensation Act 1923',
    year: '1923',
    icon: '🩹',
    color: 'from-red-500 to-rose-600',
    hoverColor: 'from-red-600 to-rose-700',
    description: 'Employees Compensation Act 1923 - compensation for death, disability, and injury claims'
  },
  {
    href: '/quizzes/establishment-rules/indian-railway-establishment-code',
    title: 'Indian Railway Establishment Code',
    year: 'IREC',
    icon: '📗',
    color: 'from-green-600 to-emerald-700',
    hoverColor: 'from-green-700 to-emerald-800',
    description: 'Indian Railway Establishment Code - code of conduct for Railway Servants'
  },
  {
    href: '/quizzes/establishment-rules/indian-railway-establishment-manual',
    title: 'Indian Railway Establishment Manual',
    year: 'IREM',
    icon: '📘',
    color: 'from-blue-600 to-indigo-700',
    hoverColor: 'from-blue-700 to-indigo-800',
    description: 'Indian Railway Establishment Manual - chapters, paras, and establishment instructions'
  },
  {
    href: '/quizzes/establishment-rules/modified-assured-career-progression',
    title: 'Modified Assured Career Progression',
    year: 'MACP',
    icon: '📶',
    color: 'from-amber-500 to-yellow-600',
    hoverColor: 'from-amber-600 to-yellow-700',
    description: 'Modified Assured Career Progression - MACPS screening schedule and benefits'
  },
  {
    href: '/quizzes/establishment-rules/permanent-negotiating-machinery',
    title: 'Permanent Negotiating Machinery',
    year: 'PNM',
    icon: '🤝',
    color: 'from-teal-500 to-emerald-600',
    hoverColor: 'from-teal-600 to-emerald-700',
    description: 'Permanent Negotiating Machinery - PNM meetings, trade unions, and negotiating structure'
  },
  {
    href: '/quizzes/establishment-rules/railway-allowances',
    title: 'Railway Allowances',
    year: 'Allowances',
    icon: '💵',
    color: 'from-lime-500 to-green-600',
    hoverColor: 'from-lime-600 to-green-700',
    description: 'Railway Allowances - HRA, NDA, CEA, Break Down Allowance, and related rules'
  },
  {
    href: '/quizzes/establishment-rules/railway-online-services',
    title: 'Railway Online Services',
    year: 'e-Office',
    icon: '💻',
    color: 'from-sky-500 to-cyan-600',
    hoverColor: 'from-sky-600 to-cyan-700',
    description: 'Railway Online Services - e-Office modules, digital signature, and file management'
  },
  {
    href: '/quizzes/establishment-rules/railway-quarters',
    title: 'Railway Quarters',
    year: 'Quarters',
    icon: '🏠',
    color: 'from-orange-500 to-amber-600',
    hoverColor: 'from-orange-600 to-amber-700',
    description: 'Railway Quarters - retention on transfer, zonal railway posting, and on death'
  },
  {
    href: '/quizzes/establishment-rules/railway-recruitment-posting-promotion',
    title: 'Railway Recruitment Posting Promotion',
    year: 'RRPP',
    icon: '📋',
    color: 'from-violet-500 to-purple-600',
    hoverColor: 'from-violet-600 to-purple-700',
    description: 'Railway Recruitment, Posting and Promotion - quotas, selection, reservation, and transfers'
  },
  {
    href: '/quizzes/establishment-rules/railway-services-pension-rules-1993',
    title: 'Railway Services Pension Rules 1993',
    year: '1993',
    icon: '🏦',
    color: 'from-slate-500 to-zinc-600',
    hoverColor: 'from-slate-600 to-zinc-700',
    description: 'Railway Services Pension Rules 1993 - disability pension, Rule 69, and family pension'
  },
  {
    href: '/quizzes/establishment-rules/staff-benefit-fund',
    title: 'Staff Benefit Fund',
    year: 'SBF',
    icon: '🎁',
    color: 'from-pink-500 to-rose-600',
    hoverColor: 'from-pink-600 to-rose-700',
    description: 'Staff Benefit Fund - spectacles reimbursement, per-capita grant, and annual grant'
  },
  {
    href: '/quizzes/establishment-rules/trade-union-act-1926',
    title: 'Trade Union Act 1926',
    year: '1926',
    icon: '🤝',
    color: 'from-emerald-500 to-teal-600',
    hoverColor: 'from-emerald-600 to-teal-700',
    description: 'Trade Union Act 1926 - recognition period, zonal votes, and membership age'
  },
  {
    href: '/quizzes/establishment-rules/right-to-information-act-2005',
    title: 'Right to Information Act 2005',
    year: '2005',
    icon: '📄',
    color: 'from-sky-500 to-sky-600',
    hoverColor: 'from-sky-600 to-sky-700',
    description: 'Right to Information Act 2005 - transparency, information requests, PIO, appellate authority, and timelines'
  },
  {
    href: '/quizzes/establishment-rules/linke-holfmann-busch',
    title: 'Linke Hofmann Busch (LHB)',
    year: 'LHB',
    icon: '🚃',
    color: 'from-orange-500 to-orange-600',
    hoverColor: 'from-orange-600 to-orange-700',
    description: 'Linke Hofmann Busch coaches - modern train coaches, safety features, and rolling stock technology'
  },
  {
    href: '/quizzes/establishment-rules/human-resource-management-system',
    title: 'Human Resource Management System (HRMS)',
    year: 'HRMS',
    icon: '👥',
    color: 'from-cyan-500 to-cyan-600',
    hoverColor: 'from-cyan-600 to-cyan-700',
    description: 'Human Resource Management System - leave allocation, loan authority, and employee management for railway staff'
  },
  {
    href: '/quizzes/establishment-rules/miscelaneous',
    title: 'Miscellaneous',
    year: 'Misc',
    icon: '📦',
    color: 'from-lime-500 to-lime-600',
    hoverColor: 'from-lime-600 to-lime-700',
    description: 'Miscellaneous rules - IREM chapters, UMID portal registration, and other general establishment topics'
  },
]

const EstablishmentRules = () => {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="mb-4 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            Establishment Rules
          </h1>

          <div className="mx-auto max-w-3xl rounded-xl border border-white/20 bg-white/80 p-4 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:p-6">
            <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
              Practice Establishment Rules questions topic-wise in exam mode
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">
              Choose a topic below and attempt it with timer, palette, and answer key
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {[...rules]
            .sort((a, b) =>
              a.title.replace(/\s+/g, ' ').trim().localeCompare(
                b.title.replace(/\s+/g, ' ').trim(),
                'en',
                { sensitivity: 'base' },
              ),
            )
            .map((rule) => {
              const isActive = pathname === rule.href
              return (
                <Link key={rule.href} href={rule.href} className="group">
                  <div
                    className={`flex h-full flex-col overflow-hidden rounded-xl border border-white/20 bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:rounded-2xl ${
                      isActive ? 'ring-2 ring-purple-500 ring-offset-2' : ''
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
                          {rule.year ? (
                            <span className="inline-block rounded-md bg-white/20 px-2 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                              {rule.year}
                            </span>
                          ) : null}
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

                      <div className="mt-auto border-t border-gray-200 pt-4">
                        <div
                          className={`inline-flex items-center bg-linear-to-r ${rule.color} bg-clip-text text-sm font-semibold text-transparent`}
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
              <span className="font-semibold text-purple-600">{rules.length}</span>{' '}
              Establishment Rules quizzes available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstablishmentRules
