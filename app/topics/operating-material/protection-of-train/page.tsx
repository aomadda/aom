'use client'

import React from 'react'
import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'

type BulletSection = {
  title: string
  items: string[]
  note?: string
}

type TextSection = {
  title: string
  text: string
}

const singleLine: BulletSection = {
  title: 'On Single Line:',
  items: [
    'The Guard, either himself or competent person, go back to protect the train.',
    'The person going back to protect the train shall, continuously, show danger hand signal and place one detonator at 400/600 M and 3 detonators 10 M apart 800/1200 M on MG/BG from the train.',
    'After protecting, guard or competent person continue to show danger hand signal until he is re-called.',
    'The Loco Pilot or Asst. Loco Pilot shall show danger signal to the front and protect the train in front in manner prescribed in 2b.',
  ],
  note: 'Above procedure may be followed during TSL working on double line or when relief engine has been asked on double line.',
}

const doubleLine: BulletSection = {
  title: 'On Double Line Section:',
  items: [
    'The Loco Pilot or Asst. Loco Pilot proceed to protect the adjacent line in front.',
    'Loco Pilot or Asst. Loco Pilot shall place one detonator at 400/600 M and 3 detonators NLT 800/1200 M 10 M apart on MG/BG from train.',
    'Guard shall ensure protection of adjacent line in front and then send a competent person if available to protect the train in rear and shall himself proceed ahead to assist.',
    "Guard shall after ensuring go back to protect the train in the rear in the manner prescribed in 'b' if he has not already sent competent person.",
    'If it is not known whether the adjacent line is obstructed or not, LP shall protect adjacent line and Guard shall proceed to engine to check whether adjacent line is fouling or not.',
    'If adjacent line is obstructed, the Guard shall assist and ensure adjacent line protection. If not obstructed, the Guard shall after consultation with LP go back to protect the train in rear.',
  ],
}

const twinSingleLine: BulletSection = {
  title: 'Twin Single Line:',
  items: [
    'The Loco Pilot shall protect the adjacent line in front, guard shall protect the adjacent line in rear.',
    'Only after protecting in the rear, guard shall proceed ahead to assist and ensure to protect the line in front.',
    'Protect the same line in rear.',
  ],
}

const commonPoints: BulletSection = {
  title: 'Common Points:',
  items: [
    'When guard/the person gone for protection, when called back he shall leave 3 detonators and pick up intermediate detonator.',
    'If the train is approaching, place the detonators as far away from the train as possible.',
    'If there is a banking engine, banking engine Loco Pilot shall arrange protection in rear.',
    'When the train is ready to proceed, Loco Pilot shall recall railway servant protecting the train by sounding continuous whistle.',
    'When the train goes forward, Loco Pilot shall stop short and pick up 3 detonators placed in front.',
    'In the case of train without guard, the duties of guard shall devolve on Loco Pilot.',
    'In the event of disability of the Loco Pilot, the duties of Loco Pilot shall devolve on guard.',
  ],
}

const autoIntro =
  'When a train is stopped in an Automatic block signalling section, the Guard shall immediately exhibit a Stop hand signal towards the rear and check up that the tail board or tail light is correctly exhibited.'

const autoSections: TextSection[] = [
  {
    title: 'Single Line:',
    text: 'LP shall protect the train in front as per G.R./S.R. 6.03 and Guard shall protect in rear by placing one detonator at 90 m and two detonators at 180 m, 10 m apart as per G.R./S.R. 9.10.',
  },
  {
    title: 'Double Line:',
    text: 'The Guard shall first ensure the protection of adjacent line in front by the LP as per G.R. 6.03 and protect same line in rear by placing one detonator at 90 m and 10 m apart two detonators at 180 m from the train.',
  },
]

const extraSections: TextSection[] = [
  {
    title: 'Protection on Double Line during TSL Working on Wrong Line:',
    text: 'The protection shall be done as per Rule 6.03 by the LP/ALP in the front and in rear by Guard duly placing one detonator at 90 m and 10 m apart two detonators at 180 m from the train.',
  },
  {
    title: 'Protection on Double Line during TSL Working on Right Line:',
    text: 'The protection in front shall be done as per G.R. 6.03 by the LP/ALP and in rear by Guard shall first ensure the protection of adjacent line in front by the LP as per G.R. 6.03 and protect same line in rear by placing one detonator at 90 m and 10 m apart two detonators at 180 m from the train.',
  },
  {
    title: 'Protection when Relief Engine is Sought:',
    text: 'Relief engine is expected from advance station, during day time protection is not required but during night time protection shall be done.',
  },
]

function BulletBlock({ section }: { section: BulletSection }) {
  return (
    <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h3 className="text-base font-semibold text-amber-100 sm:text-lg">{section.title}</h3>
      <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4">
        {section.items.map((text) => (
          <li key={text} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" />
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
          </li>
        ))}
      </ul>
      {section.note ? (
        <p className="mt-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{section.note}</p>
      ) : null}
    </div>
  )
}

function TextBlock({ section }: { section: TextSection }) {
  return (
    <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
      <h3 className="text-base font-semibold text-amber-100 sm:text-lg">{section.title}</h3>
      <p className="mt-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{section.text}</p>
    </div>
  )
}

const ProtectionOfTrainPage = () => {
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
              <ShieldAlert className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>

            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              GR 6.03 Protection (Is it Required for SM Material?)
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <div className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                1
              </span>
              <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                When a train is stopped between stations on account of accident, failure or other
                cause and cannot proceed further, Loco Pilot shall apprise the guard of the fact by
                sounding the four short whistle repeatedly and exchange of danger signal with him.
                The guard shall fix red flag or reverse the side lights to show red towards the
                engine.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                  2
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  The Guard and the Loco Pilot shall take the following action:
                </p>
              </div>

              <div className="mt-4 space-y-4 sm:ml-12">
                <BulletBlock section={singleLine} />
                <BulletBlock section={doubleLine} />
                <BulletBlock section={twinSingleLine} />
                <BulletBlock section={commonPoints} />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h2 className="text-base font-semibold text-amber-100 sm:text-lg">
                Protection in Automatic Block Territory:
              </h2>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                {autoIntro}
              </p>
              <div className="mt-4 space-y-3">
                {autoSections.map((section) => (
                  <TextBlock key={section.title} section={section} />
                ))}
              </div>
            </div>

            {extraSections.map((section) => (
              <TextBlock key={section.title} section={section} />
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

export default ProtectionOfTrainPage
