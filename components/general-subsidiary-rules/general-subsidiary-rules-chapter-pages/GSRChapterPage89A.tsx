'use client'
import React from 'react'

const GSRChapterPage89A = () => {
  const mainRuleText = `No Loco Pilot shall take his engine on or across any running line until he has obtained the permission of the Station Master and has satisfied himself that all the correct signals have been shown.`
  
  const sr382Text = `The permission of the Station Master shall be conveyed by taking &apos;off&apos; of the relevant fixed signals or in the absence of fixed signals by hand signals exhibited by the authorised staff.`

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-cyan-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-cyan-700/60 to-indigo-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.82
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold tracking-wide bg-linear-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              3.82. Permission before entering on or crossing a running line.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-cyan-400/30 to-indigo-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-6 space-y-6">
                {/* Main Rule */}
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                  <p className="text-base lg:text-lg leading-relaxed text-cyan-100/90 tracking-wide">
                    {mainRuleText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* S.R. Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-linear-to-br from-blue-500/20 to-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="relative p-3 lg:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-linear-to-br from-indigo-500/80 via-blue-400/80 to-cyan-400/70 text-white text-base font-bold border border-white/20 shadow-lg">S.R.</span>
                  <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-indigo-100">
                    3.82
                  </h2>
                </div>
                <p className="text-sm lg:text-base leading-relaxed text-indigo-100/90 tracking-wide">
                  {sr382Text}
                </p>
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

export default GSRChapterPage89A
