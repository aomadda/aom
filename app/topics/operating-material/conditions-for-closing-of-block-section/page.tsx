import React from 'react'

const ConditionsForClosingOfBlockSectionPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default ConditionsForClosingOfBlockSectionPage