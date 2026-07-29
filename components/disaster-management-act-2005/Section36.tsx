'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const subItems = [
  {
    label: 'a',
    text: 'take measures necessary for prevention of disasters, mitigation, preparedness and capacity-building in accordance with the guidelines laid down by the National Authority;',
  },
  {
    label: 'b',
    text: 'integrate into its development plans and projects, the measures for prevention or mitigation of disasters in accordance with the guidelines laid down by the National Authority;',
  },
  {
    label: 'c',
    text: 'respond effectively and promptly to any threatening disaster situation or disaster in accordance with the guidelines of the National Authority or the directions of the National Executive Committee in this behalf;',
  },
  {
    label: 'd',
    text: 'review the enactments administered by it, its policies, rules and regulations, with a view to incorporate therein the provisions necessary for prevention of disasters, mitigation or preparedness;',
  },
  {
    label: 'e',
    text: 'allocate funds for measures for prevention of disaster, mitigation, capacity-building and preparedness;',
  },
  {
    label: 'f',
    text: 'provide assistance to the National Authority and State Governments for—',
    subItems: [
      {
        label: 'i',
        text: 'drawing up mitigation, preparedness and response plans, capacity-building, data collection and identification and training of personnel in relation to disaster management;',
      },
      {
        label: 'ii',
        text: 'carrying out rescue and relief operations in the affected area;',
      },
      {
        label: 'iii',
        text: 'assessing the damage from any disaster;',
      },
      {
        label: 'iv',
        text: 'carrying out rehabilitation and reconstruction;',
      },
    ],
  },
  {
    label: 'g',
    text: 'make available its resources to the National Executive Committee or a State Executive Committee for the purposes of responding promptly and effectively to any threatening disaster situation or disaster, including measures for—',
    subItems: [
      {
        label: 'i',
        text: 'providing emergency communication in a vulnerable or affected area;',
      },
      {
        label: 'ii',
        text: 'transporting personnel and relief goods to and from the affected area;',
      },
      {
        label: 'iii',
        text: 'providing evacuation, rescue, temporary shelter or other immediate relief;',
      },
      {
        label: 'iv',
        text: 'setting up temporary bridges, jetties and landing places;',
      },
      {
        label: 'v',
        text: 'providing, drinking water, essential provisions, healthcare, and services in an affected area;',
      },
    ],
  },
  {
    label: 'h',
    text: 'take such other actions as it may consider necessary for disaster management.',
  },
]

const Section36 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER V</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">MEASURES BY THE GOVERNMENT</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* Responsibilities of Ministries or Departments of Government of India */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                36
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Responsibilities of Ministries or Departments of Government of India</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                    <span className="font-semibold text-cyan-200">
                      It shall be the responsibility of every Ministry or Department of the Government of India to—
                    </span>
                    <ul className="mt-4 space-y-3">
                      {subItems.map((sub) => (
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

export default Section36
