"use client"
import React from 'react'

const TrainsStabling = () => {
  const sections = [
    {
      title: 'Stabling of loco in stations/yards. (para no. 30614 of ACTM Vol III)',
      steps: [
        'Ensure the loco is stopped clear of fouling mark.',
        'Apply (SA9) loco independent brakes and ensure 3.5 kgs/cm2 in the BC gauge.',
        'Physically check the brake blocks are binding with the tread portion of the wheels.',
        'Apply parking brakes if available.',
        'Apply hand brake and check the brake cylinder piston in applied position and also physically ensure tight contact of brake block with wheel tread.',
        'Apply SA9 and hand brake in the double headed trailing loco also if any.',
        'Now release SA9 and wait for 1-2 minutes and ensure the loco(s) is/are are not rolling. (Keep the hand brake in applied condition and check the connected brake cylinder piston is in applied condition and brake block tightly gripping the wheel tread).',
        'Re-apply SA9 and place wooden wedges under the wheels of the locos against the fallin gradient.',
        'Loco is not to be made dead / left unmanned when hand brake / parking brake is not working. TLC / PRC shall make arrangements for attending the loco or move to the nearest shed.',
        'An entry is to be made regarding application of hand brake and placement of wedges in the LPs rough journal, loco log book and in the stabling register available with the Dy.SS.',
      ],
    },
    {
      title: 'Stabling of train along with loco in stations / yards. (SR 5.23)',
      steps: [
        'Ensure the vehicles / load is inside the fouling mark.',
        'Apply train brakes through A9 to emergency.',
        'In addition to securing of the locomotive, the vehicles / load / train is to be chained and padlocked using at least two chains, one at either end.',
        'At least four wooden wedges / iron skids be used, two each below the outermost pair of wheels at either end of the formation.',
        'Hand brakes of at least 6 wagons form either end must be fully tightened. If hand brakes of any of the first 6 wagons at each end cannot be applied, hand brakes of subsequent wagons should be applied till 6 wagons in total are achieved. In case of coaching stock, hand brakes of SLR(s) must be applied.',
        'Additional precautions to be taken while stabling load / train at a station with gradient steeper than 1in 400 are mentioned in the SWR of respective station.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Stabling of trains to avoid roll-down
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed text-lg">
                Stabling of trains to avoid roll-down
              </p>

              <div className="space-y-8">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="bg-white/5 border border-white/15 rounded-xl p-4 shadow-inner hover:border-white/25 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      
                      <h2 className="text-xl font-semibold text-white leading-snug text-center">{section.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      {section.steps.map((step, index) => (
                        <div
                          key={step}
                          className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                        >
                          <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md">
                            {index + 1}
                          </div>
                          <p className="text-gray-100 text-sm leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default TrainsStabling