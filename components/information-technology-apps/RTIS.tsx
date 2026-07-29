import React from 'react'

const h = '\u2011'
const en = '\u2013'
const em = '\u2014'

const RTIS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-blue-950/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-blue-100 via-sky-100 to-cyan-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Real Time Information System (RTIS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-sky-500/45 to-transparent" />
        </header>

        <article className="rounded-2xl border border-sky-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-sky-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            {`The Real Time Train Information System (RTIS) is Indian Railways' satellite${h} and GPS${h}based system for automatic, continuous tracking of trains, developed by CRIS in collaboration with ISRO. It feeds live train${h}movement data directly into the Control Office Application (COA) and National Train Enquiry System (NTES), improving train control and the accuracy of information given to passengers.`}
          </p>
        </article>

        <div className="mt-8 space-y-8">
          <section className="rounded-2xl border border-blue-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-blue-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-blue-100 sm:text-2xl">Purpose and objectives</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`RTIS was sanctioned to solve a long${h}standing problem: automatic acquisition of train${h}movement data (arrivals, departures, run${h}throughs and mid${h}section positions) without relying on manual charting and phone calls from stations.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Its goals are to improve operational efficiency and punctuality through better train${h}control information, and to enhance passenger information quality by providing near real${h}time running status.`}
            </p>
          </section>

          <section className="rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">How RTIS works</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`A dedicated loco${h}mounted device called the Indian Rail Navigator (IRN) determines the train's position and speed using the GPS Aided Geo${h}Augmented Navigation (GAGAN) system and other GNSS signals.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The outdoor unit on the loco rooftop houses antennas and modules for Mobile Satellite Service (MSS), GPS and 4G/3G data; the indoor unit in the cab includes the display, processing engine and communication modules.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Using predefined geo${h}fenced station coordinates and speed logic, the onboard software derives events such as arrival, departure, run${h}through and unscheduled stoppages, plus mid${h}section updates.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`These events and periodic position updates (typically every 30 seconds in mid${h}section) are sent via ISRO's S${h}band MSS and commercial 4G/3G networks to a Central Location Server at the CRIS data centre.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`The Central Location Server processes the data and forwards it to COA, where control charts are plotted automatically; COA in turn feeds NTES and related systems for passenger${h}facing information.`}
            </p>
          </section>

          <section className="rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">Operational benefits</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`For train controllers, RTIS enables much closer tracking of train location and speed across the section without manual intervention, giving a more accurate basis for regulating traffic and managing crossings, pathing and turnarounds.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Automatic plotting of control charts end${h}to${h}end reduces workload in control offices and eliminates errors and delays associated with manual charting by staff.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Real${h}time train running information helps optimise crew booking and utilisation, as the CMS/crew lobbies and control offices see more precise arrival predictions for incoming trains.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`For passengers, RTIS data${em}integrated into NTES, enquiry apps and websites${em}means more reliable ETA/ETD and current${h}location messages, helping them plan station arrival better.`}
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-emerald-100 sm:text-2xl">Roll{h}out status</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`After successful trials on Rajdhani corridors (New Delhi${en}Guwahati and New Delhi${en}Mumbai), RTIS was approved for phased roll${h}out across Indian Railways.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Phase${h}1 covered about 2,700 electric locomotives in 21 electric loco sheds, primarily on high${h}density routes.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Under Phase${h}2, around 6,000 additional electric locomotives in about 50 loco sheds are to be equipped using ISRO's Satcom hub, and currently GPS feeds from roughly 6,500 locomotives (RTIS and the older REMMLOT devices combined) are being used for automatic charting and NTES information.`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              {`Zonal railways like Eastern Railway report dozens to hundreds of locomotives already fitted with RTIS, with the system credited for improved punctuality monitoring, more accurate real${h}time passenger information, and better operational planning.`}
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default RTIS
