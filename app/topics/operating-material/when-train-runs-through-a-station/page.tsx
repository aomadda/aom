'use client'

import React from 'react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'
import { TrainFront } from 'lucide-react'

const WhenTrainRunsThroughAStationPage = () => {
  return (
    <OperatingTopicPage title="When train runs through a station:" icon={TrainFront}>
        <article
          className="mt-8 overflow-hidden rounded-3xl border border-slate-500/30 bg-slate-900/50 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/6 backdrop-blur-xl"
          style={{ animation: 'fade-up 0.55s ease-out 0.7s both' }}
        >
          <header className="relative border-b border-amber-500/15 bg-linear-to-br from-slate-900/90 via-slate-900/70 to-amber-950/30 px-5 py-6 sm:px-8 sm:py-7">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-400/40 to-transparent" />
            <h2 className="text-center text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 sm:text-2xl md:text-3xl leading-snug">
              When train runs through a station:
            </h2>
          </header>

          <ul className="space-y-3 px-5 py-7 sm:px-8 sm:py-9">
            {[
              "When train runs through a station, SM shall exhibit all right signal to the train himself standing on the station side. A competent railway servant shall be sent to off side to exchange all right signals (except where traffic gate is available, manned and deputing such staff dispensed by Sr. DOM). Loco Pilot and Guard shall be on the lookout for such signals and exchange with station staff and also with each other.",
              "On double line/multiple line section when two/more trains are running through the station at the same time, the SM on duty shall exchange all right signal with the Guard and the Loco Pilot of the train nearest to station side and a competent railway servant shall be deputed for exchange all right signals nearest to off side.",
              "Guards of trains provided with \"Air conditioned\" SLR/LR shall acknowledge \"all right signal\" given by station staff by exhibiting PHS and to the Loco Pilot by speaking on through telephone provided in the train between SLR/LR and Engine or on Walkie-Talkie.",
              "Loco Pilots and Guards of running trains will be responsible towards any train passing on the adjacent line(s) and exchange 'All Right' signal with the Guard and Loco Pilot of such trains.",
              "Loco Pilots/Motormen of DEMUs, DHMUs, EMUs and MEMUs are exempted from exchanging ‗All right‗ signals. However, they shall be alert to observe the signals that are being given by the Guard or Station staff and be prepared to take appropriate action.",
              "If anything unusual is noticed during passage of the train, SM shall show stop hand signals to stop the train. If it is not possible to stop the train, advise the LP through Gateman or IB telephone or TPC and inform SM of advance station to stop the train and examine. Trains on adjacent line may be permitted after issuing caution order.",
              "Cabin staff, where shunting is performed, shall not exhibit any signal to passing trains when nothing irregular is noticed. But they shall show stop signals if anything danger is noticed.",
              "All right signal shall be exchanged till engine has passed advanced starter / LSS.",
              "If Loco Pilot fails to exchange all right signals or /and fails to give a long whistle, the SM shall advise the station in advance to stop the train by giving bell 00000-0 and ascertain the reason.",
              "If the Loco Pilot does not receive the signal from the Guard/station staff, shall call for it by giving two short whistles and even then if the Guard‘s signal is not received, he shall stop the train and ascertain the cause.",
              "If SM/station staff fail to exchange all right signals, Guard has to record in CTR.",
            ].map((text, index) => (
              <li
                key={text}
                className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/60 sm:p-5"
                style={{ animation: `fade-up 0.55s ease-out ${0.75 + 0.03 * (index + 1)}s both` }}
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 text-sm font-bold text-amber-100 ring-1 ring-amber-400/35">
                  
                </span>
                <p className="text-[15px] leading-relaxed text-slate-300 sm:text-base">{text}</p>
              </li>
            ))}
          </ul>
        </article>
    </OperatingTopicPage>
  )
}

export default WhenTrainRunsThroughAStationPage