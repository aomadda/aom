'use client'

import React from 'react'
import Link from 'next/link'
import { Package } from 'lucide-react'

const loadingPoints = [
  'Loaded at stations of primary maintenance in both SLRs (and more) inside cupboard locked with one time lock (OTL) and sealed jointly by SE/JE C&W and Dy SS.',
  'In EMU/MEMU, loaded in low tension compartments in motor coach. In DMU/DHMU, space available in driving trailer cab.',
  'All SLRs shall be joinjointly checked in return direction at the primary maintenance station.',
]

const equipmentHeaders = ['Item', 'Quantity', 'Responsibility', 'Duration']

const equipmentRows = [
  ['Portable Control Telephone (2/4 wire type as required)', '1 set', 'SE/JE-Tele', '6 months'],
  ['Portable Train lighting equipment', '1 set', 'SE/JE-TL', '6 months'],
  ['Fire extinguisher (DCP type)', '2 Nos.', 'SE/JE-C&W', '1 year'],
  ['Wooden Wedges/Skids', '2 Nos.', 'SE/JE-C&W', '---'],
  ['Stretcher in good condition', '1 No.', 'Dy.SS', '---'],
  ['Rope ladders with suitable hooks', '2 Nos. (min)', 'JE(C&W)', '---'],
]

const afterLoadingPoints = [
  { num: 5, text: 'After loading, the staff provide OTL, cover with Rexene pouch, tie and seal.' },
  { num: 6, text: 'SE/JE (C&W) keep ONE spare OTL in cabinet in unlocked condition.' },
  { num: 7, text: 'Every trip is monitored on PF on arrival.' },
  { num: 8, text: 'A sticker shall be pasted in the SLR with S.No. of equipment and instructions for the guard.' },
  { num: 9, text: 'JE/SE, DySS maintaining BV equipment procure initially for all SLRs plus 10% extra.' },
  { num: 10, text: 'Dy SS/TNC to obtain acknowledgement of Guard in the register & VG at originating station.' },
  { num: 11, text: 'Incoming and outgoing Guard make entries in VG and rough journal about intactness of OTL.' },
  {
    num: 12,
    text: 'In case of missing or broken OTL, Guard to give message to SM of the station, copy to SM of originating station indicating train number, SLR No., missing BV equipment with S.No. along with date, location etc.',
  },
  {
    num: 13,
    text: 'If any of the equipment is used, the Guard shall give message to SE/JE – C&W and Dy.SS of the originating station indicating date, time and place of usage so as to facilitate re-coupement of equipment if required.',
  },
  { num: 14, text: 'SM of originating station advises the concerned and recoups on arrival of train.' },
]

const withoutBrakeVanPoints = [
  { num: 1, text: 'Every train entering block section should have one or more brake vans except under special instructions.' },
  { num: 2, text: 'During emergencies, to run a train without a brake van the following precautions should be observed.' },
  { num: 3, text: 'Specific orders of Sr. DOM or DOM is required.' },
  { num: 4, text: 'Strictly prohibited during total interruption of communication.' },
  { num: 5, text: 'Separate registers to be maintained in the control office.' },
  { num: 6, text: 'It shall be ensured that the train is provided with continuous and effective compressed air from engine to rearmost vehicle.' },
  {
    num: 7,
    text: 'In Automatic Block system, no passenger carrying train must be allowed to follow until the preceding train without brake van has arrived complete at the next block station in advance.',
  },
  {
    num: 8,
    text: 'Once a non-passenger train with guard and brake van or light engine/track machine/tower wagon/self-propelled vehicle follows the train running without brake van, passenger trains may be dispatched.',
  },
  {
    num: 9,
    text: 'At IBS stations, the SM shall not dispatch any passenger train behind a train running without a brake van until that train has reached the next station.',
  },
  { num: 10, text: 'Guard of the train shall travel in the engine.' },
  { num: 11, text: 'Last vehicle indicator i.e., tail board/tail lamp must be invariably fixed on the last vehicle.' },
  { num: 10, text: 'Station Master shall ensure that the train is complete by tail lamp/tail board.' },
  {
    num: 11,
    text: 'The station as well as the cabin staff should be particularly alert; when there is a doubt that the train is not complete, they should draw the attention of GLP by showing ‗train parting‘ signal.',
  },
  { num: 12, text: 'By waving a green flag by day & white light by night up and down vertically as high as low.' },
]

const troubleEnRoute = [
  'Guard and Assistant Loco Pilot should check and attend the trouble.',
  'Within station limits, help of C&W staff or pointsman should be taken.',
  'The Loco Pilot should regulate the speed depending on the ‗feel test‘ conducted by him.',
]

const BrakeVanPage = () => {
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
              <Package className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              G.R. 4.19.6 Brake Van Equipment
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-6 px-5 py-8 sm:px-10 sm:py-10">
            <section className="space-y-3">
              <h2 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                S.R. 4.19.4.1 Loading of Brake Van Equipment
              </h2>
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                Every coaching train is provided with Brake Van (BV) equipment.
              </p>
              <ol className="space-y-3">
                {loadingPoints.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                Provision / Responsibility / Maintenance / Duration:
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
                <table className="w-full min-w-180 border-collapse text-left">
                  <thead>
                    <tr className="border-b border-amber-500/20 bg-slate-950/50">
                      {equipmentHeaders.map((header) => (
                        <th
                          key={header}
                          className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {equipmentRows.map((row) => (
                      <tr key={row[0]} className="bg-slate-900/30 transition-colors hover:bg-slate-900/55">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${row[0]}-${cellIndex}`}
                            className={`px-3 py-3.5 text-[13px] leading-relaxed sm:px-4 sm:text-[15px] ${
                              cellIndex === 0
                                ? 'font-medium text-amber-100/95'
                                : 'text-slate-300'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <ol className="space-y-3">
              {afterLoadingPoints.map((item) => (
                <li
                  key={item.num}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Running of a train Without Brake Vannot carryingpassenger (S.R. 4.23)
            </h2>
          </header>

          <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
            <ol className="space-y-3">
              {withoutBrakeVanPoints.map((item, index) => (
                <li
                  key={`${item.num}-${index}`}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ol>

            <section className="space-y-3">
              <h3 className="border-l-4 border-amber-500/70 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
                When train crew encounters trouble en route:
              </h3>
              <ul className="space-y-3">
                {troubleEnRoute.map((text) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                      ✓
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
                  </li>
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

export default BrakeVanPage
