'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const badgeGradients = [
  'from-blue-500 to-cyan-600 ring-blue-400/50',
  'from-cyan-500 to-blue-600 ring-cyan-400/50',
  'from-purple-500 to-pink-600 ring-purple-400/50',
  'from-pink-500 to-orange-600 ring-pink-400/50',
  'from-orange-500 to-pink-600 ring-orange-400/50',
  'from-blue-500 to-purple-600 ring-blue-400/50',
  'from-cyan-500 to-purple-600 ring-cyan-400/50',
]

const subsections = [
  {
    num: '1',
    text: 'There shall be a plan for disaster management for every district of the State.',
  },
  {
    num: '2',
    text: 'The District Plan shall be prepared by the District Authority, after consultation with the local authorities and having regard to the National Plan and the State Plan, to be approved by the State Authority.',
  },
  {
    num: '3',
    text: 'The District Plan shall include—',
    subItems: [
      {
        label: 'a',
        text: 'the areas in the district vulnerable to different forms of disasters;',
      },
      {
        label: 'b',
        text: 'the measures to be taken, for prevention and mitigation of disaster, by the Departments of the Government at the district level and local authorities in the district;',
      },
      {
        label: 'c',
        text: 'the capacity-building and preparedness measures required to be taken by the Departments of the Government at the district level and the local authorities in the district to respond to any threatening disaster situation or disaster;',
      },
      {
        label: 'd',
        text: 'the response plans and procedures, in the event of a disaster, providing for—',
        subItems: [
          {
            label: 'i',
            text: 'allocation of responsibilities to the Departments of the Government at the district level and the local authorities in the district;',
          },
          {
            label: 'ii',
            text: 'prompt response to disaster and relief thereof;',
          },
          {
            label: 'iii',
            text: 'procurement of essential resources;',
          },
          {
            label: 'iv',
            text: 'establishment of communication links; and',
          },
          {
            label: 'v',
            text: 'the dissemination of information to the public;',
          },
        ],
      },
      {
        label: 'e',
        text: 'such other matters as may be required by the State Authority.',
      },
    ],
  },
  {
    num: '4',
    text: 'The District Plan shall be reviewed and updated annually.',
  },
  {
    num: '5',
    text: 'The copies of the District Plan referred to in sub-sections (2) and (4) shall be made available to the Departments of the Government in the district.',
  },
  {
    num: '6',
    text: 'The District Authority shall send a copy of the District Plan to the State Authority which shall forward it to the State Government.',
  },
  {
    num: '7',
    text: 'The District Authority shall, review from time to time, the implementation of the Plan and issue such instructions to different departments of the Government in the district as it may deem necessary for the implementation thereof.',
  },
]

const Section31 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER IV</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">DISTRICT DISASTER MANAGEMENT AUTHORITY</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* District Plan */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                31
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">District Plan</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  {subsections.map((item, index) => {
                    const gradient = badgeGradients[index % badgeGradients.length]
                    return (
                      <li
                        key={item.num}
                        className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                      >
                        <span
                          className={`bg-linear-to-br ${gradient} text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                        >
                          {item.num}
                        </span>
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                          <span className="font-semibold text-cyan-200">{item.text}</span>
                          {item.subItems && (
                            <ul className="mt-4 space-y-3">
                              {item.subItems.map((sub) => (
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
                                  {sub.subItems && (
                                    <ul className="mt-3 space-y-2 w-full">
                                      {sub.subItems.map((nested) => (
                                        <li
                                          key={nested.label}
                                          className="flex items-center justify-center flex-col gap-2 group/nested hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                                        >
                                          <span className="bg-linear-to-br from-purple-400/40 to-pink-500/40 text-cyan-100 lg:w-7 lg:h-7 w-6 h-6 rounded-full flex items-center justify-center font-semibold lg:text-[10px] text-[9px] shadow-md ring-1 ring-purple-400/40 shrink-0 group-hover/nested:scale-110 transition-transform">
                                            {nested.label}
                                          </span>
                                          <span className="text-gray-200 lg:text-sm text-xs leading-relaxed text-center">
                                            {nested.text}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    )
                  })}
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

export default Section31
