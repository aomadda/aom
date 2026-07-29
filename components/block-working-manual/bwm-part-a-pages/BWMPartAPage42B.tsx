"use client"
import React from 'react'

const BWMPartAPage42B: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER VII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">TESTING OF BLOCK INSTRUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl py-4 px-8 border border-white/20">
                <h5 className="lg:text-2xl text-xl font-bold text-blue-300">7.10. Block instruments maintenance work by S & T staff:</h5>
              </div>
            </div>

            {/* Introductory Text */}
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-3 px-6 border border-white/10">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  When the Signal maintainer or Signal Inspector requires to repair/clean a block instrument, which is in use, the following procedure shall be observed.
                </p>
              </div>
            </div>

            {/* Point A */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">a</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-blue-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-blue-300">Section Verification</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Signal Inspector / Signal maintainer and the Station Master will both satisfy themselves that there is no train in the section.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Point B */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">b</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-purple-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-purple-300">Instrument Takeover Procedure</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      The Signal maintainer or the Signal Inspector will take over the block instrument from the Station Master and enter the date and time of his having done so in the Train Signal Register. The Station Master will sign the entry. The entry shall be in the following form--
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono">
                        &apos;&apos;.....................side Block Instrument taken over for cleaning/repairs at ......................hours&apos;. sd/............................ sd/..............................
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono mt-2">
                        Station Master SI/ Signal maintainer
                      </p>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mt-4">
                      Meanwhile, trains if any, shall be worked as in the case of failure of Block Instruments, until the Block Instrument is handed over back to the Station Master.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Point C */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">c</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 lg:p-6 py-4 px-4 rounded-xl border border-emerald-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-emerald-300">Instrument Handover After Completion</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      When the cleaning or repairs are completed and the instruments locked up, the instrument shows &apos;Line closed&apos; position, the person who had taken over the Block Instrument for maintenance will hand over the instrument to the Station Master and make the following entry in the Train Signal Register.
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono">
                        &apos;....................side Block Instrument handed over at
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono">
                        . ....................... hours&apos;.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono mt-2">
                        sd/....................... sd/..................
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-mono">
                        Station Master. SI/ Signal maintainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Point D */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">d</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 lg:p-6 py-4 px-4 rounded-xl border border-orange-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-orange-300">Cross-Station Communication</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Both at the time of handing over and taking over, the Station Master will advise the Station Master at the other end of the block section of the above fact by telephone and the Station Master at the other end of the block section shall make corresponding entries in his Train Signal Register.
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

export default BWMPartAPage42B