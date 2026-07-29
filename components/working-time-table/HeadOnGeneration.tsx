"use client"
import React from 'react'

const HeadOnGeneration = () => {
  const operatingProcedureSteps = [
    'At originating station after attachment of locomotive to the train the HOG power & Control couplers between train & loco shall be coupled & locked by power car manning staff. The HOG couplers shall be coupled/uncoupled, only after ensuring that both pantos are in lowered condition. Permission shall be obtained from Shunter/LP before coupling/uncoupling.',
    'After coupling LP shall be informed by power car manning staff in writing that "HOG couplers have been fixed and locked and that the HOG can be switched ON"',
    'Only after ensuring that HOG couplers are connected & locked and on getting written confirmation from power car manning staff, Loco Pilot/Shunter shall raise the panto, close VCB and switch ON BLHO switch (spring loaded). LSHO lamp shall glow.',
    'Till the time the loco is connected and HOG is switched "ON", power car manning staff should ensure the power supply to coaches for pre-cooling etc is available through DG set.',
    'On availability of HOTEL load supply and after ensuring that the supply is stable, changeover to HOTEL load shall be affected by Power car manning staff.',
    'Power car manning staff shall continuously monitor the power supply from loco and ensure proper voltage is displayed in each phase in the control panel of power car.',
    'The power car manning staff to ensure availability of power supply to rake either from HOG or Generator. In case of any trouble in coupling or difficulty in extending HOG supply from loco, the train shall not be detained. The train shall be worked with power car.',
    'In case of loco/OHE failure, Loco Pilot shall inform to Guard, Guard in turn shall inform power car manning staff to switch over the supply from HOG to power car. Loco Pilot shall inform TLC within 05 minutes of such failure and TLC in turn will inform Electrical Control. Electric controller shall verify availability of power supply to the coaches.',
    'At destination or en-route station before disconnection of the HOG couplers, Loco Pilot shall switch OFF the BLHO switch and ensure that the LSHO lamp is not glowing. Loco Pilots shall also ensure that both panto are lowered.',
    'Power car manning staff shall disconnect the HOG couplers from locomotive, before detachment of loco at destination/en-route. Before disconnecting of HOG couplers power car manning staff shall take permission from Shunter/LP and ensure that both panto of the loco are lowered.',
    'Loco Pilot/Shunter shall ensure that all three HOG couplers are disconnected, before detaching the locomotive.',
    'Maintenance of power couplers and replacement in case of necessity and availability of adequate spare couplers should be ensured by respective SSE of coaching depot or SSE of ELS/Trip shed.',
    'Utilization of Hotel load (HOG) facility in nominated trains shall be ensured by both SSE/Coaching and SSE/Loco shed/trip shed by ensuring smooth functioning of associated circuit and components.',
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
              JPO - For Running Head on Generation (HOG) trains
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  All trains running on EOG are provided with power car for feeding lights, fan, air-conditioning and other auxiliary loads. As such power cars are adequate to cater for entire load of the rakes. 750 Volts power from HOG facility availability in 3-phase locomotives is being used in select trains for feeding light/fan/AC and other auxiliary loads of coach as an alternative. This facility will progressively be extended to more number of trains as HOG loco population increases.
                </p>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  While providing power from HOG facility of loco, the DG sets in power car remain on standby and can be taken on load in the event of HOG power from loco not being available for any reason.
                </p>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
    In order to streamline use of power from HOG following procedure shall be adopted.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Operating Procedure */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                Operating Procedure
              </h2>
            </div>

            <div className="space-y-4">
              {operatingProcedureSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-lg px-4 py-3 border border-green-400/30 hover:border-green-400/50 transition-all backdrop-blur-lg"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-green-400 via-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Monitoring and Reporting */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Monitoring and Reporting
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 leading-relaxed mb-4">
                  For monitoring purpose details in enclosed format be recorded by SSE/Coaching at the end of each return trip of rake of each nominated train. These details to be monitored by respective divisional officers for effective utilization.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Weekly report on utilization of HOG (i.e. % of KWH generated through HOG and % of KWH generated through Dsl) for each nominated trains be sent to CESE and CELE on every Friday.
                </p>
              </div>

              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Recording Format:</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Depot:</span>
                      <div className="mt-1">Name of the depot</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Date:</span>
                      <div className="mt-1">Recording date</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Train No.:</span>
                      <div className="mt-1">Train number</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Running days:</span>
                      <div className="mt-1">Number of days</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Run time (hrs):</span>
                      <div className="mt-1">Total running hours</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Use on HOG:</span>
                      <div className="mt-1">HOG usage details</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Use on Dsl:</span>
                      <div className="mt-1">Diesel usage details</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Diesel consumption liters:</span>
                      <div className="mt-1">Fuel consumed</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Reason for Dsl:</span>
                      <div className="mt-1">Reason for diesel use</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Hrs running KWH generated:</span>
                      <div className="mt-1">HOG power generation</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <span className="font-semibold text-purple-300">Hrs KWH generated:</span>
                      <div className="mt-1">Total power generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Important Notes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Important Notes
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <p className="text-gray-200 leading-relaxed">
                  The responsibility of supplying power to train entirely rests on power car staff deputed there with. Supply of HOG power of loco is only an alternative to save Diesel fuel consumption. In case of unforeseen tripping of loco/detachment of HOG powered loco in en-route, the power car staff shall immediately switch over from HOG to Diesel engine and ensure uninterrupted supply to all coaches.
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <p className="text-gray-200 leading-relaxed">
                  Any punctuality loss may be booked on &quot;Electrical Account&quot;.
                </p>
              </div>
            </div>

            {/* Leading dimensions of PUSH–PULL Train */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
                <span className="bg-linear-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                  Leading dimensions of PUSH–PULL Train
                </h2>
                <p className="text-gray-300 text-sm lg:text-base">
                  (Non AC LHB train with a rake comprising of maximum 22 (HOG/EOG) variant coaches with single WAP5/WAP7 Locomotive at front of rake and same Locomotive at rear of rake)
                </p>
              </div>

              <div className="space-y-6">
                {/* Coach 1 */}
                <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 rounded-lg px-4 py-4 border border-yellow-400/30 hover:border-yellow-400/50 transition-all backdrop-blur-lg">
                  <div className="flex items-center justify-center flex-col gap-3 mb-4">
                    <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-yellow-400 via-orange-500 to-amber-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                      1
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">LHB Non-AC Second class sleeper coach (Push Pull rake)</h3>
                    <p className="text-yellow-200 font-mono text-sm">Code: LWSCNPP</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Length over Buffers</p>
                      <p className="text-white font-semibold">24000 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Length Over Body</p>
                      <p className="text-white font-semibold">23540 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Overall Width</p>
                      <p className="text-white font-semibold">3240 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Height from RL</p>
                      <p className="text-white font-semibold">1320 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Tare Weight</p>
                      <p className="text-white font-semibold">44.0 T</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Bogie Centres</p>
                      <p className="text-white font-semibold">14900 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Wheel Base</p>
                      <p className="text-white font-semibold">2560 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20">
                      <p className="text-yellow-300 text-xs mb-1">Max. Axle Load</p>
                      <p className="text-white font-semibold">16.25 T</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-yellow-400/20 col-span-2">
                      <p className="text-yellow-300 text-xs mb-1">Accommodation</p>
                      <p className="text-white font-semibold">80 to seat/sleep</p>
                    </div>
                  </div>
                </div>

                {/* Coach 2 */}
                <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg px-4 py-4 border border-orange-400/30 hover:border-orange-400/50 transition-all backdrop-blur-lg">
                  <div className="flex items-center justify-center flex-col gap-3 mb-4">
                    <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-orange-400 via-red-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                      2
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">LHB Non-AC Second class GS coach (Push Pull rake)</h3>
                    <p className="text-orange-200 font-mono text-sm">Code: LWSPP</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Length over Buffers</p>
                      <p className="text-white font-semibold">24000 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Length Over Body</p>
                      <p className="text-white font-semibold">23540 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Overall Width</p>
                      <p className="text-white font-semibold">3240 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Height from RL</p>
                      <p className="text-white font-semibold">1320 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Tare Weight</p>
                      <p className="text-white font-semibold">43.4 T</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Bogie Centres</p>
                      <p className="text-white font-semibold">14900 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Wheel Base</p>
                      <p className="text-white font-semibold">2560 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20">
                      <p className="text-orange-300 text-xs mb-1">Max. Axle Load</p>
                      <p className="text-white font-semibold">16.25 T</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-orange-400/20 col-span-2">
                      <p className="text-orange-300 text-xs mb-1">Accommodation</p>
                      <p className="text-white font-semibold">100 to seat</p>
                    </div>
                  </div>
                </div>

                {/* Coach 3 */}
                <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 rounded-lg px-4 py-4 border border-red-400/30 hover:border-red-400/50 transition-all backdrop-blur-lg">
                  <div className="flex items-center justify-center flex-col gap-3 mb-4">
                    <div className="mt-1 h-10 w-10 rounded-full bg-linear-to-br from-red-400 via-pink-500 to-rose-500 text-white font-bold flex items-center justify-center shadow-md text-lg">
                      3
                    </div>
                    <h3 className="text-white font-semibold text-lg text-center">LHB Non-AC Second class cum luggage & Brake van with compartment for Divyangjan passengers (Push Pull rake)</h3>
                    <p className="text-red-200 font-mono text-sm">Code: LSLRDPP</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Length over Buffers</p>
                      <p className="text-white font-semibold">24000 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Length Over Body</p>
                      <p className="text-white font-semibold">23540 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Overall Width</p>
                      <p className="text-white font-semibold">3240 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Height from RL</p>
                      <p className="text-white font-semibold">1320 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Tare Weight</p>
                      <p className="text-white font-semibold">---</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Bogie Centres</p>
                      <p className="text-white font-semibold">14900 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Wheel Base</p>
                      <p className="text-white font-semibold">2560 mm</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20">
                      <p className="text-red-300 text-xs mb-1">Max. Axle Load</p>
                      <p className="text-white font-semibold">16.25 T</p>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3 border border-red-400/20 col-span-2 lg:col-span-5">
                      <p className="text-red-300 text-xs mb-2">Accommodation</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">• Other passengers to seat - 31</p>
                        <p className="text-white">• Divyangjan passengers/attendant to seat – 6</p>
                        <p className="text-white">• Divyangjan passengers/attendant to sleep – 2+2</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default HeadOnGeneration