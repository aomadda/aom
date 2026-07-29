'use client'
import React from 'react'
import Image from 'next/image'

const GSRChapterPage61 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-lime-400/20 to-emerald-500/20 rounded-full blur-3xl animate-[pulse-slow_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-lime-500/20 to-teal-400/20 rounded-full blur-3xl animate-[pulse-slow_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-r from-lime-400/10 to-emerald-500/10 rounded-full blur-3xl animate-[pulse-slow_5.5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-6 px-2 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="lg:w-24 lg:h-24 w-16 h-16 bg-linear-to-br from-lime-500/70 via-emerald-500/70 to-teal-500/70 rounded-full blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-white/10 bg-linear-to-br from-lime-700/60 to-emerald-800/60 backdrop-blur">
                    <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                      <span className="lg:text-2xl text-xl font-bold tracking-wide text-white/85">
                        3.55
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide bg-linear-to-r from-white via-lime-100 to-emerald-200 bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
              Proceed with caution hand signal.—
            </h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-linear-to-br from-lime-400/30 to-emerald-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-linear-to-br from-teal-500/20 to-emerald-600/20 rounded-full blur-3xl"></div>

              <div className="relative p-3 lg:p-6 space-y-6">
                <div className="group rounded-xl border border-white/10 bg-linear-to-br from-slate-900/70 via-slate-950/70 to-slate-900/70 p-5 lg:p-10 transition-all duration-500 hover:border-white/20 hover:bg-linear-to-br hover:from-slate-900/80 hover:via-slate-950/80 hover:to-slate-900/80">
                  <p className="text-base lg:text-lg leading-relaxed text-lime-100/90 tracking-wide whitespace-pre-line">
                    {`3.55. Proceed with caution hand signal.—
Indication: Proceed slowly reducingspeed further if thesignal is given at
aprogressively slower rate.
How given by day:By waving a green flag vertically up and downor by
waving one arm in a similar manneras illustrated below:


How given by night:By waving a green light vertically up and down as
illustrated below:


Note: When the speed is to be reduced further, this signal shall be given at a
slower and slower rate and when a stop is desired, the Stop hand signal
shall be shown.`}
                  </p>
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                      <Image
                        src="/gsr-images/GSRPAGE61A.png"
                        alt="Proceed with caution hand signal by day with waving green flag"
                        width={512}
                        height={512}
                        className="h-auto w-full rounded-xl object-contain"
                        priority
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur">
                      <Image
                        src="/gsr-images/GSRPAGE61B.png"
                        alt="Proceed with caution hand signal by night using green light vertically"
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

export default GSRChapterPage61