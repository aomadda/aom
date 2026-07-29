"use client"
import React from 'react'

const BWMAnnexureOnePage11B: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">3.6 Method of Push Back operation</h4>
                    
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                        <thead>
                          <tr className="bg-indigo-800/50">
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Step</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">SENDING STATION</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">RECEIVING STATION</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-100">
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">1</td>
                            <td className="px-4 py-2 border border-white/20">Train clears the Block Section. LINE 2 FREE indication turns GREEN. SECTION buzzer starts ringing. ACKN (TGT) indication lights up.<br />&apos;TRAIN GOING ΤΟΥ arrowhead indication turns to FLASHING GREEN.</td>
                            <td className="px-4 py-2 border border-white/20">Acknowledges the buzzer by pressing ACKN (TGT) button. ACKN (TGT) indication turns off and buzzer is silenced. Ensure SNK indication YELLOW</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">2</td>
                            <td className="px-4 py-2 border border-white/20">Train clears the Block Section. LINE FREE indication tums GREEN. SECTION buzzer starts ringing. ACKN (TCF) indication lights up.<br />&apos;TRAIN COMING FROM&apos; arrowhead indication turns from red to FLASHING GREEN.</td>
                            <td className="px-4 py-2 border border-white/20">Acknowledges the buzzer by pressing ACKN (TCF) button. ACKN (TCF) indication turns off and buzzer is silenced</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">3</td>
                            <td className="px-4 py-2 border border-white/20">Requests other end station SM on telephone regarding closure of the block, after prescribed BELL code.<br />Give PN</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">4</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                            <td className="px-4 py-2 border border-white/20">On request from sending station SM about closing of block on telephone after prescribed BELL code.<br />Give PN<br />Ensures SNK indication YELLOW</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">5</td>
                            <td className="px-4 py-2 border border-white/20">Gives co-operation to other end station for cancellation by pressing the cancel co-op button and releases on receiving a bell code</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">6</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                            <td className="px-4 py-2 border border-white/20">Co-operation indication light up yellow. BELL and CANCEL button pressed, Released with SM key & LCB key IN, Cancel counter increments CANCEL indication lights up FLASHING YELLOW and continues flashing for 120 seconds.<br />On expiry of 120 seconds, TRAIN COMING FROM arrowhead flashing green indication & cancel yellow indication turns off.<br />LINE CLOSED indication yellow lights up</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">8</td>
                            <td className="px-4 py-2 border border-white/20">TRAIN GOING TO Αrrow Head Indication turns off.<br />LINE CLOSED indication yellow lights up.</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">7</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                            <td className="px-4 py-2 border border-white/20">On expiry of 120 seconds, TRAIN COMING FROM arrowhead indication & cancel indication turn off.<br />LINE CLOSED indication lights up</td>
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

export default BWMAnnexureOnePage11B