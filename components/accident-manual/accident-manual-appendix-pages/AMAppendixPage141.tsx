"use client"
import React from 'react'

const AMAppendixPage141 = () => {
  const causes = [
    'Drowning',
    'Breathing polluted air',
    'Pressing of wind pipe (Hanging, Throttling and Strangulation)',
    'Choking',
    'Pressure/weight on chest',
    'Electric shock',
    'Some poisons'
  ]

  const symptoms = [
    'Low / No Breathing',
    'Blue colour of cheeks and lips with congestion of face',
    'Swelling of veins at neck',
    'Unconsciousness'
  ]

  const treatments = [
    'Remove cause from casualty or casualty from cause.',
    'Ensure more fresh air; loosen tight clothing at chest and neck regions.',
    'Start artificial respiration without wasting time.',
    'Arrange medical aid.'
  ]

  const mouthToMouthSteps = [
    'Place the casualty on his back on a plain and hard surface.',
    'Sit by the side of the face and place the hand by the side of chin and tilt the head slightly back so that clear ventilation at throat.',
    'Cover the casualty\'s mouth with clean cloth and pinch the nostrils.',
    'Open your mouth, take fresh air, and cover the lips of the casualty with your lips and blow the air into the mouth of casualty @ 10-12 times per minute.',
    'While blowing ensure that nostrils are pinched and chest is rising. If chest is not raising it indicates some obstruction in air passage clear the air passage and restart mouth to mouth artificial respiration.',
    'This process to be continued till the normal breathing resumed or Doctor arrives which ever is earlier.'
  ]

  const cardiacSymptoms = [
    'The face is blue or pale.',
    'Heart beat and pulse at the root of Neck (carotid pulse) are not felt.'
  ]

  const cardiacMassageSteps = [
    'Place the casualty flat on his back on a hard surface and remove the cloths over the chest.',
    'Sit on the right side of the casualty',
    'Feel and mark the lower part of the sternum.',
    'Place the heel of your left hand on the marked point make sure that the palm and fingers are not in contact with chest.',
    'Place the heel of the right hand over the left hand.',
    'Push the sternum towards the spine. It can be pressed upto 1 to 1.5 inches.',
    'Adults should be given about 100 compressions per minute. For children from 2 to 10 years compressions with one hand heel will be enough, but compressions should be @ 100 times per minute. For infants below 2 years compressions with two fingers is good enough and applied at a rate of 100 times per minute.',
    'Press firmly but carefully, carelessness may cause injury to ribs.'
  ]

  const treatmentEffective = [
    'colour will become normal.',
    'Pupil will contract.',
    'Carotid pulse begins.'
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
                      <span className="text-white font-bold lg:text-lg text-base">5</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col gap-3 items-center justify-center text-center">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      ASPHYXIA (SUFFOCATION)
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
                      When lungs are not getting sufficient fresh air, important organs of the body, mainly the brain is deprived of oxygen. This is a dangerous condition called asphyxia.
                    </p>
                  </div>

                  {/* Causes */}
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.1</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">Causes</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3">
                      {causes.map((cause, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{cause}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signs and Symptoms */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-lg rounded-2xl border border-amber-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.2</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-amber-300">Signs and Symptoms of Asphyxia/Suffocation</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {symptoms.map((symptom, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{symptom}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* General Treatment */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-2xl border border-green-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.3</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-green-300">General Treatment for Asphyxia</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {treatments.map((treatment, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{treatment}</p>
                        </div>
                      ))}
                    </div>

                    {/* Notes */}
                    <div className="mt-6 lg:p-4 p-3 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="text-white font-bold mb-2">Note:</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Normal Breathing (Respiration) Rate 15 – 18 times per minute.</li>
                        <li>• Normal Heart Beat/pulse rate 72 times per minute.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Artificial Respiration Methods */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl border border-blue-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.4</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-blue-300">Methods of Artificial Respiration</h4>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl lg:p-4 p-3 border border-white/10">
                        <h5 className="text-white font-bold mb-2">Mouth to Mouth Method</h5>
                        <p className="text-gray-300 text-sm">of Artificial Respiration</p>
                      </div>
                      <div className="bg-white/5 rounded-xl lg:p-4 p-3 border border-white/10">
                        <h5 className="text-white font-bold mb-2">Mouth to Nose Method</h5>
                        <p className="text-gray-300 text-sm">of Artificial Respiration</p>
                      </div>
                    </div>
                  </div>

                  {/* Mouth to Mouth Method */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.5</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-cyan-300">Mouth to Mouth Method of Artificial Respiration</h4>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {mouthToMouthSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">{index + 1}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mouth to Nose Method */}
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-indigo-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.6</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-indigo-300">Mouth to Nose Method of Artificial Respiration</h4>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      This method will be adopted only when mouth cannot be opened due to injury inside the mouth or jaw fracture or the person suffering with fits convulsions. In this method blow the air into the nose of the victim by closing the mouth of the victim with fingers.
                    </p>
                  </div>

                  {/* Heart Stop Functioning */}
                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border border-red-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.7</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-red-300">WHEN THE HEART STOPS FUNCTIONING</h4>
                      </div>
                    </div>

                    <p className="text-gray-200 leading-relaxed mb-4">
                      If the Heart is not working the following symptoms are noticed:
                    </p>

                    <div className="space-y-3">
                      {cardiacSymptoms.map((symptom, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{symptom}</p>
                        </div>
                      ))}
                    </div>

                    {/* Additional Notes */}
                    <div className="mt-6 lg:p-4 p-3 bg-white/5 rounded-xl border border-white/10">
                      <h5 className="text-white font-bold mb-2">Note:</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Even if the casualty is breathing but the breathing is not normal, it is wise to start artificial respiration.</li>
                        <li>• Do not begin heart compression until you are sure that the heart has stopped beating.</li>
                      </ul>
                    </div>
                  </div>

                  {/* External Heart Compression */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl border border-orange-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.8</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-orange-300">External Heart Compression or External Cardiac Massage</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {cardiacMassageSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-sm">{String.fromCharCode(97 + index)}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{step}</p>
                        </div>
                      ))}

                      {/* Treatment Effective Indicators */}
                      <div className="mt-6 lg:p-4 p-3 bg-green-500/10 rounded-xl border border-green-400/20">
                        <h5 className="text-green-300 font-bold mb-3">If the treatment is effective:</h5>
                        {treatmentEffective.map((indicator, index) => (
                          <div key={index} className="flex items-start gap-3 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white font-bold text-xs">{index + 1}</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{indicator}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CPR */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-lg rounded-2xl border border-purple-400/20 lg:p-6 p-3">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">5.9</span>
                      </div>
                      <div>
                        <h4 className="lg:text-2xl text-xl font-bold text-purple-300">CPR (Cardio Pulmonary Resuscitation)</h4>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      If heart and breathing both have failed give CPR - Cardio Pulmonary Resuscitation: Give 30 heart compressions of cardiac massage, then two inflations of artificial respirations and repeat the process.
                    </p>
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

export default AMAppendixPage141