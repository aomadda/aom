import React from 'react'

const h = '\u2011'
const ld = '\u201c'
const rd = '\u201d'

const COIS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-indigo-950/50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(129,140,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-indigo-100 via-violet-100 to-fuchsia-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Coaching Operations Information System (COIS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-indigo-500/45 to-transparent" />
        </header>

        <article className="rounded-2xl border border-indigo-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-indigo-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            {`Coaching Operations Information System (COIS) is the coaching${h}stock counterpart of FOIS: it is an ICMS module that captures real${h}time events on passenger coaches and rakes and generates management information for planning, operating, and monitoring coaching services on Indian Railways. It gives operating staff and control offices a current picture of where each rake/coach is, how it is formed, and how it is running, so that coaching stock and timetabled services can be managed more efficiently.`}
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <article className="rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">Place within ICMS</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`COIS is one of the main modules of the Integrated Coaching Management System (ICMS), alongside the Punctuality Module (PAM), master${h}data (DATA) and the Coaching Maintenance Module (CMM).`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`ICMS as a whole computerises coaching train running, coaching stock management and time${h}tabling, with COIS specifically focusing on operational use of rakes and coaches.`}
            </p>
          </article>

          <article className="rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 sm:text-2xl">Core functions of COIS</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`COIS ${ld}captures events on coaches/rakes${rd} (arrivals, departures, attachments, detachments, rake examination, feedback, etc.) mainly at station and coaching${h}yard level, using these to build a live operating picture without separate batch ${ld}data feeding.${rd}`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The COIS data${h}entry sub${h}module at zonal HQ maintains master data such as rake links, yard infrastructure (lines, pits, platforms), coach master, and train schedules, which COIS then uses to validate and interpret field events.`}
            </p>
          </article>

          <article className="rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">
              Information and reports generated
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`From the captured events and master data, COIS produces reports like yard stock position (line${h}wise stock), vehicle guidance, rake availability, and other coaching${h}stock status reports for station, divisional, zonal and Railway Board levels.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`ICMS documentation notes that COIS provides detailed, near real${h}time information for planning, executing and monitoring passenger services, with minimal manual input once plans and links are set up.`}
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-emerald-100 sm:text-2xl">Operational role and benefits</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Together with PAM, COIS supports better management of coaching stock utilisation, punctuality, and adherence to rake links, by giving control offices and operating staff a common, up${h}to${h}date database instead of disparate paper registers and local charts.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Railway operations references highlight COIS (for coaching) and FOIS (for freight) as key computerised systems that have significantly improved the ability of Indian Railways to track and manage movements and schedules of rolling stock compared with pre${h}computerisation practices.`}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default COIS
