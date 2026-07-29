"use client"
import React from 'react'

const AMChapterPage110 = () => {  
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                </svg>
              </div>
            </div>

            <h2 className="lg:text-2xl text-xl font-bold text-indigo-300 mb-4">
              927. Particulars to be Furnished in the Special Report or Inquiry Report
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              For the following types of accidents, the details under each item must be specifically included in the Special Report or Inquiry Report:
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-3 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-8">
              {/* Section: Accidents at Level Crossings */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-1 w-full">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                        <span className="text-white">🚦</span>
                      </span>
                      <span>Accidents at Level Crossings:</span>
                    </h3>
                    <ul className="pl-5 mt-1 space-y-2 text-gray-100 lg:text-lg text-base leading-relaxed list-none">
                      <li className="flex items-start gap-3"><span className="mt-1">🚗</span><span>When road vehicles are involved with rail traffic, provide details regarding the number, position, and damage to vehicles.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">👷</span><span>State whether the gates are manned or unmanned.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">🚧</span><span>Specify if the gates have single or double leaves.</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Flat bullet points */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <ul className="space-y-3 text-gray-200 lg:text-lg text-base leading-relaxed list-none">
                  <li className="flex items-start gap-3"><span className="mt-1">🚧</span><span>Whether the gates close across both rail and road, or only across the road.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🚦</span><span>Whether the gates are protected by signals; if so, provide a description.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">📍</span><span>If not protected by signals, mention the normal position of the gates and whether they are usually kept open for road traffic.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🚧</span><span>If lifting barriers are provided, mention the same.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">💡</span><span>Whether the gates are illuminated at night, and if so, how.</span></li>
                </ul>
              </div>

              {/* Section: Description of the Scene of Occurrence */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-1 w-full">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                        <span className="text-white">🗺️</span>
                      </span>
                      <span>Description of the Scene of Occurrence:</span>
                    </h3>
                    <ul className="pl-5 mt-1 space-y-2 text-gray-100 lg:text-lg text-base leading-relaxed list-none">
                      <li className="flex items-start gap-3"><span className="mt-1">🛤️</span><span>Whether the location is on a straight or a curve.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">👁️</span><span>Length of clear view available in both directions for both road users and the Loco Pilot.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">📈</span><span>Any gradients present, from both rail and road sides.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">🚧</span><span>Whether the line is fenced or not.</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: In Case of Accidents Where a Running Train Hits Road Traffic at Level Crossings */}
              <div className="group hover:bg-white/5 py-3 lg:px-4 px-2 lg:py-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className="flex flex-col gap-3 items-center space-y-4 relative">
                  <div className="flex-1 w-full">
                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-4 flex flex-col text-center items-center gap-3">
                      <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                        <span className="text-white">🚂</span>
                      </span>
                      <span>In Case of Accidents Where a Running Train Hits Road Traffic at Level Crossings:</span>
                    </h3>
                    <ul className="pl-5 mt-1 space-y-2 text-gray-100 lg:text-lg text-base leading-relaxed list-none">
                      <li className="flex items-start gap-3"><span className="mt-1">👁️</span><span>Distance at which the level crossing becomes visible to the Loco Pilot of an approaching train from the relevant direction.</span></li>
                      <li className="flex items-start gap-3"><span className="mt-1">🛤️</span><span>Details of track visibility in the relevant direction for the approaching road user.</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Remaining flat bullet points */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 lg:p-6 py-3 lg:px-4 px-2 rounded-xl border border-blue-400/20">
                <ul className="space-y-3 text-gray-200 lg:text-lg text-base leading-relaxed list-none">
                  <li className="flex items-start gap-3"><span className="mt-1">💡</span><span>Whether the engine was fitted with an electric headlight.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🚗</span><span>Details regarding the road vehicles: whether damaged or not, their position, and if they were part of a convoy passing over the level crossing.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">👁️</span><span>The distance at which the gate is visible to the Loco Pilot of an approaching train.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">☎️</span><span>Whether the level crossing is connected by telephone to the adjacent block station.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🔴</span><span>Whether red discs are painted on the gates of the level crossing.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">⚙️</span><span>Whether the gates are opened and closed electrically, mechanically, or manually.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🚉</span><span>Whether the gates are situated at or between stations.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">🪧</span><span>Whether the level crossing is provided with road signs on road approaches.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">📢</span><span>Whether whistle boards have been provided on either side of the level crossing.</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🚦</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.1 Accidents Involving Signalling Issues</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For accidents where signalling is a key factor, consider the following points:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">🔒</span><span>Is the station interlocked?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📏</span><span>If interlocked, what is the standard of interlocking?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🕹️</span><span>Where are the Home and Outer signal levers located?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">👀</span><span>Are the signals visible from the place where they are operated? If not, are Arm and Light repeaters provided?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🔭</span><span>Is the Home signal visible from the Outer signal? If not, at what distance from the Outer signal does the Home signal become visible?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🧲</span><span>Is there any detection between the Home and Outer signals? If so, what type—electrical or mechanical?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⚙️</span><span>Are the points worked by levers at the location or from a cabin?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🔐</span><span>What method of locking the points is in use?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📍</span><span>Are the points provided with a point indicator or governed by a starting signal?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">💡</span><span>For stations with Multiple Aspect Signalling, is the Home signal visible from the Distant signal? If not, at what distance from the Distant signal does it become visible?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🖲️</span><span>If stations have Centre Panel / RRI / end panels, collect information as above, including the position of knobs, etc.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🔑</span><span>Is the relay room in double-locked condition?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🛠️</span><span>Is any S&T gear disconnected?</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📊</span><span>Analysis of events recorded by data loggers.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🚦</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.2 Loco Pilots Passing Signals at ‘ON’ & Brake Power Adequacy</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                In cases where Loco Pilots pass signals at ‘ON’ and the adequacy or efficiency of brake power is in question, the following aspects should be examined:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">🚂</span><span><b>Train Composition:</b> Number of axles and total load of the train.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📦</span><span><b>Normal Composition & Load:</b> Standard train formation and load for the section.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🛤️</span><span><b>Engine Class:</b> Type of engine used during the incident and its normal load capacity for the section.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🛑</span><span><b>Brake Details:</b> Whether brakes were working, number and braking capacity of brake vans, number of wheels braked, type of engine brakes applied, and number of wheels braked by them.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⚠️</span><span><b>Inoperative Brake Cylinders:</b> Total number of inoperative vacuum brake cylinders before the accident.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⛰️</span><span><b>Gradients:</b> Details of gradients on the section involved.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🚦</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.3 Parting of Trains Due to Coupling Gear Breakage</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                In cases where trains part due to the breakage of coupling gear, the following particulars should be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">⛰️</span><span><b>Gradient:</b> The gradient on which the train parted.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚃</span><span><b>Number of Vehicles:</b> Total number of vehicles in the train (in units).</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⚖️</span><span><b>Total Tonnage:</b> Overall tonnage of all vehicles.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🔗</span><span><b>Tonnage Behind Breakage:</b> Tonnage of vehicles behind the point of breakage.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🛠️</span><span><b>Type of Coupling:</b> Specify the type of coupling used.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🏷️</span><span><b>Manufacturer:</b> Name of the manufacturer of the coupling gear.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⏳</span><span><b>Period in Use:</b> Duration for which the coupling gear was in use.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">💨</span><span><b>Brake System:</b> Whether the train was worked with vacuum/air brake or non-vacuum system.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">↩️</span><span><b>Rollback Distance:</b> Distance by which the rear parted portion rolled back.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🛤️</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.4 Cases of Rail Fractures on Main or Running Line</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For incidents involving rail fractures on main or running lines, the following particulars must be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">📏</span><span><b>Length of Rail:</b> Specify the length of the fractured rail.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⚖️</span><span><b>Weight per Metre:</b> Mention the weight of the rail per metre.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🏷️</span><span><b>Brand & Stamp Marks:</b> Record the brand and any stamp marks present on the rail.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🛏️</span><span><b>Distance Between Sleepers:</b> Note the centre-to-centre distances of the sleepers on either side of the breakage, and from each to the next sleeper.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📅</span><span><b>Date Laid:</b> State the probable date when the broken rail was laid.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚂</span><span><b>Heaviest Engine:</b> Indicate the heaviest class of engine using the rail.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🗺️</span><span><b>Track & Ballast Details:</b> Provide information about the rail&apos;s position, ballast description, track curvature, etc.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📝</span><span><b>Sketch/Blueprint:</b> Attach a full-size sketch (blueprint) showing the position of the fracture, including a section of the worn-out rail and the profile of a new rail of the same section to indicate wear.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🛞</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.5 Cases of Fractures of Axles of Engines / Vehicles</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For incidents involving fractures of axles in engines or vehicles, the following particulars should be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">📝</span><span><b>Drawing/Sketch:</b> Provide a drawing or sketch showing the position of the fracture.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📍</span><span><b>Position & Nature:</b> Describe the position and nature of the fracture.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🏷️</span><span><b>Axle Stamps:</b> Record stamps on the axle showing manufacturer’s name, contract number, cast number, steel name, date, etc.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚗</span><span><b>Vehicle Axle:</b> If a vehicle axle, mention the diameter of the broken journal.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚂</span><span><b>Engine Axle:</b> If an engine axle, specify the kilometreage run.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📅</span><span><b>Date of Issue:</b> State the date of issue.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🪛</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.6 Accidents Attributable to Breakage of Journals of Vehicles</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For accidents caused by the breakage of journals of vehicles, the following particulars should be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">📅</span><span><b>Last POH Date:</b> The date of the last Periodic Overhaul (POH) of the vehicle.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">⚖️</span><span><b>Tare Weight:</b> The tare (empty) weight of the vehicle.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚚</span><span><b>Carrying Capacity:</b> The maximum carrying capacity of the vehicle.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🚨</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.7 Public Knocked Down or Run Over by Trains or Vehicles</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For incidents where a member of the public is knocked down or run over by trains or vehicles, the following particulars should be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">🚦</span><span><b>Accident Site:</b> Whether the site of the accident is a level crossing.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">📍</span><span><b>Nearest Level Crossing:</b> If not at a level crossing, mention the nearest level crossing.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">👷</span><span><b>Level Crossing Status:</b> Whether the level crossing is manned or unmanned.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">👀</span><span><b>Noticed by Loco Pilot:</b> Whether the accident was noticed by the Loco Pilot.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚆</span><span><b>Brake System:</b> Whether the train was worked with vacuum/air brake or non-vacuum.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">💡</span><span><b>Engine Headlight:</b> Whether the engine was fitted with a headlight and if it was in working order.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🪧</span><span><b>Fencing Details:</b> Particulars of fencing at the site of the accident.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🎺</span><span><b>Whistling:</b> Whether the Loco Pilot was whistling continuously.</span></li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="flex flex-col text-center items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
                  <span className="text-white text-2xl">🚉</span>
                </span>
                <h3 className="lg:text-2xl text-xl font-bold text-white">927.8 Terminal Stations – Train Running into Buffer End</h3>
              </div>
              <p className="text-gray-200 mb-4 lg:text-lg text-base">
                For incidents at terminal stations where a train runs into the buffer end, the following particulars should be included in the report:
              </p>
              <ul className="space-y-3 text-gray-100 lg:text-lg text-base leading-relaxed list-none pl-0">
                <li className="flex items-start gap-3"><span className="mt-1">🚦</span><span><b>Fixed Stop Signals:</b> Details and location of fixed stop signals.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">💧</span><span><b>Hydraulic Buffer Stop:</b> Whether a hydraulic buffer stop is provided.</span></li>
                <li className="flex items-start gap-3"><span className="mt-1">🚪</span>
                  <span>
                    <b>Persons Falling Out of Trains:</b> For accidents involving persons falling out of trains, include:
                    <ul className="pl-0 mt-1 space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="mt-1">🛤️</span><span>Description, type, and number of the carriage.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-1">🪟</span><span>Whether the person fell through the window or doorway.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-1">🔒</span><span>If through the doorway, the condition of the window/door and its fastenings.</span></li>
                      <li className="flex items-start gap-2"><span className="mt-1">⚠️</span><span>Whether warning notices were exhibited.</span></li>
                    </ul>
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-indigo-200 mb-2 flex items-center gap-2"><span>📝</span> <span>Notes:</span></h4>
                <ul className="space-y-2 text-gray-200 lg:text-lg text-base leading-relaxed list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">👤</span>
                    <span>
                      <b>Person’s Statement:</b> If a person falls out of a train, their statement should be obtained. If not possible immediately due to injuries or other reasons, obtain statements from witnesses on the train. If witness statements are also not available, obtain the person’s statement as soon as possible through hospital authorities or Railway Police.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🪟</span>
                    <span>
                      <b>Falling Shutters:</b> For accidents involving falling shutters, provide the condition of the shutter and whether a warning notice was exhibited.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🔥</span>
                    <span>
                      <b>Fire in Passenger Coach:</b> Examine battery boxes under the coach to check if the fire originated from them.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🚄</span>
                    <span>
                      <b>Collisions:</b> In all cases of actual collision between running trains or with vehicles, mention the actual length of the trains and vehicles involved.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚰️</span>
                    <span>
                      <b>Inquest Proceedings:</b> For deaths where an inquest is held by police, the Divisional Officer must obtain the inquest proceedings and indicate the verdict in the report.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🆘</span>
                    <span>
                      <b>Application for Assistance:</b> If assistance was requested, the report should include:
                      <ul className="pl-0 mt-1 space-y-1 list-none">
                        <li className="flex items-start gap-2"><span className="mt-1">⏰</span><span>Time and person making the application.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">🏢</span><span>Station and means by which application was sent.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">📝</span><span>Details of assistance requested.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">📩</span><span>Time station received the application.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">🔄</span><span>Action taken by the station.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">🚑</span><span>Time of arrival of assistance.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">📦</span><span>Details of assistance received.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">⏳</span><span>Reasons for any undue delay in receiving assistance.</span></li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚠️</span>
                    <span>
                      <b>Averted Collisions:</b> The exact distance by which collision was averted should be mentioned in the inquiry.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">🚦</span>
                    <span>
                      <b>Level Crossing Accidents:</b> If a running train runs into road traffic at level crossings, include:
                      <ul className="pl-0 mt-1 space-y-1 list-none">
                        <li className="flex items-start gap-2"><span className="mt-1">📏</span><span>Distance at which the level crossing becomes visible to the Loco Pilot from the relevant direction.</span></li>
                        <li className="flex items-start gap-2"><span className="mt-1">👁️</span><span>Details of track visibility for the approaching road user.</span></li>
                      </ul>
                    </span>
                  </li>
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

export default AMChapterPage110