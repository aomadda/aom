"use client"
import React from 'react'

const AMAppendixPage145B = () => {
  const definitions = [
    {
      letter: 'a',
      term: 'Fracture',
      description: 'is breakage, crack / bend of a bone.'
    },
    {
      letter: 'b',
      term: 'Dislocation',
      description: 'is displacement of one or more bones from joint.'
    },
    {
      letter: 'c',
      term: 'Sprain',
      description: 'is wrenching tearing of cartilage near a movable joint.'
    },
    {
      letter: 'd',
      term: 'Strain',
      description: 'is over lapping of muscles at a particular place.'
    },
    {
      letter: 'e',
      term: 'Cramp',
      description: 'is sudden painful involuntary contraction of voluntary muscles.'
    }
  ]

  const fractureCauses = [
    'Direct force',
    'indirect force',
    'muscular contraction'
  ]

  const fractureSymptoms = [
    'Pain',
    'Swelling',
    'Loss of power',
    'Deformity (change in shape or size)',
    'Tenderness (sever pain by gentle touch)'
  ]

  const fractureTypes = [
    {
      letter: 'a',
      type: 'Simple Fracture',
      description: 'means the broken ends of the bone do not come out by opening the skin and thus remain inside only.'
    },
    {
      letter: 'b',
      type: 'Compound Fracture',
      description: 'means the broken ends of the bone come out by opening the skin and the fractured bone is in contact with outside air as a result of an injury.'
    },
    {
      letter: 'c',
      type: 'Complicated Fracture',
      description: 'means the fractured bone damages an important internal organ like the brain, a major blood vessel, the spinal cord, lungs, lever, spleen etc.'
    }
  ]

  const fractureTreatment = [
    {
      letter: 'a',
      description: 'Immobalise and support the affected part/limb by means of Splints, Bandages/Slings etc.'
    },
    {
      letter: 'b',
      description: 'It is important to immobilize the area both above and below the injured bone.'
    },
    {
      letter: 'c',
      description: 'Give pain relievers and treat for shock, if necessary.'
    },
    {
      letter: 'd',
      description: 'Ice packs can be applied to reduce pain and swelling (not to be placed directly over the wound.'
    },
    {
      letter: 'e',
      description: 'Arrange medical aid as early as possible.'
    }
  ]

  const sprainStrainTreatment = [
    'Place in suitable position and put firm bandage and in case of strain wet it with water frequently.',
    'Arrange medical aid.'
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                      <span className="text-white font-bold lg:text-lg text-base">4</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      FRACTURE, DISLOCATION, SPRAIN AND CRAMP
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* Definitions */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 p-3">
                    <h4 className="text-xl font-bold text-blue-300 mb-3">Definitions</h4>
                    <div className="space-y-4">
                      {definitions.map((def, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">{def.letter}</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-semibold text-lg mb-1">{def.term}</h5>
                            <p className="text-gray-300 leading-relaxed">{def.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Causes of Fractures */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">4.1</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">Causes of Fractures</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-3">
                      {fractureCauses.map((cause, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                          <p className="text-gray-200 font-semibold">{cause}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signs and Symptoms */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">4.2</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-amber-300">Signs and Symptoms for Identification of Fracture</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3"> 
                      {fractureSymptoms.map((symptom, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <p className="text-gray-200 text-center font-semibold">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types of Fractures */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">4.3</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">Types of Fractures</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {fractureTypes.map((type, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-lg">{type.letter}</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-semibold text-lg mb-2">{type.type}</h5>
                            <p className="text-gray-300 leading-relaxed">{type.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* General Treatment for Fractures */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">4.4</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-purple-300">General Treatment for Fractures</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {fractureTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-lg">{treatment.letter}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sprain and Strain Treatment */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="lg:w-16 lg:h-16 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">4.5</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">Sprain and Strain Treatment</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {sprainStrainTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-2">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>
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

export default AMAppendixPage145B