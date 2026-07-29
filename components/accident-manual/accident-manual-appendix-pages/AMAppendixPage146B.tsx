"use client"
import React from 'react'

const AMAppendixPage146B = () => {
  const snakeBiteTreatment = [
    'Tie rubber (Constriction) bandage (if the bite took place on legs / hands) above the wound towards the heart side. This must be released at regular intervals.',
    'Wash the area immediately with flow of water.',
    'Reassure the victim and try to allay his fear.',
    'Don\'t allow him to run or walk.',
    'Treat the wound.',
    'Treat for shock.',
    'Give artificial respiration if there are any signs of failure of breathing.',
    'Arrange medical aid or carry the person to the doctor.'
  ]

  const dogBiteTreatment = [
    'Wash the bitten area with soap water and with antiseptic solution.',
    'Encourage bleeding and do not cover the wound.',
    'Collect information about dog and dog bite whether as it is pet / stray dog; and whether it is a provoking / non provoking bite.',
    'Arrange medical aid.'
  ]

  const scorpionBiteTreatment = [
    'Wash the bitten area.',
    'Apply sodium bi-carbonate or potassium permanganate and sodium bi-carbonate mixture on the bitten area.',
    'Arrange medical aid.'
  ]

  const drowningTreatment = [
    'Remove the person from the water.',
    'Lay him on the ground on his stomach and turn the head to one side.',
    'Apply pressure on the back (waist portion) or raise the belly so that the water in the lungs comes out.',
    'Once lungs are vacated, breathing will start. If it has not started, give artificial respiration to restart the breathing.',
    'Arrange medical aid.'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">APPENDIX – II</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              FIRST AID
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Header */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">11</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      SNAKE / DOG / SCORPION BITE TREATMENT
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* Snake Bite */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">a</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">Snake bite</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {snakeBiteTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dog Bite */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">b</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">Dog bite</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {dogBiteTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scorpion Bite */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">c</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-purple-300">Scorpion bite</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {scorpionBiteTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Drowning */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">d</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">Drowning</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {drowningTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default AMAppendixPage146B