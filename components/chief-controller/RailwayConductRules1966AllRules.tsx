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

const RailwayConductRules1966AllRules = () => {
  const rules: Rule[] = [
    { number: "1", title: "Short title." },
    { number: "2", title: "Definition" },
    { number: "3", title: "General" },
    { number: "4", title: "Employment of near relatives of railway servants in Company or firm enjoying Government patronage." },
    { number: "5", title: "Taking part in politics and elections" },
    { number: "6", title: "Joining of Associations or Unions by Railway Servants" },
    { number: "7", title: "Demonstration." },
    { number: "8", title: "Connection with press or other media" },
    { number: "9", title: "Criticism of Government" },
    { number: "10", title: "Evidence before Committee or any other Authority" },
    { number: "11", title: "Communication of Official Information" },
    { number: "12", title: "Subscription" },
    { number: "13", title: "Gifts" },
    { number: "14", title: "Public demonstrations in honour of Railway servants" },
    { number: "15", title: "Private trade or Employment" },
    { number: "16", title: "Investment, lending and borrowing" },
    { number: "17", title: "Insolvency and Habitual indebtedness" },
    { number: "18", title: "Movable, immovable and valuable Property" },
    { number: "19", title: "Vindication of Acts and Character of Railway servants." },
    { number: "20", title: "Canvassing of Non-official or other Influence" },
    { number: "21", title: "Restrictions Regarding Marriage" },
    { number: "22", title: "Consumption of intoxicating Drinks and Drugs" },
    { number: "23", title: "Interpretation" },
    { number: "24", title: "Delegation of Powers" },
    { number: "25", title: "Repeal and Savings" }
  ]

  const parts: Part[] = [
    {
      number: 'I',
      title: 'PRELIMINARY',
      rules: rules.slice(0, 3)
    },
    {
      number: 'II',
      title: 'EMPLOYMENT AND POLITICAL ACTIVITIES',
      rules: rules.slice(3, 7)
    },
    {
      number: 'III',
      title: 'MEDIA AND COMMUNICATION',
      rules: rules.slice(7, 11)
    },
    {
      number: 'IV',
      title: 'FINANCIAL AND PROPERTY MATTERS',
      rules: rules.slice(11, 18)
    },
    {
      number: 'V',
      title: 'CHARACTER AND CONDUCT',
      rules: rules.slice(18, 22)
    },
    {
      number: 'VI',
      title: 'MISCELLANEOUS',
      rules: rules.slice(22, 25)
    }
  ]

  const getPartColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700'
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
            Railway Services (Conduct) Rules, 1966 - All Parts
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Complete reference guide to all parts and rules of the Railway Services (Conduct) Rules, 1966
          </p>
        </div>

        {/* Parts */}
        <div className="space-y-8">
          {parts.map((part, partIndex) => (
            <div
              key={partIndex}
              className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Part Header */}
              <div className={`${getPartColor(partIndex)} text-white px-3 py-5`}>
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
              1966
            </div>
            <div className="text-gray-300">Rules Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayConductRules1966AllRules
