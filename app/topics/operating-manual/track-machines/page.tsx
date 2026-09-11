import React from 'react'
import Link from 'next/link'
import { ChevronRight, Clock, Gauge, Hammer, Layers } from 'lucide-react'

type TrackMachine = {
  sno: number
  name: string
  purpose: string
  deliverables: string
  toFro: string
  setting: string
  working: string
  total: string
  output: string
  speedRestriction: string
}

const machines: TrackMachine[] = [
  {
    sno: 1,
    name: '09-3X',
    purpose: 'Plain Track Tamping',
    deliverables:
      'Corrects track geometry — alignment, twist, cross level, and longitudinal level — and packs ballast under sleepers. Packs three sleepers at a time.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '1.6 km',
    speedRestriction: 'Nil, except in summer with 50 kmph if not followed by DTS',
  },
  {
    sno: 2,
    name: 'CSM',
    purpose: 'Plain Track Tamping',
    deliverables: 'Same as 09-3X, but packs two sleepers at a time.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '1.2 km',
    speedRestriction: 'Same as 09-3X',
  },
  {
    sno: 3,
    name: 'UNO',
    purpose: 'Plain Track Tamping',
    deliverables: 'Same as 09-3X. Generally deployed at work site. Packs one sleeper at a time.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '0.5 km',
    speedRestriction: 'Same as 09-3X',
  },
  {
    sno: 4,
    name: 'DUO',
    purpose: 'Plain Track Tamping',
    deliverables: 'Plain track tamping machine.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '0.8 km',
    speedRestriction: 'Same as 09-3X',
  },
  {
    sno: 5,
    name: 'WST',
    purpose: 'Plain Track Tamping',
    deliverables: 'Same as 09-3X. Generally deployed at work site. Packs two sleepers at a time.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '0.8 km',
    speedRestriction: 'Same as 09-3X',
  },
  {
    sno: 6,
    name: 'BCM',
    purpose: 'Ballast screening of Plain & Turnout Track',
    deliverables:
      'Screens track ballast by removing muck, improving drainage and elasticity of track for safe and comfortable running.',
    toFro: '30 min (3 machines in block)',
    setting: '40 min',
    working: '2:50',
    total: '4:00',
    output: '0.2 km',
    speedRestriction:
      '20 kmph, or 40 kmph if DTS + TTM are deployed behind it and stipulated safety instructions are followed',
  },
  {
    sno: 7,
    name: 'FRM',
    purpose: 'Shoulder Ballast Cleaning',
    deliverables:
      'Cleans shoulder ballast by removing muck, improving drainage of track and elasticity of the ballast bed.',
    toFro: '30 min',
    setting: '30 min',
    working: '3:00',
    total: '4:00',
    output: '0.4 km',
    speedRestriction: 'Nil, except in summer with 50 kmph if not followed by DTS',
  },
  {
    sno: 8,
    name: 'UNI',
    purpose: 'Turnout packing',
    deliverables:
      'Corrects turnout track geometry — alignment, twist, cross level, and longitudinal level — and packs ballast under sleepers.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '1 turnout',
    speedRestriction: 'Nil',
  },
  {
    sno: 9,
    name: 'DGS',
    purpose: 'Consolidation of newly tamped track',
    deliverables:
      'Builds up lateral resistance and consolidates track faster, helping to relax speed restriction early.',
    toFro: '15 min',
    setting: '10 min',
    working: '3:35',
    total: '4:00',
    output: '1 km',
    speedRestriction: 'Nil',
  },
  {
    sno: 10,
    name: 'TRT',
    purpose: 'Laying of Track',
    deliverables: 'Fully mechanized system of complete track renewal.',
    toFro: '40 min',
    setting: '50 min',
    working: '2:30',
    total: '4:00',
    output: '0.36 km',
    speedRestriction:
      '30 kmph, or 40 kmph if DGS is deployed and ballasting and rail joints are done as per IRPWM',
  },
  {
    sno: 11,
    name: 'PQRS',
    purpose: 'Laying of Track',
    deliverables:
      'Semi-mechanized system of track renewal in which prefabricated rail panels are laid and existing panels are removed with minimum labour.',
    toFro: '25 min',
    setting: '20 min',
    working: '3:15',
    total: '4:00',
    output: '0.24 km',
    speedRestriction: '20 kmph',
  },
  {
    sno: 12,
    name: 'T-28',
    purpose: 'Turnout Replacement Machine',
    deliverables: 'Fully mechanized system of complete turnout replacement with minimum manual labour.',
    toFro: '10 min',
    setting: '10 min',
    working: '2:40',
    total: '4:00',
    output: '1 turnout / 4 hours',
    speedRestriction: '20 kmph',
  },
  {
    sno: 13,
    name: 'UIV',
    purpose: 'Utility Vehicle',
    deliverables:
      'Mechanized system of transporting heavy material such as rails and sleepers from one station to another in a traffic block.',
    toFro: '15 min',
    setting: '10 min',
    working: '2:45',
    total: '4:00',
    output: '50 rails / hour in one BFR',
    speedRestriction: 'Nil',
  },
  {
    sno: 14,
    name: 'BRM',
    purpose: 'Ballast Regulating Machine',
    deliverables: 'Mechanized system of track ballast equalization, regulation, and profiling.',
    toFro: '20 min',
    setting: '20 min',
    working: '3:20',
    total: '4:00',
    output: '2 km',
    speedRestriction: 'Nil',
  },
]

