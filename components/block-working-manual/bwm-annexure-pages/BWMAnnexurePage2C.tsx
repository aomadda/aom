"use client"
import React from 'react'

const BWMAnnexurePage2C: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-6">ANNEXURE</h1>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* Main Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">1.4. Method of sending a train from &apos;X&apos; to &apos;Y&apos; using T/A1425, T/B1425 , T/C1425 and T/D.1425:</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If &apos;X&apos; and &apos;Y&apos; are two consecutive block stations, the method of sending a train from station &apos;X&apos; to station &apos;Y&apos; using T/A1425, T/B1425 , T/C1425 and T/D.1425 is as follows:(Item no.25 of AS-6 Dt:18.06.2024)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full border-t border-b border-l border-blue-600 rounded-lg overflow-hidden bg-white/5">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
                        <th className="px-3 py-3 text-left text-indigo-200 font-semibold border-b border-blue-600">Step</th>
                        <th className="px-3 py-3 text-left text-indigo-200 font-semibold border-b border-blue-600">Sending Station &apos;X&apos;</th>
                        <th className="px-3 py-3 text-left text-indigo-200 font-semibold border-b border-blue-600">Receiving Station &apos;Y&apos;</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-100">
                      <tr className="border-b border-blue-700">
                        <td className="px-3 py-2 font-bold text-blue-300">1</td>
                        <td className="px-3 py-2">
                          SM/X shall fill the name of Station Master of Y station with whom communication is established and the mode of communication for Line Clear in the Line Clear inquiry portion of T/A 1425.
                        </td>
                        <td className="px-3 py-2"></td>
                      </tr>
                      <tr className="border-b border-blue-700">
                        <td className="px-3 py-2 font-bold text-blue-300">2</td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2">
                          SM/Y shall fill the relevant columns as verified with SM/X in the Line Clear reply portion of T/B 1425.
                        </td>
                      </tr>
                      <tr className="border-b border-blue-700">
                        <td className="px-3 py-2 font-bold text-blue-300">3</td>
                        <td className="px-3 py-2">
                          SM/X shall cross-check with SM/Y about the last train dealt over the section, its clearance, and ask for Line Clear with full description of the train, recording the same in T/A 1425.
                        </td>
                        <td className="px-3 py-2"></td>
                      </tr>
                      <tr className="border-b border-blue-700">
                        <td className="px-3 py-2 font-bold text-blue-300">4</td>
                        <td className="px-3 py-2"></td>
                        <td className="px-3 py-2">
                          SM/Y shall fill the relevant columns as communicated with SM/X in T/B 1425. If line is clear, ensure all LC gates are closed, grant permission supported by a Private Number (PN), and record the same in T/B 1425.
                        </td>
                      </tr>
                      <tr className="border-b border-blue-700">
                        <td className="px-3 py-2 font-bold text-blue-300">5</td>
                        <td className="px-3 py-2" colSpan={2}>
                          SM shall record the details of Private Number (PN) and Line Clear received time in the T/A 1425.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-bold text-blue-300">6</td>
                        <td className="px-3 py-2" colSpan={2}>
                          On the basis of T/A 1425, prepare (T/C.1425 UP) or (T/D.1425 DN) as applicable, in duplicate and hand over to the Loco Pilot, duly obtaining signature in the station record copy.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-400 mt-2">(Item no.25 of AS-6 Dt:18.06.2024)</p>
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

export default BWMAnnexurePage2C