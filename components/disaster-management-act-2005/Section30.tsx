'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const badgeGradients = [
  'from-blue-500 to-cyan-600 ring-blue-400/50',
  'from-cyan-500 to-blue-600 ring-cyan-400/50',
]

const subsections = [
  {
    num: '1',
    text: 'The District Authority shall act as the district planning, coordinating and implementing body for disaster management and take all measures for the purposes of disaster management in the district in accordance with the guidelines laid down by the National Authority and the State Authority.',
  },
  {
    num: '2',
    text: 'Without prejudice to the generality of the provisions of sub-section (1), the District Authority may—',
    subItems: [
      { label: 'i', text: 'prepare a disaster management plan including district response plan for the district;' },
      { label: 'ii', text: 'coordinate and monitor the implementation of the National Policy, State Policy, National Plan, State Plan and District Plan;' },
      { label: 'iii', text: 'ensure that the areas in the district vulnerable to disasters are identified and measures for the prevention of disasters and the mitigation of its effects are undertaken by the departments of the Government at the district level as well as by the local authorities;' },
      { label: 'iv', text: 'ensure that the guidelines for prevention of disasters, mitigation of its effects, preparedness and response measures as laid down by the National Authority and the State Authority are followed by all departments of the Government at the district level and the local authorities in the district;' },
      { label: 'v', text: 'give directions to different authorities at the district level and local authorities to take such other measures for the prevention or mitigation of disasters as may be necessary;' },
      { label: 'vi', text: 'lay down guidelines for prevention of disaster management plans by the department of the Government at the districts level and local authorities in the district;' },
      { label: 'vii', text: 'monitor the implementation of disaster management plans prepared by the Departments of the Government at the district level;' },
      { label: 'viii', text: 'lay down guidelines to be followed by the Departments of the Government at the district level for purposes of integration of measures for prevention of disasters and mitigation in their development plans and projects and provide necessary technical assistance therefor;' },
      { label: 'ix', text: 'monitor the implementation of measures referred to in clause (viii);' },
      { label: 'x', text: 'review the state of capabilities for responding to any disaster or threatening disaster situation in the district and give directions to the relevant departments or authorities at the district level for their up gradation as may be necessary;' },
      { label: 'xi', text: 'review the preparedness measures and give directions to the concerned departments at the district level or other concerned authorities where necessary for bringing the preparedness measures to the levels required for responding effectively to any disaster or threatening disaster situation;' },
      { label: 'xii', text: 'organise and coordinate specialised training programmes for different levels of officers, employees and voluntary rescue workers in the district;' },
      { label: 'xiii', text: 'facilitate community training and awareness programmes for prevention of disaster or mitigation with the support of local authorities, governmental and non-governmental organisations;' },
      { label: 'xiv', text: 'set up, maintain, review and upgrade the mechanism for early warnings and dissemination of proper information to public;' },
      { label: 'xv', text: 'prepare, review and update district level response plan and guidelines;' },
      { label: 'xvi', text: 'coordinate response to any threatening disaster situation or disaster;' },
      { label: 'xvii', text: 'ensure that the Departments of the Government at the district level and the local authorities prepare their response plans in accordance with the district response plan;' },
      { label: 'xviii', text: 'lay down guidelines for, or give direction to, the concerned Department of the Government at the district level or any other authorities within the local limits of the district to take measures to respond effectively to any threatening disaster situation or disaster;' },
      { label: 'xix', text: 'advise, assist and coordinate the activities of the Departments of the Government at the district level, statutory bodies and other governmental and non-governmental organisations in the district engaged in the disaster management;' },
      { label: 'xx', text: 'coordinate with, and give guidelines to, local authorities in the district to ensure that measures for the prevention or mitigation of threatening disaster situation or disaster in the district are carried out promptly and effectively;' },
      { label: 'xxi', text: 'provide necessary technical assistance or give advise to the local authorities in the district for carrying out their functions;' },
      { label: 'xxii', text: 'review development plans prepared by the Departments of the Government at the district level, statutory authorities or local authorities with a view to make necessary provisions therein for prevention of disaster or mitigation;' },
      { label: 'xxiii', text: 'examine the construction in any area in the district and, if it is of the opinion that the standards for the prevention of disaster or mitigation laid down for such construction is not being or has not been followed, may direct the concerned authority to take such action as may be necessary to secure compliance of such standards;' },
      { label: 'xxiv', text: 'identify buildings and places which could, in the event of any threatening disaster situation or disaster, be used as relief centers or camps and make arrangements for water supply and sanitation in such buildings or places;' },
      { label: 'xxv', text: 'establish stockpiles of relief and rescue materials or ensure preparedness to make such materials available at a short notice;' },
      { label: 'xxvi', text: 'provide information to the State Authority relating to different aspects of disaster management;' },
      { label: 'xxvii', text: 'encourage the involvement of non-governmental organisations and voluntary social-welfare institutions working at the grassroots level in the district for disaster management;' },
      { label: 'xxviii', text: 'ensure communication systems are in order, and disaster management drills are carried out periodically;' },
      { label: 'xxix', text: 'perform such other functions as the State Government or State Authority may assign to it or as it deems necessary for disaster management in the District.' },
    ],
  },
]

const Section30 = () => {
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

            {/* Powers and functions of District Authority */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                30
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Powers and functions of District Authority</span>
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

export default Section30
