'use client'

import React from 'react'
import Link from 'next/link'
import { BookMarked } from 'lucide-react'

const rules = [
  'Station Working Rules (SWR) applicable to each station shall be provided under special instructions.',
  'A copy of SWR or relevant copies of extracts shall be kept at cabins.',
  'Relevant rules for working of LC gates shall be made available at gates in regional languages also.',
  'SWR shall be read in conjunction with G & SR and Block Working Manual and language shall be simple and brief.',
  'SWR shall be prepared carefully keeping in view the conditions prevailing at the station.',
  'Only relevant rule numbers of GR / SR shall be mentioned in the brackets against relevant Para.',
  'The SWR pages shall be numbered, station name, code shall be written on every page and on every page it shall be signed by either Sr.DOM or DOM, either Sr.DSTE or DSTE at Interlocked station and at Non Interlocked station by either Sr.DOM or DOM, and either Sr.DEN or DEN.',
  'Temporary working instruction for non-interlock working shall be signed by either Sr.DOM or DOM, either Sr.DSTE or DSTE and either Sr.DEN or DEN.',
  'Station diagram in the SWR shall be signed by either Sr.DOM or DOM, either Sr.DSTE or DSTE and either Sr.DEN or DEN.',
  'The SWRs of all stations including stations to be newly opened and amendment slips shall be issued by either Sr.DOM or DOM and either Sr.DSTE or DSTE who shall be responsible to ensure that these are correct, complete and current.',
  'Rules for working of trains in electrified section will be given in Appendix ‘G‘ and it shall be jointly signed by either Sr.DOM or DOM, and either Sr. DEE[TRD] or DEE[TRD].',
  'The working rules for the level crossing gates situated outside the stop signals and also the procedure to be followed by the gateman shall be issued by the Engineering branch and kept at the gate lodge.',
  'A copy of working rules shall be kept at each level crossing gate in regional language.',
  'In case of a level crossing gate provided with gate stop signal, a copy of a signalling and interlocking shall also be made available at such gate.',
  'Approval of CRS shall also be obtained where required before issuing SWR.',
  'SWR shall be issued afresh once in FIVE years or after issue of FIVE amendment slips and reviewed as and when required.',
  'The information in SWR shall be as per the format and working rules for cabins working independently shall be issued separately.',
  'The staff before taking up independent duty shall read, understand the SWR and sign in the declaration/assurance register.',
  'In case of illiterate staff, the SM shall explain the rules in vernacular language and take their acknowledgement in the register duly certifying that they understood the rules.',
  'Fresh declaration shall also be taken from the staff when a member joins or when there is a change in the SWR or staff resumes duty at a station after an absence of 15 consecutive days or more.',
  'TI / SWR before preparing the draft instructions for SWR shall compare the station diagram with actual layout and discuss with the SMR/SS/SM of the concerned station.',
  'One copy of the SWR along with signalling plan shall be sent to the CRS for approval and two copies of each station to the PCOM.',
  'The SWR contains 12 chapters and 7 appendices as given below:',
]

const chapters = [
  { label: 'I.', text: 'Station working diagram' },
  { label: 'II.', text: 'Description of station' },
  { label: 'III.', text: 'System and means of working' },
  { label: 'IV.', text: 'System of signalling and interlocking' },
  { label: 'V.', text: 'Telecommunications' },
  { label: 'VI.', text: 'System of train working' },
  { label: 'VII.', text: 'Blocking of lines' },
  { label: 'VIII.', text: 'Shunting (various precautions and authorities)' },
  { label: 'IX.', text: 'Abnormal conditions' },
  { label: 'X.', text: 'Visibility test object' },
  { label: 'XI.', text: 'Essential equipment at stations' },
  { label: 'XII.', text: 'Fog signalmen nominated to be called in case of fog' },
]

const appendices = [
  'Appendix ‗A‘ – Working of Level Crossing Gates',
  'Appendix ‗B‘ – System of signalling and Interlocking and Communication Arrangements at the station',
  'Appendix ‗C‘ – Indian Railways Automatic Train Protection System (IR-ATP) KAVACH',
  'Appendix ‗D‘ – Duties of train passing staff and staff in each shift',
  'Appendix ‗E‘ – List of Essential Equipments provided at stations',
  'Appendix ‗F‘ – Rules for working of DK station, Halts, IBH, IBS and Outlying sidings',
  'Appendix ‗G‘ – Rules for working of trains in Electrified sections',
]

const StationWorkingRulesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <BookMarked className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Station Working Rules (G.R. 5.06 and Appendix XIV)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {rules.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.02 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ol>
        </article>

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              LIST OF CHAPTERS
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {chapters.map((item, index) => (
              <li
                key={item.label}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.42 + 0.02 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {item.label}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              LIST OF APPENDICES
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {appendices.map((text, index) => (
              <li
                key={text}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.58 + 0.02 * (index + 1)}s both` }}
              >
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>

        <div className="flex justify-center">
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

export default StationWorkingRulesPage
