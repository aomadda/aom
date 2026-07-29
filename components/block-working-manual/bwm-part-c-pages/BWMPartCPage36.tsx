"use client"
import React from 'react'

const BWMPartCPage36: React.FC = () => {
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
          <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER - V</h2>
          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-2 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                
                <div className="space-y-6">
                  {/* 5.6 Section */}
                  <div className="bg-white/5 rounded-lg lg:p-6 p-2 border border-white/10">
                    <h3 className="text-blue-300 font-bold lg:text-2xl text-xl mb-6">5.6. Train wrongly described:</h3>
                    
                    <div className="space-y-4">
                      {/* Main paragraph */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          If <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> has been obtained by <span className="text-blue-300 font-semibold">&apos;X&apos;</span> from <span className="text-blue-300 font-semibold">&apos;Y&apos;</span> for a certain train, and it is afterwards found necessary to pass another train over the block section instead of the train for which <span className="text-green-300 font-semibold">&apos;Is line clear&apos;</span> was originally asked, <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> shall be cancelled and obtained afresh for the latter. If <span className="text-green-300 font-semibold">&apos;Line clear&apos;</span> has been obtained with incorrect description or number, this shall be cancelled and fresh line clear obtained and the train started thereon. If the mistake is noticed after the departure of the train, this shall immediately be notified over the phone to the station ahead to enable the latter to arrange for correct train reception and handling.
                        </p>
                      </div>

                      {/* Note */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                          <span className="text-yellow-300 font-semibold">Note:</span> The use of special signals described vide paras <span className="text-blue-300 font-semibold">5.1 to 5.6</span> above should be supported by exchange of <span className="text-yellow-300 font-semibold">Private Numbers</span>.
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

export default BWMPartCPage36