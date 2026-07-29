"use client"
import React from 'react'

const BWMAnnexureOnePage18: React.FC = () => {
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
                  {/* Section 4.2.1 */}
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">4.2.1 Failure of LAST STOP SIGNAL & Action to be taken</h4>
                    
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                        <thead>
                          <tr className="bg-indigo-800/50">
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">S. No.</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Cause of failure of the LAST STOP SIGNAL</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Action to be taken</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-100">
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">1.</td>
                            <td className="px-4 py-2 border border-white/20">When LSS cannot be taken OFF even though Line Clear has been obtained through Block instrument (where there is no IBS).</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall not be suspended. The Last stop signal shall be treated as defective and PLCT (T/C or T/D 1425) shall be issued to Loco pilot as authority to proceed and pass LSS at ON, duly indicating that line clear has been obtained through Block instrument. And inform Signal staff.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">2.</td>
                            <td className="px-4 py-2 border border-white/20">When LSS can be cleared without obtaining Line Clear (where there is no IBS).</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended. The LAST STOP SIGNAL should be considered to have failed and failure shall be informed to signal staff immediately. Action to be taken as mandated against 4.1.14 above.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">3.</td>
                            <td className="px-4 py-2 border border-white/20">LSS does not restore to ON position on entry of train into Block section</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended. The LAST STOP SIGNAL should be considered to have failed and failure shall be informed to signal staff immediately Action to be taken as mandated against 4.1.14 above.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20 font-semibold">4.</td>
                            <td className="px-4 py-2 border border-white/20">In station with IBS, when LSS cannot be taken OFF despite track circuit and axle counters governing the LSS are in working condition, through which SM can ensure that the Block section between LSS and IBS is clear up to adequate distance beyond IBS. (IBS is in working condition)</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall not be suspended. The Last stop signal shall be treated as defective and PLCT (T/C or T/D 1425) shall be issued to Loco pilot to pass LSS at ON, duly indicating that line clear has been obtained through Block instrument. IBS can be taken OFF. And inform Signal staff.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 4.2.2 */}
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">4.2.2. Failure of IBS and action to be taken</h4>
                    
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border border-white/20 shadow rounded-lg bg-white/10 backdrop-blur">
                        <thead>
                          <tr className="bg-indigo-800/50">
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Cause of failure of the IBS</th>
                            <th className="px-4 py-2 text-blue-100 font-semibold border border-white/20">Action to be taken</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-100">
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20">1. When IBS cannot be taken OFF even though Line Clear has been obtained through Block instrument</td>
                            <td className="px-4 py-2 border border-white/20">BLOCK PANEL shall be suspended. The IB SIGNAL should be considered to have failed and failure shall be informed to signal staff immediately. Action to be taken as mandated against 4.1.14 above.</td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20">2. When IBS can be cleared without obtaining Line Clear.</td>
                            <td className="px-4 py-2 border border-white/20"></td>
                          </tr>
                          <tr className="hover:bg-indigo-900/30 transition-colors">
                            <td className="px-4 py-2 border border-white/20">3. IBS does not restore to ON position on entry of train into Block section.</td>
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

export default BWMAnnexureOnePage18