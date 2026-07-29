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
    text: 'The State Executive Committee shall have the responsibility for implementing the National Plan and State Plan and act as the coordinating and monitoring body for management of disaster in the State.',
  },
  {
    num: '2',
    text: 'Without prejudice to the generality of the provisions of sub-section (1), the State Executive Committee may—',
    subItems: [
      {
        label: 'a',
        text: 'coordinate and monitor the implementation of the National Policy, the National Plan and the State Plan;',
      },
      {
        label: 'b',
        text: 'examine the vulnerability of different parts of the State to different forms of disasters and specify measures to be taken for their prevention or mitigation;',
      },
      {
        label: 'c',
        text: 'lay down guidelines for preparation of disaster management plans by the departments of the Government of the State and the District Authorities;',
      },
      {
        label: 'd',
        text: 'monitor the implementation of disaster management plans prepared by the departments of the Government of the State and District Authorities;',
      },
      {
        label: 'e',
        text: 'monitor the implementation of the guidelines laid down by the State Authority for integrating of measures for prevention of disasters and mitigation by the departments in their development plans and projects;',
      },
      {
        label: 'f',
        text: 'evaluate preparedness at all governmental or non-governmental levels to respond to any threatening disaster situation or disaster and give directions, where necessary, for enhancing such preparedness;',
      },
      {
        label: 'g',
        text: 'coordinate response in the event of any threatening disaster situation or disaster;',
      },
      {
        label: 'h',
        text: 'give directions to any Department of the Government of the State or any other authority or body in the State regarding actions to be taken in response to any threatening disaster situation or disaster;',
      },
      {
        label: 'i',
        text: 'promote general education, awareness and community training in regard to the forms of disasters to which different parts of the State are vulnerable and the measures that may be taken by such community to prevent the disaster, mitigate and respond to such disaster;',
      },
      {
        label: 'j',
        text: 'advise, assist and coordinate the activities of the Departments of the Government of the State, District Authorities, statutory bodies and other governmental and non-governmental organisations engaged in disaster management;',
      },
      {
        label: 'k',
        text: 'provide necessary technical assistance or give advice to District Authorities and local authorities for carrying out their functions effectively;',
      },
      {
        label: 'l',
        text: 'advise the State Government regarding all financial matters in relation to disaster management;',
      },
      {
        label: 'm',
        text: 'examine the construction, in any local area in the State and, if it is of the opinion that the standards laid for such construction for the prevention of disaster is not being or has not been followed, may direct the District Authority or the local authority, as the case may be, to take such action as may be necessary to secure compliance of such standards;',
      },
      {
        label: 'n',
        text: 'provide information to the National Authority relating to different aspects of disaster management;',
      },
      {
        label: 'o',
        text: 'lay down, review and update State level response plans and guidelines and ensure that the district level plans are prepared, reviewed and updated;',
      },
      {
        label: 'p',
        text: 'ensure that communication systems are in order and the disaster management drills are carried out periodically;',
      },
      {
        label: 'q',
        text: 'perform such other functions as may be assigned to it by the State Authority or as it may consider necessary.',
      },
    ],
  },
]

const Section22 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER III</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">STATE DISASTER MANAGEMENT AUTHORITY</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* Functions of the State Executive Committee */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                22
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Functions of the State Executive Committee</span>
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

export default Section22
