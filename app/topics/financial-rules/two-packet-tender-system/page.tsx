import React from 'react'

const notes = [
  'GCC for Works Clause No. 7 A',
  'Main Object: To assess the tenderers technically without being influenced by the financial bids',
  'Tenderer shall keep the offer open for a minimum period of 90 days from the date of the closing the Tender (Single packet – 60 days only)',
  'Tenderers submit their offers/quotations in two sealed envelopes.',
]

const covers = [
  [
    '1)',
    'First cover - Technical and Commercial offer - for scrutinizing the capability, possession of appropriate plant & machinery, financial strength, and experience, etc,',
  ],
  ['2)', 'Second Cover - Financial offer'],
]

const afterCovers = [
  'Both individually sealed packets i.e., technical and financial should be sealed in one envelope.',
  'If the offers of the first packet are found acceptable by the Competent Authority, the second packet shall be opened and the tenders shall be processed for finalization in the normal manner.',
  'If the first packet is not acceptable for the Tender Committee, the second packet (financial bid) of such tenderer will be returned to the party without open.',
  'However if the Tender committee feels clarifications regarding designs, specifications, etc required based on the first packet, discussions shall be held with each tenderer separately, after obtaining approval of the competent authority.',
]

const whenAdopted = [
  'Techno-economic- evaluation: For all works contract tenders requiring Techno-economic evaluation',
  'Above Rs. 10 Crores - Mandatory - If the works contract tender is valued over and above Rs. 10 Crores.',
  'Exceptions ( in case of Service Contracts - Rs. 50 Lakhs and above)',
  'In cases, where reasons for not following two packet systems should be recorded with approval of not below SAG level Officer and the concurrence of associate finance.',
  'For Tenders valued beyond the tender acceptance powers of SAG/DRM/ADRM/CWM, a decision of the Executive not below HAG in consultation with PFA shall be required.',
  'Below Rs. 10 Crores - Optional - Decided by the Tender Inviting authority with the concurrence of associated finance but keeping in mind item No.1 supra.',
  'Not applicable - to the projects covered by the World Bank loan (for which a separate procedure is prescribed)',
]

const TwoPacketTenderSystemPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-slate-950 via-[#0c1210] to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-18%,rgba(16,185,129,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_100%_20%,rgba(56,189,248,0.08),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/55 shadow-[0_28px_90px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/6 backdrop-blur-xl">
          <div className="h-1.5 bg-linear-to-r from-emerald-500 via-sky-400 to-amber-400" />

          <header className="border-b border-emerald-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-emerald-950/30 px-5 py-8 text-center sm:px-10">
            <h1 className="bg-linear-to-r from-emerald-100 via-teal-100 to-sky-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
              Two Packet Tender System
            </h1>
          </header>

          <div className="space-y-4 px-4 py-6 sm:px-8 sm:py-8">
            {notes.map((note) => (
              <p
                key={note}
                className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
              >
                {note}
              </p>
            ))}

            <div className="grid gap-3 sm:grid-cols-2">
              {covers.map(([mark, text]) => (
                <p
                  key={mark}
                  className="rounded-2xl border border-sky-400/25 bg-linear-to-br from-sky-950/30 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4 sm:px-5"
                >
                  <span className="font-semibold text-sky-100">{mark}</span> {text}
                </p>
              ))}
            </div>

            {afterCovers.map((note) => (
              <p
                key={note}
                className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-950/35 via-slate-900/40 to-slate-900/20 px-4 py-4 text-[15px] leading-[1.85] text-slate-200 ring-1 ring-white/4 sm:px-5 sm:text-base"
              >
                {note}
              </p>
            ))}

            <section className="overflow-hidden rounded-2xl border border-amber-400/25 bg-linear-to-br from-amber-950/30 via-slate-900/40 to-slate-900/20">
              <div className="border-b border-amber-400/20 bg-amber-500/10 px-4 py-4 sm:px-5">
                <h2 className="text-[15px] font-semibold text-amber-50 sm:text-base">
                  Two Packet – When to be adopted
                </h2>
              </div>
              <ul className="space-y-3 px-4 py-5 sm:px-5">
                {whenAdopted.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-amber-400/15 bg-slate-950/40 px-4 py-3 text-[15px] leading-[1.75] text-slate-200 ring-1 ring-white/4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default TwoPacketTenderSystemPage
