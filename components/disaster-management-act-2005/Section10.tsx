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
    text: 'The National Executive Committee shall assist the National Authority in the discharge of its functions and have the responsibility for implementing the policies and plans of the National Authority and ensure the compliance of directions issued by the Central Government for the purpose of disaster management in the country.',
  },
  {
    num: '2',
    text: 'Without prejudice to the generality of the provisions contained in sub-section (1), the National Executive Committee may—',
    subItems: [
      { label: 'a', text: 'act as the coordinating and monitoring body for disaster management;' },
      { label: 'b', text: 'prepare the National Plan to be approved by the National Authority;' },
      { label: 'c', text: 'coordinate and monitor the implementation of the National Policy;' },
      {
        label: 'd',
        text: 'lay down guidelines for preparing disaster management plans by different Ministries or Departments of the Government of India and the State Authorities;',
      },
      {
        label: 'e',
        text: 'provide necessary technical assistance to the State Governments and the State Authorities for preparing their disaster management plans in accordance with the guidelines laid down by the National Authority;',
      },
      {
        label: 'f',
        text: 'monitor the implementation of the National Plan and the plans prepared by the Ministries or Departments of the Government of India;',
      },
      {
        label: 'g',
        text: 'monitor the implementation of the guidelines laid down by the National Authority for integrating of measures for prevention of disasters and mitigation by the Ministries or Departments in their development plans and projects;',
      },
      {
        label: 'h',
        text: 'monitor, coordinate and give directions regarding the mitigation and preparedness measures to be taken by different Ministries or Departments and agencies of the Government;',
      },
      {
        label: 'i',
        text: 'evaluate the preparedness at all governmental levels for the purpose of responding to any threatening disaster situation or disaster and give directions, where necessary, for enhancing such preparedness;',
      },
      {
        label: 'j',
        text: 'plan and coordinate specialised training programme for disaster management for different levels of officers, employees and voluntary rescue workers;',
      },
      {
        label: 'k',
        text: 'coordinate response in the event of any threatening disaster situation or disaster;',
      },
      {
        label: 'l',
        text: 'lay down guidelines for, or give directions to, the concerned Ministries or Departments of the Government of India, the State Governments and the State Authorities regarding measures to be taken by them in response to any threatening disaster situation or disaster;',
      },
      {
        label: 'm',
        text: 'require any department or agency of the Government to make available to the National Authority or State Authorities such men or material resources as are available with it for the purposes of emergency response, rescue and relief;',
      },
      {
        label: 'n',
        text: 'advise, assist and coordinate the activities of the Ministries or Departments of the Government of India, State Authorities, statutory bodies, other governmental or non-governmental organisations and others engaged in disaster management;',
      },
      {
        label: 'o',
        text: 'provide necessary technical assistance or give advice to the State Authorities and District Authorities for carrying out their functions under this Act;',
      },
      {
        label: 'p',
        text: 'promote general education and awareness in relation to disaster management; and',
      },
      {
        label: 'q',
        text: 'perform such other functions as the National Authority may require it to perform.',
      },
    ],
  },
]

const Section10 = () => {
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

            {/* Powers and functions of National Executive Committee */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                10
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Powers and functions of National Executive Committee</span>
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

export default Section10
