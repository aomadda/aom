'use client'

import React from 'react'
import Link from 'next/link'
import { Hammer } from 'lucide-react'

const categories = [
  {
    text: 'Category-I: Normal routine maintenance. No special precautions & advice to operating official. Ex: renewal of keys/bolts etc.',
  },
  {
    text: 'Category-II: Caution order by SM and SCOR to Loco Pilots (even without an SR). Engg official to protect work spot. Ex: greasing of fishplates/bridge painting, scattered renewal of sleepers',
  },
  {
    text: 'Category-III: Interference to normal traffic/SR. Ex: renewal of rails/sleepers, loading/unloading of ballast, re-girdering and welding of rail joints etc.',
  },
]

const obtainProcedure = [
  'AEN / PWI nominated shall apply to DRM for blocking of running line outside station limits.',
  "Engg. branch shall coordinate with operating branch for issuing `circular notice‘ by DRM.",
  'Circular notice is valid for 3 months. If work is not commenced within three months, fresh notice shall be obtained. If the work is taken up, it remains valid till the work is completed.',
  'The name of the Engineering Official-in-charge of the work, who shall not be below the rank of a PWI, should be mentioned in the Circular Notice.',
  'At least two days in advance of proposed Line Block, DOM shall issue an all concerned message indicating name of the engg. official, last train before imposing the Line Block.',
  'In the case of daily work on re-laying, the message may cover a period of seven days, on the expiry of which a fresh message shall be issued.',
  'Acknowledgement of SMs, SCOR, TPC, CCC etc. shall be obtained on all concerned message, otherwise DOM shall stop the work. Material lorry may be allowed into the block section.',
  'Slots for integrated blocks are indicated in WTT. Schedules for line blocks for the week will be planned by Sr.DOM & Sr.DEN (co-ord) on previous weekends.',
  'S&T, Elec. depts. shall plan simultaneously.',
  'SCOR will advise the Station Masters on either side who in turn will advise official-in-charge of the work about the commencement of the line block and the last train after the departure of which the line block will be taken up. Nominated official shall adhere to the block timings strictly.',
  'SM shall issue Caution Order to all trains before allowing into the affected area.',
  'SCOR advises both SMs through a message of line block, both SMs shall exchange messages with Private Numbers about time & last train.',
  'On Double Line, commutator shall be turned to TOL (for SGE block instrument) & Line blocked caps placed on all other block instruments.',
  'Separate Private Numbers shall be obtained for each unit and recorded in the authority red ink in TSR.',
  'Before permitting the block, SMs shall ensure block section is clear of trains. If communication fails, block shall not be permitted.',
]

const fieldTelephone = [
  'Permitted for any reason on controlled sections only.',
  'Person nominated (not lower than PWI) in the circular notice shall only obtain line block.',
  "DOM‘s all concerned message shall mention the name and last train.",
  'PN sheet shall be supplied to nominated work in-charge by DRM & returned on completion of work.',
  'Before leaving to the site, he shall consult SCOR.',
  'After the nominated train is passed, spot shall be protected; PWI shall call SCOR and give his name, designation, circular notice reference no. etc.',
  'SCOR shall then advise SMs on either side. SMs shall acknowledge by giving PNs. SCOR shall record in the chart. SMs will block the line and advise SCOR & engg. official on telephone.',
  'Engg. official then commences the work & keeps in touch with SCOR.',
  'During control interruption, engg. official shall consult SM. SM will issue a written memo to block the line.',
  'A material lorry may be allowed. A material train if mentioned in the circular notice may also be sent on T/462 or T/A462.',
  'On completion – PWI shall give ―safety certificate‖ and a separate certificate that the block section is clear of material train.',
  'On completion of work, the engineering official-in-charge will contact the SCOR (SCOR will call both SMs) on the field telephone and then issue a message that track is certified fit for traffic, train working may be resumed. SCOR will issue train notice to both SMs and authorise them to cancel line block, resume normal working and obtain acknowledgement.',
  'Extension of block – engg. official shall contact SCOR on field telephone and obtain the extension and in turn he shall send a written advice to SM on one end. SM shall advise SM on other end.',
]

const vhfPoints = [
  { label: 'a)', text: 'Nominated engineering official only to obtain block.' },
  {
    label: 'b)',
    text: 'After the nominated train has passed, PWI shall protect the line (obstruction) and call SM on VHF & give a Private Number (PN).',
  },
  { label: 'c)', text: 'SM shall advise SCOR & SM at other end.' },
  {
    label: 'd)',
    text: 'Once permission is obtained from SCOR, SM shall advise PWI with a PN.',
  },
  {
    label: 'e)',
    text: 'After completion of work and track made safe, remove protection and convey a PN to his representative who is at station with a PWI-signed written memo.',
  },
  {
    label: 'f)',
    text: 'Representative shall enter PN and time in the memo and hand over to SM.',
  },
  {
    label: 'g)',
    text: 'SM will advise SCOR and SM of the other end and cancel the line block.',
  },
]

const emergencyPoints = [
  'SSE/SE/JE (P.way) shall give a written requisition to SM.',
  'SM shall coordinate with control for imposition of line block.',
]

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((text, index) => (
        <li
          key={`${index}-${text.slice(0, 40)}`}
          className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
            {index + 1}
          </span>
          <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
        </li>
      ))}
    </ol>
  )
}

function SectionCard({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <article
      className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
      style={{ animation: `fade-up 0.55s ease-out ${delay}s both` }}
    >
      <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
        <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
          {title}
        </h2>
      </header>
      <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">{children}</div>
    </article>
  )
}

const LineBlockPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400/25 to-orange-600/30 ring-1 ring-amber-400/40 shadow-lg shadow-amber-950/40 animate-[soft-pulse_3.5s_ease-in-out_infinite]">
              <Hammer className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>
            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Special Instructions for Line Block
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <div className="space-y-4 px-5 py-8 sm:px-10 sm:py-10">
            <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
              Engineering works are classified under the following three categories:
            </p>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li
                  key={item.text}
                  className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <SectionCard title="Procedure for Obtaining Line Block" delay={0.08}>
          <NumberedList items={obtainProcedure} />
        </SectionCard>

        <SectionCard title="Line Block on Field Telephone" delay={0.12}>
          <NumberedList items={fieldTelephone} />
        </SectionCard>

        <SectionCard title="Line Block on VHF / Portable Radio Communication" delay={0.16}>
          <ul className="space-y-3">
            {vhfPoints.map((item) => (
              <li
                key={item.label}
                className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{item.label}</span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{item.text}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="In Emergency / Without Circular Notice:" delay={0.2}>
          <ul className="space-y-3">
            {emergencyPoints.map((text) => (
              <li
                key={text}
                className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
              >
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Various Authorities Issued During the Block" delay={0.24}>
          <div className="flex gap-2.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
            <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
              Only one material train is permitted. Any numbers of TTM / Tower wagons are permitted.
            </p>
          </div>
        </SectionCard>

        <div className="flex justify-center">
          <Link
            href="/topics/operating-material"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-amber-100 shadow-lg shadow-black/15 ring-1 ring-amber-500/10 transition hover:border-amber-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Operating Material</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes soft-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.04);
            opacity: 0.92;
          }
        }
      `}</style>
    </div>
  )
}

export default LineBlockPage
