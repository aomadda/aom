'use client'
import React from 'react'

const GSRChapterPage65C = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-20 w-72 h-72 bg-linear-to-br from-amber-400/25 to-emerald-500/25 rounded-full blur-3xl animate-[pulse-slow_6.5s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-linear-to-tr from-emerald-500/20 to-lime-400/20 rounded-full blur-3xl animate-[pulse-slow_7.5s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-br from-amber-300/15 to-emerald-500/15 rounded-full blur-3xl animate-[pulse-slow_5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-15 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-8 px-2 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-amber-500/70 via-emerald-500/70 to-lime-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-amber-700/60 to-emerald-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.59
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide bg-linear-to-r from-white via-amber-100 to-emerald-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              3.59. Description of detonating signals.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-10 w-36 h-36 bg-linear-to-br from-amber-400/30 to-emerald-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-14 w-44 h-44 bg-linear-to-br from-emerald-500/20 to-lime-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-6 space-y-6">
                {/* Introduction Paragraph */}
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                  <p className="text-base lg:text-lg leading-relaxed text-amber-100/90 tracking-wide mb-4">
                    <span className="font-semibold text-amber-300/90">3.59.</span> Description of detonating signals.—
                  </p>
                  <p className="text-base lg:text-lg leading-relaxed text-amber-100/90 tracking-wide">
                    Detonating signals, otherwise known as detonators or fog signals, are appliances which are fixed on the rails and when an engine or a vehicle passes over them, they explode with a loud report so as to attract the attention of the Loco Pilot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
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
      `}</style>
    </div>
  )
}

export default GSRChapterPage65C