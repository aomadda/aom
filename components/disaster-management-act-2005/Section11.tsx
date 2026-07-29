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
]

const subsections = [
  {
    num: '1',
    text: 'There shall be drawn up a plan for disaster management for the whole of the country to be called the National Plan.',
  },
  {
    num: '2',
    text: 'The National Plan shall be prepared by the National Executive Committee having regard to the National Policy and in consultation with the State Governments and expert bodies or organisations in the field of disaster management to be approved by the National Authority.',
  },
  {
    num: '3',
    text: 'The National Plan shall include—',
    subItems: [
      {
        label: 'a',
        text: 'measures to be taken for the prevention of disasters, or the mitigation of their effects;',
      },
      {
        label: 'b',
        text: 'measures to be taken for the integration of mitigation measures in the development plans;',
      },
      {
        label: 'c',
        text: 'measures to be taken for preparedness and capacity building to effectively respond to any threatening disaster situations or disaster;',
      },
      {
        label: 'd',
        text: 'roles and responsibilities of different Ministries or Departments of the Government of India in respect of measures specified in clauses (a), (b) and (c).',
      },
    ],
  },
  {
    num: '4',
    text: 'The National Plan shall be reviewed and updated annually.',
  },
  {
    num: '5',
    text: 'Appropriate provisions shall be made by the Central Government for financing the measures to be carried out under the National Plan.',
  },
  {
    num: '6',
    text: 'Copies of the National Plan referred to in sub-sections (2) and (4) shall be made available to the Ministries or Departments of the Government of India and such Ministries or Departments shall draw up their own plans in accordance with the National Plan.',
  },
]

const Section11 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER II</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">THE NATIONAL DISASTER MANAGEMENT AUTHORITY</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* National Plan */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                11
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">National Plan</span>
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

export default Section11
