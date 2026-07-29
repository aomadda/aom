'use client'

import React from 'react'
import Link from 'next/link'
import { HardHat } from 'lucide-react'

const points = [
  { num: 1, text: 'Only qualified Guards with valid ZRTI competency certificates issued by Principal/ZRTI shall be booked for duty, and the booking official must ensure this.' },
  { num: 2, text: 'In exceptional circumstances, only trains not carrying passengers may be run without Guard with the specific orders of Sr. DOM.' },
  { num: 3, text: 'Such trains shall have a brake van or SLR as the rearmost vehicle.' },
  {
    num: 4,
    text: 'Under exceptional circumstances, short formation trains not carrying passengers, not exceeding 10 eight-wheeler units, may be run without guard and without brake van/SLR.',
  },
  { num: 5, text: 'Some of the duties of Guard shall devolve on the Loco Pilot and Assistant Loco Pilot.' },
  { num: 6, text: 'It should be ensured that the train is provided with continuous air pressure from the engine to the rearmost vehicle.' },
  { num: 7, text: 'Loco Pilot shall ensure that the required amount of air pressure is provided in the brake van before signing BPC.' },
  {
    num: 8,
    text: 'Last vehicle indicator (Tail Board/Tail Lamp) shall be fixed to the tail end of the rear-most vehicle by Station Staff. The Loco Pilot shall ensure provision of the same.',
  },
  { num: 9, text: "SM shall issue caution order to the LP with an endorsement 'train is to run without Guard'." },
  {
    num: 10,
    text: 'SM shall advise SCOR under exchange of PNs who will inform the Station Masters en route. The SM will inform END cabins and gates/gatemen under exchange of PNs.',
  },
  {
    num: 10,
    text: 'The Station Master to inform the end cabins, where provided, and Gatemen of all the LC gates en route provided with telephonic communication under exchange of Private Numbers.',
  },
  {
    num: 11,
    text: 'Where IB signal is provided, the SM shall not dispatch a passenger carrying train up to IBS unless the train without Guard reaches the station ahead.',
  },
  {
    num: 11,
    text: 'In Automatic block system, no passenger carrying train shall be allowed to follow the goods train without Guard until it reaches to next block station. If a non-passenger carrying train with Guard and BV or Light Engine/Track machine / Towerwagon / self-propelled vehiclehas been sent, then as a next train a passenger carrying train can be sent.',
  },
  {
    num: 12,
    text: 'The SM shall ensure that the train has arrived complete and is standing clear of the fouling mark if such a train stops at a station.',
  },
  {
    num: 13,
    text: 'During tempestuous weather, total interruption of communication and TSL working, running of trains without Guard is strictly prohibited.',
  },
  { num: 14, text: 'Extra detonators should be carried by the Loco Pilot.' },
  { num: 15, text: 'While going for protection, care shall be taken that Loco is not deserted if it is on rails.' },
]

const troubleEnRoute = [
  'Assistant Loco Pilot should check and attend the trouble.',
  'Within station limits, the help of C&W staff or pointsman should be taken.',
  'The Assistant should ensure the continuity.',
  'The Loco Pilot should regulate the speed depending on the ‗feel test‘ conducted by him.',
]

const TrainManagerPage = () => {
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
              <HardHat className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Running of Trains Without Guard for not carrying passengers(S.R. 4.25.4)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={`${item.num}-${index}`}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.03 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  {item.num}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
              </li>
            ))}
          </ol>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.3s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              When encountering trouble en-route:
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {troubleEnRoute.map((text) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
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

export default TrainManagerPage
