'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section200 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2">CHAPTER XVI</h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Miscellaneous</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 200 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    200
                  </span>
                  <span className="text-center">Repeal and saving</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          1
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          The Indian Railways Act, 1890 (9 of 1890) is hereby repealed.
                        </span>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                        <div className="flex items-center justify-center flex-col gap-3 mb-4">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5">
                            2
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center">
                            Notwithstanding the repeal of the Indian Railways Act, 1890 (9 of 1890) (herein after referred to as the repealed Act) -
                          </span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                            <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              a
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              anything done or any action taken to purported to have been done or taken (including any rule, notification inspection, order to notice made or issued, or any appointment or declaration made or any license, permission, authorization or exemption granted or any document or instrument executed or any direction given or any proceedings taken or any penalty or fine imposed) under the repealed Act shall, in so far as it is not inconsistent with the provisions of this Act, be deemed to have been done or taken under the corresponding provisions of this Act.
                            </span>
                          </div>
                          <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                            <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                              b
                            </span>
                            <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                              Any complaint made by the Railway Rates Tribunal under sub-section (1) of Sec. 41 of the repealed Act but not imposed of before the commencement of this Act and any complaint that may be made to the said Tribunal against any act or omission of a railway administration under the repealed Act shall be heard and decided by the Tribunal constituted under this Act in accordance with the provisions of Chapter VII of this Act.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          3
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          The mention of particular matters in sub-section (2) shall not be held to prejudice or affect the general application of Sec. 6 of the General Clauses Act, 1897 (10 of 1897), with regard to the effect of repeal.
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
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comment</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 200 seeks to repeal the Indian Railways Act, 1890 and saves any action taken under the repealed Act.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Distinction between &quot;repeal&quot; and &quot;amendment&quot;. – It is a matter of legislative practice to provide while enacting an amending law, that an existing provision shall be deleted and a new provision submitted. There is no real distinction between &quot;repeal&quot; and an &quot;amendment&quot;.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Prior amendments stand repealed only if it was not consistent with provision sof Central Act. – The provision of the Central Act, be given full effect and any prior amendment made by the High Court or by the State Legislature, would stand repealed only if it was not consistent with the provision of the Central Act.
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

export default IRACT1989Section200