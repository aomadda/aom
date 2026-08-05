'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardList } from 'lucide-react'

const intro = [
  'It is an important record maintained at all the stations.',
  'It is maintained shift-wise.',
  'The outgoing SM, before signing OFF duty, completes the columns pertaining to his shift and mentions in the station diary.',
  'The incoming SM, before signing ON duty, shall read the columns written by the previous SM and understand the contents clearly and then take over charge by mentioning in the station diary.',
]

const shiftColumns = [
  'Date & time and Name of the SM/ASM in that shift & name of other staff working under him.',
  'Condition of working of Block Instrument, Block Phone, Group Phones, Auto & BSNL Phones, Control Phones, and VHF sets; if failed, mention time of failure in remarks column.',
  'Condition of all the seals and locks of the S&T gears at the station.',
  'Condition of working of all S&T gears of the station; if Disconnection and Reconnection is given, mention in the remarks column of the diary.',
  'Condition of the Up and Down Block Sections in both directions; if blocked, reasons to be mentioned in the remarks column.',
  'If any trolley on line is in the section or not.',
  'Conditions of all the running lines and non-running lines of the station; if blocked, what are the vehicles and on which line and how secured.',
  'Serial number of all the caution orders in force in both Up and Down directions mentioned.',
  'Condition of weather (cloudy, raining, or drizzling) and actual condition of weather to be mentioned.',
  'Whether any weather warning received; if so, when and whether messages sent to the concerned officials or not.',
  'Name of the Patrolman with the arrival and departure timing.',
  'Whether any unusual incidents taken place during the duty hours; if so, mention the same in remarks.',
  'Whether any detentions have occurred to the trains during the duty hours and if so, the reasons.',
  'Handing over of the duty by the SM/ASM to be mentioned with the last PN issued by him.',
]

const closing = [
  'When signals are tested by SM or S&T staff, entry shall be made in this register.',
  'SS/SM of the station should scrutinize the station diary daily and fill the relevant columns pertaining to him.',
]

const ssColumns = [
  'Condition of cleanliness of the station buildings, offices, yards, platforms, and waiting halls.',
  'Daily inspection of signals and S&T gears and record the results in the diary.',
  'Visits by various Inspecting officials/Officers at the station.',
  'Signature of the SS/SM with remarks if any.',
]

const finalPoints = [
  'Inspecting officials, whenever they inspect the station, check the station diary and ensure it is correctly maintained and discrepancies to be reported to the higher officials.',
  'If prescribed form of authority is not available and manuscript memo used, mention to be made in the diary.',
  'Extension of line block, power block, and other blocks mentioned in the diary.',
  'The permit for the motor trolley given, to be surrendered at the next station after clearing the block section, to be pasted in the station diary.',
  'The track fit certificate or fit certificate of the vehicle/loco issued by the concerned officials after the accident taken place to be pasted in the diary.',
]

function NumberedList({ items, start = 1 }: { items: string[]; start?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${start + index}-${text.slice(0, 40)}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {start + index}
          </span>
          <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
            {text}
          </p>
        </li>
      ))}
    </ol>
  )
}

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

const StationDiaryPage = () => {
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
              Station Diary
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <NumberedList items={intro} />

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  5
                </span>
                <div>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    The various columns-maintained shift-wise are:
                  </p>
                  <ArrowList items={shiftColumns} />
                </div>
              </div>
            </div>

            <NumberedList items={closing} start={6} />

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  8
                </span>
                <div>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    The columns pertaining to the SS/SM include the following:
                  </p>
                  <ArrowList items={ssColumns} />
                </div>
              </div>
            </div>

            <NumberedList items={finalPoints} start={9} />
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

export default StationDiaryPage
