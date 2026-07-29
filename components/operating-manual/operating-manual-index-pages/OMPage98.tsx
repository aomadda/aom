'use client'
import React from 'react'
import { 
  Eye,
  Users,
  Shield,
  Clipboard,
  Clock,
  MapPin,
  Car,
  Building,
  Wrench,
  Stethoscope,
  Moon,
  Navigation,
  Truck,
  Gauge,
  Lightbulb,
  AlertCircle,
  Calendar,
  Power,
  Train,
} from 'lucide-react'

const OMPage98 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Types of Inspections
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive classification of railway inspection types based on planning, scheduling, 
              and the units being inspected to ensure systematic safety monitoring.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Classification by Planning Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clipboard className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Classification by Planning & Scheduling
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Casual Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <Clock className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-300">Casual Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Such inspections are not planned in advance. These are done incidentally when the inspecting official gets time to do so along with the primary purpose of visit like monitoring performance of train running, block, conducting enquiry into unusual or accident etc.
                    </p>
                  </div>

                  {/* Periodical Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-cyan-500/20 p-2 rounded-full mr-3">
                        <Calendar className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-cyan-300">Periodical Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      They are done as per schedule and are planned in advance. They have to be done thoroughly going through every aspect in detail. Advance information shall be provided about the inspection so that staff keep all the necessary records and documents ready for scrutiny.
                    </p>
                  </div>

                  {/* Surprise Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
                        <AlertCircle className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-indigo-300">Surprise Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      These inspections have to be conducted with an element of surprise. Such inspections check the alertness of staff and are effective only when sufficient care is taken to ensure that the information about the inspection is not known to the concerned staff.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <strong>Examples:</strong> Surprise speed checks at caution sites/caution signals and Ambush checks on whether the Loco Pilot is following the rules during signal failures especially in automatic sections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Classification by Unit Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Classification by Unit Being Inspected
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  
                  {/* Station Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3">
                        <MapPin className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-300">Station Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Each station on the division must be inspected in detail by the Section TI at least once in every six months i.e. January to June and July to December covering the various aspects of safety, operations and allied matters including staff matters.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <strong>Frequency:</strong> Every 6 months by Section TI, more frequently for regular inspections, and at least once a year by an officer.
                      </p>
                    </div>
                  </div>

                  {/* Level Crossing Gate Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-emerald-500/20 p-2 rounded-full mr-3">
                        <Car className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-emerald-300">Level Crossing Gate Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Level crossings are one of the weakest/vulnerable spots in the railway system as they involve the road users. The inspections shall include checking of availability of road signs, warning boards and speed breakers/rumble strips; safety equipment and its working condition; competency and medical fitness of Gateman on duty.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-emerald-300 mb-2">Key Checks:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Road signs & warning boards</li>
                          <li>• Safety equipment condition</li>
                          <li>• Gateman competency & fitness</li>
                          <li>• Gate Working Rules availability</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-emerald-300 mb-2">Additional Checks:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Loco pilot whistling</li>
                          <li>• Gate protection by Gateman</li>
                          <li>• Guard&apos;s observance</li>
                          <li>• Trespassing prevention</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Running Room Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-4 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-teal-500/20 p-2 rounded-full mr-3">
                        <Users className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-teal-300">Running Room Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      During regular, safety and surprise and night inspections running rooms should also be inspected to ensure that running staff are getting proper food, resting and other facilities as per the instructions in force and the staff are resting properly.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-300 mb-2">Facility Checks:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Kitchen hygiene & cleanliness</li>
                          <li>• Medical examination certificates</li>
                          <li>• Gas cylinder safety</li>
                          <li>• Firefighting equipment</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-300 mb-2">Staff Interaction:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Crew interaction & counseling</li>
                          <li>• Problem identification</li>
                          <li>• Rest quality assessment</li>
                          <li>• Joint officer inspections</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* ART Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <Wrench className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-300">ART Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      The ART and the Crane Special inclusive of the Mechanical and engineering Tool vans shall be inspected at least once in six months jointly by Divisional Officers of Medical, Safety, Civil Engineering, Mechanical, Electrical and S&T to ensure that all equipment pertaining their respective departments are available and in good working condition.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <strong>Note:</strong> ART inspections are further detailed in the Accident Manual.
                      </p>
                    </div>
                  </div>

                  {/* ARME Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                        <Stethoscope className="w-5 h-5 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-purple-300">ARME Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Each Medical Relief Van, Auxiliary Van and Scale-II equipment shall be inspected monthly by Divisional Medical Officer, Station Manager, SSE (S&T) SSE (C&W) and SSE (Electrical) and ensure that their respective items are available and in good working condition.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <strong>Joint Inspection:</strong> Medical Relief Van and Auxiliary Van shall be inspected at least once in six months jointly by Divisional Officers of Medical, Safety, Civil Engineering, Mechanical, Electrical and S&T.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Night Inspection Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Moon className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Night Inspection
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Night inspection is done between 00:00 and 04:00 hours which is the most vulnerable time period as human alertness will be at the least. The body is prone to be lethargic leading to possible negligence in duties.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Common Issues Detected:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Staff sleeping on duty</li>
                        <li>• Not exchanging alright signals</li>
                        <li>• Reduced alertness</li>
                        <li>• Signal visibility problems</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Critical Aspects:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Signal visibility during night</li>
                        <li>• Staff alertness levels</li>
                        <li>• Safety protocol adherence</li>
                        <li>• Emergency response readiness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Classification by Travel Method Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Navigation className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Classification by Travel Method
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Foot Plate Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-orange-500/20 p-2 rounded-full mr-3">
                        <Train className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-orange-300">Foot Plate Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      They are carried out by the Inspecting official traveling on the engine of running trains. These afford an opportunity to observe and check the working of the engine crew like identifying and calling out of signals, engineman ship, observance of cautions, maintaining communication with the Guard.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-orange-300 mb-2">Key Checks:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Engine crew performance</li>
                        <li>• Signal identification</li>
                        <li>• Communication with Guard</li>
                        <li>• Locomotive condition</li>
                      </ul>
                    </div>
                  </div>

                  {/* BV/SLR Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-red-500/20 p-2 rounded-full mr-3">
                        <Truck className="w-5 h-5 text-red-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-red-300">BV/SLR Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      It is done by the Inspecting official by traveling along with the Guard in the brake van or SLR. The inspecting official shall check the working of Guard like observance of rules by the Guard, exchange of alright signals, Guard&apos;s observation of Gateman&apos;s signals.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-red-300 mb-2">Equipment Checks:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• SLR equipment availability</li>
                        <li>• Sidelights condition</li>
                        <li>• Guard&apos;s personal equipment</li>
                        <li>• Competency certificates</li>
                      </ul>
                    </div>
                  </div>

                  {/* On-train Inspection */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-pink-500/20 p-2 rounded-full mr-3">
                        <Gauge className="w-5 h-5 text-pink-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-pink-300">On-train Inspection</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Whenever an inspecting official is traveling by a train on duty, he/she must pay attention to the performance of duties by Guard, Loco Pilots, Station staff, Gateman and other staff inside the train.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-sm font-semibold text-pink-300 mb-2">Rake Checks:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• Emergency exit windows</li>
                        <li>• Fire extinguishers</li>
                        <li>• Vestibule fall plates</li>
                        <li>• Pantry car facilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Joint Inspections Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Joint Inspections & Safety Audits
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="space-y-6">
                  
                  {/* Joint Footplate Inspections */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-emerald-500/20 p-2 rounded-full mr-3">
                        <Eye className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-emerald-300">Joint Footplate Inspections by Signal Sighting Committee</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      These are carried out jointly with officials of Operating, Loco, Permanent Way Signaling and Tr. Distribution departments, to check the visibility of signals, their locations, focus, brightness etc.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-300">
                        <strong>Signal Positioning:</strong> The signals normally have to be in LHS and every effort shall be taken to ensure the required distances and visibility of the signal in LHS. Any infrastructure changes like shifting of masts, slewing of tracks etc. shall be done to achieve it.
                      </p>
                    </div>
                  </div>

                  {/* Safety Audits */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <div className="flex items-center mb-3 justify-center text-center flex-col gap-2">
                      <div className="bg-teal-500/20 p-2 rounded-full mr-3">
                        <Shield className="w-5 h-5 text-teal-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-teal-300">Safety Audits</h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      SrDSO, along with his/her team comprising Inspectors of different departments, will conduct Safety Audits at major stations, way-side stations, sections, Level Crossings and other installations in the Division covering all aspects pertaining to all departments involved in train operation and safety.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-300 mb-2">Audit Types:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Divisional Safety Team</li>
                          <li>• Inter Divisional Safety Audit</li>
                          <li>• High Level Safety Audit</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg lg:p-6 p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-300 mb-2">Coverage Areas:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Major stations</li>
                          <li>• Way-side stations</li>
                          <li>• Sections</li>
                          <li>• Level Crossings</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <h4 className="text-sm font-semibold text-teal-300 mb-2">Monitoring:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Zonal level</li>
                          <li>• Railway Board level</li>
                          <li>• Compliance reports</li>
                          <li>• Corrective actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Inspection Types */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Lightbulb className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Other Types of Inspections
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 justify-center text-center flex-col gap-2">
                    <div className="bg-yellow-500/20 p-3 rounded-full inline-block mb-3">
                      <Navigation className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Window Trailing Inspection</h3>
                    <p className="text-white text-sm">Specialized inspection method for specific railway operations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-orange-500/20 p-3 rounded-full inline-block mb-3">
                                             <Power className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Tower Car Inspection</h3>
                    <p className="text-white text-sm">Inspection using specialized tower vehicles for elevated views</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 text-center">
                    <div className="bg-amber-500/20 p-3 rounded-full inline-block mb-3">
                      <Car className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Motor Trolley Inspection</h3>
                    <p className="text-white text-sm">Inspection using motorized trolleys for track and infrastructure</p>
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

export default OMPage98