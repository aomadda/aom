import React from 'react'

const shell =
  'relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/45'

const card =
  'relative overflow-hidden rounded-2xl border border-slate-600/55 bg-slate-800/40 shadow-2xl shadow-black/25 ring-1 ring-white/5 backdrop-blur-sm'

const divider = 'h-px bg-linear-to-r from-transparent via-slate-500/35 to-transparent'

const h2 =
  'text-lg font-semibold tracking-tight text-emerald-100 sm:text-xl'

const prose = 'space-y-4 text-sm leading-relaxed text-slate-300 sm:text-[15px] sm:leading-[1.75]'

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-5 py-7 sm:px-8 sm:py-8">
      <h2 className={`${h2} mb-4 border-b border-slate-600/35 pb-3`}>{title}</h2>
      <div className={prose}>{children}</div>
    </section>
  )
}

const GatiShaktiTerminals = () => {
  return (
    <div className={shell}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_42%_at_50%_-10%,rgba(52,211,153,0.11),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,42rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-400/22 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <article className={card} aria-label="Gati Shakti Multi-Modal Cargo Terminals">
          <div className="pointer-events-none absolute -right-20 top-0 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-40 h-36 w-36 rounded-full bg-teal-500/8 blur-3xl" />

          <header className="relative border-b border-slate-600/40 bg-linear-to-br from-slate-800/85 to-slate-900/55 px-5 py-8 text-center sm:px-8 sm:py-10">
            <h1 className="text-balance text-xl font-bold leading-snug tracking-tight text-slate-50 sm:text-2xl">
              Gati Shakti Multi-Modal Cargo Terminals (GCTs): Driving India’s Logistics Transformation
            </h1>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-emerald-200/85 sm:text-sm">
              Posted On: 13 JAN 2026 1:19PM by PIB Delhi
            </p>
          </header>

          <section className="px-5 py-7 sm:px-8 sm:py-9">
            <h2 className={`${h2} mb-4 text-center sm:text-left`}>Key Takeaways</h2>
            <ul className="list-none space-y-3 sm:space-y-3.5">
              <li className="rounded-xl border border-slate-600/45 bg-slate-900/40 px-3 py-3.5 text-sm leading-relaxed text-slate-300 ring-1 ring-white/4 sm:px-4 sm:py-4 sm:text-[15px] sm:leading-[1.75]">
                Indian Railways has approved 306 GCTs, with a combined capacity of 192 million tonnes per annum; 118 are already commissioned.
              </li>
              <li className="rounded-xl border border-slate-600/45 bg-slate-900/40 px-3 py-3.5 text-sm leading-relaxed text-slate-300 ring-1 ring-white/4 sm:px-4 sm:py-4 sm:text-[15px] sm:leading-[1.75]">
                Since 2014, 2,672 million tonnes of freight shifted from road to rail, saving 143.3 million tonnes of CO₂.
              </li>
              <li className="rounded-xl border border-slate-600/45 bg-slate-900/40 px-3 py-3.5 text-sm leading-relaxed text-slate-300 ring-1 ring-white/4 sm:px-4 sm:py-4 sm:text-[15px] sm:leading-[1.75]">
                Private investment of around ₹8,600 crore has been mobilised under the GCT Policy.
              </li>
              <li className="rounded-xl border border-slate-600/45 bg-slate-900/40 px-3 py-3.5 text-sm leading-relaxed text-slate-300 ring-1 ring-white/4 sm:px-4 sm:py-4 sm:text-[15px] sm:leading-[1.75]">
                Freight revenues from GCTs grew fourfold between 2022–23 and 2024–25, reaching ₹12,608 crore.
              </li>
            </ul>
          </section>

          <div className={divider} aria-hidden />

          <SectionBlock title="Introduction">
            <p>
              India’s logistics sector has made remarkable progress in recent years, achieving a significant milestone with logistics costs now reduced to 7.97% of GDP. This achievement reflects the success of sustained reforms and integrated planning, positioning the nation closer to global benchmarks. It demonstrates how coordinated infrastructure development and digital integration are reshaping the logistics landscape, making it more efficient, competitive, and future-ready.
            </p>
            <p>
              At the heart of this transformation is the PM Gati Shakti National Master Plan, which has brought together railways, highways, ports, and airports into a unified framework. By enabling seamless multimodal connectivity, the plan aims to strengthen industry competitiveness, support initiatives such as Ease of Doing Business and Make in India, and ensure balanced regional growth. The Gati Shakti Cargo Terminals (GCTs) are a key pillar of this vision, driving modern logistics solutions that will continue to enhance India’s role as a global trade hub.
            </p>
          </SectionBlock>

          <div className={divider} aria-hidden />

          <SectionBlock title="Gati Shakti Cargo Terminals">
            <p>
              A railway cargo terminal is a facility where goods are loaded, unloaded, and transferred between trains and other modes of transportation. It serves as an important hub in the logistics chain, facilitating the efficient movement of both containers and bulk goods. Earlier, without multimodal hubs like Gati Shakti Cargo Terminals, freight movement in India was scattered across road, rail, and ports. This led to delays, higher costs, and congestion. Integrated hubs are needed to connect these modes, speed up cargo handling, and lower emissions.
            </p>
            <p>
              Gati Shakti Multi-Modal Cargo Terminals (GCTs) are the modern cargo terminals being developed and set up under the GCT Policy, 2021 of the Ministry of Railways that integrate rail with other modes of transport.
            </p>
            <p>
              GCTs are being developed with ‘engine‑on‑load’ (EOL) operations to minimize detentions and ensure optimal use of railway infrastructure. They are equipped with modern cargo‑handling facilities such as mechanized loading systems and silos, which significantly reduce handling time. The overall objective is to enhance the Indian Railway’s share in total freight movement by providing faster, more efficient, and reliable freight services. This is essential as rail transport is more energy-efficient, cost-effective, and produces far lower carbon emissions compared to road transport, helping India reduce logistics costs and meet its sustainability goals.
            </p>
            <p>
              Under the EOL system, the locomotive stays at the terminal during loading or unloading, waiting at the railway’s cost within the permitted free time, so the train can depart immediately once the process is finished.
            </p>
            <p>
              Cargo Terminals are the strategic hubs to strengthen India’s logistics ecosystem. Their design focuses on seamless connectivity, private participation, and simplified processes, while aligning with national priorities and balanced regional growth.
            </p>
            <p>Gati Shakti Cargo Terminals are designed to promote multimodal connectivity, seamlessly linking railways with roads, ports, and airports.</p>
            <p>By encouraging private sector participation in their development, these terminals expand capacity and foster innovation.</p>
            <p>
              Approval processes for GCT projects are being simplified, with time-bound clearances ensuring faster execution.
            </p>
            <p>
              The initiative aligns with national priorities, supporting Ease of Doing Business, Make in India, and Atmanirbhar Bharat.
            </p>
            <p>
              Terminal locations are being identified across diverse states, ensuring balanced regional development and inclusive growth.
            </p>
          </SectionBlock>

          <div className={divider} aria-hidden />

          <SectionBlock title="Gati Shakti Multi-Modal Cargo Terminal (GCT) Policy, 2021">
            <p>
              Introduced by the Ministry of Railways on 15 December 2021, the policy aims to accelerate modern cargo terminal development, upgrade existing facilities, and strengthen India’s freight ecosystem. It streamlines processes, encourages private participation, and aligns infrastructure growth with industry demand to position India as a global logistics hub.
            </p>
            <p>Cost exemptions: Waiver of departmental charges, land license fees, and commercial staff costs.</p>
            <p>Support facilities: Railways construct and maintain common-user traffic facilities at serving stations.</p>
            <p>
              Freight rebate: Terminals generating 1 million tonnes or more outward traffic eligible for 10% freight rebate on mid-section Block Hut/Block Station costs.
            </p>
            <p>
              Asset maintenance: Railways cover track, signalling, and OHE (Overhead Equipment) maintenance (excluding the yard and loading/unloading lines).
            </p>
            <p>Connectivity rights: Railways may extend connectivity to additional terminals from maintained tracks.</p>
            <p>
              Commercial land use: Surplus railway land can be developed under Rail Land Development Authority (RLDA) provisions.
            </p>
            <p>
              Strategic importance: Builds a seamless multimodal logistics ecosystem, reduces bottlenecks, improves turnaround, and supports long-term global competitiveness.
            </p>
          </SectionBlock>

          <div className={divider} aria-hidden />

          <SectionBlock title="Progress Achieved So far">
            <p>
              Since their launch, Gati Shakti Cargo Terminals have moved from vision to visible outcomes, steadily translating into approvals, commissioning of new facilities, and measurable gains in freight handling capacity.
            </p>
            <p>
              · Approvals and Commissioning: Indian Railways has approved proposals for 306 Gati Shakti Cargo Terminals (GCTs), of which 118 have already been commissioned, reflecting steady advancement in implementation.
            </p>
            <p>
              Commissioned Terminals and Capacity – The 118 commissioned terminals have an estimated combined traffic handling capacity of 192 million tonnes per annum, contributing to lower logistics costs and a significant increase in rail cargo movement.
            </p>
            <p>
              Private Investment: Since the inception of the GCT Policy, approximately ₹8,600 crore of private investment has been mobilised, underscoring strong industry participation and the success of the public–private partnership model.
            </p>
            <p>
              A Master Circular on GCTs (2022) issued by the Railway Board provides detailed guidelines for implementation, covering agreements, operational standards, and amendments to improve the efficiency of these terminals.
            </p>
            <p>
              Cost-Effective and Eco-Friendly: Railways are a cleaner and more efficient mode of transport, with costs less than half of road transport and carbon emissions about 90% lower. Shifting freight from road to rail reduces congestion and supports India’s decarbonisation goals. Since 2014, this shift has moved an additional 2,672 million tonnes of freight to rail, saving 143.3 million tonnes of CO₂ emissions.
            </p>
            <p>
              In line with the provisions of the GCT Policy, agencies granted approval are required to complete construction within 24 months, ensuring the timely delivery and operational readiness of new terminals.
            </p>
            <p>
              Freight Revenue: The Gati Shakti Cargo Terminals have demonstrated strong performance, with freight revenues rising over fourfold between 2022–23 and 2024–25, underscoring their growing role in India’s logistics sector.
            </p>
            <p>
              The steady rise in approvals, commissioning, and freight revenues demonstrates that the Gati Shakti Cargo Terminal Policy is delivering tangible results. It has strengthened rail logistics, attracted private investment, and positioned Indian Railways as a key driver of efficient cargo movement.
            </p>
          </SectionBlock>

          <div className={divider} aria-hidden />

          <SectionBlock title="Key Gati Shakti Cargo Terminals Driving Logistics Growth">
            <p>
              The transformation of the logistics landscape is being driven not by any one terminal, but by the network of newly operational GCTs. This impact is illustrated through several key examples, including:
            </p>
            <div className="space-y-4 border-l-2 border-emerald-500/35 pl-4 sm:pl-5">
              <p>
                MANESAR (Haryana) GCT - The country’s largest automobile Gati Shakti Multi-Modal Cargo Terminal is located at Maruti Suzuki India Limited’s Manesar plant in Haryana. Spread over 46 acres, the terminal is equipped with a fully electrified corridor comprising four full-length rake handling lines and one engine escape line, with a total track length of 8.2 km. It is connected to Patli railway station through a 10 km dedicated rail link, part of the Haryana Orbital Rail Corridor, built at a cost of ₹800 crore, with ₹684 crore funded by the Haryana Rail Infrastructure Development Corporation (HRIDC) and the rest by Maruti Suzuki. Designed to enhance logistics efficiency, the terminal has one of the highest loading capacities in India, capable of handling 4.5 lakh automobiles annually.
              </p>
              <p>
                Terminals in the Northeast - The Moinarband and Cinnamara Gati Shakti Cargo Terminals in Assam already play a vital role in strengthening logistics for the Northeast by handling a diverse mix of coal, containers, food grains, fertilizers, cement, petroleum products, automobiles, and general cargo. Moinarband, developed under the North East Frontier Railway (NFR), is closely associated with petroleum and oil movement, particularly Indian Oil (IOMB) products, while Cinnamara, which is also developed under the NFR, is linked to food grains and fertilizers through its Food Corporation of India (FCI) siding. Together, these multimodal hubs enhance regional trade, connect industries and agricultural producers to wider markets, and support India’s PM Gati Shakti initiative by improving efficiency and reducing costs through integrated rail, road, and waterways transport. Building on this foundation, six new cargo terminals are under construction across Assam, with Baihata nearing completion. Upcoming facilities at Habaipur, Jogighopa, Kendukona, Basugaon, and Chayagaon will further expand the state’s logistics network, reduce costs, and deepen multimodal connectivity across the Northeast under the PM Gati Shakti National Master Plan.
              </p>
              <p>
                v New Sanjali GCT in Gujarat: The New Sanjali Gati Shakti Cargo Terminal in Gujarat is the first facility built on private land under the Gati Shakti Policy along the Western Dedicated Freight Corridor. This modern terminal represents a significant step in India’s logistics transformation. Designed as a strategic freight hub, it will support high-speed, high-capacity cargo movement, promote multimodal integration, and advance greener, more efficient logistics operations.
              </p>
            </div>
          </SectionBlock>

          <div className={divider} aria-hidden />

          <section className="px-5 py-7 sm:px-8 sm:py-8">
            <h2 className={`${h2} mb-4 border-b border-slate-600/35 pb-3`}>Way Forward:</h2>
            <div className={prose}>
              <p>
                Looking ahead, the GCT policy envisions a world-class logistics network that is digitally integrated, industry-responsive, and globally competitive. Key priorities include:
              </p>
              <p>Expansion of private participation to accelerate terminal development.</p>
              <p>
                Continued identification of new GCT locations based on industry demand and regional growth patterns.
              </p>
              <p>
                Strengthening digital integration through the Gati Shakti platform, enabling real-time tracking and predictive analytics.
              </p>
              <p>
                Long-term vision of positioning India as a global logistics hub, building on the achievement of single-digit logistics costs as a share of GDP, and advancing sustainability through greener transport solutions.
              </p>
            </div>
          </section>

          <div className={divider} aria-hidden />

          <section className="px-5 pb-10 pt-2 sm:px-8 sm:pb-12">
            <h2 className={`${h2} mb-4 border-b border-slate-600/35 pb-3`}>Conclusion:</h2>
            <div className={prose}>
              <p>
                The Gati Shakti Cargo Terminals represent a decisive step toward modernizing India’s logistics sector. By combining infrastructure development with digital integration and private participation, they address long-standing inefficiencies while aligning with national economic goals. As implementation progresses, GCTs are poised to transform India’s logistics landscape, making it more efficient, competitive, and future-ready.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default GatiShaktiTerminals
