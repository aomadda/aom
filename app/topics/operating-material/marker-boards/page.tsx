'use client'

import React from 'react'
import Link from 'next/link'

interface MarkerBoard {
  description: string
  marker: string
}

const MarkerBoards = () => {
  const markerBoards: MarkerBoard[] = [
    {
      description: 'Automatic stop signal is identified by board with',
      marker: 'A'
    },
    {
      description: 'Semi-automatic stop signal when working as automatic signal is identified by',
      marker: 'Illuminated A marker'
    },
    {
      description: 'Gate stop signal in Automatic Block territory (Letter "G" in black on yellow circular disc and white illuminated letter "A" against black background)',
      marker: 'AG'
    },
    {
      description: 'The marker Board by which Colour light calling ON signal is identified by',
      marker: 'C'
    },
    {
      description: 'Approach stop signal for Dock platform (Letter "D" black on Semaphore arm.',
      marker: 'D'
    },
    {
      description: 'The marker board by which Gate signal is identified by',
      marker: 'G'
    },
    {
      description: 'In case of Class \'D\' stations, \'Warning Board\' is painted yellow background with black letter',
      marker: 'H'
    },
    {
      description: 'Intermediate Block signal is identified by this marker board',
      marker: 'IB'
    },
    {
      description: 'The marker board that is provided to identify Distant Signal in colour light area is',
      marker: 'P'
    },
    {
      description: 'Repeating signal in Semaphore signalling territory (Letter "R" in black on white circular disc)',
      marker: 'R'
    },
    {
      description: 'Repeating signal in Colour light signalling territory (White illuminated letter "R" against black background)',
      marker: 'Illuminated R marker'
    },
    {
      description: 'The marker board for indicating the Outlying siding points are',
      marker: 'S'
    }
  ]

  const getMarkerColor = (index: number) => {
    const colors = [
      'bg-linear-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-linear-to-r from-yellow-600 to-yellow-700',
      'bg-linear-to-r from-green-600 to-green-700',
      'bg-linear-to-r from-blue-600 to-blue-700',
      'bg-linear-to-r from-indigo-600 to-indigo-700',
      'bg-linear-to-r from-purple-600 to-purple-700',
      'bg-linear-to-r from-pink-600 to-pink-700'
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Marker Boards
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to marker boards for signal identification for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          {markerBoards.map((board, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6">
                {/* Marker Badge */}
                <div className={`${getMarkerColor(index)} text-white px-6 py-4 rounded-lg shrink-0 min-w-[120px] flex items-center justify-center`}>
                  <span className="text-3xl font-bold font-mono">
                    {board.marker}
                  </span>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-gray-200 leading-relaxed font-medium text-base sm:text-lg">
                      {board.description}
                    </p>
                  </div>
                </div>

                {/* Marker Display */}
                <div className="shrink-0 sm:w-48 ml-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700">
                    <span className="text-blue-300 font-semibold text-lg font-mono">
                      ({board.marker})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {markerBoards.length}
            </div>
            <div className="text-gray-300">Total Marker Boards</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              Signals
            </div>
            <div className="text-gray-300">Identification</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              A-S
            </div>
            <div className="text-gray-300">Marker Range</div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-blue-100 shadow-lg shadow-black/15 ring-1 ring-blue-500/10 transition hover:border-blue-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MarkerBoards