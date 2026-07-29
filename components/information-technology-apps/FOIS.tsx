import React from 'react'

const FOIS_FEATURE_LIST_ITEMS = [
  'Apart from monitoring the movement of freight trains, the system calculates freight and other charges based on complex rules of business and generates the Railway Receipt , the bill payable by the shipper.',
  'Today electronic collection of freight has reached an astounding figure of more than Rs 500 crores per day.',
  'The system has the capability of tracking and tracing consignments and publication of information to the end users.',
  'Electronic Registration of Demand is also now a part of FOIS which brings convenience, speed and ease to customers through online registering of indents for Rakes and Wagons.',
  'To bring in greater transparency, Indian Railways have begun automatic allotment of rakes to customers for select commodities based on priority rules, operational restrictions, and commercial agreements.',
  'Services are provided to major customers by integrating FOIS with their legacy systems.',
  'It is capable of keeping record of asset ownership and maintenance, which is now being integrated to an SAP based asset maintenance management system.',
  'Most importantly, it also provides KPIs dashboards, real-time tracking of freight assets through GIS and generates a number of performance reports for terminals, train movements, asset use, financial statements and their trends over time that have been used for bringing about systemic improvements.',
] as const

const FOIS = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-cyan-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(34,211,238,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-cyan-100 via-sky-100 to-blue-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Freight Operation Information System (FOIS)
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-cyan-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-cyan-500/10 backdrop-blur-md sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-cyan-50 sm:text-2xl">Introduction</h2>
          <ul className="mt-6 list-none space-y-3.5 p-0">
            {[
              'The Indian Railways carries nearly 1500 million tonnes of freight in a year.',
              'This translates to about 6000 freight trains daily.',
              'Freight trains bring two thirds of the Indian Railway revenues and are referred to as the bread earners for the Railways.',
              'The major commodities carried by Indian Railways are Coal, Iron Ore, Foodgrains, Iron & Steel, Cement, Petroleum products, Fertilizer and Containerized Traffic.',
              'There are specialized wagons to handle the transportation needs of the different types of commodities.',
              'Unlike passenger carrying trains, freight trains do not run to a fixed schedule and thus making freight operations a highly information intensive activity.',
              'Based on this information managers make allocation decisions continually to dynamically optimize utilization of resources like wagons, locomotives, crew and paths on the network.',
              'Real time information allows good decision making and thus ensures high levels of mobility within the system.',
              'The Freight Operations Information System (FOIS) was the first project which CRIS embarked upon.',
              'In fact the creation of CRIS is a by product of this effort in the mid eighties.',
              'FOIS began as an application to track and monitor the movement of wagons, locomotives and unit trains.',
              'Now it is a complete management module for freight trains handling the billing and revenue collections as well.',
              'It has played a major role in the improved wagon productivity on Indian Railways and the objective is to use the information to further improve productivity, customer service and thus meet the needs of a rapidly growing economy.',
            ].map((text) => (
              <li
                key={text}
                className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3.5 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5 sm:text-[1.05rem] sm:leading-[1.8]"
              >
                <span
                  className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/75 ring-2 ring-cyan-400/15"
                  aria-hidden
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">Features</h2>
          <ul className="mt-6 list-none space-y-3.5 p-0">
            {FOIS_FEATURE_LIST_ITEMS.map((text) => (
              <li
                key={text}
                className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-3.5 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5 sm:text-[1.05rem] sm:leading-[1.8]"
              >
                <span
                  className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/75 ring-2 ring-sky-400/15"
                  aria-hidden
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="mt-8 rounded-2xl border border-teal-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-teal-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-teal-100 sm:text-2xl">FOISMapView- GIS Interface</h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            FOISMapView- Indian Railways is a complex rail network spread across the country with phenomenal growth in
            volumes of traffic as well as continuous augmentation of infrastructure and network. It becomes imperative
            to leverage the enhanced analytical tools available with us for improved operations, monitoring of freight
            trains and optimization of rolling stock. FOIS has hither to been helping its stake holders monitor the
            freight business through MIS database represented in forms of data tables. FOISMapView - A GIS based
            monitoring and management tool has been designed and developed in CRIS which provides layered views of
            freight trains on Indian Railways network which can help plan the traffic flows and optimize freight
            operations. The FOISMapView has been designed to cater to Divisional, Zonal and Board levels of management
            for improved freight operations. It provides Geo-Spatial view of freight train performances, some of which
            are:
          </p>

          <ul className="mt-6 space-y-3">
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Position of all freight trains on IR Network.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Movement of freight trains from one zone/division to another zone/division across IR.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Position of Rakes on the network detailing commodity wise loading.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Position of all freight stock on IR - both loaded and empty on the network.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Monitor Inward/ Expected traffic flow at Interchange points along with real time monitoring of forecast
              for day against actual interchange.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Indicates new traffic O-Ds captured over IR network.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Indicates Rakes detaining beyond permissible free time on the network.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Loading trends of major commodities is available identifying the loading performances of terminals and
              their O-D on the network.
            </li>
            <li className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-base leading-relaxed text-slate-200/95 shadow-sm shadow-black/10 sm:px-5">
              Section wise speed performance of freight trains across the network which is updated on real time basis.
              This is done by making use of real time sectional running data captured through Control Office
              Application and comparing it with the historical freight running data to work out the level of
              performance in the section on real time basis.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default FOIS