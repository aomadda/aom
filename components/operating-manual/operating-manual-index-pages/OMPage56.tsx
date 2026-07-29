'use client'
import React from 'react'
import { 
  Users, 
  Clock, 
  Shield, 
  MapPin, 
  BarChart3, 
  Gauge,
  Route,
  Network,
  FileText,
  AlertTriangle,
  CheckCircle,
  Settings,
  Building2
} from 'lucide-react'

const OMPage56 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Crew Management & Train Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to crew management, posting procedures, road learning, 
              and speed regulations for safe and efficient train operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Crew Management */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew Management
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                
                {/* Posting of Crews */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Posting of Crews
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    LP / ALP / Guards / Shunters are posted at their headquarter stations under Chief
                    Crew Controller (CCC). Crew are required to work from their headquarters to various
                    stations as per their crew beats.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-200 mb-2 flex items-center flex-col gap-3 text-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        Running Rooms
                      </h6>
                      <p className="text-xs text-gray-200">
                        Running rooms with catering facilities are provided for outstation crew.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-cyan-200 mb-2 flex items-center flex-col gap-3 text-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Rest Hours
                      </h6>
                      <p className="text-xs text-gray-200">
                        The hours of rest for a crew are different for headquarter and outstation.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-200 mt-4">
                    CCC has to ensure the staff working under are not due for refresher
                    courses or periodical medical examination before being booked for working of trains.
                  </p>
                </div>

                {/* Road Learning */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-cyan-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Road Learning
                  </h4>
                  <p className="text-sm text-gray-200">
                    Crew of the trains has to undergo road learning of the section, in order to familiarize
                    with the signals, stations, gradients and other aspects required for safe running of
                    the trains before they are booked for independent working of trains as per SR 3.78.2
                    of G&SR 2020.
                  </p>
                </div>

                {/* Crew Lobby */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Crew Lobby
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    The place where crews are booked for train operations is called a lobby. Combined
                    crew lobby is where all three - Guard, Loco pilot and ALP are booked together.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-green-200 mb-2 flex items-center flex-col gap-3 text-center">
                        <Users className="w-4 h-4 mr-2" />
                        Lobby Supervisors
                      </h6>
                      <p className="text-xs text-gray-200">
                        They take forecast of requirement of crew from the control and book crew based on train orders.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-emerald-200 mb-2 flex items-center flex-col gap-3 text-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Two Call System
                      </h6>
                      <p className="text-xs text-gray-200">
                        A two call system is followed to minimize pre departure detentions.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-200">
                      The booking of the crew is done through Crew Management System. Care is taken to ensure that the crew booked for a train is designated for working such trains; have a proper LR for the section.
                    </p>
                    <p className="text-sm text-gray-200">
                      Once the crew arrives at the lobby, a breathalyser test is conducted along with signing on, to ensure that there is no alcohol intake or influence. This test is also conducted at the completion of duty while signing off.
                    </p>
                    <p className="text-sm text-gray-200">
                      On completion of the duty, the crew submits a Combined Train Report (CTR) jointly signed by LP and Guard duly mentioning the detailed timings and en route detentions to CCC/SM.
                    </p>
                    <p className="text-sm text-gray-200">
                      Apart from booking the crew for train orders, lobbies also ensure crew balancing for the day as per forecast.
                    </p>
                  </div>
                </div>

                {/* Crew Equipment & Documents */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-3 text-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Crew Equipment & Documents
                  </h4>
                  <p className="text-sm text-gray-200">
                    Crews working the trains are required to possess with them certain equipment as
                    mentioned in SR 4.19.
                  </p>
                </div>
              </div>
            </div>

            {/* 9-Hour Rule */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                9-Hour Rule
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  As crew are the most critical for safe running of trains, in order to have maximum
                  alertness, a 10 hour rule was envisaged for at a stretch working, which has
                  subsequently, revised to 9 hours.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Rule 1: Running Duty Limit
                    </h5>
                    <p className="text-sm text-gray-200">
                      Running duty at a stretch should not ordinarily exceed 9 hours from the departure of the train.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Rule 2: Overall Duty Limit
                    </h5>
                    <p className="text-sm text-gray-200">
                      Overall duty of running staff from „sign-on‟ to „sign-of‟ should not generally exceed 11 hours.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Rule 3: Operational Exigencies
                    </h5>
                    <p className="text-sm text-gray-200">
                      In operational exigencies, running duty may be extended beyond 9 hours within overall limit of 11 hours provided due notice has been given to the staff by SCOR, before the completion of 7 hours duty.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <Route className="w-4 h-4 mr-2" />
                      Rule 4: Crew Changing Point
                    </h5>
                    <p className="text-sm text-gray-200">
                      If a train doesn‟t reach its normal crew changing point / destination within overall limit of 11 hours, and the crew changing point is approximately 1 hours journey, the staff should be required to work the train up to the crew changing point.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Rule 5: Exceptional Emergencies
                    </h5>
                    <p className="text-sm text-gray-200">
                      In exceptional, extreme emergencies like accident, flood, agitation, lightening, equipment failures etc, the staff may be required to work beyond the prescribed limits of working hours and SCOR should advise the staff accordingly.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-3 text-center">
                      <FileText className="w-4 h-4 mr-2" />
                      Rule 6: Beat Display
                    </h5>
                    <p className="text-sm text-gray-200">
                      In order that running staff are aware of their beat, at every crew HQ stations and normal crew changing point, the beat of staff of Mail Express, passenger, goods trains etc should be prominently displayed on the notice board. Such type of notices also be put on lobby, loco shed, where the running staff is required to sign on and sign off.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Crew Requirement */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew Requirement of a Division
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Crew requirement is reviewed once in six months by the division based on the crew
                  required for working coaching links and average working hours of goods crew.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Users className="w-5 h-5 mr-2" />
                      Leave Reserve
                    </h4>
                    <p className="text-sm text-gray-200">
                      30% leave reserve is usually added to the bare requirement to ensure adequate coverage during leave periods.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Trainee Reserve
                    </h4>
                    <p className="text-sm text-gray-200">
                      10% trainee reserve is added to support ongoing training and development of new crew members.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed of Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Gauge className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Speed of Trains
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  The speed of a train is restricted by the lowest of the permitted speeds among track,
                  locomotive, and formation. It is also impacted by speed restrictions imposed
                  permanently or temporarily.
                </p>

                <div className="space-y-6">
                  {/* Sectional Speed */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Route className="w-5 h-5 mr-2" />
                      Sectional Speed
                    </h4>
                    <p className="text-sm text-gray-200">
                      Sectional speed is the maximum speed for which a track is fit. It is given section wise and no train should exceed this speed while running on the section.
                    </p>
                  </div>

                  {/* Joint Safety Certificate */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Joint Safety Certificate
                    </h4>
                    <p className="text-sm text-gray-200">
                      The speeds of various locomotives, wagons and coaches permitted over a particular section is fixed and issued as a Joint Safety Certificate at zonal headquarters. This is communicated to the crew through Lobby notification and in WTT.
                    </p>
                  </div>

                  {/* Train Movement Control */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-3 text-center">
                      <Network className="w-5 h-5 mr-2" />
                      Train Movement Control
                    </h4>
                    <p className="text-sm text-gray-200 mb-4">
                      Unlike other modes of transport, train movements are controlled throughout their formation and run. Their priority for running and consequently their transit time and speed are affected by every station, section, division and zone they pass through.
                    </p>
                    <p className="text-sm text-gray-200">
                      Train operations thus require close coordination at all these levels. Working of trains is the most efficient when the best asset utilization is achieved and the needs of passenger & freight customers are satisfied to the maximum extent.
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

export default OMPage56