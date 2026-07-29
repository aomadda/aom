"use client"
import React from 'react'

const BWMAnnexureOnePage10: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">3.4 Cancellation of &apos;LINE CLEAR&apos;</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          After a sending station has taken LINE CLEAR, in case of cancellation of train or for testing, the receiving station can carry out LINE CLEAR cancellation by pressing BELL & CANCEL button with SM key IN only when the CO-OP button at the sending station is kept pressed. TRAIN GOING TO/TRAIN COMING FROM arrow indication turns to FLASHING GREEN at sending/receiving station respectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto my-6">
                  <h5 className="text-indigo-200 font-semibold text-lg mb-3">a) Method of Cancellation due to cancellation of train</h5>
                  <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                    <thead>
                      <tr className="bg-indigo-800/50">
                        <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Step</th>
                        <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Sending Station</th>
                        <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Receiving Station</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-100">
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">1</td>
                        <td className="px-4 py-2 border border-white/20">Give call attention signal. Put back LSS to &apos;ON&apos; if already taken &apos;OFF&apos;. Ensure SNK indicator is YELLOW.<br />Advise SM of receiving station about reason for cancellation after prescribed BELL code supported by a PN.</td>
                        <td className="px-4 py-2 border border-white/20">Acknowledge and attend telephone.</td>   
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">2</td>
                        <td className="px-4 py-2 border border-white/20"></td>
                        <td className="px-4 py-2 border border-white/20">Agree to request. Ensure:<br />- SNK indicator is YELLOW<br />- SNOEK indicator is YELLOW<br />Give consent supported by a PN.</td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">3</td>
                        <td className="px-4 py-2 border border-white/20">After verbal consent from receiving SM, press the CANCEL CO-OP button and release upon receiving BELL code.</td>
                        <td className="px-4 py-2 border border-white/20"></td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">4</td>
                        <td className="px-4 py-2 border border-white/20">CO-OP indicator lights up YELLOW.</td>
                        <td className="px-4 py-2 border border-white/20">Press BELL & CANCEL button with SM key IN.<br />CANCEL COUNTER increments by 1.<br /><span className="text-green-300">TRAIN COMING FROM</span> indicator changes from green to FLASHING GREEN.<br />CANCEL indicator lights up FLASHING YELLOW and continues flashing for 120 seconds.</td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">5</td>
                        <td className="px-4 py-2 border border-white/20"><span className="text-green-300">TRAIN GOING TO</span> indicator turns from green to FLASHING GREEN.</td>
                        <td className="px-4 py-2 border border-white/20"></td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">6</td>
                        <td className="px-4 py-2 border border-white/20"></td>
                        <td className="px-4 py-2 border border-white/20">After 120 seconds expires:<br />TRAIN COMING FROM indicator arrow and CANCEL indicator turn off.<br /><span className="text-yellow-400">LINE CLOSED</span> yellow indicator lights up.</td>
                      </tr>
                      <tr className="hover:bg-indigo-900/30 transition-colors">
                        <td className="px-4 py-2 border border-white/20 font-semibold">7</td>
                        <td className="px-4 py-2 border border-white/20">TRAIN GOING TO arrow indicator turns off.<br />LINE CLOSED yellow indicator lights.</td>
                        <td className="px-4 py-2 border border-white/20"></td>
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

export default BWMAnnexureOnePage10