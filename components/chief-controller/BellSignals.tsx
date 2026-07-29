'use client'

import React from 'react'

const BellSignals = () => {
  const lpMotormanCodes = [
    {
      number: 1,
      code: '0',
      indication: [
        'Signal is ON or',
        'Stopping train or',
        'Unable to start.'
      ],
      acknowledgement: '0',
      acknowledgementIndication: 'Acknowledge'
    },
    {
      number: 2,
      code: '00',
      indication: 'Signal is OFF and starting the train',
      acknowledgement: '00',
      acknowledgementIndication: 'Acknowledge and Ensure conditions to start before starting.'
    },
    {
      number: 3,
      code: '00',
      indication: 'Run through signals given. Train is running through station.',
      acknowledgement: '00',
      acknowledgementIndication: 'Acknowledge'
    },
    {
      number: 4,
      code: '00----00',
      indication: [
        'Passing Automatic signal at "ON" or',
        'Semi - Automatic Signal at "ON" with "A" or "AG" marker illuminating or',
        'Passing IBS signal at ON, IBS telephone out of order or',
        'Passing Gate signal at ON'
      ],
      acknowledgement: '00----00',
      acknowledgementIndication: 'Acknowledge and ensure conditions to start before starting.'
    },
    {
      number: 5,
      code: '000',
      indication: 'Guard required by Loco pilot',
      acknowledgement: '000',
      acknowledgementIndication: 'Acknowledge, secure the train, protect in rear and proceed.'
    },
    {
      number: 6,
      code: '0000----00',
      indication: [
        'Received authority to pass Stop signal at ON or',
        'Passing IBS signal at ON, with SM\'s PN.'
      ],
      acknowledgement: '0000----00',
      acknowledgementIndication: 'Acknowledge and ensure conditions to start before starting.'
    },
    {
      number: 7,
      code: '000----000----0',
      indication: 'Calling on signal given starting the train.',
      acknowledgement: '000----000----0',
      acknowledgementIndication: 'Acknowledge and ensure conditions to start before starting.'
    },
    {
      number: 8,
      code: '0000',
      indication: 'Protect train in Rear',
      acknowledgement: '0000',
      acknowledgementIndication: [
        'Acknowledge;',
        'Place Skids/Wedges and protect the train;',
        'Repeat the bell code;'
      ]
    },
    {
      number: 9,
      code: '00----0----0',
      indication: 'Apply brakes and place Skids/Wedges',
      acknowledgement: '00----0----0',
      acknowledgementIndication: [
        'Acknowledge;',
        'Apply brakes;',
        'Place Skids/Wedges;',
        'Repeat the bell code;'
      ]
    },
    {
      number: 10,
      code: '00----0----00',
      indication: 'Remove Skids/Wedges',
      acknowledgement: '00----0----00',
      acknowledgementIndication: [
        'Acknowledge.',
        'Remove Skids/Wedges;',
        'Repeat the bell code.'
      ]
    },
    {
      number: 11,
      code: '00000',
      indication: [
        'Initiating Joint Brake Test;',
        'Joint Brake Test is completed;'
      ],
      acknowledgement: '00000',
      acknowledgementIndication: 'Acknowledge.'
    },
    {
      number: 12,
      code: '000000',
      indication: 'Need assistance of Guard in applying brakes.',
      acknowledgement: '000000',
      acknowledgementIndication: 'Apply brakes and acknowledge.'
    }
  ]

  const guardCodes = [
    {
      number: 1,
      code: '0',
      indication: 'Stop the train',
      acknowledgement: '0',
      acknowledgementIndication: 'Stop and acknowledge.'
    },
    {
      number: 2,
      code: '00',
      indication: 'Start the train',
      acknowledgement: '00',
      acknowledgementIndication: [
        'At signalled (Block) stations, ensure off aspect or Authority, acknowledge and start;',
        'In case of Nonblock of Class \'D\' Stations ensure the conditions to start and start.'
      ]
    },
    {
      number: 3,
      code: '00----00',
      indication: 'Pushback Train',
      acknowledgement: '00----00',
      acknowledgementIndication: 'Acknowledge and push back train.'
    },
    {
      number: 4,
      code: '000----000',
      indication: 'Motorman/Loco Pilot not to exceed prescribed speed.',
      acknowledgement: '000----000',
      acknowledgementIndication: 'Acknowledge and reduce speed.'
    },
    {
      number: 5,
      code: '0----0',
      indication: 'Zone of speed restriction is over. Resume prescribed speed.',
      acknowledgement: '0----0',
      acknowledgementIndication: 'Acknowledge and Resume normal speed.'
    },
    {
      number: 6,
      code: '0000',
      indication: 'Leaving the cab.',
      acknowledgement: '0000',
      acknowledgementIndication: 'Acknowledge and wait for return of the Guard.'
    }
  ]

  const getCodeColor = (number: number) => {
    const colors = [
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700',
      'bg-gradient-to-r from-green-600 to-green-700',
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-cyan-600 to-cyan-700',
      'bg-gradient-to-r from-teal-600 to-teal-700',
      'bg-gradient-to-r from-emerald-600 to-emerald-700',
      'bg-gradient-to-r from-lime-600 to-lime-700'
    ]
    return colors[(number - 1) % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Bell Signals
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to bell signals between Loco Pilot and Guard for AOM aspirants
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 mb-8 p-6">
          <div className="space-y-4 text-gray-200">
            <p className="text-lg font-semibold text-blue-300 mb-4 flex items-center justify-center flex-col gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm border border-blue-400 text-white font-mono text-2xl drop-shadow-md tracking-widest">
                4.51
              </span>
              <span className="ml-2">Bell signals between Loco Pilot and Guard</span>
            </p>
            <p className="leading-relaxed">
              When bell communication is provided between the Loco Pilot and the Guard of the train, bell signal code, as may be prescribed by special instructions, shall be used.
            </p>
            <p className="leading-relaxed font-semibold text-blue-300">
              S.R.4.51. Bell Signals between Loco Pilot and Guard
            </p>
            <p className="leading-relaxed">
              (1) The following Bell Signal Codes shall be given by the Loco Pilot/Motorman and to be acknowledged by the Guard working EMU/DMU trains.
            </p>
          </div>
        </div>

        {/* LP/Motorman Codes Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">
              Bell Signal Codes by LP/Motorman
            </h2>
            <p className="text-gray-400 text-sm">Codes given by Loco Pilot/Motorman</p>
          </div>
          <div className="space-y-6">
            {lpMotormanCodes.map((signal) => (
              <div key={signal.number} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                {/* Code Header */}
                <div className={`${getCodeColor(signal.number)} text-white px-4 py-4`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold bg-white/20 px-4 py-2 rounded-lg">
                        {signal.number}
                      </span>
                      <h2 className="text-xl font-bold">
                        Code: <span className="font-mono text-2xl">{signal.code}</span>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Indication */}
                  <div className="space-y-3">
                    <h3 className="text-blue-300 font-semibold text-lg mb-2">Indication</h3>
                    {Array.isArray(signal.indication) ? (
                      <div className="space-y-2">
                        {signal.indication.map((ind, idx) => (
                          <div
                            key={idx}
                            className="group p-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700"
                          >
                            <p className="text-gray-200 leading-relaxed">
                              {ind}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="group p-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700">
                        <p className="text-gray-200 leading-relaxed">
                          {signal.indication}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Acknowledgement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                      <h4 className="text-green-300 font-semibold mb-2">Acknowledgement Code</h4>
                      <p className="text-gray-200 font-mono text-lg">
                        {signal.acknowledgement}
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                      <h4 className="text-purple-300 font-semibold mb-2">Acknowledgement Indication</h4>
                      {Array.isArray(signal.acknowledgementIndication) ? (
                        <div className="space-y-2">
                          {signal.acknowledgementIndication.map((ack, idx) => (
                            <p key={idx} className="text-gray-200 text-sm">
                              {ack}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-200 text-sm">
                          {signal.acknowledgementIndication}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guard Codes Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-2">
              Bell Signal Codes by Guard
            </h2>
            <p className="text-gray-400 text-sm">Codes given by Guard</p>
          </div>
          <div className="space-y-6">
            {guardCodes.map((signal) => (
              <div key={signal.number} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
                {/* Code Header */}
                <div className={`${getCodeColor(signal.number)} text-white px-4 py-4`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold bg-white/20 px-4 py-2 rounded-lg">
                        {signal.number}
                      </span>
                      <h2 className="text-xl font-bold">
                        Code: <span className="font-mono text-2xl">{signal.code}</span>
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Indication */}
                  <div className="space-y-3">
                    <h3 className="text-blue-300 font-semibold text-lg mb-2">Indication</h3>
                    <div className="group p-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700">
                      <p className="text-gray-200 leading-relaxed">
                        {signal.indication}
                      </p>
                    </div>
                  </div>

                  {/* Acknowledgement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                      <h4 className="text-green-300 font-semibold mb-2">Acknowledgement Code</h4>
                      <p className="text-gray-200 font-mono text-lg">
                        {signal.acknowledgement}
                      </p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                      <h4 className="text-purple-300 font-semibold mb-2">Acknowledgement Indication</h4>
                      {Array.isArray(signal.acknowledgementIndication) ? (
                        <div className="space-y-2">
                          {signal.acknowledgementIndication.map((ack, idx) => (
                            <p key={idx} className="text-gray-200 text-sm">
                              {ack}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-200 text-sm">
                          {signal.acknowledgementIndication}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-8 space-y-6">
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Note:</h3>
            <div className="space-y-4 text-gray-200">
              <p className="leading-relaxed">
                (1) &apos;0&apos; denotes for bell signal and &apos;----&apos; denotes for pause.
              </p>
              <p className="leading-relaxed">
                (2) When there is any doubt on the bell signal codes received, LP/Motorman and Guard may establish personal communication.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {lpMotormanCodes.length}
            </div>
            <div className="text-gray-300">LP/Motorman Codes</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {guardCodes.length}
            </div>
            <div className="text-gray-300">Guard Codes</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {lpMotormanCodes.length + guardCodes.length}
            </div>
            <div className="text-gray-300">Total Bell Signals</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BellSignals