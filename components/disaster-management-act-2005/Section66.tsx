'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const badgeGradients = [
  'from-blue-500 to-cyan-600 ring-blue-400/50',
  'from-cyan-500 to-blue-600 ring-cyan-400/50',
]

const subItems1 = [
  {
    label: 'i',
    text: 'the rent payable in respect of the premises, or if no rent is so payable, the rent payable for similar premises in the locality;',
  },
  {
    label: 'ii',
    text: 'if as consequence of the requisition of the premises the person interested is compelled to change his residence or place of business, the reasonable expenses (if any) incidental to such change:',
  },
]

const provisos1 = [
  'Provided that where any person interested being aggrieved by the amount of compensation so determined makes an application within the thirty days to the Central Government or the State Government, as the case may be, for referring the matter to an arbitrator, the amount of compensation to be paid shall be such as the arbitrator appointed in this behalf by the Central Government or the State Government, as the case may be, may determine:',
  'Provided further that where there is any dispute as to the title to receive the compensation or as to the apportionment of the amount of compensation, it shall be referred by the Central Government or the State Government, as the case may be, to an arbitrator appointed in this behalf by the Central Government or the State Government, as the case may be, for determination, and shall be determined in accordance with the decision of such arbitrator.',
]

const provisos2 = [
  'Provided that where the owner of such vehicle being aggrieved by the amount of compensation so determined makes an application within the prescribed time to the Central Government or the State Government, as the case may be, for referring the matter to an arbitrator, the amount of compensation to be paid shall be such as the arbitrator appointed in this behalf by the Central Government or the State Government, as the case may be, may determine:',
  'Provided further that where immediately before the requisitioning the vehicle or vessel was by virtue of a hire purchase agreement in the possession of a person other than the owner, the amount determined under this sub-section as the total compensation payable in respect of the requisition shall be apportioned between that person and the owner in such manner as they may agree upon, and in default of agreement, in such manner as an arbitrator appointed by the Central Government or the State Government, as the case may be, in this behalf may decide.',
]

const Section66 = () => {
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
              DISASTER MANAGEMENT ACT, 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER XI</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MISCELLANEOUS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* Payment of compensation */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                66
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Payment of compensation</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  {/* (1) */}
                  <li className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span
                      className={`bg-linear-to-br ${badgeGradients[0]} text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                    >
                      1
                    </span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                      <span className="font-semibold text-cyan-200">
                        Whenever any Committee, Authority or officer referred to in sub-section (1) of section 65, in pursuance of that section requisitions any premises, there shall be paid to the persons interested compensation the amount of which shall be determined by taking into consideration the following, namely:—
                      </span>
                      <ul className="mt-4 space-y-3">
                        {subItems1.map((sub) => (
                          <li
                            key={sub.label}
                            className="flex items-center justify-center flex-col gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                          >
                            <span className="bg-linear-to-br from-blue-400/40 to-cyan-500/40 text-cyan-100 lg:w-8 lg:h-8 w-7 h-7 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md ring-1 ring-cyan-400/40 shrink-0 group-hover/item:scale-110 transition-transform">
                              {sub.label}
                            </span>
                            <span className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                              {sub.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-4 space-y-3">
                        {provisos1.map((proviso) => (
                          <li
                            key={proviso}
                            className="flex items-center justify-center flex-col gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                          >
                            <span className="font-semibold text-cyan-200 lg:text-base text-sm leading-relaxed text-center">
                              {proviso}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <span className="font-semibold text-cyan-200 block mt-4">
                        Explanation.—In this sub-section, the expression {'\u201C'}person interested{'\u201D'} means the person who was in actual possession of the premises requisitioned under section 65 immediately before the requisition, or where no person was in such actual possession, the owner of such premises.
                      </span>
                    </div>
                  </li>

                  {/* (2) */}
                  <li className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span
                      className={`bg-linear-to-br ${badgeGradients[1]} text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                    >
                      2
                    </span>
                    <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                      <span className="font-semibold text-cyan-200">
                        Whenever any Committee, Authority or officer, referred to in sub-section (1) of section 65 in pursuance of that section requisitions any vehicle, there shall be paid to the owner thereof compensation the mount of which shall be determined by the Central Government or the State Government, as the case may be, on the basis of the fares or rates prevailing in the locality for the hire of such vehicle:
                      </span>
                      <ul className="mt-4 space-y-3">
                        {provisos2.map((proviso) => (
                          <li
                            key={proviso}
                            className="flex items-center justify-center flex-col gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                          >
                            <span className="font-semibold text-cyan-200 lg:text-base text-sm leading-relaxed text-center">
                              {proviso}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
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

export default Section66
