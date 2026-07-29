"use client"
import React from 'react'

const BWMPartCPage15B: React.FC = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - III</h2>
            <h1 className="lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Signalling of a Train
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 3.2 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.2. Signalling of a train from one Block station to another:</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">a)</span> The following is an example of how a train is signalled from <span className="text-green-300 font-semibold">&apos;X&apos;</span> to <span className="text-green-300 font-semibold">&apos;Y&apos;</span>, on <span className="text-green-300 font-semibold">S.G.E. Lock and Block Instrument</span>. Before asking for <span className="text-green-300 font-semibold">&apos;Line Clear&apos;</span> for a train on <span className="text-blue-300 font-semibold">controlled sections</span>, permission of <span className="text-blue-300 font-semibold">Controller</span> shall be obtained.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="mt-8">
                  <h2 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">SGE Lock and Block Instrument: Sequence for Despatching a Train</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white/10 divide-y divide-blue-400/10 rounded-xl shadow border border-blue-400/20">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-800/40 to-indigo-900/40">
                          <th className="px-3 py-2 text-left text-yellow-300 font-bold lg:text-lg text-base">Step</th>
                          <th className="px-3 py-2 text-left text-blue-200 font-bold lg:text-lg text-base">Action / Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-400/10 text-gray-200">
                        <tr>
                          <td className="px-3 py-2 font-semibold">1</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Call attention&apos;</span> and, on getting acknowledgement, attend telephone.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">2</td>
                          <td className="px-3 py-2">Acknowledge, attend telephone, and give out station name.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">3</td>
                          <td className="px-3 py-2">After verifying the correctness of the station from which line clear is required, give Number and description of the train for which line clear is required.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">4</td>
                          <td className="px-3 py-2">After verifying the correctness of the station to which line clear is to be given, repeat the Number and description of the train. If the conditions for granting line clear are complied with, give the Private Number (PN) for the train.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">5</td>
                          <td className="px-3 py-2">Repeat the Private Number (PN).</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">6</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Call attention&apos;</span> signal.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">7</td>
                          <td className="px-3 py-2">Acknowledge.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">8</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Is line clear&apos;</span> bell code.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">9</td>
                          <td className="px-3 py-2">
                            Acknowledge &apos;Is line clear&apos; bell code keeping the bell plunger pressed during the last beat; turn operating handle to &apos;Line clear&apos;.<br />
                            <span className="italic">TCF dial at Receiving Station <span className="text-green-300 font-semibold">Y</span> will now indicate &apos;Line clear.&apos;</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">10</td>
                          <td className="px-3 py-2">At Sending Station <span className="text-green-300 font-semibold">X</span>, the TGT dial changes to &apos;Line clear&apos;.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">11</td>
                          <td className="px-3 py-2">When the TGT dial assumes the &apos;Line clear&apos; position, the lock on the Last Stop Signal (LSS) is released. Take off the LSS.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">12</td>
                          <td className="px-3 py-2">When the train passes the LSS and operates the first vehicle track circuit, LSS goes back to &apos;ON&apos;. Immediately, the LSS lever/knob should be turned to normal position.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">13</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Call attention&apos;</span> signal.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">14</td>
                          <td className="px-3 py-2">Acknowledge.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">15</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Train entering block section&apos;</span> signal.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">16</td>
                          <td className="px-3 py-2">Acknowledge the &apos;Train entering block section&apos; signal and, keeping plunger pressed on the last beat, turn the operating handle to TOL position.
                            <ul className="list-disc ml-8 space-y-1">
                              <li>The TCF dial will then indicate TOL.</li>
                              <li>The operating handle will be locked in TOL position.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">17</td>
                          <td className="px-3 py-2">The TGT dial at <span className="text-green-300 font-semibold">X</span> assumes TOL position.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">18</td>
                          <td className="px-3 py-2">Attend telephone and give departure time.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">19</td>
                          <td className="px-3 py-2">Attend telephone and note departure time.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">20</td>
                          <td className="px-3 py-2">
                            <ul className="list-decimal ml-8 space-y-1">
                              <li>
                                <span className="font-semibold">(a)</span> Reverse the Home signal lever/knob for the reception of the train.
                              </li>
                              <li>
                                <span className="font-semibold">(b)</span> After ensuring that the train has arrived complete inside the Last Vehicle Track Circuit, put back the Home signal lever/knob to normal.
                              </li>
                              <li>
                                <span className="font-semibold">(c)</span> Restoration of the signal lever/knob and the train clearing the LVT releases the lock on the &apos;Operating handle&apos;.
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">21</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Call attention&apos;</span> signal and, after acknowledgement, give arrival time.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">22</td>
                          <td className="px-3 py-2">Acknowledge, attend telephone, and note clearance time.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">23</td>
                          <td className="px-3 py-2">Give <span className="text-yellow-300">&apos;Train out of block section&apos;</span> signal. While keeping the bell plunger pressed on the last beat, turn the operating handle to &apos;Line closed&apos;. The TCF dial will now indicate &apos;Line closed&apos;.</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-semibold">24</td>
                          <td className="px-3 py-2">As soon as the TGT dial changes to &apos;Line Closed&apos; position, give &apos;Train out of block section&apos; acknowledgement.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-xs text-gray-400 mt-3 italic">Note: X - Sending Station, Y - Receiving Station. Abbreviations: LSS – Last Stop Signal, TCF/TGT – Indicator dials, TOL – Train on Line, LVT – Last Vehicle Track Circuit.</div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">3.2 (A) (ii) Procedure to Cancel Line Clear Before the Train Enters the Block Section</h3>
                <div className="overflow-x-auto rounded-lg shadow-lg">
                  <table className="min-w-full bg-white/10 backdrop-blur-xl rounded-lg border border-white/20">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-blue-200 font-semibold text-left border-b border-white/10">Step</th>
                        <th className="px-4 py-3 text-blue-200 font-semibold text-left border-b border-white/10">Sending Station <span className="text-green-300 font-semibold">‘X’</span></th>
                        <th className="px-4 py-3 text-blue-200 font-semibold text-left border-b border-white/10">Receiving Station <span className="text-green-300 font-semibold">‘Y’</span></th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-100 text-sm lg:text-base">
                      <tr>
                        <td className="px-3 py-2 font-semibold">1</td>
                        <td className="px-3 py-2">&quot;Train Going To&quot; dial displays <span className="text-yellow-300">Line Clear</span> indication.</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">2</td>
                        <td className="px-3 py-2">—</td>
                        <td className="px-3 py-2">&quot;Train Coming From&quot; dial displays <span className="text-yellow-300">Line Clear</span> indication.</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">3</td>
                        <td className="px-3 py-2" colSpan={2}>
                          Ensure all the relevant signals are in <span className="text-yellow-300">‘ON’</span> position; give call attention; on acknowledgement, ask for consent by explaining the circumstances supported by a <span className="text-yellow-300">Private Number</span>.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">4</td>
                        <td className="px-3 py-2">—</td>
                        <td className="px-3 py-2">Acknowledge call attention, give consent and repeat the Private Number; ensure that all relevant signals are in <span className="text-yellow-300">‘ON’</span> position.</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">5</td>
                        <td className="px-3 py-2">Give <span className="text-yellow-300">Call Attention</span> signal.</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">6</td>
                        <td className="px-3 py-2">—</td>
                        <td className="px-3 py-2">Acknowledge <span className="text-yellow-300">Call Attention</span> signal.</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">7</td>
                        <td className="px-3 py-2">Give <span className="text-yellow-300">Cancel Last Signal</span>.</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">8</td>
                        <td className="px-3 py-2">—</td>
                        <td className="px-3 py-2">
                          <div>
                            <span className="block">i) Acknowledge <span className="text-yellow-300">Cancel Last Signal</span>; holding the bell plunger pressed during the last beat, turn the operating handle to <span className="text-yellow-300">‘Line Closed’</span> position.</span>
                            <span className="block mt-1">ii) TCF dial displays <span className="text-yellow-300">‘Line Closed’</span> indication.</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">9</td>
                        <td className="px-3 py-2">—</td>
                        <td className="px-3 py-2">TGT dial displays <span className="text-yellow-300">‘Line Closed’</span> indication.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-400 mt-3 italic">
                  <span className="block">Note: X - Sending Station, Y - Receiving Station. Abbreviations: TCF/TGT – Indicator dials.</span>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">
                  3.2. (A) (iii) Procedure for Despatching a Train Involving IBS
                </h3>
                <div className="mb-3 text-gray-300 lg:text-base text-sm">
                  <span className="font-semibold text-green-200">Sending Station &apos;X&apos;</span> &nbsp; | &nbsp; 
                  <span className="font-semibold text-green-200">Receiving Station &apos;Y&apos;</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white/10 divide-y divide-blue-400/10 rounded-xl shadow border border-blue-400/20 text-gray-200">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-800/40 to-indigo-900/40">
                        <th className="px-3 py-2 text-left text-yellow-300 font-bold lg:text-lg text-base w-16">Step</th>
                        <th className="px-3 py-2 text-left text-blue-200 font-bold lg:text-lg text-base">Action / Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-400/10 text-gray-200">
                      <tr>
                        <td className="px-3 py-2 font-semibold">1</td>
                        <td className="px-3 py-2">
                          Insert SM&apos;s key and ensure Axle Counter section is clear (observe Green indication). Give <span className="text-yellow-300">&apos;Call attention&apos;</span> signal and attend telephone on acknowledgement.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">2</td>
                        <td className="px-3 py-2">
                          Insert SM&apos;s key, acknowledge, and attend telephone.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">3</td>
                        <td className="px-3 py-2">
                          Give description of the train for which consent of Station Master <span className="text-green-200 font-semibold">&apos;Y&apos;</span> is required.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">4</td>
                        <td className="px-3 py-2">
                          Repeat the train description and give consent by giving a Private Number (PN).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">5</td>
                        <td className="px-3 py-2">
                          Repeat the Private Number.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold" rowSpan={3}>6</td>
                        <td className="px-3 py-2 border-b-0">
                          (a) Take <span className="text-yellow-300">&apos;OFF&apos;</span> Last Stop Signal.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border-b-0">
                          (b) As the train passes Last Stop Signal, K-2 indication appears along with audible buzzer.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">
                          (c) Put back Last Stop Signal lever/knob.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold" rowSpan={2}>7</td>
                        <td className="px-3 py-2 border-b-0">
                          (a) Give <span className="text-yellow-300">&apos;Call attention&apos;</span> and inform departure time.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">
                          (b) Ask for line clear for this train to enter into IB section.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold" rowSpan={2}>8</td>
                        <td className="px-3 py-2 border-b-0">
                          (a) Acknowledge and note departure time.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">
                          (b) If conditions for granting line clear are fulfilled, give Private Number (PN).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">9</td>
                        <td className="px-3 py-2">
                          Repeat the Private Number (PN).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">10</td>
                        <td className="px-3 py-2">
                          Give <span className="text-yellow-300">&apos;Call attention&apos;</span>.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">11</td>
                        <td className="px-3 py-2">
                          Acknowledge.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">12</td>
                        <td className="px-3 py-2">
                          Give <span className="text-yellow-300">&apos;Is line clear&apos;</span> signal.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">13</td>
                        <td className="px-3 py-2">
                          Acknowledge and turn the commutator of TCF dial to <span className="text-yellow-300">&apos;Line Clear&apos;</span> position.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">14</td>
                        <td className="px-3 py-2">
                          TGT dial displays <span className="text-yellow-300">&apos;Line Clear&apos;</span> position.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">15</td>
                        <td className="px-3 py-2">
                          Take <span className="text-yellow-300">&apos;OFF&apos; IBS</span> and confirm the same through indications.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">16</td>
                        <td className="px-3 py-2">
                          As the train passes IB signal, K-3 indication appears along with buzzer.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">17</td>
                        <td className="px-3 py-2">
                          Give <span className="text-yellow-300">&apos;Call attention&apos;</span>.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">18</td>
                        <td className="px-3 py-2">
                          Acknowledge.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">19</td>
                        <td className="px-3 py-2">
                          Give <span className="text-yellow-300">&apos;Train entering block section&apos;</span> signal. Attend telephone and on acknowledgement provide timings.<br />
                          <span className="text-xs italic text-gray-300">Now one more train can be sent into Axle Counter section.</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">20</td>
                        <td className="px-3 py-2">
                          Acknowledge <span className="text-yellow-300">&apos;Train entering block section&apos;</span> signal and turn the commutator to TOL position. The buzzer stops.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold" rowSpan={2}>21</td>
                        <td className="px-3 py-2 border-b-0">
                          (a) Take <span className="text-yellow-300">&apos;OFF&apos; reception signals</span>.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2">
                          (b) As the train passes Home Signal, put back the Home signal knob/lever to normal.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">22</td>
                        <td className="px-3 py-2">
                          Ensure the conditions for closing block section are complied with.
                          Give <span className="text-yellow-300">&apos;Call attention&apos;</span> signal, attend telephone on acknowledgement, and give clearance time.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">23</td>
                        <td className="px-3 py-2">
                          Acknowledge, attend telephone, and note clearance time.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">24</td>
                        <td className="px-3 py-2">
                          Give <span className="text-yellow-300">&apos;Train out of block section&apos;</span> signal and turn the commutator to <span className="text-yellow-300">&apos;Line Closed&apos;</span> position.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-semibold">25</td>
                        <td className="px-3 py-2">
                          Acknowledge <span className="text-yellow-300">&apos;Train out of block section&apos;</span> signal.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-gray-400 mt-3 italic space-y-1">
                  <div>
                    <span className="block">Note:</span>
                    <span className="block">1. Two entries for the same train shall be made, i.e., one for Axle Counter section and another for IB section.</span>
                    <span className="block">2. If both Axle Counter and IB sections are clear of obstruction, both transactions may be recorded at the same time, but timings and entries must be made separately.</span>
                    <span className="block mt-2">Abbreviations: <span className="font-semibold">TCF</span>/<span className="font-semibold">TGT</span> – Indicator dials.</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-2">
                  3.2 (B) Exchange of Private Numbers for Train Reception
                </h3>
                <p className="text-gray-200 mb-4">
                  The following sequence describes the standard operating procedure for the exchange of Private Numbers between the Station Master and cabin staff, starting from when the reception line is nominated until the Station Master releases control on the Home or Routing signal:
                </p>

                {/* Duty Station Master Steps */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">1. Duty Station Master</h4>
                  <ul className="list-decimal list-inside text-gray-200 space-y-2 ml-4">
                    <li>
                      Once <span className="font-semibold text-blue-200">&apos;Line Clear&apos;</span> is granted, the Station Master selects the reception line and ensures the entire line, including sufficient length, is clear of obstructions.
                    </li>
                    <li>
                      The Station Master informs the CASM/Switchman/Cabin Master in both cabins by telephone, giving the train number, description, expected arrival, whether the train will stop or run through, and the nominated reception line.
                    </li>
                    <li>
                      Both cabin staff acknowledge these details by repeating them back.
                    </li>
                  </ul>
                </div>

                {/* Facing End Cabin Steps */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">2. Cabin Staff at Facing End</h4>
                  <ul className="list-decimal list-inside text-gray-200 space-y-2 ml-4">
                    <li>
                      On receiving information from the Station Master, the staff at the facing end sets and locks all relevant points (electrically or manually) for train reception on the nominated line.
                    </li>
                    <li>
                      Verifies the nominated line is clear and unobstructed.
                    </li>
                    <li>
                      Gives categorical assurance to the trailing end cabin after ensuring:
                      <ul className="list-disc list-inside ml-5 space-y-1">
                        <li>The nominated line is clear (mentioning line number).</li>
                        <li>All relevant points are properly set for reception.</li>
                        <li>All facing points are locked.</li>
                        <li>All level crossing gates are closed and locked against road traffic.</li>
                      </ul>
                      Requests release of the slot on the Home/Routing signal for the nominated line.
                    </li>
                  </ul>
                </div>

                {/* Trailing End Cabin Steps */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">3. Cabin Staff at Trailing End</h4>
                  <ul className="list-decimal list-inside text-gray-200 space-y-2 ml-4">
                    <li>
                      After receiving assurance from the facing end, sets and locks all relevant points for the nominated line and ensures the entire line is clear.
                    </li>
                    <li>
                      Confirms all level crossing gates are closed and locked.
                    </li>
                    <li>
                      Communicates a <span className="text-blue-200 font-semibold">Private Number</span> to the facing end and releases the slot on the Home/Routing signal.
                    </li>
                  </ul>
                </div>

                {/* Exchange Confirmation */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">4. Facing End Cabin - Confirmation</h4>
                  <p className="text-gray-200 ml-4">
                    Upon receipt of the Private Number from the trailing end, the facing end staff then communicates a Private Number to the Station Master, confirming that both cabins are ready for the train&apos;s reception.
                  </p>
                </div>

                {/* Station Master Final Confirmation */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">5. Final Station Master Actions</h4>
                  <ul className="list-decimal list-inside text-gray-200 space-y-2 ml-4">
                    <li>
                      On receiving Private Number from the facing end, and once everything is ready, the Station Master issues a Private Number to the facing end and releases their control on the Home/Routing signal.
                    </li>
                  </ul>
                </div>

                {/* Final Reception Signal Step */}
                <div className="mb-4">
                  <h4 className="text-yellow-300 font-semibold text-lg mb-1">6. Reception Signals</h4>
                  <p className="text-gray-200 ml-4">
                    The facing end staff, after confirming the slot indicator is showing &quot;OFF&quot;, shall take &quot;OFF&quot; the reception signals.
                  </p>
                </div>

                {/* Special Notes */}
                <div className="mb-4">
                  <h4 className="text-blue-300 font-semibold text-lg mb-1">Notes &amp; Special Cases</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>
                      The exchange of Private Numbers is aimed at eliminating risks of signals being taken &quot;OFF&quot; for an obstructed line. When effective <span className="text-blue-200 font-semibold">track circuiting or axle counters</span> are provided and working, this exchange is not required.
                    </li>
                    <li>
                      At stations with only one cabin, exchange of Private Numbers between the Station Master and cabin staff shall occur as described in Steps 5 and 6 above before the Station Master&apos;s control on the signal is released.
                    </li>
                  </ul>
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

export default BWMPartCPage15B