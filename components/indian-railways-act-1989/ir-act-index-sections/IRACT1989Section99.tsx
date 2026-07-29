'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section99 = () => {
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
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2 flex items-center justify-center gap-4">
              <span>CHAPTER XI</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Responsibilities of Railway Administration as Carriers</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 99 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    99
                  </span>
                  <span className="text-center">Responsibility of a railway administration after termination of transit. –</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        1
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        A railway administration shall be responsible as a bailee under secs. 151, 152, and 161 of the Indian Contract Act,1872 (9 if 1872), for the loss, destruction, damage, deterioration or non/delivery of any consignment up to a period of seven days after the termination of transit;
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that</p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        where the consignment is at owner&apos;s risk rate, the railway administration shall not be responsible as a bailee for such loss, destruction, damage, deterioration or non-delivery except on proof of negligence or misconduct on the part of the railway administration or of any of its servants .
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      The railway administration shall not be responsible ;in any case for the loss, destruction, damage deterioration or non-delivery of any consignment arising after the expiry of a period of seven days after the termination of transit.
                    </span>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      Notwithstanding anything contained in the foregoing provisions of this section, a railway administration shall not be responsible for the loss, destruction, damage, deterioration or non-delivery of perishable goods, animals explosives and such dangerous or other goods as may be prescribed, after the termination of transit.
                    </span>
                  </div>

                  {/* Sub-section (4) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      4
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      Nothing in the foregoing provisions of this section shall affect the liability of any person to pay any demurrage or wharfage, as the case may be, for so long as the consignment is not unloaded from the railway wagons or removed from the railway premises.
                    </span>
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

export default IRACT1989Section99
