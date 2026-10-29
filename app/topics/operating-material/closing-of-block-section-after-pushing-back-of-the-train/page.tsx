import React from 'react'

const ClosingOfBlockSectionAfterPushingBackOfTheTrainPage = () => {
    const pushBackClosing = [
        'SM X shall advise about the train pushing back.',
        'SM Y will note the advice.',
        "Put back all relevant signals to ‗ON‘ position.",
        'SM X, on complete arrival of train, ensures the conditions for closing the block section are complied, gives clearance time supported by Private Number.',
        'SM Y will repeat PN and note arrival time.',
      ]
      
      const pushBackDaido = [
        'Before pushing back, SM X shall operate S2 switch.',
        'Take off reception signals.',
        'On complete arrival of train, restore the S-2 to normal.',
        "Send ‗Train out of block section‘ signal through PB 1 and keep PB 2 also pressed for 5 seconds on the last beat.",
        "SM Y turns block handle to ‗Line closed‘ position.",
        "Acknowledge ‗Train out of block section‘ signal and press PB1 & PB2 for 5 seconds on the last beat.",
        "SM X turns the block handle to ‗Line closed‘ position.",
      ]
      
      const pushBackPodanur = [
        "SM X shall take ‗OFF‘ the reception signals.",
        "On arrival, operate the ‗Cancellation‘ button along with the Bell Code Button.",
        'Counter registers next higher number.',
        "SM X will give ‗Train out of block section‘ signal; press BCB along with ‗Line-closed‘ button.",
        "At the end of last beat, SM Y will press BCB and ‗Line closed‘ button till ‗Line closed‘ indication appears.",
        "‗Line closed‘ indication appears at station X.",
        "SM Y will acknowledge ‗Train out of block section‘ signal.",
      ]
      
      const pushBackUfsbi = [
        'SM X shall press Cancel Co-op button and SM Y shall get Co-op to light up, then SM Y shall press Bell and Cancel button at Y Station. Counter registers next higher number. On getting Bell code, SM X will release Cancel Co-op button.',
        'At Station X, TRAIN GOING TO INDICATOR starts flashing and at Station Y, TRAIN COMING INDICATOR flashes green and CANCEL Indicator flashes yellow.',
        'After 120 seconds, flashing will stop and at both stations, LINE CLOSED indicator lights up.',
      ]
  return (
    <div>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.4s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              Closing of Block Section After Pushing Back of the Train
            </h2>
          </header>

          <div className="space-y-4 px-5 py-7 sm:px-8 sm:py-9">
            <ol className="space-y-3">
              {pushBackClosing.map((text, index) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                >
                  <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                    {text}
                  </p>
                </li>
              ))}
            </ol>

            {[
              {
                title: 'i) Daido Tokenless Handle Type Block Instrument',
                items: pushBackDaido,
              },
              {
                title: 'ii) Podanur/Kyosan Push Button Block Instrument',
                items: pushBackPodanur,
              },
              {
                title: 'iii) UFSBI & SSBPAC(D) Single Line',
                items: pushBackUfsbi,
              },
            ].map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5"
              >
                <h3 className="mb-3 text-sm font-semibold text-amber-100 sm:text-base">
                  {section.title}
                </h3>
                <ol className="space-y-3">
                  {section.items.map((text, index) => (
                    <li
                      key={text}
                      className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5"
                    >
                      <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                        {text}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </article>
    </div>
  )
}

export default ClosingOfBlockSectionAfterPushingBackOfTheTrainPage