import React from 'react'

function NumBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400/25 via-amber-500/20 to-orange-600/25 px-2.5 py-2 text-[11px] font-bold tabular-nums tracking-tight text-amber-100 shadow-inner shadow-black/20 ring-1 ring-amber-400/35 sm:min-h-11 sm:px-3 sm:text-xs">
      {children}
    </span>
  )
}

function NumberedClause({ id, body }: { id: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-3.5 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 shadow-sm ring-1 ring-white/4 transition-colors hover:border-amber-500/25 hover:bg-slate-900/55 sm:gap-5 sm:p-5">
      <NumBadge>{id}</NumBadge>
      <p className="min-w-0 flex-1 text-[15px] leading-[1.75] text-slate-300 sm:text-base">{body}</p>
    </div>
  )
}

function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <div className="mt-2 flex items-center gap-3 border-l-4 border-amber-500/70 pl-4 first:mt-0">
      <NumBadge>{id}</NumBadge>
      <h3 className="text-base font-bold uppercase tracking-wide text-amber-100/95 sm:text-lg">{title}</h3>
    </div>
  )
}

function ProseCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-600/35 bg-slate-900/30 px-4 py-4 text-[15px] leading-[1.75] text-slate-300 ring-1 ring-white/3 sm:px-6 sm:py-5 sm:text-base">
      {children}
    </div>
  )
}

