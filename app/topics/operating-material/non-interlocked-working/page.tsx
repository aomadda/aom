'use client'

import React from 'react'
import Link from 'next/link'
import { Unlink } from 'lucide-react'

const occasions = [
  'Overhauling of lever frames or panels',
  'Station remodeling, gauge conversion, or doubling',
  'Introduction of panel interlocking or RRI',
  'Replacement of worn-out frames or panels',
  'Cable meggering (testing)',
  'S&T (Signaling & Telecommunication) engineering joint works.',
]

const preparatorySteps = [
  'Complete all preparatory work before starting NI working.',
  'The duration for minor works is decided by branch officers; major works by the Divisional Railway Manager (DRM) in consultation with branch officers.',
  'Reduce shunting operations and, if necessary, cancel or short-terminate less important trains.',
  'Avoid precedence and crossings as much as possible.',
  'For major yards, NI working may be introduced in phases.',
  'Engineering and S&T officials must send a circular notice to the Senior Divisional Operations Manager (Sr.DOM) at least 15 days in advance, with a copy to the Station Master (SM).',
  'Sr.DOM issues special instructions to all concerned.',
  'A notification with the date, time, probable duration, and instructions for caution orders and temporary speed restrictions must be jointly issued by Sr.DOM/DOM and Sr.DSTE/DSTE.',
]

const beforeCommencement = [
  'The overall in-charge is usually a Traffic Inspector (TI), Safety Officer, or as decided by DRM. SE/JE of S&T and Engineering are nominated to assist.',
  'Arrange sufficient clamps, padlocks, hand signal flags, and lamps.',
  'Explain the contents of circular notices and special instructions to all staff and obtain their acknowledgment.',
  'Arrange necessary registers, authorities, and memos in advance.',
  'SM issues caution orders.',
  'S&T and Engineering work should be supervised by their respective in-charges.',
  'Divide the yard into areas, each manned by SM/Guard/Pointsman, etc.',
  'Ensure proper communication (S&T), lighting (Electrical), and speed boards (S&T) are arranged.',
  'Conduct a mock NI working on a day with less train traffic, if feasible.',
]

const trainMovements = [
  'On single line, only one train movement is permitted at a time.',
  'On double line, after ensuring all points connecting UP and DN lines are set, clamped, and padlocked, isolated train movements can occur.',
  'The line is set to the main or first directional loop line, with all facing points clamped and padlocked, and the overlap (typically 120 m) must be free of obstruction.',
  'The SM nominates the line for reception/despatch by physical observation or confirmation from the goomty (point cabin).',
  'The person in charge of the goomty is responsible for correct setting, clamping, and padlocking of points, and for ensuring the overlap is clear.',
  'SM ensures personal hand signals (PHS) are used while receiving and dispatching trains.',
]

const operationalReductions = [
  'Shunting is minimized.',
  'Less important trains may be cancelled or short-terminated.',
  'Precedence and crossings are avoided.',
  'In major yards, NI working may be phased.',
]

const completion = [
  'On completion of work, the disconnected gear is tested jointly by the SM and SE/JE (signals) before normal working is resumed.',
  'Normal working is restored only after reconnection notice from S&T/Engineering and a formal message from the operating official in charge.',
]

const keyPoints = [
  'NI working is a less safe and slower system, used only when unavoidable.',
  'Staff vigilance and adherence to procedures are critical for safety during NI working.',
  'Advance planning, communication, and clear instructions are essential.',
]

const summaryRows = [
  ['Definition', 'Temporary disconnection of signaling for maintenance/works'],
  ['Occasions', 'Overhauling, remodeling, panel/RRI, cable meggering, etc.'],
  ['Preparations', 'Notices, instructions, equipment, staff briefing'],
  ['Train Operations', 'Manual, paper authority, speed restrictions, minimized ops'],
  ['Safety', 'Increased staff responsibility, less safe than interlocked'],
  ['Restoration', 'Joint testing, reconnection notice, official message'],
]

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
        >
          <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}

function SectionCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h2 className="text-base font-semibold text-amber-100 sm:text-lg">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const NonInterlockedWorkingPage = () => {
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
              <Unlink className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Non-Interlocked Working (NI Working)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <SectionCard title="What is Non-Interlocked Working?">
              <div className="space-y-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  Non-interlocked working (NI working) refers to the temporary disconnection of
                  points, signals, track circuits, axle counters, and other signaling equipment at a
                  railway station or section for designated works. This situation arises during
                  activities such as overhauling lever frames, yard remodeling, introduction of new
                  panel interlocking or Route Relay Interlocking (RRI), cable meggering, or when
                  points and signals become defective at an interlocked station.
                </p>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  During NI working, the usual safety safeguards provided by signaling systems are
                  unavailable, increasing the responsibility and workload on railway staff and making
                  the system less safe and more prone to operational lapses.
                </p>
              </div>
            </SectionCard>

            <SectionCard title="Occasions for NI Working">
              <p className="mb-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                NI working is typically required for:
              </p>
              <ArrowList items={occasions} />
            </SectionCard>

            <SectionCard title="Procedure for NI Working">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Preparatory Steps:
                  </h3>
                  <DotList items={preparatorySteps} />
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                    Before Commencement:
                  </h3>
                  <DotList items={beforeCommencement} />
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Train Operations During NI Working">
              <ul className="space-y-3">
                <li className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    <span className="font-semibold text-amber-100/90">Manual Operation: </span>
                    Trains are received, held, and dispatched manually using flags and clamped rails,
                    as automatic signaling is unavailable.
                  </p>
                </li>
                <li className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    <span className="font-semibold text-amber-100/90">Paper Authority: </span>
                    Trains are allowed to run based on written permissions (paper authority) issued by
                    station masters.
                  </p>
                </li>
                <li className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    <span className="font-semibold text-amber-100/90">Speed Restrictions: </span>
                    Typically, a speed restriction of 15–30 kmph is imposed over all points and
                    crossings, and speed boards are displayed at the first stop signal.
                  </p>
                </li>
                <li className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <div className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      <span className="font-semibold text-amber-100/90">Train Movements:</span>
                    </p>
                  </div>
                  <ArrowList items={trainMovements} />
                </li>
                <li className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                  <div className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      <span className="font-semibold text-amber-100/90">Operational Reductions:</span>
                    </p>
                  </div>
                  <ArrowList items={operationalReductions} />
                </li>
              </ul>
            </SectionCard>

            <SectionCard title="Completion and Restoration">
              <DotList items={completion} />
            </SectionCard>

            <SectionCard title="Key Points">
              <DotList items={keyPoints} />
            </SectionCard>

            <SectionCard title="Summary Table:">
              <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                <table className="w-full min-w-[320px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-amber-500/20 bg-slate-950/50">
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        Aspect
                      </th>
                      <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                        NI Working Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {summaryRows.map(([aspect, description]) => (
                      <tr
                        key={aspect}
                        className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                      >
                        <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                          {aspect}
                        </td>
                        <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                          {description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
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

export default NonInterlockedWorkingPage
