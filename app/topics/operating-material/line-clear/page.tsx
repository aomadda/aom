'use client'

import React from 'react'
import Link from 'next/link'
import { CircleCheck } from 'lucide-react'

const points = [
  'Means the permission given from a block station to a block station in rear for a train to leave the latter and approach the former; or the permission obtained by a block station from a block station in advance for a train to leave the former and proceed towards the latter. (G.R. 1.02(36))',
  'It is the permission given by the Station Master for a train to leave a station.',
  'It is the permission given to the rear Station Master for train to leave that station and come to his station, or',
  'It is the permission taken from the station in advance for train to leave his station and go to advance station.',
]

const whenToAsk = [
  "At train originating station for a passenger carrying train, ‗IS LINE CLEAR‘ shall be asked five minutes before the booked departure time.",
  "In case of a Goods train, ‗IS LINE CLEAR‘ shall be asked when the train is formed and ready in all aspects.",
  "At an Intermediate station, for all stopping trains with less than five minutes halt, ‗IS LINE CLEAR‘ shall be asked when the train is sighted.",
  "At an Intermediate station, ‗IS LINE CLEAR‘ shall be asked for a run-through train seven minutes before the train is due to pass through the station.",
  "If the running time of a run-through train is less than seven minutes, ‗IS LINE CLEAR‘ shall be asked immediately after receiving ‗Train entering block section‘ signal.",
  "The ‗IS LINE CLEAR‘ signal shall not be given until ‗Train Out of Block Section‘ signal has been received for the last preceding train.",
  'In order to avoid excessive detention to trains of lesser importance, a Mail/Express train running less than ten minutes late may be detained up to ten minutes to save a delay of 30 minutes or more for a passenger train or 45 minutes to a goods train (non-controlled section).',
  'A passenger train running less than 10 minutes late may be detained up to a total of 10 minutes to avoid a delay of 30 minutes or more of a goods train (non-controlled section).',
]

const controlPhone = [
  'Whenever the station block instrument/phone is defective and no other means of communication is available, the SM shall immediately inform the SCOR & other concerned officials through a message.',
  'Both SMs shall record all the particulars in TSR with red ink and exchange messages in a pro-forma as given in the Block Working Manual.',
  'The SCOR shall record the failure on the control chart and shall acknowledge while taking over/handing over the charge.',
  'The SM who is having a train to despatch will take permission from SCOR, and SCOR shall call the SM at the other end on control phone and establish communication between both SMs.',
  'Both SMs, before granting/obtaining line clear, shall identify each other by calling out their station names and also their full names.',
  'Both SMs shall repeat the arrival and departure timings of last three preceding trains to the SCOR, who shall cross-check the timings with the control chart.',
  'The SM who requires line clear shall clearly mention train number, description of the train (Express/Passenger/Goods), and also the direction (UP/DN).',
  'The SM at the other end, before giving line clear supported with a PN, shall comply with all the conditions for granting line clear.',
  'Both SMs shall record in TSR with red ink the train number in full, description, arrival & departure timings of each train run between two stations during block failure.',
  'Both SMs shall record the means of communication through which line clear is obtained or granted on the T/A 1425 (outward) & T/B 1425 (inward) documents.',
  'After obtaining line clear, the SM shall prepare the Paper Line Clear Ticket on Form No. T/C 1425 for UP direction & T/D 1425 for DN direction and take the acknowledgement of loco pilot in T/A 1425 before handing over PLCT to him.',
  "Both SMs shall record the ‗Train Entering Block Section‘ and ‗Train Out Of Block Section‘ particulars in T/A 1425 & T/B 1425, TSR, communicate each other on control phone and also inform the SCOR.",
  'All trains shall be stopped for issuing PLCT. The serial numbers of PLCTs issued to each train shall be recorded in remarks column of TSR against the entry.',
  "Whenever line clear is cancelled, both SMs shall record the same in the ‗D‘ column of T/A 1425 and T/B 1425, duly informing the SCOR.",
  'The SCOR shall co-ordinate between both SMs to fulfill all the transactions and record all the PNs in the control chart which were issued by SM for granting line clear and also ensure that the block section is clear at the time of granting line clear.',
  'Both SMs shall record the name of the Section controller in the remarks column of the TSR.',
]

