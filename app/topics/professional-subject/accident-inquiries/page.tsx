import React from 'react'

const inquiryLevels = [
  {
    no: 'i',
    text: 'All serious accident shall be inquired into by the Commissioner of Railway Safety.',
  },
  {
    no: 'ii',
    text: 'In case Commissioner of Railway Safety or Chief Commissioner of Railway Safety is not in a position to inquire into serious accident cases the Inquiry shall be done by JA Grade Inquiry Committee with DRM as the accepting authority subject to the review by CSO.',
  },
  {
    no: 'iii',
    text: 'All cases of collisions falling under A1 to A4 categories shall be inquired into by a committee of SAG officers with General Manager as the accepting authority unless the same is being inquired into by CRS.',
  },
  {
    no: 'iv',
    text: 'All other consequential train accidents except Unmanned Level Crossing Accidents shall be inquired into by a committee of JA grade officers and in its absence by Branch Officers. DRM shall be the accepting authority for these inquiries subject to the review by CSO.',
  },
  {
    no: 'v',
    text: 'Consequential Unmanned Level Crossing accidents and all other train accidents shall be inquired into by a committee of Senior Scale or Junior Scale Officers as decided by respective DRMs with DRM as the accepting authority.',
  },
  {
    no: 'vi',
    text: 'All yard accidents shall be inquired into by a Committee of Senior Supervisors with Senior DSO/ DSO as accepting authority.',
  },
  {
    no: 'vii',
    text: 'All cases of indicative Accidents shall be inquired into by a Committee of Senior or Junior Scale Officers with DRM as the accepting authority.',
  },
  {
    no: 'viii',
    text: 'General Manager or DRM can have the inquiry conducted by a committee of higher levels of officers than the above mentioned levels depending upon the seriousness of accident.',
  },
  {
    no: 'ix',
    text: 'In accident cases wherein the Inquiry Committee determines responsibility on the Staff of Foreign Railway, the Inquiry Report should be put up to the Principal Head of the Department of the concerned department of the Railway on which the accident took place through CSO after which such inquiry report shall be accepted by the AGM (instead of DRM). Finalization of Inter-railway DAR cases arising out of such inquiry reports be followed up by the Principal Head of the Department of the concerned department of the Railway on which the accident took place. If suitable response is not received from the respondent railway at General Managers’ level, then the case should be referred to Railway Board.',
  },
  {
    no: 'x',
    text: 'All cases of equipment failure shall be inquired into by Senior Supervisors/Supervisors of respective departments.',
  },
  {
    no: 'xi',
    text: 'All inquiries will be ordered by the concerned DRM except for inquiries into collisions as per item (iii) as above wherein General Manager will order the inquiries.',
  },
]

const enquirySchedule = [
  { no: '1', time: 'D', remarks: 'Date of Accident' },
  {
    no: '2',
    time: 'D + 1',
    remarks:
      'DRM /GM* shall order the inquiry, if no particular department accepts the responsibility.',
  },
  {
    no: '3',
    time: 'D + 3',
    remarks: 'Committee shall convene the inquiry into the accident.',
  },
  {
    no: '4',
    time: 'D + 7',
    remarks: 'Committee shall submit the inquiry report to DRM/GM*.',
  },
  {
    no: '5',
    time: 'D + 10',
    remarks: 'Acceptance of inquiry report by the DRM/GM*.',
  },
  {
    no: '6',
    time: 'D + 15',
    remarks: 'Inquiry reports will be finalized by CSO/AGM.',
  },
  {
    no: '7',
    time: 'D + 20',
    remarks:
      'Submission of inquiry report to CRS for the section of the Railways on which the accident occurred with the remarks. A copy of findings of the Inquiry Report to be sent to Railway Board.',
  },
  {
    no: '8',
    time: 'D + 90',
    remarks: 'DAR action against responsible officials to be completed.',
  },
]

const markerTone = {
  rose: 'bg-linear-to-br from-rose-200 to-rose-500 text-rose-950 ring-rose-100/50 shadow-rose-950/50',
  sky: 'bg-linear-to-br from-sky-200 to-sky-500 text-sky-950 ring-sky-100/50 shadow-sky-950/50',
  violet: 'bg-linear-to-br from-violet-200 to-violet-500 text-violet-950 ring-violet-100/50 shadow-violet-950/50',
} as const

