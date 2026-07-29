"use client"
import React from 'react'

const PowerInterception = () => {
  const beforeDetachingItems = [
    'Outdoor Dy.SS/YM/Shunting Master/Guard shall supervise the entire activity related to power interception/loco reversal of passenger carrying trains.',
    'On arrival of the train, front SLR Guard compartment door will be opened by the C & W Staff.',
    'Shunting Staff of the station shall apply the hand brake of the front SLR before the LP applied A-9 and also ensure placing two iron skids/wedges under the wheels of the last vehicle before detaching the loco.',
    'Incoming Guard of the train is responsible to apply hand brakes in the rear SLR Shunting staff of the station shall place two iron skids/wedges under the wheels of the last vehicle before authorizing the loco for detachment.',
    'Outdoor Dy.SS/YM/Shunting Master/Guard who is supervising shunting operations (after confirming from the Shunting Staff in front and Guard in rear regarding application of hand brakes in SLRs) shall advise the LP to apply formation brakes i.e. A-9.',
  ]

  const detachingItems = [
    'Shunting Staff shall close both FP & BP cut-off-angle cocks and uncouple the BP& FP air hoses between loco and formation.',
    'BP cut-off angle cock of the formation shall be opened by the Shunting Staff and rain out the PF pressure so that formation brakes are applied. Secure both the BP & FP air hoses in their hangers and also ensure closing of COC of BP & FP.',
    'Shunting Staff shall \'open\' the screw/CBC coupling and allow the loco to proceed forward.',
  ]

  const attachingBulletPoints = [
    'Shunting Staff shall tighten the screw/locking of CBC.',
    'FP& BP air hoses to be coupled by C& W Staff.',
    'FP COC of the formation to be opened by the C & W Staff.',
    'FP COC of the loco to be opened by the C & W Staff.',
    'After ensuring 6 Kg/cm2 in FP in engine by the LP and 5.8 kg/cm2 in the rear SLR Guard compartment by the Guard, BP COC of the formation to be opened by the C & W Staff.',
    'BP COC of the engine to be opened by the C& W Staff.',
    'Ensure 5 kg/cm2 in engine by the LP and 4.8 kg/cm2 in the rear SLR by Guard and C & W Staff.',
    'Iron skids which are placed for securing the formation is removed by the Shunting Staff on either end of the formation.',
  ]

  const attachingOtherItems = [
    'Releasing of front SLR Guard compartment hand brake should be done by the Shunting Staff and rear SLR hand brake by the Guard.',
    'Shunting Supervisor (YM, SM & Guard)/ Outdoor Dy.SS should inform the C& W Staff to release the formation. The formation releasing activity is the responsibility of C & W Staff which may be coordinated by the Operating Staff. However, C&W shall ensure that releasing the formation should take place only after attaching the loco to the formation.',
    'In case of wayside stations where C & W Staff shall be carried out by the GLP and Pointsman.',
    'Proper communication should be maintained between Operating and C & W staff.',
    'On receipt of confirmation from C & W Staff about releasing of the formation, Guard and LP should conduct air-continuity test as per the procedure in vogue.',
    'After carriage watering and removal of water pipes, C & W Staff shall also ensure that the front SLR Guard compartment door is locked and then endorse on the face of BPC.',
    'Entire activity reiterated above needs to be executed within the time allotted.',
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
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              JPO for power interception/loco reversal of Passenger carrying trains
            </h1>
            <p className="text-gray-300 text-lg mb-6">dated 23.9.2016</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1.0: Before detaching the loco */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                1.0 Before detaching the loco
              </h2>
            </div>
            
            <div className="space-y-4">
              {beforeDetachingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md">
                    {['a', 'b', 'c', 'd', 'e'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2.0: Detaching the loco */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                2.0 Detaching the loco
              </h2>
            </div>
            
            <div className="space-y-4">
              {detachingItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-lg px-4 py-3 border border-blue-400/30 hover:border-blue-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-blue-400 via-cyan-500 to-sky-500 text-white font-bold flex items-center justify-center shadow-md">
                    {['a', 'b', 'c'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3.0: Attaching loco onto the formation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                3.0 Attaching loco onto the formation
              </h2>
            </div>
            
            <div className="space-y-4">
              {/* Item a */}
              <div className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg">
                <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md">
                  a
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Shunting Staff should ensure that loco is stopped 20m before the formation and proceed at walking speed to couple with the formation.
                </p>
              </div>

              {/* Item b with bullet points */}
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-4 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg">
                <div className="flex items-center justify-center flex-col gap-3 mb-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md">
                    b
                  </div>
                  <p className="text-white font-semibold">After attaching the loco to the formation, following shall be ensured;</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {attachingBulletPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-purple-400/20"
                    >
                      <div className="mt-1 h-6 w-6 rounded-full bg-linear-to-br from-purple-300 via-pink-400 to-fuchsia-400 text-white text-xs font-bold flex items-center justify-center shadow-sm shrink-0">
                        •
                      </div>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items c through i */}
              {attachingOtherItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg px-4 py-3 border border-purple-400/30 hover:border-purple-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-purple-400 via-pink-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md">
                    {['c', 'd', 'e', 'f', 'g', 'h', 'i'][index]}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
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

export default PowerInterception