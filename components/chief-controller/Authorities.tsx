'use client'

import React from 'react'

interface Authority {
  question: string
  answer: string
  form?: string
}

const Authorities = () => {
  const authorities: Authority[] = [
    { question: 'S & T Disconnection and Reconnection Notice', answer: 'T.351', form: 'T.351' },
    
    { question: 'Advance authority to pass defective signal is', answer: 'T.369(1) + PHS at the Foot of the Signal', form: 'T.369' },

    { question: 'The rear Station master shall give T.369(1) + PLCT to the Loco Pilot to pass the Stop signal stuck in "OFF" position.', answer: 'T.369(1) + PLCT', form: 'T.369' },
    
    { question: 'Authority to pass defective starter signal (if it is not LSS) is', answer: 'T.369(3b) + PHS', form: 'T.369' },
    { question: 'The authority required by Loco Pilot when passes starter at "ON" partly and stopped before Advanced Starter, apart from ATP', answer: 'T.369 (3b) + PHS + memo countersigned by Guard + Advanced starter off or PLCT', form: 'T.369' },

    { question: 'When LSS fails on single line automatic block system, Authority to proceed to Loco Pilot and restricted speed for first train are', answer: 'T/369(3b) + 10 kmph Caution Order', form: 'T.369' },

    { question: 'When LSS fails on D/L automatic block system, authority be given to LP of the train', answer: 'T/369(3b)', form: 'T.369' },
    
    { question: 'LP shall pass a Semi - Automatic signal with extinguished \'A\' marker at \'ON\' on receipt of written authority', answer: 'T.369(3b)', form: 'T.369' },

    { question: 'When Outer signal is defective, written authority to pass the signal at "ON" is', answer: 'T.369(3b)', form: 'T.369' },

    { question: 'If "A" & "AG" marker lit, Signal above shall be deemed to work as a Manual stop signal and Loco Pilot shall pass only on assumption of "OFF" position or on receipt of T.369(3b) + PHS', answer: 'T.369(3b) + PHS', form: 'T.369' },

    { question: 'If "A" & "AG" marker extinguished, Points are not correctly secured or failed, irrespective of LC gate position, Signal above shall be deemed to work as a Manual stop signal and Loco Pilot shall pass only on assumption of "OFF" position or on receipt of T.369(3b) + PHS', answer: 'T.369(3b) + PHS', form: 'T.369' },


    { question: 'When a Loco Pilot finds a Semi-Automatic Stop signal with illuminated "A" marker at "ON". Where there is a provision of "AG" marker, and "AG" marker is illuminated, loco pilot shall bring the train to stop in rear of it and shall pass such signal only on assumption of "OFF" position or on receipt of T.369(3b) + PHS', answer: 'T.369(3b) + PHS', form: 'T.369' },

    { question: 'When a Loco Pilot finds a Semi-Automatic Stop signal with Extinguished "A" marker at "ON". Where there is no provision of "AG" marker, Loco pilot shall bring the train to stop in rear of it and shall pass such signal only on assumption of "OFF" position or on receipt of T.369(3b) + PHS', answer: 'T.369(3b) + PHS', form: 'T.369' },

    { question: 'In Automatic section on Double line if LSS is defective, the Loco Pilot shall be given __________ with a speed restriction of 10/8 kmph upto next automatic signal.', answer: 'T.369(3b) + Caution Order', form: 'T.369' },
    
    { question: 'Caution Order (Divisional/Sectional)', answer: 'T.409', form: 'T.409' },
    { question: 'Caution Order (Nil)', answer: 'T/A 409', form: 'T.409' },

    { question: 'Remainder Caution Order', answer: 'T/B 409', form: 'T.409' },
    
    { question: 'Train Examination Advice Memo', answer: 'T.431', form: 'T.431' },
    
    { question: 'To despatch a material train for working in the block section and return back to the same station, authority given to the LP', answer: 'T.462', form: 'T.462' },
    { question: 'Authority for material train after completion of work and going to next station', answer: 'T/A 462', form: 'T.462' },
    
    { question: 'Authority given to the TTM to go into the section work and return to the same station during block is', answer: 'T.465', form: 'T.465' },
    { question: 'Authority given to the TTM to go into the section work and proceed to the next station during block is', answer: 'T/A 465', form: 'T.465' },
    { question: 'When more than one TTM are programmed to go in the same block section and return to the same station the authorities for first TTM and subsequent TTM are', answer: 'T/465, Caution Order', form: 'T.465' },
    { question: 'When more than one TTM are programmed to go in the same block section and clear to the next station the authorities for first TTM and last TTM are', answer: 'Caution Order, T/A 465', form: 'T.465' },
    
    { question: 'Written authority for Loco Pilot to receive a train on to an obstructed line', answer: 'T.509', form: 'T.509' },
    
    { question: 'Written authority for Loco Pilot to receive a train on to non-signalled line', answer: 'T.510', form: 'T.510' },
    { question: 'During line/integrated/shadow block, if the units are coming on wrong line, units shall be received on', answer: 'T/510 + off position of shunt signal if any', form: 'T.510' },
    
    { question: 'To despatch a train from non-signalled line, where tangible authority is not given as A T P, authority to be given in addition to ATP', answer: 'T.511', form: 'T.511' },
    
    { question: 'Written authority to start a train from a station having common starter', answer: 'T.512', form: 'T.512' },
    
    { question: 'If it is required to dispatch a relief engine or relief train into obstructed block section, it can be dispatched by issuing', answer: 'T/A 602', form: 'T.602' },
    { question: 'When a train without guard is divided in the section, after dropping the first portion, light engine returning to pick up second portion shall proceed on authority', answer: 'T/A 602', form: 'T.602' },
    
    { question: 'Authority for light engine/vehicle which is going to open communications', answer: 'T/B 602', form: 'T.602' },
    { question: 'Authority to dispatch a light engine on single line Automatic Block system during prolonged failure of all signals when no communications are available is', answer: 'T/B 602', form: 'T.602' },
    { question: 'When enquiry is made for more than one train during TIC on S/L, the forms given to the light engine/vehicle which is going to open communication', answer: 'T/B 602 + T/E 602', form: 'T.602' },
    
    { question: 'During T I C on double line authority to the Loco Pilot', answer: 'T/C 602', form: 'T.602' },
    { question: 'In the automatic block system, to dispatch a relief loco/train into the occupied block section authority given as the ATP for the relief loco/ train', answer: 'T/C 602', form: 'T.602' },
    
    { question: 'During Temporary Single Line working, Authority given to Loco Pilot and Guard', answer: 'T/D 602', form: 'T.602' },
    { question: 'During TSL working when the train is proceeding on wrong line, the train shall be despatched by issuing', answer: 'T/D 602', form: 'T.602' },
    { question: 'In case of flow of traffic during Total Interruption of Communication on Single Line,  Line Clear enquiry can be made for subsequent trains through', answer: 'T/E 602', form: 'T.602' },
    
    { question: 'Conditional line clear reply message', answer: 'T/F 602', form: 'T.602' },
    
    { question: 'Conditional line clear Ticket for Up Trains', answer: 'T/G 602', form: 'T.602' },
    
    { question: 'Conditional Line Clear Ticket for Down Trains', answer: 'T/H 602', form: 'T.602' },
    
    { question: 'As soon as any one of the communication restored, the Station Master must send a message to the SM of other station in the prescribed form', answer: 'T/I.602', form: 'T.602' },
    
    { question: 'On Double line Authority to dispatch the train against the established direction of traffic for any reason other than introduction of TSL working', answer: 'T/J. 602', form: 'T.602' },
    
    { question: 'During divided train working, the Guard will prepare a written permission give to Loco Pilot to proceed to the next station in the form', answer: 'T.609', form: 'T.609' },
    
    { question: 'Combined Train Report is given in form number', answer: 'T.720', form: 'T.720' },
    
    { question: 'Where shunting operations are supervised by Guard/SM, LP shall be given in Form Number', answer: 'T.806', form: 'T.806' },
    { question: 'Authority to go up to opposite FSS for shunting purpose in Token area', answer: 'T.806', form: 'T.806' },
    { question: 'Authority to go up to opposite FSS for shunting purpose in Token less area', answer: 'T.806 + Shunt key or T.806 +  PN', form: 'T.806' },
    { question: 'Authority to enter block section in rear on Double line section for Shunting purpose', answer: 'T.806 + PN', form: 'T.806' },
    { question: 'Authority to enter block section in advance on Double line section for Shunting purpose', answer: 'T.806 + PN or LSS lever key or Taking off Shunt signal below LSS', form: 'T.806' },
    { question: 'Authority to enter block section in advance on Double line section for Shunting purpose behind the travelling away train', answer: 'T.806 Without PN or LSS lever key or Taking off Shunt signal below LSS', form: 'T.806' },
    
    { question: 'When LSS becomes defective on Single line Automatic block system', answer: 'T/A 912 + PLCT', form: 'T.912' },
    { question: 'Authority to open communication on Single line Automatic block system', answer: 'T/A 912 + T/B 602', form: 'T.912' },
    { question: 'Authority to despatch the trains during Temporary Single Line working on Automatic block system (first train on right line and all trains on wring line)', answer: 'T/A 912 +  T/D 602', form: 'T.912' },

    { question: 'In automatic section on Single line if LSS is defective, the Loco Pilot shall be given __________ with a speed restriction of 25 kmph for the first train.', answer: 'T/A 912 +  PLCT + Caution Order', form: 'T.912' },
    
    { question: 'When signals and communication fail on Double line Automatic Block System, the authority given to the Loco Pilot is', answer: 'T/B 912', form: 'T.912' },

    { question: 'When all signals and communications fail on Double line Automatic Block System, the authority given to the Loco Pilot is ________ & to dispatch another train a clear interval of _________ min or running time between two stations whichever is more', answer: 'T/B 912 & 25 minutes', form: 'T.912' },
    
    { question: 'Relief engine/train to enter occupied block section in Automatic block system', answer: 'T/C 912', form: 'T.912' },

    { question: 'To despatch Relief engine / train in to an occupied/ obstructed automatic block section is _______ authority given to LP to assist the disabled engine/train & speed is ________ when view is not clear', answer: 'T/C 912 & 10 kmph', form: 'T.912' },
    
    { question: 'During prolonged failure of signals but communications are available on D/L Automatic Block System, the authority given to Loco Pilot is', answer: 'T/ D 912', form: 'T.912' },

    { question: 'When direction of traffic can not be established on a single line in Automatic block system, authority is______', answer: 'T/D 912 & First Train Speed 25/10 Kmph', form: 'T.912' },
    
    { question: 'During TSL working Automatic Block System, authorities for every first train proceeding on right line when signal and communications are working', answer: 'T/E 912', form: 'T.912' },
    
    { question: 'Train Intact Register is in the form number', answer: 'T.1410', form: 'T.1410' },
    
    { question: 'Line clear enquiry on Paper Line Clear Ticket', answer: 'T/A 1425', form: 'T.1425' },
    { question: 'Line clear reply on Paper Line Clear Ticket', answer: 'T/B 1425', form: 'T.1425' },
    { question: 'On Double line section in Up direction when LSS is defective Authority to proceed is', answer: 'T/C.1425', form: 'T.1425' },
    { question: 'On Single line token less section, when LSS is defective Authority to proceed for DN train is', answer: 'T/D.1425', form: 'T.1425' },

    { question: 'On Single line, Double line and Multi line sections, when block instrument is interrupted or suspended, every train shall be stopped, run through trains being stopped out of course and the Station Master shall issue to the Loco Pilot of train', answer: 'T/C 1425 OR T/D.1425', form: 'T.1425' },
    
    { question: 'Trolley/Lorry notice is given by P W I in form No.', answer: 'T. 1518', form: 'T.1518' },
    
    { question: 'When motor trolley is following a full length train or engine or another motor trolley, authority given as A T P is', answer: 'T. 1525', form: 'T.1525' },
    { question: 'In token less section, ATP for the movement of independent motor trolley is', answer: 'T/A 1525', form: 'T.1525' },
    
    { question: 'Authority given to the Tower Wagon to go into the section work and return to the same station during power block is', answer: 'T.1708', form: 'T.1708' },
    { question: 'Authority given to the Tower Wagon to go into the section work and proceed to the next station during power block is', answer: 'T/A 1708', form: 'T.1708' },
    { question: 'When more than one T/CAR are programmed to go to block section and return to the same station the authorities for first T/CAR and subsequent T/CAR are', answer: 'T/1708, Caution Order', form: 'T.1708' },
    { question: 'When more than one T/CAR are programmed to go in the same block section and clear to the next station the authorities for first T/CAR and last T/CAR are', answer: 'Caution Order, T/A1708', form: 'T.1708' },
    
    { question: 'The authority given to the loco pilot at station when IBS is defective', answer: 'PLCT', form: 'Other' },
    { question: 'When RRV is to be dispatched from a station provided with track circuit/panel, such movements in the block section would be dealt only on', answer: 'PLCT', form: 'Other' },
    { question: 'To pass Home signal of class \'C\' station on Double line section', answer: 'PLCT', form: 'Other' },

    { question: 'When Loco pilot enters block section without an ATP and report is sent to station in rear, the SM gives', answer: 'PLCT', form: 'Other' },

    { question: 'In class "C" station, Home signal is the First Stop Signal (FSS and Last Stop Signal (LSS), then Home Signal is defective, the authority to pass the signal at "ON" is', answer: 'PLCT', form: 'Other' },

    { question: 'On double line sections when a train is pushed back after entering the block section on normal ATP, the next train shall be dispatched on _____', answer: 'PLCT', form: 'Other' },

    { question: 'When Loco pilot enters block section without an ATP and report is sent to station in advance, the SM gives', answer: 'Caution Order', form: 'Other' },

    { question: 'If Permissive signal is stuck in "OFF" postion, the rear Station master shall give ________ to the Loco Pilot to stop and observe the PHS at the foot of the signal stuck in "OFF" position', answer: 'Caution Order', form: 'Other' },

    { question: 'When Station Masters of both ends received Trolly/Lorry Notice, they shall stop all the trains entering into the section and issue ________', answer: 'Caution Order', form: 'Other' },

    { question: 'When goods Train run without Guard has to be divided, the Loco Pilot shall bring first portion by preparing', answer: 'Written Memo', form: 'Other' },

    { question: 'Authority to go beyond opposite FSS for shunting purpose on Single line', answer: 'ATP + Written Memo to Push back + Taking off signals', form: 'Other' },

    { question: 'Brake Power Certificate', answer: 'RS-6', form: 'Other' },
    { question: 'After stopping at Engineering Stop Indicator Loco pilot has to sign in', answer: 'ER-7', form: 'Other' },
  ]

  // Group authorities by form number for better organization
  const groupedByForm = authorities.reduce((acc, authority) => {
    const formKey = authority.form || 'Other'
    if (!acc[formKey]) {
      acc[formKey] = []
    }
    acc[formKey].push(authority)
    return acc
  }, {} as Record<string, Authority[]>)

  const getFormColor = (form: string) => {
    if (form === 'Other') {
      return 'bg-linear-to-r from-purple-600 to-purple-700'
    }
    const formNum = parseInt(form.replace('T.', '').replace('T/', '').replace('T/A', '').replace('T/B', '').replace('T/C', '').replace('T/D', '').replace('T/E', '').replace('T/F', '').replace('T/G', '').replace('T/H', '').replace('T/I.', '').replace('T/J.', '').replace('T/ ', '').split('.')[0].split(' ')[0])
    if (isNaN(formNum)) {
      return 'bg-linear-to-r from-purple-600 to-purple-700'
    }
    if (formNum <= 400) return 'bg-linear-to-r from-red-600 to-red-700'
    if (formNum <= 600) return 'bg-linear-to-r from-orange-600 to-orange-700'
    if (formNum <= 900) return 'bg-linear-to-r from-yellow-600 to-yellow-700'
    if (formNum <= 1500) return 'bg-linear-to-r from-green-600 to-green-700'
    if (formNum <= 1700) return 'bg-linear-to-r from-blue-600 to-blue-700'
    return 'bg-linear-to-r from-indigo-600 to-indigo-700'
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Authorities
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to authorities for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByForm).map(([form, items]) => (
            <div key={form} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Form Header */}
              <div className={`${getFormColor(form)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {form}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {authorities.length}
            </div>
            <div className="text-gray-300">Total Authorities</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByForm).length}
            </div>
            <div className="text-gray-300">Form Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              T.351-T.1708
            </div>
            <div className="text-gray-300">Form Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authorities
