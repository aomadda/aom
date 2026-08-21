'use client'
import { ArrowLeftRight, Clock, FileBadge, Sparkles } from 'lucide-react'

const Transfers = () => {
  const transferSections = [
    {
      title: 'Temporary Transfer',
      content: 'When the transfer is temporary the same should be mentioned in the transfer order. In such cases the employee is entitled to TA/DA for a period of 180 days after which the transfer will become permanent. The employee will continue to draw HRA/CCA at the rates admissible in respect of his old headquarters. He can retain the Railway quarters at the old station.',
    },
    {
      title: 'Permanent Transfer',
      content: 'In the case of permanent transfer ordered on administrative ground the employee is eligible for Composite transfer grant, joining time, pass on transfer account, advance of pay equal to one month basic pay. Staff are also transferred to other seniority units on administrative grounds on complaints from Vig/CBI/SPE etc.',
    },
    {
      title: 'Request Transfer',
      content: 'When a transfer is ordered at the request of the employee, transfer privileges are not admissible. However, in the case of periodical transfer where request of the employee is accepted composite transfer grant is paid. If the order is silent about the nature of the order, it will be construed that it is ordered on administrative grounds. In respect of request transfer from one station to another within the same seniority unit, transfer orders are issued on priority basis.',
    },
    {
      title: 'Periodical Transfer',
      content: 'Staff occupying sensitive posts and who come in contact with the public, contractors etc. are to be transferred once in every 4 years. In case of clerical staff working in sensitive posts rotational transfer from one section to another or one seat to another will meet the requirement of the periodical transfer.',
    },
    {
      title: 'Mutual Transfer',
      content: 'Mutual transfer may be allowed even in the intermediate grade where there is no element of direct recruitment. In mutual transfer the employees are given the seniority of the junior. Mutual Transfer if permitted only between the same Communities.',
    },
    {
      title: 'Transfer of Trade Union Officials',
      content: 'Proposal for transfer of an office bearer should be advised to the union concerned to make alternative arrangements. Union should be allowed to bring the proposal to the notice of DRM/CWM or GM later, if necessary.',
    },
  ]

  const additionalPoints = [
    'In the case of periodical transfer where GM decides not to cancel the order the transfer may be kept pending till next election, subject to a maximum period of one year. If an office bearer is transferred from one section/department within the same office there is no need to inform union.',
    'Transfer of union officials on the recommendation of CBI/SPE, can be decided only if the GM has seen the papers.',
    'The procedure of advising union about transfer is not necessary in the case of request transfer.',
    'Information as usual is to be given to the union in the case of promotional transfer.',
  ]

  const policyExemptions = [
    { key: 'i', text: 'Transfers sought on mutual exchange basis;' },
    { key: 'ii', text: 'Transfers sought on spouse ground;' },
    { key: 'iii', text: 'Railway servants who are care-givers to a disabled child and' },
    { key: 'iv', text: 'Physically handicapped Railway servants.' },
  ]

  const joiningTimePoints = [
    'It is not admissible for temporary transfer.',
    'Railway servants are eligible for joining time to take up employment on reduction of establishment or on discharge provided the orders are received while working in old post, otherwise the break will be treated as joining time without pay up to 30 days.',
    'Serving Railway servants, State and Central Government employees are entitled for joining time on appointment to Railways through competitive examinations. Temporary Railway servants with less than 3 years of service are eligible for joining time without pay.',
    'Joining time commences from the date of relief if the charges are handed over in the forenoon and from the next day if the charges are handed over in the afternoon.',
    'The joining time is calculated from old head quarters or tour station for all purposes.',
    'Not more than one day joining time is admissible for transfer within the same station or where no change of residence is involved. Same station for this purpose includes areas falling within the localities of Municipality, Corporation, Suburban limits, Cantonment and other notified areas.',
    'Joining time on account of transfer is admissible provided if change of residence is involved with reference to the distance between old and new station. It is allowed at the following rate.',
  ]

  const joiningTimeRates = [
    { distance: '1000 Kms. Or less', days: '10 days' },
    { distance: 'More than 1000 Kms', days: '12 days' },
    { distance: 'More than 2000 Kms', days: '15 days*' },
  ]

  const additionalRules = [
    'Distance means the actual distance and not the weighted distance for the joining time.',
    'Extension of joining time is allowed in special circumstances to Gr. C & D employees up to 30 days by DRM/HOD. Railway Board can allow extension beyond 30 days.',
    'Extensions are calculated by adding eight days for preparation plus reasonable transit time, holidays, allowance for unavoidable detention due to disruption to transport, strike, natural calamities and time spent for catching connecting trains etc.',
    'When holidays follow joining time, it is deemed as extended one.',
    'When transfer order is modified by posting the Railway servant to a new station during transit, a fresh spell of joining time from the following day of the receipt of revised order is admissible.',
    'Unavailed joining time can be credited to the LAP subject to the restrictions on the accumulation of LAP.',
    'Joining time can be combined with all kinds of leave, vacation and holidays. It cannot be combined with CL and SCL.',
    'Joining time is regarded as duty. Railway servants on joining time are eligible for Pay, DA, HRA, and CCA etc. as drawn in the old post.',
    'The old station is the head quarters of the Railway servant during joining time.',
    'At the time of deputation joining time will be allowed as provided in the Department / Organisation of joining unless different provisions are agreed mutually. (Rul 1101 to 1115 of IREC - 1)',
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#120814] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_12%_-10%,rgba(244,63,94,0.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_92%_18%,rgba(232,121,249,0.10),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-3xl animate-[fade-up_0.55s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-300/90">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Establishment
          </p>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-400/25 bg-rose-500/10 text-rose-200">
            <ArrowLeftRight className="h-7 w-7" strokeWidth={1.75} />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRANSFERS
          </h1>
          <p className="mt-3 text-lg font-medium text-rose-100/90 sm:text-xl">
            Types, privileges, policy exemptions and joining time
          </p>
        </header>

        {/* Transfer types grid */}
        <section className="mb-12 animate-[fade-up_0.65s_ease-out]">
          <div className="grid gap-4 md:grid-cols-2">
            {transferSections.map((section, index) => (
              <article
                key={index}
                className={`rounded-3xl border border-white/8 bg-white/[0.03] p-5 transition hover:border-rose-400/30 hover:bg-rose-500/[0.05] sm:p-6 ${
                  index === transferSections.length - 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-rose-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {/* Additional union points */}
          <div className="mt-4 space-y-3">
            {additionalPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 sm:px-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 font-mono text-[11px] font-bold text-rose-300">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comprehensive Transfer Policy */}
        <section className="mb-12 animate-[fade-up_0.75s_ease-out] overflow-hidden rounded-3xl border border-rose-400/25 bg-linear-to-br from-rose-950/70 via-[#120814] to-fuchsia-950/30 p-5 sm:p-8">
          <div className="mb-5 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-200">
              <FileBadge className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
              Comprehensive Transfer Policy - Exemption from 5 years service condition - [RBE No.12/2017 / PBC No.17/2017]
            </h2>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-slate-300 sm:text-base">
            No inter railway transfer requests will be considered till completion of five (05) years of joining Railway for non-gazetted employees.
          </p>

          <p className="mb-4 text-sm font-semibold text-rose-200 sm:text-base">
            The following categories of transfers in the case of non-gazetted staff will be exempted from the condition of a minimum of five (05) years service.
          </p>

          <ul className="grid gap-3 sm:grid-cols-2">
            {policyExemptions.map((item) => (
              <li
                key={item.key}
                className="flex gap-3 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3"
              >
                <span className="font-mono text-xs font-bold text-rose-300">({item.key})</span>
                <span className="text-sm leading-relaxed text-slate-200">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Joining Time */}
        <section className="animate-[fade-up_0.85s_ease-out]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-200">
              <Clock className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">JOINING TIME</h2>
          </div>

          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Joining time is granted to Railway servants on transfer to enable them to join a new post.
          </p>

          <ol className="mb-8 space-y-3">
            {joiningTimePoints.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 font-mono text-[11px] font-bold text-rose-300">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">{item}</span>
              </li>
            ))}
          </ol>

          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold text-rose-200 sm:text-base">Joining Time Rate:</p>
            <div className="overflow-hidden rounded-2xl border border-rose-400/20 bg-white/[0.03]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-rose-400/20 bg-rose-500/10">
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                      Distance
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                      Days
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {joiningTimeRates.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 last:border-b-0 hover:bg-rose-500/[0.05]"
                    >
                      <td className="px-5 py-3.5 text-sm text-slate-200">{row.distance}</td>
                      <td className="px-5 py-3.5">
                        <span className="inline-flex rounded-lg border border-rose-400/25 bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-100">
                          {row.days}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs italic text-slate-400 sm:text-sm">
              * In the case of travel by air, joining time will be limited to 12 days.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-rose-200 sm:text-base">Additional Rules:</p>
            <ol className="space-y-3">
              {additionalRules.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 font-mono text-[11px] font-bold text-rose-300">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Transfers
