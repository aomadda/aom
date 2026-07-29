"use client"
import React from 'react'

const BWMPartAPage29: React.FC = () => {
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
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER IV
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-2">BWMS(T)- PART-A 29</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-blue-300 mb-4">CAUTION ORDERS</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-8 py-6 lg:px-8 px-6 rounded-xl border border-blue-400/20">
              <div className="text-gray-200 lg:text-lg text-base leading-relaxed space-y-6">
                <div className="text-center mb-8">
                  <h4 className="lg:text-2xl text-xl font-bold text-blue-300 mb-4">4.1. Caution order (G.R. 4.09):</h4>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">a)</span> Whenever, in consequence of the line being under repair or for any other reason, special precautions are necessary, a Caution Order detailing the kilometers between which such precautions are necessary, the reasons for taking such precautions, and the speed at which a train shall travel, shall be handed over to the Driver at the stopping station immediately short of the place where such precautions are necessary, or at such other stations and in such manner, as prescribed under Special Instructions.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">b)</span> Sub-rule (1) does not apply in the case of long continued repairs when fixed signals are provided at an adequate distance short of such place and have been notified to the running staff concerned.
                  </p>
                </div>

                <div>
                  <p>
                    <span className="font-semibold text-blue-300">c)</span> The Caution Order referred to in sub-rule (1) shall be on white paper with green font and be made out and signed in full.
                  </p>
                  <p className="mt-4">
                    Provided that as a temporary measure the Caution Order may be on white paper with a green band running diagonally across the form.
                  </p>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4 mt-6">
                  <p className="text-yellow-200 font-medium">
                    <span className="font-semibold text-yellow-300">Note:</span> See Appendix I to G&SR for Special Instructions regarding issue of Caution Orders.
                  </p>
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

export default BWMPartAPage29