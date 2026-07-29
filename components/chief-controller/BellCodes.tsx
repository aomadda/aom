'use client'

import React from 'react'

const BellCodes = () => {
  const bellCodes = [
    {
      number: 1,
      indication: 'Call attention or attend telephone',
      code: '0',
      signalled: 'One stroke or beat',
      acknowledged: 'One stroke or beat'
    },
    {
      number: 2,
      indication: 'Is line clear or line clear enquiry',
      code: '00',
      signalled: 'Two',
      acknowledged: 'Two'
    },
    {
      number: 3,
      indication: 'Train entering block section',
      code: '000',
      signalled: 'Three',
      acknowledged: 'Three'
    },
    {
      number: 4,
      indication: [
        '(A) Train out of block section',
        '(B) Obstruction removed'
      ],
      code: '0000',
      signalled: 'Four',
      acknowledged: 'Four'
    },
    {
      number: 5,
      indication: [
        '(A) Cancel last signal',
        '(B) Signal given in error'
      ],
      code: '00000',
      signalled: 'Five',
      acknowledged: 'Five'
    },
    {
      number: 6,
      indication: [
        '(A) Obstruction danger signal (general)',
        '(B) Stop and examine train',
        '(C) Train passed without tail lamp or tail board',
        '(D) Train divided',
        '(E) Vehicles running away in wrong direction on double line or into the block section on single line',
        '(F) Vehicles running away in right direction on double line'
      ],
      code: [
        '000000',
        '000000 – 0',
        '000000 – 00',
        '000000 – 000',
        '000000 – 0000',
        '000000 – 00000'
      ],
      signalled: [
        'Six',
        'Six pause one',
        'Six pause two',
        'Six pause three',
        'Six pause four',
        'Six pause five'
      ],
      acknowledged: [
        'Six',
        'Six pause one',
        'Six pause two',
        'Six pause three',
        'Six pause four',
        'Six pause five'
      ]
    },
    {
      number: 7,
      indication: 'Testing',
      code: '0000000000000000',
      signalled: 'Sixteen',
      acknowledged: 'Sixteen'
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
      'bg-gradient-to-r from-purple-600 to-purple-700'
    ]
    return colors[(number - 1) % colors.length]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Bell Codes
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to bell codes for train signalling for AOM aspirants
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 mb-8 p-6">
          <div className="space-y-4 text-gray-200">
            <p className="text-lg font-semibold text-blue-300 mb-4 flex items-center justify-center flex-col gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm border border-blue-400 text-white font-mono text-2xl drop-shadow-md tracking-widest">
                14.05
              </span>
              <span className="ml-2">Bell code</span>
            </p>
            <p className="leading-relaxed">
              For the signalling of trains, the prescribed code of bell signals as detailed below, shall be used, and a copy thereof shall be exhibited in each block station near the place of operation of the block working equipment ––
            </p>
          </div>
        </div>

        {/* Bell Codes Grid */}
        <div className="space-y-6">
          {bellCodes.map((bellCode) => (
            <div key={bellCode.number} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Code Header */}
              <div className={`${getCodeColor(bellCode.number)} text-white px-4 py-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold bg-white/20 px-4 py-2 rounded-lg">
                      {bellCode.number}
                    </span>
                    <h2 className="text-xl font-bold">
                      Code: <span className="font-mono text-2xl">{Array.isArray(bellCode.code) ? bellCode.code[0] : bellCode.code}</span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Indication */}
                <div className="space-y-3">
                  <h3 className="text-blue-300 font-semibold text-lg mb-2">Indication</h3>
                  {Array.isArray(bellCode.indication) ? (
                    <div className="space-y-2">
                      {bellCode.indication.map((ind, idx) => (
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
                        {bellCode.indication}
                      </p>
                    </div>
                  )}
                </div>

                {/* Code Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Code */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <h4 className="text-blue-300 font-semibold mb-2">Code</h4>
                    {Array.isArray(bellCode.code) ? (
                      <div className="space-y-2">
                        {bellCode.code.map((c, idx) => (
                          <p key={idx} className="text-gray-200 font-mono text-sm">
                            {c}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-200 font-mono text-lg">
                        {bellCode.code}
                      </p>
                    )}
                  </div>

                  {/* How Signalled */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <h4 className="text-green-300 font-semibold mb-2">How Signalled</h4>
                    {Array.isArray(bellCode.signalled) ? (
                      <div className="space-y-2">
                        {bellCode.signalled.map((s, idx) => (
                          <p key={idx} className="text-gray-200 text-sm">
                            {s}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-200 text-lg">
                        {bellCode.signalled}
                      </p>
                    )}
                  </div>

                  {/* How Acknowledged */}
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <h4 className="text-purple-300 font-semibold mb-2">How Acknowledged</h4>
                    {Array.isArray(bellCode.acknowledged) ? (
                      <div className="space-y-2">
                        {bellCode.acknowledged.map((a, idx) => (
                          <p key={idx} className="text-gray-200 text-sm">
                            {a}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-200 text-lg">
                        {bellCode.acknowledged}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-8 space-y-6">
          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">Note:</h3>
            <div className="space-y-4 text-gray-200">
              <p className="leading-relaxed">
                (1) &apos;0&apos; indicates a stroke or a beat and &apos;–&apos; indicates a pause
              </p>
              <p className="leading-relaxed">
                (2) Exchange of bell codes under reference numbers 3 and 4 are not required in a section provided with block proving axle counters or track circuit having complete track circuiting of station yard excluding non-running lines on either end.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {bellCodes.length}
            </div>
            <div className="text-gray-300">Total Bell Codes</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              Block
            </div>
            <div className="text-gray-300">Signalling</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              Train
            </div>
            <div className="text-gray-300">Communication</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BellCodes