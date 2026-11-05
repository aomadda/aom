'use client'

import { ListMark } from '@/components/topics/operating-material/ListMark'
import React from 'react'
import { PhoneCall } from 'lucide-react'
import { OperatingTopicPage } from '@/components/topics/operating-material/OperatingTopicPage'

const ObtainLineClearThroughControlPhoneAndVHFSetPage = () => {
    const controlPhone = [
        'Whenever the station block instrument/phone is defective and no other means of communication is available, the SM shall immediately inform the SCOR & other concerned officials through a message.',
        'Both SMs shall record all the particulars in TSR with red ink and exchange messages in a pro-forma as given in the Block Working Manual.',
        'The SCOR shall record the failure on the control chart and shall acknowledge while taking over/handing over the charge.',
        'The SM who is having a train to despatch will take permission from SCOR, and SCOR shall call the SM at the other end on control phone and establish communication between both SMs.',
        'Both SMs, before granting/obtaining line clear, shall identify each other by calling out their station names and also their full names.',
        'Both SMs shall repeat the arrival and departure timings of last three preceding trains to the SCOR, who shall cross-check the timings with the control chart.',
        'The SM who requires line clear shall clearly mention train number, description of the train (Express/Passenger/Goods), and also the direction (UP/DN).',
        'The SM at the other end, before giving line clear supported with a PN, shall comply with all the conditions for granting line clear.',
        'Both SMs shall record in TSR with red ink the train number in full, description, arrival & departure timings of each train run between two stations during block failure.',
        'Both SMs shall record the means of communication through which line clear is obtained or granted on the T/A 1425 (outward) & T/B 1425 (inward) documents.',
        'After obtaining line clear, the SM shall prepare the Paper Line Clear Ticket on Form No. T/C 1425 for UP direction & T/D 1425 for DN direction and take the acknowledgement of loco pilot in T/A 1425 before handing over PLCT to him.',
        "Both SMs shall record the ‗Train Entering Block Section‘ and ‗Train Out Of Block Section‘ particulars in T/A 1425 & T/B 1425, TSR, communicate each other on control phone and also inform the SCOR.",
        'All trains shall be stopped for issuing PLCT. The serial numbers of PLCTs issued to each train shall be recorded in remarks column of TSR against the entry.',
        "Whenever line clear is cancelled, both SMs shall record the same in the ‗D‘ column of T/A 1425 and T/B 1425, duly informing the SCOR.",
        'The SCOR shall co-ordinate between both SMs to fulfill all the transactions and record all the PNs in the control chart which were issued by SM for granting line clear and also ensure that the block section is clear at the time of granting line clear.',
        'Both SMs shall record the name of the Section controller in the remarks column of the TSR.',
      ]
      
      const vhfSet = [
        'Before actually signalling a train through VHF, the SM shall exchange messages in the proforma given in the BWM and record in red ink in TSR.',
        'SM of both stations contact each other on common frequency/channel in their VHF sets and switch over to the freezed channel.',
        'The common channel and freezed channel are mentioned in SWR.',
        'Both SMs shall cross-check PNs given for last three preceding trains, train numbers, and record these particulars in red ink in TSR.',
        'SM at despatching clearly mentions train number in full, description and direction for which line clear is required.',
        'SM at other end, after complying condition for granting line clear, shall grant line clear supported by PN.',
        'The train number, description, direction and arrival/departure of each train and PN obtained/issued are recorded in red ink in TSR by both SMs.',
        'SM records the means of communication in T/A 1425 and T/B 1425.',
        'After obtaining line clear, SM prepares PLCT (T/C 1425 or T/D 1425) and delivers to LP, taking his acknowledgement in T/A 1425.',
        'Serial number of PLCT is mentioned in remarks column of TSR for each entry.',
        'SMs communicate train entering block section or train out of block section in TSR.',
        "When line clear is cancelled, same to be recorded in ‗D‘ column.",
        'All trains stopped for issue of PLCT.',
        'SMs switch over to common channel after necessary transaction completed.',
      ]
      
      const vhfChannels = [
        'Common channel/frequency – channel 13',
        'Freezed channel/frequency – channel 5 (1st adjoining station)',
        'Channel 6 (2nd adjoining station)',
        'Channel 7 (3rd adjoining station)',
        'At junction station for other section: channel 15 (1st adjoining station), channel 16 (2nd adjoining station), channel 17 (3rd adjoining station)',
      ]
  return (
    <OperatingTopicPage
      title="How to Obtain Line Clear Through Control Phone and VHF Set?"
      icon={PhoneCall}
    >
          <div className="space-y-4">
            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="text-base font-semibold text-amber-100 sm:text-lg">
                LINE CLEAR THROUGH CONTROL PHONE (BWM Part A-8.8, B-8.8, C-8.8)
              </h3>
              <ol className="mt-4 space-y-3">
                {controlPhone.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/70 sm:p-5"
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

            <section className="rounded-2xl border border-slate-600/40 bg-slate-900/40 p-4 ring-1 ring-white/4 sm:p-5">
              <h3 className="text-base font-semibold text-amber-100 sm:text-lg">
                LINE CLEAR THROUGH VHF SET (BWM Part A-8.9, B-8.9, C-8.9)
              </h3>
              <ol className="mt-4 space-y-3">
                {vhfSet.map((text, index) => (
                  <li
                    key={text}
                    className="flex gap-3 rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 transition-colors hover:border-amber-500/30 hover:bg-slate-900/70 sm:p-5"
                  >
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      {text}
                    </p>
                  </li>
                ))}
                <li className="rounded-2xl border border-slate-600/40 bg-slate-900/50 p-4 ring-1 ring-white/4 sm:p-5">
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-7 min-w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-400/25 to-orange-600/25 px-1.5 text-xs font-bold text-amber-100 ring-1 ring-amber-400/35">
                      15
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                      The common and freezed channels are:
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2 border-l-2 border-amber-500/25 pl-4 sm:ml-12">
                    {vhfChannels.map((text) => (
                      <li key={text} className="flex gap-2.5">
                        <ListMark></ListMark>
                        <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
            </section>
          </div>
    </OperatingTopicPage>
  )
}

export default ObtainLineClearThroughControlPhoneAndVHFSetPage