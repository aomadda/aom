"use client"
import React from 'react'

const BWMPartBPage24B: React.FC = () => {
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
                    <h3 className="text-blue-300 font-bold lg:text-xl text-lg mb-6">3.2. Signalling of a train over the block section - Daido Handle Type Tokenless Block Instrument:</h3>
                    
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-6">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        Taking &apos;X&apos; and &apos;Y&apos; as two consecutive Block Stations, the sequential procedure for despatching a train, cancelling &apos;Line clear&apos; etc., is as detailed below. Before asking for &apos;Line Clear&apos; on controlled sections, the Station Master shall obtain the permission of the Controller.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">3.2. (A) Despatching a train:</h4>
                        
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
                                <td className="border border-white/20 p-3">Ensure that section is clear, Line Closed & SNR indicators are lit & SM&apos;s Key in.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">2.</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; signal</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">3.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge. Attend telephone. Give out station name.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">4.</td>
                                <td className="border border-white/20 p-3">On receipt of acknowledgement, attend telephone. Give out station name.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">5.</td>
                                <td className="border border-white/20 p-3">After ensuring correct station has responded, ask for &apos;Is line clear&apos; for ----- train</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">6.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">After exchanging information regarding train movement, ensure: that conditions for granting &apos;Line clear&apos; are complied with, &apos;Line closed&apos; indicator, SNR indicator are lit and then inform &apos;Line is clear for--- train&apos; supported by PN. e.g., 35 (three five)</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">7.</td>
                                <td className="border border-white/20 p-3">Repeat the PN.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">8.</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; signal.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">9.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge the &apos;Call attention&apos; signal.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">10.</td>
                                <td className="border border-white/20 p-3">Give &apos;Is line clear&apos; signal by pressing PB1 and keep PB 2 also pressed for 5 seconds on the last beat</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">11.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">While &apos;X&apos; gives the prolonged beat, turn the block handle to &apos;Train Coming From&apos; and acknowledge &apos;Is line clear&apos; signal by pressing PB1 and keep PB 2 also pressed for 5 seconds on the last beat. The Galvanometer needle shows a flick indicating that the handle at the other station has been turned. Release PB1 and PB 2.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">12.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>(i) While &apos;Y&apos; is giving the prolonged beat, turn the block handle to &apos;Train Going To&apos; position.</p>
                                    <p>(ii) Take &apos;OFF&apos; Last Stop Signal.</p>
                                    <p>(iii) On the train entering the block Section, the Last Stop Signal goes to &apos;ON&apos; position.</p>
                                    <p>(iv) &apos;Train On Line&apos; indication appears automatically and the buzzer / bell starts operating.</p>
                                    <p>(iv) Replace Last Stop Signal lever /slide /knob</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">13.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">&apos;Train On Line&apos; indication appears automatically and the buzzer / bell starts operating. Acknowledge by pressing PB1.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">14.</td>
                                <td className="border border-white/20 p-3">Buzzer / bell stops. Give &apos;Call attention&apos;. On acknowledgement , attend telephone and give departure time.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">15.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge, attend telephone and note departure time.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">16.</td>
                                <td className="border border-white/20 p-3">Give &apos;Train entering block section&apos; signal</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">17.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">18.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>(i) Take &apos;OFF&apos; reception signals.</p>
                                    <p>(ii) When the train passes home signal the home signal returns to &apos;ON&apos; position.</p>
                                    <p>(iii) As the last vehicle passes the Last Vehicle Track circuit, the buzzer/bell starts operating.</p>
                                    <p>(iv) Replace SM&apos;s control slide/lever/knob for home signal. Buzzer/bell stops.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">19.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">After ensuring that the train has arrived complete, give &apos;Call attention&apos; signal and attend telephone. On acknowledgement, give arrival time.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">20.</td>
                                <td className="border border-white/20 p-3">Acknowledge, attend telephone and note clearance time.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">21.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Give &apos;Train out of block section&apos; signal by pressing PB1 and keep PB 2 also pressed on the last beat, provided the conditions laid down in Rule 14.10 are complied with.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">22.</td>
                                <td className="border border-white/20 p-3">Turn block handle to line closed position and acknowledge train out of block section signal by pressing PB1 and keep PB 2 also pressed on the last beat. TOL indication disappears.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">23.</td>
                                <td className="border border-white/20 p-3">Turn the block handle to &apos;Line closed&apos; position; TOL indication disappears.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-6 bg-white/5 rounded-lg p-3 border border-white/10">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-bold text-blue-300">Note:</span> Though Home signal may go automatically to &apos;ON&apos; by passage of the train Home signal lever/knob shall not be normalized, unless the whole of the train has arrived inside the home signal. Failure to adhere to this, will result in block failure and the train arrival buzzer will not sound alarm under such circumstances.
                          </p>
                        </div>
                        
                        <div className="mt-4 bg-white/5 rounded-lg p-3 border border-white/10">
                          <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                            <span className="font-bold text-blue-300">Note:-</span> Similar procedure is repeated when despatching a train from station &apos;Y&apos; to station &apos;X&apos;.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">3.2 (B) To cancel &apos;Line Clear&apos; before the train enters the Block Section.</h4>
                        
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
                                <td className="border border-white/20 p-3">Block Handle at TGT Position and all relevant signals Levers / knobs and SM&apos;s slide for the Last Stop Signal concerned in normal position</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">2.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Block Handle at TCF position and all relevant signals, levers/knobs in normal position.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">3.</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; signal to station &apos;Y&apos; and take his consent on telephone supported by Private Number.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">4.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Give consent and repeat the PN.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">5.</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>(a) Turn cancellation switch S-1 for cancellation from Normal to Reverse.</p>
                                    <p>(b) Wait for about 120 seconds until &apos;Time Release&apos; Indicator operates to show &quot;Free&quot;.</p>
                                    <p>(c) Counter registers next higher number.</p>
                                  </div>
                                </td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">6.</td>
                                <td className="border border-white/20 p-3">Send &apos;Call attention&apos; signal.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">7.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge &apos;Call attention&apos; signal.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">8.</td>
                                <td className="border border-white/20 p-3">Restore cancellation switch to normal and send &apos;Cancel last signal.&apos; While sending &apos;Cancel last signal&apos; keep PB 1 and PB 2 also pressed for 5 seconds on the last beat. Release buttons PB1 and PB 2 when the Galvanometer needle gives a flick in its deflected position indicating that the Block handle at station &apos;Y&apos; has been turned</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">9.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Turn block handle to &apos;Line Closed&apos; position.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">10.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Press PB1 & PB2 for five seconds after the fifth beat. Release PB1 & PB 2 when the Galvanometer needle gives a flick in its deflected position indicating that the block handle at station &apos; X &apos; has been turned.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">11.</td>
                                <td className="border border-white/20 p-3">Turn the block handle to &apos;Line closed&apos; position.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-blue-300 font-bold lg:text-lg text-base mb-6">3.2 (C) Closing of Block Section after pushing back of train:</h4>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-white/20">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Step</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Sending station &apos;X&apos;</th>
                                <th className="border border-white/20 p-3 text-left text-blue-300 font-bold">Receiving station &apos;Y&apos;</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">1.</td>
                                <td className="border border-white/20 p-3">Block handle displays TGT and block instrument in TOL position.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">2.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Block handle displays TCF and block instrument in TOL position.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">3.</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; signal to station</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">4.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge &apos;Call attention&apos; signal</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">5.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">
                                  <div className="space-y-1">
                                    <p>(a) Turn Switch S-2.</p>
                                    <p>(b) Take &apos;OFF&apos; the reception signals.</p>
                                    <p>(c) Train passes home signal, which returns to &apos;ON&apos; and counter registers next number.</p>
                                    <p>(d) As the last vehicle passes the LVT, the buzzer starts operating.</p>
                                    <p>(e) Replace SM&apos;s Control slide / lever / knob of home signal to normal</p>
                                    <p>(f) Buzzer stops.</p>
                                    <p>(g) Normalize S 2 switch.</p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">6.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Give &apos;Call attention&apos; and attend telephone. On acknowledgement, give PN and arrival time.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">7.</td>
                                <td className="border border-white/20 p-3">Acknowledge, attend telephone, note PN and arrival time.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">8.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">On complete arrival of the train and provided the conditions laid down in Rule 14.10 are complied with, send &apos;Train out of block section&apos; signal through PB 1 and keep PB 2 also pressed for 5 seconds on the last beat.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">9.</td>
                                <td className="border border-white/20 p-3">Turn block handle to &apos;Line closed&apos; position.</td>
                                <td className="border border-white/20 p-3">-</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">10.</td>
                                <td className="border border-white/20 p-3">-</td>
                                <td className="border border-white/20 p-3">Acknowledge &apos;Train out of block section&apos; signal and press PB 1 & PB 2 for 5 seconds on the last beat.</td>
                              </tr>
                              <tr>
                                <td className="border border-white/20 p-3 font-bold text-blue-300">11.</td>
                                <td className="border border-white/20 p-3">Turn the block handle to &apos;Line closed&apos; position.</td>
                                <td className="border border-white/20 p-3">-</td>
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

export default BWMPartBPage24B