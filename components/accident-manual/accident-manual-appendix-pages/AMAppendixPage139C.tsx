"use client"
import React from 'react'

const AMAppendixPage139C = () => {
  const equipmentTypes = [
    { number: 1, content: 'Scale- I medical equipments (MRV) are available at nominated stations mentioned in working time table.' },
    { number: 2, content: 'POMKA (Portable Medical Kit for Accidents) available in all health units, poly clinics, sub-divisional, divisional and zonal hospitals.' },
    { number: 3, content: 'Scale-II medical equipments (ARME) are available at specified stations in boxes mentioned in working time table.' },
    { number: 4, content: 'First Aid boxes are provided with Station Masters, Guards of passenger carrying train Guards, workshops, marshalling yards, loco sheds and C&W depots.' },
    { number: 5, content: 'Special First Aid boxes are provided in all long distance Super fast, Shatabdi, Rajdhani expresses, Dy.SS (Commercial), AC coaches of some of nominated trains.' },
    { number: 6, content: 'First Aid boxes for Gangmen.' },
    { number: 7, content: 'First aid boxes available with Station Masters and Guards of passenger carrying trains are to be inspected by DMO once in a month.' },
    { number: 8, content: 'Keys of the first aid boxes for locations such as stations, marshalling yards, workshops, loco sheds, carriage and wagon depots etc, are kept with the supervisors on duty.' },
    { number: 9, content: 'The first aid boxes with guards of train carrying passengers will have no keys.' }
  ]

  const utilizationItems = [
    {
      letter: 'a',
      title: 'Splints',
      description: 'These are used to immobilize and support the fractured limbs.'
    },
    {
      letter: 'b',
      title: 'Roller Bandages',
      description: 'These are used to retain dressings and splints in position'
    },
    {
      letter: 'c',
      title: 'Triangular Bandage',
      description: 'To retain dressings and splints in position and to immobilize the fractures. To support an injured part or in the form of slings. To control bleeding. To reduce or prevent swelling. Mainly used as bandages like head bandage, chest bandage, shoulder bandage, elbow bandage, hand bandage, hip bandage, foot bandage etc. It is also used as slings like arm sling, triangular sling and cuff and collar sling.'
    },
    {
      letter: 'd',
      title: 'Tourniquet / Rubber Bandage',
      description: 'It is used to stop bleeding and to stop spreading of poison in case of snake bites. It is used only for hands and legs. It is to be released at regular interval.'
    },
    {
      letter: 'e',
      title: 'Cotton Wool',
      description: 'It is used to clean/pad the wounds. It is also used to absorb discharges when there is a wound.'
    },
    {
      letter: 'f',
      title: 'Safety Pins',
      description: 'It is used when Triangular bandages are used for the injured.'
    },
    {
      letter: 'g',
      title: 'Adhesive Dressing',
      description: 'It is used for minor and superficial wounds only.'
    },
    {
      letter: 'h',
      title: 'Paracetamol Tab',
      description: 'These are used to relieve minor pains.'
    },
    {
      letter: 'i',
      title: 'Diazepam Tab',
      description: 'It is a anti-anxiety medication which is used to make the injured person calm to prevent panic'
    },
    {
      letter: 'j',
      title: 'Antiseptic Cream',
      description: 'It is used to minimize or prevent infection to wounds.'
    },
    {
      letter: 'k',
      title: 'Injury Card',
      description: 'It is for maintaining the account of the first aid box items.'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">APPENDIX – II</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              FIRST AID
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
                      <span className="text-white font-bold lg:text-lg text-base">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      TYPES OF ACCIDENT RELIEF MEDICAL EQUIPMENT
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* Introduction */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                    <p className="text-gray-200 leading-relaxed text-center text-lg">
                      With a view to provide prompt medical aid, the following types of accident relief medical equipments are provided on the railways:
                    </p>
                  </div>

                  {/* Equipment Types */}
                  <div className="grid lg:grid-cols-1 gap-4">
                    {equipmentTypes.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-lg">{item.number}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-200 leading-relaxed font-medium">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Special Note for Item 5 */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-amber-400/20 p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-amber-300 text-lg mb-2">Special Note</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          This box contains 49 items and this is to be utilized for giving medical aid to the passengers by a doctor only.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Utilization Section Header */}
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="lg:text-2xl text-xl font-bold text-purple-300">3.1 Utilization of contents of First Aid Box</h3>
                  </div>

                  {/* Utilization Items */}
                  <div className="grid lg:grid-cols-1 gap-4">
                    {utilizationItems.map((item, index) => (
                      <div
                        key={index}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 p-3 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-lg uppercase">{item.letter}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-lg mb-3">
                              {item.title}
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default AMAppendixPage139C