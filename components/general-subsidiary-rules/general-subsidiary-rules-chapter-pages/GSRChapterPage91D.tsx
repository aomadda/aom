"use client"
import React from 'react'

const GSRChapterPage91D = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-28 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-24 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-3 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-lg font-bold text-white/80">4.04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-linear-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              4.04. Time of attendance for train crew.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-16 -left-20 w-48 h-48 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-5 lg:p-12">
                <div className="group relative flex flex-col gap-6 rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-blue-950/70 p-5 lg:p-12 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-indigo-950/80 hover:to-blue-950/80">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 shadow-xl shadow-indigo-900/40 flex items-center justify-center">
                        <span className="lg:text-2xl text-lg font-bold text-white/90">4.04</span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-14 lg:pt-12 space-y-8 text-blue-100/90 leading-relaxed tracking-wide">
                    <p className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-base lg:text-lg shadow-lg shadow-blue-900/20">
                      4.04. Time of attendance for train crew.—
                      <br />
                      Every Guard, Loco Pilot and Assistant Loco Pilot shall be in attendance for duty at such place and at such time as may be prescribed by special instructions.
                    </p>
                    <p className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-base lg:text-lg shadow-lg shadow-blue-900/20">
                      S.R.4.04. Loco Pilots, Assistant Loco Pilots, Guards and Assistant Guards should report for duty at such times before the scheduled departure of the trains as the DRM may prescribe from time to time.
                    </p>
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

export default GSRChapterPage91D