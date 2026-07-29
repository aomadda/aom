"use client"
import React from 'react'

const BWMPartCPage32: React.FC = () => {
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
          <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - V</h2>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 5.3 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">5.3. Obstruction on double line in the block section in advance (right line)- Block Forward (G.R.1.02(9)).</h3>
                    
                    <div className="space-y-4">
                      {/* First paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          Shunting or obstruction for any other purpose shall not be permitted in the <span className="text-green-300 font-semibold">block section in advance</span> unless it is clear and <span className="text-blue-300 font-semibold">blocked forward</span> (Exception – refer <span className="text-yellow-300 font-semibold">G.R. 8.06 (3)</span>).
                        </p>
                      </div>

                      {/* Second paragraph */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-blue-300 font-semibold">Block forward</span> ( <span className="text-yellow-300 font-semibold">Rule 1.02.9</span> ) means to despatch a message from a <span className="text-green-300 font-semibold">block station</span> on double line intimating to the <span className="text-green-300 font-semibold">block station</span> immediately in advance the fact that the <span className="text-green-300 font-semibold">block section</span> is obstructed or is to be obstructed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-blue-200 lg:text-2xl text-lg font-bold mb-4">5.3.1. Signalling between &lsquo;X&rsquo; and &lsquo;Y&rsquo; station when &lsquo;X&rsquo; needs to shunt a train into &lsquo;X-Y&rsquo; block section (i.e., on the line in advance of the Last Stop Signal in the direction of &lsquo;Y&rsquo;):</h4>
                  <div className="overflow-auto rounded-xl border border-white/10 bg-white/5 mb-6">
                    <table className="min-w-full divide-y divide-blue-500/20 text-left text-gray-200 text-base lg:text-lg">
                      <thead className="bg-indigo-900">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Step</th>
                          <th className="px-4 py-3 font-semibold">Sending Station &lsquo;X&rsquo;</th>
                          <th className="px-4 py-3 font-semibold">Receiving Station &lsquo;Y&rsquo;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">1</td>
                          <td className="px-4 py-3">Give &lsquo;Call attention&rsquo; and on getting acknowledgement</td>
                          <td className="px-4 py-3">Attend telephone</td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">2</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Acknowledge, &lsquo;Call attention&rsquo;, attend telephone</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">3</td>
                          <td className="px-4 py-3">Intimate the fact</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">4</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">If &lsquo;Y&rsquo; is prepared to allow the block section to be obstructed, give Private Number</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">5</td>
                          <td className="px-4 py-3">Repeat the Private Number and give timings</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">6</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Note the timings</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">7</td>
                          <td className="px-4 py-3">Give &lsquo;Call attention&rsquo;</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">8</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Acknowledge</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">9</td>
                          <td className="px-4 py-3">Give &lsquo;Is line clear&rsquo; signal</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">10</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">
                            <div>
                              <div>
                                <span className="font-semibold text-blue-300">i)</span> Acknowledge &lsquo;Is line clear&rsquo; signal and, holding the bell plunger pressed during the last beat, turn the operating handle to &lsquo;Train On Line&rsquo; position.
                              </div>
                              <div>
                                <span className="font-semibold text-blue-300">ii)</span> &lsquo;Train coming from&rsquo; dial then indicates TOL position.
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-indigo-950">
                          <td colSpan={3} className="px-4 py-2 text-blue-300 text-center font-semibold">
                            Next steps after block section is ready for shunting
                          </td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">11</td>
                          <td className="px-4 py-3">
                            <div>
                              <div>
                                <span className="font-semibold text-blue-300">i)</span> The TGT dial assumes TOL position.
                              </div>
                              <div>
                                <span className="font-semibold text-blue-300">ii)</span> Take &lsquo;OFF&rsquo; shunt signal below Last Stop Signal (if provided) or give LSS lever key (shunt key) to the Driver, and give T/806 with PN to the Driver.
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">12</td>
                          <td className="px-4 py-3">Give &lsquo;Train entering block section&rsquo; signal and, on acknowledgement, give departure time</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">13</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Acknowledge, attend telephone and note the departure time</td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">14</td>
                          <td className="px-4 py-3">
                            <span className="font-semibold text-blue-300">When shunting is completed:</span>
                            <ul className="pl-6 mt-1 list-disc list-inside text-blue-100 text-base space-y-1">
                              <li>Ensure train has arrived complete</li>
                              <li>Recover LSS lever key, if given</li>
                            </ul>
                          </td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">15</td>
                          <td className="px-4 py-3">Give &lsquo;Call attention&rsquo; and, on acknowledgement, attend telephone. Give clearance time supported by Private Number</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">16</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Acknowledge, attend telephone, and note the timing, repeat Private Number</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">17</td>
                          <td className="px-4 py-3">Give &lsquo;Call attention&rsquo;</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">18</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">Acknowledge</td>
                        </tr>
                        <tr className="border-b border-blue-500/10">
                          <td className="px-4 py-3">19</td>
                          <td className="px-4 py-3">Give &lsquo;Cancel last signal&rsquo;</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                        <tr className="border-b border-blue-500/10 bg-white/10">
                          <td className="px-4 py-3">20</td>
                          <td className="px-4 py-3"></td>
                          <td className="px-4 py-3">
                            <div>
                              <div>
                                <span className="font-semibold text-blue-300">i)</span> Acknowledge and, holding the bell plunger pressed during the last beat, turn the operating handle to &lsquo;Line closed&rsquo; position.
                              </div>
                              <div>
                                <span className="font-semibold text-blue-300">ii)</span> The TCF dial will now change to &lsquo;Line closed&rsquo; position.
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">21</td>
                          <td className="px-4 py-3">The TGT dial changes to &lsquo;Line closed&rsquo; position</td>
                          <td className="px-4 py-3"></td>
                        </tr>
                      </tbody>
                    </table>
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

export default BWMPartCPage32