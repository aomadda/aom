"use client"
import React from 'react'

const BWMPartAPage39: React.FC = () => {
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div className="text-center mb-8">
                  <h5 className="lg:text-2xl text-xl font-bold text-blue-300 mb-4">7.5. Removal of defective Tokens or provision of New Token:</h5>
                </div>

                <div className="text-center">
                  <ul className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 text-xl mt-1">🔧</span>
                      <span>
                        <b>When a defective token is removed</b> or <b>a new token is inserted</b> into a block instrument,
                        <br />
                        an entry must be made in the <span className="text-indigo-200 font-semibold">Train Signal Register</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 text-xl mt-1">📋</span>
                      <span>
                        The entry should display:
                        <ul className="list-none ml-2 mt-2 space-y-1">
                          <li className="flex items-center gap-1">
                            <span className="text-indigo-300 text-lg">#️⃣</span>
                            <span>Class and number of the token removed or inserted</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="text-indigo-300 text-lg">📝</span>
                            <span>Reasons for removal or insertion</span>
                          </li>
                          <li className="flex items-center gap-1">
                            <span className="text-indigo-300 text-lg">⏰</span>
                            <span>Date and time of the action</span>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 text-xl mt-1">🖊️</span>
                      <span>
                        These entries must be written in <span className="text-red-400 font-semibold">red ink</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 text-xl mt-1">✅</span>
                      <span>
                        The entry must be <b>signed by the Signal Inspector</b> or any authorised official, <br />
                        and <b>countersigned by the Station Master</b>.
                      </span>
                    </li>
                  </ul>
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

export default BWMPartAPage39