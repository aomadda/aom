import React from 'react'

const objectiveItems = [
  '1. Optimum and effective utilization of crew by maintaining inventory of all crews at home stations and at out stations.',
  '2. Effective scheduling and assignment of train crew by receiving information of train call and depending upon the type of traction and sections to be covered, assign the most suitable crew.',
  '3. Manpower planning for ensuring availability of appropriate crew by monitoring road learning and training of crew to operate the locomotive of different traction and gauges.',
  '4. Schedule periodic rests of the crew based on total duty hours completed from the beginning of the fortnight.',
  '5. Serve as a tool for giving calls to crew in a most effective manner.',
  '6. Monitoring of training of staff due for promotion and refresher courses and also the staff whose competency certificate is due for renewal.',
  '7. Monitoring of the crew productivity by calculating total hours of duty worked, total kilometers earned by each staff',
  '8. Monitor 10 Hrs duty and HOER rules by providing prior information of the crew and past trend analysis of the sections.',
  '9. To server as a tool for controlling payment of the over time and kilometer allowance.',
  '10. Act as a tool for making the crew lobbies more or less paperless.',
] as const

const CMS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/35 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(251,191,36,0.10),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-amber-100 via-orange-100 to-rose-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Crew Management System (CMS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-amber-500/45 to-transparent" />
        </header>

        <article className="rounded-2xl border border-amber-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-amber-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            {`Crew management system is aimed at providing information regarding the crew at all times. It assist user in providing information regarding the presence of crew at home station or out station, maintain their status-wise records and assign crew to the trains. It shall also maintain information regarding the periodic and other rests, Road Learning, Traction Knowledge, Training Scheduling, PME, DAR actions etc.`}
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <section className="rounded-2xl border border-orange-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-orange-500/10 backdrop-blur-sm sm:p-8">
            <p className="text-base font-medium leading-relaxed text-amber-100/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The software Crew management system is being developed with the following objective: -`}
            </p>
            <ul className="mt-6 list-none space-y-3.5 p-0">
              {objectiveItems.map((text) => (
                <li
                  key={text}
                  className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3.5 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5 sm:text-[1.05rem] sm:leading-[1.8]"
                >
                  <span
                    className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/80 ring-2 ring-amber-400/15"
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-rose-100 sm:text-2xl">Objective</h2>
            <blockquote className="mt-6 border-l-4 border-amber-500/50 bg-slate-950/30 py-1 pl-5 pr-1 text-base italic leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`"Crew management system is aimed at providing information regarding the crew at all times. It assist user in providing information regarding the presence of crew at home station or out station, maintain their status-wise records and assign crew to the trains. It shall also maintain information regarding the periodic and other rests, Road Learning, Traction Knowledge, Training Scheduling, PME, DAR actions etc."`}
            </blockquote>
          </section>

          <section className="rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-amber-100 sm:text-2xl">CMS COVERAGE</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex flex-col gap-1 rounded-xl border border-white/8 bg-slate-950/30 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:px-5">
                <dt className="text-base font-medium text-amber-100/90">Loco Pilot -</dt>
                <dd className="text-base font-medium text-slate-100 sm:text-right">109702 +</dd>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-white/8 bg-slate-950/30 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:px-5">
                <dt className="text-base font-medium text-amber-100/90">Train Mangers -</dt>
                <dd className="text-base font-medium text-slate-100 sm:text-right">35274+</dd>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-white/8 bg-slate-950/30 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:px-5">
                <dt className="text-base font-medium text-amber-100/90">Active CMS Lobby-</dt>
                <dd className="text-base font-medium text-slate-100 sm:text-right">742+</dd>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-white/8 bg-slate-950/30 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:px-5">
                <dt className="text-base font-medium text-amber-100/90">Call Serve per Day -</dt>
                <dd className="text-base font-medium text-slate-100 sm:text-right">84822+</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </section>
  )
}

export default CMS
