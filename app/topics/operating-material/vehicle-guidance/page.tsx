'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardList } from 'lucide-react'

type Point =
  | { num: number; text: string }
  | { num: number; text: string; letters: { label: string; text: string }[] }

const points: Point[] = [
  {
    num: 1,
    text: 'It is prepared by station staff or TNC where available from hand book.',
  },
  {
    num: 2,
    text: 'The TNC should note down the particulars of vehicles in the handbook from the wagons/vehicles.',
  },
  {
    num: 3,
    text: 'This shall be prepared in ink carefully and legibly.',
  },
  {
    num: 4,
    text: 'VGs shall be prepared direct from the TNC‘s handbook.',
  },
  {
    num: 5,
    text: 'The entries should not be copied from one VG to another VG.',
  },
  {
    num: 6,
    text: 'The VG is prepared in a format suitable for computer transaction.',
  },
  {
    num: 7,
    text: 'The entries are made in the relevant columns and in serial order as per formation either from train engine or brake van.',
  },
  {
    num: 8,
    text: 'VGs of through goods trains shall be made in duplicate, one copy shall be handed over to the SM of the first / last terminal station of the Division for submission to the DRM and the original must go to the destination station by way of transfer from Guard to Guard.',
  },
  {
    num: 9,
    text: 'The particulars to be entered in VG are as follows:',
    letters: [
      { label: 'a)', text: 'Owning Railway' },
      { label: 'b)', text: 'Painted Number' },
      { label: 'c)', text: 'Wagon code' },
      { label: 'd)', text: 'Empty or loaded' },
      { label: 'e)', text: 'From and To station' },
      { label: 'f)', text: 'Tare weight' },
      { label: 'g)', text: 'Gross weight' },
      { label: 'h)', text: 'Remarks if any' },
    ],
  },
  {
    num: 10,
    text: 'Whenever vehicles are attached/detached to a train at intermediate stations the entries shall be made by the station staff and when vehicles are detached, the Guard should obtain the signature of station staff on the VG.',
  },
  {
    num: 11,
    text: 'Before starting the train, the Guard is responsible for checking the load with the entries in the VG.',
  },
  {
    num: 12,
    text: 'On completion of journey the VG must be handed over to the SM.',
  },
  {
    num: 13,
    text: 'VGs of Mail/Express, Passenger, Troop trains and special trains to be sent to PCOM and Mixed and Goods trains to DRM along with a summary sheet every day.',
  },
  {
    num: 14,
    text: 'For calculation purpose a bogie coaching stock when attached to goods train shall be reckoned as 2½ units.',
  },
]

const VehicleGuidancePage = () => {
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
              <ClipboardList className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Vehicle Guidance (VG) (S.R. 4.25.3)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={item.num}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </div>

                {'letters' in item && item.letters ? (
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 sm:pl-12">
                    {item.letters.map((letter) => (
                      <li
                        key={letter.label}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/20 to-orange-600/20 px-1.5 text-xs font-bold text-amber-100/90 ring-1 ring-amber-400/30">
                          {letter.label}
                        </span>
                        <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{letter.text}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
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

export default VehicleGuidancePage
