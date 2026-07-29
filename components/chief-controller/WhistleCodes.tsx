'use client'

import React from 'react'

const WhistleCodes = () => {
  const whistleCodes = [
    {
      number: 1,
      code: '0',
      indications: [
        {
          category: 'Before starting:',
          items: [
            'Indication to Loco Pilot of assisting/banking engine that the Loco Pilot of leading engine is ready to start.',
            'Acknowledgement by the Loco Pilot of assisting/banking engine to leading engine.',
            'Engine ready to leave loco yard or after completing loco work.',
            'Engine ready to go to Loco Yard.'
          ]
        },
        {
          category: 'On run:',
          items: [
            'Assistance of the other engine not required.',
            'Acknowledgement of Loco Pilot of assisting/banking engine that assistance stopped.'
          ]
        }
      ]
    },
    {
      number: 2,
      code: '0 0',
      indications: [
        {
          category: '',
          items: [
            'Call for Guard\'s signal.',
            'Signals not exchanged by Guard.',
            'Signals not exchanged by station staff.'
          ]
        }
      ]
    },
    {
      number: 3,
      code: '–– 0',
      indications: [
        {
          category: '',
          items: [
            'Guard to release brakes.',
            'Before starting engine or a train from station/mid-section.',
            'Main line clear after backing into siding.'
          ]
        }
      ]
    },
    {
      number: 4,
      code: '0 0 0',
      indications: [
        {
          category: '',
          items: [
            'Guard to apply brakes.',
            'Train is out of control, Guard to assist.'
          ]
        }
      ]
    },
    {
      number: 5,
      code: '0 0 0 0',
      indications: [
        {
          category: '',
          items: [
            'Train cannot proceed on account of accident, failure, obstruction or other exceptional cause.',
            'Protect train in rear.'
          ]
        }
      ]
    },
    {
      number: 6,
      code: '–– –– 0 0',
      indications: [
        {
          category: '',
          items: [
            'Call for Guard to come to engine.'
          ]
        }
      ]
    },
    {
      number: 7,
      code: '0 –– 0',
      indications: [
        {
          category: '',
          items: [
            'Token not received.',
            'Token missed.',
            'With wrong \'authority to proceed\'.',
            'Passing Stop signal at \'on\' with proper authority'
          ]
        }
      ]
    },
    {
      number: 8,
      code: '–––',
      indications: [
        {
          category: '',
          items: [
            'Before starting, vacuum/air pressure recreated on ghat section, remove sprags.',
            'Passing an Automatic Stop signal at \'on\'',
            'Passing an IB signal at \'on\' when the telephone provided on the signal post is out of order and the Loco Pilot is, thus unable to contact the station in rear.',
            'On run—',
            'Acknowledgement of Guard\'s signal'
          ]
        }
      ]
    },
    {
      number: 9,
      code: '- - - - - - (Intermittent whistling) long) _______(Continuous Long whistle)',
      indications: [
        {
          category: '',
          items: [
            'Approaching level crossing;',
            'Approaching tunnel or area of restricted visibility or curves or continuous cuttings or site of accident; or when in consequence of fog, storm or any other reason the view of the signal is obstructed;',
            'Recall railway servant protecting train in rear;',
            'Material train ready to leave;',
            'Running through a station;',
            'Approaching a Stop signal at \'on\';',
            'Detained at a Stop signal.'
          ]
        }
      ]
    },
    {
      number: 10,
      code: '–– 0 –– 0',
      indications: [
        {
          category: '',
          items: [
            'Train parting',
            'Train arriving incomplete.'
          ]
        }
      ]
    },
    {
      number: 11,
      code: '0 0 ––',
      indications: [
        {
          category: '',
          items: [
            'Alarm chain pulled.',
            'Insufficient vacuum/air pressure in engine.',
            'Inter-communication apparatus used.'
          ]
        }
      ]
    },
    {
      number: 12,
      code: '–– ––',
      indications: [
        {
          category: '',
          items: [
            'Raise pantograph. To be acknowledged by the other engine.'
          ]
        }
      ]
    },
    {
      number: 13,
      code: '–– 0 ––',
      indications: [
        {
          category: '',
          items: [
            'Lower pantograph. To be acknowledged by the other engine.'
          ]
        }
      ]
    },
    {
      number: 14,
      code: '–– 0 0',
      indications: [
        {
          category: '',
          items: [
            'Signal arm taken \'off\' but light extinguished.',
            'Signal arm improperly/insufficiently taken \'off\'.',
            'Defective signal.'
          ]
        }
      ]
    },
    {
      number: 15,
      code: '–– –– ––',
      indications: [
        {
          category: '',
          items: [
            'Fouling marks not cleared.'
          ]
        }
      ]
    },
    {
      number: 16,
      code: '000000000 000 (frequently)',
      indications: [
        {
          category: '',
          items: [
            'Apprehension of danger.',
            'Danger signal to the Loco Pilot of an approaching train whose path is fouled or obstructed for any reason.',
            'While working on a single line section during total interruption of communications or when single line working is introduced on a double line section.',
            'Moving in wrong direction on a double line or against the signalled direction in the Automatic block signalling territory.'
          ]
        }
      ]
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
      'bg-gradient-to-r from-lime-600 to-lime-700',
      'bg-gradient-to-r from-amber-600 to-amber-700',
      'bg-gradient-to-r from-rose-600 to-rose-700',
      'bg-gradient-to-r from-violet-600 to-violet-700',
      'bg-gradient-to-r from-fuchsia-600 to-fuchsia-700'
    ]
    return colors[(number - 1) % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Whistle Codes
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to engine whistle codes for AOM aspirants
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 mb-8 p-6">
          <div className="space-y-4 text-gray-200">
            <p className="text-lg font-semibold text-blue-300 mb-4 flex items-center justify-center flex-col gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm border border-blue-400 text-white font-mono text-2xl drop-shadow-md tracking-widest">
                GR 4.50
              </span>
              <span className="ml-2">Sounding of engine whistle</span>
            </p>
            <p className="leading-relaxed">
              Except under special instructions, the Loco Pilot shall always sound the whistle of the engine according to the prescribed code of whistle–
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>before putting an engine in motion ;</li>
              <li>when entering a tunnel ; and</li>
              <li>at such other times and places as may be prescribed by special instructions.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Engine whistle code shall be prescribed under special instructions.
            </p>
            <p className="leading-relaxed">
              S.R.4.50.1. The following are the code of engine whistles, which shall be sounded by the Loco Pilots.
            </p>
          </div>
        </div>

        {/* Whistle Codes Grid */}
        <div className="space-y-6">
          {whistleCodes.map((whistleCode) => (
            <div key={whistleCode.number} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Code Header */}
              <div className={`${getCodeColor(whistleCode.number)} text-white px-4 py-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold bg-white/20 px-4 py-2 rounded-lg">
                      {whistleCode.number}
                    </span>
                    <h2 className="text-xl font-bold">
                      Code: <span className="font-mono text-2xl">{whistleCode.code}</span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Indications */}
              <div className="p-4 sm:p-6 space-y-4">
                {whistleCode.indications.map((indication, idx) => (
                  <div key={idx} className="space-y-3">
                    {indication.category && (
                      <p className="text-blue-300 font-semibold text-lg mb-2">
                        {indication.category}
                      </p>
                    )}
                    <div className="space-y-2">
                      {indication.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="group p-3 rounded-lg border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-slate-800 to-slate-700"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                              {String.fromCharCode(97 + itemIdx)}
                            </span>
                            <p className="text-gray-200 leading-relaxed flex-1">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SR Rules Section */}
        <div className="mt-8 space-y-6">
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">SR 4.50.2</h3>
            <p className="text-gray-200 leading-relaxed">
              The signals above are illustrated by &apos;0&apos; for a short whistle and &apos;––&apos; for a long whistle.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">SR 4.50.3</h3>
            <p className="text-gray-200 leading-relaxed">
              Whistle Boards are provided at a distance of 600 metres on the approaches to such manned level crossing gates outside station limits where a clear view of the line from the level crossing gate is not available. Loco Pilots of trains, on noticing whistle boards shall sound their engine whistle intermittently long from the time they approach a whistle board till they pass the relevant Level Crossing.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">SR 4.50.4</h3>
            <p className="text-gray-200 leading-relaxed">
              In the event of failure of whistle/horn of engine while working a train, the Loco Pilot should work the train cautiously to clear the block section and ask for repair or relief.
            </p>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {whistleCodes.length}
            </div>
            <div className="text-gray-300">Total Whistle Codes</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              SR Rules
            </div>
            <div className="text-gray-300">Special Rules</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              Engine
            </div>
            <div className="text-gray-300">Whistle Codes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhistleCodes