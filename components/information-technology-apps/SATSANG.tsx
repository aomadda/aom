import React from 'react'

const h = '\u2011'
const ld = '\u201c'
const rd = '\u201d'

const SATSANG = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(100,116,139,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-slate-100 via-sky-100 to-cyan-100 bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent sm:text-3xl md:text-[2.1rem]">
            Software Aided Train Scheduling And Network Governance (SATSANG)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-sm bg-linear-to-r from-transparent via-slate-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-slate-500/30 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-slate-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            {`Software Aided Train Scheduling And Network Governance (SATSANG or SATSaNG) is a decision${h}support system being developed by CRIS to help Indian Railways design and rationalise the all${h}India working timetable using computer${h}aided simulation and optimisation. It is meant to assist timetable planners in creating robust, conflict${h}free schedules that use network capacity and resources more efficiently while maintaining passenger convenience.`}
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <section className="rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">Purpose and background</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Creating a timetable on a network as large and busy as Indian Railways is a complex resource${h}allocation problem, involving track capacity, rolling stock, locomotives and crew, all of which must be uniquely assigned so there are no conflicts at any point of time.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Traditionally, zonal planners prepare timetables largely manually, then reconcile them inter${h}zonally to form the all${h}India timetable; SATSANG was conceived to provide software tools to support and systematise this planning process.`}
            </p>
          </section>

          <section className="rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">Core functions and capabilities</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`SATSANG provides a scheduling module that can model the network and simulate train movements under different timetable proposals, taking into account existing traffic, resource constraints and infrastructure.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The system performs impact analysis of train delays and other perturbations on the timetable, helping planners understand how robust a proposed schedule is and where conflicts or knock${h}on delays are likely to occur.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`A ${ld}Publish Report and Exchange Supporting System${rd} (PRESS) module is designed to output the finalised timetable to downstream systems like COA, ICMS, PRS, NTES and CMS, as well as for publication in hard copy.`}
            </p>
          </section>

          <section className="rounded-2xl border border-indigo-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-indigo-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-indigo-100 sm:text-2xl">Technology and architecture</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`SATSANG is being developed in${h}house by CRIS using Microsoft technologies such as Visual Studio (C#), WPF and the MVVM pattern for a rich graphical interface, with Oracle 11g as the centralised database.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The application follows a three${h}layer architecture and is hosted on terminal servers in the CRIS data centre in high${h}availability mode, so that timetable planners across the network can access the tool centrally.`}
            </p>
          </section>

          <section className="rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">Role in network governance and mobility</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`By systematically detecting timetable conflicts and capacity bottlenecks, SATSANG supports ${ld}network governance${rd} in the sense of enabling Railway Board and zonal planners to see where sections are saturated and how new trains or speed${h}ups will affect the rest of the network.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`CRIS presentations link SATSANG to broader IT${h}driven initiatives for train${h}timetable optimisation, route capacity enhancement, and better prediction of delays, using simulation and analytics as key tools for decision${h}making.`}
            </p>
          </section>

          <section className="rounded-2xl border border-teal-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-teal-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-teal-100 sm:text-2xl">Implementation status and use</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`News reports from the early 2010s describe SATSANG as the ${ld}new timetable software${rd} being introduced to make the timetable more robust with a focus on punctuality and passenger benefit, by factoring in delay${h}impact and resource constraints.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Later references in technical and audit documents mention SATSANG simulations being used, for example, to count thousands of timetable conflicts on sections of Prayagraj division, indicating that the tool is being applied at least in some corridors to support timetable rationalisation.`}
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default SATSANG
