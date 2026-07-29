import React from 'react'

const h = '\u2011'
const en = '\u2013'
const em = '\u2014'
const ld = '\u201c'
const rd = '\u201d'

const TMS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-teal-950/45 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(45,212,191,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-teal-100 via-cyan-100 to-sky-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Terminal Management System (TMS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-teal-500/45 to-transparent" />
        </header>

        <article className="rounded-2xl border border-teal-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-teal-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            {`The Terminal Management System (TMS) is a vital module within Indian Railways' Freight Operations Information System (FOIS), focusing on commercial aspects of freight handling at terminals.`}
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <article className="rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">Key Functions</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`TMS manages the full cycle of goods traffic, from booking and weighing to delivery and online Railway Receipts (RRs) issuance, enabling electronic payments and reducing paperwork. It integrates with weighbridges and other FOIS components like RMS for seamless rake placement, unloading, and reloading at terminals.`}
            </p>
          </article>

          <article className="rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">Objectives and Benefits</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Designed to cut wagon turnaround time by minimizing detention between unloading and reloading, TMS boosts efficiency and wagon utilization across freight terminals. It supports real-time transactions nationwide, with printed RRs handed to customers and future upgrades for inter-system communication.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`TMS has improved freight efficiency mainly by cutting paperwork and terminal detentions, giving divisions better visibility over rakes at terminals, and supporting faster commercial processing; network${h}wide wagon turn${h}round has fallen into the 4${en}6 day band in the FOIS/TMS era, though this improvement also reflects other operational and infrastructure changes. The actual gains vary by division and depend on how actively local management uses FOIS/TMS data to attack terminal bottlenecks.`}
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-indigo-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-indigo-100 sm:text-2xl">
              {`Intended impact on wagon turnaround`}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`When TMS was sanctioned, the Railway Board explicitly stated that it was being implemented ${ld}to improve wagon turnaround by reducing the gap between unloading and loading of wagons${rd} and to ${ld}almost eliminate detention of wagons at terminal stations.${rd}`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`At the same time, the FOIS rake${h}monitoring module was deployed at 235 locations, and the combined FOIS (RMS+TMS) package was expected to raise wagon productivity by giving operating officers a better real${h}time picture of rake movements and terminal status.`}
            </p>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">
              {`How TMS improves terminal${h}level efficiency`}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`TMS computerises the full commercial cycle at goods sheds${em}booking, weighment, Railway Receipt (RR) generation, delivery and station accounting${em}so that consignment processing is done online instead of through manual registers; this reduces the time wagons wait at terminals for paperwork and billing to be completed.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`System${h}generated RRs and features like online freight payment and freight${h}outstanding confirmation shorten the time between loading and release of wagons by eliminating multiple manual checks and cash${h}handling delays.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`TMS integrates with FOIS demand registration and wagon${h}demand modules, giving customers and divisions an online channel to register demand for wagons and improving transparency in allotment, which helps divisions match rake supply to demand more efficiently.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`FOIS presentations on TMS list benefits such as invoice${h}based consignment tracking, quick settlement of claims, and minimisation of ${ld}unconnected${rd} wagons, all of which reduce unproductive wagon movements and simplify tracing and releasing detained stock.`}
            </p>
          </article>

          <article className="rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 sm:text-2xl">
              {`Support tools for divisional planning`}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`FOIS has added decision${h}support tools on top of TMS/RMS, such as the GIS${h}based FOIS MapView and the Terminal Pipeline Management System (TPMS), which use historical handling times, terminal capacities and transit times to predict congestion at unloading terminals from any source division.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`These tools allow divisional control offices to see where terminals are likely to choke and to regulate loading, divert rakes or adjust schedules proactively, thereby cutting avoidable terminal detention and helping maintain better wagon turn${h}round.`}
            </p>
          </article>

          <article className="rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-amber-100 sm:text-2xl">
              {`Evidence from wagon turn${h}round indicators`}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`FOIS (RMS+TMS) was prototyped on Northern Railway around 2000 and later rolled out to all zones as a decision${h}support system for better scheduling, quick turnaround of rakes, and real${h}time consignment tracking.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Broad${h}gauge wagon turn${h}round (WTR) for Indian Railways as a whole has fallen from around 11 days in 1950${en}51 to about 5.13 days by 2013${en}14, reflecting decades of improvements in mobility, loading/unloading practices and detention control.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`A case study of the mid${h}2000s (an early FOIS/TMS period) shows WTR improving from 6.4 days in 2004${en}05 to 6.1 days in 2005${en}06, with corresponding gains in wagon${h}kilometres per wagon per day and net tonne${h}km per wagon per day.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Recent Year Books report WTR around 4.7${en}5.1 days in 2022${en}23 and 2023${en}24, confirming that overall wagon cycle times are being held in a relatively efficient range despite rising traffic.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`These numbers show a clear long${h}term improvement in wagon productivity in the FOIS/TMS era, but they also capture the impact of parallel measures (infrastructure augmentation, higher speeds, policy changes, mechanised handling, etc.), so the improvement cannot be attributed to TMS alone.`}
            </p>
          </article>

          <article className="rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-rose-100 sm:text-2xl">
              {`Division${h}level experience and remaining bottlenecks`}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Zonal and divisional documents (for example, East Coast Railway's FOIS note) report that TMS is in use at all sanctioned terminals, that all rakes loaded are handled in TMS daily, and that customers can track consignments using the Freight Number Record (FNR) via SMS or online; this enhances customer responsiveness and allows local managers to see which rakes are stuck where.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`However, a nationwide performance audit on management of goods trains for 2008${en}13 found that in many sampled loading/unloading points, wagons still suffered average detentions exceeding 24 hours, pointing to persistent local issues such as slow loading practices, inadequate siding capacity, and under${h}use of FOIS/TMS information.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The same CAG review of FOIS highlighted that delays in real${h}time data entry and incomplete interfaces (e.g., between TMS and weighbridges or yard systems) meant that FOIS's potential for ${ld}global tracking in real time${rd} and rapid decision${h}making was not always fully realised at the divisional level.`}
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-emerald-100 sm:text-2xl">Overall assessment</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`TMS has clearly improved freight efficiency by digitalising goods${h}shed commercial work, enabling online RRs and payments, strengthening cargo visibility, and supporting better divisional planning through FOIS${h}based tools.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Network${h}level indicators such as WTR and wagon${h}km per wagon per day show significantly better wagon productivity in the FOIS/TMS era than in earlier decades, even though the gains are the combined effect of many initiatives.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`At the same time, audit findings on persistent terminal detentions show that real improvements in wagon turnaround depend on how rigorously each division uses TMS/FOIS information in day${h}to${h}day operations, plus local investments in handling capacity and process discipline.`}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default TMS
