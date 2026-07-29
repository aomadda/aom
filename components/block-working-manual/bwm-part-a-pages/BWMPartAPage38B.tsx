"use client"
import React from 'react'

const BWMPartAPage38B: React.FC = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER VII
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">TESTING OF BLOCK INSTRUMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl py-4 px-8 border border-white/20">
                <h5 className="lg:text-2xl text-xl font-bold text-blue-300">7.2. Persons authorised to Test:</h5>
              </div>
            </div>

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
                      <h3 className="text-xl font-semibold text-blue-300">Authorized Officials for Testing</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Block Instruments and apparatus connected with them may only be tested by SI/ESM and other authorised officials of the S&T department. &apos;Testing&apos; signal shall not be exchanged unless the SI/ESM or other authorised official of the S & T department is at one end of the Block Section and the receipt of the &apos;testing&apos; signal shall be regarded as an intimation that the SI/ESM or other authorised official of the S&T department is present.
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
                      <h3 className="text-xl font-semibold text-purple-300">Station Master Testing on Behalf</h3>
                    </div>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Whenever any authorised person who is not competent to test the instrument is present at one end, he may request the Station Master to test the instrument on his behalf. The Station Master shall comply with such request and exchange testing signals with the Station Master at the other end. Both the Station Masters shall make necessary entries in their Train Signal Registers.
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

export default BWMPartAPage38B