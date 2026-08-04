'use client'

import React from 'react'
import Link from 'next/link'
import { CircuitBoard } from 'lucide-react'

type SubPoint = { label: string; text: string; nested?: SubPoint[] }

type Point = {
  text: string
  sub?: SubPoint[]
}

type CompareRow = {
  no: string
  absolute: string
  automatic: string
}

function NumberedList({ items }: { items: Point[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${index}-${item.text.slice(0, 48)}`}
          className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
              {index + 1}
            </span>
            <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
              {item.text}
            </p>
          </div>
          {item.sub ? <SubList items={item.sub} /> : null}
        </li>
      ))}
    </ol>
  )
}

function SubList({ items }: { items: SubPoint[] }) {
  return (
    <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
      {items.map((sub) => (
        <li key={`${sub.label}-${sub.text.slice(0, 40)}`}>
          <div className="flex gap-2.5">
            <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200">{sub.label}</span>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{sub.text}</p>
          </div>
          {sub.nested ? (
            <ul className="mt-2 space-y-2 border-l-2 border-amber-500/15 pl-4">
              {sub.nested.map((n) => (
                <li key={`${n.label}-${n.text.slice(0, 40)}`} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200/90">
                    {n.label}
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{n.text}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
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

const automaticStop: Point[] = [
  { text: 'It is distinguished by an ―A‖ marker board.' },
  { text: 'The normal aspect of the automatic signal is proceed.' },
  { text: 'Continuous track circuit or axle counter are to be provided.' },
  { text: 'Signals change their aspect automatically depending on the occupation of sections ahead.' },
  {
    text: "It can be passed at ‗ON‘ without any authority after waiting one/two minutes during day/night.",
  },
  {
    text: 'While proceeding ahead, even if subsequent signal is ―off‖, shall not exceed SR 15 kmph.',
  },
  {
    text: 'In case of curve, foggy weather etc., Loco Pilot shall proceed with SR 10 KMPH.',
  },
]

const semiAutomatic: Point[] = [
  {
    text: 'A fixed signal which can be operated either as Automatic Stop Signal or Manual Stop Signal, as required, is called Semi-Automatic Stop Signal.',
  },
  {
    text: 'A king knob is provided for each direction to make Semi-Automatic Stop Signal work either as an Automatic Stop Signal or as a Manual Stop Signal.',
  },
  { text: 'When king knob is reversed, it works as Automatic Stop Signal for main line.' },
  { text: 'When king knob is in normal position, it works as a manual stop signal.' },
  {
    text: "Semi-Automatic Stop Signal works as Automatic Stop Signal when ‗A‘ marker is illuminated.",
  },
  {
    text: "When ‗A‘ marker is extinguished, the signal works as Manual Stop Signal.",
  },
]

const gateStop: Point[] = [
  {
    text: "When gate is in open condition, gate signal exhibits stop aspect with extinguished ‗A‘ marker.",
  },
  {
    text: "When gate is in closed condition, it works as Automatic Stop Signal with illuminated ‗A‘ marker.",
  },
  {
    text: "If gate signal is at ‗on‘ and ‗A‘ marker is extinguished, the Loco Pilot has to follow the gate rules and also automatic rules [Rule 9.15(b)].",
  },
  {
    text: "If ‗A‘ marker is illuminated and the signal is at ‗on‘, the Loco Pilot shall follow the rules for passing the automatic signal at ‗ON‘ .",
  },
]

const prolongedFailure: Point[] = [
  { text: 'Loco Pilot / Motorman and Guard of the train shall be advised of the circumstances by SM.' },
  {
    text: 'SM shall prepare Authority T/B.912 in three copies which includes:',
    sub: [
      { label: 'a)', text: 'ATP without line clear' },
      { label: 'b)', text: "Authorities to pass departure signals at ‗ON‘ position" },
      { label: 'c)', text: 'Caution order' },
    ],
  },
  { text: 'SM shall use only printed form.' },
  {
    text: 'Duly maintaining a time interval gap of 25 minutes, second and subsequent trains shall be dispatched.',
  },
  {
    text: 'Duties of LP at approaching station:',
    sub: [
      { label: 'a)', text: 'Stop at FSS' },
      { label: 'b)', text: 'Give a long whistle' },
    ],
  },
  {
    text: 'Duties of SM at approaching station:',
    sub: [
      { label: 'a)', text: 'Shall fulfill the conditions of taking off reception signal.' },
      {
        label: 'b)',
        text: 'If reception signal is defective, then take off calling on signal; if it also defective, then',
      },
      {
        label: 'c)',
        text: 'Depute competent railway servant in uniform with T.369(3b) and advise to exhibit PHS at FSS',
      },
    ],
  },
  {
    text: 'Duties of LP on arrival at a station:',
    sub: [
      { label: 'a)', text: 'Shall hand over T/B 912 to on-duty SM.' },
      { label: 'b)', text: 'SM shall preserve them safely.' },
    ],
  },
  {
    text: 'Duties of SM:',
    sub: [
      {
        label: '',
        text: 'Same procedure to be followed till any one of the means of communication is restored.',
      },
      { label: '', text: 'Messages to be exchanged in TSR with RED INK.' },
    ],
  },
  {
    text: 'Role of TI:',
    sub: [
      { label: 'a)', text: 'Shall scrutinize the records' },
      { label: 'b)', text: 'Submit a report to Sr.DOM/DOM (incharge)' },
      { label: 'c)', text: 'Within seven days.' },
    ],
  },
]

const lssSingle: Point[] = [
  {
    text: 'If LSS is defective on single line or the direction of traffic cannot be established, Automatic block working shall be suspended.',
  },
  {
    text: 'SM shall ensure that all trains arrived completely and treat the entire block section as one section.',
  },
  { text: 'SM shall obtain line clear by any one of the available means of communication.' },
  { text: 'Duly filling T/A 1425 and T/B 1425 by concerned on-duty SMs.' },
  { text: 'T/D 912 to be issued.' },
  { text: 'The speed of the first train shall be restricted to 25 kmph/10Kmph' },
  {
    text: 'After the first train arrives safely subsequent trains may run at sectional speed. Proceed with caution from 1 km before Semi-Automatic/Manual Reception Stop Signal. Follow other speed restrictions in force.Facing points speed restricted to 15 kmph.',
  },
  { text: 'All entries shall be in red ink in TSR.' },
]

const tslObstructed: Point[] = [
  {
    text: 'Whenever any line is obstructed on double line due to accident or any other reason, the traffic may temporarily be worked over single line.',
  },
  {
    text: 'SM must have reliable information in writing that one line is clear for introducing TSL.',
  },
  { text: 'In case of any doubt about clearance of track, ask PWI to certify the track.' },
  {
    text: 'For introduction of TSL working, decision of Sr.DOM/DOM (Incharge) is final. Nomination of stations by them.',
  },
  {
    text: 'TSL working shall be introduced between nearest stations provided with favourable crossover between up and down lines on either side.',
  },
  { text: 'If cross over is not available, it shall be extended up to next station.' },
  { text: 'Treating each block section as a separate.' },
  {
    text: 'SM proposing TSL working shall issue a message to SM of other end containing following information under exchange of PNs:',
    sub: [
      { label: '(a)', text: 'Cause of introduction of single line working' },
      { label: '(b)', text: 'Place of obstruction' },
      { label: '(c)', text: 'The line by which single line working is proposed' },
      { label: '(d)', text: 'The source of information that the said line is clear' },
      { label: '(e)', text: 'Restriction of speed, if any, on the line' },
      {
        label: '(f)',
        text: 'The number and timings of the last train which arrived/left the station nominated',
      },
    ],
  },
  { text: 'Line Clear will be obtained on electrical communication.' },
  {
    text: 'Authority for temporary single line working on double line section in Automatic Block system.',
  },
  { text: 'Two separate portions i.e., specifically for wrong line and right line.' },
  {
    text: 'This authority contains line clear ticket, authority to pass all departure signals of a station at ―ON‖ and caution order for wrong line.',
  },
  { text: 'Whereas for right line, train signals shall be taken off.' },
  { text: 'In case LP finds any signals at ―ON‖ follows the rules.' },
  {
    text: 'The maximum speed of each first train over TSL working is restricted to 25 Kmph.',
  },
  {
    text: 'An endorsement shall be made in the T/E912 issued to Loco Pilot of 1st train to inform all gangmen and gatemen, about introduction of TSL working.',
  },
  {
    text: "The second and subsequent trains can proceed with sectional speed duly observing C.O‘s in force.",
  },
  {
    text: 'When train is despatching from wrong line, after ensuring that all points enroute are correctly set and locked.',
  },
  {
    text: 'SM shall depute competent railway with T/E 912 to hand over to train crew and train shall be piloted by competent railway servant in uniform till last points of the station.',
  },
  {
    text: 'LP shall switch on flasher light, if fails any staff notices shall stop the train.',
  },
  { text: 'Reception of a train on wrong line, stop the train at LSS (wrong line).' },
  { text: 'LP shall give long whistle.' },
  {
    text: 'SM after ensuring all the points enroute are correctly set and locked.',
  },
  {
    text: 'Depute competent railway with T.510 to hand over to train crew and train shall be piloted by competent railway servant in uniform till the place where required to come to a stop.',
  },
  { text: 'After completion on wrong line movements.' },
  { text: "SM‘s shall exchange message for right line movements." },
  { text: 'Issue T/E 912 for each train crew.' },
  { text: 'All departure signals of station shall be taken ―Off‖.' },
  { text: 'On right line, reception signal can be taken off.' },
  { text: 'If fails by ―ON‖ or T.369(3b) + PHS.' },
  {
    text: 'Normal working shall be introduced only after obtaining written certificate from PWI and issuing message to other SMs under the exchange of PNs.',
  },
  {
    text: 'LP of first train shall be issued caution order of 25 kmph and shall inform all field staff about resumption of normal working.',
  },
  { text: 'Entries in TSR should be made in red ink.' },
  { text: 'TI of the section must scrutinize all the records.' },
  { text: 'Submit a report to Sr.DOM/DOM (Incharge) within seven days.' },
]

const tslNoComm: Point[] = [
  { text: 'PWI written certification is must.' },
  { text: 'SM on duty shall follow SR 9.12.4 (TIC on Single Line).' },
  {
    text: 'While dispatching on wrong line, in addition to authorities, T/511 will be issued.',
  },
  { text: 'While reception on right line, T/510 will be issued.' },
]

const compareRows: CompareRow[] = [
  {
    no: '1',
    absolute: 'Block stations are classified as A, B, C and Special class stations',
    automatic: 'Stations are not classified',
  },
  {
    no: '2',
    absolute: 'Signals may be semaphore or colour light',
    automatic: 'Signals are colour light only',
  },
  {
    no: '3',
    absolute: 'Only manual signals are provided',
    automatic: 'Signals may be automatic, semi-automatic and manual',
  },
  {
    no: '4',
    absolute:
      'Provision of continuous track circuiting or axle counters on line is/are not required except IBS',
    automatic: 'Line shall be provided with continuous track circuit or axle counter',
  },
  {
    no: '5',
    absolute: "Normal aspect of stop signal is 'STOP'",
    automatic: "Normal aspect of stop signal is 'PROCEED'",
  },
  {
    no: '6',
    absolute:
      "No stop signal can be passed at 'ON' unless LP receives a written authority or PN (except IB, Gate)",
    automatic:
      "No authority is required to pass Automatic signal at 'ON' (If LP finds Automatic signal at 'ON' in section, follow GR 9.02)",
  },
  {
    no: '7',
    absolute: 'To start a train, line clear shall be obtained',
    automatic:
      'Line clear not required to start a train (but on single line, line clear shall be obtained to establish direction of traffic)',
  },
  {
    no: '8',
    absolute: 'Signals may be two aspects or multiple aspects. Permissive signals may be provided',
    automatic: 'Signals shall be multiple aspects only. Permissive signals are not provided',
  },
  {
    no: '9',
    absolute: "'G' marker shall be provided on Gate stop signal",
    automatic:
      "Besides 'G' marker, an illuminated 'A' marker is available when gate is closed; where main line points are not protected, if protected, ―AG‖ illuminated marker is provided",
  },
  {
    no: '10',
    absolute: 'Time interval between two trains during TIC on double line is 30 minutes',
    automatic: 'Time interval between trains during TIC on double line is 25 minutes.',
  },
  {
    no: '11',
    absolute: 'Protection shall be arranged as per 6.03 on same line and adjacent line',
    automatic:
      'Protection shall be arranged on same line in rear as per 9.10 and other lines as per 6.03',
  },
  {
    no: '12',
    absolute: 'Normally block section between two stations will not be divided',
    automatic:
      'Block section between two stations are divided into number of automatic block signalling territories',
  },
  {
    no: '13',
    absolute: 'During TIC on single line authority is T/B.602',
    automatic: 'During TIC on single line authority is T/B.602 (T/B.602)',
  },
  {
    no: '14',
    absolute: 'During TIC on double line authority is T/C.6.02',
    automatic: 'During TIC on double line authority is T/B.912',
  },
  {
    no: '15',
    absolute: 'During TSL working authority for all trains is T/D.602',
    automatic:
      'For all trains running on wrong line or right line, T/E.912 is must. Only on right line, in addition to authority, signals shall be taken off',
  },
  {
    no: '16',
    absolute:
      'During TSL working, the speed of each first train on a particular line is restricted to 25 Kmph',
    automatic:
      'During TSL working, the speed of each first train on wrong particular line is restricted to 25 Kmph',
  },
  {
    no: '17',
    absolute:
      "During TSL working, the speed of the 2nd and subsequent trains is normal speed/sectional speed duly observing SR‘s in force",
    automatic:
      "During TSL working, the speed of the 2nd and subsequent trains on wrong line and all trains on right line is normal speed/sectional speed duly observing SR‘s in force",
  },
  {
    no: '18',
    absolute: 'Authority to dispatch relief engine/train is T/A.602',
    automatic: 'Authority to dispatch relief engine/train is T/C.912',
  },
  {
    no: '19',
    absolute: 'On single line when LSS becomes defective, authority is PLCT',
    automatic:
      'On single line when LSS becomes defective where DOT is not established is T/D912, when established T.369(3b).',
  },
  {
    no: '20',
    absolute: 'On double line when LSS becomes defective, authority is PLCT',
    automatic:
      'On double line when LSS becomes defective, authority is T.369(3b)up to next automatic signal',
  },
]

const AutomaticBlockSystemPage = () => {
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
              <CircuitBoard className="h-7 w-7 text-amber-200" strokeWidth={1.75} />
            </div>
            <h1 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Kinds of Fixed Signals in Automatic Block Territory
            </h1>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
          </header>

          <ul className="grid gap-3 px-5 py-8 sm:grid-cols-2 sm:px-10 sm:py-10">
            {['Automatic Stop Signal', 'Semi-Automatic Stop Signal'].map((text, index) => (
              <li
                key={text}
                className="group relative overflow-hidden rounded-xl border border-amber-500/20 bg-linear-to-br from-slate-950/70 via-slate-900/50 to-amber-950/20 p-4 ring-1 ring-white/4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40"
                style={{ animation: `fade-up 0.5s ease-out ${0.05 * (index + 1)}s both` }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-amber-300"></span>
                  <p className="text-[15px] font-medium leading-[1.65] text-slate-200 sm:text-base">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <SectionCard title="Automatic Stop Signal" delay={0.05}>
          <NumberedList items={automaticStop} />
        </SectionCard>

        <SectionCard title="Semi-Automatic Stop Signal" delay={0.08}>
          <NumberedList items={semiAutomatic} />
        </SectionCard>

        <SectionCard title="Manual Stop Signal" delay={0.1}>
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            These signals are operated manually and cannot work as Automatic or Semi-Automatic
            Signal.
          </p>
        </SectionCard>

        <SectionCard title="Gate Stop Signal in Automatic Signalling Territory" delay={0.12}>
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            Automatic signals interlocked with level crossing gates are distinguished by the
            provision of ‗G‘ marker i.e., letter ‗G‘ in black on yellow circular disc and white
            illuminated letter ‗A‘ against black background.
          </p>
          <NumberedList items={gateStop} />
        </SectionCard>

        <SectionCard
          title="Working of Trains During Prolonged Failure of Signals and Communications are not Available in Automatic Block System"
          delay={0.14}
        >
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            The train shall be brought to a stand.
          </p>
          <NumberedList items={prolongedFailure} />
        </SectionCard>

        <SectionCard title="LSS Defective on Single Line" delay={0.16}>
          <NumberedList items={lssSingle} />

          <div className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
            <h3 className="text-base font-semibold text-amber-100 sm:text-lg">
              If DOT is established
            </h3>
            <ul className="mt-3 space-y-3 border-l-2 border-amber-500/25 pl-4">
              <li>
                <div className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                  <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    Only in case of LSS is defective and remaining signals of mid section are
                    operative:
                  </p>
                </div>
                <ul className="mt-2 space-y-2 border-l-2 border-amber-500/15 pl-4">
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200/90"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      On-duty SM shall issue T.369(3b) to pass LSS at ―ON‖.
                    </p>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200/90"></span>
                    <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      Duly observing SR 10 Kmph up to next Automatic stop signal.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                  Automatic block working may be restored after the LSS or direction of traffic is
                  rectified.
                </p>
              </li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard title="LSS Defective on Double Line" delay={0.18}>
          <p className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/4 sm:p-5 sm:text-base">
            LP shall be given T/369(3b) up to next Automatic stop signal.
          </p>
          <ul className="space-y-2 border-l-2 border-amber-500/25 pl-4">
            <li className="flex gap-2.5">
              <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                On-duty SM shall issue T.369(3b) to LP.
              </p>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 shrink-0 text-sm font-bold text-amber-200"></span>
              <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                LP shall proceed with SR 10 KMPH up to next Automatic stop signal.
              </p>
            </li>
          </ul>
        </SectionCard>

        <SectionCard
          title="Procedure for Working of Trains When One Line is Obstructed on Double Section."
          delay={0.2}
        >
          <NumberedList items={tslObstructed} />
        </SectionCard>

        <SectionCard
          title="Introduction of TSL Working When No Means of Communication Is Available"
          delay={0.22}
        >
          <NumberedList items={tslNoComm} />
        </SectionCard>

        <SectionCard
          title="Difference Between Absolute Block System and Automatic Block System (Chapter VII & IX)"
          delay={0.24}
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-600/40 ring-1 ring-white/4">
            <table className="min-w-full border-collapse text-left text-[14px] sm:text-[15px]">
              <thead>
                <tr className="border-b border-amber-500/20 bg-amber-950/30">
                  <th className="px-3 py-3 font-semibold text-amber-100 sm:px-4">S. No.</th>
                  <th className="px-3 py-3 font-semibold text-amber-100 sm:px-4">
                    Absolute Block System
                  </th>
                  <th className="px-3 py-3 font-semibold text-amber-100 sm:px-4">
                    Automatic Block System
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr
                    key={row.no}
                    className="border-b border-slate-700/50 bg-slate-900/40 odd:bg-slate-950/40"
                  >
                    <td className="align-top px-3 py-3 font-bold text-amber-200 sm:px-4">
                      {row.no}
                    </td>
                    <td className="align-top px-3 py-3 leading-[1.7] text-slate-300 sm:px-4">
                      {row.absolute}
                    </td>
                    <td className="align-top px-3 py-3 leading-[1.7] text-slate-300 sm:px-4">
                      {row.automatic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default AutomaticBlockSystemPage
