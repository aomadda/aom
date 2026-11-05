'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import Link from 'next/link'
import { PanelTop } from 'lucide-react'

const intro = [
  'It is a modern signalling system provided at stations where points and signals are operated from a centrally located panel by means of push buttons or knobs.',
  'Provides for relay/solid state interlocking and safety features are augmented for consolidation of interlocking.',
  'It eases the operation and eliminates time loss and confusion.',
  'Status of points, signals and reception lines are readily available on hand to the Station Master (SM), which makes for smoother operation.',
  'Principal/ZRTI/MLY is responsible for initial/refresher training of staff in rules connected with panels.',
]

const panelTypes = [
  'a Siemens panel (German system)',
  'b Podanur workshop panel (British system)',
]




const panelComparisonRows = [
  [
    'The points and signals are operated by turning the knob switches to the required position',
    'Push buttons of different colour codes are provided near the points, signal etc., for their operations',
  ],
  [
    'Points are required to be operated individually for taking off signals',
    'Individual points need not be operated for taking off signals',
  ],
  [
    'Only one knob to be operated at a time',
    'Two related buttons have to be pressed and released simultaneously for operating a given function',
  ],
  ['Route knobs are not available', 'Route knobs are available'],
  [
    'Colour of knobs: Point-black',
    'Colour of buttons: Route button-grey, Point button–blue',
  ],
  [
    'Emergency point, signal, route & sub route release buttons are not available',
    'Emergency point, signal, route & sub route release buttons are available',
  ],
  [
    'Knobs are turned to Normal and Reverse positions',
    "NCR‘ indication along with audible warning appears after a button is kept pressed for a prolonged period of 10 seconds or more. Normally, buttons are not required to be pressed for more than 3 seconds.",
  ],
  [
    'There are three indications and two positions for the Point knobs. Miniature yellow light is shown whenever point is free near the knobs and when not available indicates point is locked',
    "Normal and reverse indications of points are displayed by strip indications at the concerned points, normal on the straight and reverse on the turnout. ‗Points locked‘ indication appears as white dot near the point when it is locked by the route",
  ],
  [
    'When signal is cleared for a route - all track only up to the next signal is only shown',
    'When signal is cleared for a route - all track including overlap indications appear on the panel',
  ],
  [
    'Knobs are not self-restoring type once operated',
    'Knobs are self-restoring type once operated',
  ],
  [
    'As the train clears entire section of the route, the indication of the route disappears only after the concerned signal is put back to normal',
    'As the train clears each section of the route, the indication of the route disappears, signifying release of the section',
  ],
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
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}



function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
      {items.map((text) => (
        <li key={text} className="flex gap-2.5">
          <ListMark>o</ListMark>
          <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ul>
  )
}



const PanelInterlockingPage = () => {
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
              <PanelTop className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              PANEL INTERLOCKING (APPENDIX XXI)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <NumberedList items={intro} />

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  6
                </span>
                <div>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    There are two types of panels, they are:
                  </p>
                  <CircleList items={panelTypes} />
                </div>
              </div>
            </div>

            

            
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Difference between Siemens Panel and Podanur Panel
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
                      Podanur Panel
                    </th>
                    <th className="px-3 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200 sm:px-4 sm:text-sm">
                      Siemens Panel
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {panelComparisonRows.map(([podanur, siemens], index) => (
                    <tr
                      key={podanur}
                      className="bg-slate-900/30 transition-colors hover:bg-slate-900/55"
                    >
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] font-semibold leading-relaxed text-amber-100/95 sm:px-4 sm:text-[15px]">
                        {index + 1}
                      </td>
                      <td className="border-r border-slate-700/40 px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {podanur}
                      </td>
                      <td className="px-3 py-3.5 text-[13px] leading-relaxed text-slate-300 sm:px-4 sm:text-[15px]">
                        {siemens}
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

export default PanelInterlockingPage
