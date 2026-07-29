'use client'
import React from 'react'
import { 
  Scale,
  MessageSquare,
  BookOpen
} from 'lucide-react'

const IRACT1989Section161 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XV</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Penalties and Offences</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 161 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                161. Negligently crossing unmanned level crossing
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex-1 space-y-4">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        If any person driving or leading a vehicle is negligent in crossing an unmanned level crossing, he shall be punishable with imprisonment which may extend to one year.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-semibold">
                        Explanation : For the purposes of this section, &quot; negligence&quot; in relation to any person driving or leading a vehicle in crossing an unmanned level crossing means the crossing of such level crossing by such person-
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            a
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            without stopping or caring to stop the vehicle near such level crossing to observe whether any approaching rolling stock is in sight, or
                          </p>
                        </div>
                        <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            b
                          </span>
                          <p className="text-gray-200 lg:text-base text-sm leading-relaxed pt-1">
                            even while an approaching rolling stock is in sight.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-start gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-300 shrink-0 mt-1" />
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3 ml-9">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 161 lays down the punishment for any person negligently driving or leading a vehicle across in unmanned level crossing.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed font-semibold">
                        Loss due to negligence burden to disapprove negligence lies on bailee.- It is well settled that in cases governed by Secs. 152 and 152 Contract Act the loss or damages of goods entrusted to a bailee is prima facia evidence of negligence and therefore the burden to disapprove negligence lies on the bailee. The bailee has to prove that he exercised due care and was not negligent.
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

export default IRACT1989Section161