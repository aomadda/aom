"use client"
import React from 'react'

const GSRAppendixPage460 = () => {
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

            <h1 className="text-2xl lg:text-6xl font-bold tracking-wide bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              GROUP (A)
            </h1>
            <div className="mt-4 inline-flex items-center justify-center gap-3">
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-blue-400/50 to-white/70"></span>
              <span className="text-lg lg:text-2xl font-semibold text-indigo-200 tracking-[0.35em] text-center px-2">
                Situations not requiring the consent of on duty Station Master –
              </span>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-blue-400/50 to-white/70"></span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-10 space-y-6">
                <div className="space-y-4 lg:space-y-5">
                  {[
                    { num: 1, text: "Tightening of terminals without causing any short circuits." },
                    { num: 2, text: "Replacement of fuses." },
                    { num: 3, text: "Replacement of bulbs." },
                    { num: 4, text: "Cleaning of colour light lenses and roundels outside and focusing of signals and route indicators." },
                    { num: 5, text: "Cleaning and opening of top covers and lever locks, circuit controllers, detectors, points and signal mechanism." },
                    { num: 6, text: "Lubrication of pins of cranks and compensators, lock bar clips, down rods of signals, signal diversion wheels, signal & point mechanism detectors and external cleaning and lubrication of points." },
                    { num: 7, text: "Renewal and re-fixing of pulleys." },
                    { num: 8, text: "Casual renewal and re-fixing of roller standards, top roller, bottom roller etc., one at a time." },
                    { num: 9, text: "Cleaning of roundels and lenses of point indicators and signal lamps etc." }
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

export default GSRAppendixPage460