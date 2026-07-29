"use client"
import React from 'react'

const BWMPartAPage32: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER - V
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">5.6 &apos;Stop and examine train&apos; signal</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Point A */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">a</span>
                    </div>
                    
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-blue-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      
                      <h3 className="text-xl font-semibold text-blue-300">Station Master at &apos;X&apos; - Forward Action</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      When the Station Master at &apos;X&apos; observes anything unusual (other than the Tail lamp or Tail board missing) on a train during its passage through his station, such as goods falling off, a vehicle on fire, broken axle or coupling etc., rendering it necessary to stop such trains at the next station, the &apos;Stop and examine train&apos; signal shall be sent to &apos;Y&apos;, the station in advance intimating the nature of the irregularity observed. The Station Master at &apos;Y&apos; shall acknowledge this signal by repeating it. He shall examine the train on arrival, stopping run through trains out of course for the purpose and take remedial action. On ensuring that the line is clear, he shall send to the station &apos;X&apos; the &apos;Train out of block section&apos; signal, which will be an intimation that all is right.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Point B */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl lg:p-8 py-6 lg:px-8 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="lg:w-14 lg:h-14 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">b</span>
                    </div>
                    
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 lg:p-6 py-4 px-4 rounded-xl border border-purple-400/20">
                    <div className="flex items-center gap-2 mb-3">
                      
                      <h3 className="text-xl font-semibold text-purple-300">Station Master at &apos;X&apos; - Rear Action</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      If the Station Master at &apos;X&apos; observing the unusual occurrence suspects that it would have caused damage or obstruction to the block section in rear, he shall inform the Station Master &apos;W&apos; in rear, the nature of irregularity. Both the Station Masters should issue caution orders for trains entering the block section until it is confirmed that all is right.
                    </p>
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

export default BWMPartAPage32