"use client"
import React from 'react'

const MSDAC = () => {
  const rectificationSteps = [
    'On coming to know about an Automatic Signal failure either through the Loco pilot or through the panel indications or through any other means, the SM shall advise concerned signal staff as per SR 9.11.4 "The Station master on receipt of signal failure shall at once advise by telephone the concerned signal maintainer, the SCOR, and the station master in rear, giving the correct number of the signal that has failed duly making suitable entry in the S&T failure register."',
    'In case of Automatic signal failure due to an MSDAC/Axle counter failure, as visible on VDU/indication board, the on-duty Station Master shall observe whether preparatory reset got activated; and after passing one train, the failure got restored. In case of restoration, the SM shall advise the Signal Maintainer concerned, the SCOR and the SM in rear, duly making suitable entry in the S&T failure register.',
    'On continuation of the failure, the Signal maintainer shall issue Disconnection notice to SM and proceed to site. On reaching the site, the Signal maintainer shall disconnect the fuse and link of Yellow, Double Yellow and Green aspect of the concerned signal in that particular Goomty / location ensuring the signal will never get any Green, Yellow or Double Yellow aspect during failure time.',
    'The trains shall continue to be run as per the Automatic Block System rules, even under such disconnection of Automatic Signal(s) for failure attention.',
    'After rectification of failure, the Signal maintainer shall advise that the failure has been attended and if required, seek on duty Station Master to initiate manual resetting procedure as prescribed in SWR.',
    'Before initiating manual reset, the on-duty Station Master shall ensure that no further train is dispatched towards the affected section till the completion of reset procedure.',
    'On completion of manual reset procedure, the on-duty Station Master shall observe for appearance of preparatory reset indication on the VDU/indication panel and shall communicate the same to the Signal maintainer at site.',
    'On ascertaining the preparatory reset indication through station master, the Signal maintainer shall connect the links of fuses of Yellow, Double Yellow and Green aspects.',
    'Once Axle counter accepted preparatory reset mode, Station master shall allow one train in to the section in order to clear and reset the faulty MSDAC/Axle counter. Only on clearance of the train beyond the affected section, further trains shall be dispatched in to the section.',
    'If failure restored S&T staff will issue restoration message to SM, record the rectification time in his diary and inform the same to S&T controller. The SM shall advise the restoration message to the SCOR and the Station master in rear. Signal maintainer after reaching the station shall issue reconnection notice to SM and make suitable entry in S&T failure register.',
  ]

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              JPO for rectification of failures in Automatic Signals with MSDAC/Axle Counters
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: Rectification Procedure */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                Rectification Procedure
              </h2>
            </div>

            <div className="space-y-4">
              {rectificationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
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

export default MSDAC