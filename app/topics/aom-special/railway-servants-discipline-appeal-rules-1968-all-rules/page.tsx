'use client'

import React from 'react'

interface Rule {
  number: string
  title: string
}

interface Part {
  number: string
  title: string
  rules: Rule[]
}

const RailwayServantsDisciplineAppealRules1968AllRulesPage = () => {
  const parts: Part[] = [
    {
      number: 'I',
      title: 'GENERAL',
      rules: [
        { number: '1', title: 'Short title and commencement' },
        { number: '2', title: 'Definitions' },
        { number: '3', title: 'Application' }
      ]
    },
    {
      number: 'II',
      title: 'SUSPENSION',
      rules: [
        { number: '4', title: 'Authorities competent to place a Railway servant under suspension' },
        { number: '5', title: 'Suspension' }
      ]
    },
    {
      number: 'III',
      title: 'PENALTIES AND DISCIPLINARY AUTHORITIES',
      rules: [
        { number: '6', title: 'Penalties' },
        { number: '7', title: 'Disciplinary Authorities' },
        { number: '8', title: 'Authority to Institute Proceedings' }
      ]
    },
    {
      number: 'IV',
      title: 'PROCEDURE FOR IMPOSING PENALTIES',
      rules: [
        { number: '9', title: 'Procedure for imposing Major Penalties' },
        { number: '10', title: 'Action on the inquiry report' },
        { number: '11', title: 'Procedure for imposing minor penalties' },
        { number: '12', title: 'Communication of orders' },
        { number: '13', title: 'Common proceedings' },
        { number: '14', title: 'Special procedure in certain cases' },
        { number: '15', title: 'Provisions regarding Railway servants lent to State Governments, etc.' },
        { number: '16', title: 'Provisions regarding officers borrowed from Central or State Governments, etc.' }
      ]
    },
    {
      number: 'V',
      title: 'APPEALS',
      rules: [
        { number: '17', title: 'Orders against which no appeal lies' },
        { number: '18', title: 'Orders against which appeal lies' },
        { number: '19', title: 'Appellate Authorities' },
        { number: '20', title: 'Period of limitation for appeals' },
        { number: '21', title: 'Form and contents and submission of appeal' },
        { number: '22', title: 'Consideration of appeal' },
        { number: '23', title: 'Implementation of orders in appeal' },
        { number: '24', title: 'Special provisions for non-gazetted staff' }
      ]
    },
    {
      number: 'VI',
      title: 'REVISION AND REVIEW',
      rules: [
        { number: '25', title: 'Revision' },
        { number: '25-A', title: 'Review' }
      ]
    },
    {
      number: 'VII',
      title: 'MISCELLANEOUS',
      rules: [
        { number: '26', title: 'Service of orders, notices etc.' },
        { number: '26-A', title: 'Service of orders, notices etc. on behalf of the Railway Board or President' },
        { number: '27', title: 'Power to relax time limit and to condone delay' },
        { number: '28', title: 'Supply of copy of Commission\'s advice' },
        { number: '29', title: 'Repeal and saving' },
        { number: '30', title: 'Removal of doubts' },
        { number: '31', title: 'Right to submit petitions to the President' }
      ]
    }
  ]

  const getPartColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700'
    ]
    return colors[index % colors.length]
  }

  const getRuleColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-pink-500 to-pink-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-yellow-500 to-yellow-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-teal-500 to-teal-600',
      'bg-gradient-to-r from-cyan-500 to-cyan-600'
    ]
    return colors[index % colors.length]
  }

  const totalRules = parts.reduce((sum, part) => sum + part.rules.length, 0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            THE RAILWAY SERVANTS (DISCIPLINE & APPEAL) RULES, 1968
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Complete reference guide to all parts and rules of the Railway Servants (Discipline & Appeal) Rules, 1968
          </p>
        </div>

        {/* Parts */}
        <div className="space-y-8">
          {parts.map((part, partIndex) => (
            <div
              key={partIndex}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Part Header */}
              <div className={`${getPartColor(partIndex)} text-white px-6 py-5`}>
                <div className="flex items-center justify-between flex-col flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-center">
                        PART - {part.number}
                      </h2>
                      <p className="text-sm sm:text-base text-white/90 mt-1 text-center">
                        {part.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/80">Rules - {part.rules.length}</div>
                  </div>
                </div>
              </div>

              {/* Rules Grid */}
              <div className="lg:p-6 p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {part.rules.map((rule, ruleIndex) => (
                    <div
                      key={ruleIndex}
                      className="group bg-slate-700/50 rounded-lg p-4 border border-slate-600 hover:border-blue-400 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${getRuleColor(ruleIndex)} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0`}>
                          {rule.number}
                        </div>
                        <p className="text-gray-200 leading-relaxed text-sm font-medium flex-1">
                          {rule.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {parts.length}
            </div>
            <div className="text-gray-300">Total Parts</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {totalRules}
            </div>
            <div className="text-gray-300">Total Rules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              1968
            </div>
            <div className="text-gray-300">Rules Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayServantsDisciplineAppealRules1968AllRulesPage
