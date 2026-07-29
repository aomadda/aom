"use client"
import React from 'react'

const BWMAnnexurePage5B: React.FC = () => {
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
                    <h4 className="text-indigo-300 font-semibold lg:text-xl text-lg mb-4">1.10. Cancelling &apos;Line clear&apos;:</h4>
                    
                    <div className="space-y-5">
                      {/* Point a */}
                      <div className="group relative bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl lg:p-5 p-3 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            a
                          </div>
                          <p className="text-gray-100 lg:text-lg text-base leading-relaxed flex-1 pt-1">
                            When, after &apos;X&apos; has obtained &apos;Line clear&apos; from &apos;Y&apos;, he finds it necessary, for any cause to cancel &apos;Line clear&apos;, he shall recover the PLCT from the Driver and call &apos;Y&apos;&apos;s attention.
                          </p>
                        </div>
                      </div>

                      {/* Point b */}
                      <div className="group relative bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl lg:p-5 p-3 hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            b
                          </div>
                          <p className="text-gray-100 lg:text-lg text-base leading-relaxed flex-1 pt-1">
                            If &apos;Line clear&apos; is cancelled due to the train having been detained, the PLCT shall be cancelled and the Driver&apos;s copy of T/C1425 or T/D1425 attached to the record copy.
                          </p>
                        </div>
                      </div>

                      {/* Point c */}
                      <div className="group relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl lg:p-5 p-3 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            c
                          </div>
                          <p className="text-gray-100 lg:text-lg text-base leading-relaxed flex-1 pt-1">
                            The Station Masters at &apos;X&apos; and &apos;Y&apos; shall then make entries in the D column of T/A.1425 / T/B.1425.
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

export default BWMAnnexurePage5B