"use client"
import React from 'react'

const AutomaticClosingOpening = () => {
  // Badge gradients for numbered items
  const getBadgeGradient = (index: number) => {
    const badges = [
      'from-green-400 via-emerald-500 to-teal-500',
      'from-green-400 via-emerald-500 to-teal-500',
      'from-green-400 via-emerald-500 to-teal-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-orange-400 via-red-500 to-rose-500',
      'from-orange-400 via-red-500 to-rose-500',
      'from-orange-400 via-red-500 to-rose-500',
    ]
    return badges[index - 1] || badges[0]
  }

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-green-500/20 to-emerald-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-orange-500/20 to-red-500/20',
      'from-orange-500/20 to-red-500/20',
      'from-orange-500/20 to-red-500/20',
    ]
    return gradients[index - 1] || gradients[0]
  }

  const getBorderColor = (index: number) => {
    const borders = [
      'border-green-400/30',
      'border-green-400/30',
      'border-green-400/30',
      'border-purple-400/30',
      'border-orange-400/30',
      'border-orange-400/30',
      'border-orange-400/30',
    ]
    return borders[index - 1] || borders[0]
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-3xl text-xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Automatic Closing/Opening of Hinged Door System
            </h1>
            <p className="text-gray-300 text-sm mb-2">T. No. 22705/22706 TPTY – JAT - TPTY Weekly Humsafar Superfast Express</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: System Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              System Overview
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  Train No. 22705/22706 TPTY – JAT - TPTY weekly Humsafar Superfast Express. This train has been supplied with Automatic door opening/closing mechanism by M/S Bony polymers (P) Ltd as per RDSO specification 2014_CG_03.
                </p>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  The salient features of the system are:
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Safety & Operational Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Safety & Operational Features
            </h2>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className={`bg-linear-to-br ${getGradientColor(1)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(1)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(1)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      When the train is stationary at station and the formation (rake) main doors are in open condition, the formation brakes are applied by dropping BP pressure through a door system brake line solenoid valve in LWLRRM coaches and the train cannot be moved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className={`bg-linear-to-br ${getGradientColor(2)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(2)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(2)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      Before departure, the On duty Train Manager of the train has to close the formation main doors through Master door controller, then only the formation brakes are released after closing of all doors, and train can be moved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className={`bg-linear-to-br ${getGradientColor(3)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(3)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(3)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      If because of any reason any of the door is not closed, the mechanical isolating cock provided in front of the door system brake line solenoid valve in LWLRRM to be closed. Then the formation brakes are released and train can be started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Door Control & Timing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Door Control & Timing
            </h2>

            <div className="space-y-4">
              {/* Item 4 */}
              <div className={`bg-linear-to-br ${getGradientColor(4)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(4)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(4)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      After giving CLOSE command in the door controller by the On duty Train Manager, there will be audio indication for 15 seconds and afterwards the doors will CLOSE in 4 to 6 seconds. It takes 19 to 21 seconds for complete closing of the doors after giving the close command and 15 to 20 seconds for releasing of the entire formation brakes. Altogether, it takes 34 to 41 seconds from giving door close command to complete releasing of formation brakes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Emergency Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Emergency Features
            </h2>

            <div className="space-y-4">
              {/* Item 5 */}
              <div className={`bg-linear-to-br ${getGradientColor(5)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(5)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(5)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    5
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      When the train speed is above 5 kmph, the Emergency push buttons provided inside and outside of the main doors get isolated and the doors cannot be opened.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className={`bg-linear-to-br ${getGradientColor(6)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(6)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(6)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    6
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      In case of any emergency, for opening of main doors, first the train has to be stopped by ACP and then Emergency push buttons can be pressed and doors can be opened.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className={`bg-linear-to-br ${getGradientColor(7)} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getBorderColor(7)} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getBadgeGradient(7)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    7
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      Similarly, after giving OPEN command in the door controller by the On duty Train Manager, there will be audio indication for 15 seconds and afterwards the doors will OPEN in 4 to 6 seconds. It takes 19 to 21 seconds for complete OPENING of the doors after giving the OPEN command.
                    </p>
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

export default AutomaticClosingOpening