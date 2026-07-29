"use client"
import React from 'react'

const BWMPartBPage34: React.FC = () => {
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
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - III
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">SIGNALLING OF A TRAIN OVER THE BLOCK SECTION</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-6">3.4. Operation of Slip siding and catch sidings while despatching / receiving a train in Kyosan / Podanur push button type and Diodo handle type token less block instruments.</h3>
                    
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-6">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        (Station &apos;X&apos; is assumed to be provided with slip siding protected by Last Stop Signal Station &apos;Y&apos; with a catch siding protected by First Stop Signal.)
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">Initial Conditions:</h4>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Station</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Block Instrument Display</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">Sending Station &apos;X&apos;</td>
                                <td className="border border-white/20 p-3">Block instrument displays TGT indication.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">Receiving Station &apos;Y&apos;</td>
                                <td className="border border-white/20 p-3">Block Instrument displays indication.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">Operation Procedure:</h4>
                        
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
                                <td className="border border-white/20 p-3 font-bold text-blue-300">1.</td>
                                <td className="border border-white/20 p-3">Insert SM&apos;s key and turn.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">2.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Take out the Slip Siding key by pressing the &apos;SCK&apos; push button</p>
                                    <p>b) Transmit the slip siding key to the siding point either electrically or manually.</p>
                                    <p>c) Slip siding point is set.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">3.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Take &apos;OFF&apos; the Last stop signal.</p>
                                    <p>b) Train enters block section.</p>
                                    <p>c) Last Stop Signal returns to &apos;ON&apos; automatically.</p>
                                    <p>d) &apos;Train On Line&quot; indication appears automatically.</p>
                                    <p>Last Stop Signal lever and SMs control slide / knob is returned to normal position including restoring the slip siding point / key to normal.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">4.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">TOL indication appears automatically and audible Warning sounds.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">5.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Insert SMs key and turn.</p>
                                    <p>b) Acknowledge audible warning by pressing the Bell push button.</p>
                                    <p>c) Audible warning stops</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">6.</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; signal, attend telephone after acknowledgement is received, give departure time.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">7.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge, attend telephone and note down the departure time.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">8.</td>
                                <td className="border border-white/20 p-3">Give &apos;Train entering block section&apos; signal</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">9.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge &apos;Train entering block section&apos; signal.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">10.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Take out Catch siding key and transmit the key either electrically or manually to the siding point.</p>
                                    <p>b) Train comes to a stop at the First Stop Signal.</p>
                                    <p>c) Set Catch siding points.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">11.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Take &apos;OFF&apos; the reception signals.</p>
                                    <p>b) When the train passes the home signal, the home signal returns to &apos;ON&apos; position.</p>
                                    <p>c) As the last vehicle passes the Last Vehicle Track Circuit the audible warning sounds.</p>
                                    <p>d) Replace SMs control slide/ knob/lever for home signal</p>
                                    <p>e) Audible warning stops.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">12.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>a) Transmit the catch siding key either manually or electrically back to Station Master.</p>
                                    <p>b) Set Catch siding points to normal.</p>
                                    <p>c) Restore the catch siding key back in its position.</p>
                                    <p>d) After visually checking that the complete train has arrived, all signals and signal levers/knobs/slides are to be put back to normal.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">13.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; and attend telephone. On acknowledgement, give train arrival time.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">14.</td>
                                <td className="border border-white/20 p-3">Acknowledge &apos;Call attention&apos;, attend telephone and note down clearance time.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">Final Steps - Block Section Closure:</h4>
                        
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
                                <td className="border border-white/20 p-3 font-bold text-blue-300">15.</td>
                                <td className="border border-white/20 p-3">Give &apos;Train out of block section&apos; signal and press &apos;Line closed&apos; and Bell code button at the end of the fourth bell beat in case of push button type block instruments and bring the instrument to &apos;Line closed&apos; position. In case of handle type block instrument, after the fourth bell beat press both PB1 and PB 2 and enable the Station Master at the other end to normalize the block handle to &apos;Line closed&apos; position.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">16.</td>
                                <td className="border border-white/20 p-3">In case of push button type the instrument will set to &apos;Line closed&apos; position, acknowledge the train out of block section signal. In case of handle type block instrument turn the handle to &apos;Line closed&apos; when co- operation is given by Station Master at the other end.</td>
                                <td className="border border-white/20 p-3">Give &apos;Train out of block section&apos; signal and press both PB1 and PB 2 at the end of the fourth beat and enable the Station Master at the other end to normalize the handle to &apos;Line closed&apos; position.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">17.</td>
                                <td className="border border-white/20 p-3">Set the Block instrument to &apos;Line Closed&apos; condition.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="font-bold text-blue-300">NOTE:</span> Though the home signal may go automatically to &apos;ON&apos; by passage of train, home signal lever shall not be put back to normal unless the whole of the last train has arrived inside the last vehicle track circuit. Failure to adhere to this, will result in block failure and train arrival buzzer will not sound alarm under such circumstances.
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

export default BWMPartBPage34