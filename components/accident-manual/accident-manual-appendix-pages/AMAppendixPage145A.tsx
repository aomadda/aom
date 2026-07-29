"use client"
import React from 'react'

const AMAppendixPage145A = () => {
  const burnCauses = [
    'Dry heat – such as fire / flame',
    'Friction – touching speedy moving objects',
    'Corrosive (burning nature) chemicals like acids / alkalis',
    'Touching an object which was charged with high tension electric current.'
  ]

  const scaldCauses = [
    'hot water, milk, oil, tar, steam etc.'
  ]

  const burnDegrees = [
    { degree: '1st degree', description: 'Redness of skin, blister formation' },
    { degree: '2nd degree', description: 'Internal tissue damage' },
    { degree: '3rd degree', description: 'Complete charring of part.' }
  ]

  const burnTreatments = [
    { letter: 'a', description: 'If a person\'s cloth catches fire do not allow him to run. Pour plenty of water or gently place him on ground and roll him slowly to put on the flames.' },
    { letter: 'b', description: 'Cool and clean the affected area with wet cloth / cotton or flood with water or dip the affected area into water, if it is possible.' },
    { letter: 'c', description: 'Remove bangles, rings, watches immediately, as otherwise it may not be possible to remove them later.' },
    { letter: 'd', description: 'Remove the burnt cloths by cutting those not sticking to the skin.' },
    { letter: 'e', description: 'Cover the area preferably with clean cloth but do not disturb blisters.' },
    { letter: 'f', description: 'Do not apply antiseptic cream for major burns' },
    { letter: 'g', description: 'If he is conscious give water with pinch of salt to make good lost salt and water. Weak tea with more sugar also may be given if he is not a diabetic patient.' }
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
                      <span className="text-white font-bold lg:text-lg text-base">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                      </span>
                      BURNS AND SCALDS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* Definition */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 p-3">
                    <h4 className="text-xl font-bold text-blue-300 mb-3">Definition</h4>

                    {/* Burn Definition */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2">Burn:</h5>
                      <p className="text-gray-200 leading-relaxed mb-3">is an injury caused by</p>
                      <div className="space-y-2">
                        {burnCauses.map((cause, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-blue-300">•</span>
                            <p className="text-gray-300 leading-relaxed">{cause}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scald Definition */}
                    <div>
                      <h5 className="text-white font-semibold mb-2">Scald:</h5>
                      <p className="text-gray-200 leading-relaxed">is an injury caused by moist heat such as</p>
                      <div className="space-y-2">
                        {scaldCauses.map((cause, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-blue-300">•</span>
                            <p className="text-gray-300 leading-relaxed">{cause}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Degrees of Burns */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">3.1</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">Degrees of burns</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-1 gap-4">
                      {burnDegrees.map((degree, index) => (
                        <div
                          key={index}
                          className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1"
                        >
                          <div className="flex flex-col text-center items-center lg:gap-4 gap-2">
                            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-lg">{degree.degree}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 leading-relaxed font-medium">
                                {degree.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* General Treatment */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">3.2</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">General treatment for burns and scalds</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {burnTreatments.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-lg">{treatment.letter}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment.description}</p>
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

export default AMAppendixPage145A