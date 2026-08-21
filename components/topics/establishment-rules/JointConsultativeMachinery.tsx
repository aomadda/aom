import React from 'react'

const numberBadgeClass =
  'inline-flex h-11 min-w-11 shrink-0 items-center justify-center rounded-2xl border border-teal-400/50 bg-linear-to-br from-teal-400/25 via-teal-500/14 to-teal-950/30 px-3 text-base font-bold tabular-nums text-teal-50 shadow-lg shadow-teal-950/25 ring-1 ring-white/15 sm:h-12 sm:min-w-12 sm:text-lg'

const letterMarkClass =
  'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-400/45 bg-linear-to-br from-teal-400/22 to-teal-700/15 text-sm font-bold tabular-nums text-teal-50 shadow-md shadow-black/20 ring-1 ring-white/10 sm:h-10 sm:w-10 sm:text-[15px]'

const letterRowClass =
  'flex gap-3.5 rounded-2xl border border-slate-600/45 bg-linear-to-r from-slate-900/45 to-slate-900/20 px-3.5 py-3.5 ring-1 ring-white/[0.06] sm:gap-4 sm:px-4 sm:py-4'

const letterListClass = 'list-none space-y-3 sm:space-y-3.5'

function SectionHeading({
  tag: Tag,
  sectionNumber,
  children,
}: {
  tag: 'h1' | 'h2'
  sectionNumber: string
  children: React.ReactNode
}) {
  return (
    <header className="relative border-b border-slate-600/40 bg-linear-to-br from-slate-800/75 to-slate-900/55 px-5 py-6 sm:px-8 sm:py-7">
      <Tag className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3.5 sm:gap-4">
        <span className={numberBadgeClass}>{sectionNumber}</span>
        <span className="min-w-0 w-full text-balance text-center text-lg font-semibold leading-snug tracking-tight text-slate-50 sm:text-xl">
          {children}
        </span>
      </Tag>
    </header>
  )
}

function LetterItem({ mark, children }: { mark: string; children: React.ReactNode }) {
  return (
    <li className={letterRowClass}>
      <span className={letterMarkClass}>{mark}</span>
      <span className="min-w-0 flex-1 text-[15px] leading-relaxed text-slate-300 sm:text-[15px] sm:leading-[1.75]">
        {children}
      </span>
    </li>
  )
}

