'use client'

import React from 'react'

interface Appendix {
  number: string
  title: string
}

const GSRAppendix = () => {
  const appendices: Appendix[] = [
    { number: 'APPENDIX – I', title: 'Special Instructions regarding issue of Caution Orders (G.R.4.09)' },
    { number: 'APPENDIX – II', title: 'Level Crossing gates' },
    { number: 'APPENDIX - III', title: 'Non-interlocked (NI) working' },
    { number: 'APPENDIX - IV', title: 'Special Instructions regarding line patrolling (G.R.15.05)' },
    { number: 'APPENDIX - V', title: 'Special Instructions regarding new works' },
    { number: 'APPENDIX - VI', title: 'Brake power on trains (Deleted)' },
    { number: 'APPENDIX - VII', title: 'Special Instructions for the use of detonating (fog) signals at stations to indicate to the Loco Pilots of approaching trains, the location of a signals (G.R. & S.R.3.59 to 3.64)' },
    { number: 'APPENDIX - VIII', title: 'Marshalling' },
    { number: 'APPENDIX - IX', title: 'Rules applicable to different categories' },
    { number: 'APPENDIX - X', title: 'Automatic danger level indicators' },
    { number: 'APPENDIX - XI', title: 'Interlocking' },
    { number: 'APPENDIX - XII', title: 'Shunting' },
    { number: 'APPENDIX - XIII', title: 'S&T maintenance works – Testing of points, signals and other equipment – disconnection Notice' },
    { number: 'APPENDIX - XIV', title: 'Station Working Rules' },
    { number: 'APPENDIX - XV', title: 'Operating Forms' },
    { number: 'APPENDIX - XVI', title: 'Working of EMUs / MEMUs' },
    { number: 'APPENDIX - XVII', title: 'Sidings' },
  ]

  const getAppendixColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700',
      'bg-gradient-to-r from-green-600 to-green-700',
      'bg-gradient-to-r from-teal-600 to-teal-700',
      'bg-gradient-to-r from-cyan-600 to-cyan-700',
      'bg-gradient-to-r from-sky-600 to-sky-700',
      'bg-gradient-to-r from-violet-600 to-violet-700',
      'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700',
      'bg-gradient-to-r from-rose-600 to-rose-700',
      'bg-gradient-to-r from-amber-600 to-amber-700',
      'bg-gradient-to-r from-emerald-600 to-emerald-700',
      'bg-gradient-to-r from-lime-600 to-lime-700',
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            G&SR Appendix
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to General and Subsidiary Rules appendices for AOM aspirants
          </p>
        </div>

        {/* Appendices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appendices.map((appendix, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Appendix Header */}
              <div className={`${getAppendixColor(index)} text-white px-4 py-4`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">
                    {appendix.number}
                  </h2>
                </div>
              </div>

              {/* Appendix Content */}
              <div className="p-4">
                <p className="text-gray-200 leading-relaxed font-medium text-sm">
                  {appendix.title}
                </p>
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
              XVII
            </div>
            <div className="text-gray-300">Appendix Range</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              G&SR
            </div>
            <div className="text-gray-300">General & Subsidiary Rules</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GSRAppendix