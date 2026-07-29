"use client"
import React from 'react'

const GSRAppendixPage457B = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-gradient-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-gradient-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              TO SHUNT PAST LSS:
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                {/* Section 8: Double Line */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">8</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      Double Line:
                    </p>
                    <div className="space-y-4 lg:space-y-5">
                      {[
                        { num: 1, text: "Block forward and then take 'off' Shunt signal (if any) provided below LSS; or" },
                        { num: 2, text: "Block forward and give T/806 with PN; or" },
                        { num: 3, text: "Block forward and then give the key extracted from LSS lever lock (where provided)." }
                      ].map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                          <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                            <div className="flex items-center gap-4">
                              <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                                {item.num}
                              </span>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                            </div>
                            <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                              <p>{item.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* NOTE */}
                      <div className="relative overflow-hidden rounded-2xl border border-yellow-400/30 bg-yellow-500/10 shadow-lg shadow-yellow-900/20 transition-all duration-500 hover:border-yellow-400/50 hover:bg-yellow-500/15 mt-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-orange-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                        <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="flex items-center gap-4">
                            <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-500/20 text-base font-semibold tracking-wide text-yellow-100 text-center lg:text-lg">
                              N
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-yellow-400/40 via-yellow-300/30 to-transparent"></div>
                          </div>
                          <div className="space-y-3 text-base leading-relaxed text-yellow-100/90 lg:text-lg">
                            <p className="font-semibold text-yellow-200/90 mb-2">NOTE:</p>
                            <p>If shunting beyond LSS is permitted in Station Working Rules behind the train travelling away from a station, the Shunt signal, if any provided below the LSS may be taken &apos;off&apos; or the Loco Pilot may be given T/806 without PN. As soon as the preceding train clears the section, the line should be blocked forward, if the shunting is not completed.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 9: Single line */}
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-xl shadow-purple-900/40 flex items-center justify-center">
                        <span className="lg:text-xl text-base font-bold text-white/90">9</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      Single line:
                    </p>
                    <p className="text-base lg:text-lg text-blue-200/90 italic mb-4">
                      To shunt outside station section up to FSS.––
                    </p>
                    <div className="space-y-4 lg:space-y-5">
                      {[
                        { num: 1, text: "In token section, the Loco Pilot should be given T/806." },
                        { num: 2, text: "In Tokenless sections: Handle type block instrument - the Loco Pilot should be given the shunt key extracted from the block instrument. If shunt key cannot be extracted from the block instrument, T/806 should be given." },
                        { num: 3, text: "Push button type block instruments (RAB) - shunt key shall be extracted and handed over to the Loco Pilot. If the shunt key cannot be extracted, the station in advance should be asked to take out the shunt key and to give PN to that effect. Then the Loco Pilot should be given T/806." }
                      ].map((item, index) => (
                        <div key={index} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                          <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                            <div className="flex items-center gap-4">
                              <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                                {item.num}
                              </span>
                              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                            </div>
                            <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                              <p>{item.text}</p>
                            </div>
                          </div>
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default GSRAppendixPage457B