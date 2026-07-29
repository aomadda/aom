"use client"
import React from 'react'

const BWMAnnexureOnePage19: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">4.3 Suspension of Block working & Actions to be taken</h4>
                    
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                        <thead>
                          <tr className="bg-indigo-800/50">
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">S. No.</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Cause of Suspension</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Action to be taken</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-100">
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">1.</td>
                            <td className="px-4 py-2 border border-white/20">When material Lorries or Motor trolleys or Tie-tamping machines or Rail Motor/Bus or Rail cum road vehicle or Tower wagon (4 wheeler) has to run in the section.</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended for respective line and these vehicles shall be worked on relevant authority.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">2.</td>
                            <td className="px-4 py-2 border border-white/20">An accident takes place in the mid section.</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended for both lines, if line adjacent to affected line is reported to have been infringed, till the infringement exists for dispatch line or,<br />LAST STOP SIGNAL shall be treated as INOPERATIVE and FAILED.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">3.</td>
                            <td className="px-4 py-2 border border-white/20">When any part of Block Panel is opened or removed for repairs under duly accepted disconnection notice</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended<br />LAST STOP SIGNAL shall be treated as INOPERATIVE and FAILED.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">4.</td>
                            <td className="px-4 py-2 border border-white/20">When Last Stop Signal of the station has been taken by Signal staff for repairs.</td>
                            <td className="px-4 py-2 border border-white/20">LAST STOP SIGNAL shall be treated as INOPERATIVE and FAILED.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">5.</td>
                            <td className="px-4 py-2 border border-white/20">During Block Forward.</td>
                            <td className="px-4 py-2 border border-white/20">LAST STOP SIGNAL shall be treated as INOPERATIVE and FAILED</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-6">
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                        When the cause of suspension of BLOCK PANEL and/or LAST STOP SIGNAL is removed the normal working of BLOCK PANEL and/or LSS as the case may be, shall be restored by SM.
                      </p>
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

export default BWMAnnexureOnePage19