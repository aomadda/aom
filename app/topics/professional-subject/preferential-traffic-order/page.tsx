import React from 'react'

const PreferentialTrafficOrderPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1018] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-20%,rgba(251,191,36,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_100%_20%,rgba(56,189,248,0.07),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-amber-950/25 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl animate-[fade-up_0.7s_ease-out]">
          <div className="h-1.5 bg-linear-to-r from-rose-500 via-amber-400 to-sky-400" />

          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/25 px-5 py-7 sm:px-10 sm:py-9">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/45 to-transparent" />
            <div className="space-y-4 border-l-2 border-amber-400/50 pl-4 sm:pl-5">
              <p className="font-serif text-[15px] leading-[1.85] text-amber-50/95 italic sm:text-base">
                WHEREAS, in the opinion of the Central Government, it is necessary in public interest so to do;
              </p>
              <p className="text-[15px] leading-[1.85] text-slate-200 sm:text-base">
                NOW, THEREFORE, in exercise of the powers conferred by Section 71 of the Railways Act, 1989, the Central Government hereby directs that all Railway Administrations shall give special facilities for or preference to the transport of goods/class of goods at a station/siding as per priority / preference mentioned in the order.
              </p>
            </div>
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
            <section className="overflow-hidden rounded-2xl border border-rose-400/25 bg-linear-to-br from-rose-950/50 via-slate-900/40 to-slate-900/20">
              <div className="flex items-center gap-3 border-b border-rose-400/20 bg-rose-500/10 px-4 py-3.5 sm:px-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-rose-400 to-rose-700 text-lg font-bold text-white shadow-lg shadow-rose-950/50 ring-1 ring-rose-200/30">
                  A
                </span>
                <h2 className="text-sm font-bold tracking-[0.14em] text-rose-100 sm:text-base">
                  1.0 PRIORITY ‘A’
                </h2>
              </div>
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-rose-400/15 px-1.5 text-xs font-bold text-rose-100 ring-1 ring-rose-400/30">
                    1.1
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    Military Traffic, when sponsored by MILRAIL and approved by Railway Board.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/40 via-slate-900/40 to-slate-900/20">
              <div className="flex items-center gap-3 border-b border-amber-400/20 bg-amber-500/10 px-4 py-3.5 sm:px-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-300 to-orange-600 text-lg font-bold text-amber-950 shadow-lg shadow-amber-950/40 ring-1 ring-amber-100/40">
                  B
                </span>
                <h2 className="text-sm font-bold tracking-[0.14em] text-amber-100 sm:text-base">
                  2.0 PRIORITY ‘B’
                </h2>
              </div>
              <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                    2.1
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    Goods for emergency relief work for victims of natural calamities, like floods, drought, earthquake etc. when sponsored by an officer not below the rank of Deputy Secretary of Central/State Government or a non-official organization nominated by the Central/State Government and accepted by the originating Zonal Railway or Railway Board.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                    2.2
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    All food grains except quota traffic notified by Railway Board.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                    2.3
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    Levy sugar for public distribution system or other welfare schemes sponsored by Food Corporation of India/State Government or their agencies approved by Railway Board. Proposals for sponsorship of any other commodity by a Central Government Agency will require specific approval of Railway Board.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-sky-400/25 bg-linear-to-br from-sky-950/45 via-slate-900/40 to-slate-900/20">
              <div className="flex items-center gap-3 border-b border-sky-400/20 bg-sky-500/10 px-4 py-3.5 sm:px-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sky-300 to-blue-700 text-lg font-bold text-sky-950 shadow-lg shadow-sky-950/40 ring-1 ring-sky-100/40">
                  C
                </span>
                <h2 className="text-sm font-bold tracking-[0.14em] text-sky-100 sm:text-base">
                  3.0 PRIORITY ‘C’
                </h2>
              </div>

              <div className="space-y-5 px-4 py-5 sm:px-5">
                <div className="rounded-2xl border border-slate-600/40 bg-slate-950/35 p-4 sm:p-5">
                  <h3 className="mb-4 text-[15px] font-semibold leading-relaxed text-sky-100 sm:text-base">
                    3.1(a) Coal traffic when sponsored and accepted by authorities as under:
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm lg:min-w-full">
                      <thead>
                        <tr className="bg-slate-800/80 text-sky-100">
                          <th className="w-[34%] border-b border-slate-600/60 px-4 py-3 font-semibold">
                            Commodity / Traffic
                          </th>
                          <th className="w-[36%] border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                            Sponsoring / Eligible Category
                          </th>
                          <th className="w-[30%] border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                            Accepting Authority
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="align-top">
                          <td className="px-4 py-4 text-[15px] leading-[1.7] text-slate-200">
                            Coal and coke, including all variant coal rejects and coal fines when loaded from a Colliery siding (including siding with a consumer serving a captive coal block), Washery siding, Steel Plant siding, Coke Oven Plant siding, siding serving a Port.
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4">
                            <ol className="space-y-3 text-[15px] leading-[1.7] text-slate-200">
                              <li className="flex gap-2.5">
                                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-400/30">
                                  1
                                </span>
                                <span>
                                  Public Sector coal companies and co-users of sidings of public sector coal companies for which a contractual agreement has been entered into with a consumer.
                                </span>
                              </li>
                              <li className="flex gap-2.5">
                                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-400/30">
                                  2
                                </span>
                                <span>
                                  Private coal companies mining captive blocks, captive coal block consumers, Washery operators and siding co-users of the Washery sidings, Steel Plants, Coke Oven Plants, CP & RP coke plants.
                                </span>
                              </li>
                              <li className="flex gap-2.5">
                                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-400/30">
                                  3
                                </span>
                                <span>
                                  For indigenous coal moved through rail-cum-sea-cum-rail route: consumers or their representatives, for the last leg of movement from the port.
                                </span>
                              </li>
                              <li className="flex gap-2.5">
                                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-400/15 text-xs font-bold text-sky-100 ring-1 ring-sky-400/30">
                                  4
                                </span>
                                <span>
                                  For imported coal, consignors or their representatives or coal importers.
                                </span>
                              </li>
                            </ol>
                          </td>
                          <td className="space-y-3 border-l border-slate-700/70 px-4 py-4 text-[15px] leading-[1.7] text-slate-200">
                            <p>
                              For 1: Executive Director Rail Movement, or in his absence Director/Jt. Director, Rail Movement, Kolkata for ER, ECR, SER, SECR and ECoR.
                            </p>
                            <p>For other Railways: COM/CFTM of respective Zones.</p>
                            <p>
                              For imported coal: consignors/importers subject to system verification; automatic acceptance of indent is done after verification of Bill of Entry documents through the system.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ol className="mt-4 space-y-2.5 border-l-2 border-sky-400/30 pl-4">
                    <li className="text-[15px] leading-[1.75] text-slate-300">
                      <span className="font-semibold text-sky-200">i)</span> The sponsoring would be subject to Railway rules and regulations, including Logistics plan for imported coal.
                    </li>
                    <li className="text-[15px] leading-[1.75] text-slate-300">
                      <span className="font-semibold text-sky-200">ii)</span> Inter-se priority for movement to various classes of consumers will be laid down from time to time by Railway Administration and may be altered/modified as and when necessary. Within the same class of category of consumers, priority for movement may be fixed/altered from time to time depending upon the operational and other considerations.
                    </li>
                    <li className="text-[15px] leading-[1.75] text-slate-300">
                      <span className="font-semibold text-sky-200">iii)</span> Programmes for transportation of coal from the sidings of WCL located in SECR and SCR territory would be approved by PCOM/CFTM of Central Railway.
                    </li>
                  </ol>
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-950/35 p-4 sm:p-5">
                  <h3 className="mb-4 text-[15px] font-semibold leading-relaxed text-sky-100 sm:text-base">
                    3.1(b) Iron ore traffic as under:
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm lg:min-w-full">
                      <thead>
                        <tr className="bg-slate-800/80 text-sky-100">
                          <th className="border-b border-slate-600/60 px-4 py-3 font-semibold">
                            Traffic Type
                          </th>
                          <th className="w-28 border-b border-l border-slate-600/60 px-4 py-3 text-center font-semibold">
                            Priority Class
                          </th>
                          <th className="w-32 border-b border-l border-slate-600/60 px-4 py-3 text-center font-semibold">
                            Sub-Priority
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[15px] leading-[1.7] text-slate-200">
                        <tr className="border-b border-slate-700/60 align-top">
                          <td className="px-4 py-4">
                            When Iron ore traffic or other raw material to steel plants is loaded from the customer’s own private siding to his own private siding at unloading end for domestic manufacturer.
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center font-semibold text-sky-100">
                            C
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center">
                            <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200 ring-1 ring-emerald-400/35">
                              C+
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-700/60 align-top bg-slate-800/20">
                          <td className="px-4 py-4">
                            When Iron ore traffic or other raw material to steel plants is booked from one end to the other and the customer is having his own private siding at either end for domestic manufacturer.
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center font-semibold text-sky-100">
                            C
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center">
                            <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-emerald-400/15 px-2 py-1 text-sm font-bold text-emerald-200 ring-1 ring-emerald-400/35">
                              C+
                            </span>
                          </td>
                        </tr>
                        <tr className="align-top">
                          <td className="px-4 py-4">
                            When the domestic manufacturer moves Iron ore traffic or other raw material to steel plants from any terminal to any terminal not owned by him at both end.
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center font-semibold text-sky-100">
                            C
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4 text-center">
                            <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-rose-400/15 px-2 py-1 text-sm font-bold text-rose-200 ring-1 ring-rose-400/35">
                              C-
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-950/20 px-4 py-4">
                    <p className="mb-2 text-xs font-bold tracking-[0.16em] text-amber-200">
                      Note:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2.5 text-[15px] leading-[1.7] text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>
                          Priority C+ will get preference over Priority C which will get preference over Priority C-
                        </span>
                      </li>
                      <li className="flex gap-2.5 text-[15px] leading-[1.7] text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>
                          Co-users of private sidings cannot be treated as owners of such terminals and will not get preference admissible to owners of private sidings.
                        </span>
                      </li>
                      <li className="flex gap-2.5 text-[15px] leading-[1.7] text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>PFT owners will not get benefit of higher Priority C.</span>
                      </li>
                      <li className="flex gap-2.5 text-[15px] leading-[1.7] text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>Common user terminals in ports will be treated as Good Shed.</span>
                      </li>
                      <li className="flex gap-2.5 text-[15px] leading-[1.7] text-slate-200">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                        <span>
                          Customers desirous of moving traffic under any of above mentioned priorities will approach Zonal Railways for updating its information like Customer Name, sister concerns name, ownership of private siding, whether domestic manufacturer or not etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-600/40 bg-slate-950/35 p-4 sm:p-5">
                  <h3 className="mb-4 text-[15px] font-semibold leading-relaxed text-sky-100 sm:text-base">
                    3.1(c) Programmed traffic other than Coal & Iron-ore traffic as per Para 3.1(a) & 3.1(b) above when sponsored and accepted by authorities as under:
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-slate-600/50">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm lg:min-w-full">
                      <thead>
                        <tr className="bg-slate-800/80 text-sky-100">
                          <th className="w-[18%] border-b border-slate-600/60 px-4 py-3 font-semibold">
                            Commodity
                          </th>
                          <th className="border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                            Sponsoring Authority
                          </th>
                          <th className="w-[18%] border-b border-l border-slate-600/60 px-4 py-3 font-semibold">
                            Accepting Authority
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[15px] leading-[1.7] text-slate-200">
                        <tr className="border-b border-slate-700/60 align-top">
                          <td className="px-4 py-4 font-medium text-slate-100">
                            Non-refined Edible salt
                          </td>
                          <td className="space-y-2 border-l border-slate-700/70 px-4 py-4">
                            <p>
                              For the states of West Bengal, Assam, Sikkim and Tripura - The State Governments of West Bengal, Assam, Sikkim and Tripura.
                            </p>
                            <p>
                              For the other states - (i) Joint Industries Commissioner (Salt-Textile), Industries Commissionerate, Government of Gujarat; (ii) Additional Director, Office of the Commissioner, Industries & Commerce, Government of Rajasthan.
                            </p>
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4">
                            Zonal Railways
                          </td>
                        </tr>
                        <tr className="align-top bg-slate-800/20">
                          <td className="px-4 py-4 font-medium text-slate-100">Fertilizer</td>
                          <td className="border-l border-slate-700/70 px-4 py-4">
                            Concerned fertilizer Manufacturers/importers
                          </td>
                          <td className="border-l border-slate-700/70 px-4 py-4">
                            Zonal Railways
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 rounded-xl border border-sky-400/20 bg-sky-950/30 px-4 py-3 text-[15px] leading-[1.75] text-slate-200">
                    <span className="font-semibold text-sky-100">Railway Board:</span> Proposals to accord priority for movement of any other commodity or traffic will have to be sent to Railway Board for approval.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-slate-500/35 bg-linear-to-br from-slate-800/40 via-slate-900/40 to-slate-900/20">
              <div className="flex items-center gap-3 border-b border-slate-500/30 bg-slate-700/20 px-4 py-3.5 sm:px-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-slate-300 to-slate-600 text-lg font-bold text-slate-950 shadow-lg shadow-black/30 ring-1 ring-white/20">
                  D
                </span>
                <h2 className="text-sm font-bold tracking-[0.14em] text-slate-100 sm:text-base">
                  4.0 PRIORITY ‘D’
                </h2>
              </div>
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-slate-400/15 px-1.5 text-xs font-bold text-slate-100 ring-1 ring-slate-400/30">
                    2.4
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    All traffic not included in priority ‘A’ to ‘C’.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-violet-400/25 bg-linear-to-br from-violet-950/35 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-violet-400/20 bg-violet-500/10 px-4 py-3.5 sm:px-5">
                <h2 className="text-sm font-bold tracking-[0.14em] text-violet-100 sm:text-base">
                  5.0 GENERAL INSTRUCTIONS
                </h2>
              </div>
              <div className="space-y-4 px-4 py-5 sm:px-5">
                <div className="flex gap-3 rounded-xl border border-violet-400/15 bg-violet-950/20 px-4 py-3.5">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/15 px-1.5 text-xs font-bold text-violet-100 ring-1 ring-violet-400/30">
                    5.1
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    Traffic offered in block rakes, including clubbed indents constituting a block rake will be given preference over traffic in piecemeal, irrespective of the class of priority and date of registration of the later.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-600/40 bg-slate-950/30 px-4 py-4">
                  <div className="mb-3 flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/15 px-1.5 text-xs font-bold text-violet-100 ring-1 ring-violet-400/30">
                      5.2
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                      Block rake traffic will have preference over other traffic within the same class of priority in the following order:
                    </p>
                  </div>
                  <ol className="space-y-2.5 sm:pl-12">
                    {[
                      ['a.', 'Traffic covered by contractual obligation and/or guaranteed under any specific scheme of IR or in agreement entered into by IR.'],
                      ['b.', 'Traffic in rakes loaded from a Siding/Goods Shed of the station having round the clock working.'],
                      ['c.', 'Traffic in rakes from a full rake handling siding of the station having mechanized system of Loading.'],
                      ['d.', 'Traffic offered for distance of more than 600 Kms within the same classification.'],
                      ['e.', 'Traffic offered in single point block rakes (including clubbed single point rakes) over two point/multi point block rakes and mini rakes.'],
                    ].map(([label, text]) => (
                      <li key={label} className="flex gap-2.5">
                        <span className="mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-md bg-violet-400/15 px-1 text-xs font-bold text-violet-100 ring-1 ring-violet-400/30">
                          {label}
                        </span>
                        <p className="text-[15px] leading-[1.75] text-slate-300">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-xl border border-slate-600/40 bg-slate-950/30 px-4 py-4">
                  <div className="mb-3 flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 min-w-11 shrink-0 items-center justify-center rounded-lg bg-violet-400/15 px-1.5 text-xs font-bold text-violet-100 ring-1 ring-violet-400/30">
                      5.3
                    </span>
                    <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                      While following the above general instructions, following days in a week are nominated for priority and premium indent loading.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 sm:pl-14">
                    <div className="rounded-xl border border-amber-400/20 bg-amber-950/25 px-4 py-3.5">
                      <p className="mb-2 text-xs font-bold tracking-wide text-amber-200">5.3(a)</p>
                      <p className="text-[15px] leading-[1.7] text-slate-200">
                        Wednesday and Saturday are fixed for allotment of rakes as per the date of registration, irrespective of the class of priority.
                      </p>
                    </div>
                    <div className="rounded-xl border border-sky-400/20 bg-sky-950/25 px-4 py-3.5">
                      <p className="mb-2 text-xs font-bold tracking-wide text-sky-200">5.3(b)</p>
                      <p className="text-[15px] leading-[1.7] text-slate-200">
                        Monday and Friday will be the nominated two days for according higher priority to traffic covered under the Premium Indent Scheme.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-violet-400/15 bg-violet-950/20 px-4 py-3.5">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/15 px-1.5 text-xs font-bold text-violet-100 ring-1 ring-violet-400/30">
                    5.4
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-200 sm:text-base">
                    Any traffic can be accorded preferential loading and movement under a higher priority under special orders issued by the Ministry of Railways (Railway Board) /Zonal Railways.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-amber-400/30 bg-linear-to-br from-amber-950/40 via-slate-900/50 to-slate-950/40">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-3.5 sm:px-5">
                <h2 className="text-sm font-bold tracking-[0.14em] text-amber-100 sm:text-base">
                  6. CURRENCY OF THE ORDER
                </h2>
              </div>
              <div className="px-4 py-5 sm:px-5">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/30">
                    6.1
                  </span>
                  <p className="text-[15px] leading-[1.75] text-slate-100 sm:text-base">
                    This Preferential Traffic Order General Order No.99 will come into force w.e.f. 1st April, 2025 and unless cancelled earlier, will remain in force upto 31st March 2026.
                  </p>
                </div>
              </div>
            </section>

            <footer className="flex justify-end px-2 pb-2 pt-1">
              <div className="max-w-sm border-t border-amber-400/30 pt-4 text-right">
                <p className="font-serif text-base text-amber-50">(Prabhas Dansana)</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Principal Executive Director/ Traffic Transportation (M)
                </p>
                <p className="mt-0.5 text-sm font-medium tracking-wide text-amber-200/90">
                  Railway Board
                </p>
              </div>
            </footer>
          </div>
        </article>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}

export default PreferentialTrafficOrderPage
