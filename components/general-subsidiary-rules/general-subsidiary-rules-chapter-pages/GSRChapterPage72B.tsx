'use client'
import React from 'react'

const GSRChapterPage72B = () => {
  const content = `3.63. Replacement of detonators on the line.—
Every railway servant placing detonators on the line shall see that they are,
when necessary, replaced immediately after a train has passed over them.`

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-rose-400/20 to-amber-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-rose-500/20 to-orange-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-r from-rose-400/10 to-amber-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-rose-500/70 via-amber-500/70 to-orange-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-rose-700/60 to-amber-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.63
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold tracking-wide bg-linear-to-r from-white via-rose-100 to-amber-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              3.63. Replacement of detonators on the line.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-rose-400/30 to-amber-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-6 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                  <p className="text-base lg:text-lg leading-relaxed text-rose-100/90 tracking-wide whitespace-pre-line">
                    {content}
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

export default GSRChapterPage72B