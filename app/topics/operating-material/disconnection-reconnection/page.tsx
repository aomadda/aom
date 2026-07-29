'use client'

import React from 'react'
import Link from 'next/link'
import { Unplug } from 'lucide-react'

type Point =
  | { num: number; text: string }
  | {
      num: number
      text: string
      groups: { label: string; text: string }[]
    }

const points: Point[] = [
  {
    num: 1,
    text: 'The Engineering (or) S & T officials will take up works related to points, signals, lever frames, block instruments etc. when they are defective or as a part of periodical maintenance.',
  },
  {
    num: 2,
    text: 'They have to take prior consent of the SM.',
  },
  {
    num: 3,
    text: 'For this purpose, works are classified as under:',
    groups: [
      {
        label: 'Group A',
        text: 'Works not requiring the consent of the SM (Ex: Replacement of bulbs, fuses etc.).',
      },
      {
        label: 'Group B',
        text: 'Works definitely require the consent of SM (Ex: Testing of points, signals etc.).',
      },
      {
        label: 'Group C',
        text: 'Works definitely require issue of Disconnection Notice (T.351). (Ex: Removal of points, lock slides of a point, detectors, Disconnection of lock bar etc.).',
      },
    ],
  },
  {
    num: 4,
    text: 'Disconnection notice shall be issued by S & T staff not below the rank of SI/ESM.',
  },
  {
    num: 5,
    text: 'Disconnection up to one hour should normally be allowed by SM depending upon trains in the section.',
  },
  {
    num: 6,
    text: 'If disconnection is not allowed by the SM, it should be requested by the S&T Official and allowed by the control depending upon the flow of trains. Otherwise, the available slot may be indicated by the Control.',
  },
  {
    num: 7,
    text: 'If the maintenance/repair of S&T gear is urgently required to avoid an accident, it can be permitted with approval of Sr.DSTE.',
  },
  {
    num: 8,
    text: 'For works involving disconnection for more than one hour, a Disconnection schedule jointly signed by Sr.DSTE, Sr.DOM, Sr.DEN & Sr.DEE/TRD shall be issued and the progress of joint schedule reviewed by the DRMs periodically.',
  },
  {
    num: 9,
    text: 'For disconnections/maintenance likely to last for more than a day, Temporary working instructions must be issued.',
  },
  {
    num: 10,
    text: 'Once disconnection is accepted, no attempt shall be made to operate disconnected gear.',
  },
  {
    num: 11,
    text: 'In case of a crossover, if points at one end are disconnected, points at other end shall also be treated as disconnected.',
  },
  {
    num: 12,
    text: 'When the points are disconnected, the signals detecting such points shall be treated as defective.',
  },
  {
    num: 13,
    text: 'It is the duty of S & T staff to keep such signals at ON.',
  },
  {
    num: 14,
    text: 'If the lever frame in the cabin is disconnected, all the points worked by such cabin shall be treated as non-interlocked.',
  },
  {
    num: 15,
    text: 'When overhauling of the lever frame is undertaken, special instructions issued by the divisional authorities shall be strictly followed.',
  },
  {
    num: 16,
    text: 'In case of a joint work with engineering department, an endorsement as ―Joint Work with Engg. Dept‖ shall be made in the disconnection notice.',
  },
  {
    num: 17,
    text: 'The SM shall advise the cabin staff with the particulars of disconnection under the exchange of PN.',
  },
  {
    num: 18,
    text: 'Shunting movements are to be avoided as far as possible.',
  },
  {
    num: 19,
    text: 'If it is necessary to pass a train or to perform shunting, the on-duty SM shall advise SI by a memo.',
  },
  {
    num: 20,
    text: 'In case of a joint work, PWI permission shall be obtained by SI.',
  },
  {
    num: 21,
    text: 'The SM shall ensure the correct setting, clamping, and padlocking of the points for the safe passage of the train.',
  },
  {
    num: 22,
    text: 'After completion of the shunting or train movement, the SM shall advise the SI to resume the work duly unclamping the points.',
  },
  {
    num: 23,
    text: 'After the completion of Engineering Work, the PWI shall give a memo to SI with a copy to SM.',
  },
  {
    num: 24,
    text: 'The SI shall issue reconnection notice only after receiving a Track Fit Certificate by ENGG officials.',
  },
  {
    num: 25,
    text: 'The SM shall test the signals, points (which were disconnected) jointly with SI before accepting reconnection.',
  },
  {
    num: 26,
    text: 'The signature of the person in charge of the work on Reconnection Notice (T.351) is the authority for SM to resume normal working.',
  },
  {
    num: 27,
    text: "SM shall advise the cabin staff with the particulars of reconnection under the exchange of PNs. The timing of disconnection and reconnection, trains passed, and detentions etc. shall be recorded in ‗Disconnection and Reconnection‘ register.",
  },
]

const DisconnectionReconnectionPage = () => {
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
              <Unplug className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Disconnection and Reconnection (SR 3.51.6 & APP. XIII)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ol className="space-y-3 px-5 py-8 sm:px-10 sm:py-10">
            {points.map((item, index) => (
              <li
                key={item.num}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.04 * (index + 1)}s both` }}
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {item.num}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </div>

                {'groups' in item && item.groups ? (
                  <ul className="mt-3 space-y-2.5 pl-0 sm:pl-12">
                    {item.groups.map((group) => (
                      <li
                        key={group.label}
                        className="flex gap-3 rounded-xl border border-slate-600/30 bg-slate-950/40 p-3.5 ring-1 ring-white/3"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                          ✓
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          <span className="font-semibold text-amber-100/90">{group.label}:</span>{' '}
                          {group.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
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

export default DisconnectionReconnectionPage
