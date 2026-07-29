"use client"
import React from 'react'

const AMAppendixPage140 = () => {
  const drabcSteps = [
    {
      letter: 'D',
      title: 'Danger',
      step: '4.1',
      description: 'Remove the person from the danger; shift him / her to a safe place.',
      color: 'from-red-500 to-red-600'
    },
    {
      letter: 'R',
      title: 'Response',
      step: '4.2',
      description: 'Find out whether the person is responding or not. If he / she responds is Conscious, otherwise unconscious.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      letter: 'A',
      title: 'Airway',
      step: '4.3',
      description: 'If unconscious check ABC; if any failure restore artificially immediately.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      letter: 'B',
      title: 'Breathing',
      step: '4.4',
      description: 'Check breathing status and provide artificial respiration if needed.',
      color: 'from-green-500 to-green-600'
    },
    {
      letter: 'C',
      title: 'Circulation',
      step: '4.5',
      description: 'Check pulse and circulation, provide cardiac massage if needed.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const airwaySteps = [
    'Lay the casualty on his back',
    'Open the mouth and see inside',
    'If the tongue has fallen back, tilt the head slightly back to bring the tongue to its normal position and open the mouth.',
    'If any foreign body is visible inside the mouth it should be removed by inserting two fingers into the mouth carefully.',
    'After clearing the airway, the casualty should be put in recovery position.',
    'Once air way is clear, breathing starts automatically.'
  ]

  const breathingSteps = [
    'Look for the person\'s chest to rise and fall.',
    'Listen for the sounds of inhaled or exhaled air.',
    'Feel for exhaled air by putting your finger near the casualty\'s nose.',
    'If no breathing give two inflations of artificial respiration.'
  ]

  const circulationSteps = [
    'Feel for a pulse, by gently pressing two fingers (do not use the thumb) on the person\'s neck between the Adam\'s apple, or voice box, and the muscle on the side of the neck.',
    'If you are not feeling the pulse it indicates that heart not functioning',
    'Restore the heart through cardiac massage',
    'Pulse rate is 72 times per minute on an average. While noticing the pulse, observe its rate, strength and rhythm.'
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
                      <span className="text-white font-bold lg:text-lg text-base">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      STEPS TO RENDER EFFECTIVE HELP
                    </h3>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-red-300 mb-2">D-R-A-B-C METHODOLOGY</h4>
                      <div className="flex justify-center gap-4 flex-wrap flex-col items-center">
                        <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">D-Danger</span>
                        <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">R-Response</span>
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">A-Airway</span>
                        <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">B-Breathing</span>
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">C-Circulation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* D-R-A-B-C Overview Cards */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {drabcSteps.map((step, index) => (
                      <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                      >
                        <div className="text-center">
                          <div className={`w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-3`}>
                            <span className="text-white font-bold text-xl">{step.letter}</span>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Airway Section */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl border border-blue-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">A</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-blue-300">4.4 AIRWAY</h4>
                        <p className="text-blue-200 text-sm font-medium">Airway Management</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-200 leading-relaxed mb-4">
                        Airway may get blocked due to: Tongue falling back or Foreign body in the airway To check airway
                      </p>
                    </div>

                    <div className="space-y-3">
                      {airwaySteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Breathing Section */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">B</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">4.5 Breathing</h4>
                        <p className="text-green-200 text-sm font-medium">Respiratory Assessment</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {breathingSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Circulation Section */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">C</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-purple-300">4.6 Circulation</h4>
                        <p className="text-purple-200 text-sm font-medium">Cardiac Assessment</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {circulationSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{step}</p>
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

export default AMAppendixPage140