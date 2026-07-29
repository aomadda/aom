'use client'

import React from 'react'

interface Appendix {
  letter: string
  title: string
  notes?: string[]
}

const SWRAppendix = () => {
  const appendices: Appendix[] = [
    {
      letter: 'A',
      title: 'Working of Level Crossing Gates',
      notes: [
        '(Interlocked LC gates – to be jointly signed by DSTE, DOM & DEN)',
        '(Non-interlocked LC gates – to be jointly signed by DEN & DOM)'
      ]
    },
    {
      letter: 'B',
      title: 'System of signaling and interlocking and communication arrangements at the station',
      notes: ['(to be signed by DSTE)']
    },
    {
      letter: 'C',
      title: 'Anti Collision Device (Raksha Kavach)',
      notes: ['(as and when brought into force)']
    },
    {
      letter: 'D',
      title: 'Duties of train passing staff and staff in each shift',
      notes: ['(to be signed by DOM)']
    },
    {
      letter: 'E',
      title: 'List of essential equipment provided at the station',
      notes: ['(to be signed by DOM)']
    },
    {
      letter: 'F',
      title: 'Rules for working of DK stations, Halts, IBH, IBS and outlying sidings',
      notes: ['(to be jointly signed by DOM & DSTE)']
    },
    {
      letter: 'G',
      title: 'Rules for working trains in electrified sections',
      notes: [
        '(to be jointly signed by Sr.DOM, Sr.DEE (TRD) & Sr.DSTE or',
        'DOM, DEE(TRD) & DSTE)'
      ]
    }
  ]

  const getAppendixColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700',
      'bg-gradient-to-r from-green-600 to-green-700',
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700'
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Station Working Rules (SWR) Appendix
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to Station Working Rules appendices for AOM aspirants
          </p>
        </div>

        {/* Appendices Grid */}
        <div className="space-y-6">
          {appendices.map((appendix, index) => (
            <div key={appendix.letter} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Appendix Header */}
              <div className={`${getAppendixColor(index)} text-white px-4 py-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold bg-white/20 px-4 py-2 rounded-lg">
                      {appendix.letter}
                    </span>
                    <h2 className="text-xl font-bold">
                      Appendix &apos;{appendix.letter}&apos;
                    </h2>
                  </div>
                </div>
              </div>

              {/* Appendix Content */}
              <div className="p-4 sm:p-6 space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-200 leading-relaxed font-medium text-lg">
                    {appendix.title}
                  </p>
                  {appendix.notes && appendix.notes.length > 0 && (
                    <div className="space-y-2">
                      {appendix.notes.map((note, noteIdx) => (
                        <div
                          key={noteIdx}
                          className="group p-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                              {noteIdx + 1}
                            </span>
                            <p className="text-gray-300 leading-relaxed flex-1">
                              {note}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {appendices.length}
            </div>
            <div className="text-gray-300">Total Appendices</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              A-G
            </div>
            <div className="text-gray-300">Appendix Range</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              SWR
            </div>
            <div className="text-gray-300">Station Working Rules</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SWRAppendix