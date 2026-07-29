'use client'

import React from 'react'
import Link from 'next/link'
import { Eye } from 'lucide-react'

const introPoints = [
  '‗Visibility Test Object‘ (VTO) may be a light of a colour light signal or VTP, whichever is nominated, as per special instructions.',
  'It shall be mentioned in SWR.',
  'Where VTO cannot be nominated, due to the station being on a curve or no signals etc.; a separate post shall be erected for this purpose called ‗Visibility Test Post‘ (VTP).',
  'It is a post painted with self-luminous yellow/self-luminous yellow strips, fixed in the ground at 180 meters in MAS from the nominated place where SM stands.',
]

const whenNotVisiblePoints = [
  'Where signals (including VTP) are not visible due to thick, foggy, or tempestuous weather, inclement weather or dust storm etc.; SM shall arrange fog signaling.',
  'Detonator has to be placed only in the single Distant area.',
  'If fog safety device has been provided in the loco and station has been notified by the Divisional authorities, placing of detonators is not required even though in single distant area also.',
  'SM shall send 1 fog signal man in each direction with 20 detonators.',
  'Fog signal men are 4 (two from traffic and two from engineering).',
  'Fog signal men shall keep two detonators at FSP, 10 meters apart and stand at a safe distance of 45 meters.',
]

const trailingPoints = [
  '‗Fog signal post‘ is a steel sleeper fixed vertically, painted alternately with black and yellow self luminous yellow paint/self luminous black & yellow strips, fixed in the ground at 270 meters in rear of the First Stop signal (outside).',
  'During thick, foggy, or inclement weather or dust storm etc., SM may grant line clear to any train after getting information that fog signals are placed or after a lapse of 30 minutes from the departure time of fog signal man from station.',
  'SM shall update station detonator register.',
  'There shall not be VTO/VTP in double distant areas.',
]

const VisibilityTestObjectPage = () => {
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
              <Eye className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              What is VTO? What action to be taken by Station Master when VTO is not visible? (G.R & S.R. 3.61)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            {introPoints.map((text, index) => (
              <div
                key={index}
                className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.05 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </div>
            ))}

            <section className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3.5 text-[15px] font-semibold leading-[1.75] text-amber-100 sm:text-base">
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <span>If VTO is not visible to the SM:</span>
              </p>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-6 sm:pl-5">
                {whenNotVisiblePoints.map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-950/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                      ✓
                    </span>
                    <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ul>
            </section>

            {trailingPoints.map((text, index) => (
              <div
                key={index}
                className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.05 * (index + 6)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </div>
            ))}
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

export default VisibilityTestObjectPage
