"use client"
import React from 'react'

const BWMPartCPage31B: React.FC = () => {
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
          {/* Content Section */}
          <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - V</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 5.2 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">5.2. Special use of &apos;Obstruction danger&apos; signal.</h3>
                    
                    <div className="space-y-4">
                      {/* Section a */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">a</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              <span className="text-blue-300 font-semibold">&apos;Y&apos;</span> may discover after he has given line clear to <span className="text-blue-300 font-semibold">&apos;X&apos;</span> that a bridge or some part of the permanent way is damaged or that there is some other train or obstruction on the <span className="text-green-300 font-semibold">&apos;X – Y&apos; block section</span>. In these circumstances, <span className="text-blue-300 font-semibold">Y</span> shall immediately send to <span className="text-blue-300 font-semibold">&apos;X&apos;</span> the <span className="text-yellow-300 font-semibold">&apos;Obstruction danger&apos;</span> signal and turn his operating handle commutator from <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> to <span className="text-green-300 font-semibold">TOL position</span>. This will prevent the <span className="text-blue-300 font-semibold">Last Stop Signal</span> at <span className="text-blue-300 font-semibold">&apos;X&apos;</span> from being taken <span className="text-yellow-300 font-semibold">&apos;OFF&apos;</span> if it has not already been taken <span className="text-yellow-300 font-semibold">&apos;OFF&apos;</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Section b */}
                      <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/5 rounded-lg lg:p-4 p-3 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        <div className="flex gap-3 items-start">
                          <div className="flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-base">b</span>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-gray-100 lg:text-lg text-base leading-relaxed">
                              On receipt of <span className="text-yellow-300 font-semibold">&apos;Obstruction danger&apos;</span> signal, <span className="text-blue-300 font-semibold">&apos;X&apos;</span> shall, if possible prevent the train from entering the <span className="text-green-300 font-semibold">&apos;X –– Y&apos; block section</span>. If he succeeds in stopping the train he shall acknowledge <span className="text-blue-300 font-semibold">&apos;Y&apos;s</span> signal by repeating it and cancel <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> in accordance with para <span className="text-blue-300 font-semibold">5.5(f), (g) and (h)</span>.
                            </p>
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

export default BWMPartCPage31B