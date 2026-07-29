"use client"
import React from 'react'

const BWMAnnexureOnePage7: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">ANNEXURE ONE</h1>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Main Section */}
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">3.2 Following is the sequence of operations of signalling a train between two stations:</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          The block section being clear and the &apos;LINE CLOSED&apos; indication being displayed on Block Panel at both the stations. The action is taken by sending stations SM as under:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="min-w-full text-left rounded-lg overflow-hidden bg-white/5 border border-white/15 shadow-lg">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gradient-to-b from-blue-700 via-indigo-700 to-purple-700 text-indigo-100 font-semibold text-base border-b border-indigo-600">Step No.</th>
                        <th className="px-4 py-3 bg-gradient-to-b from-blue-700 via-indigo-700 to-purple-700 text-indigo-100 font-semibold text-base border-b border-indigo-600">Sending Station</th>
                        <th className="px-4 py-3 bg-gradient-to-b from-blue-700 via-indigo-700 to-purple-700 text-indigo-100 font-semibold text-base border-b border-indigo-600">Receiving Station</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-200">
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 align-top font-medium">1</td>
                        <td className="px-4 py-2">
                          Ensure LINE CLOSED indication is YELLOW, SNK indication is YELLOW, and LINE FREE indication is GREEN.<br />
                          Insert SM key and turn to IN.<br/>
                          Send &apos;Call Attention&apos; signal to receiving station by pressing BELL button.
                        </td>
                        <td className="px-4 py-2">
                          —
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">2</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          Acknowledge the &apos;Call Attention&apos; signal by pressing BELL button.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">3</td>
                        <td className="px-4 py-2">
                          Send &apos;Attend Telephone&apos; signal by pressing BELL button.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">4</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          Acknowledges by pressing BELL button and attends the telephone.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">5</td>
                        <td className="px-4 py-2">
                          Attend telephone and advise station in advance about the intended movement of the train on telephone and ask for LINE CLEAR. Give number and description of train and ask for Line Clear.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">6</td>
                        <td className="px-4 py-2">
                          a) Ensure LINE CLOSED indication is YELLOW, SNK indication is YELLOW, LINE FREE indicator is GREEN, and LCB key is in.<br />
                          b) Say &quot;LINE IS CLEAR FOR TRAIN&quot; supported by a PN.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">7</td>
                        <td className="px-4 py-2">
                          Repeat the PN and SM simultaneously.<br />
                          Press BELL and TRAIN GOING TO buttons until &apos;TRAIN GOING TO&apos; arrowhead indication lights up GREEN.<br />
                          <span className="italic text-gray-400">(* If aforesaid indication does not appear after 3 seconds (approx.) of pressing the buttons, SM releases the buttons and rechecks conditions at his station and asks station in advance to recheck the conditions for grant of LINE CLEAR.)</span>
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">8</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          &apos;LINE CLOSED&apos; indication turns off and &apos;TRAIN COMING FROM&apos; arrowhead indication lights up GREEN.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">9</td>
                        <td className="px-4 py-2">
                          &apos;LINE CLOSED&apos; indication turns off.<br/>
                          &apos;TRAIN GOING TO&apos; arrowhead indication lights up GREEN.<br/>
                          Release BELL and TRAIN GOING TO buttons.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">10</td>
                        <td className="px-4 py-2">
                          Take LSS to &apos;OFF&apos;.<br/>
                          SNOEK indicator turns &apos;OFF&apos;.<br/>
                          Train enters the Block Section. LSS indication on block panel turns to red. LINE OCCUPIED indication lights up RED.<br/>
                          SECTION buzzer starts ringing and &quot;TRAIN GOING TO&apos; Arrow Head Indication turns RED. ACKN (TGT) indication lights up.<br/>
                          Acknowledge the buzzer by pressing ACKN (TGT) button. ACKN (TGT) indication turns off and buzzer is silenced.<br/>
                          Note the train entering the block section timings.<br/>
                          Put back the LSS controls to Normal. Ensure SNK lights up YELLOW.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">11</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          SNK indicator turns &apos;OFF&apos;.<br/>
                          LINE OCCUPIED indication lights up RED.<br/>
                          SECTION buzzer starts ringing and &apos;TRAIN COMING FROM&apos; Arrow Head Indication turns RED. ACKN (TCF) indication lights up.<br/>
                          Acknowledge the buzzer by pressing ACKN button. ACKN (TCF) indication turns off and buzzer is silenced. Note the train entering the block section timings.<br/>
                          SNOEK lights up YELLOW.<br/>
                          Take reception signal(s) &apos;OFF&apos; to receive the train.<br/>
                          SNK indicator turns &apos;OFF&apos;.<br/>
                          Train passes Home Signal. Signal replaces to &apos;ON&apos;.<br/>
                          Train clears the Block Section including Block overlap.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">12</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          SECTION buzzer starts ringing.<br/>
                          ACKN (TCF) indication lights up YELLOW.<br/>
                          LINE FREE indication turns from red to GREEN.<br/>
                          &apos;TRAIN COMING FROM&apos; Arrow Head Indication turns from red to FLASHING GREEN.<br/>
                          Ensure the conditions for closing the block section as per GR 14.10.<br/>
                          Acknowledge the buzzer by pressing ACKN (TCF) button. ACKN (TCF) indication turns off and buzzer is silenced.<br/>
                          Note the train out of block section timings.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">13</td>
                        <td className="px-4 py-2">
                          SECTION buzzer starts ringing. ACKN 12 (TGT) indication lights up YELLOW.<br/>
                          LINE FREE indication turns to GREEN.<br/>
                          &apos;TRAIN GOING TO&apos; indication turns FLASHING GREEN.<br/>
                          Acknowledge the buzzer by pressing ACKN (TGT) button. ACKN (TGT) indication turns off and buzzer is silenced.<br/>
                          Note the train out of block section timings.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="px-4 py-2 font-medium">14</td>
                        <td className="px-4 py-2">—</td>
                        <td className="px-4 py-2">
                          Replace all controls pertaining to reception of train to Normal.<br/>
                          SNK lights up YELLOW.<br/>
                          &quot;TRAIN COMING FROM&apos; Arrow Head flashing green Indication turns off.<br/>
                          &apos;LINE CLOSED&apos; indication yellow lights up.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">15</td>
                        <td className="px-4 py-2">
                          &apos;TRAIN GOING TO&apos; Arrow Head Indication turns off.<br/>
                          &apos;LINE CLOSED&apos; indication lights up.
                        </td>
                        <td className="px-4 py-2">—</td>
                      </tr>
                    </tbody>
                  </table>
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

export default BWMAnnexureOnePage7