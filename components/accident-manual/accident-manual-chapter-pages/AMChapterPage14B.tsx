"use client"
import React from 'react'

const AMChapterPage14B = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in"></h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">ENGINE CREW OF THE TRAIN</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Duties and responsibilities of engine crew during train accidents
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* Engine Crew Duties Section */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <h3 className="text-white lg:text-2xl text-xl font-bold">302</h3>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6 text-center">
                      <span className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Engine Crew Duties During Accidents
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <p className="text-white mb-4">On occurrence of an accident to a train, its crew shall:</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">1.</h4>
                        <p className="text-white">Immediately switch on the Flasher Light. If flasher light is not working, exhibit hand danger signal so as to stop any train coming in the opposite direction on a double line section.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">2.</h4>
                        <p className="text-white">Note the time of accident.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">3.</h4>
                        <p className="text-white">Protect the adjacent line/lines/same line in accordance with rules in force.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">4.</h4>
                        <p className="text-white">Take such technical precautions as may be necessary or as prescribed by special instructions to render the locomotive safe.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">5.</h4>
                        <p className="text-white">Give information to Guards about the locomotive (derailed or not), condition of coaches/wagons immediately in rear of the loco and any other information relevant to the accident.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">6.</h4>
                        <p className="text-white">Send Assistant Loco Pilot to assist the Guard in establishing contact with control office, relief and rescue operations.</p>
                      </div>
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

export default AMChapterPage14B