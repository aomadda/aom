'use client'

import React from 'react'
import Link from 'next/link'
import { KeyRound } from 'lucide-react'

const lockingPoints = [
  'Where relays and interlocking gears are housed at a station',
  'In a separate room is known as Relay Room',
  'The Relay Room shall be kept in locked condition.',
  'With a single lock and on double key operation',
  'One key with Station Master and other with signal maintainer.',
  'Lock cannot be opened unless both keys are inserted and turned one after the other.',
  'Whereas for locking, first SM‘s key is to be operated then ESM key.',
  'Such arrangement is done to ensure safety; without consent of both, this relay room cannot be opened.',
  'The entire arrangement of the above is done in glass front with a wooden box and keys will be under personal custody of on duty SM/C.S.M.',
  'SM‘s key is chained to EKT key, directly connected with counter as well as two different colour lights i.e., GREEN & RED lights are provided for indication purpose.',
  'If it exhibits Green light, it means relay room is in closed condition.',
  'If it exhibits Red light, it means relay room is in open condition.',
  'The doors of Relay Room are directly connected with Data loggers.',
  'Timings of opening and closure are recorded in Divisional CTO (S&T) and messages are delivered to concerned ADSTE, SSE (S&T), JE (S&T), S. Maintainer & Section TI.',
]

const openingPoints = [
  'By authorized S&T staff.',
  'May be Signal maintainer of station, JE/SSE (Signals) of section or any staff authorized by Sr. DSTE under signed letter.',
  'For maintenance purpose or attending failures, to obtain Relay Room key of SM‘s, they must show their valid competency or I.D.',
  'In case if it is required to be opened by other than Railway staff (RVNL/RITES etc.), concerned signal supervisor shall obtain authorization letter from Sr. DSTE duly fulfilling the conditions required.',
  'By presenting the authorization letter to on duty SM, it shall be pasted in Relay Room Key register.',
  'On duty SM shall hand over key of the sealed glass fronted box to authorized S&T staff only.',
  'For which entry has to be made by S&T staff in the register as per proforma including counter numbers of before opening and after opening.',
  'Minimum time permitted to be kept open Relay Room is ONE HOUR (Routine Maintenance / Failures).',
  'If the work is more than TWO HOURS, prior permission of Sr. DSTE is compulsory.',
  'If work exceeds, concerned S&T staff shall prepare a report and submit to Sr. DSTE and a copy to be pasted in Relay Room key register of particular station.',
]

const registerPoints = [
  'Kept in SM‘s office / Cabin SM‘s office.',
  'Entries shall be made by concerned S&T staff only in order.',
  'On duty SM shall check whether all entries are properly done along with signature.',
  'Then only hand over the SM‘s key to S&T staff to open Relay Room to carry out works.',
  'After completion of work and locking the Relay Room, concerned S&T staff shall return back SM‘s key.',
  'Then entries to be made in Relay Room register and on duty SM and concerned S&T should sign duly indicating date and time of returning.',
  'Entries to be made in TSR in RED INK along with timings.',
  'At the time of handing over Relay Room key to authorized S&T officials and while taking back key from S&T staff, advise SCOR and Section TI also.',
  'In case glass fronted wooden box lock is lost or misplaced.',
  'In case of emergency, lock may be broken with the permission of SCOR & as well as S&T control.',
  'At Divisional Signal control office, maintain daily statements & prepare consolidated statement for monthly and send Sr. DSTE/DSTE/ADSTE and Sr. DOM/DOM/AOM.',
  'During inspection of section, TI‘s at station shall check station records of relay room register and cross check with data loggers / counter numbers. If any discrepancy found, immediately it shall be brought to the notice of the officers of S&T and Operating by the numbered control message from the station.',
  'The section TI shall prepare a monthly report of opening of Relay Room in the stations under his jurisdiction to Sr. DOM/office.',
]

const emergencyNote =
  'A spare S&T key shall be kept with the Station Master in a sealed, glass-fronted box as a safety measure. In emergencies such as a fire in the relay room, the glass may be broken to extract the key, open the relay room, and extinguish the fire.'

function NumberedList({ items, startDelay = 0 }: { items: string[]; startDelay?: number }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${index}-${text.slice(0, 24)}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
          style={{ animation: `fade-up 0.55s ease-out ${startDelay + 0.04 * (index + 1)}s both` }}
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {index + 1}
          </span>
          <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}

const RelayRoomPage = () => {
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
              <KeyRound className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              APP XIII Locking of Relay Rooms – Procedure for Working
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="px-5 py-8 sm:px-10 sm:py-10">
            <NumberedList items={lockingPoints} />
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.2s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Opening of Relay Room
            </h2>
          </header>
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <NumberedList items={openingPoints} startDelay={0.05} />
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.28s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Relay Room Register
            </h2>
          </header>
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <NumberedList items={registerPoints} startDelay={0.05} />
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.36s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              In case of emergencies like fire in a relay room to extinguish fire:
            </h2>
          </header>
          <div className="px-5 py-7 sm:px-8 sm:py-9">
            <div className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                ✓
              </span>
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{emergencyNote}</p>
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

export default RelayRoomPage
