'use client'

import React from 'react'
import Link from 'next/link'
import { CircuitBoard } from 'lucide-react'

const points = [
  "Block Instrument is an appliance which shall be kept in the SM‘s office at every block station.",
  'It is used in the absolute block system to grant or to take line clear.',
  'It ensures that no train is dispatched into an occupied block section.',
  'It works like a visual reminder to the SM to ensure the presence of a train in the block section.',
  'At present on this railway, token and tokenless block instruments are in use.',
  'On single line, token and tokenless block instruments are in use, but on double line only tokenless instrument is in use.',
  "On double line, ‗SGE‘ (Siemens General Electric), SSBPAC (D) and UFSBI block instruments are in use.",
  "On single line, tokenless ‗DAIDO‘ handle type, ‗KYOSAN‘ push button UFSBI, SSBPAC and ‗PODANUR‘ push button type instruments are available.",
  'Dispatch signals like Advanced starter/starter/IB, will be interlocked with the block instrument.',
  'When the block instrument is defective, signals will not obey which are interlocked with the block instrument.',
  'When the block instrument or the signals interlocked with the block instrument are defective, the authority to proceed given to the driver shall be PLCT (Paper Line Clear Ticket).',
  "The ‗ON‘ position of the FSS and LSS proves in the block instrument. ‗SNR‘ (Signal Normal Relay) indication is provided in the Podanur push button type and Daido handle type block instruments.",
  'In UFSBI/SSBPAC SNK/SNOEK.',
]

const testingSignal = [
  "The ‗Testing‘ signal shall be used for the purpose of testing the block instruments.",
  'Authorised persons to test the block instrument are SI and ESM.',
  'The instruments and apparatus connected with them may only be tested.',
  'Whenever no authorised person is present at one end, he may request the Station Master to test the block instrument on his behalf.',
  "The block instrument and apparatus connected with them shall be tested only when the block instrument is displaying ‗Line closed‘ condition.",
  "Assuming that the SI/ESM is at ‗X‘, he shall first exchange testing signals (16) with ‗Y‘ (Station Master).",
  "The SI/ESM shall obtain line clear and shall take ‗OFF‘ the Last Stop Signal at ‗X‘.",
  "The SI/ESM shall then cancel ‗Line clear‘ and again attempt to take ‗OFF‘ Last Stop Signal at ‗X‘ to see that it cannot be taken ‗OFF‘.",
  "This operation shall be repeated in the reverse direction, the Station Master at ‗Y‘ commencing with the ‗Testing‘ signal.",
  'Whenever the SI/ESM opens the instrument or for maintenance work or when fixing a new instrument, he shall test the block instrument.',
  "After the ‗Testing signals‘ are exchanged, the Station Master shall ensure that the block instrument and other appliances are restored to normal and locked and sealed, whenever required.",
  'Entries in red ink shall be made in the Train Signal Register immediately below the entries for last train and signed by both the SI/ESM and the Station Master.',
  "The time given shall be the time when the ‗Testing‘ signals were completed.",
]

const ssbpacUfsbi = [
  {
    text: 'It is a non-co-operative, user-friendly push button type Block Instrument capable of providing the last vehicle detection in both single- & double-line sections.',
  },
  {
    text: 'The block section is provided with Block Proven Axle Counters (BPAC) to verify the occupation or clearance of block section and indicated on Block Panel.',
  },
  {
    text: 'Train entry/exit buzzer to/from block section is provided at both stations and to be acknowledged.',
  },
  {
    text: 'When SNK is lit, it indicates LSS, FSS, controls are normal and TCF indication is not available at station.',
  },
  {
    text: 'When SNOEK is lit, it indicates LSS, FSS, controls are normal and TCF indication is not available at station on other end of block section.',
  },
  {
    text: 'For cancellation of line clear:',
    subs: [
      'Despatching end SM gives cooperation by pressing cancel co-op button.',
      'Receiving end SM shall press Cancel and Bell code buttons simultaneously after observing co-op button indication.',
      'Counter registers next higher number at the receiving end station where block instrument is in TCF position.',
    ],
  },
  {
    text: 'Block Instrument automatically goes to Line closed position without any operation, after complete arrival of train at the receiving station.',
  },
  {
    text: 'Due to any reason if any vehicle enters block section, section buzzer starts along with line occupied and to be acknowledged by both.',
  },
]

const comparisonRows = [
  [
    'Type of block instrument are Single Line: Podanur & Daido, Double Line: SGE',
    'Type of block instrument are UFSBI & SSBPAC',
  ],
  [
    'These block instruments specifically work on single/double/non-electrified/electrified sections',
    'These block instruments can work either in single/double/electrified/non-electrified areas',
  ],
  [
    'Provision of axle counters for detecting vehicles in block section is not compulsory',
    'Provision of axle counters for detecting vehicles in block section is compulsory',
  ],
  [
    'Block instruments work based on the relays',
    'Block instruments work based on the axle counters and SSI',
  ],
  [
    'Track circuits FVT & LVT are provided after LSS & FSS for detecting the entry and exit of the block section',
    'Axle counters are provided for detecting the entry and exit of the block section',
  ],
  [
    'Block instruments can be operated to line closed position even when portion of the train is left in the block section',
    'Block instruments will be operated to line closed position only after arrival of the complete train',
  ],
  [
    'SM of either station has to operate for bringing block instrument to Line close position',
    'Block instruments automatically indicate line close position on arrival of the complete train',
  ],
  [
    'Buzzers are available at either stations for informing train entering or clearing the block section',
    'Buzzers are available at both stations for informing train entering or clearing the block section',
  ],
  [
    'Cancellation of Line clear counters increments at the station where line clear is granted in case of single line',
    'Cancellation of Line clear counters increments at the station where line clear is obtained',
  ],
  [
    'FVT/LVT relays activate only when LSS/FSS signals are taken off',
    'Occupation of block section is indicated irrespective of signals being taken off',
  ],
  [
    'On single line when FSS fails, its knob to be placed in reverse position in order to receive Train arrival buzzer and avoid failure of block instrument',
    'On single line when FSS fails, its knob need not be kept in reverse position in order to receive Train arrival buzzer and avoid failure of block instrument',
  ],
]

const BlockInstrumentsPage = () => {
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
              <CircuitBoard className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              BLOCK INSTRUMENTS
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Testing Signal (Testing Block Instrument by S&T Staff)
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {testingSignal.map((text) => (
              <li
                key={text}
                className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Salient Features of SSBPAC (Solid State Block Proving by Axle Counter) and UFSBI
              (Universal Fail Safe Block Interface)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {ssbpacUfsbi.map((item, index) => (
              <li
                key={item.text}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {item.text}
                  </p>
                </div>
                {item.subs ? (
                  <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
                    {item.subs.map((sub) => (
                      <li key={sub} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">o</span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          {sub}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Difference between Normal (Relay Based) Block Instrument and Axle Counter Based
              Block Instrument
            </h2>
          </header>

          <div className="overflow-x-auto px-5 py-7 sm:px-8 sm:py-9">
            <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
              <table className="w-full min-w-180 border-collapse text-left">
                <thead>
                  <tr className="border-b border-amber-500/20 bg-slate-950/50">
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      S.No
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Normal (Relay Based) Block Instrument
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Axle Counter Based Block Instrument
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {comparisonRows.map(([relay, axle], index) => (
                    <tr
                      key={relay}
                      className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                    >
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                        {index + 1}
                      </td>
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {relay}
                      </td>
                      <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {axle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/block-working-manual"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Block Working Manual</span>
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

export default BlockInstrumentsPage
