'use client'
import { 
  Train,
  FileCheck,
  List,
  ClipboardList,
  Settings
} from 'lucide-react'

const WorkingOfTrains = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-8 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur-md shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-7xl text-3xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl">
              WORKING OF TRAINS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Enhanced General Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  General
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    No person shall drive a train unless he is in possession of a valid certificate of competency issued by an authorized officer.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    No Loco Pilot, Assistant Loco Pilot or loco pilot of any self propelled vehicle shall be booked to work a train or to drive a vehicle until he has learnt the road and shall give a declaration that he is fully acquainted with it.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    For this purpose he will be booked to work three round trips on each section including one during night before being put to work the train/vehicle independently.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Examination of Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <FileCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Examination of Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Each train shall be examined by competent person from the rolling stock/electrical maintenance department before being offered for passenger, goods/or any other service.
                  </p>
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    The purpose of the examination is to ensure that all functions of the train and its constituent carriages/wagons etc are working correctly, particularly safety devices including brake systems, passenger alarm –etc to be listed by competent authority.
                  </p>
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    The competent staff shall sign a certificate of safety test indicating duration of its validity.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Classification of Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Classification of Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  Trains are either scheduled as shown in the Working Time Table or non scheduled trains and are run on the following account: -
                </p>
                
                {/* Traffic Account */}
                <div className="mb-8">
                  <h3 className="text-purple-200 font-bold lg:text-2xl text-xl mb-4">Traffic Account:</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(a)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Mail/ Express/ Passenger Trains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(b)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Commuter trains EMU/DMU/for Suburban, regional passengers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(c)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Military Specials including troop trains.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(b)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Parcel trains of carriage of coaching traffic only.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(c)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Goods trains for movement of conventional freight cargo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(d)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Container Trains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(e)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Mixed trains carrying both passengers and freight</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-purple-50/95 lg:text-base text-sm leading-relaxed ml-4">
                    Other trains to include Exhibition Trains, Mobile Hospital on wheels etc.
                  </p>
                </div>

                {/* Engineering Account */}
                <div className="mb-8">
                  <h3 className="text-purple-200 font-bold lg:text-2xl text-xl mb-4">Engineering Account</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">1.</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Ultrasonic and other track testing trains:</span>
                      <ul className="ml-6 mt-2 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">(a)</span>
                          <span className="text-purple-50/90 lg:text-sm text-xs leading-relaxed">Material trains.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">(b)</span>
                          <span className="text-purple-50/90 lg:text-sm text-xs leading-relaxed">Track maintenance trains like Tie Tamping Machines, Rail grinding trains PQRS, BCM, DGS etc.,</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-300 mt-1.5 font-bold">(c)</span>
                          <span className="text-purple-50/90 lg:text-sm text-xs leading-relaxed">Wiring Special / Tower wagons.</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Miscellaneous Account */}
                <div>
                  <h3 className="text-purple-200 font-bold lg:text-2xl text-xl mb-4">Miscellaneous Account:</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(a)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Staff shuttles.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(b)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Water specials.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(c)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Workmen&apos;s specials.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(d)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Accident Relief Train (ARTs)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(e)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Accident Relief Medical Equipment (ARMEs).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 mt-1.5 font-bold">(f)</span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">Crane Specials.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced Train Ordering Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Train Ordering
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-sky-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Scheduled passenger trains do not require train ordering
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Train advice is necessary only when these are required to be cancelled, put back or there is any change in the schedule shown in the Public /Working Time Table.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    In case of unscheduled trains, train advice should be issued.
                  </p>
                  <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Trains are ordered by CTNL in conjunction with the Power Control and or Lobby Supervisor.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Train Preparation Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Train Preparation
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-5">
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    The time at which train is required to be in readiness in all respects for departure from the starting station will be laid down by the Divisional Railway Manager/SR.DOM.
                  </p>
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    In case of passenger trains, the rake duly examined and fit in all respects with full compliment of coaches (at least to meet reservation requirements fully) should be placed on the platform well in time to allow all pre departure functions to be completed.
                  </p>
                  <div className="mt-6">
                    <p className="text-green-200 font-semibold lg:text-lg text-base mb-4">These include-</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Loading of mails, booked luggage, and parcels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Loading of linen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Pantry car provisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Watering</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Cooling of AC coaches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Display of reservation charts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Deployment of train staff</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-300 mt-1.5 font-bold">•</span>
                        <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">Attaching of locomotive</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mt-6">
                    To facilitate passengers boarding, generally an important long distance passenger train should be placed on the platform 30 minutes/15 minutes before its scheduled departure, depending upon the terminal layout.
                  </p>
                  <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                    Every Loco pilot of a train while starting from the starting station must verify adequacy of brake power as certified in train examination document .In addition, he must conduct a &quot;feel test&quot; to ensure that train brakes respond to brake application. In case of failure, he will report to the control and bring his train to a stop as directed by the Control. The train shall move only after the defect has been rectified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default WorkingOfTrains
