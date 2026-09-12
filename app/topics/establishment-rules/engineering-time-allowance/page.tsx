import React from 'react'

const numberBadgeClass =
  'inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-2xl border border-amber-400/50 bg-linear-to-br from-amber-400/25 via-amber-500/14 to-amber-950/30 px-3 text-base font-bold tabular-nums text-amber-50 shadow-lg shadow-amber-950/25 ring-1 ring-white/15 sm:h-11 sm:min-w-11 sm:text-lg'

const letterMarkClass =
  'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-400/45 bg-linear-to-br from-amber-400/22 to-amber-700/15 text-sm font-bold tabular-nums text-amber-50 shadow-md shadow-black/20 ring-1 ring-white/10 sm:h-10 sm:w-10 sm:text-[15px]'

const letterRowClass =
  'flex gap-3.5 rounded-2xl border border-slate-600/45 bg-linear-to-r from-slate-900/45 to-slate-900/20 px-3.5 py-3.5 ring-1 ring-white/[0.06] sm:gap-4 sm:px-4 sm:py-4'

const EngineeringTimeAllowance = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/65">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_42%_at_50%_-12%,rgba(245,158,11,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,40rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className="relative overflow-hidden rounded-2xl border border-slate-600/55 bg-slate-800/40 shadow-2xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-8 bottom-20 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />

          <header className="relative border-b border-slate-600/40 bg-linear-to-br from-slate-800/75 to-slate-900/55 px-5 py-8 text-center sm:px-8 sm:py-10">
            <h1 className="text-balance text-2xl font-extrabold tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
              Engineering Time Allowance (ETA)
            </h1>
          </header>

          <div className="relative space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <div className="rounded-2xl border border-amber-500/25 bg-linear-to-br from-amber-500/10 via-slate-900/40 to-transparent px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[15px] leading-relaxed text-slate-200 sm:text-base sm:leading-[1.75]">
                <span className="font-semibold text-amber-200">Sub: </span>
                Provision of Engineering Time Allowance(ETA) for Faster execution of capacity
                enhancement/asset maintenance works.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <p className="rounded-2xl border border-slate-600/45 bg-slate-900/40 px-4 py-3.5 text-[15px] leading-relaxed text-slate-300 ring-1 ring-white/[0.06] sm:px-5">
                Board&apos;s letter of even no. dated 16.06.2022.
              </p>
              <p className="rounded-2xl border border-slate-600/45 bg-slate-900/40 px-4 py-3.5 text-[15px] leading-relaxed text-slate-300 ring-1 ring-white/[0.06] sm:px-5 sm:text-right">
                New Delhi, date .08.2023
              </p>
            </div>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <div className="relative space-y-5 px-5 py-7 sm:px-8 sm:py-9">
            <section className={letterRowClass}>
              <span className={numberBadgeClass}>1</span>
              <p className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                With the increase in axle load of trains and sectional speed, the maintenance efforts
                required for proper upkeep of track in safe condition and for providing proper riding
                comfort to coaching trains, have increased substantially. Also, the time loss due to
                same speed restriction over a patch has increased with the increase in speed and
                related deceleration &amp; acceleration time. With the universalization of 130 kmph,
                more and more activities which were earlier being carried out without speed
                restriction, are requiring speed restriction, thereby increasing the requirement of
                Engineering Time Allowance (ETA).
              </p>
            </section>

            <section className={letterRowClass}>
              <span className={numberBadgeClass}>2</span>
              <p className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                Due to increased thrust on infrastructural projects and better availability of funds,
                increased targets for commissioning of new line/gauge conversion/doubling have
                been kept. As a result, the requirement of ETA and traffic blocks has increased
                substantially. Therefore, efforts should be made to reduce Pre-NINI duration by
                deployment of adequate Construction/Open line staff/officers. Similarly, duraion of
                speed restrictions imposed be brought down by advance planning and arrangement
                of ballast, manpower, track machines, blocks etc.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-slate-600/45 bg-linear-to-r from-slate-900/45 to-slate-900/20 p-3.5 ring-1 ring-white/[0.06] sm:p-4">
              <div className="flex gap-3.5 sm:gap-4">
                <span className={numberBadgeClass}>3</span>
                <div className="min-w-0 flex-1 space-y-4 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                  <p>
                    Number of punctuality loss cases due to extra time consumed by speed restrictions
                    have been reported over Zonal Railways, due to inadequate ETA with respect to the
                    requirement for maintenance and infrastructure works. The matter has been further
                    deliberated in Board and it has been decided that problematic sections where extra
                    ETA is required should be jointly identified by PCE and PCOM of each Zonal
                    Railway and details of section-wise ETA required should be sent to Board within a
                    week&apos;s time.
                  </p>
                  <p>
                    The instructions issued with respect to Engineering Time Allowance vide Board&apos;s
                    letter under reference above are modified as under:
                  </p>
                </div>
              </div>

              <ul className="list-none space-y-3 sm:space-y-3.5">
                <li className={letterRowClass}>
                  <span className={letterMarkClass}>a</span>
                  <div className="min-w-0 flex-1 space-y-3 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                    <p>GMs are authorized to provide ETA required for construction and CTR works</p>
                    <ul className="list-none space-y-3">
                      <li className="flex gap-3">
                        <span className={letterMarkClass}>i</span>
                        <span>By utilizing traffic recovery time.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className={letterMarkClass}>ii</span>
                        <span>
                          By reducing watering time at stations where Quick Watering System is in
                          place.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={letterRowClass}>
                  <span className={letterMarkClass}>b</span>
                  <span className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                    ETA @ 8 minutes per 100 kms shall be provided in sections having speed of 130
                    kmph or above.
                  </span>
                </li>
                <li className={letterRowClass}>
                  <span className={letterMarkClass}>c</span>
                  <span className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                    ETA @6 minutes per 100 kms shall be provided in sections having speed less than
                    130 kmph.
                  </span>
                </li>
                <li className={letterRowClass}>
                  <span className={letterMarkClass}>d</span>
                  <span className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                    In addition to the above, 50% of the time saved due to removal of PSRs will be
                    utilised as ETA in the respective sections. Accordingly. 50% of the saving
                    achieved in the past one year on account of PSR removal, may be utilized for
                    enhancing ETAs in respective sections, on need basis.
                  </span>
                </li>
              </ul>
            </section>

            <section className={letterRowClass}>
              <span className={numberBadgeClass}>4</span>
              <p className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                Increase in sectional speeds on existing sections warrants imposition of Speed
                Restriction on the curves which do not have adequate speed potential. Considering
                this, the caution imposed on this account should be treated as PSR, however, works
                should be planned to ease them out at the earliest.
              </p>
            </section>

            <div className="space-y-3 rounded-2xl border border-amber-500/20 bg-linear-to-br from-amber-500/8 via-slate-900/30 to-transparent px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                Necessary action may be taken by the Zonal Railways in this regard.
              </p>
              <p className="text-[15px] leading-relaxed text-slate-300 sm:leading-[1.75]">
                This has the approval of Board(MI &amp; MOBD).
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default EngineeringTimeAllowance
