'use client'

import React from 'react'

interface Chapter {
  number: string
  title: string
}

const StationWorkingRulesChaptersPage = () => {
  const chapters: Chapter[] = [
    { number: 'Chapter I', title: 'STATION WORKING DIAGRAM' },
    { number: 'Chapter II', title: 'DESCRIPTION OF STATION' },
    { number: 'Chapter III', title: 'SYSTEM AND MEANS OF WORKING' },
    { number: 'Chapter IV', title: 'SYSTEM OF SIGNALLING AND INTERLOCKING' },
    { number: 'Chapter V', title: 'TELECOMMUNICATIONS' },
    { number: 'Chapter VI', title: 'SYSTEM OF TRAIN WORKING' },
    { number: 'Chapter VII', title: 'BLOCKING OF LINES' },
    { number: 'Chapter VIII', title: 'SHUNTING (VARIOUS PRECAUTIONS & AUTHORITIES' },
    { number: 'Chapter IX', title: 'ABNORMAL CONDITIONS' },
    { number: 'Chapter X', title: 'VISIBILITY TEST OBJECT' },
    { number: 'Chapter XI', title: 'ESSENTIAL EQUIPMENT AT THE STATION' },
    { number: 'Chapter XII', title: 'FOG SIGNALMEN NOMINATED TO BE CALLED IN CASE OF FOG' },
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
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            SWR Chapters
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to Station Working Rules chapters for AOM aspirants
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
              SWR
            </div>
            <div className="text-gray-300">Station Working Rules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              AOM
            </div>
            <div className="text-gray-300">Assistant Operations Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StationWorkingRulesChaptersPage