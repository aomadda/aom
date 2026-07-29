"use client"
import React from 'react'

const BWMAnnexureOnePage16B: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">4.0 BLOCK FAILURES AND ACTION TO BE TAKEN:</h4>
                    
                    <div className="space-y-6">
                      {/* Introduction */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          The block failures can be categorized into the following:
                        </p>
                      </div>

                      {/* Section 4.1 */}
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-blue-300 font-semibold mb-3 lg:text-lg">4.1 FAILURE of the BLOCK PANEL:</p>
                        
                        <div className="space-y-4">
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                              Block panel should be considered defective for Up and /or Down trains, as the case may be. The Block Panel should not be restored for normal working until tested by competent signal staff and certified fit by them for use after the under-mentioned cases except for the case of Communication Link Failure (steady yellow indication). After the Communication Link Failure indication becomes flickering (OK indication) again block panel operation can be restored.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                    <thead>
                      <tr className="bg-indigo-800/50">
                        <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20 w-2/3">Cause of Failure</th>
                        <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Action to be Taken</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-100">
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20">
                          1. When no indication of any sort appears on the block panel
                          <br />2. When the Bell Code signals are received indistinctly
                          <br />3. Any damage is seen or reported to block equipment
                          <br />4. When none of the indications, i.e. ‘TRAIN COMING FROM’ and ‘TRAIN GOING TO’, appears on the block panel except ‘LINE FREE’
                          <br />5. When no train has entered into the block section, but the ‘LINE OCCUPIED’ indication lights up in RED on both lines, and this indication persists even after resetting the Axle Counters
                          <br />6. When a train has arrived at the receiving station but the Block Panel still shows ‘TRAIN ON LINE’ RED indication, which persists on both lines
                          <br />7. When BI Fail indication (SSBPAC (D) red) appears
                          <br />8. When Link Fail indication becomes steady yellow
                          <br />9. When ‘TRAIN GOING TO’ or ‘TRAIN COMING FROM’ Arrowhead Indications do not appear despite appropriate action, though conditions for asking ‘LINE CLEAR’ and granting permission to approach are fulfilled
                        </td>
                        <td className="px-4 py-2 border border-white/20">
                          The Block Panel should be treated as defective, block working suspended, and trains dealt with by taking LINE CLEAR on the electrical communication equipment provided.
                        </td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20">
                          10. ‘TRAIN GOING TO’ or ‘TRAIN COMING FROM’ Arrowhead Indications do not turn RED (TRAIN ON LINE indication) when the train enters the Block Section at either station
                          <br />11. When a train has arrived at the receiving station but the Block Panel shows FLASHING GREEN/GREEN indication even after ensuring SNK indication and LCB key IN
                        </td>
                        <td className="px-4 py-2 border border-white/20">
                          The Block Panel should be treated as defective for the respective line, and trains should be dealt with by taking LINE CLEAR on the electrical communication equipment provided.
                        </td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20">
                          12. After cancellation, CANCEL indication does not light up FLASHING YELLOW or STEADY YELLOW after appropriate actions
                        </td>
                        <td className="px-4 py-2 border border-white/20">
                          In addition to actions for earlier cases, all efforts should be made to keep the LAST STOP SIGNAL at ON position. If not possible, depute a competent railway servant with RED hand signal at the foot of the LAST STOP SIGNAL to warn Loco Pilots.
                        </td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20">
                          13. When LAST STOP SIGNAL cannot be kept at ‘ON’ during its suspension/disconnection
                          <br />14. When LAST STOP SIGNAL of the station does not return to ‘ON’ position on entry of a train into the Block Section
                        </td>
                        <td className="px-4 py-2 border border-white/20">
                          All trains in the relevant direction should be stopped at the Home signal. After ensuring the train has come to a stop, take off the Home signal to ‘Caution’ aspect only. Issue a caution order to the Loco Pilot regarding the LAST STOP SIGNAL defect. The STARTER signal should not be taken OFF until relevant authority is issued for passing the LAST STOP SIGNAL.
                        </td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20">
                          15. Total failure of communication
                        </td>
                        <td className="px-4 py-2 border border-white/20">
                          Trains shall be worked as per the extant rules in force on the Railway, as outlined in GR 6.02 and applicable Special Rules.
                        </td>
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

export default BWMAnnexureOnePage16B