const EngineOnLoad = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0c10]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0d1117] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(251,191,36,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(59,130,246,0.06),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-amber-950/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl">
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-8 sm:px-10 sm:py-10">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-amber-300/90 sm:text-sm">
              Rates Circular No. 21 of 2004
            </p>
            <div className="mt-8 space-y-2 text-center">
              <p className="text-[13px] font-semibold uppercase leading-snug tracking-wide text-slate-100 sm:text-sm">
                GOVERNMENT OF INDIA (BHARAT SARKAR)
              </p>
              <p className="text-[13px] font-semibold uppercase leading-snug tracking-wide text-slate-100 sm:text-sm">
                MINISTRY OF RAILWAYS (RAIL MANTRALAYA)
              </p>
              <p className="text-[13px] font-semibold uppercase text-slate-300 sm:text-sm">(RAILWAY BOARD)</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-600/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="rounded-lg bg-slate-950/50 px-3 py-2 font-mono text-xs text-slate-400 ring-1 ring-slate-600/40 sm:text-sm">
                No.2004/TC-I/94/214/9/Vol. II
              </p>
              <p className="text-sm font-medium text-slate-300 sm:text-right">New Delhi, dated: 12th July, 2004</p>
            </div>
          </header>

          <div className="space-y-8 px-5 py-8 sm:px-10 sm:py-10">
            <div className="rounded-2xl border border-slate-600/40 bg-slate-950/40 p-5 ring-1 ring-white/4">
              <p className="text-sm font-semibold text-amber-200">The General Managers,</p>
              <p className="mt-1.5 text-sm text-slate-400">All Indian Railways.</p>
            </div>

            <div className="rounded-2xl border border-amber-500/30 bg-linear-to-r from-amber-500/10 to-transparent p-5 ring-1 ring-amber-400/20">
              <p className="text-[15px] leading-relaxed text-slate-200 sm:text-base">
                <span className="font-bold text-amber-200">Sub: -</span>{' '}
                &quot;Engine-On-Load&quot; (EOL) scheme
              </p>
            </div>

            <div className="space-y-5">
              <ProseCard>
                In order to further improve the utilisation of the rolling stock, and help the customers in prompt
                clearance of freight trains from their sidings/terminals the introduction of &apos;Engine-on-Load&apos;
                operations has been under consideration of the Board for quite some time. Under the
                &apos;Engine-on-Load&apos; operations (EOL), the train engine will remain available during loading or
                unloading operation in the siding and wait on railway&apos;s account so as to work the train immediately
                after loading/unloading operation is completed.
              </ProseCard>

              <NumberedClause
                id="2.0"
                body={
                  <>
                    The basic features of the draft EOL scheme were outlined in Board&apos;s letter dated 26.6.1997.
                    Subsequently, a number of Railways have given suggestions to improve the scheme. The EDs Committee
                    (1998) and the High Level Committee on Freight Incentives (2004) have also examined the matter.
                    Accordingly, in supersession of all the earlier guidelines, the following revised guidelines are issued.
                  </>
                }
              />

              <NumberedClause
                id="3.0"
                body={
                  <>
                    The siding holders will be required to opt for the EOL operations under an agreement with the zonal
                    railway administration as per the terms and conditions of the &apos;Engine-on-Load&apos; operations,
                    as given in the following paragraphs.
                  </>
                }
              />

              <div className="space-y-4 rounded-2xl border border-slate-600/35 bg-slate-950/25 p-5 sm:p-6">
                <SectionTitle id="3.1" title="Eligibility" />
                <ProseCard>
                  Only such sidings should be brought under the EOL which have been notified for charging freight on
                  through distance basis.
                </ProseCard>

                <SectionTitle id="3.1.2" title="Permissible free time" />
                <ProseCard>
                  Free time for loading and unloading operations under the EOL will be lower than the normal free time
                  so as to minimise detention to the wagons and the waiting period of the locomotives. The free time
                  under the EOL for loading and unloading operations will be permitted as under:-
                </ProseCard>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-600/45 shadow-lg shadow-black/20 ring-1 ring-white/4">
                <div className="bg-linear-to-r from-slate-800/90 to-slate-900/90 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-200/90">Free time table</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-88 border-collapse text-left text-sm text-slate-200">
                    <thead>
                      <tr className="border-b border-slate-600/50 bg-slate-900/80">
                        <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-amber-200/95 sm:text-sm">
                          Type of operation
                        </th>
                        <th className="px-4 py-3.5 text-xs font-bold text-amber-200/95 sm:text-sm">
                          Free time for Bulk Commodities
                        </th>
                        <th className="px-4 py-3.5 text-xs font-bold text-amber-200/95 sm:text-sm">
                          Free time for Bagged Consignments
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50 bg-slate-950/40">
                      <tr className="bg-slate-900/20">
                        <td className="px-4 py-3 font-semibold text-slate-200">Loading</td>
                        <td className="px-4 py-3" colSpan={2} />
                      </tr>
                      <tr>
                        <td className="px-4 py-3 pl-6 text-slate-300">All types of wagons</td>
                        <td className="px-4 py-3 text-slate-300">3 Hours</td>
                        <td className="px-4 py-3 text-slate-300">5 Hours</td>
                      </tr>
                      <tr className="bg-slate-900/20">
                        <td className="px-4 py-3 font-semibold text-slate-200">Unloading</td>
                        <td className="px-4 py-3" colSpan={2} />
                      </tr>
                      <tr>
                        <td className="px-4 py-3 pl-6 text-slate-300">1. All types of wagons except BOBRN</td>
                        <td className="px-4 py-3 text-slate-300">4 Hours</td>
                        <td className="px-4 py-3 text-slate-300">5 Hours</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 pl-6 text-slate-300">2. BOBRN wagons</td>
                        <td className="px-4 py-3 text-slate-300">2 Hours</td>
                        <td className="px-4 py-3 text-slate-300">Not applicable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <ProseCard>
                Instructions contained in Board&apos;s letter No.TC-I/89/201/5 dated 11.04.1991 and 12.10.1993 as also
                letter No. TC-I/95/201/2 dated 23.11.1995, regarding additional free time for placement/removal of rakes
                in the sidings as per time and motion studies will remain unchanged.
              </ProseCard>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 border-l-4 border-violet-500/60 pl-4">
                  <span className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/30 to-purple-600/25 px-2.5 text-xs font-bold tabular-nums text-violet-100 ring-1 ring-violet-400/35">
                    3.3
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wide text-violet-100 sm:text-lg">
                    Debit/credit hours for demurrage
                  </h3>
                </div>

                <div className="space-y-3">
                  <NumberedClause
                    id="3.3.1"
                    body="A system of debit/credit hours in regard to detention to wagons shall be introduced in the EOL sidings for the purpose of levying demurrage."
                  />
                  <NumberedClause
                    id="3.3.2"
                    body="Debit hours would signify the detention in terms of wagon-hours beyond the free time permissible under the EOL."
                  />
                  <NumberedClause
                    id="3.3.3"
                    body="Credit hours would signify the wagon-hours saved with reference to the free time permissible under the EOL."
                  />
                  <NumberedClause
                    id="3.3.4"
                    body="Saving/detention to a wagon of 30 minutes or more up to 1 hour will be rounded off to an hour. Saving/detention to a wagon of less than 30 minutes will not be reckoned."
                  />
                  <NumberedClause
                    id="3.3.5"
                    body={
                      <>
                        The net debit/credit hours, accrued during a month, shall be carried forward till the end of a
                        quarter ending on the 30th of June, 30th of September, 31st of December and the 31st of March.
                        Demurrage will be charged, on a quarterly basis on the net debit hours outstanding, if any, at
                        the end of the quarter at the rates prescribed from time to time for the first 24 hours. The
                        prevailing rates for demurrage charges are Rs.60.00 per bogie wagon per hour, for all types of
                        stock. The demurrage to be charged at the end of each quarter, if any, would not be waived except
                        to the extent covered under &apos;Force Ma-jeure&apos; conditions.
                      </>
                    }
                  />
                  <NumberedClause
                    id="3.3.6"
                    body={
                      <>
                        The net credit hours, if any, at the end of a quarter will be carried forward to the next quarter
                        and the same shall be adjusted against fresh debit hours that might accrue during that quarter.
                        The net accumulated credit hours alone will be permitted to be carried forward till the end of the
                        financial year. In case, any credit hours are still available at the end of the financial year,
                        the same shall lapse.
                      </>
                    }
                  />
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-600/35 bg-slate-950/25 p-5 sm:p-6">
                <SectionTitle id="3.4" title="Exemption from Engine Hire Charges" />
                <ProseCard>
                  If a siding holder requires to utilise the train engine during loading or unloading of the rake, within
                  the free time prescribed, the same will be allowed without levying any additional charges. The siding
                  owner may, therefore, not be required to maintain a captive engine at his cost under the EOL operations.
                </ProseCard>

                <SectionTitle id="3.5" title="Exemption from Siding charges" />
                <ProseCard>
                  For the bulb type sidings freight will be charged on the basis of through distance up to a specified
                  loading or unloading point and not for the entire length of the siding. No siding/shunting charges for
                  haulage of wagons within the siding will be leviable under the Engine-on- load operations.
                </ProseCard>

                <SectionTitle id="3.6" title="Exemption from cost of railway staff" />
                <ProseCard>
                  The Railways will bear the entire cost of all railway staff deployed at the sidings operated under the
                  EOL scheme.
                </ProseCard>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 border-l-4 border-emerald-500/60 pl-4">
                  <NumBadge>4.0</NumBadge>
                  <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100 sm:text-lg">General</h3>
                </div>
                <NumberedClause
                  id="4.1"
                  body="It should be ensured that all arrangements, including timely relief to the train crew, as and when required, are made in EOL sidings."
                />
                <NumberedClause
                  id="4.2"
                  body="Suitable resting facilities shall be provided to the train crew by the siding owners in their premises."
                />
                <NumberedClause
                  id="4.3"
                  body="Siding owners will also permit the train crew to avail the facilities of staff canteen in their premises on payment of charges as prescribed for their own staff."
                />
                <NumberedClause
                  id="4.4"
                  body={
                    <>
                      All Railways are requested to give wide publicity to the &quot;Engine-on-load&quot; scheme among
                      the existing as well as prospective siding owners. Proposals may be invited from the siding owners
                      desiring to opt for the &apos;Engine-on-Load&apos; operations.
                    </>
                  }
                />
                <NumberedClause
                  id="4.5"
                  body={
                    <>
                      Details of the detentions to wagons and locomotives in the sidings, before and after switching over
                      to the EOL, may be analysed and also sent to Board&apos;s office for information so that the EOL
                      scheme could be reviewed one year after it&apos;s implementation in various sidings.
                    </>
                  }
                />
              </div>

              <ProseCard>
                This issues with the concurrence of the Traffic Transportation and Finance Directorates of the Ministry
                of Railways.
              </ProseCard>
            </div>

            <footer className="border-t border-slate-600/40 pt-8">
              <div className="rounded-2xl bg-slate-950/50 px-5 py-6 ring-1 ring-slate-600/30">
                <div className="whitespace-pre-line text-[15px] leading-relaxed text-slate-300 sm:text-base">
                  {`(Shiv Kumar Chowdhri)
         Executive Director, Traffic Comml. (Rates)
                                                                   Railway Board`}
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  )
}

export default EngineOnLoad
