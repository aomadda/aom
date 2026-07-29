'use client'

import React from 'react'
import Link from 'next/link'
import { BrickWall } from 'lucide-react'

const mainPoints = [
  'Every interlocked level crossing gate which is normally kept open for road traffic is provided with a signal (Gate).',
  'This signal shall show stop aspect in both up and down directions when the gate is open for the passage of traffic.',
  'When LC gate is interlocked with station signals, there is no need to provide a separate gate signal.',
  '‗G‘ marker shall be provided on LC gate signal except those controlling the entry into rail-cum-road bridge or where there is a bridge between gate signal and the gate.',
  'In MAS, in rear of gate signal, a distant signal shall be provided.',
  'When a level crossing is located between the Home signal and the distant signal on MAS, the Gate cum Distant signal shall be located at a distance of not less than 180 meters in rear of the gate. This signal shall be provided with a ‗G‘ marker and normal aspect is Stop.',
  'Gate signal in Automatic Signalling Territory: Automatic signals interlocked with level crossing gates are distinguished by the provision of ‗G‘ marker. When the gate is in open condition, the gate signal exhibits STOP aspect with extinguished ‗A‘ marker. When the gate is in closed condition, it works as automatic stop signal with illuminated ‗A‘ marker.',
]

const passingAtOnSubPoints = [
  'Wait for 1 minute by day and 2 minutes by night. If still signal is at ‗ON‘, he may draw ahead cautiously up to the gate.',
  'He can pass the gate on hand signals of gateman.',
  'If the gateman is available and not showing proceed hand signal, Loco Pilot shall wait until hand signaled by the gateman.',
  'If gateman is not available, Loco Pilot can pass the gate on hand signals of crew of the train, who will do so after ensuring the gate is closed and locked.',
  'After passing the gate cautiously, stop and after re-opening the gate by train crew, start the train.',
  'f) If gateman is not found, stop the train out of course at next station and report the matter to Station Master (SM).',
]

const CheckPoint = ({ text }: { text: string }) => (
  <li className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5">
    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
      ✓
    </span>
    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
  </li>
)

const GateSignalPage = () => {
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
              <BrickWall className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-3xl md:text-[2.25rem] leading-snug">
              Gate Signal (G.R. / S.R. 3.34, 3.73)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ul className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {mainPoints.map((text) => (
              <CheckPoint key={text} text={text} />
            ))}
          </ul>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Passing Gate Signal at „ON‟
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <div className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                1
              </span>
              <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                Loco Pilot shall give continuous whistle and stop the train at signal at ‗ON‘.
              </p>
            </div>

            <section className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <p className="flex gap-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  2
                </span>
                <span>If the gate signal is provided with ‗G‘ marker:</span>
              </p>
              <ul className="ml-2 space-y-3 border-l border-amber-500/25 pl-4 sm:ml-8 sm:pl-5">
                {passingAtOnSubPoints.map((text) => (
                  <CheckPoint key={text} text={text} />
                ))}
              </ul>
            </section>
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

export default GateSignalPage
