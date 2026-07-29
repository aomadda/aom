import React from 'react'

const shellClass =
  'relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-sky-950/50'

const cardClass =
  'relative overflow-hidden rounded-2xl border border-slate-600/55 bg-slate-800/40 shadow-2xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm'

const h2Class =
  'text-lg font-semibold tracking-tight text-sky-100 sm:text-xl'

const proseClass =
  'space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[15px] sm:leading-[1.75]'

const dividerClass = 'h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent'

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-7 sm:px-8 sm:py-8">
      <h2 className={`${h2Class} mb-4 border-b border-slate-600/35 pb-3`}>{title}</h2>
      <div className={proseClass}>{children}</div>
    </section>
  )
}

function NumberedHeading({ n, title }: { n: string; title: string }) {
  return (
    <h3 className="mb-4 flex flex-col items-center gap-3 text-center sm:mb-5">
      <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl border border-sky-400/45 bg-linear-to-br from-sky-400/20 to-sky-950/30 px-3 text-sm font-bold tabular-nums text-sky-50 shadow-md ring-1 ring-white/10 sm:h-11 sm:text-base">
        {n}
      </span>
      <span className="text-base font-semibold leading-snug text-slate-50 sm:text-lg">{title}</span>
    </h3>
  )
}

const NationalLogisticsPolicy = () => {
  return (
    <div className={shellClass}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_40%_at_50%_-12%,rgba(56,189,248,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,42rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-sky-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className={cardClass} aria-label="National Logistics Policy">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-32 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />

          <header className="relative border-b border-slate-600/40 bg-linear-to-br from-slate-800/85 to-slate-900/55 px-5 py-8 text-center sm:px-8 sm:py-10">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
              National Logistics Policy
            </h1>
          </header>

          <div className={`${proseClass} px-5 py-7 sm:px-8 sm:py-9`}>
            <p>
              To complement PM GatiShakti National Master Plan (NMP) , the National Logistics Policy (NLP) was launched on 17th September 2022 by the Prime Minister, Shri Narendra Modi. While the PM GatiShakti NMP addresses integrated development of the fixed infrastructure and network planning, the NLP addresses the soft infrastructure and logistics sector development aspect, inter alia, including process reforms, improvement in logistics services, digitization, human resource development and skilling.
            </p>
          </div>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Vision">
            <p>
              The vision of NLP is to drive economic growth and business competitiveness of the country through an integrated, seamless, efficient, reliable, green, sustainable and cost-effective logistics network by leveraging best in class technology, processes and skilled manpower. This will reduce logistics cost and improve performance.
            </p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Targets">
            <p>
              The targets of the NLP are to: (i) Reduce cost of logistics in India; (ii) improve the Logistics Performance Index ranking – endeavor is to be among top 25 countries by 2030, and (iii) create data driven decision support mechanism for an efficient logistics ecosystem.
            </p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Comprehensive Logistics Action Plan (CLAP)">
            <p>
              To achieve these targets, a Comprehensive Logistics Action Plan (CLAP) as part of the NLP was launched covering eight action areas including (i) Integrated Digital Logistics Systems; (ii) Standardization of Physical Assets and Benchmarking of Service Quality Standards; (iii) Logistics Human Resource Development and Capacity Building; (iv) State engagement; (v) EXIM Logistics; (vi) Services Improvement Framework; (vii) Sectoral Plans for Efficient Logistics (SPEL); and (viii) Facilitation of Development of Logistics Parks.
            </p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Outreach Events/meetings:">
            <p>
              Since the launch of the NLP, significant progress has been made with respect to the implementation of the Policy. By means of regional conferences, one-on-one interactions, and inter-Ministerial meetings, DPIIT has facilitated the implementation of NLP. An overview of these outreach activities is given below.
            </p>

            <div className="mt-8! space-y-6">
              <div>
                <NumberedHeading n="1." title="Inter-Ministerial meeting on 28th July 2023" />
                <p>
                  On completion of ten months of the launch of the National Logistics Policy (NLP), an inter-Ministerial meeting to review the progress of its implementation was held by DPIIT, on 28th July 2023. During the meeting measures taken by different Ministries to improve logistics efficiency in the country were showcased.
                </p>
                <p>
                  The meeting saw participation from eleven infrastructure and user Ministries including M/o Road Transport & Highways (MoRTH), M/o Port Shipping and Waterways (MoPSW), M/o Coal, D/o Food & Public Distribution, M/o Civil Aviation (MOCA), M/o Steel, D/o Commerce, D/o Fertilizer, D/o Revenue, M/o Skill Development and Entrepreneurship (MSDE) and M/o Power and, National Industrial Corridor Development Corporation Limited (NICDC).
                </p>
                <p>
                  The meeting was Chaired by Special Secretary (Logistics). Secretary DPIIT had joined during the closing session. The meeting was divided into two sessions. Session, I focussed on review of measures undertaken by DPIIT and Session II covered progress in implementation of the NLP by participating Ministries.
                </p>
              </div>

              <div>
                <NumberedHeading n="2." title="Regional Workshops (between 20th March and 12th April 2023)" />
                <p>
                  DPIIT organised five regional workshops between 20th March and 12th April 2023. All workshops had a dedicated session on NLP, wherein key features and progress of NLP was showcased and participating States/UTs presented the status and key highlights of respective State Logistics Policy and other interventions.
                </p>
                <p>
                  Over 500 participants covering Officials from all 36 States/UTs and concerned line Ministries/Department, and representatives from knowledge partners and multilateral organisations, attended these workshops.
                </p>
              </div>

              <div>
                <NumberedHeading n="3." title="Other one-on-one Interactions / Meetings:" />
                <div className="space-y-4 border-l-2 border-sky-500/30 pl-4 sm:pl-5">
                  <p>
                    <span className="font-semibold text-slate-200">Meetings on Logistics Performance Index (LPI):</span>{' '}
                    In an endeavor to further improve India’s ranking in the LPI, DPIIT has undertaken several measures. To apprise the World Bank team about the several initiatives and reforms of the Government of India and draw their attention on need for greater emphasis on objective based methodology for LPI scoring, Secretary, DPIIT met senior officials of World Bank Group at their headquarter in Washington DC.
                  </p>
                  <p>
                    In continuation with that DPIIT held a series of meetings with the World Bank Group [Logistics and Infrastructure India team] and concerned line Ministries.
                  </p>
                  <p>A dedicated Unit is being set up within the Logistics Division to develop and implement an action plan for improving India’s LPI ranking.</p>
                  <p>
                    In addition, concerned line Ministries are setting up a dedicated cell for a focused project-based approach to improving India’s performance across the six LPI parameters.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">Services Improvement Group (SIG) meetings:</span>{' '}
                    In line with approved institutional mechanism for the NLP, an Inter-Ministerial SIG was constituted on 14th March 2023. Chaired by SS (Logistics), this group comprises of representatives from MoRTH, MoR, MoPSW, MNRE, MoP, DoT, MoPNG, MoCA, NITI Aayog, MoEFCC, MoHUA, DoR and DoC.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">Objective:</span> The SIG has been constituted to facilitate speedy resolution of logistics services and processes related issues of the industry, in a coordinated manner. Resolution of issues through SIG shall promote inter-operability; eliminate fragmentation in documentation, formats, processes, liability regimes and reduce gaps in regulatory architecture.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">
                      E-LoGs portal (digital system for registering logistics related issues by logistics sector associations):
                    </span>{' '}
                    As on date 29 logistics sector associations are registered on the E-LoGs portal, with total 71 issues, of which 34 issues have been resolved.
                  </p>
                  <p>
                    Regular roundtables with industry players and SIG meetings are held. Till date, six meetings of SIG, along with industry associations have been held.
                  </p>
                </div>
              </div>
            </div>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Progress on Implementation of NLP & CLAP">
            <p className="text-slate-200">
              Since the launch of the NLP, progress made in implementation of the CLAP is summarised below:
            </p>

            <div className="mt-6! space-y-5">
              <div className="rounded-xl border border-slate-600/40 bg-slate-900/30 p-4 sm:p-5">
                <p className="font-semibold text-sky-100/95">Unified Logistics Interface Platform (ULIP):</p>
                <p className="mt-3!">
                  For digital integration in logistics sector and to provide single sign to users who are trading goods and using multiple modes of transport – the Unified Logistics Interface Platform (ULIP) was launched along with the NLP.
                </p>
                <p>
                  ULIP is an indigenous data-based platform which integrates 34 logistics-related digital systems /portals across Ministries / Departments. It is worth noting that GST data is also being integrated with ULIP.
                </p>
                <p>
                  ULIP provides opportunities to private sector to develop use cases on ULIP. By signing Non-Disclosure Agreements (NDAs) and after due diligence, data on ULIP can be accessed through API integration and private players can develop apps/use cases.
                </p>
                <p>Over 614 industry players have registered on ULIP.</p>
                <p>106 private companies have signed NDAs</p>
                <p>142 companies have submitted 382 use cases to be hosted on ULIP.</p>
                <p>57 applications have been made live.</p>
              </div>

              <div className="rounded-xl border border-slate-600/40 bg-slate-900/30 p-4 sm:p-5">
                <p className="font-semibold text-sky-100/95">EXIM Logistics:</p>
                <p className="mt-3!">
                  To promote trade facilitation and streamline EXIM logistics, following measures have been undertaken:
                </p>
                <p>Infrastructure gaps are being addressed and digital initiatives undertaken (under National Committee on Trade Facilitation);</p>
                <p>An EXIM Logistics Group has been constituted;</p>
                <p>
                  A Comprehensive port connectivity plan developed by M/o port shipping and waterways, to address last and first mile infra gaps and promote seamless movement of goods to ports. 60 projects of MORTH and 47 of Railways have been sanctioned to improve last mile connectivity to ports.
                </p>
                <p>
                  To improve port productivity and address issues, several meetings have been held with MOPSW, port authorities, etc.; Port Processes studies have been conducted at 3 Major Ports (Chennai, JNPT and Vishakhapatnam); Visit to ports are being undertaken by DPIIT.
                </p>
                <p>
                  The Logistics Data Bank (LDB) is an application that tracks and traces of EXIM cargo. greater predictability, transparency and reliability, logistics cost will come down and wastages in supply chain will reduce.
                </p>
                <p>
                  Using LDB data, new analysis of port-wise vessel turnaround time is being prepared. Congestion between port and nearest check post is provided in the form of Port to CFS/ICD (For import cycle); CFS/ICD to Port (For export cycle); Port to nearest toll plaza. Using these analytics, port authorities are taking measure to improve performance.
                </p>
              </div>
            </div>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Human Resource Development">
            <p>To promote professionals in the sector, Government is notifying qualification packs for different job roles in the sector.</p>
            <p>
              A Webinar with Capacity Building Commission, Central Training Institutes (CTIs) and State Administrative Training Institutes (ATIs) was held in July 2023.
            </p>
            <p>
              To further give traction to training and capacity building in Logistics and Infrastructure Development, Syllabus and training modules is being developed.
            </p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Sectoral Plan for Efficient Logistics (SPEL)">
            <p>
              To address sector-specific needs in the logistics sector and streamline movement of bulk and break-bulk cargo in the country, Sectoral Plans for Efficient Logistics (SPEL) are being developed by user Ministries. These include sector specific action plans /interventions necessary for seamless movement of goods across different origin-destination pairs.
            </p>
            <p>
              So far, Comprehensive Port Connectivity Plan (CPCP) to bridge last mile gaps to ports, has been developed by M/o Port, Shipping and Waterways. The CPCP consisting of 107 Port connectivity projects (47 of MoR and 60 of MoRTH) has been notified.
            </p>
            <p>A Coal Logistics Plan for efficient coal evacuation has been developed by M/o Coal.</p>
            <p>M/o Steel is also developing its sectoral plan.</p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="State Engagement">
            <p>
              <span className="font-semibold text-slate-200">State Logistics Policy:</span> To bring holistic focus on ‘logistics’ in public policy at State level, States/UTs are developing State Logistics Plans (SLPs) aligned with NLP. So far, 22 States have notified their respective State Logistics policies.
            </p>
            <p>
              <span className="font-semibold text-slate-200">Logistics Ease Across Different States (LEADS):</span> An indigenous logistics performance index on lines of the World Bank’s LPI, called ‘Logistics Ease Across Different States (LEADS)’ index for logistics performance monitoring across states has been developed. The survey is conducted annually and States are ranked according to their performance. The main objective is to identify areas of improvement and support State Governments to undertake adequate infrastructure, services and regulatory reforms to improve their logistics performance. The LEADS 2023 report will be unveiled soon.
            </p>
          </SectionBlock>

          <div className={dividerClass} aria-hidden />

          <SectionBlock title="Logistics Cost Framework">
            <p>
              Logistics Division, DPIIT, has initiated an endeavour to estimate Logistics cost, since no official estimates available and they vary from 8-14% of GDP.
            </p>
            <p>In the past studies in private sector (Armstrong & Armstrong and NCAER):</p>
            <p>Armstrong & Armstrong - 13% of GDP;</p>
            <p>NCAER, 2018 - 8.10% of GDP.</p>
            <p>Hence a need was felt for developing accurate estimates based on holistic data and relevant statistical models.</p>

            <div className="mt-6! rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 sm:p-5">
              <h3 className="mb-3 text-base font-semibold uppercase tracking-wide text-amber-200/95">STEPS TAKEN:</h3>
              <div className="space-y-3 text-slate-300">
                <p>In March 2023, Government organized a workshop with international experts to brainstorm on best practices.</p>
                <p>
                  Task Force with members including Senior Officials from concerned line Ministries and experts from academia, industry and think tanks, notified in March 2023.
                </p>
                <p>Several meetings of Task Force held.</p>
                <p>
                  Using secondary data available in public domain baseline estimates for logistics cost achieved (using MOSPI’s Supply Use Tables). A long-term survey-based framework for logistics cost calculation developed.
                </p>
                <p>
                  Despite data limitations (data available in public domain is mainly aggregated estimates of transportation cost). This estimate will be used as a baseline for carrying out comprehensive trend analysis in future. This long-term survey-based study will help in arriving at robust logistics cost estimates at a disaggregated level so that targeted interventions across sectors / modes can be undertaken.
                </p>
              </div>
            </div>
          </SectionBlock>
        </article>
      </div>
    </div>
  )
}

export default NationalLogisticsPolicy
