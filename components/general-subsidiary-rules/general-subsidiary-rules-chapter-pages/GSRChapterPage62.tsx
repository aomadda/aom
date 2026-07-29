'use client'
import React from 'react'
import Image from 'next/image'

const GSRChapterPage62 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-teal-500/20 to-cyan-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-r from-teal-400/10 to-emerald-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-teal-500/70 via-emerald-500/70 to-cyan-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-teal-700/60 to-emerald-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.56
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide bg-linear-to-r from-white via-teal-100 to-emerald-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Hand signals for shunting:
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-teal-400/30 to-emerald-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-emerald-500/20 to-cyan-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-6 space-y-6">
                {/* Introduction Paragraph */}
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                  <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide">
                    3.56. Hand signals for shunting: – The following hand signals shall be used in shunting operations in addition to the Stop hand signal:-
                  </p>
                </div>

                {/* Lettered Items */}
                <div className="space-y-6">
                  {/* Item (a) */}
                  <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-500/80 to-emerald-600/80 border border-teal-400/30 flex items-center justify-center shadow-lg shadow-teal-500/20">
                          <span className="text-lg font-bold text-white">a</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-teal-300/90">Indication:</span> Move away from the person signalling
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-teal-300/90">How given by day:</span> By a green flag or one arm moved slowly up and down as illustrated below:
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide">
                          <span className="font-semibold text-teal-300/90">How given by night:</span> By a green light moved slowly up and down as illustrated below:
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE62A.png"
                          alt="Move away from the person signalling by day"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE62B.png"
                          alt="Move away from the person signalling by night"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Item (b) */}
                  <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500/80 to-teal-600/80 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <span className="text-lg font-bold text-white">b</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-emerald-300/90">Indication:</span> Move towards the person signalling
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-emerald-300/90">How given by day:</span> By a green flag or one arm moved from side to side across the body as illustrated below:
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide">
                          <span className="font-semibold text-emerald-300/90">How given by night:</span> By a green light moved from side to side across the body as illustrated below:
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE63A.png"
                          alt="Move towards the person signalling by day"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE63B.png"
                          alt="Move towards the person signalling by night"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <p className="text-sm lg:text-base leading-relaxed text-yellow-200/90 tracking-wide">
                        <span className="font-semibold text-yellow-300/90">Note:</span> The hand signals for &apos;Move away from the person signalling&apos;, and &apos;Move towards the person signalling&apos; shall be displayed slower and slower, until the Stop hand signal is given, if it is desired to stop.
                      </p>
                    </div>
                  </div>

                  {/* Item (c) */}
                  <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-8 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500/80 to-teal-600/80 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                          <span className="text-lg font-bold text-white">c</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-cyan-300/90">Indication:</span> Move slowly for coupling
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide mb-2">
                          <span className="font-semibold text-cyan-300/90">How given by day:</span> By a green and a red flag held above the head or both hands raised over the head and moved towards and away from each other as illustrated below:
                        </p>
                        <p className="text-base lg:text-lg leading-relaxed text-teal-100/90 tracking-wide">
                          <span className="font-semibold text-cyan-300/90">How given by night:</span> By a green light held above the head and moved by twisting the wrist as illustrated below:
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE64A.png"
                          alt="Move slowly for coupling by day"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                        <Image
                          src="/gsr-images/GSRPAGE64B.png"
                          alt="Move slowly for coupling by night"
                          width={512}
                          height={512}
                          className="h-auto w-full rounded-xl object-contain"
                          priority
                        />
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

export default GSRChapterPage62