const JointConsultativeMachinery = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-teal-950/65">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_42%_at_50%_-12%,rgba(45,212,191,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,40rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-teal-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article
          className="relative overflow-hidden rounded-2xl border border-slate-600/55 bg-slate-800/40 shadow-2xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm"
          aria-label="Joint Consultative Machinery"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-8 bottom-20 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

          <SectionHeading tag="h1" sectionNumber="1">
            What is Joint Consultative Machinery?
          </SectionHeading>

          <div className="relative space-y-5 px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              The scheme of Joint Consultative Machinery is a platform for constructive dialogue between the representatives of the staff side and the official side for peaceful resolution of all disputes between the Government as employer and the employees.
            </p>
            <p>
              The scheme was introduced in 1966 with the objectives of promoting harmonious relations and securing the greatest measure of cooperation between the Central 1 Government as the employer and the employees in matters of common concern and with the object of further increasing the efficiency of the public service combined with the well being of those employed.
            </p>
            <p>
              The scheme is a non statutory one mutually agreed upon between the staff side and the official side.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="2">
            What is the applicability of the JCM Scheme?
          </SectionHeading>

          <div className="relative space-y-6 px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p className="text-slate-200">
              The scheme covers all regular civil employees of the Central Government, except:
            </p>
            <ul className={letterListClass}>
              <LetterItem mark="a">The Class -I services;</LetterItem>
              <LetterItem mark="b">
                The Class-II services, other than the Central Secretariat Services and the other comparable services in the headquarters organisation of the Government;
              </LetterItem>
              <LetterItem mark="c"> Persons in industrial establishments employed mainly in managerial or administrative capacity, and those who being employed in supervisory capacity drawing salary going beyond grade pay of Rs.4200/- per month;</LetterItem>
              <LetterItem mark="d">Employees of the Union Territories; and</LetterItem>
              <LetterItem mark="e">Police personnel.</LetterItem>
            </ul>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="3">
            What is the structure of the Joint Councils under the JCM Scheme?
          </SectionHeading>
          <div className="relative px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              The scheme provides for setting up of Joint Councils at the National, Departmental and Regional / Office levels. The National Council, chaired by the Cabinet Secretary, is the apex body.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="4">
            How are staff side members selected for various Joint Councils?
          </SectionHeading>
          <div className="relative px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              The representatives of the staff side for various Joint Councils are chosen / selected from members of the recognized service associations/ unions.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="5">
            What is the time schedule for holding meetings of the National/Departmental Councils?
          </SectionHeading>
          <div className="relative px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              As per the JCM Scheme, ordinary meeting of the National Council/ Departmental Council may be held as often as necessary as but not less than once in four months.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="6">
            How recognition is granted to the staff associations?
          </SectionHeading>
          <div className="relative px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              The Department of Personnel & Training being the nodal department for matters relating to Joint Consultative Machinery and Compulsory Arbitration, has notified Central Civil Services (Recognition of Associations) Rules, 1993 for the purpose of granting recognition to various service associations. Recognition is actually granted by the concerned Ministry/ Department in accordance with the CCS (RSA) Rules, 1993. In case of any doubt or confusion, the matter is referred to the JCA Section of the Department of Personnel & Training for clarification/ advice.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="7">
            What are the facilities available to recognised associations?
          </SectionHeading>
          <div className="relative space-y-6 px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p className="text-slate-200">
              The recognized associations/ unions enjoy certain facilities like:
            </p>
            <ul className={letterListClass}>
              <LetterItem mark="a"> Negotiations with the employer;</LetterItem>
              <LetterItem mark="b">
                Correspondence and{'\t'}meetings with the head of the administrative departments;
              </LetterItem>
              <LetterItem mark="c">Provision of accommodation for the associations subject to availability;</LetterItem>
              <LetterItem mark="d">Facility of special casual leave up to 20 days in a year to the office bearers of the associations.</LetterItem>
              <LetterItem mark="e">Payment of T.A/ D.A for attending officially sponsored meetings; and</LetterItem>
              <LetterItem mark="f"> Facility of seeking transfer of Chief Executive of the Union / association to the Headquarters of the appropriate head of administration.</LetterItem>
            </ul>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="8">
            What will happen if there is no agreement between the staff and the official side?
          </SectionHeading>
          <div className="relative px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p>
              If there is no agreement between the staff and the official side on an arbitrable issue, then the matter is to be referred to the Board of Arbitration if so desired by the staff side.
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="9">
            What are the issues on which arbitration is possible?
          </SectionHeading>
          <div className="relative space-y-6 px-5 py-7 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:text-[15px] sm:leading-[1.75]">
            <p className="text-slate-200">The arbitration is limited to the following issues:</p>
            <ul className={letterListClass}>
              <LetterItem mark="a"> Pay and allowances;</LetterItem>
              <LetterItem mark="b">Weekly hours of work ; and</LetterItem>
              <LetterItem mark="c"> Leave</LetterItem>
            </ul>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent" aria-hidden />

          <SectionHeading tag="h2" sectionNumber="10">
            Is the award given by the Board of Arbitration binding on the parties?
          </SectionHeading>
          <div className="relative px-5 py-7 pb-9 text-sm leading-relaxed text-slate-300 sm:px-8 sm:py-9 sm:pb-11 sm:text-[15px] sm:leading-[1.75]">
            <p>
              The award given by the Board of Arbitration is binding on the Government as well as the staff side subject to the overriding authority of the Parliament. The award can be modified/ rejected only with the approval of the Parliament through a formal resolution on grounds affecting national economy or social justice.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default JointConsultativeMachinery
