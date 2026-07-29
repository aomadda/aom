'use client'
import React from 'react'
import { 
  Shield, 
  AlertTriangle,
  Clock,
  Phone,
  Train,
  Zap,
  Settings,
  FileText,
  Wrench,
  Route,
  Database,
  TrendingUp,
  UserCheck,
  BarChart3,
  ClipboardList,
  CheckCircle2,
} from 'lucide-react'

const OMPage66 = () => {
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATIONAL DISCIPLINE
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Control Orders & Operational Procedures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to operational discipline, control orders, unusual reporting, 
              and modern control office applications for efficient railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Operational Discipline Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Operational Discipline
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <span className="shrink-0 mt-1 mr-3 text-blue-300">
                      <ClipboardList className="w-6 h-6" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      All orders given by the Controller to Station Masters, Running staff, or lobby must be entered in the control order register by the staff. Each entry should be initialed with date & time. At the end of each duty, both the relieved and relieving Station Master or Loco Foreman must sign in full below the last entry. Any order received from control must be entered in the control register at the station.
                    </span>
                  </li>
                  <li className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <span className="shrink-0 mt-1 mr-3 text-cyan-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Control orders are sacrosanct and must be obeyed by all Station staff, Shed staff, Crew, and Guards, following the General and Subsidiary Rules. Any inconsistency should be immediately reported to the CHC in charge, who will resolve the issue or issue modified orders.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unusual Reporting Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Unusual Reporting
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Immediate Notification
                    </h5>
                    <p className="text-sm text-gray-200">
                      Any unusual occurrence has to be informed to the control by the Station
                      Master on duty at once.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-2 flex items-center gap-3 text-center flex-col">
                      <Settings className="w-4 h-4 mr-2" />
                      Equipment Defects
                    </h5>
                    <p className="text-sm text-gray-200">
                      Station Master must promptly advise the Controller of any defects of signals,
                      points, interlocking apparatus and line clear instruments at his/her station.
                      Information should also be given of any defects in any other station machinery
                      such as cranes, wagon weigh bridges, turn tables, water columns etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Engine Movements Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engine Movements to and from Sheds
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400">
                      <Train className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Power Controller or Traction Loco Controller must inform the control office about the exact time when a train engine leaves or returns to the shed.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-emerald-400">
                      <UserCheck className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      This does not relieve the Station Master from the responsibility of sending all necessary messages regarding engine failures or troubles en route.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">
                      <ClipboardList className="w-5 h-5 mt-1" />
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The Controller must record the duration of such defects in the chart, diary, and registers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Time Checking Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Time to be Checked with Control
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Station Master, Loco Sheds and Lobbies must check their time with control at
                      appointed hours every day when control gives a general ring for setting their
                      watches. It is usually done at 1600.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Phone Usage Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Mode of Using the Control Phone
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-8">
                  {/* Beautifully designed lettered list */}
                  <ol className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6 list-none">
                    <li>
                      <div className="bg-gradient-to-r from-purple-900/30 to-purple-600/20 border-purple-400 rounded-xl lg:p-4 p-3 shadow-md flex flex-col items-center justify-center gap-4">
                        <span className="shrink-0">
                          <span className="rounded-full bg-purple-700 text-white ring-2 ring-white/40 shadow-lg px-3 py-1 text-base font-bold flex items-center">
                            <span>a</span>
                          </span>
                        </span>
                        <div>
                          <h5 className="font-semibold text-purple-200 text-lg mb-1">Standard Procedure</h5>
                          <p className="text-gray-200 text-sm">
                            Station Master and others must not ordinarily attempt to speak to control
                            unless they have ascertained by lifting the receiver and listening in, that the
                            line is free. They must then announce the name of the station/shed/lobby or
                            site from where they are speaking and wait for its being repeated by the
                            controller before beginning the conversation.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="bg-gradient-to-r from-pink-900/30 to-pink-600/20 border-pink-400 rounded-xl lg:p-4 p-3 shadow-md flex flex-col items-center justify-center gap-4">
                        <span className="shrink-0">
                          <span className="rounded-full bg-pink-700 text-white ring-2 ring-white/40 shadow-lg px-3 py-1 text-base font-bold flex items-center">
                            <span>b</span>
                          </span>
                        </span>
                        <div>
                          <h5 className="font-semibold text-pink-200 text-lg mb-1">Urgent Messages</h5>
                          <p className="text-gray-200 text-sm">
                            When, however, an urgent message has to be conveyed and the line happens
                            to be engaged, the station name must be called out and a demand made for
                            the telephone line to be cleared. The Controller will then discontinue all other
                            conversations in which he had been engaged and attend to the Station
                            making the interruption. Such &quot;clear line&quot; must be made exceptionally when
                            there is a genuine reason to do so.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>

                  {/* Next three in a visually pleasing row */}
                  <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none mt-2">
                    <li>
                      <div className="bg-gradient-to-br from-purple-500/20 to-white/10 border-purple-400 rounded-xl lg:p-4 p-3 shadow-lg flex flex-col items-center justify-center gap-4">
                        <span className="rounded-full bg-purple-600/70 text-purple-100 px-3 py-1 font-bold text-base shadow-md flex items-center mb-1">
                          <span>c</span>
                        </span>
                        <div>
                          <h6 className="font-semibold text-purple-200 mb-1">
                            Control Calls
                          </h6>
                          <p className="text-gray-200 text-sm">
                            Station Masters must attend ‘Control Call’ promptly.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bg-gradient-to-br from-pink-500/20 to-white/10 border-pink-400 rounded-xl lg:p-4 p-3 shadow-lg flex flex-col items-center justify-center gap-4">
                        <span className="rounded-full bg-pink-600/70 text-pink-100 px-3 py-1 font-bold text-base shadow-md flex items-center mb-1">
                          <span>d</span>
                        </span>
                        <div>
                          <h6 className="font-semibold text-pink-200 mb-1">
                            Permission Required
                          </h6>
                          <p className="text-gray-200 text-sm">
                            Staff must obtain Station Master’s permission before speaking to Controller.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bg-gradient-to-br from-indigo-500/20 to-white/10 border-indigo-400 rounded-xl lg:p-4 p-3 shadow-lg flex flex-col items-center justify-center gap-4">
                        <span className="rounded-full bg-indigo-600/70 text-indigo-100 px-3 py-1 font-bold text-base shadow-md flex items-center mb-1">
                          <span>e</span>
                        </span>
                        <div>
                          <h6 className="font-semibold text-indigo-200 mb-1">
                            Official Use Only
                          </h6>
                          <p className="text-gray-200 text-sm">
                            The Control telephone is to be used only for transmitting official information.
                            Private conversation is forbidden.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Accidents Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertTriangle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Accidents
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Controllers and other staff should thoroughly understand and act on the guidelines
                      contained in G&SR and Accident Manual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working of Trains when Control is Interrupted Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Working of Trains when Control is Interrupted
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      When the control is interrupted and no communication with the Controller is possible,
                      Station Masters will be responsible for the working and regulation of trains, keeping
                      in view the instructions issued by the railway administration.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      The section control is the focal point of coordination for train running. In order
                      to assist the section controller as well as to manage all the associated activities of
                      train operations, the division control office has the following department wise control
                      set up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Operating Control
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <h6 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-3 text-center items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Operating Control Personnel & Functions
                    </h6>
                    <ul className="space-y-3 pl-0 text-gray-200 lg:text-base text-sm">
                      <li className="flex items-start">
                        <UserCheck className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Main Line):</span> Supervises main line train operations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Database className="w-5 h-5 text-cyan-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Stock):</span> Manages freight stock and related operations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-indigo-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Chief Controller (Punctuality):</span> Ensures punctual running of coaching trains.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ClipboardList className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Train Clerks & Assistant Staff:</span> Support controllers in daily duties.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                        <span>
                          <span className="font-semibold">Key Functions:</span> Control train running, supervise loading/unloading, and oversee movement of goods and coaching traffic across the division.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-blue-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-blue-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">a</div>
                      <h6 className="font-bold text-blue-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-blue-500/20 text-blue-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">A</span>
                        Stock Position
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Collecting stock position from the different stations, marshaling and
                        terminal yards.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-cyan-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-cyan-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">b</div>
                      <h6 className="font-bold text-cyan-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-cyan-500/20 text-cyan-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">B</span>
                        Demand Information
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Collecting information on demands registered / outstanding for freight
                        loading at stations.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-indigo-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-indigo-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">c</div>
                      <h6 className="font-bold text-indigo-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-indigo-500/20 text-indigo-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">C</span>
                        Wagon Supply
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Arranging supply of wagons against pending registration.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-purple-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-purple-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">d</div>
                      <h6 className="font-bold text-purple-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">D</span>
                        Stock Utilization
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Securing optimum utilization of stock, with minimum detention.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-green-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-green-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">e</div>
                      <h6 className="font-bold text-green-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-green-500/20 text-green-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">E</span>
                        Infrastructure Monitoring
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Monitoring and coordinating working of yards, goods shed, sidings, locoshed,
                        C&W depots etc.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-yellow-400/30 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-yellow-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">f</div>
                      <h6 className="font-bold text-yellow-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-yellow-400/20 text-yellow-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">F</span>
                        Maximum Loads
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        Securing maximum loads for trains.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-orange-400/30 md:col-span-2 relative overflow-hidden">
                      <div className="absolute left-4 -top-5 text-orange-400/20 text-7xl font-extrabold pointer-events-none select-none opacity-50 z-0">g</div>
                      <h6 className="font-bold text-orange-200 mb-2 flex flex-col items-center z-10 relative text-lg tracking-wide">
                        <span className="inline-block bg-orange-400/20 text-orange-300 rounded-full px-3 py-1 mr-2 text-base font-extrabold shadow-lg">G</span>
                        Inter-division Liaison
                      </h6>
                      <p className="text-gray-200 text-sm z-10 relative">
                        To keep liaison with adjacent Railways and divisions for interchange
                        commitments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Control/Traction Loco Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Power Control/Traction Loco Control
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It functions to monitor and control the locomotives. Its area of working includes…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-emerald-400 via-emerald-600 to-teal-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-emerald-200 ring-2 ring-emerald-400/30 transition-transform duration-200 hover:scale-110">
                          a
                        </span>
                        Engine Requisitioning
                      </h6>
                      <p className="text-sm text-gray-200">
                        Requisitioning engine from loco sheds for all operating requirements, i.e.
                        Train working, Shunting and Banking.
                      </p>
                    </div>
                    {/* (b) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-teal-400 via-teal-600 to-cyan-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-teal-200 ring-2 ring-teal-400/30 transition-transform duration-200 hover:scale-110">
                          b
                        </span>
                        Economic Usage
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring most economical use of engines by close supervision both in
                        Traffic Yards and sheds.
                      </p>
                    </div>
                    {/* (c) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-green-400 via-green-700 to-lime-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-green-200 ring-2 ring-green-400/30 transition-transform duration-200 hover:scale-110">
                          c
                        </span>
                        Schedule Planning
                      </h6>
                      <p className="text-sm text-gray-200">
                        Planning in co-ordination with DyCHC for Schedule due locos to work in
                        direction of sheds.
                      </p>
                    </div>
                    {/* (d) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-cyan-600 to-blue-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-cyan-200 ring-2 ring-cyan-400/30 transition-transform duration-200 hover:scale-110">
                          d
                        </span>
                        Crew Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinating with DyCHC for moving of trains so that crew shall not
                        exceed 9hr rule.
                      </p>
                    </div>
                    {/* (e) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-blue-400 to-indigo-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-blue-200 ring-2 ring-blue-400/30 transition-transform duration-200 hover:scale-110">
                          e
                        </span>
                        Outstation Balance
                      </h6>
                      <p className="text-sm text-gray-200">
                        Balancing crew at outstation depots for smooth functioning of trains.
                      </p>
                    </div>
                    {/* (f) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-400 to-purple-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-indigo-200 ring-2 ring-indigo-400/30 transition-transform duration-200 hover:scale-110">
                          f
                        </span>
                        Link Locos
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring all link locos are moved in time to connect Exp/Pass services.
                      </p>
                    </div>
                    {/* (g) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-purple-400 to-pink-500 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-purple-200 ring-2 ring-purple-400/30 transition-transform duration-200 hover:scale-110">
                          g
                        </span>
                        Relief Locos
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring relief loco for any loco failures.
                      </p>
                    </div>
                    {/* (h) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-pink-400 via-pink-500 to-rose-400 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-pink-200 ring-2 ring-pink-400/30 transition-transform duration-200 hover:scale-110">
                          h
                        </span>
                        Special Equipment
                      </h6>
                      <p className="text-sm text-gray-200">
                        In the event of any unusual, when MRV/ART/140T crane are ordered,
                        ensuring proper locomotive for it on priority.
                      </p>
                    </div>
                    {/* (i) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-orange-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-orange-400 via-yellow-400 to-amber-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-orange-200 ring-2 ring-orange-400/30 transition-transform duration-200 hover:scale-110">
                          i
                        </span>
                        Home Shed Return
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring the return of engines to &quot;Home Sheds&quot; at regular intervals for
                        servicing and maintenance.
                      </p>
                    </div>
                    {/* (j) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-yellow-300 via-yellow-500 to-orange-400 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-yellow-200 ring-2 ring-yellow-400/30 transition-transform duration-200 hover:scale-110">
                          j
                        </span>
                        Engine Balance
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring an even balance of engines from running sheds for meeting
                        demands of traffic.
                      </p>
                    </div>
                    {/* (k) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-red-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-red-400 via-rose-400 to-orange-400 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-red-200 ring-2 ring-red-400/30 transition-transform duration-200 hover:scale-110">
                          k
                        </span>
                        Light Engine Minimization
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring that light engine kilometers is kept to the minimum.
                      </p>
                    </div>
                    {/* (l) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-emerald-500 via-teal-500 to-green-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-emerald-200 ring-2 ring-emerald-400/30 transition-transform duration-200 hover:scale-110">
                          l
                        </span>
                        Troubleshooting
                      </h6>
                      <p className="text-sm text-gray-200">
                        Providing guidance to running staff for trouble shooting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carriage and Wagon Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Carriage and Wagon Control
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It functions include the monitoring of activities related to rolling stock – wagons and
                      coaches. They include the following.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-blue-400 via-cyan-400 to-blue-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-blue-200 ring-2 ring-blue-400/30 transition-transform duration-200 hover:scale-110">
                          a
                        </span>
                        Train Examination
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure timely examination and fitness of all trains.
                      </p>
                    </div>
                    {/* (b) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-400 via-violet-400 to-indigo-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-indigo-200 ring-2 ring-indigo-400/30 transition-transform duration-200 hover:scale-110">
                          b
                        </span>
                        Sick Wagon Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch over the detachment of sick wagons and to arrange for
                        their early repair and fitness, duly monitoring and ensuring availability of
                        critical components failing frequently.
                      </p>
                    </div>
                    {/* (c) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-purple-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-purple-200 ring-2 ring-purple-400/30 transition-transform duration-200 hover:scale-110">
                          c
                        </span>
                        Sick Line Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch over placement of wagons in sick line and their release.
                      </p>
                    </div>
                    {/* (d) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-sky-400 to-cyan-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-cyan-200 ring-2 ring-cyan-400/30 transition-transform duration-200 hover:scale-110">
                          d
                        </span>
                        POH Stock Movement
                      </h6>
                      <p className="text-sm text-gray-200">
                        To monitor movement of POH due stock to workshops.
                      </p>
                    </div>
                    {/* (e) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-green-400 via-emerald-400 to-green-300 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-green-200 ring-2 ring-green-400/30 transition-transform duration-200 hover:scale-110">
                          e
                        </span>
                        Detention Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep account of detention of trains on C&W account and take remedial
                        action.
                      </p>
                    </div>
                    {/* (f) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex flex-col items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-yellow-500 via-orange-400 to-yellow-400 text-white shadow-md rounded-full w-9 h-9 text-lg font-extrabold border-2 border-yellow-300 ring-2 ring-yellow-500/30 transition-transform duration-200 hover:scale-110">
                          f
                        </span>
                        Troubleshooting Support
                      </h6>
                      <p className="text-sm text-gray-200">
                        To provide guidance to running staff for trouble shooting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Commercial Control
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors and manages the commercial aspects of train running over the division
                      like….
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-green-400 via-green-300 to-emerald-200 text-green-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-green-100 ring-2 ring-green-400/25 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          a
                        </span>
                        Passenger Train Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        To keep a watch on detention to passenger trains on account of Alarm
                        Chain Pulling, Parcel working etc., and take remedial measures.
                      </p>
                    </div>

                    {/* (b) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-emerald-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-300 to-emerald-200 text-emerald-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-emerald-100 ring-2 ring-emerald-400/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          b
                        </span>
                        Loading/Unloading Activities
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure loading and unloading activities targeted for the day as planned
                        by Operating control.
                      </p>
                    </div>

                    {/* (c) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-teal-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-300 to-green-200 text-sky-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-teal-100 ring-2 ring-teal-300/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          c
                        </span>
                        Public Amenities
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure proper maintenance of public amenities available at stations.
                      </p>
                    </div>

                    {/* (d) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-200 text-sky-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-cyan-100 ring-2 ring-cyan-400/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          d
                        </span>
                        Public Complaints
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring of public complaints lodged at the stations.
                      </p>
                    </div>

                    {/* (e) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-300 to-blue-200 text-blue-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-blue-100 ring-2 ring-blue-400/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          e
                        </span>
                        Transshipment
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure quick transshipment of sick wagons by arranging matching
                        stock and labor.
                      </p>
                    </div>

                    {/* (f) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-300 to-indigo-200 text-indigo-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-indigo-100 ring-2 ring-indigo-400/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          f
                        </span>
                        Accident Relief
                      </h6>
                      <p className="text-sm text-gray-200">
                        To ensure relief, ex-gratia payment and assistance required during
                        accident relief and restoration.
                      </p>
                    </div>

                    {/* (g) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 md:col-span-2">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-purple-400 via-fuchsia-300 to-purple-200 text-purple-900 font-extrabold rounded-full w-9 h-9 shadow-lg border-2 border-purple-100 ring-2 ring-purple-400/20 text-lg transition-transform duration-200 hover:scale-110 mr-2">
                          g
                        </span>
                        Unclaimed Items
                      </h6>
                      <p className="text-sm text-gray-200">
                        To expeditiously dispose of unclaimed and unconnected wagons, loads,
                        smalls and parcel consignments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Traction Power Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Traction Power Control
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It houses the SCADA which monitors and controls the power supply of the traction
                      OHE over the entire division. It has critical role in…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500 text-yellow-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-yellow-100 ring-2 ring-yellow-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          a
                        </span>
                        Power Supply Management
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensuring continuous power supply at 25KV and arranging alternative
                        power supply in case of tripping etc., through remote control.
                      </p>
                    </div>
                    {/* (b) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-orange-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-orange-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-orange-200 via-orange-400 to-orange-500 text-orange-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-orange-100 ring-2 ring-orange-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          b
                        </span>
                        Maintenance Blocks
                      </h6>
                      <p className="text-sm text-gray-200">
                        Arranging maintenance blocks for OHE.
                      </p>
                    </div>
                    {/* (c) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-red-200 via-red-400 to-red-500 text-red-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-red-100 ring-2 ring-red-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          c
                        </span>
                        OHE Failure Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring OHE failures and taking remedial action.
                      </p>
                    </div>
                    {/* (d) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-pink-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-400 to-pink-600 text-pink-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-pink-100 ring-2 ring-pink-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          d
                        </span>
                        Train Detention
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitoring detention of trains on O.H.E accounts.
                      </p>
                    </div>
                    {/* (e) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-400 to-purple-600 text-purple-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-purple-100 ring-2 ring-purple-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          e
                        </span>
                        Troubleshooting
                      </h6>
                      <p className="text-sm text-gray-200">
                        Guiding running / station staff in trouble shooting.
                      </p>
                    </div>
                    {/* (f) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-indigo-200/20 hover:shadow-lg transition duration-300">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-100 via-indigo-400 to-indigo-600 text-indigo-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-indigo-100 ring-2 ring-indigo-400/20 text-lg mr-2 transition-transform duration-200 hover:scale-110">
                          f
                        </span>
                        MD Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        It also monitors the MD of each sub section and takes necessary action in
                        coordination with operating control to advise changes required in CMD as
                        well as avoid penalty as far as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Engineering Control
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It coordinates and monitors the aspects regarding engineering department related to
                      train running like…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-purple-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-300 to-purple-500 text-purple-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-purple-200 text-lg select-none">
                          a
                        </span>
                        Caution Orders
                      </h6>
                      <p className="text-sm text-gray-200">
                        Monitors imposition and cancellation of Caution Orders.
                      </p>
                    </div>
                    {/* (b) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-300 to-pink-500 text-pink-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-pink-200 text-lg select-none">
                          b
                        </span>
                        Engineering Blocks
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinating works during Engineering blocks.
                      </p>
                    </div>
                    {/* (c) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-indigo-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-100 via-indigo-300 to-indigo-500 text-indigo-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-indigo-200 text-lg select-none">
                          c
                        </span>
                        Track Machine Coordination
                      </h6>
                      <p className="text-sm text-gray-200">
                        Coordinates with Traffic Controller for movements of Track machines and
                        material trains.
                      </p>
                    </div>
                    {/* (d) */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h6 className="font-semibold text-blue-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 text-blue-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-blue-200 text-lg select-none">
                          d
                        </span>
                        Safety Monitoring
                      </h6>
                      <p className="text-sm text-gray-200">
                        Ensures safety in work spots and sensitive locations like recording and
                        monitoring of earth works being executed along the track in all the
                        sections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Security Control
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors the security aspects of train running like…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* (a) Law and Order */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex flex-col">
                      <h6 className="font-semibold text-red-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-red-100 via-red-200 to-red-400 text-red-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-red-200 text-lg select-none">
                          a
                        </span>
                        Law and Order
                      </h6>
                      <p className="text-sm text-gray-200">
                        Law and order situations.
                      </p>
                    </div>
                    {/* (b) Passenger Complaints */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex flex-col">
                      <h6 className="font-semibold text-pink-300 mb-2 flex items-center gap-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-tr from-pink-100 via-pink-200 to-pink-400 text-pink-900 font-extrabold rounded-full w-9 h-9 shadow-md border-2 border-pink-200 text-lg select-none">
                          b
                        </span>
                        Passenger Complaints
                      </h6>
                      <p className="text-sm text-gray-200">
                        Attending to complaints of passengers like theft, women safety etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal & Telecom Control Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Signal & Telecom Control
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      It monitors all the aspects of Signaling and communication across the division. It
                      functions include…
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* (a) Equipment Monitoring */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-300/30 shadow group flex flex-col items-center text-center hover:bg-cyan-900/20 transition">
                      <div className="flex items-center justify-center mb-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-cyan-100 via-cyan-300 to-cyan-400 text-cyan-900 font-extrabold rounded-full w-10 h-10 shadow-md border-2 border-cyan-200 text-lg select-none transition group-hover:scale-105">
                          a
                        </span>
                      </div>
                      <h6 className="font-semibold text-cyan-200 mb-1 text-lg">Equipment Monitoring</h6>
                      <p className="text-sm text-gray-200">
                        Keeping watch over proper functioning of signals, communication
                        equipment along with their networks.
                      </p>
                    </div>
                    {/* (b) Failure Management */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-300/30 shadow group flex flex-col items-center text-center hover:bg-blue-900/20 transition">
                      <div className="flex items-center justify-center mb-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-400 text-blue-900 font-extrabold rounded-full w-10 h-10 shadow-md border-2 border-blue-200 text-lg select-none transition group-hover:scale-105">
                          b
                        </span>
                      </div>
                      <h6 className="font-semibold text-blue-200 mb-1 text-lg">Failure Management</h6>
                      <p className="text-sm text-gray-200">
                        Managing S&amp;T failures and taking remedial action.
                      </p>
                    </div>
                    {/* (c) Emergency Controls */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-300/30 shadow group flex flex-col items-center text-center hover:bg-indigo-900/20 transition">
                      <div className="flex items-center justify-center mb-3">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-indigo-100 via-indigo-300 to-indigo-400 text-indigo-900 font-extrabold rounded-full w-10 h-10 shadow-md border-2 border-indigo-200 text-lg select-none transition group-hover:scale-105">
                          c
                        </span>
                      </div>
                      <h6 className="font-semibold text-indigo-200 mb-1 text-lg">Emergency Controls</h6>
                      <p className="text-sm text-gray-200">
                        Ensuring setting up of emergency controls at the site of accidents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telecommunication Facilities Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Phone className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Telecommunication Facilities in Control Office
              </h2>
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-violet-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Extensive, efficient and reliable communication network is necessary for the
                      efficient functioning of the Control organisation. The following telecommunication
                      network is available in control offices.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h5 className="font-semibold text-violet-300 mb-2 flex items-center gap-2 flex-col">
                        <Route className="w-4 h-4 mr-2" />
                        Section Control Circuits
                      </h5>
                      <p className="text-sm text-gray-200">
                        These are exclusive omnibus circuits connecting Control Boards, Chief Controllers,
                        Dy. Chief Controllers and Operating Officers with Stations, Cabins, Yards, Crew
                        Lobbies etc.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h5 className="font-semibold text-purple-300 mb-2 flex items-center gap-2 flex-col">
                        <Zap className="w-4 h-4 mr-2" />
                        Traction Power Control Circuit
                      </h5>
                      <p className="text-sm text-gray-200">
                        This additional telephone circuit is available on the electrified sections connecting
                        Traction Power Controllers with OHE sub stations, railway stations, control boards
                        and other selected work places. The TPC can also be contacted from the emergency
                        sockets provided over the sections by means of portable telephone. The emergency
                        sockets are provided at every kilometer. Every OHE mast is provided with indications
                        with arrow mark directing towards the nearest point to enable crew to identify the
                        nearest socket.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h5 className="font-semibold text-indigo-300 mb-2 flex items-center gap-2 flex-col">
                        <Wrench className="w-4 h-4 mr-2" />
                        Test Channel for S&T Staff
                      </h5>
                      <p className="text-sm text-gray-200">
                        In order to speedy conveying of S&T failures and ensure quick rectification, every
                        Control Board is provided with telephone connection to Test Room, which is
                        managed by the Test Room.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h5 className="font-semibold text-blue-300 mb-2 flex items-center gap-2 flex-col">
                        <Database className="w-4 h-4 mr-2" />
                        FOIS and ICMS Networks
                      </h5>
                      <p className="text-sm text-gray-200">
                        FOIS and ICMS terminals are provided in Control office to get data from field units
                        and feed Divisional data.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                      <h5 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2 flex-col">
                        <Phone className="w-4 h-4 mr-2" />
                        Hot Lines
                      </h5>
                      <p className="text-sm text-gray-200">
                        Hot lines are provided between:
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Headquarter and Divisions</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Adjoining Divisions and Railways</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <p className="text-sm text-gray-200">Intercom facility to various Officers and other functionaries concerned with
                          the control is connected with important work centres with STD or Trunk
                          Exchanges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-3 border border-white/20 mt-8 animate-fade-in">
            <h2 className="text-xl lg:text-2xl font-bold text-amber-300 mb-6 flex flex-col lg:flex-row text-center items-center gap-3">
              <FileText className="w-7 h-7 text-amber-300" />
              Books & Documents to be Kept in Divisional Control Office
            </h2>
            <ul className="space-y-3 pl-2 text-white lg:text-base text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📘</span>
                <span>Station Working Rules of all stations with diagrams.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🔗</span>
                <span>Rake links, Crew links, Loco links etc.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📏</span>
                <span>Details of maximum moving dimensions permitted on the various sections of the railway.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🗺️</span>
                <span>Map showing the maximum permissible axle load on all the railways with which traffic is interchanged.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📝</span>
                <span>Index sections and plans of the various sections of the jurisdiction, including details of train watering and engine fuelling.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">📊</span>
                <span>Master charts depicting all trains indicated in the working time table in force.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🗂️</span>
                <span>
                  Charts showing jurisdiction of various officials, including:
                  <ul className="pl-0 mt-2 grid gap-2">
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">a</span>
                      <span className="text-blue-100">Maintenance branch of the Signal & Telecommunication responsible for the upkeep of control communication in good condition.</span>
                    </li>
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">b</span>
                      <span className="text-blue-100">The various departments of the railways.</span>
                    </li>
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">c</span>
                      <span className="text-blue-100">Zone and telephone numbers of Civil, Police, Military authorities.</span>
                    </li>
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">d</span>
                      <span className="text-blue-100">List of various hospitals with Telephone Numbers.</span>
                    </li>
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">e</span>
                      <span className="text-blue-100">List of stations Civil, district-wise.</span>
                    </li>
                    <li className="flex items-start bg-white/5 rounded-lg px-3 py-2 shadow-sm transition hover:bg-blue-950/20">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-300 font-bold mr-3 text-md ring-2 ring-blue-400">f</span>
                      <span className="text-blue-100">OHE Sectioning diagram.</span>
                    </li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-amber-400">🛡️</span>
                <span>Line patrol chart.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-3 border border-white/20 mt-8 animate-fade-in">
            <h2 className="text-xl lg:text-2xl font-bold text-teal-300 mb-6 flex flex-col lg:flex-row text-center items-center gap-3">
              <BarChart3 className="w-7 h-7 text-teal-300" />
              Registers Generally Maintained in Divisional Control
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-teal-200 mb-4 flex flex-col lg:flex-row gap-3 text-center items-center">
                  <span className="mr-2"></span>1. Control Board Wise
                </h3>
                <ul className="pl-0 space-y-3">
                  {[
                    { letter: "a", text: "Sections Controller’s Diary and HOC/TOC Book" },
                    { letter: "b", text: "Stock Report Register" },
                    { letter: "c", text: "Incoming and Outgoing Trains RD (Running Diary) (other than passenger)" },
                    { letter: "d", text: "Incoming and Outgoing Passenger Train Running Diary" },
                    { letter: "e", text: "Train Advice / Train Notice" },
                    { letter: "f", text: "Caution Order Register" },
                    { letter: "g", text: "Caution Order Message Book" },
                    { letter: "h", text: "Morning (6 O’Clock) Position Registers" },
                    { letter: "i", text: "Interchange Register" },
                    { letter: "j", text: "Control Failure Register" },
                  ].map(({ letter, text }) => (
                    <li
                      key={letter}
                      className="flex items-start bg-white/5 rounded-lg px-4 py-3 shadow transition hover:bg-cyan-900/20"
                    >
                      <span
                        className="shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-teal-700/75 to-cyan-600/80 rounded-full text-teal-200 font-bold mr-5 text-lg border-2 border-teal-300 shadow-inner"
                        aria-label={`Item ${letter}`}
                      >{letter}</span>
                      <span className="text-white">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-200 mb-4 flex flex-col lg:flex-row gap-3 text-center items-center">
                  <span className="mr-2"></span>2. By the Chief Controller (Main Line), (Stock) and (Coaching)
                </h3>
                <ul className="pl-0 space-y-3">
                  {[
                    { letter: "a", text: "Yard Running Balance Register" },
                    { letter: "b", text: "Dy. Chief Controller’s Diary & HOC/TOC Book" },
                    { letter: "c", text: "Bans and Restrictions Register" },
                    { letter: "d", text: "Forecast and Acceptance Book" },
                    { letter: "e", text: "Train Ordering Book" },
                    { letter: "f", text: "Punctuality Register" },
                    { letter: "g", text: "Without Brake Van / Guard Movement Register" },
                    { letter: "h", text: "Accident Register" },
                    { letter: "i", text: "Conference Instructions Register" },
                    { letter: "j", text: "Central Control Register" },
                    { letter: "k", text: "Emergency Control Register" },
                    { letter: "l", text: "FATO Register" },
                    { letter: "m", text: "DRM’s Unusual Occurrence Register" },
                    { letter: "n", text: "ODC Register" },
                    { letter: "o", text: "Rajdhani Express (and similar trains) Caution Order Register" },
                    { letter: "p", text: "Emergency and General Control Office Message Register (Outward)" },
                    { letter: "q", text: "Interchange Register" },
                    { letter: "r", text: "Inward Message Book" },
                    { letter: "s", text: "Outward Message Book" },
                    { letter: "t", text: "Working Order Registers" },
                    { letter: "u", text: "Weather Warning and Acknowledgement Register" },
                    { letter: "v", text: "Safety Circular Register" },
                    { letter: "w", text: "Road Map Register" },
                    { letter: "x", text: "Night Order Book" },
                  ].map(({ letter, text }) => (
                    <li
                      key={letter}
                      className="flex items-start bg-white/5 rounded-lg px-4 py-3 shadow transition hover:bg-cyan-900/20"
                    >
                      <span
                        className="shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-teal-700/75 to-cyan-600/80 rounded-full text-teal-200 font-bold mr-5 text-lg border-2 border-teal-300 shadow-inner"
                        aria-label={`Item ${letter}`}
                      >{letter}</span>
                      <span className="text-white">{text}</span>
                    </li>
                  ))}
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

export default OMPage66