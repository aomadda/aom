'use client'

import React from 'react'

interface Chapter {
  number: string
  title: string
  rules: number
}

const GSRChapters = () => {
  const chapters: Chapter[] = [
    { number: 'Chapter I', title: 'PRELIMINARY', rules: 3 },
    { number: 'Chapter II', title: 'RULES APPLYING TO RAILWAY SERVANTS GENERALLY', rules: 11 },
    { number: 'Chapter III', title: 'SIGNALS', rules: 85 },
    { number: 'CHAPTER IV', title: 'WORKING OF TRAINS GENERALLY', rules: 66 },
    { number: 'CHAPTER V', title: 'CONTROL AND WORKING OF STATIONS', rules: 23 },
    { number: 'CHAPTER VI', title: 'ACCIDENTS AND UNUSUAL OCCURRENCES', rules: 11 },
    { number: 'CHAPTER VII', title: 'SYSTEM OF WORKING', rules: 2 },
    { number: 'CHAPTER VIII', title: 'THE ABSOLUTE BLOCK SYSTEM', rules: 16 },
    { number: 'CHAPTER IX', title: 'THE AUTOMATIC BLOCK SYSTEM', rules: 16 },
    { number: 'CHAPTER X', title: 'THE FOLLOWING TRAINS SYSTEM', rules: 9 },
    { number: 'CHAPTER XI', title: 'THE PILOT GUARD SYSTEM', rules: 6 },
    { number: 'CHAPTER XII', title: 'THE TRAIN-STAFF AND TICKET SYSTEM', rules: 17 },
    { number: 'CHAPTER XIII', title: 'THE ONE TRAIN ONLY SYSTEM', rules: 4 },
    { number: 'CHAPTER XIV', title: 'BLOCK WORKING', rules: 26 },
    { number: 'CHAPTER XV', title: 'PERMANENT WAY AND WORKS', rules: 28 },
    { number: 'CHAPTER XVI', title: 'LEVEL CROSSINGS', rules: 11 },
    { number: 'CHAPTER XVII', title: 'WORKING OF TRAINS ON ELECTRIFIED SECTIONS OF RAILWAYS', rules: 9 },
    { number: 'CHAPTER XVIII', title: 'MISCELLANEOUS', rules: 1 },
  ]

  const getChapterColor = (index: number) => {
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
      'bg-gradient-to-r from-stone-600 to-stone-700',
    ]
    return colors[index % colors.length]
  }

  const getRulesColor = (rules: number) => {
    if (rules >= 50) return 'text-red-300'
    if (rules >= 20) return 'text-orange-300'
    if (rules >= 10) return 'text-yellow-300'
    return 'text-green-300'
  }

  const totalRules = chapters.reduce((sum, chapter) => sum + chapter.rules, 0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            G&SR Chapters
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to General and Subsidiary Rules chapters for AOM aspirants
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Chapter Header */}
              <div className={`${getChapterColor(index)} text-white px-4 py-4`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">
                    {chapter.number}
                  </h2>
                  <div className={`px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30`}>
                    <span className={`text-sm font-semibold ${getRulesColor(chapter.rules)}`}>
                      {chapter.rules} Rules
                    </span>
                  </div>
                </div>
              </div>

              {/* Chapter Content */}
              <div className="p-4">
                <p className="text-gray-200 leading-relaxed font-medium text-sm">
                  {chapter.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {chapters.length}
            </div>
            <div className="text-gray-300">Total Chapters</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {totalRules}
            </div>
            <div className="text-gray-300">Total Rules</div>
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

export default GSRChapters