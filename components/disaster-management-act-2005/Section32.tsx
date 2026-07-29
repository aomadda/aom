'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const subItems = [
  {
    label: 'a',
    text: 'prepare a disaster management plan setting out the following, namely:—',
    subItems: [
      {
        label: 'i',
        text: 'provisions for prevention and mitigation measures as provided for in the District Plan and as is assigned to the department or agency concerned;',
      },
      {
        label: 'ii',
        text: 'provisions for taking measures relating to capacity-building and preparedness as laid down in the District Plan;',
      },
      {
        label: 'iii',
        text: 'the response plans and procedures, in the event of, any threatening disaster situation or disaster;',
      },
    ],
  },
  {
    label: 'b',
    text: 'coordinate the preparation and the implementation of its plan with those of the other organisations at the district level including local authority, communities and other stakeholders;',
  },
  {
    label: 'c',
    text: 'regularly review and update the plan; and',
  },
  {
    label: 'd',
    text: 'submit a copy of its disaster management plan, and of any amendment thereto, to the District Authority.',
  },
]

const Section32 = () => {
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

            {/* Plans by different authorities at district level and their implementation */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                32
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Plans by different authorities at district level and their implementation</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                    <span className="font-semibold text-cyan-200">
                      Every office of the Government of India and of the State Government at the district level and the local authorities shall, subject to the supervision of the District Authority,—
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

export default Section32
