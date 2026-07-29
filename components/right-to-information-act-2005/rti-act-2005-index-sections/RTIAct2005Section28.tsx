'use client'
import React from 'react'
import { 
  Scale,
  Settings
} from 'lucide-react'

const RTIAct2005Section28 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RIGHT TO INFORMATION ACT 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Power to make rules by competent authority Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                28. Power to make rules by competent authority
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  
                  {/* Sub-section (1) */}
                  <div className="group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-cyan-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-cyan-300 to-blue-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">1</span>
                      <p className="text-gray-200 lg:text-lg text-base leading-relaxed w-full text-left">
                        The competent authority may, by notification in the Official Gazette, make rules to carry out the provisions of this Act.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="group relative overflow-hidden rounded-xl border border-blue-300/30 bg-white/10 p-4 lg:p-5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-blue-500/20">
                    <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-blue-300 to-cyan-400"></div>
                    <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                      <span className="inline-flex min-w-10 justify-center rounded-full bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-bold text-white mt-0.5 shadow-md">2</span>
                      <div className="w-full text-left">
                        <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-3">
                          In particular, and without prejudice to the generality of the foregoing power, such rules may provide for all or any of the following matters, namely:—
                        </p>
                        <div className="ml-4 space-y-2 border-l border-blue-400/30 pl-4">
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">i</span>
                            the cost of the medium or print cost price of the materials to be disseminated under sub-section (4) of section 4;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">ii</span>
                            the fee payable under sub-section (1) of section 6;
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-9 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:px-2 sm:text-xs mr-2">iii</span>
                            the fee payable under sub-section (1) of section 7; and
                          </p>
                          <p className="text-gray-300 lg:text-base text-sm leading-relaxed">
                            <span className="inline-flex min-w-8 justify-center rounded-full bg-blue-500/20 px-1.5 py-0.5 text-[11px] font-bold text-blue-200 sm:min-w-9 sm:px-2 sm:text-xs mr-2">iv</span>
                            any other matter which is required to be, or may be, prescribed.
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

export default RTIAct2005Section28
