/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const markerTone = {
  amber: 'bg-linear-to-br from-amber-200 to-amber-500 text-amber-950 ring-amber-100/50 shadow-amber-950/50',
  rose: 'bg-linear-to-br from-rose-200 to-rose-500 text-rose-950 ring-rose-100/50 shadow-rose-950/50',
  sky: 'bg-linear-to-br from-sky-200 to-sky-500 text-sky-950 ring-sky-100/50 shadow-sky-950/50',
  violet: 'bg-linear-to-br from-violet-200 to-violet-500 text-violet-950 ring-violet-100/50 shadow-violet-950/50',
  emerald: 'bg-linear-to-br from-emerald-200 to-emerald-500 text-emerald-950 ring-emerald-100/50 shadow-emerald-950/50',
  cyan: 'bg-linear-to-br from-cyan-200 to-cyan-500 text-cyan-950 ring-cyan-100/50 shadow-cyan-950/50',
  orange: 'bg-linear-to-br from-orange-200 to-orange-500 text-orange-950 ring-orange-100/50 shadow-orange-950/50',
} as const

type Tone = keyof typeof markerTone

const lineTone: Record<Tone, string> = {
  amber: 'bg-amber-400/35',
  rose: 'bg-rose-400/35',
  sky: 'bg-sky-400/35',
  violet: 'bg-violet-400/35',
  emerald: 'bg-emerald-400/35',
  cyan: 'bg-cyan-400/35',
  orange: 'bg-orange-400/35',
}

function ListMark({
  label,
  tone,
  connect = false,
  wide = false,
}: {
  label: string
  tone: Tone
  connect?: boolean
  wide?: boolean
}) {
  return (
    <div className={`relative flex shrink-0 justify-center ${wide ? 'w-20' : 'w-16'}`}>
      {connect ? <span className={`absolute top-10 bottom-0 w-px ${lineTone[tone]}`} aria-hidden /> : null}
      <span
        className={`relative z-10 inline-flex h-9 items-center justify-center rounded-full px-2.5 text-[11px] font-extrabold tracking-tight shadow-md ring-1 ${wide ? 'min-w-16' : 'min-w-12'} ${markerTone[tone]}`}
      >
        {label}
      </span>
    </div>
  )
}