function ListMark({
  label,
  tone,
  lineClassName,
  connect = false,
}: {
  label: string
  tone: keyof typeof markerTone
  lineClassName: string
  connect?: boolean
}) {
  return (
    <div className="relative flex w-16 shrink-0 justify-center">
      {connect ? (
        <span className={`absolute top-10 bottom-0 w-px ${lineClassName}`} aria-hidden />
      ) : null}
      <span
        className={`relative z-10 inline-flex h-9 min-w-12 items-center justify-center rounded-full px-2.5 text-[11px] font-extrabold tracking-tight shadow-md ring-1 ${markerTone[tone]}`}
      >
        {label}
      </span>
    </div>
  )
}

const AccidentInquiriesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#100c12] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(244,63,94,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_30%,rgba(251,191,36,0.07),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-rose-500 via-amber-400 to-sky-400" />

          <header className="border-b border-rose-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-rose-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-rose-100 via-orange-100 to-amber-100 sm:text-3xl">
              Accident inquiries
            </h1>
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
            <section className="overflow-hidden rounded-2xl border border-rose-400/25 bg-linear-to-br from-rose-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-rose-400/20 bg-rose-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-rose-50 sm:text-base">
                  Sub: Definition and Re-classification of Accidents on Indian Railways.
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Attention is invited to Item No. 9 – Level of Enquiry of Board’s letter No. 2000/Safety(A&R)/19/20 dated 13.12.2000. Board has made some additions/modifications in Item No. 9. A copy of revised Item No. 9 is enclosed which may please be incorporated in above letter and circulated to concerned officers of all your divisions for information and compliance.
                </p>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Please acknowledge the receipt of this letter.
                </p>
                <p className="rounded-xl border border-rose-400/20 bg-rose-950/25 px-4 py-3 text-[15px] leading-[1.8] text-slate-100 sm:text-base">
                  Revised Item No. 9 to replace the existing item 9 at pages 6-7 of letter No. 2000/Safety(A&R)/19/20 dated 13.12.2000 regarding levels of accident inquiries to be conducted in various accidents:
                </p>
                <h3 className="text-sm font-bold tracking-[0.12em] text-rose-100 sm:text-base">
                  Accident Inquiry by the Railways:
                </h3>
                <ol>
                  {inquiryLevels.map((item, index) => (
                    <li key={item.no} className="flex gap-3 pb-3 last:pb-0 sm:gap-4">
                      <ListMark
                        label={item.no}
                        tone="rose"
                        lineClassName="bg-rose-400/35"
                        connect={index < inquiryLevels.length - 1}
                      />
                      <p className="flex-1 rounded-2xl border border-rose-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-amber-50 sm:text-base">
                  Sub: Definition and Re-classification of Accidents on Indian Railways.
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <p className="text-[15px] leading-[1.8] text-amber-100/90 sm:text-base">
                  Ref: CSO/S.E. Railway’s letter No. 50/319/AM/Pt.3/2 dated 13.02.2006.
                </p>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Vide above letter South Eastern Railway has sought clarification on Item No. (vii) of revised item No. 9 circulated vide Board’s letter of even number dated 03.01.2006 regarding accepting authority in all cases of indicative accidents. The matter has been examined in this office and it has been decided to modify Item No. (vii) as under:-
                </p>
                <blockquote className="border-l-2 border-amber-400/50 pl-4 text-[15px] leading-[1.8] text-amber-50 italic sm:text-base">
                  “All cases of indicative Accidents shall be inquired into by a Committee of Senior or Junior Scale Officers with DRM as the accepting authority except all cases of signal passing at danger shall be enquired into by a JA grade Committee of officers at Divisional level with Sr. DSO/DSO as one of the members”.
                </blockquote>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Above revised contents may be circulated to concerned officers of all your division for information and necessary action.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-sky-400/25 bg-linear-to-br from-sky-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-sky-400/20 bg-sky-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-sky-50 sm:text-base">
                  Sub: Procedure for completion of Departmental accident inquiries.
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  It is observed from the Accident Manuals of the Zonal Railways that there is no uniformity in time schedule of completion of Inquiry Report/D&AR at various levels. In order to ensure timely completion of accident inquiry report/DAR following model time schedule should be adopted.
                </p>
                <h3 className="text-sm font-bold tracking-[0.08em] text-sky-100 sm:text-[15px]">
                  SCHEDULE OF PROCEDURE FOR COMPLETION OF ACCIDENT ENQUIRY AT ZONAL RAILWAY LEVEL
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                  <table className="w-full min-w-160 border-collapse text-left text-sm lg:min-w-full">
                    <thead>
                      <tr className="bg-slate-800/80 text-sky-100">
                        <th className="w-20 border-b border-slate-600/60 px-4 py-3 font-semibold">
                          Sl. No.
                        </th>
                        <th className="w-32 border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Model Time
                        </th>
                        <th className="border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] leading-[1.7] text-slate-200">
                      {enquirySchedule.map((row, index) => (
                        <tr
                          key={row.no}
                          className={`align-top ${index % 2 === 1 ? 'bg-slate-800/25' : ''} ${index < enquirySchedule.length - 1 ? 'border-b border-slate-700/60' : ''}`}
                        >
                          <td className="px-4 py-3">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-sky-200 to-sky-500 text-sm font-extrabold text-sky-950 shadow-md shadow-sky-950/40 ring-1 ring-sky-100/50">
                              {row.no}
                            </span>
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-3">
                            <span className="inline-flex rounded-lg bg-sky-400/15 px-2 py-1 text-sm font-bold text-sky-100 ring-1 ring-sky-400/30">
                              {row.time}
                            </span>
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-3">{row.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm font-semibold text-sky-100">* For SAG Level Inquiries.</p>
                <ol>
                  <li className="flex gap-3 pb-3 sm:gap-4">
                    <ListMark label="(i)" tone="sky" lineClassName="bg-sky-400/35" connect />
                    <p className="flex-1 rounded-2xl border border-sky-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                      DRM/GM may decide to have the inquiry conducted even if a particular department accepts the responsibility for enabling through review of associated systems involved in the accident.
                    </p>
                  </li>
                  <li className="flex gap-3 sm:gap-4">
                    <ListMark label="(ii)" tone="sky" lineClassName="bg-sky-400/35" />
                    <p className="flex-1 rounded-2xl border border-sky-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4">
                      Time limits prescribed above are the maximum period of time. Railway should make efforts to finalize the Inquiry Report and D&AR action as early as possible but not beyond the prescribed time limits.
                    </p>
                  </li>
                </ol>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-violet-400/25 bg-linear-to-br from-violet-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-violet-400/20 bg-violet-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-violet-50 sm:text-base">
                  Sub: Procedure for completion of Departmental accident inquiries.
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  In continuation of Board’s letter of even number dated 2.2.2006, the S.No.5 of the Model Time Schedule for completion of accident enquiry at Zonal Railway level has been slightly modified as under :-
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                  <table className="w-full min-w-160 border-collapse text-left text-sm lg:min-w-full">
                    <thead>
                      <tr className="bg-slate-800/80 text-violet-100">
                        <th className="w-20 border-b border-slate-600/60 px-4 py-3 font-semibold">S.No.</th>
                        <th className="w-32 border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Model Time
                        </th>
                        <th className="border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                          Remarks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] leading-[1.7] text-slate-200">
                      <tr className="align-top">
                        <td className="px-4 py-3">
                          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-linear-to-br from-violet-200 to-violet-500 px-2 text-sm font-extrabold text-violet-950 shadow-md shadow-violet-950/40 ring-1 ring-violet-100/50">
                            5.
                          </span>
                        </td>
                        <td className="border-l border-slate-700/70 px-4 py-3">
                          <span className="inline-flex rounded-lg bg-violet-400/15 px-2 py-1 text-sm font-bold text-violet-100 ring-1 ring-violet-400/30">
                            D+10
                          </span>
                        </td>
                        <td className="border-l border-slate-700/70 px-4 py-3">
                          Acceptance of inquiry report by the GM*/DRM/Sr. DSO (only for yard accident) .
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm font-semibold text-violet-100">* For SAG Level Inquiries</p>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Above revised contents may be circulated to concerned officers of all your division for information and necessary action.
                </p>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Board desires that the above schedule model for completion of accident inquiries / DAR may please be circulated to all concerned officers of all divisions of your Railway for strict compliance.
                </p>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-emerald-400/20 bg-emerald-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold leading-relaxed text-emerald-50 sm:text-base">
                  Sub: Definition and Re-classification of Accidents on Indian Railways.
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  In continuation of Board’s letter of even number dated 3-1-2006, Sub item (ii) of item no.9 have been slightly amended as under:
                </p>
                <blockquote className="border-l-2 border-emerald-400/50 pl-4 text-[15px] leading-[1.8] text-emerald-50 italic sm:text-base">
                  “In case CRS or CCRS is not in a position to inquire into serious accident cases, the inquiry should be done at least by a committee of JA grade officer, formed in consultation with CRS/CCRS .”
                </blockquote>
                <p className="text-[15px] leading-[1.8] text-slate-200 sm:text-base">
                  Above revised contents may be circulated to concerned officers of all your division for information and necessary action.
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default AccidentInquiriesPage
