'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section106 = () => {
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
            
            {/* Section 106 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    106
                  </span>
                  <span className="text-center">Re-weighment of goods when obligatory.</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 text-center">
                      It is true that Railway Administration is not always bound to reweigh the goods. But when the railway administration had decided to impose penalty such re-weighment is obligatory. Therefore, the railway authority is bound to re-weigh the goods when asked for.
                    </p>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4 text-center">
                      A person shall not be entitled to claim compensation against railway administration for the loss, destruction, damage, deterioration or non-delivery of goods carried by railway, unless a notice thereof is served by him or on his behalf, -
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          to the railway administration to which the goods are entrusted for carriage; or
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          to the railway administration on whose railway the destination station lies, or the loss, destruction, damage or deterioration occurs, within a period of six months from the date of entrustment of the goods.
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          2
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          Any information demanded or enquiry made in writing from, or any complaint made in writing to, any of the railway administration mentioned in subsection (1) by or on behalf of the persons within the said period of six months regarding the non-delivery or delayed delivery of the goods with particulars sufficient to identify the goods shall, for the purpose of this section, be deemed to be a notice of claim for compensation.
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          3
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          A person shall not be entitled to a refund of an overcharge in respect of goods carried by railway unless a notice therefore has been served by him or on his behalf to the railway administration to which the over-charge has been paid within six months from the date of such payment or the date of delivery of such goods at the destination station, whichever is later.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 106 provides the railway administration to which and the period within which the notice of claim for compensation or refund of overcharge shall be given for loss, destruction etc. of the goods carried by railway or for overcharges.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Since the act itself provides the mode it must be held that claim under Sec. 78-B (new Sec. 106) may be preferred by sending such claim to the Chief Commercial Superintendent under a prepared letter and registered under the Indian Post Office Act. Further Sec. 142 (new Sec. 194) of the Act provides for raising statutory presumption of service if letter was properly addressed and registered.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Overcharge – Meaning of. – In common parlance. The simple meaning of &quot;overcharge&quot; is anything charged in excess of what is actually to be charged for a particular thing.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        It must be held that when a claimant avails the statutory procedure of the Act within six months then it is sufficient compliance of sec. 78-B (new Sec. 106).
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

export default IRACT1989Section106
