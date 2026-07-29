import React from 'react'
import Link from 'next/link'

const chargedExpenditureItems = [
  'Interest, sinking fund charges and redemption charges on loan and debts.',
  'Salary, allowances and pension payable to or in respect of Comptroller and Auditor General Of India.',
  'Any sum required satisfying any judgment, decree or award of any court or arbitration tribunal.',
  'Any other expenditure declared by the constitution of India or by Parliament by law to be so charged.',
]

type MarkerItemProps = {
  marker: string
  markerClassName: string
  children: React.ReactNode
}

const MarkerItem = ({ marker, markerClassName, children }: MarkerItemProps) => {
  return (
    <li className="flex gap-4 rounded-2xl border border-white/8 bg-slate-950/35 px-4 py-4 shadow-sm shadow-black/10">
      <span
        className={`inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full px-2 text-sm font-semibold ${markerClassName}`}
      >
        {marker}
      </span>
      <span className="pt-0.5 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
        {children}
      </span>
    </li>
  )
}

const RailwayBudget = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-cyan-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            RAILWAY BUDGET
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-emerald-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-emerald-500/10 backdrop-blur-md sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-emerald-50 sm:text-2xl">
            Introduction and definition: -
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-4 rounded-2xl border border-emerald-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Budget is a statement of the estimated annual receipts and expenditure both on capital as well as
                revenue transactions of an organization. It is a process of planning and reviewing the activities of
                an organization. Railways being a Govt. of India department, receipts and payments of the system were
                use to be merged in the General Budget of the Govt. of India. As a result of the recommendations of
                the &ldquo;ACWORTH COMMITTEE&rdquo; during 1920-21, it was decided to separate the finances of Railways
                from General Finances with the objects of securing stability for General revenues and to strengthen
                the Railways finances. This is generally known as &ldquo;Separation Convention of 1924&rdquo;. Since
                then the Railway Budget is submitted in advance of the General budget.
              </span>
            </li>

            <li className="flex gap-4 rounded-2xl border border-emerald-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                In terms of article 112 of the Constitution of India, the budget is presented to both the Houses of
                parliament viz. Lok sabha and Rajya sabha.
              </span>
            </li>

            <li className="flex gap-4 rounded-2xl border border-emerald-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                The expenditure on Railways may be either voted or charged. The expenditure covered under the former
                category requires the approval of parliament. But in respect of charged expenditure the sanction of
                the President of India is conveyed without being submitted for the vote of Parliament. The items of
                expenditures that are covered under this category are as under: -
              </span>
            </li>
          </ul>
        </article>

        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-slate-900/50 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
          <ol className="space-y-4">
            {chargedExpenditureItems.map((item, index) => (
              <MarkerItem
                key={item}
                marker={['i', 'ii', 'iii', 'iv'][index]}
                markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]"
              >
                {item}
              </MarkerItem>
            ))}
          </ol>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-emerald-50 sm:text-2xl">
            THE SOURCE OF FUNDS FOR THE RAILWAY ORGANIZATION: -
          </h2>
          <div className="mt-4 h-px w-20 rounded-full bg-emerald-500/40" />

          <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-slate-950/45 p-5 ring-1 ring-cyan-500/10 sm:p-6">
            <h3 className="text-lg font-bold tracking-tight text-cyan-100 sm:text-xl">CONSOLIDATED FUND OF INDIA.</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-4 rounded-2xl border border-cyan-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  In terms of article 266(I) of the Constitution of India, a fund is created which will act as a
                  reservoir in which all the earnings flow (credited) and from which the expenditures of Government as
                  authorized by the Parliament will be made. Central Government is having Consolidated Fund of India.
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-cyan-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  Any expenditure to be made from this fund needs Parliament&apos;s sanction/votes. For this purpose, a
                  bill known as &ldquo;Appropriation bill&rdquo; is required to be introduced by Railway minister in
                  Parliament.
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-cyan-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  The bill is discussed and when passed by the Parliament is send to the President of India for his
                  assent. When the assent is given by the President, the bill gets converted into the
                  &ldquo;Appropriation Act&rdquo; and this act enables to withdraw the money from the Consolidated Fund
                  of India.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-rose-500/20 bg-slate-950/45 p-5 ring-1 ring-rose-500/10 sm:p-6">
            <h3 className="text-lg font-bold tracking-tight text-rose-100 sm:text-xl">CONTINGENCY FUND OF INDIA.</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  Normally all expenses incurred by the Government should be met out of consolidated fund of India
                  with the vote of the parliament or Appropriations sanctioned by the President. However, to meet
                  unforeseen contingencies when the expenditures cannot be met out of available grants and the vote of
                  the parliament cannot be obtained due to the same not being in session or dissolved the expenditure
                  is met out of fund created for the purpose under article 267(II) which is known as &ldquo;Contingency
                  Fund of India&rdquo;. The fund is under the control of President of India. As far as Railways are
                  concerned, Financial Commissioner (Railways) controls the fund.
                </span>
              </li>

              <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  This fund is used as and when the contingency arises. Money can be withdrawn from this fund on an
                  application addressed to the President and is given as an advance which needs recoupment.{' '}
                  <span className="font-semibold text-rose-300">
                    The amount from this fund can be withdrawn when the parliament is not in session and to meet the
                    unforeseen expenditure, which cannot be met from out of the amount of grant available.
                  </span>
                </span>
              </li>

              <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-900/35 px-4 py-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                  As soon as parliament comes to session an &ldquo;Accommodation bill&rdquo; is passed and amount is
                  recouped from Consolidated Fund of India.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-violet-100 sm:text-2xl">DEMANDS FOR GRANTS: -</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-violet-500/40" />
          <ul className="mt-6 space-y-4">
            <li className="flex gap-4 rounded-2xl border border-violet-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                The budget proposals of the expenditures to be met out from the &ldquo;Consolidated fund of India&rdquo;
                should be presented in the form of Demands for Grants.
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-violet-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Parliament has got the powers to assent or to refuse to assent or to reduce the amount proposed by
                the Railway Ministry during the course of discussion on Railway budget.
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-violet-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Such powers are exercised to cut motion.
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-violet-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                The voted part of expenditures together with the charged appropriation are presented to the parliament
                in the form of Demands for Grants.
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-violet-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_0_4px_rgba(167,139,250,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                At present there are sixteen demands for Grants which are grouped under seven categories viz.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-sky-100 sm:text-2xl">PREPARATION OF ANNUAL BUDGET: -</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-sky-500/40" />
          <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            <p>
              Preparation of annual budget is done by the Railway Administration and other production units. The
              revised estimates for the current financial year and the budget estimate for the ensuing financial year
              are prepared and submitted to Railway board in the month of{' '}
              <span className="font-semibold text-rose-300">November every year.</span>
            </p>

            <div className="rounded-2xl border border-sky-500/20 bg-slate-950/45 p-5 ring-1 ring-white/5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-sky-100 sm:text-xl">
                The estimation is done on the basis of –
              </h3>
              <ol className="mt-4 space-y-4">
                <MarkerItem marker="1" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                  Actual expenditure for the previous year under each demand.
                </MarkerItem>
                <MarkerItem marker="2" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                  Actual expenditure for the first seven months of the previous financial year under each demand.
                </MarkerItem>
                <MarkerItem marker="3" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                  Actual expenditures for the first six months of the current financial year and the approximate
                  expenditures for the seventh month.
                </MarkerItem>
              </ol>
            </div>

            <p>
              The revised requirement of the remaining five months of the year are thus worked out which are known as
              revised estimates for the current year. The same become budget estimates for the ensuing financial year
              after taking into account special features and known factors for the next financial year.
            </p>

            <p>
              The budget is presented to the parliament duly compiled by the Railway board in the month of February
              each year on the dates fixed for the purpose.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 sm:text-2xl">
            PRESENTATION TO THE PARLIAMENT: -
          </h2>
          <div className="mt-4 h-px w-16 rounded-full bg-fuchsia-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            The consolidated budget proposals are presented before the parliament by Honorable Railway Minister in
            the following form –
          </p>
          <ol className="mt-5 space-y-4">
            <MarkerItem marker="1" markerClassName="border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_0_4px_rgba(232,121,249,0.14)]">
              The speech of Railway Minister (Yellow Book)
            </MarkerItem>
            <MarkerItem marker="2" markerClassName="border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_0_4px_rgba(232,121,249,0.14)]">
              The book of Demands for Grants(Blue Book)
            </MarkerItem>
            <MarkerItem marker="3" markerClassName="border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_0_4px_rgba(232,121,249,0.14)]">
              The explanatory memorandum (White Book)
            </MarkerItem>
            <MarkerItem marker="4" markerClassName="border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_0_4px_rgba(232,121,249,0.14)]">
              Works, Machinery and Rolling Stock Programme (Pink Book)
            </MarkerItem>
            <MarkerItem marker="5" markerClassName="border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_0_4px_rgba(232,121,249,0.14)]">
              Budgetary Notes(Green Book)
            </MarkerItem>
          </ol>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-cyan-100 sm:text-2xl">APPROPRIATION BILL: -</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-cyan-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            In terms of article 114(I) of the Constitution of India, after the budget is voted by the Parliament and
            Appropriations sanctioned by the President, an Appropriation bill is introduced in the Parliament, on
            passing of the same, it becomes Appropriation Act. This act authorizes Government to withdraw money from
            consolidated fund of India to the extent sanction for incurrence of expenditure.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-amber-100 sm:text-2xl">RULES OF RE-APPROPRIATION: -</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-amber-500/40" />
          <div className="mt-6 rounded-2xl border border-amber-500/20 bg-slate-950/45 p-5 ring-1 ring-white/5 sm:p-6">
            <h3 className="text-lg font-bold tracking-tight text-amber-100 sm:text-xl">
              The following are the rules of Re-appropriation: -
            </h3>
            <ol className="mt-4 space-y-4">
              <MarkerItem marker="1" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                Re-appropriation is not permitted from one demand to another demand.
              </MarkerItem>
              <MarkerItem marker="2" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                Re-appropriation is not permitted from capital to revenue demands and vice versa.
              </MarkerItem>
              <MarkerItem marker="3" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                Re-appropriation is not permitted from voted expenditure to charged expenditure and vice versa.
              </MarkerItem>
              <MarkerItem marker="4" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                Any surplus amount that remains unutilized by the end of the financial year lapses with that year and
                is not available for spending during the next financial year.
              </MarkerItem>
              <MarkerItem marker="5" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                Railway Board is empowered to make re-appropriations within the same demand.
              </MarkerItem>
              <MarkerItem marker="6" markerClassName="border border-amber-400/20 bg-amber-400/10 text-amber-200 shadow-[0_0_0_4px_rgba(251,191,36,0.14)]">
                GM is empowered to make re-appropriations from one subhead of demand to another subhead of demand but
                within the same demand.
              </MarkerItem>
            </ol>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-emerald-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-emerald-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-emerald-100 underline decoration-emerald-400/70 underline-offset-4 sm:text-2xl">
            Parliamentary Control over Railway Finance
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            The Parliamentary Control Over Railway Budget is exercised by the following committees either before the
            submission of demands to parliament for voting or after the expenditure is incurred and annual accounts
            are closed-
          </p>

          <ol className="mt-6 space-y-4">
            <MarkerItem marker="1" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Railway Convention Committee
            </MarkerItem>
            <MarkerItem marker="2" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Estimate Committee
            </MarkerItem>
            <MarkerItem marker="3" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Discussion of Railway Budget
            </MarkerItem>
            <MarkerItem marker="4" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              National Railway Users Consultative Council
            </MarkerItem>
            <MarkerItem marker="5" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Committee on Subordinate Legislation
            </MarkerItem>
            <MarkerItem marker="6" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Committee on Government Assurance
            </MarkerItem>
            <MarkerItem marker="7" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              Public Accounts Committee
            </MarkerItem>
            <MarkerItem marker="8" markerClassName="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_4px_rgba(52,211,153,0.14)]">
              References from Member of Parliament
            </MarkerItem>
          </ol>
        </section>

        <section className="mt-8 space-y-8">
          <article className="rounded-2xl border border-lime-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-lime-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-lime-100 underline decoration-lime-400/70 underline-offset-4 sm:text-2xl">
              1 Railway Convention Committee---
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              This is an adhoc committee of parliament consisting of 18 members (12 LS and 6 RS). It was constituted
              for reviewing the financial arrangements between Railway Revenues and General Revenues. This is the only
              committee of parliament to include two union minister-MR and FM.
            </p>

            <ul className="mt-6 space-y-4">
              <MarkerItem marker="➤" markerClassName="border border-lime-400/20 bg-lime-400/10 text-lime-200 shadow-[0_0_0_4px_rgba(163,230,53,0.14)]">
                It examines periodically the Railway Finance and Working.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-lime-400/20 bg-lime-400/10 text-lime-200 shadow-[0_0_0_4px_rgba(163,230,53,0.14)]">
                It reviews the rate of dividend payable by the railway to General Revenue.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-lime-400/20 bg-lime-400/10 text-lime-200 shadow-[0_0_0_4px_rgba(163,230,53,0.14)]">
                This Committee normally meets after every 5 years.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-lime-400/20 bg-lime-400/10 text-lime-200 shadow-[0_0_0_4px_rgba(163,230,53,0.14)]">
                It recommends the changes to be made in Railway Finance.
              </MarkerItem>
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-cyan-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-cyan-100 underline decoration-cyan-400/70 underline-offset-4 sm:text-2xl">
              2 Estimate Committee --
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              This is a Parliamentary Committee to examine such of the estimates as it may deem fit or specially
              reffered to it by Parliament or Speaker.
            </p>

            <ul className="mt-6 space-y-4">
              <MarkerItem marker="➤" markerClassName="border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_0_4px_rgba(34,211,238,0.14)]">
                There are 30 members elected by Lok Sabha every year.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_0_4px_rgba(34,211,238,0.14)]">
                No minister is elected.
              </MarkerItem>
            </ul>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-violet-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-violet-100 underline decoration-violet-400/70 underline-offset-4 sm:text-2xl">
              3 Discussion of Railway Budget –
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              The Railway budget is discussed and debated in parliament by members of both houses. They raise
              starred question, unstarred questions and short notice questions, the Railway minister replies. Thus
              parliament exercises control over Railway finance and budget. Starred: Questions for oral answers. Unstarred: Replies to which are laid on the table of the house. Short notice: A minimum notice of 10 days is required.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-rose-100 underline decoration-rose-400/70 underline-offset-4 sm:text-2xl">
              4 NRUCC --
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              To secure better representation of railway users and afford more frequent opportunities for consultation
              between Railway & Railway Users on matters related to services rendered by railway NRUCC was formed in
              1953.
            </p>

            <ul className="mt-6 space-y-4">
              <MarkerItem marker="➤" markerClassName="border border-rose-400/20 bg-rose-400/10 text-rose-200 shadow-[0_0_0_4px_rgba(251,113,133,0.14)]">
                Members hold office not more than 2 years.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-rose-400/20 bg-rose-400/10 text-rose-200 shadow-[0_0_0_4px_rgba(251,113,133,0.14)]">
                The council consists of 7 persons.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-rose-400/20 bg-rose-400/10 text-rose-200 shadow-[0_0_0_4px_rgba(251,113,133,0.14)]">
                They are appointed by MR from various ministries, Rly. Committees, organization and eminent persons
                who take interest in Rly. Problems.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-rose-400/20 bg-rose-400/10 text-rose-200 shadow-[0_0_0_4px_rgba(251,113,133,0.14)]">
                The council meet at least once a year. MR will preside the meeting of council
              </MarkerItem>
            </ul>
          </article>

          <article className="rounded-2xl border border-amber-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-amber-100 underline decoration-amber-400/70 underline-offset-4 sm:text-2xl">
              5 Committee on subordinate legislation ---
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              It scrutinizes and reports to Parliament that the power to make regulation, rules, subrules, bylaws
              etc. conferred by constitution or delegated by Parliament are being properly exercised.
            </p>
          </article>

          <article className="rounded-2xl border border-teal-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-teal-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-teal-100 underline decoration-teal-400/70 underline-offset-4 sm:text-2xl">
              6 Committee on Government Assurances –
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              It scrutinizes whether Assurances, promises, undertaking given by the Minister from time to time, on
              the floor of the Lok Sabha and Rajya Sabha have been implemented within the minimum time.
            </p>
          </article>

          <article className="rounded-2xl border border-sky-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-sky-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-sky-100 underline decoration-sky-400/70 underline-offset-4 sm:text-2xl">
              7 Public Accounts Committee
            </h2>

            <ul className="mt-6 space-y-4">
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                It examine the accounts of sum granted by the parliament for expenditure to satisfy: -
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                that the money sanctioned have been utilized legally for the services and purposes to which they have
                been charged.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                The expenditure confirms to the authority which governs it.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                That every Re-appropriation has been made in accordance with the provisions made under rules.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                PAC consists of 22 members from the both houses of parliament every year
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                A minister is not elected. If a member is appointed as minister, he will be ceased to be a member of
                PAC.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                Term of office of member of committee shall not exceed one year.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                Chairman of PAC is appointed by the Speaker.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                If Dy. Speaker is a member of PAC, he will be appointed as Chairman.
              </MarkerItem>
              <MarkerItem marker="➤" markerClassName="border border-sky-400/20 bg-sky-400/10 text-sky-200 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]">
                Committee has its own programme and procedures.
              </MarkerItem>
            </ul>
          </article>

          <article className="rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 underline decoration-fuchsia-400/70 underline-offset-4 sm:text-2xl">
              8 Reference from Member of Parliament –
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
              Any MP may address the Ministery of Railway, or a Railway Administration on any matter concerning
              railway working. Member may also ask questions in both the houses of Parliament on issue connected
              with railway working.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-red-400 sm:text-4xl">
              Public Expenditure Accountability of the Indian Railways
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                The Indian Railways (IR) is one of the chief logistics agents of the Government of India (GOI).
              </p>

              <ul className="space-y-4">
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    Considering the significant GOI funding into IR, public expenditure accountability (PEA) becomes
                    an issue of importance.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    This paper looks into different aspects of the expenditure and financial management of IR.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    The paper is divided into three portions.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    The first portion looks at the railway-government interface. The main areas of focus here include
                    a brief examination of The Indian Railways Act, the financial interface between the GOI and IR
                    (consisting of budgetary support, market sourced financing and dividend payments), evaluating the
                    need for a separate railway budget, political interference in the activities of IR and the
                    interaction of IR with state governments.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    The second portion of the paper deals with the internal financial management of IR. In this
                    section, there is an effort to evaluate the revenue generation by IR along with suggestions for
                    enhancing its potential. This is followed by a look at the issue of subsidies to IR. Investment
                    decisions of IR and the Special Railway Safety Fund (SRSF) along with the issue of excess
                    manpower and cost reduction are other topics included in this section.
                  </span>
                </li>
                <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
                  <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
                    The paper ends with a roadmap to corporatisation as a possible solution to the problems IR is
                    faced with. The main areas dealt with are financial issues, pensions, the need for customer
                    focus, the importance of focus on core competencies and a need to revamp IRs administrative
                    structure and attitude.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="rounded-2xl border border-red-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-red-500/10 backdrop-blur-sm sm:p-8">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-red-400 sm:text-4xl">
              Cannons/Standards of Financial Propriety –
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.9]">
              <p>
                In exercise of their financial powers, the sanctioning authority must pay due attention to the
                following principles –
              </p>

              <ul className="space-y-4">
                <MarkerItem marker="i" markerClassName="border border-red-400/20 bg-red-400/10 text-red-200 shadow-[0_0_0_4px_rgba(248,113,113,0.14)]">
                  The expenditure should not prima facie be more than the occasion demands and that every Government
                  should exercise the same vigilance in respect of expenditures incurred from public money as a person
                  of ordinary prudence, would exercise in respect of expenditure of his own money.
                </MarkerItem>

                <MarkerItem marker="ii" markerClassName="border border-red-400/20 bg-red-400/10 text-red-200 shadow-[0_0_0_4px_rgba(248,113,113,0.14)]">
                  No authority should exercise its powers of sanctioning expenditure to pass an order, which will be
                  directly or indirectly to its own advantage.
                </MarkerItem>
              </ul>

              <div className="rounded-2xl border border-red-500/15 bg-slate-950/40 p-5 ring-1 ring-white/5 sm:p-6">
                <ul className="space-y-4">
                  <MarkerItem marker="iii" markerClassName="border border-red-400/20 bg-red-400/10 text-red-200 shadow-[0_0_0_4px_rgba(248,113,113,0.14)]">
                    Public money should not be utilized for the benefit of a particular person or section of a
                    community unless –
                  </MarkerItem>
                </ul>

                <div className="mt-4 pl-2 sm:pl-6">
                  <ul className="space-y-4">
                    <MarkerItem marker="a" markerClassName="border border-orange-400/20 bg-orange-400/10 text-orange-200 shadow-[0_0_0_4px_rgba(251,146,60,0.14)]">
                      The amount of expenditure involved is insignificant.
                    </MarkerItem>
                    <MarkerItem marker="b" markerClassName="border border-orange-400/20 bg-orange-400/10 text-orange-200 shadow-[0_0_0_4px_rgba(251,146,60,0.14)]">
                      A claim for the amount could be enforced in a court of law.
                    </MarkerItem>
                    <MarkerItem marker="c" markerClassName="border border-orange-400/20 bg-orange-400/10 text-orange-200 shadow-[0_0_0_4px_rgba(251,146,60,0.14)]">
                      The expenditure is in pursuance of recognized policy or custom.
                    </MarkerItem>
                  </ul>
                </div>
              </div>

              <ul className="space-y-4">
                <MarkerItem marker="iv" markerClassName="border border-red-400/20 bg-red-400/10 text-red-200 shadow-[0_0_0_4px_rgba(248,113,113,0.14)]">
                  The amount of allowances such as travelling allowance granted to meet expenditure of a particular
                  type should be so regulated that the allowance are not on a whole a source of profit to the
                  recipient.
                </MarkerItem>
              </ul>

              <p>
                <span className="font-semibold text-blue-400">Note:</span> All proposals involving financial
                implications except those which have been specifically exempted for this purpose should be referred
                to finance branch for advice before these are sanctioned.
              </p>
            </div>
          </article>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/financial-rules"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-black/15 ring-1 ring-emerald-500/10 transition hover:border-emerald-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Financial Rules page</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RailwayBudget