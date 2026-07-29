"use client"
import React from 'react'

const BWMPartBPage43: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Operation of Slip Siding and Catch Siding
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold text-indigo-300 mb-4">While Sending/Receiving a Train</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-6">3.6. Operation of Slip siding and catch siding while sending/receiving a train:</h3>
                    
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-6">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                        Slip siding and catch siding control keys are locked in EKT controlled by Block Panel. To operate the slip/catch siding points the key locked in the EKT controlled by Block Panel is removed and inserted in another EKT controlling the slip/catch siding points.
                      </p>
                      <p className="text-blue-200 lg:text-base text-sm leading-relaxed italic">
                        (Station &apos;X&apos; is assumed to be provided with slip siding protected by Last Stop Signal and station &apos;Y&apos; with a catch siding protected by First Stop Signal.)
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Step</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Sending Station &apos;X&apos;</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Receiving Station &apos;Y&apos;</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300" rowSpan={2}>Initial</td>
                                <td className="border border-white/20 p-3">Block Panel displays <span className="text-green-300 font-semibold">&apos;TGT&apos;</span> indication.</td>
                                <td className="border border-white/20 p-3">Block Panel displays <span className="text-green-300 font-semibold">&apos;TCF&apos;</span> indication.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3" colSpan={2}>
                                  <span className="font-semibold text-yellow-300">1.</span> Insert SM&apos;s key and turn.
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">2.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Take out the Slip Siding key from the block panel EKT by pressing the <span className="text-blue-300 font-semibold">&apos;SCK&apos;</span> push button. <span className="text-red-400 font-semibold">Red</span> indication appears on the block panel. Key &apos;in&apos; indication disappears.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> Insert the slip siding key in the panel EKT controlling Slip siding and turn.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> Observe <span className="text-green-300 font-semibold">&apos;free&apos;</span> indication on slip siding point knob on the panel.</p>
                                    <p><span className="font-semibold text-yellow-300">d)</span> Set the Slip Siding point.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">3.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Take off the Last Stop Signal.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> Train enters block section.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> Last Stop Signal returns to <span className="text-red-400 font-semibold">&apos;ON&apos;</span> automatically.</p>
                                    <p><span className="font-semibold text-yellow-300">d)</span> <span className="text-red-400 font-semibold">&apos;Section occupied&apos;</span> indicator is lit to <span className="text-red-400 font-semibold">RED</span>; <span className="text-green-300 font-semibold">&apos;Section clear&apos;</span> indicator <span className="text-green-300 font-semibold">(GREEN)</span> is extinguished.</p>
                                    <p><span className="font-semibold text-yellow-300">e)</span> Section buzzer starts ringing and <span className="text-red-400 font-semibold">TOL</span> indication <span className="text-red-400 font-semibold">(RED)</span> is lit.</p>
                                    <p><span className="font-semibold text-yellow-300">f)</span> Slip siding warning buzzer starts ringing.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">4.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Section buzzer starts ringing and <span className="text-red-400 font-semibold">TOL</span> indication <span className="text-red-400 font-semibold">(RED)</span> is lit. <span className="text-red-400 font-semibold">&apos;Section Occupied&apos;</span> indicator turns to <span className="text-red-400 font-semibold">Red</span></td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">5.</td>
                                <td className="border border-white/20 p-3">Acknowledge the section buzzer by pressing <span className="text-blue-300 font-semibold">ACK</span> button. Turn the LSS switch to normal (if any).</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">6.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge the buzzer by pressing <span className="text-blue-300 font-semibold">ACK</span> button.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">7.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Set slip siding point to normal. Slip siding warning buzzer stops.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> Extract slip Siding Key from panel EKT and restore back to Block Panel Slip siding control EKT. Key IN indication <span className="text-yellow-300 font-semibold">yellow</span> appears.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">8.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> After train coming to a halt at First Stop Signal, take out the Catch siding key from block panel by pressing the <span className="text-blue-300 font-semibold">&apos;SCK&apos;</span> push button. Key &apos;out&apos; indication <span className="text-red-400 font-semibold">(RED)</span> appears on the block panel; Key &apos;IN&apos; indication <span className="text-yellow-300 font-semibold">(YELLOW)</span> disappears.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> Insert the Catch siding key in the panel EKT and turn. Observe <span className="text-green-300 font-semibold">&apos;free&apos;</span> indication near point knob in case of panel interlocking.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> Set the Catch siding point.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">9.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Take off the Home Signal.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> When train passes the home signal, the Home signal returns to <span className="text-red-400 font-semibold">&apos;ON&apos;</span> position.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> The train clears the block section.</p>
                                    <p><span className="font-semibold text-yellow-300">d)</span> Section buzzer starts ringing. Catch siding warning buzzer</p>
                                    <p><span className="font-semibold text-yellow-300">e)</span> Ensure that train has arrived complete by the lighting of <span className="text-green-300 font-semibold">&apos;Section clear&apos;</span> indication <span className="text-green-300 font-semibold">(GREEN)</span> and extinguishing of <span className="text-red-400 font-semibold">&apos;Section occupied&apos; (RED)</span> indication on the block panel.</p>
                                    <p><span className="font-semibold text-yellow-300">f)</span> <span className="text-green-300 font-semibold">&apos;Section clear&apos;</span> indication <span className="text-green-300 font-semibold">(GREEN)</span> is lit: <span className="text-red-400 font-semibold">&apos;Section occupied&apos;</span> indication <span className="text-red-400 font-semibold">(RED)</span> disappears.</p>
                                    <p><span className="font-semibold text-yellow-300">g)</span> acknowledge the section buzzer by pressing <span className="text-blue-300 font-semibold">ACK</span> button</p>
                                    <p><span className="font-semibold text-yellow-300">h)</span> Replace all controls pertaining to reception of train to normal. Ensure <span className="text-yellow-300 font-semibold">SNK</span> indicator is lit.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">10.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Section buzzer starts ringing.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> <span className="text-green-300 font-semibold">&apos;Section clear&apos;</span> indication <span className="text-green-300 font-semibold">(GREEN)</span> is lit; <span className="text-red-400 font-semibold">&apos;Section occupied&apos;</span> indication <span className="text-red-400 font-semibold">(RED)</span> disappears.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> Acknowledge the buzzer by pressing <span className="text-blue-300 font-semibold">ACK</span> button.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">11.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-2">
                                    <p><span className="font-semibold text-yellow-300">a)</span> Set Catch siding points to normal. Catch siding warning buzzer stops.</p>
                                    <p><span className="font-semibold text-yellow-300">b)</span> Extract Catch Siding key from panel EKT and restore back to block panel EKT.</p>
                                    <p><span className="font-semibold text-yellow-300">c)</span> Check, siding key in <span className="text-yellow-300 font-semibold">(YELLOW)</span> appears on block panel.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">12.</td>
                                <td className="border border-white/20 p-3"><span className="text-green-300 font-semibold">&apos;TGT&apos;</span> indication disappears. <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> indication appears.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">13.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3"><span className="text-green-300 font-semibold">&apos;TCF&apos;</span> indication disappears. <span className="text-yellow-300 font-semibold">&apos;Line closed&apos;</span> indication appears.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-6">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-bold text-yellow-300">Note:</span> Though home signal may go automatically to &apos;ON&apos; by passage of the train, home signal switch (if any) shall not be put back to normal, unless the whole of the train has arrived inside the LVT. Failure to adhere to this will result in block failure and the train arrival buzzer will not sound alarm under such circumstances.
                        </p>
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

export default BWMPartBPage43