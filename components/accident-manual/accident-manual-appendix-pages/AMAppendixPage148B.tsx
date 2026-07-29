"use client"
import React from 'react'

const AMAppendixPage148B = () => {
  const sectionContent = [
    {
      number: 1,
      title: "Temporary Entry - Obstruction Removal",
      content: "Where in the opinion of a Railway Administration",
      subsections: [
        "a. there is imminent danger that any tree, post or structure may fall on the railway so as to obstruct the movement of rolling stock; or",
        "b. any tree, post, structure or light obstructs the view of any signal provided for movement of rolling stock; or",
        "c. any tree, post or structure obstructs any telephone or telegraph line maintained by it, it may take such steps as may be necessary to avert such danger or remove such obstruction and submit a report thereof to the Central Government in such manner and within such time as may be prescribed."
      ]
    },
    {
      number: 2,
      title: "Temporary Entry - Repair and Prevention of Accidents",
      content: "Where in the opinion of a railway administration",
      subsections: [
        "a. a slip or accident has occurred ; or",
        "b. there is apprehension of any slip or accident to any cutting, embankment or other work on a railway, it may enter upon any lands adjoining the railway and do all such works as may be necessary for the purpose of repairing or preventing such slip or accident and submit a report thereof to Central Government in such manner and within such time as may be prescribed."
      ]
    },
    {
      number: 3,
      title: "Government Oversight and Control",
      content: "The Central Government may, after considering the report under sub-section (1) or sub-section (2), in the interest of public safety, by order, direct the railway administration that further action under sub-section (1) or sub-section (2) shall be stopped or the same shall be subject to such conditions as may be specified in that order.."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">SECTION III</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              TEMPORARY ENTRY UPON LAND TO REMOVE OBSTRUCTION, TO REPAIR OR TO PREVENT ACCIDENT
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Main Header */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      SECTIONS RELATING TO CONSTRUCTION AND MAINTENANCE OF WORKS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Subsections Content */}
              <div className="space-y-6">
                {sectionContent.map((section, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20 hover:border-blue-400/30 transition-all duration-300">
                    <div className="space-y-4">
                      {/* Section Header */}
                      <div className="flex flex-col items-center lg:gap-4 gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white font-bold text-lg">({section.number})</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="lg:text-2xl text-xl font-bold text-blue-300 mb-2 text-center">{section.title}</h4>
                          <p className="text-gray-200 leading-relaxed mb-4">{section.content}</p>

                          {/* Subsections */}
                          {section.subsections && (
                            <div className="space-y-2 lg:ml-4 ml-2">
                              {section.subsections.map((subsection, subIndex) => (
                                <div key={subIndex} className="flex items-start lg:gap-3 gap-2">
                                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white font-bold text-xs">{subsection.charAt(0)}</span>
                                  </div>
                                  <p className="text-gray-300 leading-relaxed">{subsection.substring(2)}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default AMAppendixPage148B