const vhfSet = [
  'Before actually signalling a train through VHF, the SM shall exchange messages in the proforma given in the BWM and record in red ink in TSR.',
  'SM of both stations contact each other on common frequency/channel in their VHF sets and switch over to the freezed channel.',
  'The common channel and freezed channel are mentioned in SWR.',
  'Both SMs shall cross-check PNs given for last three preceding trains, train numbers, and record these particulars in red ink in TSR.',
  'SM at despatching clearly mentions train number in full, description and direction for which line clear is required.',
  'SM at other end, after complying condition for granting line clear, shall grant line clear supported by PN.',
  'The train number, description, direction and arrival/departure of each train and PN obtained/issued are recorded in red ink in TSR by both SMs.',
  'SM records the means of communication in T/A 1425 and T/B 1425.',
  'After obtaining line clear, SM prepares PLCT (T/C 1425 or T/D 1425) and delivers to LP, taking his acknowledgement in T/A 1425.',
  'Serial number of PLCT is mentioned in remarks column of TSR for each entry.',
  'SMs communicate train entering block section or train out of block section in TSR.',
  "When line clear is cancelled, same to be recorded in ‗D‘ column.",
  'All trains stopped for issue of PLCT.',
  'SMs switch over to common channel after necessary transaction completed.',
]

const vhfChannels = [
  'Common channel/frequency – channel 13',
  'Freezed channel/frequency – channel 5 (1st adjoining station)',
  'Channel 6 (2nd adjoining station)',
  'Channel 7 (3rd adjoining station)',
  'At junction station for other section: channel 15 (1st adjoining station), channel 16 (2nd adjoining station), channel 17 (3rd adjoining station)',
]

const LineClearPage = () => {
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
              <CircleCheck className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-4xl md:text-[2.5rem]">
              Line Clear
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-5 px-5 py-8 sm:px-10 sm:py-10">
            <div className="space-y-4">
              {points.map((text, index) => (
                <div
                  key={index}
                  className="group flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/60 hover:shadow-md hover:shadow-amber-950/20 sm:gap-5 sm:p-5"
                  style={{ animation: `fade-up 0.55s ease-out ${0.08 * (index + 1)}s both` }}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 via-amber-500/20 to-orange-600/25 text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/35 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                    <CircleCheck className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="min-w-0 flex-1 pt-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h2 className="text-base font-semibold text-amber-100 sm:text-lg">
                IS LINE CLEAR WHEN TO BE ASKED (BWM Part A-3.8, B-3.12, C-3.5)
              </h2>
              <ol className="mt-4 space-y-3">
                {whenToAsk.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/70 sm:p-5"
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
          </div>
        </article>

        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              How to Obtain Line Clear Through Control Phone and VHF Set?
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="text-base font-semibold text-amber-100 sm:text-lg">
                LINE CLEAR THROUGH CONTROL PHONE (BWM Part A-8.8, B-8.8, C-8.8)
              </h3>
              <ol className="mt-4 space-y-3">
                {controlPhone.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/70 sm:p-5"
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

            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="text-base font-semibold text-amber-100 sm:text-lg">
                LINE CLEAR THROUGH VHF SET (BWM Part A-8.9, B-8.9, C-8.9)
              </h3>
              <ol className="mt-4 space-y-3">
                {vhfSet.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/70 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      {text}
                    </p>
                  </li>
                ))}
                <li className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      15
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      The common and freezed channels are:
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
                    {vhfChannels.map((text) => (
                      <li key={text} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">
                          
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
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

export default LineClearPage
