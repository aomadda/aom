'use client'

import React from 'react'
import Link from 'next/link'
import { ClipboardCheck } from 'lucide-react'

const circumstances = [
  'CC and Premium rake after loading/unloading or tippling (where there is no TXR) or in case of invalid BPC, the GLP check shall be conducted.',
  'After the rake is stabled for more than 24 hrs at wayside stations.',
  'At every loading point, BPC revalidation should be done by GLP check for all type stock except steel consignment (TXR examination).',
  'For end-to-end rakes, if the unloading point is not a TXR point.',
  'If back loading is done at Non-TXR point.',
  'When the due CC rake is detected in loaded condition, it shall be subjected to GLP check and pushed to destination. From there it shall be offered for examination.',
  'Detected in empty condition, it shall be pushed to nearest TXR point.',
  'PME due CC rake in empty condition: On GLP check up to TXR point, and rake is required for one cycle of loading/unloading. TXR to conduct intensive examination and endorsement on original BPC ―BPC revalidated for one cycle of loading/unloading to specified destinations and onward movement as empty to original base depot---―.',
  'PME due CC rake in empty condition: On GLP check up to TXR point. TXR to conduct STR examination and endorsement on the BPC (―safe to run conducted‖ (STR)) and BPC revalidated for onward movement as empty to original base depot – for PME. Running of trains on GLP check will be permitted only up to first train examination point in the direction of movement. The distance does not exceed 400 km.',
]

const checkList = [
  'Rake integrity is not disturbed by 4 or more than 4 wagons. Only intensively examined wagons given fitness by TXR may be attached.',
  'All CBCs and Air hoses are properly coupled and locked.',
  'All the cutoff angle cocks are in open condition.',
  'The last cutoff angle cock in closed condition.',
  'Empty/load device handle is in proper position.',
  'There are no loose fittings/hanging parts like push rod, pull rods, brake beam, safety brackets, brake blocks and CBC operating handle etc. which may endanger safe running of the train.',
  'There are no broken or displaced springs.',
  'There are no displaced Elastomeric pads.',
  'Hand brakes are released.',
  'Doors of wagons are closed and locked/secured.',
  'Ensure visually that there is no excessive body bulging, which is dangerous.',
  'Any symptoms of hot axle like de-colourisation of bearing, heavy grease oozing, breakage of axle box cover plate, end plate etc.',
  'Any other abnormality noticed which may endanger the safety and action taken.',
  'Continuity of the brake pipe pressure is confirmed through VHF/Whistle code before starting the train.',
  'Efficiency of brake power.',
]

const documentation = [
  'Guard and Loco Pilot shall prepare a memo jointly on a plain sheet in triplicate indicating the brake power and deficiency, if any, and shall append their signatures. Both of them shall retain a copy of the same. Guard should obtain SM/YM‘s endorsement on two copies of joint memo and hand over the third for SM/YM‘s record. SM/YM will inform the section controller and obtain clearance for the train to move.',
  'When a train is ordered without guard and GLP check is necessary, the LP has to conduct GLP check. Pointsman shall be deputed to assist the LP in conducting GLP check. Shall prepare a GLP proforma in duplicate duly signing and obtain SM endorsement & hand over one copy to SM/YM.',
  'The rake should be cleared with twin pipe brake system if BPC has endorsement as twin pipe, subject to a compatible loco being attached to the train.',
]

const proformaRows = [
  { sno: '1', field: 'Date', details: '' },
  { sno: '2', field: 'Train & Loco No.', details: '' },
  { sno: '3', field: 'From ….. To', details: '' },
  { sno: '4', field: 'BPC No., Date & Station of issue', details: '' },
  { sno: '5', field: 'Loaded or tippled at …… or', details: '' },
  { sno: '6', field: 'Time of locomotive attached', details: '' },
  { sno: '7', field: 'Total Load', details: '' },
  { sno: '8', field: 'Brake power percentage', details: '' },
  { sno: '9', field: 'Deficiencies', details: '' },
]

const GLPCheckPage = () => {
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
              <ClipboardCheck className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl">
              GLP Check
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <h2 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              Circumstances:
            </h2>
            <ul className="space-y-3">
              {circumstances.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.03 * (index + 1)}s both` }}
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                    
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              GLP Check List
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {checkList.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.28 + 0.02 * (index + 1)}s both` }}
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
          style={{ animation: 'fade-up 0.55s ease-out 0.45s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Documentation
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {documentation.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.48 + 0.03 * (index + 1)}s both` }}
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
          style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Proforma for GLP Check
            </h2>
          </header>

          <div className="overflow-x-auto px-5 py-7 sm:px-8 sm:py-9">
            <table className="w-full min-w-130 border-collapse overflow-hidden rounded-2xl border border-slate-600/40 text-left text-[15px] text-slate-300">
              <thead>
                <tr className="bg-amber-500/15 text-amber-100">
                  <th className="border-b border-slate-600/40 px-4 py-3 font-bold">S. No.</th>
                  <th className="border-b border-slate-600/40 px-4 py-3 font-bold">Field</th>
                  <th className="border-b border-slate-600/40 px-4 py-3 font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                {proformaRows.map((row) => (
                  <tr key={row.sno} className="border-b border-slate-700/50 last:border-b-0">
                    <td className="px-4 py-3 align-top font-semibold text-amber-200">{row.sno}</td>
                    <td className="px-4 py-3 align-top">{row.field}</td>
                    <td className="px-4 py-3 align-top text-slate-500">{row.details || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4">
                <p className="text-[15px] leading-[1.75] text-slate-300">(Signature of LP)</p>
                <p className="mt-2 text-[15px] leading-[1.75] text-slate-300">Name …………….</p>
              </div>
              <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4">
                <p className="text-[15px] leading-[1.75] text-slate-300">(Signature of Guard)</p>
                <p className="mt-2 text-[15px] leading-[1.75] text-slate-300">Name ……………..</p>
              </div>
            </div>
          </div>
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

export default GLPCheckPage
