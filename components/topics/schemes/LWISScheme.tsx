import React from 'react'

const LWISScheme = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-indigo-950/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(99,102,241,0.14),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,40rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-indigo-400/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article
          className="relative overflow-hidden rounded-2xl border border-slate-600/55 bg-slate-800/40 shadow-2xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm"
          aria-label="Freight Marketing Circular LWIS"
        >
          <div className="pointer-events-none absolute -right-20 top-0 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-24 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative border-b border-slate-600/40 bg-linear-to-br from-slate-800/80 to-slate-900/60 px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200/90 sm:text-xs">
              FREIGHT MARKETING CIRCULAR NO. 07 OF 2008
            </p>
            <p className="mt-4 text-center text-sm font-medium leading-snug text-slate-100 sm:text-base">
              GOVERNMENT OF INDIA MINISTRY OF RAILWAYS (RAILWAY BOARD)
            </p>
            <div className="mt-6 flex flex-col gap-3 border-t border-slate-600/35 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <p className="text-sm font-medium text-indigo-100/95 sm:text-[15px]">
                No. 2008/TC (FM)/ 4/5(LWIS)
              </p>
              <p className="text-right text-sm text-slate-300 sm:whitespace-nowrap sm:text-[15px]">
                New Delhi, Dated:15.04.2008
              </p>
            </div>
          </div>

          <div className="space-y-6 px-5 py-7 sm:px-8 sm:py-9">
            <div className="rounded-xl border border-slate-600/40 bg-slate-900/35 px-4 py-3.5 sm:px-5">
              <p className="text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                General Managers All Indian Railways.
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-indigo-400/70 bg-indigo-950/25 px-4 py-4 sm:px-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200 sm:text-[15px]">
                Sub: LIBERALIZED WAGON INVESTMENT SCHEME (LWIS)
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[15px] sm:leading-[1.7]">
              <p>
                Ministry of Railways has formulated a new Liberalized Wagon Investment Scheme (LWIS). The details of the scheme are enclosed herewith. This scheme will come into force with immediate effect.
              </p>
              <p>
                This issues with the concurrence of Finance Directorate of Ministry of Railways.
              </p>
              <p>
                The receipt of this letter may please be acknowledged.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-slate-600/40 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm text-slate-400 sm:text-[15px]">DA. As above ( 9 pages)</p>
              <div className="text-right text-sm text-slate-200 sm:text-[15px]">
                <p className="font-medium text-slate-100">(Sanjay Goel)</p>
                <p className="mt-1 text-slate-300">Director Freight Marketing</p>
              </div>
            </div>
          </div>
        </article>
        
      </div>
    </div>
  )
}

export default LWISScheme
