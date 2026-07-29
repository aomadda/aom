"use client"
import React from 'react'

const BWMPartAPage33A: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - V
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">5.7 &apos;Train passed without tail lamp / flashing tail lamp or tail board&apos; signal (G.R. 4.17)</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Point A */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">a</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-blue-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-blue-300">Station Master Observation and Action</h3>
                    </div>
                    <ul className="space-y-5 mt-2 text-gray-200 lg:text-lg text-base leading-relaxed">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-blue-400">
                          {/* Train icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M4 17v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"/></svg>
                        </span>
                        <span>If the Station Master at <b>&apos;X&apos;</b> observes a train passing without a tail lamp, flashing tail lamp, or tail board, he must send the &quot;Train passed without tail lamp/flashing tail lamp or tail board&quot; signal to station <b>&apos;Y&apos;</b>.</span>  
                      </li> 
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-blue-400">
                          {/* Block icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8v8H8z"/></svg>
                        </span>
                        <span>The Station Master at <b>&apos;X&apos;</b> shall <b>not</b> give the &quot;Train out of block section&quot; signal to the station in rear until he receives the full arrival report of the train from station <b>&apos;Y&apos;</b>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-blue-400">
                          {/* Alert icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M9.429 21h5.142c1.27 0 2.415-.795 2.83-1.992l3.717-10.852c.496-1.447-.56-2.967-2.03-2.967H4.912c-1.47 0-2.526 1.52-2.03 2.967l3.717 10.852A3.002 3.002 0 0 0 9.43 21z"/></svg>
                        </span>
                        <span>If <b>&apos;X&apos;</b> suspects that the train has parted, he should also send the &quot;Train Divided&quot; signal and follow the procedure as per para 5.8.</span>
                      </li> 
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-blue-400">
                          {/* Stop sign icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/></svg>
                        </span>
                        <span>The Station Master at <b>&apos;Y&apos;</b>, upon receiving the signal, must stop and examine the train, even if it is not normally scheduled to stop there.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 text-blue-400">
                          {/* Tools/wrench icon */}
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232a3 3 0 1 1-4.243 4.243M4.93 19.07a3 3 0 1 1 4.242-4.242m6.364-6.364l1.415 1.415M4.93 19.07L6.343 17.657m12.728-12.728l1.415 1.415M19.07 4.93l-1.415 1.415"/></svg>
                        </span>
                        <span>If, on inspection, only the tail board is missing or the tail lamp/flashing tail lamp is extinguished, the issue should be rectified and then the &quot;Train out of block section&quot; signal may be sent.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Point B */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">b</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-purple-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-purple-300">Missing Portion - Accident Reporting</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      If the Station Master at &apos;Y&apos; on examination, finds any portion of the train missing, the occurrence shall be reported as an accident and Station Masters at &apos;W&apos;, &apos;X&apos; and &apos;Y&apos; shall take necessary action thereon.
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

export default BWMPartAPage33A