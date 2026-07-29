'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section66 = () => {
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
              <span>CHAPTER IX</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Carriage of goods</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 66 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    66
                  </span>
                  <span className="text-center">Powers to require statement relating to the description of goods.</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      1
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      The owner or a person having charge of any goods which are brought upon a railway for the purposes of carriage by railway, and the consignee or the endorsee of any consignment shall, on the request of any railway servant authorized in this behalf, deliver to such railway servant a statement in writing signed by such owner or person or by such consignee or endorsee, as the case may be, containing such description of the goods as would enable the railway servant to determine the rate for such carriage.
                    </span>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If such owner or person refuses or neglects to give the statement as required under Sub-section (1) and refuses to open the package containing the goods, if so required by the railway servant, it shall be open to the railway administration to refuse to accept such goods for carriage unless such owner or person pays for such carriage the highest rate for any class of goods ;
                    </span>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      3
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If the consignee or endorsee refuses or neglects to give the statement as required under the Sub-section (1) and refuses to open the package containing the goods, if so required by the railway servant, it shall be open to the railway administration to the charge in respect of the carriage of the goods the highest rate for any class of goods.
                    </span>
                  </div>

                  {/* Sub-section (4) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      4
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If the statement delivered under sub-section (1) is materially false with respect to the description of any goods to which it purports to relate, the railway administration may charge in respect of the carriage of such goods such rate, not exceeding double the highest rate for any class of goods as may be specified by the Central Government.
                    </span>
                  </div>

                  {/* Sub-section (5) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      5
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If any difference arises between a railway servant and such owner or person, the consignee or the endorsee, as the case may be in respect of the description of the goods for which a statement has been delivered under subsection 91), the railway servant may detain and examine the goods.
                    </span>
                  </div>

                  {/* Sub-section (6) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      6
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      Where any goods have been detained under sub-section 95) for examination and upon such examination it is found that the description of the goods is different from that given in he statement delivered under sub-section (1), the cost of such detention and examination shall be borne by such owner or person, the consignee or the endorsee, as the case may be, and the railway administration shall not be liable for any loss, damage or deterioration which may be caused by such detention or examination.
                    </span>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 66, sub-clause (1) provides for delivery of a statement of description of goods by owner, consignee or endorsee to a railway servant.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-clause (2) empowers the railway administration to refuse to accept the goods in the circumstances mentioned therein.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-clause (3) empowers the railway administration to charge the highest rate for any class of goods in cases mentioned therein.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-causes (4), 95) and (6) empower the railway administration to charge the rate not exceeding double the highest rate for any class of goods in case the statement delivered under sub-clause (1) is materially false and examination of goods at the cost of the owner, etc.
                      </p>
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

export default IRACT1989Section66