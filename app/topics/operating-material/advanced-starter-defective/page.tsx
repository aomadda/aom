import React from 'react'

const page = () => {
    const defectivePoints = [
        'SM shall obtain line clear through electrical speaking instrument.',
        'Follow the procedure as mentioned in block working message (BWM) to be written in Train Signal Register (TSR) by both SMs in red ink.',
        'Authorise the Loco Pilot by issuing PLCT.',
        'SM shall fill T/A 1425 in one copy.',
        'As per direction of a train, hand over T/C 1425 or T/D 1425 and PN should be written which is available on T/A 1425.',
        'Obtain LP signature on T/C or T/D 1425 form.',
        'If signal detects any points, exhibition of Proceed Hand Signal is compulsory.',
      ]
  return (
    <div>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.25s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl leading-snug">
              Advanced Starter Defective (AS NO 16 I.23 & 39 of 14.06.24)
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {defectivePoints.map((text, index) => (
              <li
                key={index}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.3 + 0.04 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 shrink-0 text-amber-300" aria-hidden>
                  →
                </span>
                <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>
        
    </div>
  )
}

export default page