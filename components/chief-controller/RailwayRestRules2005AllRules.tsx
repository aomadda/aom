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

const RailwayRestRules2005AllRules = () => {
  const parts: Part[] = [
    {
      number: 'I',
      title: 'Introduction',
      rules: [
        { number: '1', title: 'Short title, commencement and application' },
        { number: '2', title: 'Definitions' }
      ]
    },
    {
      number: 'II',
      title: 'Classification of Employment and Hours of Work',
      rules: [
        { number: '3', title: 'Prescribed authority to classify the employment of railway servant' },
        { number: '4', title: 'Appeals against classification' },
        { number: '5', title: 'Supervisory staff' },
        { number: '6', title: 'Excluded staff' },
        { number: '7', title: 'Criteria for determining classification of railway servants' },
        { number: '8', title: 'Fixation of hours of work' },
        { number: '9', title: 'Power to make temporary exemption' },
        { number: '10', title: 'Principle of averaging and payment of overtime allowance' },
        { number: '11', title: 'Register of extra hours of work' },
        { number: '12', title: 'Periodical Rest' },
        { number: '13', title: 'Compensatory periods of rest' }
      ]
    },
    {
      number: 'III',
      title: 'Authorities to Ensure Proper Implementation',
      rules: [
        { number: '14', title: 'Appointment of Supervisors' },
        { number: '15', title: 'Display of rules and notices' },
        { number: '16', title: 'Annual Return' }
      ]
    },
    {
      number: 'IV',
      title: 'Residuary Powers',
      rules: [
        { number: '17', title: 'Power to make modification in special cases' }
      ]
    },
    {
      number: 'V',
      title: 'Repeal and Saving',
      rules: [
        { number: '18', title: 'The Railway Servants (Hours of Employment) Rules, 1961' }
      ]
    }
  ]

  const getPartColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700'
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
            Railway Servants (Hours of Work and Period of Rest) Rules, 2005
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Complete reference guide to all parts and rules of the Railway Servants (Hours of Work and Period of Rest) Rules, 2005
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
              2005
            </div>
            <div className="text-gray-300">Rules Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayRestRules2005AllRules
