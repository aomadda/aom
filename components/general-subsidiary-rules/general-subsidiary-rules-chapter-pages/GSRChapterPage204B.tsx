"use client"
import React from 'react'

const GSRChapterPage204B = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-md bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="mb-6 text-center">
                  <span className="text-base lg:text-xl font-medium text-blue-200">
                    C. Rules applicable to both Double and Single Lines
                  </span>
                </div>

                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-2xl text-lg font-bold text-white/90">9.09</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-10 space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="font-semibold text-lg lg:text-2xl text-white/90">
                      Working of trains on Centralised Traffic Control territory.—
                    </p>
                    <div className="space-y-6 lg:space-y-8">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20">
                        <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                          <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                            <p>On a section where Centralised Traffic Control is in operation, the working of trains shall be governed by Special Instructions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-3 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                    <div className="space-y-6 text-blue-100/90 leading-relaxed tracking-wide">
                      <div className="space-y-6 lg:space-y-8">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10">
                          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-indigo-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
                          <div className="relative flex flex-col gap-5 rounded-2xl bg-slate-900/50 px-5 py-6 lg:px-8 lg:py-8">
                            <div className="flex items-center gap-4">
                              <span className="flex lg:h-12 lg:w-12 h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-base font-semibold tracking-wide text-cyan-100 text-center lg:text-lg">
                                S.R. 9.09
                              </span>
                              <div className="h-px flex-1 bg-linear-to-r from-cyan-400/40 via-blue-400/30 to-transparent"></div>
                            </div>
                            <div className="space-y-3 text-base leading-relaxed text-blue-100/90 lg:text-lg">
                              <p>There is no Centralised Traffic Control on this railway.</p>
                            </div>
                          </div>
                        </div>
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

export default GSRChapterPage204B