function LetterMark({ letter, tone }: { letter: string; tone: Tone }) {
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold shadow-lg ring-1 ${markerTone[tone]}`}
    >
      {letter}
    </span>
  )
}

function NumberedItem({
  label,
  tone,
  connect = false,
  wide = false,
  children,
}: {
  label: string
  tone: Tone
  connect?: boolean
  wide?: boolean
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-3 pb-4 last:pb-0 sm:gap-4">
      <ListMark label={label} tone={tone} connect={connect} wide={wide} />
      <div className="min-w-0 flex-1 pt-1 text-sm leading-relaxed text-slate-200 sm:text-base">{children}</div>
    </li>
  )
}

const parameters = [
  { label: 'i', text: 'Knowledge of Rules', marks: '25 marks' },
  { label: 'ii', text: 'Alertness and observance of rules', marks: '25 marks' },
  { label: 'iii', text: 'Safety Record', marks: '15 marks' },
  { label: 'iv', text: 'Leadership and Management', marks: '15 marks' },
  { label: 'v', text: 'Discipline', marks: '10 marks' },
  { label: 'vi', text: 'Appearance & neatness', marks: '10 marks' },
]

const grades = [
  { category: "Category 'A'", band: '80 and above' },
  { category: "Category 'B'", band: '50 to 79' },
  { category: "Category 'C'", band: '49 to 26' },
  { category: "Category '0'", band: '25 and below' },
]

const OperatingStaffCategorization = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/40 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(251,191,36,0.16),transparent)]" />
      <div className="relative mx-auto max-w-4xl space-y-8">
        <header className="rounded-3xl border border-amber-400/25 bg-slate-900/70 px-6 py-8 shadow-xl shadow-black/20 ring-1 ring-amber-500/15 sm:px-10">
          <h1 className="bg-linear-to-r from-amber-100 via-yellow-100 to-orange-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Operating Staff Categorization
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            <p>Classification of Operating staff into' A', 'B', 'C' and 'D' categories.</p>
            <p>
              Please refer to Board's letter of even number dated 21-02-2002 regarding policy instructions on the above subject.
            </p>
            <p>
              In supersession of instructions contained in above referred letter, Railways are advised to adopt the modified guidelines henceforth to allot 'A', 'B', 'C' & 'D' gradation to Operating staff as per their knowledge and performance.
            </p>
            <p>
              As per modified guidelines for staff to be classified as A or B category, they must secure a minimum of 60% marks each in 'Knowledge of Rules' parameter. Further some changes have also been made in regard to the Supervisors/Officers nominated for grading of their sub-ordinate staff.
            </p>
          </div>
        </header>

        <article className="rounded-3xl border border-white/10 bg-slate-900/65 p-6 shadow-xl shadow-black/20 ring-1 ring-white/5 sm:p-8">
          <h2 className="text-center text-lg font-extrabold tracking-wide text-amber-100 sm:text-2xl">
            CLASSIFICATION OF OPERATING STAFF INTO 'A', 'B', 'C' & '0' CATEGORIES
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            <p>
              These instructions are in supersession of Railway Board's letter No.2002jSafety-Ij18j2 dated 21.02.2002.
            </p>
            <p>
              The important role of operating staff, especially those involved in train passing duties cannot be over-emphasized. Failures of train passing staff can result in serious accidents and bring down the reputation of Railways. In this context, it is absolutely essential that a proper system of monitoring and upgration of staff involved in train passing duties is instituted. Operating Staff may be categorized into 'A', 'B', 'C' & '0' categories for the purpose of better and more effective monitoring of comparatively inefficient staff as also to upgrade their knowledge and competence.
            </p>
          </div>
        </article>

        <section className="rounded-3xl border border-rose-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-rose-500/10 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LetterMark letter="A" tone="rose" />
            <h2 className="text-lg font-extrabold tracking-wide text-rose-100 sm:text-xl">METHOD OF CLASSIFICATION</h2>
          </div>
          <ol>
            <NumberedItem label="1." tone="rose" connect>
              All Operating staff involved in train passing duties shall be classified under one of the four heads - 'A', 'B', 'C' & '0'. Categorization will be made after an analysis of performance of that employee for the last 6 months. The important parameters to be taken into account while analyzing the performance of the employee alongwith the weightage of each is given below. The classification shall be done on the basis of 100 marks and marks for each parameter shall be as follows:-
              <ol className="mt-4">
                {parameters.map((item, index) => (
                  <li key={item.label} className="flex items-center gap-3 pb-3 last:pb-0 sm:gap-4">
                    <ListMark label={item.label} tone="amber" connect={index < parameters.length - 1} />
                    <p className="min-w-0 flex-1 text-sm leading-relaxed text-slate-100 sm:text-base">{item.text}</p>
                    <span className="shrink-0 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-100 ring-1 ring-amber-300/30 sm:text-sm">
                      {item.marks}
                    </span>
                  </li>
                ))}
              </ol>
            </NumberedItem>
            <NumberedItem label="2." tone="rose" connect>
              For staff to be classified as A or B category, they must secure a minimum of 600/0 marks each in 'Knowledge of Rules' parameter as well as 'Alertness and observance of Rules' parameter.
            </NumberedItem>
            <NumberedItem label="3." tone="rose" connect>
              Staff shall be graded based on the total marks received. The gradation shall be as under
              <ul className="mt-4 space-y-2">
                {grades.map((grade) => (
                  <li
                    key={grade.category}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3"
                  >
                    <span className="font-semibold text-rose-50">{grade.category}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-amber-100">{grade.band}</span>
                  </li>
                ))}
              </ul>
            </NumberedItem>
            <NumberedItem label="4." tone="rose">
              All known alcoholics shall, however, be classified only in '0' category, irrespective of marks received by them in other aspects of working.
            </NumberedItem>
          </ol>
        </section>

        <section className="rounded-3xl border border-sky-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-sky-500/10 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LetterMark letter="B" tone="sky" />
            <h2 className="text-lg font-extrabold tracking-wide text-sky-100 sm:text-xl">SYSTEM OF GRADING</h2>
          </div>
          <ol>
            <NumberedItem label="1." tone="sky" connect>
              The gradation of staff shall be made by the following:
              <ol className="mt-4">
                <li className="flex gap-3 pb-3 sm:gap-4">
                  <ListMark label="i" tone="violet" connect wide />
                  <p className="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed text-slate-100 sm:text-base">
                    The SSjSM in-charge of the station shall grade all Group-O staff working under his control.
                  </p>
                </li>
                <li className="flex gap-3 pb-3 sm:gap-4">
                  <ListMark label="ii" tone="violet" connect wide />
                  <p className="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed text-slate-100 sm:text-base">
                    Group-C staff including SMsjASMs,Switchmen shall be graded by the TI of the Section or the Supervisory SS in Scale (9300-34800) Grade Pay of Rs. 4600 and above.
                  </p>
                </li>
                <li className="flex gap-3 pb-3 sm:gap-4">
                  <ListMark label="iii" tone="violet" connect wide />
                  <p className="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed text-slate-100 sm:text-base">
                    SSsScale (9300-34800) Grade Pay of Rs. 4600 and above shall be graded by AOM.
                  </p>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <ListMark label="iv" tone="violet" wide />
                  <p className="min-w-0 flex-1 pt-1.5 text-sm leading-relaxed text-slate-100 sm:text-base">
                    All Traffic Inspectors (any grade) shall be graded by AOM.
                  </p>
                </li>
              </ol>
            </NumberedItem>
            <NumberedItem label="2." tone="sky">
              To ensure that the system is fair and objective, all classifications made by the SMjSSjTI shall be counter-signed and accepted by the next higher authority within 6 months.
            </NumberedItem>
          </ol>
        </section>

        <section className="rounded-3xl border border-emerald-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-emerald-500/10 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LetterMark letter="C" tone="emerald" />
            <h2 className="text-lg font-extrabold tracking-wide text-emerald-100 sm:text-xl">SYSTEMOF MONITORING</h2>
          </div>
          <ol>
            <NumberedItem label="1." tone="emerald" connect>
              A separate register shall be opened and the performance of the employee shall be recorded every 6 months. Record of performance shall be seen by the next higher authority once a year. This review shall decide the further course of action to upgrade staff, wherever necessary.
            </NumberedItem>
            <NumberedItem label="2." tone="emerald" connect>
              Staff classified as Category 'D' staff shall be monitored on a monthly basis by the SMjSSjTIj AOM.
            </NumberedItem>
            <NumberedItem label="3." tone="emerald" connect>
              Staff classified as Category 'C' staff shall be monitored on a quarterly basis by the SMjSSjTIj AOM.
            </NumberedItem>
            <NumberedItem label="4." tone="emerald">
              A copy of the record of classification of Category 'C' and 'D' shall be maintained by AOM/DOM/Sr. DOM. Their record of performance shall be upgraded by the TI on a 6 monthly basis and reviewed every 6 months by the AOM.
            </NumberedItem>
          </ol>
        </section>

        <section className="rounded-3xl border border-violet-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-violet-500/10 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LetterMark letter="D" tone="violet" />
            <h2 className="text-lg font-extrabold tracking-wide text-violet-100 sm:text-xl">SYSTEMOF UPGRADATION</h2>
          </div>
          <ol>
            <NumberedItem label="1." tone="violet" connect>
              All attempts should be made to upgrade staff in 'D' and 'C' categories. In this context, wherever staff have been classified as category 'C' or 'D', inputs of knowledge, counseling and monitoring shall be done by the next higher authority. SM/SS/TI must make special efforts for upgrading staff classified as Category 'D'. The inputs given to the employee in a 6 month period shall be tabulated and a record maintained and reviewed by the DOMjSr.DOM. every year.
            </NumberedItem>
            <NumberedItem label="2." tone="violet" connect>
              During monthly Safety Meetings conducted at stations, areas of weakness of the staff on the basis of which they have been classified in a lower category must also be discussed, along with ways to upgrade the same.
            </NumberedItem>
            <NumberedItem label="3." tone="violet">
              In the case of 'D' category staff where inputs cannot be given at the Divisional level, they shall be sent for Refresher Courses at more frequent intervals to be decided by the DOM/Sr. DOM based on the competence and knowledge seen during the time of analysis.
            </NumberedItem>
          </ol>
        </section>

        <section className="rounded-3xl border border-cyan-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-cyan-500/10 sm:p-8">
          <div className="mb-5 flex items-center justify-center gap-4">
            <LetterMark letter="E" tone="cyan" />
            <h2 className="text-lg font-extrabold tracking-wide text-cyan-100 sm:text-xl">INSPECTIONS</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            The inspection reports of SSrn/ AOM should specifically deal with the categorization of staff and attempts to upgrade and reasons for downgrading of staff.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-orange-500/10 sm:p-8">
          <div className="mb-5 flex items-center justify-center gap-4">
            <LetterMark letter="F" tone="orange" />
            <h2 className="text-lg font-extrabold tracking-wide text-orange-100 sm:text-xl">ADVICETO STAFF</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            <p>Details of 'A', '8', 'C' and 'D' classification must be notified to the concerned staff.</p>
            <p>However, the records should be maintained and handled by the Station Superintendent personally.</p>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-500/25 bg-slate-900/70 p-6 shadow-xl shadow-black/20 ring-1 ring-amber-500/10 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-4">
            <LetterMark letter="G" tone="amber" />
            <h2 className="text-lg font-extrabold tracking-wide text-amber-100 sm:text-xl">AWARDSAND PUNISHMENTS</h2>
          </div>
          <ol>
            <NumberedItem label="1." tone="amber" connect>
              To ensure that this system not only results in a higher level of competence, but also becomes a self-motivating factor, any staff categorized as 'D' or 'C' who within a period of 6 months, upgrades himself to 'A' category, may be motivated suitably.
            </NumberedItem>
            <NumberedItem label="2." tone="amber" connect>
              For being considered eligible for annual safety award, staff who have consistertly maintained themselves in Category 'A' should generally be considered.
            </NumberedItem>
            <NumberedItem label="3." tone="amber" connect>
              Categorisation of staff should be taken into consideration while filling up the columns pertaining to Safety Consciousness etc. in the Annual Performance Reports.
            </NumberedItem>
            <NumberedItem label="4." tone="amber">
              However, staff who do not upgrade themselves despite inputs of knowledge, training and monitoring, need to be taken up suitably. Review of their service should be done and wherever necessary, their retirement from service should be planned as per existing rules.
            </NumberedItem>
          </ol>
        </section>
      </div>
    </section>
  )
}

export default OperatingStaffCategorization
