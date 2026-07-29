"use client"
import React from 'react'

const AMChapterPage9 = () => {
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
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              CHAPTER-II
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-indigo-300 mb-4">CLASSIFICATION OF ACCIDENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              For Statistical purpose, accidents have been classified under categories &apos;A&apos; to &apos;R&apos;, excluding &apos;I&apos; and &apos;O&apos; with sub divisions in each category.
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-4 lg:px-6 px-2 border border-white/20">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="text-center mb-4 relative flex flex-col gap-4 items-center justify-center">
              <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 absolute top-0 right-0">
                      <span className="text-white font-bold lg:text-lg text-base">201</span>
                    </div>
                <div className="text-center mt-16">
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">Consequential Train Accidents</h3>
                <p className="text-base lg:text-xl font-medium text-gray-200">Class and description of accidents:</p>
                </div>
              </div>

              {/* Class A - Collisions */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-red-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6">
                      <span className="bg-gradient-to-r from-red-400 to-red-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Class &apos;A&apos; -- Collisions
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 lg:p-4 p-2 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">A.1</h4>
                        <p className="text-white">Collision involving a train carrying passengers, resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to Railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">A.2</h4>
                        <p className="text-white">Collision involving a train not carrying passengers, resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to Railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">A.3</h4>
                        <p className="text-white">Collision involving a train carrying passengers, but not falling under A.1 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">A.4</h4>
                        <p className="text-white">Collision involving a train not carrying passengers, but not falling under A.2 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 p-4 rounded-lg border border-red-400/20">
                        <h4 className="text-lg font-semibold text-red-300 mb-2">A.5</h4>
                        <p className="text-white">Other collisions i.e., collisions occurring in shunting, marshalling yards, loco yards and sidings etc., but not involving a train.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class B - Fire in trains */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">    
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">B</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6">
                      <span className="bg-gradient-to-r from-orange-400 to-orange-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        </svg>
                      </span>
                      Class &apos;B&apos; -- Fire in trains
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.1</h4>
                        <p className="text-white">Fire in a train carrying passengers, resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) loss to Railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.2</h4>
                        <p className="text-white">Fire in a train not carrying passengers, resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to Railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.3</h4>
                        <p className="text-white">Fire in a train carrying passengers not falling under B1 above but resulting in</p>
                        <div className="ml-1 mt-5 space-y-3"> 
                          <p className="text-gray-200">(i) damage to Railway property is 50,000 or above and upto 2 crore, and/or</p>
                          <p className="text-gray-200">(ii) interruption to traffic is more than the &quot;threshold Value,&quot; and/or</p>
                          <p className="text-gray-200">(iii) detaching of coaching stock from the train.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.4</h4>
                        <p className="text-white">Fire in a train not carrying passengers and not falling under B.2 above, but resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) damaged to Railway property is 50,000 or above and upto 2 crore, and/or</p>
                          <p className="text-gray-200">(ii) interruption to traffic is more than the threshold value, and/or</p>
                          <p className="text-gray-200">(iii) detaching of goods stock from the train.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.5</h4>
                        <p className="text-white">Fire in a train carrying passengers but not falling under B.1 or B.3 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.6</h4>
                        <p className="text-white">Fire in a train not carrying passengers but not falling under B.2 or B.4 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 lg:p-4 p-2 rounded-lg border border-orange-400/20">
                        <h4 className="text-lg font-semibold text-orange-300 mb-2">B.7</h4>
                        <p className="text-white">Fire occurring in shunting, marshalling yards, loco yards and sidings etc., involving rolling stock but not involving a train.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <p className="text-yellow-200 font-semibold">Note:</p>
                        <p className="text-gray-200">I) in case of an inquiry by a committee into a fire accident in Railway premises or in a train leading to damage to railway property and/or booked consignments, a representative of the Railway Protection Force should also be included as a member of the committee.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class C - Train running into road traffic */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6">
                      <span className="bg-gradient-to-r from-green-400 to-green-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Class &apos;C&apos; – Train running into road traffic, and/or road traffic running into trains at level crossings.
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.1</h4>
                        <p className="text-white">Trains carrying passengers running into road traffic and/or road traffic running into such trains at manned level crossings resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property, which is more than the threshold value, and/or</p>
                          <p className="text-gray-200">(iii) interruption to traffic which is more than the threshold value.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.2</h4>
                        <p className="text-white">Trains not carrying passengers running into road traffic and/or road traffic running into such trains at manned level crossings resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property which is more than the threshold value and/or</p>
                          <p className="text-gray-200">(iii) interruption to traffic which is more than the threshold value.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.3</h4>
                        <p className="text-white">Trains carrying passengers running into road traffic and/or road traffic running into such trains at unmanned level crossings resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property which is more than the threshold value and/or</p>
                          <p className="text-gray-200">(iii) interruption to traffic is more than the threshold value.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">    
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.4</h4>
                        <p className="text-white">Trains not carrying passengers running into road traffic and/or road traffic running into such trains at unmanned level crossings resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property and/or</p>
                          <p className="text-gray-200">(iii) interruption to traffic is more than the threshold value.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.5</h4>
                        <p className="text-white">Trains carrying passengers running into road traffic and/or road traffic running into such trains at manned level crossings but not falling under C.1.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.6</h4>
                        <p className="text-white">Trains not carrying passengers running into road traffic and/or road traffic running into such trains at manned level crossings but not falling under C.2.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.7</h4>
                        <p className="text-white">Trains carrying passengers running into road traffic and/or road traffic running into such trains at unmanned level crossings but not falling under C.3</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.8</h4>
                        <p className="text-white">Trains not carrying passengers running into road traffic and/or road traffic running into such trains at unmanned level crossings but not falling under C.4.</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 lg:p-4 p-2 rounded-lg border border-green-400/20">
                        <h4 className="text-lg font-semibold text-green-300 mb-2">C.9</h4>
                        <p className="text-white">Shunting engine, with or without vehicles, or loose vehicles running into road traffic and/or road traffic running into shunting engine with or without vehicles or loose vehicles, at level crossings.</p>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 lg:p-4 p-2 rounded-lg border border-yellow-400/20">
                        <p className="text-yellow-200 font-semibold">Note:</p>
                        <p className="text-gray-200">If a road vehicle is not capable of being physically cleared off the track promptly by a single person operating it, it should be termed as road traffic for the purposes of classifying such an accident as a train accident irrespective of its mode of traction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class D - Derailments */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">D</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Class &apos;D&apos; – Derailments
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.1</h4>
                        <p className="text-white">Derailment of a train carrying passengers and resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.2</h4>
                        <p className="text-white">Derailment of a train not carrying passengers and resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property with value exceeding 2 crore, and/or</p>
                          <p className="text-gray-200">(iii) interruption of running on any important through line for at least 24 hours.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.3</h4>
                        <p className="text-white">Derailment of a train carrying passengers, but not falling under D.1 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.4</h4>
                        <p className="text-white">Derailment of a train not carrying passengers and not falling under D.2 above, but loss to railway property and/or interruption to traffic which is more than the threshold value.</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.5</h4>
                        <p className="text-white">Derailment of a train not carrying passengers and not falling either under D.2 or D.4 above.</p>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 lg:p-4 p-2 rounded-lg border border-purple-400/20">
                        <h4 className="text-lg font-semibold text-purple-300 mb-2">D.6</h4>
                        <p className="text-white">Other derailments, i.e., derailments occurring in shunting, marshalling yards, loco yards and sidings etc., but not involving a train.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Class E - Other train accidents */}
              <div className="group hover:bg-white/5 py-3 lg:px-6 px-2 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="lg:w-16 lg:h-16 w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-110 absolute top-3 right-3">
                      <span className="text-white font-bold text-xl">E</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col items-center gap-3 mt-6">
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      Class &apos;E&apos; - Other train accidents
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">E.1</h4>
                        <p className="text-white">Train running over or against any obstruction including fixed structure, but other than those included under class &apos;C&apos;, resulting in</p>
                        <div className="ml-1 mt-5 space-y-3">
                          <p className="text-gray-200">(i) loss of human life and/or grievous hurt, and/or</p>
                          <p className="text-gray-200">(ii) damage to railway property which is more than threshold value and/or</p>
                          <p className="text-gray-200">(iii) interruption to traffic which is more than the threshold value.</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 lg:p-4 p-2 rounded-lg border border-indigo-400/20">
                        <h4 className="text-lg font-semibold text-indigo-300 mb-2">E.2</h4>
                        <p className="text-white">Trains running over or against any obstruction including fixed structure but not covered under class &apos;C&apos; or &apos;E.1&apos;</p>
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

export default AMChapterPage9