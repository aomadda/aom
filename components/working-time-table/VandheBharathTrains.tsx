"use client"
import React from 'react'

const VandheBharathTrains = () => {
  const troubleshootingPoints = [
    'Ensure "Driver Authentication" switch should be in Auto position, for normal operation. When Authorization required, then with valid credentials operate the switch to ON position.',
    'In case, Traction not available due to TSL loop mal-function, then change the \'Traction selection\' switch to Loop2 from Loop1.',
    'In case, Cab is not occupying, change the \'Cab Selector\' switch from LPT to HPT mode',
    'In case of Master Controller faulty, work the Train with redundant Master Controller (Shunting operation).',
    'Emergency Brake applying due to VCD relay mal-function, keep VCD By pass switch in ON position.',
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
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              VANDE BHARAT - Various Loops troubleshooting and isolation procedure
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: BAL Isolation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              1. BAL(Brake Applied Loop) Isolation
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Purpose:</h3>
                <p className="text-gray-200 leading-relaxed">
                  The TCMS(Train Control and Management System)monitors the brake applied status in every coach of the train. Stuck brake is detected, if unwarranted brake is applied when train is either in Motoring or coasting. If stuck brake is detected, the TCMS applies the service brake and brings the train to standstill and is indicated on DDU(Driver Display Unit)
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Consequence of Stuck brake:</h3>
                <p className="text-gray-200 leading-relaxed">
                  Traction will be cutoff, if the train speed is &gt; 10 Kmph, and the train will be stopped.
                </p>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Reason for stuck brake:</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-red-400/20">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-red-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                      1
                    </div>
                    <p className="text-gray-200 leading-relaxed">There may be leakage issue in application valve of any BCU (Brake Control Unit) panel or</p>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-red-400/20">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-red-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                      2
                    </div>
                    <p className="text-gray-200 leading-relaxed">There may be problem in any bogie BC pressure switch or Brake Applied Relay which make BAL energized (even if brake is not applied by crew).</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Isolation procedure:</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-red-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If brake is stuck,</p>
                    <div className="space-y-3">
                      {['Isolate EP brake physically through BIC (Bogie Isolation Cock) and verify stuck brake symbol on DDU', 'After releasing brake, brake applied symbol disappear on DDU, that means the brake was really stuck', 'In this case, BAL isolation shall not be done and train can be moved with isolated bogie brake and with restricted speed.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-red-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-red-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-red-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If there is malfunction of BAL loop,</p>
                    <div className="space-y-3">
                      {['Isolate EP brake physically through BIC and verify stuck brake symbol on DDU', 'After releasing brake, brake applied symbol appear on DDU, that means this is an electrical failure in BAL loop.', 'Operate "BAL ISO" switch on the CRW(Cab Rear Wall) panel, changing it from the "normal" to "isolate" position in the occupied cab. This will make BAL loop De-energized.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-red-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-red-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Implications:</h3>
                <div className="space-y-3">
                  {['After bypassing BAL, the TCMS will no longer detects stuck Brake on any coach. However, Brake indication is available on DDU.', 'At every stop, the TCMS will warn the Loco Pilot that the BAL is in the isolated position and the stuck brake monitoring is not possible.'].map((impl, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-red-400/20">
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-red-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">{impl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Precautions:</h3>
                <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-green-400/20">
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white font-semibold flex items-center justify-center shadow-md">
                    ✓
                  </div>
                  <p className="text-gray-200 leading-relaxed">The driver shall periodically check the Brake status on the DDU to ensure that all Brakes are in the released state during motoring or coasting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: ADCR Bypass */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              2. ADCR Bypass (Analog to Digital Converter Relay)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Purpose:</h3>
                <p className="text-gray-200 leading-relaxed">TCMS monitors the door closure status of train through the ADCR loop. If any door remains open, the ADCR loop will be de-energized, and the TCMS will cut off the traction. In such cases, the Loco Pilot/Guard shall issue a door closure command to close the door again.</p>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Consequence of ADCR not closed:</h3>
                <p className="text-gray-200 leading-relaxed">Traction will not be allowed.</p>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Isolation procedure:</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-blue-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If door is not closing physically even after close command,</p>
                    <div className="space-y-3">
                      {['Close the door manually.', 'Isolate the door through local isolation switch on the door.', 'Check status of the ADCR after closing and isolating the door.', 'If ADCR is energised, no need to do ADCR bypass.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-blue-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-blue-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If there is malfunction of ADCR loop,</p>
                    <div className="space-y-3">
                      {['Even after closing all the doors, ADCR is not energised, that indicates malfunction of ADCR loop.', 'Maintenance person shall bypass ADCR by operating "ADCR BYPASS" switch on the CRW panel, moving it from the "normal" to the "isolate" position in the occupied cab.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-blue-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Implications:</h3>
                <div className="space-y-3">
                  {['After bypassing the ADCR, ADCR loop will be energized.', 'At every stop, the TCMS will remind the Loco Pilot that the ADCR is in an isolated position and monitoring of open doors is not possible.', 'The Loco Pilot must acknowledge this fault. Traction will be allowed after acknowledgment only.', 'If acknowledgment through the DDU is not feasible, the TCMS will flash the "Fault Reset" lamp, and the pilot must acknowledge the fault by pressing the "Fault Reset" button.'].map((impl, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-blue-400/20">
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">{impl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Precautions:</h3>
                <div className="space-y-3">
                  {['The pilot should verify that all doors are closed on DDU before acknowledging fault in normal mode', 'Door must be physically verified, for door closure in RDM mode (Rescue Drive Mode).'].map((prec, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-green-400/20">
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white font-semibold flex items-center justify-center shadow-md">
                        ✓
                      </div>
                      <p className="text-gray-200 leading-relaxed">{prec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: PB Isolation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              3. PB Isolation (Parking Brake)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Purpose:</h3>
                <p className="text-gray-200 leading-relaxed">
                  TCMS monitors the parking Brake application status in every coach of the train. If any parking Brake remains unreleased even after a release command, the TCMS detects a stuck brake. Upon detecting a stuck parking brake, the TCMS applies the service brake. The TCMS identifies the coach with the detected stuck parking brake and same will be displayed on DDU. It is also indicated as &quot;minimum one parking brake applied&quot;.
                </p>
              </div>

              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Consequence of Stuck parking Brake:</h3>
                <p className="text-gray-200 leading-relaxed">Traction will not be allowed.</p>
              </div>

              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Isolation procedure:</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-purple-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">A. If parking Brake is really applied,</p>
                    <div className="space-y-3">
                      {['Physically check for application of parking Brake in respective coach. If brake is applied and not releasing, then parking brake to be released manually.', 'After releasing parking brake, from occupied cab, isolate the parking brake through PB isolation switch.', 'Go to DDU for PB override for respective car and override parking brake of that car.', 'Verify Vmax and do the motoring in normal mode.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-purple-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-purple-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-purple-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">B. If parking Brake is not applied, and still applied status is showing as high,</p>
                    <div className="space-y-3">
                      {['Verify that the Brake is not applied.', 'After verifying the \'released parking brake\', from occupied cab isolate parking brake though PB isolation switch on CRW.', 'Go to DDU for PB override for TC car and override parking brake of that car', 'Verify Vmax and do the motoring in normal mode.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-purple-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-purple-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Implications:</h3>
                <div className="space-y-3">
                  {['After bypassing the PB loop, the TCMS will no longer detect a stuck parking Brake for the particular coach.', 'However, the stuck parking Brake condition in all other coaches will continue to be monitored, provided those coach TCMS units are in the network.', 'At every stop, the TCMS will remind the Loco Pilot that the PB is in an isolated position, and monitoring for stuck parking Brakes is not possible.'].map((impl, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-purple-400/20">
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-400 to-pink-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                        {idx + 1}
                      </div>
                      <p className="text-gray-200 leading-relaxed">{impl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: EBL Bypass */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center ">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              4. EBL Bypass (Emergency Brake Loop)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Purpose:</h3>
                <p className="text-gray-200 leading-relaxed">
                  Each coach in the train set is equipped with an emergency brake. The emergency brake valve in each coach is released by three independent loops, forming a two-out-of-three logic. The EBL bypass serves as an additional loop to bypass the emergency brake only in case of electrical fault. The emergency brake is applied if atleast two loops are triggered, and it is released if atleast two loops are energized. In case of emergency brake application, indication is available on DDU, and also faults are available. For EBL MCB trip also indication is available on DDU.
                </p>
              </div>

              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Consequence of Applied EBL:</h3>
                <p className="text-gray-200 leading-relaxed">Traction will not be allowed.</p>
              </div>

              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Isolation Procedure:</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-orange-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If any particular coach EBL MCB is tripped,</p>
                    <div className="space-y-3">
                      {['Emergency brake will be applied in that particular coach.', 'Go to that particular coach where MCB is tripped and then try to close the MCB.', 'If MCB is ON, No need to do any isolation. Train can be driven in normal mode.', 'If MCB is tripping repeatedly, then release the brake through isolation of BIC as it is done in stuck brake condition.', 'Verify released brake physically.', 'After releasing brake move the train in normal mode.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-orange-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-orange-400 to-red-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-orange-400/20">
                    <p className="text-white font-semibold mb-4 text-center text-lg">If EBL is triggered without actuation,</p>
                    <div className="space-y-3">
                      {['This can happen if EBL input used for actuation of EBL is faulty (or) two loops of EBL faulty. This kind of failures are very rare and comes under critical failure.', 'This lead to emergency brake activation in complete train.', 'In this case, EBL loop shall be bypassed with EBL Isolation switch of CRW panel.', 'After isolation of EBL move the train in RDM mode.'].map((step, idx) => (
                        <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-3 py-2 border border-orange-400/10">
                          <div className="h-7 w-7 rounded-full bg-linear-to-br from-orange-400 to-red-500 text-white font-semibold flex items-center justify-center shadow-md text-sm">
                            {idx + 1}
                          </div>
                          <p className="text-gray-200 leading-relaxed text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Implications:</h3>
                <div className="space-y-3">
                  {['Emergency brake still apply through EB Switch and emergency position of master controller', 'The train speed will be limited to 60 kmph, which is the set limit in RDM mode.'].map((impl, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-green-400/20">
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white font-semibold flex items-center justify-center shadow-md">
                        ✓
                      </div>
                      <p className="text-gray-200 leading-relaxed">{impl}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Precautions:</h3>
                <div className="flex items-center justify-center flex-col gap-2 bg-white/5 rounded-lg px-4 py-3 border border-green-400/20">
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white font-semibold flex items-center justify-center shadow-md">
                    ✓
                  </div>
                  <p className="text-gray-200 leading-relaxed">After energizing the emergency brake via EBL Bypass, the operation of the emergency brake shall be confirmed by placing the MCH handle in the emergency position.</p>
                </div>
              </div>

              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 leading-relaxed">
                  <strong className="text-white">Note:</strong> In case of mal-function with &quot;EMR Brake&quot; switch, it can be by passed by using &quot;EB Sw. Bypass&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: EOL Bypass */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              5. EOL Bypass (Emergency Off Loop)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4">Purpose:</h3>
                <p className="text-gray-200 leading-relaxed">
                  The EOL Bypass is designed to lower the pantograph and open the Vacuum Circuit Breaker (VCB) of all Trailer Coaches (TC) in case of emergency, which can be done using the Emergency Off button located on the Driver&apos;s Desk. Each TC coach is equipped with a relay that will open the VCB and lower the pantograph if the Emergency Off button is pressed. This relay is powered by three separate loops, forming a two-out-of-three logic. In case of &apos;Emergency Off&apos; button fail, all pantographs will be lowered, and VCBs will be opened. To recover from this situation, the Loco Pilot must perform an EOL Bypass.
                </p>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Consequence of Applied EOL:</h3>
                <p className="text-gray-200 leading-relaxed">Pantograph will not be UP and VCB can&apos;t be closed.</p>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Isolation procedure:</h3>
                <p className="text-gray-200 leading-relaxed">The Loco Pilot shall operate the &quot;EOL Bypass&quot; switch on the CRW panel, to change it from &quot;normal&quot; to the &quot;isolate&quot; position in the occupied cab.</p>
              </div>

              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Implications:</h3>
                <p className="text-gray-200 leading-relaxed">After bypassing the EOL loop, the Pantograph can be lowered and UP through normal switch but in case of emergency, pantograph can&apos;t be lowered and VCB can&apos;t be switched OFF with &apos;Emergency OFF&apos; push button.</p>
              </div>
            </div>
          </div>

          {/* Troubleshooting Points */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center flex-col text-center gap-3 mb-8">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              <h2 className="lg:text-3xl text-2xl font-bold text-white text-center">
                Troubleshooting points
              </h2>
            </div>
            
            <div className="space-y-4">
              {troubleshootingPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10 hover:border-white/25 transition-all"
                >
                  <div className="mt-1 h-9 w-9 rounded-full bg-linear-to-br from-yellow-400 via-amber-500 to-orange-500 text-white font-semibold flex items-center justify-center shadow-md">
                    {String.fromCharCode(97 + index)})
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leading dimensions of Vande Bharat Train Set */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Leading dimensions of Vande Bharat Train Set (8/12/16 Car formation)
            </h2>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                {`Sl.
no.
Description Code
Length
over
Buffers
(mm)
Length
Over Body
(mm)
Overall
Width
(mm)
Height of
floor from
RL (mm)
Tare
Weight
(T)
Carrying
Capacity
(T)
Bogie
Centres
(mm)
Wheel
Base
(mm)
Max.
Axle
Load
(T)
Accommodation
(Seating/Sleeping)
1
DRIVING
TRAILER CAR
DTC 24000 23100 3240 1320 48.615 4.327 14900 2700 17
Seat– 44
Loco Pilot – 02
Technical Crew – 03
Pantry Crew - 02
2 TRAILER CAR TC 24000 23100 3240 1320 54.044 6.48 14900 2700 17 Seat– 78
3
NON DRIVING
TRAILER COACH
(NDTC/
EC)
24000 23100 3240 1320 48.397 4.416 14900 2700 17 Passenger – 52
4
NON DRIVING
TRAILER COACH
(NDTC/
EC2)
24000 23100 3240 1320 48.397 4.416 14900 2700 17
Passenger – 52
Pantry Crew - 02
5 MOTOR COACH MC 24000 23100 3240 1320 54.703 6.48 14900 2700 17
Passenger – 78
Pantry Crew - 02
6 MOTOR COACH MC2 24000 23100 3240 1320 54.703 6.48 14900 2700 17
Passenger – 78
Pantry Crew - 02`}
              </p>
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

export default VandheBharathTrains