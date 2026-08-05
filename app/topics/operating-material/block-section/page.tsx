'use client'

import React from 'react'
import Link from 'next/link'
import { Split } from 'lucide-react'

const points = [
  'Means that portion of the running line between two block stations on to which no running train may enter until Line Clear has been received from the block station at the other end of the block section. (G.R. 1.02(10))',
  'Block section is a portion of the running line between two block stations.',
  'No running train may be permitted until line clear is obtained.',
  'Block section lies between two block stations.',
  'Block section commences where station section ends.',
  'Normally only one train is permitted in block section.',
  'Block section shall not be obstructed for shunting or any other purpose without consent of other end station master.',
  'Limits of block section between every two stations shall be marked separately in SWR.',
]

const vehiclesRunningAway = [
  'SM aware vehicles escaped in Block Section shall give vehicles running away into the block section signal (six pause four/six pause five bell beats) to the other SM.',
  'No train shall be allowed to enter Block section from either end.',
  'If any relief engine has to be sent, only after information is received that vehicle has come to a stop or after 30 minutes more than the running time of slowest speed goods train in that direction.',
  'SM on receiving signal, acknowledge and take protective measures as may be considered expedient under the circumstances to prevent accident.',
  'If station is on gradient falling towards next station, SM shall try to stop the vehicles by covering rails heavily with sand, earth or small broken stones for great distance and set points to loop line or dead end siding.',
  "If can‘t be stopped, the trailing points set to force trail through them.",
  'If no train approaching or line is not on a falling gradient, the vehicles may be allowed to run through and warn the other SM.',
  'If vehicle contains passengers, shall not be set to dead end siding unless to prevent more serious accident.',
  'On controlled section, SCOR be informed.',
  'If portion of train or BV has run away, detonators placed on track to attract attention of guard.',
  'When the obstruction has been removed, Train out of block section signal shall be sent.',
]

const pushBackClosing = [
  'SM X shall advise about the train pushing back.',
  'SM Y will note the advice.',
  "Put back all relevant signals to ‗ON‘ position.",
  'SM X, on complete arrival of train, ensures the conditions for closing the block section are complied, gives clearance time supported by Private Number.',
  'SM Y will repeat PN and note arrival time.',
]

const pushBackDaido = [
  'Before pushing back, SM X shall operate S2 switch.',
  'Take off reception signals.',
  'On complete arrival of train, restore the S-2 to normal.',
  "Send ‗Train out of block section‘ signal through PB 1 and keep PB 2 also pressed for 5 seconds on the last beat.",
  "SM Y turns block handle to ‗Line closed‘ position.",
  "Acknowledge ‗Train out of block section‘ signal and press PB1 & PB2 for 5 seconds on the last beat.",
  "SM X turns the block handle to ‗Line closed‘ position.",
]

const pushBackPodanur = [
  "SM X shall take ‗OFF‘ the reception signals.",
  "On arrival, operate the ‗Cancellation‘ button along with the Bell Code Button.",
  'Counter registers next higher number.',
  "SM X will give ‗Train out of block section‘ signal; press BCB along with ‗Line-closed‘ button.",
  "At the end of last beat, SM Y will press BCB and ‗Line closed‘ button till ‗Line closed‘ indication appears.",
  "‗Line closed‘ indication appears at station X.",
  "SM Y will acknowledge ‗Train out of block section‘ signal.",
]

const pushBackUfsbi = [
  'SM X shall press Cancel Co-op button and SM Y shall get Co-op to light up, then SM Y shall press Bell and Cancel button at Y Station. Counter registers next higher number. On getting Bell code, SM X will release Cancel Co-op button.',
  'At Station X, TRAIN GOING TO INDICATOR starts flashing and at Station Y, TRAIN COMING INDICATOR flashes green and CANCEL Indicator flashes yellow.',
  'After 120 seconds, flashing will stop and at both stations, LINE CLOSED indicator lights up.',
]

const BlockSectionPage = () => {
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
              <Split className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Block Section
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((text, index) => (
              <div
                key={index}
                className="group flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.08 * (index + 1)}s both` }}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 via-amber-500/20 to-orange-600/25 text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/35 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                  <Split className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Conditions for Closing Block Section (G.R. 14.10)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              'The block section shall be cleared only after complete arrival of the train or the obstruction has been removed.',
              'Before giving train out of block section signal, SM shall ensure the train has arrived completely or the cause for blocking has been removed and conditions for granting Line Clear have been fulfilled.',
              'SM is responsible to ensure complete arrival of train by:',
              'Tail Board / Tail lamp of run-through train, or',
              'Tail board / Tail lamp of stopping train which can be conveniently observed by SM.',
              'Where SM cannot see Tail board / Tail lamp:',
              'Whenever block proving axle counter and complete track circuiting of station section is available and functioning and there is clear indication of the clearance of block section and complete arrival of the train, it would be taken as assurance for complete arrival of the train.',
              'Where BPAC is not provided or not functioning:',
            ].map((text, index) => (
              <li
                key={`${index}-${text.slice(0, 40)}`}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {text}
                  </p>
                </div>

                {index === 7 ? (
                  <ul className="mt-3 space-y-2.5 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
                    {[
                      'Private Number receiving from cabinmen / levermen who can ensure complete arrival, or',
                      'Exchanging Private Number with Guard of a stopping train on Walkie-Talkie or Private Number recorded by the Guard in T.1410 register ―Train Intact Register‖ when walkie-talkie or BPAC fail, or',
                      'Private Number exchanged by the Guard, who shall proceed in rear and ensure the train arrived within fouling mark by verifying last vehicle number.',
                      'When train is running without BV or guard, Private Number received from Pointsman who shall be deputed to ensure complete arrival of the train in case of train running without Guard.',
                    ].map((sub) => (
                      <li key={sub} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
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
          style={{ animation: 'fade-up 0.55s ease-out 0.35s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              VEHICLES RUNNING AWAY INTO THE BLOCK SECTION (BWM Part A-5.9, B-5.10,
              C-5.11/12)
            </h2>
          </header>

          <ol className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {vehiclesRunningAway.map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
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
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Closing of Block Section After Pushing Back of the Train
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <ol className="space-y-3">
              {pushBackClosing.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
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

            {[
              {
                title: 'i) Daido Tokenless Handle Type Block Instrument',
                items: pushBackDaido,
              },
              {
                title: 'ii) Podanur/Kyosan Push Button Block Instrument',
                items: pushBackPodanur,
              },
              {
                title: 'iii) UFSBI & SSBPAC(D) Single Line',
                items: pushBackUfsbi,
              },
            ].map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
              >
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  {section.title}
                </h3>
                <ol className="space-y-3">
                  {section.items.map((text, index) => (
                    <li
                      key={text}
                      className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5"
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
              </section>
            ))}
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

export default BlockSectionPage
