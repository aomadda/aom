import React from 'react'

const VehiclesRunningAwayIntoTheBlockSectionPage = () => {
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
  return (
    <div>
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
    </div>
  )
}

export default VehiclesRunningAwayIntoTheBlockSectionPage