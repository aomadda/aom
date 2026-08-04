'use client'

import React from 'react'
import Link from 'next/link'
import { Workflow } from 'lucide-react'

const systems = [
  { label: 'a', text: 'The Absolute Block System' },
  { label: 'b', text: 'The Automatic Block System' },
  { label: 'c', text: 'The Following Trains System' },
  { label: 'd', text: 'The Pilot Guard System' },
  { label: 'e', text: 'The Train-Staff and Ticket System' },
  { label: 'f', text: 'The One Train Only System' },
]

const SystemOfWorkingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <Workflow className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              What is System of Working?
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-[1.75] text-slate-300 sm:text-base">
              How many systems are there in Indian Railway and South Central Railway? (G.R. /
              S.R. 7.01)
            </p>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <div
              className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              style={{ animation: 'fade-up 0.55s ease-out 0.04s both' }}
            >
              <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                1
              </span>
              <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                System of working means the system adopted for the time being for working of trains
                on any portion of railway. (G.R. / S.R. 7.01)
              </p>
            </div>

            <div
              className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              style={{ animation: 'fade-up 0.55s ease-out 0.08s both' }}
            >
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  2
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  On Indian Railway, all trains working between stations shall be worked on one of
                  the following systems, namely:
                </p>
              </div>

              <ul className="mt-5 grid gap-3 sm:ml-12 sm:grid-cols-2">
                {systems.map((item, index) => (
                  <li
                    key={item.label}
                    className="group relative overflow-hidden rounded-xl border border-amber-500/20 bg-linear-to-br from-slate-950/70 via-slate-900/50 to-amber-950/20 p-3.5 ring-1 ring-white/4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-amber-950/30 sm:p-4"
                    style={{ animation: `fade-up 0.5s ease-out ${0.1 + index * 0.05}s both` }}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-400/35 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/30 to-orange-600/30 px-1.5 text-sm font-bold text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/40 transition-transform duration-300 group-hover:scale-105">
                        {item.label}
                      </span>
                      <p className="min-w-0 flex-1 pt-1.5 text-[15px] font-medium leading-[1.65] text-slate-200 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default SystemOfWorkingPage
