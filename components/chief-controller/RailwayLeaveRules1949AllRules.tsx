'use client'

import React from 'react'

interface Rule {
  number: string
  title: string
}

const RailwayLeaveRules1949AllRules = () => {
  const rules: Rule[] = [
    { number: '501', title: 'Short title' },
    { number: '502', title: 'Extent of application' },
    { number: '503', title: 'Right to leave' },
    { number: '504', title: 'Effect of dismissal, removal or resignation on leave at credit' },
    { number: '505', title: 'Conversion of one kind of leave into another' },
    { number: '506', title: 'Commencement and end of leave' },
    { number: '507', title: 'Combination of different kinds of leave' },
    { number: '508', title: 'Combination of holidays with leave' },
    { number: '509', title: 'Employment during leave' },
    { number: '510', title: 'Maximum amount of continuous leave' },
    { number: '511', title: 'Application for leave' },
    { number: '512', title: 'Grant of leave' },
    { number: '513', title: 'Leave account' },
    { number: '514', title: 'Verification of title to leave' },
    { number: '515', title: 'Leave when not to be granted' },
    { number: '516', title: 'Recall to duty before expiry of leave' },
    { number: '517', title: 'Return to duty from leave' },
    { number: '518', title: 'Absence after the expiry of leave' },
    { number: '519', title: 'Grant of leave on Medical Certificate' },
    { number: '520', title: 'Grant of leave on Medical Certificate to Group A and Group B Officers' },
    { number: '521', title: 'Comutted leave/Leave on Production of Medical Certificate by the Railway Servants' },
    { number: '522', title: 'Leave to a railway servant who is unlikely to be fit to return to duty' },
    { number: '523', title: 'Leave on average pay' },
    { number: '524', title: 'Calculation of leave on average pay' },
    { number: '525', title: 'Leave applicable to school staff' },
    { number: '526', title: 'Leave on half average pay' },
    { number: '527', title: 'Commuted leave' },
    { number: '528', title: 'Leave not due' },
    { number: '529', title: 'Leave not due to temporary railway employees' },
    { number: '530', title: 'Extraordinary leave' },
    { number: '531', title: 'Leave to probationers and a railway servant on probation' },
    { number: '532', title: 'Leave to Special Class Railway Apprentices' },
    { number: '533', title: 'Leave to Apprentices Mechanics' },
    { number: '534', title: 'Leave to Trade Apprentices' },
    { number: '535', title: 'Leave to other Apprentices' },
    { number: '536', title: 'Extraordinary leave to Apprentices' },
    { number: '537', title: 'General Conditions for grant of leave to Apprentices' },
    { number: '538', title: 'Leave to persons re-employed after retirement' },
    { number: '539', title: 'Leave to workshop staff' },
    { number: '540', title: 'Leave preparatory to retirement & Encashment of Leave on Average Pay along with Railway Pass while in service' },
    { number: '541', title: 'Leave beyond the date of retirement or quitting service' },
    { number: '542', title: 'Leave on termination of employment and leave (terminal) to teporary railway servantm' },
    { number: '543', title: 'Drawal of leave salary' },
    { number: '544', title: 'Leave salary' },
    { number: '545', title: 'Leave salary to workshop staff' },
    { number: '546', title: 'Leave salary to running staff' },
    { number: '547', title: 'Reckoning of special pay for leave salary' },
    { number: '548', title: 'Advances of leave salary' },
    { number: '549', title: 'Cash equivalent of leave salary in case of death in service & Payment of Cash equivalent of Leave Salary in case of death etc. of Railway servant' },
    { number: '550', title: 'Cash Payment in lieu of unutilized leave on average pay on the date of retirement' },
    { number: '551', title: 'Maternity leave & Paternity Leave & Paternity Leave to Leave to Male casual Railway employee who has been granted temporary status & Child Adoption Leave & Paternity Leave for child adoption & Child Care Leave' },
    { number: '552', title: 'Special disability leave for injury intentionally inflicted' },
    { number: '553', title: 'Special disability leave for accidental  injury' },
    { number: '554', title: 'Hospital Leave' },
    { number: '555', title: 'Quarantine Leave-- Deleted' },
    { number: '556', title: 'Study Leave' },
    { number: '557', title: 'Miscellaneous' }
  ]

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
      'bg-gradient-to-r from-cyan-500 to-cyan-600',
      'bg-gradient-to-r from-sky-500 to-sky-600',
      'bg-gradient-to-r from-violet-500 to-violet-600',
      'bg-gradient-to-r from-rose-500 to-rose-600',
      'bg-gradient-to-r from-amber-500 to-amber-600',
      'bg-gradient-to-r from-emerald-500 to-emerald-600',
      'bg-gradient-to-r from-lime-500 to-lime-600',
      'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600',
      'bg-gradient-to-r from-slate-500 to-slate-600'
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Railway Servants (Liberalised Leave) Rules, 1949 - All Rules
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Complete reference guide to all rules of the Railway Servants (Liberalised Leave) Rules, 1949
          </p>
        </div>

        {/* Rules Grid */}
        <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white px-6 py-5">
            <div className="flex items-center justify-between flex-col flex-wrap gap-2">
              <div className="flex items-center gap-3">
                
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-center">
                    LEAVE RULES
                  </h2>
                  <p className="text-sm sm:text-base text-white/90 mt-1 text-center">
                    Railway Servants (Liberalised Leave) Rules, 1949
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/80">Total Rules - {rules.length}</div>
              </div>
            </div>
          </div>

          {/* Rules Grid */}
          <div className="lg:p-6 p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rules.map((rule, ruleIndex) => (
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

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {rules.length}
            </div>
            <div className="text-gray-300">Total Rules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              501-557
            </div>
            <div className="text-gray-300">Rule Range</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              1949
            </div>
            <div className="text-gray-300">Rules Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayLeaveRules1949AllRules
