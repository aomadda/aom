"use client"
import React from 'react'

const AMAppendixPage143 = () => {
  const woundTypes = [
    {
      letter: 'a',
      title: 'Contused wounds',
      description: 'are caused by blunt instruments where there is no opening. It is treated by putting ice over the wound.'
    },
    {
      letter: 'b',
      title: 'Lacerated wounds',
      description: 'are caused by irregular edges of instruments like glass pieces, metal pieces, machine injuries, animal bites and are said to occur where the edges of the wound is irregular. Clean the wound with water and pick any floating foreign body. Cover the wound with a clean cloth or apply antiseptic cream.'
    },
    {
      letter: 'c',
      title: 'Incised wounds',
      description: 'are caused by sharp edged instruments like razor / knife where the edge of wound is in a straight line. Arrest the bleeding immediately if loss of blood is profuse.'
    },
    {
      letter: 'd',
      title: 'Punctured wounds',
      description: 'are caused by sharp edged instruments like needles, nails and gun-shot wounds where the wound is more deep than wide. The wound should be covered and packed with a pad.'
    }
  ]

  const bleedingTypes = [
    'Artery Bleeding – Bright red in colour and flow in jets.',
    'Vein Bleedings – Dark red in colour and flow continuously.',
    'Capillary Bleedings – Red in colour and oozing from all parts of wound.'
  ]

  const bleedingLocations = [
    'External bleeding',
    'Internal bleeding'
  ]

  const woundDangers = [
    'It allows precious blood to escape from body.',
    'It permits harmful bacteria/virus or other injurious agents to enter into body.'
  ]

  const bleedingMethods = [
    {
      letter: 'a',
      title: 'Direct Pressure Method',
      description: 'Whenever a person, has a bleeding wound which is free from any foreign body, direct pressure method is to be used for arresting the bleeding. Clean the surroundings of the wound. Put a dressing/pad and press the wound. Bleeding will cause.'
    },
    {
      letter: 'b',
      title: 'Indirect Pressure Method',
      description: 'It is applied by two ways: By using Tourniquet bandage, By pressing Pressure Points. A Tourniquet bandage is used to stop bleeding for hands and legs only. It should be tied above the wound towards the heart in single bone area, and should be relaxed once in 15 minutes.'
    }
  ]

  const pressurePoints = [
    'Carotid pressure point on the neck on either side of voice box.',
    'Sub-clavian pressure point on the inner end of collar bone.',
    'Bronchial pressure point on the inner side of upper arm.',
    'Femoral pressure point on the thigh bone.'
  ]

  const woundTreatment = [
    { letter: 'a', description: 'Place the victim in sitting/lying position and elevate the injured part if possible.' },
    { letter: 'b', description: 'Expose the wound and clean the wound and surrounding area but do not disturb blood clot if already there.' },
    { letter: 'c', description: 'Remove any foreign bodies which are floating.' },
    { letter: 'd', description: 'Arrest bleeding by applying pressure directly on the wound by putting a pad or by the indirect method as the situation demands.' },
    { letter: 'e', description: 'Apply antiseptic cream, dressing and bandage.' },
    { letter: 'f', description: 'Immobilize the part where possible.' },
    { letter: 'g', description: 'Give pain relievers and treat for shock.' },
    { letter: 'h', description: 'Arrange medical aid.' }
  ]

  const noseBleedingTreatment = [
    { letter: 'a', description: 'Advise the victim to breath through the mouth.' },
    { letter: 'b', description: 'Place the victim near a window or against a current of air in the sitting position with the head slightly bent forward.' },
    { letter: 'c', description: 'Pinch the junction of the nose just below the hard part.' },
    { letter: 'd', description: 'If available put ice piece over the nose or a wet cloth.' },
    { letter: 'e', description: 'Warn him not to blow the nose.' },
    { letter: 'f', description: 'Do not block the nostrils.' },
    { letter: 'g', description: 'Arrange medical aid.' }
  ]

  const earBleedingTreatment = [
    { letter: 'a', description: 'Place the victim on his back.' },
    { letter: 'b', description: 'Do not block the ear passages' },
    { letter: 'c', description: 'If one ear is bleeding turn the head to the same side from which blood is coming out, and see that the affected ear is down.' },
    { letter: 'd', description: 'If both ears are bleeding, keep face upward and head little bit low for free drainage of blood and raise the legs.' },
    { letter: 'e', description: 'Do not block the ear.' },
    { letter: 'f', description: 'Arrange medical aid.' }
  ]

  const internalBleedingSymptoms = [
    'Giddiness.',
    'Skin becomes pale, cold and clammy.',
    'Pulse gets rapid but very weak.',
    'Sweating, thirsty, feels vomiting sensation.',
    'Becomes unconscious.'
  ]

  const internalBleedingTreatment = [
    'If the person is unconscious, check air-way, breathing and circulation of blood. If any failure is noticed, restore them.',
    'Lay him on his back and raise the legs by using pillow to enable the blood supply to reach the brain.',
    'If he is conscious lay him on his back and raise the legs by using pillow to enable the blood supply to the brain.',
    'Shift him to hospital as early as possible.'
  ]

  const headInjurySymptoms = [
    'Giddiness.',
    'Skin becomes pale, cold and clammy.',
    'Pulse gets rapid but very weak.',
    'Sweating, thirsty, feels vomiting sensation.',
    'Become unconscious.'
  ]

  const headInjuryTreatment = [
    'Ask the person not to blow his nose. Do not pack ear or nose.',
    'Lay the person on the affected side. Ensure tongue does not fall back.',
    'If any ear bleeding noticed, do not block the ear passage.'
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
                      <span className="text-white font-bold lg:text-lg text-base">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                      WOUNDS AND HEMORRHAGES (BLEEDINGS)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <div className="text-gray-200 lg:text-lg text-base leading-relaxed text-left mb-6 max-w-4xl mx-auto space-y-6">

                  {/* Definition */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 lg:p-6 p-3">
                    <h4 className="text-xl font-bold text-blue-300 mb-3">Definition</h4>
                    <p className="text-gray-200 leading-relaxed">
                      Wound is caused due to breakage of skin / tissue.
                    </p>
                  </div>

                  {/* Types of Wounds */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.1</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">Types of Wounds</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {woundTypes.map((wound, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-3">
                          <div className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-lg">{wound.letter}</span>
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-semibold text-lg mb-2">{wound.title}</h5>
                            <p className="text-gray-300 leading-relaxed">{wound.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types of Bleedings */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.2</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-amber-300">Types of Bleedings (Hemorrhages)</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {bleedingTypes.map((bleeding, index) => (
                        <div key={index} className="flex items-start lg:gap-3 gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{bleeding}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bleeding Location Types */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.3</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">According to the place of wound bleeding are two types</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3">
                      {bleedingLocations.map((location, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <p className="text-gray-200 text-center font-semibold">{location}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Danger of Wounds */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.4</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-purple-300">Danger of Wounds</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {woundDangers.map((danger, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{danger}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Methods to Arrest Bleeding */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.5</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">Methods to arrest Bleeding</h4>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {bleedingMethods.map((method, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-start lg:gap-4 gap-3">
                            <div className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-lg">{method.letter}</span>
                            </div>
                            <div className="flex-1">
                              <h5 className="text-white font-semibold text-lg mb-2">{method.title}</h5>
                              <p className="text-gray-300 leading-relaxed">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Pressure Points */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">c</span>
                          </div>
                          <h5 className="text-white font-semibold">Important Pressure Points</h5>
                        </div>
                        <p className="text-gray-300 mb-3">For other parts pressure points to be pressed.</p>
                        <div className="space-y-2">
                          {pressurePoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <span className="text-cyan-300 font-bold">{index + 1}.</span>
                              <p className="text-gray-300 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* General Treatment */}
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-indigo-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.6</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-indigo-300">General Treatment (First Aid) to Wounds</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {woundTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start lg:gap-4 gap-3">
                          <div className="lg:w-10 lg:h-10 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-lg">{treatment.letter}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nose Bleeding Treatment */}
                  <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-rose-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6 text-center">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl"> 
                        <span className="text-white font-bold text-xl">2.7</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-rose-300">Nose bleeding Treatment (Hemorrhage)</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {noseBleedingTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="lg:w-8 lg:h-8 w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">{treatment.letter}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ear Bleeding Treatment */}
                  <div className="bg-gradient-to-r from-lime-500/10 to-green-500/10 backdrop-blur-lg rounded-2xl border border-lime-400/20 lg:p-6 p-3">  
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-lime-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.8</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-lime-300">Ear bleeding Treatment</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {earBleedingTreatment.map((treatment, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="lg:w-8 lg:h-8 w-6 h-6 bg-gradient-to-r from-lime-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">{treatment.letter}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Internal Bleeding */}
                  <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl border border-teal-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.9</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-teal-300">Internal Bleeding</h4>
                      </div>
                    </div>

                    {/* Symptoms */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3">a) Symptoms of internal bleeding</h5>
                      <div className="space-y-2">
                        {internalBleedingSymptoms.map((symptom, index) => (
                          <div key={index} className="flex items-start lg:gap-3 gap-2">
                            <span className="text-teal-300">•</span>
                            <p className="text-gray-300 leading-relaxed">{symptom}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">b) Treatment for internal bleeding</h5>
                      <div className="space-y-3">
                        {internalBleedingTreatment.map((treatment, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-teal-300 font-bold">{index + 1}.</span>
                            <p className="text-gray-300 leading-relaxed">{treatment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Head Injury */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-400/20 lg:p-6 p-3">
                    <div className="flex items-center flex-col gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">2.10</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-orange-300">Head Injury</h4>
                      </div>
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-6">
                      As a result of head injury, blood and brain fluid may flow out of the nose, ear or mouth.
                    </p>

                    {/* Symptoms */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3">a) Symptoms</h5>
                      <div className="space-y-2">
                        {headInjurySymptoms.map((symptom, index) => (
                          <div key={index} className="flex items-start lg:gap-3 gap-2">
                            <span className="text-orange-300">•</span>
                            <p className="text-gray-300 leading-relaxed">{symptom}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Treatment */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">b) Treatment</h5>
                      <div className="space-y-3">
                        {headInjuryTreatment.map((treatment, index) => (
                          <div key={index} className="flex items-start lg:gap-3 gap-2">
                            <span className="text-orange-300 font-bold">{index + 1}.</span>
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

export default AMAppendixPage143