const groups = [
  {
    title: 'Plain track tamping',
    items: machines.filter((machine) => [1, 2, 3, 4, 5].includes(machine.sno)),
  },
  {
    title: 'Turnout working',
    items: machines.filter((machine) => [8, 12].includes(machine.sno)),
  },
  {
    title: 'Ballast working',
    items: machines.filter((machine) => [6, 7, 14].includes(machine.sno)),
  },
  {
    title: 'Track laying & renewal',
    items: machines.filter((machine) => [10, 11].includes(machine.sno)),
  },
  {
    title: 'Other machines',
    items: machines.filter((machine) => [9, 13].includes(machine.sno)),
  },
]

function MachineCard({ machine }: { machine: TrackMachine }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-500/20 bg-slate-900/70 shadow-xl shadow-black/20 ring-1 ring-amber-500/10">
      <div className="flex items-start justify-between gap-3 border-b border-white/5 bg-linear-to-r from-amber-500/15 to-transparent px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300/80">
            Machine {machine.sno}
          </p>
          <h3 className="mt-1 text-xl font-bold tracking-tight text-white">{machine.name}</h3>
          <p className="mt-1 text-sm font-medium text-amber-100/90">{machine.purpose}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
          <Hammer className="h-5 w-5 text-amber-200" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-4">
        <p className="text-sm leading-relaxed text-slate-300">{machine.deliverables}</p>

        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">To &amp; fro</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-100">{machine.toFro}</dd>
          </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Setting</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-100">{machine.setting}</dd>
          </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Working</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-100">{machine.working}</dd>
          </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Total block</dt>
            <dd className="mt-1 text-sm font-semibold text-amber-200">{machine.total}</dd>
          </div>
        </dl>

        <div className="mt-auto grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/30 px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300/80">
              Output / effective hour
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-100">{machine.output}</p>
          </div>
          <div className="rounded-xl border border-sky-500/20 bg-sky-950/30 px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-300/80">
              Speed restriction
            </p>
            <p className="mt-1 text-sm leading-snug text-sky-100">{machine.speedRestriction}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

const TrackMachinesPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(251,191,36,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_30%_at_80%_0%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/topics/operating-manual"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-amber-100/80 transition hover:text-white"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          Back to Operating Manual
        </Link>

        <header className="rounded-3xl border border-amber-500/30 bg-slate-900/70 px-6 py-8 text-center shadow-xl shadow-black/20 ring-1 ring-amber-500/15 backdrop-blur-sm sm:px-12 sm:py-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <Hammer className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
            Operating Manual
          </p>
          <h1 className="mt-3 bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Track Machines
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Machines used for track maintenance — purpose, stipulated block period, output per effective hour, and
            speed restriction.
          </p>

          <div className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Layers className="mx-auto h-5 w-5 text-amber-200" />
              <p className="mt-2 text-lg font-bold text-white">{machines.length}</p>
              <p className="text-xs text-slate-400">Machines</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Clock className="mx-auto h-5 w-5 text-amber-200" />
              <p className="mt-2 text-lg font-bold text-white">4:00 hrs</p>
              <p className="text-xs text-slate-400">Typical total block</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Gauge className="mx-auto h-5 w-5 text-amber-200" />
              <p className="mt-2 text-lg font-bold text-white">JSC timings</p>
              <p className="text-xs text-slate-400">Board&apos;s Joint Circular</p>
            </div>
          </div>
        </header>

        {groups.map((group) => (
          <section key={group.title} className="mt-10">
            <h2 className="mb-4 border-l-4 border-amber-400/80 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
              {group.title}
            </h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {group.items.map((machine) => (
                <MachineCard key={machine.sno} machine={machine} />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12">
          <h2 className="mb-4 border-l-4 border-amber-400/80 pl-3 text-lg font-bold text-amber-100 sm:text-xl">
            Comparison table
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-amber-500/20 bg-slate-900/70 shadow-xl shadow-black/20 ring-1 ring-amber-500/10">
            <table className="min-w-275 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-amber-950/40 text-[11px] uppercase tracking-wider text-amber-200">
                  <th className="px-4 py-3 font-semibold">S. No</th>
                  <th className="px-4 py-3 font-semibold">Machine</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">To &amp; fro</th>
                  <th className="px-4 py-3 font-semibold">Setting</th>
                  <th className="px-4 py-3 font-semibold">Working</th>
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Output / hour</th>
                  <th className="px-4 py-3 font-semibold">Speed restriction</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((machine) => (
                  <tr
                    key={machine.sno}
                    className="border-b border-white/5 text-slate-300 odd:bg-white/5 hover:bg-amber-500/5"
                  >
                    <td className="px-4 py-3 font-semibold text-amber-100">{machine.sno}</td>
                    <td className="px-4 py-3 font-bold text-white">{machine.name}</td>
                    <td className="px-4 py-3">{machine.purpose}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{machine.toFro}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{machine.setting}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{machine.working}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-amber-200">{machine.total}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-emerald-200">{machine.output}</td>
                    <td className="max-w-xs px-4 py-3 leading-snug">{machine.speedRestriction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-400">
            To &amp; fro and setting &amp; winding-up times are as per Board&apos;s Joint Circular. Working time and
            total block are shown in hours.
          </p>
        </section>
      </div>
    </section>
  )
}

export default TrackMachinesPage
