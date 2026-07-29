"use client"
import React from 'react'

const GLPCheck = () => {
  // Badge gradients for lettered items (Section I)
  const getLetterBadgeGradient = (index: number) => {
    const badges = [
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-blue-400 via-cyan-500 to-teal-500',
    ]
    return badges[index] || badges[0]
  }

  const getLetterGradientColor = () => {
    return 'from-blue-500/20 to-cyan-500/20'
  }

  const getLetterBorderColor = () => {
    return 'border-blue-400/30'
  }

  // Badge gradients for numbered items (Section II)
  const getNumberBadgeGradient = (index: number) => {
    const badges = [
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
      'from-purple-400 via-pink-500 to-rose-500',
    ]
    return badges[index] || badges[0]
  }

  const getNumberGradientColor = () => {
    return 'from-purple-500/20 to-pink-500/20'
  }

  const getNumberBorderColor = () => {
    return 'border-purple-400/30'
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
            <div className="inline-block p-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Procedure to conduct &quot;GLP check&quot; in a sequential manner
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-2">
              No.Safety.157/G&SR, AM & BWM/Vol.II Date: 04.04.2012.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                In order to bring in clarity as to how to conduct &quot;GLP check&quot; in a sequential manner, following procedure is issued;
              </p>
            </div>
          </div>

          {/* Section I */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              I. IF THE FREIGHT TRAIN IS ORDERED TO WORK WITH GUARD
            </h2>
            
            <div className="space-y-4">
              {/* Item a */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(0)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    a
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP shall apply A9 (formation brakes) in `application&apos; position (this is necessary to calculate the percentage of brake power as per SR 4.31).
                    </p>
                  </div>
                </div>
              </div>

              {/* Item b */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(1)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    b
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP shall walk from one side of the formation from the locomotive towards BV duly observing application of brakes for all the wagons and noting down the inoperative cylinders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item c */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(2)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    c
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      Guard after fixing the gauge in the BV, ensure droppage of BP Pressure in the BV and then shall walk from other side of the formation from BV towards locomotive noting down the application of brakes and inoperative cylinders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item d */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(3)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    d
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      While checking the formation, the LP and Guard shall check the formation as per SR 4.31 and JPO No.5/2008 as given in this WTT.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item e */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(4)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    e
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP after reaching the BV and Guard after reaching locomotive, the LP shall advise the ALP to keep the A9 in `release&apos; position.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item f */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(5)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    f
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      In the return direction, the LP shall walk from other side of the formation from BV and Guard on the other side of the formation from engine duly checking the release position of brakes of all wagons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item g */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(6)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    g
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      After ensuring the above procedure, both shall go to station, prepare the GDR memo in triplicate duly signing the same along with the SM, who shall retain one copy as station record which shall be pasted in the Stabled Load Register.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item h */}
              <div className={`bg-linear-to-br ${getLetterGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getLetterBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getLetterBadgeGradient(7)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    h
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      The train can commence its journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section II */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              II. WHEN THE FREIGHT TRAIN IS ORDERED WITHOUT GUARD
            </h2>
            
            <div className="space-y-4">
              {/* Item 1 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(0)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    1
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP is totally responsible to conduct GLP check in the absence of Guard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(1)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    2
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      However, one Pointsman from the station shall be deputed to assist the LP in conducting GDR check.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(2)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    3
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP shall apply A9 (formation brakes) in `application&apos; position (this is necessary to calculate the percentage of brake power as per SR 4.31).
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(3)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    4
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      LP shall walk from one side of the formation from the locomotive towards BV duly observing application of brakes for all the wagons and noting down the inoperative cylinders. The LP need to observe the application of brakes of all the wagons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(4)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    5
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      He is also required to check the formation on both sides as per SR 4.31 and JPO 5/2008 as given in this WTT.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(5)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    6
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      After reaching the BV, the LP shall advise the ALP to release the formation by keeping the A9 in `release&apos; position.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(6)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    7
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      Then, he shall walk from the other side towards the locomotive duly observing the release of brakes of all the wagons.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(7)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    8
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      After ensuring the above procedure, the LP shall go to station, prepare the GDR Check memo in duplicate (signature of Guard column be kept `blank&apos;) duly signing the same along with the SM, who shall retain one copy as station record which shall be pasted in the Stabled Load Register.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 9 */}
              <div className={`bg-linear-to-br ${getNumberGradientColor()} backdrop-blur-lg rounded-xl lg:p-6 p-3 shadow-lg border ${getNumberBorderColor()} hover:border-opacity-50 transition-all duration-300`}>
                <div className="flex items-center justify-center flex-col gap-4">
                  <div className={`lg:h-14 lg:w-14 h-10 w-10 rounded-full bg-linear-to-br ${getNumberBadgeGradient(8)} text-white font-bold flex items-center justify-center shadow-md shrink-0 text-lg`}>
                    9
                  </div>
                  <div className="flex-1 w-full pt-1">
                    <p className="text-gray-200 leading-relaxed">
                      The train can commence its journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NOTE Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              NOTE
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                When the freight train is ordered without Guard and GLP check is necessary, additional time for GLP check from the existing 30 minutes to 60 minutes is permitted for a rake of 59+1 to note down the application of brakes and inoperative cylinders.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                This has the approval of PCME, PCEE & PCOM.
              </p>
            </div>
          </div>

          {/* Signature Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <p className="text-gray-200 lg:text-lg text-md font-semibold">
                PRINCIPAL CHIEF SAFETY OFFICER
              </p>
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

export default GLPCheck