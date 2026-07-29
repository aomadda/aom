import React from 'react'

const RMS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(52,211,153,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Railway Management System (RMS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-emerald-500/45 to-transparent" />
        </header>

        <article className="rounded-2xl border border-emerald-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-emerald-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            The Rake Management System (RMS) is a key subsystem of the Freight Operations Information System (FOIS) in
            Indian Railways, designed for real-time tracking and management of freight rakes (wagon sets) and
            locomotives. It optimizes asset utilization, freight movement control, and decision-making by providing
            live data on wagon locations, train arrivals, load diversions, and rake linking.
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <article className="rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-emerald-100 sm:text-2xl">Core Functions</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              RMS handles operational tasks like rake routing to minimize empty movements, platform/track allocation,
              crew constraints, and maintenance scheduling (e.g., weekly or mid-life rehab). It integrates with tools
              for train arrivals, load changes, and yard activities, using a 3-tier client-server setup with
              centralized databases across the network.
            </p>
          </article>

          <article className="rounded-2xl border border-teal-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-teal-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-teal-100 sm:text-2xl">Development Phases</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              Implemented in phases, RMS started with bulk asset analysis before capturing individual wagon data for
              nationwide real-time visibility. This supports suburban and freight services, with ongoing enhancements
              for Mumbai&apos;s Central and Western Railways.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-amber-100 sm:text-2xl">Benefits and Limitations</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              Key advantages include better rake life extension, mobility gains, and manager tools for optimal
              deployment. Shortcomings involve interface gaps with other systems, though future tech integrations aim
              to address them.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default RMS
