"use client"
import React from 'react'

const BWMAnnexurePage4B: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">1.7. Refusal of &apos;Line clear&apos;:</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-blue-300 text-2xl mt-0.5" role="img" aria-label="no entry">🚫</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                              If there is any <span className="font-semibold text-indigo-200">obstruction</span>, <span className="font-semibold text-indigo-200">shunting</span>, or any other reason,
                              the Station Master at <span className="font-semibold text-blue-200">&apos;Y&apos;</span> is unable to give <span className="font-semibold">&apos;Line clear&apos;</span> to the Station Master at <span className="font-semibold text-indigo-200">&apos;X&apos;</span> for a train.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-yellow-300 text-2xl mt-0.5" role="img" aria-label="megaphone">📢</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                              In such cases, the Station Master at <span className="font-semibold text-blue-200">&apos;Y&apos;</span> shall <span className="font-semibold text-yellow-200">refuse &apos;Line clear&apos;</span> and explicitly state the <span className="font-semibold">reasons</span> for refusal.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-300 text-2xl mt-0.5" role="img" aria-label="memo">📝</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                              The refusal of &apos;Line clear&apos; must be <span className="font-semibold text-green-200">entered</span> in both the <span className="font-semibold">Outward Message (T/A1425)</span> and <span className="font-semibold">Inward Message (T/B1425)</span> at both stations.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-indigo-300 text-2xl mt-0.5" role="img" aria-label="repeat">🔄</span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed flex-1">
                              When conditions become favourable again, a <span className="font-semibold text-indigo-200">fresh T/A1425 form</span> must be used by the Station Master at <span className="font-semibold text-blue-200">&apos;X&apos;</span> to ask <span className="font-semibold text-indigo-100">&quot;Is line clear?&quot;</span> to the Station Master at <span className="font-semibold text-blue-200">&apos;Y&apos;</span>.
                            </span>
                          </li>
                        </ul>
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

export default BWMAnnexurePage4B