'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { OctagonX } from 'lucide-react'

const cancelLastIntro =
  "The ‗Cancel last signal‘ cancels the last signal given from the block station from which it is sent. Where ‗Is line clear‘ signal has been forwarded and it is afterwards found that the train to which it referred has to be detained for shunting or other purposes, or has to return to the block station from which that signal was sent, the ‗Cancelling signal‘ shall be sent to the block station in advance, so that the previous signal may be cancelled."

const cancelBeforeEntry = [
  'SM of X (sending station) shall ask consent for cancellation.',
  'Explain the circumstances supported by a Private Number.',
  'SM of Y (receiving station) will give consent and repeat the PN.',
]

const daidoCancel = [
  'SM X shall turn cancellation switch S-1 for cancellation from Normal to Reverse.',
  "Wait for 120 seconds until ‗Time Release‘ Indicator shows \"Free\".",
  'Concerned counter registers next higher number.',
  "Restore S-1 to normal and send ‗Cancel last signal.‘",
  'Keep PB 1 and PB 2 pressed for 5 seconds on the last beat.',
  'SM Y will turn the block handle to line closed position.',
  'SM Y will give cancel last signal and keep pressing PB1 and PB2.',
  'SM X will turn the block handle to line closed position.',
]

const podanurCancel = [
  "SM X shall operate the ‗Cancellation‘ button along with Bell Code Button (BCB).",
  'Counter registers next higher number.',
  "‗Time release‘ Free indication appears after 90 seconds.",
  "SM X gives 'Cancel last signal' bell, presses ‗Line closed‘ button and BCB.",
  "At the end of the last beat, SM Y will co-operate by pressing ‗Line closed‘ button and Bell Code Button till ‗Line closed‘ indication appears.",
  "‗Line closed‘ indication appears in both the block instruments.",
  "Acknowledge ‗Cancel last signal‘ bell by SM Y.",
]

const ufsbiCancel = [
  'SM X shall press Cancel Co-op button and SM Y shall get Co-op to light up, then SM Y shall press Bell and Cancel button at Y Station. Counter registers next higher number. On getting Bell code, SM X will release Cancel Co-op button.',
  'At Station X, TRAIN GOING TO INDICATOR starts flashing and at Station Y, TRAIN COMING INDICATOR flashes green and CANCEL Indicator flashes yellow.',
  'After 120 seconds, flashing will stop and at both stations, LINE CLOSED indicator lights up.',
]

const sgeCancel = [
  "SM X shall give ‗Cancel last signal‘.",
  "SM Y will acknowledge ‗Cancel last signal‘.",
  "Holding the bell plunger pressed during last beat, SM Y turns the operating handle to ‗Line Closed‘ position.",
  "TCF dial displays ‗Line Closed‘ indication at Y.",
  "TGT dial displays ‗Line Closed‘ indication at X.",
]

const CancelLastSignalPage = () => {
  return (
    <OperatingTopicPage title="Cancel Last Signal" icon={OctagonX}>
        <article
            className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
            style={{ animation: 'fade-up 0.55s ease-out 0.55s both' }}
          >
            <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-5 sm:px-6">
              <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
              <h2 className="text-center text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-xl leading-snug">
                Cancel Last Signal
              </h2>
            </header>

            <div className="space-y-4 px-5 py-6 sm:px-6">
              <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
                {cancelLastIntro}
              </p>

              <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  a Cancellation of Line Clear Before the Train Enters Block Section
                </h3>
                <ol className="space-y-3">
                  {cancelBeforeEntry.map((text, index) => (
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

              {[
                {
                  title: 'i Daido Tokenless Handle Type Block Instrument',
                  items: daidoCancel,
                },
                {
                  title: 'ii Podanur/Kyosan Push Button Block Instrument',
                  items: podanurCancel,
                },
                {
                  title: 'iii UFSBI & SSBPAC(D) Single Line',
                  items: ufsbiCancel,
                },
                {
                  title: 'iv Double Line SGE Block Instrument',
                  items: sgeCancel,
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
    </OperatingTopicPage>
  )
}

export default CancelLastSignalPage