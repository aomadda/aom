'use client'
import { 
  Network,
  Settings,
  Phone,
  Users,
  FileText,
  AlertCircle,
  BookOpen,
  List,
  ClipboardList,
  Shield,
  Clock} from 'lucide-react'

const ControlOrganization = () => {
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

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur-md shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              CONTROL ORGANIZATION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The Control Organization of Indian Railways is the nerve centre of train operations. It controls the asset management of the Railways, in a dynamic situation, round the clock incessantly moving trains on its entire network.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  It has come a long way from being an exclusively telephone based system emerging in the form of an Information Technology enabled organization.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  This basic structure of Operating Control on Indian Railways exists at the Divisional Level, which has also been extended to Area Control levels. In addition, Central Control Office is situated in the headquarters office and one at Railway Board.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The area spread of a division is divided into control sections, each section having a given number of stations.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The two-way telephone system, also called an omnibus circuit which permits all stations to have direct communication with Section Controller, who is responsible for train regulation in his area. The section Controller can speak to all stations at the same time or to one station selectively, using individual numbers/buttons. Movement of trains is plotted on a time distance graph to record their actual progress, these records, called control charts, can be analyzed later.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  To guide and assist the section controller, there are shift Deputy Controllers.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  All technical disciplines involved in train movement have a representative in the Control office to provide the required support from his department. These would include-
                </p>
                <ul className="ml-6 space-y-2 mb-4">
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Motive Power Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Traction Power Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Signaling and Tele-Communication Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Commercial Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Security Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">C& W Control</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Engineering Control</li>
                </ul>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The entire organization works round the clock, all days of the year without any interruption to monitor actual movement of trains on the entire rail network.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The detailed organization of the control selected and duties assigned to employees depends on the demands of the transport task appropriate to each grade of employee or to diversity in the transport task.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The Chief Controller is the head of Divisional Control Organization.
                </p>
              </div>
            </div>

            {/* Basic Functions of Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Basic Functions of Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* 1. Train Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        1
                      </span>
                    </span>Train Control
                </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Supervising & regulating movement of trains from station to station on the section to avoid delay to trains and to maximize utilisation of the capacity of the section by: -
                  </p>
                  <ul className="ml-0 space-y-3">
                    {[
                      [
                        "a",
                        "Monitoring movement of trains from station to station and recording paths and detention on charts.",
                      ],
                      [
                        "b",
                        "Arranging crossing and precedence of trains judiciously.",
                      ],
                      [
                        "c",
                        "Arranging working of departmental and material trains.",
                      ],
                      [
                        "d",
                        "Giving time signal to all stations on the section daily at appointed time",
                      ],
                      [
                        "e",
                        "Fulfilling interchange commitment.",
                      ],
                      [
                        "f",
                        "Arranging proper movement of assisting/banking /light engines.",
                      ],
                      [
                        "g",
                        "Clearance of sick wagons from Roadside stations.",
                      ],
                      [
                        "h",
                        "Arrangement of relief for 10 hrs duty staff.",
                      ],
                      [
                        "i",
                        "Incident management on rail network & at station",
                      ],
                      [
                        "j",
                        "Arranging Engineering and/or power blocks in such a way as to involve minimum disturbance to train running.",
                      ],
                      [
                        "k",
                        "Maintaining fluidity of yards by controlling the flow of stock in and out of yard",
                      ],
                      [
                        "l",
                        "Arranging Speedy relief in case of accidents.",
                      ],
                    ].map(([letter, text]) => (
                      <li
                        key={letter}
                        className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed"
                      >
                        <span
                          className={`flex items-center justify-center w-7 h-7 rounded-full bg-green-600/70 border-2 border-white/20 shadow-md text-green-100 font-bold text-base mr-2 mt-0.5`}
                          style={{
                            background:
                              "linear-gradient(135deg, #34d39944 0%, #10b98144 100%)",
                          }}
                        >
                          {letter}
                        </span>
                        <span className="flex-1">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Traffic Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        2
                      </span>
                    </span>Traffic Control
                </span>
                    </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Traffic Control is the general and over-riding control for supervision of the movement of goods and coaching traffic on the section. It is exercised by :
                  </p>
                  <ul className="ml-0 space-y-3">
                    {/* (a) with sub-items */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        a
                      </span>
                      <div className="flex-1">
                        Collecting information from the various stations on the section in respect of –
                        <ul className="ml-8 mt-2 space-y-1">
                          <li className="flex items-start gap-2 text-green-50/95 lg:text-sm text-xs leading-relaxed">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-400/60 border border-white/10 text-white font-bold text-xs mr-1 mt-0.5 font-mono">
                              i
                            </span>
                            <span>Registration for wagons outstanding at stations and arrangements for supply of wagons.</span>
                          </li>
                          <li className="flex items-start gap-2 text-green-50/95 lg:text-sm text-xs leading-relaxed">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-400/60 border border-white/10 text-white font-bold text-xs mr-1 mt-0.5 font-mono">
                              ii
                            </span>
                            <span>Number of wagons loaded and empty wagons/rakes awaiting despatch.</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* (b) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        b
                      </span>
                      <span className="flex-1">Arranging running, regulation, putting back and cancellation of trains. (both freight &amp; coaching)</span>
                    </li>
                    {/* (c) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        c
                      </span>
                      <span className="flex-1">Securing maximum loads for trains.</span>
                    </li>
                    {/* (d) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        d
                      </span>
                      <span className="flex-1">Collecting stock position from the different stations, marshalling and terminal yards.</span>
                    </li>
                    {/* (e) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        e
                      </span>
                      <span className="flex-1">Arrangement of Crew &amp; Guard for freight trains</span>
                    </li>
                    {/* (f) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        f
                      </span>
                      <span className="flex-1">To keep liaison with adjoining Railways and Divisions for interchange commitments</span>
                    </li>
                    {/* (g) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        g
                      </span>
                      <span className="flex-1">Monitoring and co-ordinating working of yards, goods sheds sidings, loco-shed, TXR depots etc.</span>
                    </li>
                    {/* (h) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        h
                      </span>
                      <span className="flex-1">Supervising of stock control.</span>
                    </li>
                    {/* (i) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        i
                      </span>
                      <span className="flex-1">Arranging supply of wagons against pending registration.</span>
                    </li>
                    {/* (j) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        j
                      </span>
                      <span className="flex-1">Securing optimum utilisation of stock, with minimum detention.</span>
                    </li>
                    {/* (k) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        k
                      </span>
                      <span className="flex-1">To ensure optimum utilisation of loco and staff.</span>
                    </li>
                    {/* (l) */}
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500/75 border border-white/20 shadow text-green-100 font-bold text-base mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #10b98133 0%, #34d39933 100%)"
                        }}
                      >
                        l
                      </span>
                      <span className="flex-1">To arrange ART &amp; Crane from adjoining Railway/Division in case of accidents and other coordination.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Power Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        3
                      </span>
                    </span>Power Control
                </span>
                    </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Power Control is responsible for provision of motive power to all trains by maintaining position of locomotives
                  </p>
                  <ul className="ml-6 space-y-3">
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        a
                      </span>
                      <span className="flex-1">Requisitioning engines from loco sheds for all operating requirements, i.e. Train working, Shunting and Banking.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        b
                      </span>
                      <span className="flex-1">Ensuring most economical use of engines by close supervision both in Traffic Yards and sheds.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        c
                      </span>
                      <span className="flex-1">Ensuring the return of engines to &quot;Home Sheds&quot; at regular intervals for servicing and maintenance.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        d
                      </span>
                      <span className="flex-1">Ensuring an even balance of engines and crews between running sheds for meeting demands of traffic,</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        e
                      </span>
                      <span className="flex-1">Ensuring that light engine kilometres is kept to the minimum.</span>
                    </li>
                    <li className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600/80 border border-green-300/20 shadow text-green-100 font-bold text-base"
                        style={{
                          background: "linear-gradient(135deg, #22d3ee33 0%, #34d39966 100%)",
                          marginTop: "2px"
                        }}
                      >
                        f
                      </span>
                      <span className="flex-1">Providing guidance to running staff for troubleshooting.</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Carriage and Wagon Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        4
                      </span>
                    </span>Carriage and Wagon Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Carriage and Wagon Control is responsible to assist the train and traffic control and to-
                  </p>
                  <ul className="ml-0 space-y-2">
                    {[
                      { letter: "a", text: "Ensure timely examination and fitness of all trains" },
                      { letter: "b", text: "To keep a watch over the detachment of sick wagons/coaches and to arrange for their early repair and fitness." },
                      { letter: "c", text: "Keeping a watch over availability of vital C&W components, like Air Hoses, Washers, Clamps etc.. and efficient working of equipments &machines in C&W depot to avoid detention to trains." },
                      { letter: "d", text: "To keep a watch over placement of wagons/coaches in sick line and their release." },
                      { letter: "e", text: "To keep account of detention to trains on C&W account and take remedial action." },
                      { letter: "f", text: "To provide guidance to running staff for trouble shooting." },
                      { letter: "g", text: "For Electrical Multiple Units, this function is performed by EMU controller." },
                      { letter: "h", text: "Monitor the movement of POH due stock to workshops" }
                    ].map(item => (
                      <li key={item.letter} className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed">
                        <span
                          className="flex items-center justify-center w-7 h-7 rounded-full font-bold border-2 bg-linear-to-br from-emerald-500/60 to-green-700/80 text-green-50 shadow-lg border-green-200/30 mr-2"
                          style={{ minWidth: "2rem", marginTop: "1px", fontFamily: "serif", fontSize: "1.08em", boxShadow: "0 2px 8px #1e471644" }}
                        >
                          {item.letter}
                        </span>
                        <span className="flex-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Commercial Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        5
                      </span>
                    </span>Commercial Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Commercial Control assists the Traffic and Train Control.
                  </p>
                  <ul className="ml-0 space-y-2">
                    {[
                      { letter: "a", text: "To expeditiously dispose off unclaimed and unconnected wagons, parcel consignments." },
                      { letter: "b", text: "To keep a watch on detention to trains on Commercial account like Alarm Chain Pulling. Carriage watering, Parcel working etc., and take remedial measures." },
                      { letter: "c", text: "To ensure quick transhipment of sick wagons by arranging matching stock and labour." },
                      { letter: "d", text: "To keep a watch over submission of station returns." },
                      { letter: "e", text: "Monitoring of public complaints lodged at the stations." },
                      { letter: "f", text: "To ensure proper maintenance of public amenities available at stations." },
                      { letter: "g", text: "Any other job entrusted by Sr. DCM/DCM." },
                    ].map(item => (
                      <li
                        key={item.letter}
                        className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed"
                      >
                        <span
                          className="flex items-center justify-center w-7 h-7 rounded-full font-bold border-2 bg-linear-to-br from-emerald-500/60 to-green-700/80 text-green-50 shadow-lg border-green-200/30 mr-2"
                          style={{
                            minWidth: "2rem",
                            marginTop: "1px",
                            fontFamily: "serif",
                            fontSize: "1.08em",
                            boxShadow: "0 2px 8px #1e471644",
                          }}
                        >
                          {item.letter}
                        </span>
                        <span className="flex-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Traction Power Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        6
                      </span>
                    </span>Traction Power Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Traction Power Control is provided to assist in Traffic and Train Control for -
                  </p>
                  <ul className="ml-0 space-y-2">
                    {[
                      { letter: "a", text: "Arranging maintenance blocks for OHE" },
                      { letter: "b", text: "Arranging alternative power supply in case of tripping etc., through remote control." },
                      { letter: "c", text: "Monitoring OHE failures and taking remedial action." },
                      { letter: "d", text: "Monitoring detention of trains on OHE accounts." },
                      { letter: "e", text: "Guiding running/ station staff in trouble shooting." },
                    ].map(item => (
                      <li
                        key={item.letter}
                        className="flex items-start gap-3 text-green-50/95 lg:text-base text-sm leading-relaxed"
                      >
                        <span
                          className="flex items-center justify-center w-7 h-7 rounded-full font-bold border-2 bg-linear-to-br from-green-400/70 to-teal-600/80 text-green-50 shadow-lg border-green-200/40 mr-2"
                          style={{
                            minWidth: "2rem",
                            marginTop: "1px",
                            fontFamily: "serif",
                            fontSize: "1.08em",
                            boxShadow: "0 2px 8px #176e5044",
                          }}
                        >
                          {item.letter}
                        </span>
                        <span className="flex-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 7. Engineering Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                  <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        7
                      </span>
                    </span>Engineering Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    Monitors imposition & cancellation of Engineering Restrictions, Working of track machines & monitoring integrated maintainable blocks.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    To co-ordinate works during maintenance blocks
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Running of Material trains.
                  </p>
                </div>

                {/* 8. Signal Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        8
                      </span>
                    </span>Signal Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Signal Control assists Traffic and Train Control and is responsible -
                  </p>
                  <ul className="ml-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-600/70 border-2 border-white/20 shadow-md text-green-100 font-bold text-base mt-1 ring-2 ring-green-400/20">
                        a
                      </span>
                      <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        To keep a watch over the S&amp;T failures and take remedial action.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-600/70 border-2 border-white/20 shadow-md text-green-100 font-bold text-base mt-1 ring-2 ring-green-400/20">
                        b
                      </span>
                      <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                        To ensure efficient working of communication channels
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 9. Security Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        9
                      </span>
                    </span>Security Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Security Control is responsible for prevention of theft of property and assists passengers in trains/stations.
                  </p>
                </div>

                {/* 10. Functions of Control */}
                <div>
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4 text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        10
                      </span>
                    </span>Functions of Control
                    </span>
                  </h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The main functions of Traffic Control are:
                  </p>
                  <ul className="ml-0 space-y-3">
                    {[
                      "Continuous supervision of the movement of all traffic in the controlled area with a view to achieve the maximum possible operating efficiency.",
                      "Systematic maintenance of accurate charts of train movements and the arrangements of crossing and precedence to the greatest advantage.",
                      "Analysis of detentions to trains",
                      "Planning, ordering and running of goods trains to the best possible paths.",
                      "Maintaining the fluidity of marshalling yards/freight terminals.",
                      "Taking remedial action in the event of yard/terminal congestion.",
                      "Elimination of avoidable detentions to goods stock at loading and unloading points and at transhipment stations.",
                      "Allotment and distribution of goods stock to stations,",
                      "Supply of information to adjoining controls, terminals and engine changing stations regarding the movements of trains to enable adequate timely arrangements for their reception and onward despatch.",
                      "Arranging of engineering and other departments blocks with minimum detention to traffic.",
                      "Running of material trains and other track machines, tower wagons etc.",
                      "Arranging relief for engine crews and Guards.",
                      "Ensuring maximum utilisation of locomotives.",
                      "Issuing instructions for train working in case of equipment failures and whenever abnormal methods or working have to be resorted to.",
                      "Speedy arrangements for relief rescue and restoration in the event of accident.",
                      "To assist in the realistic planning of time tables and punctual running of passenger trains in coordination with various departments, other divisions and other railways.",
                      "To keep a watch over damaged stock at road side stations, yards and sick lines and to ensure that they are promptly attended to",
                      "To rectify immediately the irregularities on the part of line staff and provide them necessary guidance.",
                      "To provide operations management information.",
                      "To ensure smooth functioning of FOIS and other IT applications.",
                    ].map((text, i) => {
                      const labels = 'abcdefghijklmnopqrstuvwxyz';
                      return (
                        <li key={labels[i]} className="flex items-start gap-3 group">
                          <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500/80 to-teal-400/80 shadow-lg border-2 border-white/20 font-semibold text-base text-green-50 group-hover:scale-110 transition-all duration-300 ring-2 ring-green-400/30 mt-1">
                            {labels[i]}
                          </span>
                          <span className="text-green-50/95 lg:text-base text-sm leading-relaxed">{text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Telecommunication Facilities in Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Phone className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Telecommunication Facilities in Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Extensive, efficient and reliable communication network is necessary for the efficient functioning of the Control organisation. The following telecommunication network is available in control offices.
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">1. FOIS Network</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">2. Hot lines are provided between:</span>
                    </p>
                    <ul className="ml-6 space-y-3">
                      {[
                        {
                          label: "a",
                          text: "Headquarter and Divisions"
                        },
                        {
                          label: "b",
                          text: "Adjoining Divisions and Railways"
                        },
                        {
                          label: "c",
                          text: "Intercom facility to various Officers and other functionaries concerned with the control is connected with important work centres with STD or Trunk Exchanges."
                        }
                      ].map(({ label, text }) => (
                        <li key={label} className="flex items-start gap-3 group">
                          <span
                            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-purple-500/80 to-pink-400/80 shadow-lg border-2 border-white/20 font-bold text-base text-purple-50 group-hover:scale-110 transition-all duration-300 ring-2 ring-purple-400/30 mt-1"
                          >
                            {`${label}`}
                          </span>
                          <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">3. Deputy Control Lines:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This circuit is provided between various functionaries in the control office, stations and important work centres like yards, loco sheds, crew booking lobbies.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">4. Section control circuit:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This circuit is connected to all the stations and the section controller, Chief controller etc.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">5. Traction Power Control circuit:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This additional telephone circuit is available on the electrified sections; this is connected to T.P.C. in OHE remote control centre, all stations, control-offices and selected work places. The section controller or T.P.C. can also be contacted from the emergency socket provided over the sections of line by means of portable telephone of the control point with indication on the electric mast, direction wise, to the nearest circuit.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">6. Section Control Board:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The Section Controller of each section is provided with control board with Telecommunication facilities for coaching stations, certain important cabins, big freight terminals, loco shed etc. over a section. For the guidance of section controller, the lay out of all the stations and sidings is painted on a large board.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      The station lay out diagram is also provided with details of holding capacity of each of the running & non-running lines, gradients and signals. In electrified area, OHE sectioning diagram is provided. This depicts elementary sections in different colours & other details of sectioning post (SP) and Sub-sectioning post (SSP).
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">7. Graphs and Plotting:</span>
                    </p>
                    <ul className="ml-6 space-y-5">
                      {/* i) */}
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-purple-600/90 to-pink-400/80 shadow-lg border-2 border-white/20 text-purple-50 font-semibold text-base mt-0.5">
                          i
                        </span>
                        <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          Trains are plotted on control graphs which consist of horizontal and vertical lines representing distance and time respectively. Along side the vertical lines stations are spaced to a uniform scale. Each one hour is first divided into 6 units of 10 minutes each and each unit is further sub-divided into 5 smaller units of 2 minutes each.
                        </span>
                      </li>
                      {/* ii) */}
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-purple-600/90 to-pink-400/80 shadow-lg border-2 border-white/20 text-purple-50 font-semibold text-base mt-0.5">
                          ii
                        </span>
                        <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed flex flex-col">
                          Each control graph at the end of the shift may have the following information on it:
                          {/* Nested List */}
                          <ul className="ml-7 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {[
                              { label: 'a', text: 'Name and total distance of the section in Kilometres.' },
                              { label: 'b', text: 'Distance in Kms. between each station on the section.' },
                              { label: 'c', text: 'State of weather in each shift.' },
                              { label: 'd', text: 'Engineering restrictions on the section.' },
                              { label: 'e', text: 'Code names of each station of the section.' },
                              { label: 'f', text: 'Time lost by each train on loco, traffic or engineering account at or between stations.' },
                              { label: 'g', text: 'Section Controller\'s remarks against item (d).' },
                              { label: 'h', text: 'Time made up by each train on loco, traffic or engineering account.' },
                              { label: 'i', text: 'Guard\'s record of time lost on loco, traffic or engineering account at or between stations and remarks.' },
                              { label: 'j', text: 'General remarks.' },
                              { label: 'k', text: 'Signal failures' },
                            ].map(({ label, text }) => (
                              <li key={label} className="flex items-start gap-2 py-0.5">
                                <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-linear-to-tr from-purple-500/70 to-pink-300/60 border border-white/10 text-purple-100 text-xs font-semibold mr-1">
                                  {`${label}`}
                                </span>
                                <span className="text-purple-50/90 lg:text-sm text-xs leading-relaxed">{text}</span>
                              </li>
                            ))}
                          </ul>
                        </span>
                      </li>
                      {/* iii) */}
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-purple-600/90 to-pink-400/80 shadow-lg border-2 border-white/20 text-purple-50 font-semibold text-base mt-0.5">
                          iii
                        </span>
                        <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          In plotting various types of trains the coloured pencils shall be used as per extant convention. All up trains are plotted from the bottom of the chart upwards and from the left diagonally towards the right; and all down trains are plotted from the top of the chart downwards and also diagonally from the left towards the right.
                        </span>
                      </li>
                      {/* iv) */}
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-purple-600/90 to-pink-400/80 shadow-lg border-2 border-white/20 text-purple-50 font-semibold text-base mt-0.5">
                          iv
                        </span>
                        <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          For judicious crossing and precedence, it is necessary to have plotting of passenger trains at least one hour in advance depending on traffic density in easily erasable lines. Now through computerized charting this is automated. On certain selected controls, this function has been automated.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">8. Master Charts:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      For every section, Master Charts indicating trains run in 24 hours are prepared which show the running of each Mail, Express or passenger trains over the sections according to its scheduled running. In between the running of trains carrying passengers, paths for goods trains are worked out and plotted. They are helpful in revision of time tables and planning the running of any extra train and guidance of section controllers and should be displayed on the boards to which they refer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duties of Control Staff Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Duties of Control Staff
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  The main duties of control staff are as under: These are only guidelines to their day to day working and are not exhaustive.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        a
                      </span>
                    </span>Chief Controller (In-charge):
                </span>
                      </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The Chief controller is in- overall charge of control office and is responsible for the total transportation of the Division on day to day basis. His duties include-
                    </p>
                    <ul className="ml-0 space-y-3">
                      {[
                        "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv"
                      ].map((num, idx) => {
                        const items = [
                          "A review of previous day's performance to confirm that all forecasts made have been fully met. For shortfalls, cogent reasons have to be pinpointed to prevent recurrence",
                          "Prepare current forecast indicating assistance needed from Hedquarters, adjoining Divisions, railways",
                          "These will generally relate to interchange, loading and locomotive utilisation",
                          "Checking control charts and bringing to the notice of the Senior Divisional Operations Manager/Divisional Operations Manger all avoidable detention to trains.",
                          "Punctuality performance with particular reference to trains which lost punctuality",
                          "Maintaining statistics regarding the punctuality of passenger trains.",
                          "Scrutiny of stock papers, Monitoring interchange obligations.",
                          "Watching detention to stock at stations and terminals",
                          "Watching the work of marshalling yards/freight terminals.",
                          "Maintaining liaison with neighbouring Divisions",
                          "Watching utilisation of loco and their terminal detention.",
                          "Checking duty hours of running staff and balancing of crews.",
                          "Granting engineering blocks, power blocks etc.,",
                          "Attending control office in cases of accident",
                          "Establishment work of control office"
                        ];
                        const colorSet = [
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200",
                          "from-yellow-400 to-orange-200"
                        ];
                        return (
                          <li key={num} className="flex items-start gap-3 group">
                            <span
                              className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br ${colorSet[idx % colorSet.length]} shadow-lg border-2 border-white/25 text-yellow-800 font-bold text-base mt-0.5 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {num}
                            </span>
                            <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed group-hover:text-yellow-100 transition-colors duration-200">
                              {items[idx]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        b
                      </span>
                    </span>Chief controller (Movement)/Dy. Chief Controller / Shift duty:</span>
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      He is responsible for:
                    </p>
                    <ul className="ml-0 space-y-3">
                      {[
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                      ].map((num, idx) => {
                        const items = [
                          "Running of goods trains, preparing interchange forecast, and monitoring the same, loco utilisation and passenger and goods train operations in general.",
                          "Allotting empty stock/rakes to loading stations in accordance with current priority regulations along with Dy. Chief Controller (Stock) ,maintaining constant touch with adjacent divisions through regular conference to facilitate the smooth flow of traffic.",
                          "Dealing immediately with significant detentions or transport bottlenecks and other unusuals.",
                          "Keeping constant touch with the working of major terminals & Marshalling yards and taking timely action to deal with congestion.",
                          "Giving advice of serious accidents to all concerned, and taking, charge of the affected sections.",
                          "Supervising the running of oversized consignments.",
                          "Maintaining liaison with the Power Controller.",
                          "Co-ordinate the work of various Section Controllers.",
                          "Maintain discipline among control staff in the absence of Chief Controller.",
                          "Maintain co-ordination and liaison with various functionaries involved in train running."
                        ];
                        // Use a pastel-gradient for the circle number
                        const gradients = [
                          "from-yellow-200 via-orange-200 to-yellow-400",
                          "from-orange-200 via-yellow-200 to-orange-400",
                          "from-yellow-300 via-orange-100 to-yellow-500",
                          "from-yellow-100 via-orange-300 to-yellow-300",
                          "from-yellow-200 via-orange-200 to-yellow-400",
                          "from-orange-200 via-yellow-200 to-orange-400",
                          "from-yellow-300 via-orange-100 to-yellow-500",
                          "from-yellow-100 via-orange-300 to-yellow-300",
                          "from-yellow-200 via-orange-200 to-yellow-400",
                          "from-orange-200 via-yellow-200 to-orange-400",
                        ];
                        return (
                          <li key={num} className="flex items-start gap-3 group">
                            <span
                              className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br ${gradients[idx % gradients.length]} shadow-lg border-2 border-yellow-200/30 text-yellow-900 font-bold text-base mt-0.5 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {num}
                            </span>
                            <span className="text-yellow-50/95 lg:text-base text-sm leading-relaxed group-hover:text-yellow-100 transition-colors duration-200">
                              {items[idx]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        c
                      </span>
                    </span>Chief Controller (stock) / Dy. Chief Controller:</span>
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      He is responsible for:
                    </p>
                    <ul className="ml-0 space-y-3">
                      {[
                        "(i) Scrutinising the indent register in details with regard to the oldest date of registration, nature of goods and type of stock required for lifting goods as per the oldest date of registration.",
                        "(ii) Checking Divisional stock report and position of empties.",
                        "(iii) Checking of different stock reports received from the various points and planning in advance the supply of stock, loading and clearance keeping in view interchange obligation and orders received",
                        "(iv) Checking transhipment activity",
                        "(v) Chasing movements of stock as per supply order issued on the previous day.",
                        "(vi) Keeping a close watch over hot axle, special type and unconnected wagons.",
                        "(vii) Cross checking the daily Restriction Bulletin with Restriction Messages received from HQ office and issuing the same.",
                        "(viii) Assisting the Sr. DOM/DOM in allotments.",
                        "(ix) Keeping a close watch over the movements of seasonal perishable traffic and supply of suitable stock for its clearance.",
                        "(x) Watching movements of damaged loaded stock in sick line and yards on their division.",
                        "(xi) Informing all major customers about their inward trains' expected arrival based on FOIS pipe line, Optimising loading, unloading, transhipment etc."
                      ].map((item, idx) => {
                        // Nice pastel gradients for numbers
                        const gradients = [
                          "from-green-200 via-emerald-300 to-blue-300",
                          "from-yellow-200 via-orange-200 to-pink-200",
                          "from-blue-200 via-cyan-300 to-green-200",
                          "from-indigo-200 via-purple-300 to-pink-200",
                          "from-purple-200 via-pink-200 to-red-200",
                          "from-orange-200 via-yellow-200 to-green-200",
                          "from-teal-200 via-cyan-200 to-blue-200",
                          "from-rose-200 via-pink-200 to-yellow-200",
                          "from-blue-200 via-sky-200 to-teal-200",
                          "from-fuchsia-200 via-indigo-200 to-sky-200",
                          "from-amber-200 via-lime-200 to-green-200"
                        ];
                        // Get the visible roman numbering like i, ii, ...
                        const roman = [
                          "i", "ii", "iii", "iv", "v", "vi",
                          "vii", "viii", "ix", "x", "xi"
                        ];
                        return (
                          <li key={idx} className="flex items-start gap-3 group">
                            <span
                              className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br ${gradients[idx % gradients.length]} shadow-md border border-white/30 text-slate-800 font-semibold text-base mt-1 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {roman[idx]}
                            </span>
                            <span className="text-yellow-50/95 bg-white/5 px-3 py-2 rounded-2xl lg:text-base text-sm leading-relaxed shadow group-hover:bg-yellow-100/10 group-hover:text-yellow-100 transition-all duration-200">
                              {item.slice(item.indexOf(" ")+1)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 text-center">Duties of Deputy Chief Controller (Punctuality):</h3>
                    <ul className="ml-0 space-y-3">
                      {[
                        "Ensuring punctuality of passenger trains in system",
                        "Ensuring punctuality at the start of all outgoing passenger train",
                        "Maintaining Detention Reports of Coaching trains",
                        "Ensure that late running trains make up time"
                      ].map((item, idx) => {
                        const gradients = [
                          "from-yellow-200 via-orange-200 to-pink-200",
                          "from-green-200 via-emerald-100 to-blue-200",
                          "from-blue-200 via-indigo-200 to-purple-200",
                          "from-amber-200 via-yellow-200 to-lime-200"
                        ];
                        const roman = ["i", "ii", "iii", "iv"];
                        return (
                          <li key={idx} className="flex items-start gap-3 group">
                            <span
                              className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br ${gradients[idx % gradients.length]} shadow-md border border-white/20 text-slate-900 font-bold text-base mt-1 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {roman[idx]}
                            </span>
                            <span className="text-yellow-50/95 bg-white/5 px-3 py-2 rounded-2xl lg:text-base text-sm leading-relaxed shadow group-hover:bg-yellow-100/10 group-hover:text-yellow-100 transition-all duration-200">
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        d
                      </span>
                    </span>Section Controller:</span>
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The Section Controller shall be responsible for:
                    </p>
                    <ul className="ml-0 space-y-3">
                      {[
                        "(i) Reporting for duty at the prescribed time and ascertaining the position of the section from his reliever.",
                        "(ii) Recording the movement of trains on the 'Control' graph including crossing, connections and shunting reasons for detentions etc.",
                        "(iii) Arranging for the supply and clearance of stock as ordered by Dy. Controller.",
                        "(iv) Advising stations in advance of the work to be done on trains on move",
                        "(v) Informing sheds and stations about the late running of trains to avoid the calling of Crew and Guards earlier than necessary or to put back trains wherever advisable.",
                        "(vi) Informing major stations and concerned Section Controller about the current running of trains on the section and their anticipated arrivals well in time",
                        "(vii) Keeping in close touch with Engineering-blocks and working of material trains so as to give the maximum possible time with least detention to other traffic.",
                        "(viii) Incident management to include adjusting movements of trains in view of the likely impact of the incident, informing all concerned",
                        "(ix) Keeping a watch over damaged vehicles detached at road side stations and arranging repairs or transhipment of their contents and proper attention on the part of the train examining staff.",
                        "(x) Arrangement of ART & M/Van in case of accident.",
                        "(xi) Eliminating all possible detention to train and stock.",
                        "(xii) Watching the working of marshalling yards & major terminals.",
                        "(xiii) Making timely arrangements for the relief of Guards /loco pilots whose duty hours are likely to exceed enroute.",
                        "(xiv) Recording stock report (where stock clerks are not posted)"
                      ].map((item, idx) => {
                        const gradients = [
                          "from-yellow-200 via-orange-200 to-pink-200",
                          "from-green-200 via-emerald-100 to-blue-200",
                          "from-blue-200 via-indigo-200 to-purple-200",
                          "from-amber-200 via-yellow-200 to-lime-200"
                        ];
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-4 group"
                          >
                            <span
                              className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-linear-to-br ${gradients[idx % gradients.length]} shadow-md border border-white/20 text-slate-900 font-bold text-base mt-1 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {String.fromCharCode(0x2170 + idx)}
                            </span>
                            <span className="text-yellow-50/95 bg-white/5 px-4 py-2 rounded-2xl lg:text-base text-sm leading-relaxed shadow group-hover:bg-yellow-100/10 group-hover:text-yellow-100 transition-all duration-200">
                              {item.slice(item.indexOf(" ") + 1)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        e
                      </span>
                    </span>Power Controller/Traction Loco Controller:</span>
                    </h3>
                    <ul className="ml-0 space-y-4">
                      {[
                        "Planning and directing engine movements so as to ensure efficient engine utilization and maintaining the prescribed charts, and regular statistics.",
                        "Co-ordination with sheds and Dy. Chief Controllers (movement) for sending overdue engines and obtaining time of engines coming out of shed.",
                        "Making timely arrangement for the relief of crew whose duty hours are likely to be exceeded enroute",
                        "Taking timely action to balance crew so as to prevent cancellation or putting back of trains on account of shortage of crew.",
                        "Arranging relief in case of accidents as per chapter IV to VIII of Accident Manual.",
                        "Maintaining charts indicating engine position/utilisation.",
                        "Rendering advice and assistance to locomotive running staff regarding trouble shooting.",
                        "Carrying out any other duties allotted to him by the Sr.DME/DME or Sr.DEE/DEE from time to time.",
                        "Monitoring day-to-day stock position of diesel fuel at RDIs and watching movement of diesel fuel tank wagons (for power controllers only)"
                      ].map((item, idx) => {
                        const numberGradients = [
                          "from-purple-200 via-blue-200 to-green-200",
                          "from-pink-200 via-yellow-200 to-orange-200",
                          "from-indigo-200 via-fuchsia-100 to-purple-200",
                          "from-green-200 via-emerald-100 to-yellow-200"
                        ];
                        // Circled lower-case Roman numerals: U+2170 (ⅰ)
                        return (
                          <li key={idx} className="flex items-start gap-4 group">
                            <span
                              className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br ${numberGradients[idx % numberGradients.length]} shadow-md border border-white/25 text-slate-900 font-bold text-base mt-1 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {String.fromCharCode(0x2170 + idx)}
                            </span>
                            <span className="text-yellow-50/95 bg-white/10 px-4 py-2 rounded-xl lg:text-base text-sm leading-relaxed shadow group-hover:bg-yellow-100/20 group-hover:text-yellow-100 transition-all duration-200">
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                    <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        f
                      </span>
                    </span>Traction Power Controller:</span>
                    </h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Traction Power Controller shall be responsible for:
                    </p>
                    <ul className="ml-0 space-y-4">
                      {[
                        "While taking over shift duty acquaint himself with the prevailing position of the entire section, including the working of the Remote Control equipment position of all transformers, current breaker's interrupters and isolators, sections under power block, position of tower wagons and break down vehicle etc.",
                        "Maintaining continuous contact with the Traffic Section Controllers in regard to power supply affecting train movements, imposing power blocks etc.",
                        "Taking prompt action for restoration of supply in the event of power supply interruptions or other failures.",
                        "Imposing and removing power blocks in consultation with Traffic Section Controller.",
                        "Advising promptly the concerned officials in case of accidents, OHE breakdown, failure of power supply and keeping them posted with all important developments."
                      ].map((item, idx) => {
                        const numberGradients = [
                          "from-green-200 via-blue-100 to-blue-300",
                          "from-yellow-200 via-orange-100 to-red-200",
                          "from-indigo-200 via-blue-100 to-green-100",
                          "from-purple-200 via-fuchsia-100 to-pink-200",
                          "from-emerald-200 via-lime-100 to-yellow-200"
                        ];
                        // Lower-case Roman numerals in a circle: U+2170 (ⅰ)
                        return (
                          <li key={idx} className="flex items-start gap-4 group">
                            <span
                              className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-linear-to-br ${numberGradients[idx % numberGradients.length]} shadow-md border border-white/25 text-slate-900 font-bold text-base mt-1 group-hover:scale-110 transition-transform duration-200`}
                            >
                              {String.fromCharCode(0x2170 + idx)}
                            </span>
                            <span className="text-yellow-50/95 bg-white/10 px-4 py-2 rounded-xl lg:text-base text-sm leading-relaxed shadow group-hover:bg-yellow-100/20 group-hover:text-yellow-100 transition-all duration-200">
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Discipline Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Operating Discipline
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Beautifully formatted numbered section for Operating Discipline */}
                <ol className="space-y-5 list-none">
                  {/* i */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-400/80 via-indigo-700/80 to-cyan-400/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅰ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Line Staff to obey orders of control:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        Station staff, Shed staff, Crew and Guards etc must obey orders issued by the Control as long as these orders are consistent with the General and Subsidiary Rules, extant instructions and the instructions contained in this Manual.
                      </p>
                    </div>
                  </li>
                  {/* ii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-400/80 via-sky-500/80 to-emerald-200/80 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅱ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        &apos;Control order register&apos;:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-1.5">
                        Important instructions from control will first be recorded in a register maintained in the control office and serially numbered, commencing with number 1 after midnight each day. These will be issued as messages indicating the time of issue
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-1.5">
                        All such orders received by the Station Masters or Running staff and Guards&apos; lobby from Control should be entered in the control order register by the staff. Each entry must be initialled with time.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        At the end of each turn of duty the relieved as well as the relieving Station Master or Crew Controller must sign their name in full below the last entry in the register. On days when no orders are received from control, &quot;Nil&quot; entry must be recorded and signed as prescribed above. When a station Master or Crew Controller has received an order from the control and entered it in his register, he may repeat it to the control in order to satisfy himself and the control that he has understood it correctly.
                      </p>
                    </div>
                  </li>
                  {/* iii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-400/80 via-violet-700/80 to-indigo-500/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅲ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        No Terminal Station should start a goods or unscheduled train or block the section without the permission of the Controller.
                      </p>
                    </div>
                  </li>
                  {/* iv */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-sky-400/80 via-pink-400/80 to-blue-300/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅳ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        Every Station on the section must report the movement of every train- passenger, goods, special, departmental, light engines, TTMs, Tower Wagons, trollies etc. to the controller.
                      </p>
                    </div>
                  </li>
                  {/* v */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-emerald-300/80 via-indigo-300/80 to-cyan-300/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅴ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        When the control is in function, Line Clear must be asked from the station ahead for every train unless orders to stop it are given by the Controller.
                      </p>
                    </div>
                  </li>
                  {/* vi */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-100/70 via-blue-400/70 to-indigo-900/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅵ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        The Controller&apos;s permission must be obtained before stopping a train that should run through except to avert an accident or dangerous condition.
                      </p>
                    </div>
                  </li>
                  {/* vii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-200/90 via-purple-700/80 to-sky-200/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200   select-none">
                      ⅶ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        No station should allow a train, which has been stopped out of course, to proceed, without first informing the controller that the train has been so stopped and receiving his further orders.
                      </p>
                    </div>
                  </li>
                  {/* viii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500/80 via-indigo-200/80 to-cyan-300/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅷ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        Station Master must advise the controller of any unauthorised or undue detention to trains at their stations with full explanation.
                      </p>
                    </div>
                  </li>
                  {/* ix */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br  from-sky-400/80 via-indigo-600/80 to-green-200/80 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅸ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        Whenever a train, either passenger or goods is detained at a station for longer than the booked halt without the orders of the Controller, on its departure, the Station Master must immediately inform the brief cause of the detention to the Controller.
                      </p>
                    </div>
                  </li>
                  {/* x */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-300/70 via-purple-500/70 to-purple-200/90 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅹ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        Whenever any damaged wagon is detached out of course at a station, the Station Master on duty should inform the Controller.
                      </p>
                    </div>
                  </li>
                  {/* xi */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-900/80 via-sky-200/60 to-blue-200/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅺ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold">
                        Station Master must promptly advise the Controller of any defects of signals, points, interlocking apparatus and line clear instruments at their stations. Information should also be given of any defects in any other station machinery such as cranes, wagon weigh bridges, turn tables, water columns, hydrants etc.
                      </p>
                    </div>
                  </li>
                  {/* xii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-cyan-200/70 via-indigo-200/70 to-pink-200/90 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      ⅻ
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Starting stations to report particulars of outgoing train:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        As soon as a train leaves a train starting station, the Station Master must intimate the following particulars to the control office: Number and description of train, Engine number and class, Loco pilot&apos;s name, Guard&apos;s name, load of the train (in tonnes and vehicles) particulars of shunting to be done on the journey, time of departure, brief reasons of late start, time of S/O of crew fuel balance etc.
                      </p>
                    </div>
                  </li>
                  {/* xiii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-fuchsia-200/80 via-indigo-700/70 to-blue-200/60 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      xiii
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Intermediate stations to report arrival and departure time of trains:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        Station Master of intermediate station must communicate to the Control as early as possible, the following information in regard to every train dealt with:
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">
                          (a) In case the train has run through, the time it passed the station.
                        </li>
                        <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">
                          (b) If it is a stopping train, the time or arrival and departure along with the explanation for every detention beyond the scheduled stoppage.
                        </li>
                        <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">
                          (c) If any shunting has been performed, the number of vehicles attached and detached.
                        </li>
                        <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">
                          (d) If any extra time has been taken in loading and unloading of packages, the number of such packages and name of the loading station.
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* xiv */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-sky-200/60 via-indigo-400/70 to-pink-200/80 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      xiv
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Terminating stations to report the particulars of incoming trains:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        Station Masters of terminal and engine changing station must, as soon as possible, after the arrival of a train, communicate to the control the time of arrival and the load of the train, particulars of loco detached/attached.
                      </p>
                    </div>
                  </li>
                  {/* xv */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-400/70 via-fuchsia-200/70 to-blue-200/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      xv
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Engine Movements to and from sheds to be reported:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-1.5">
                        Loco foreman must communicate to control the time at which train engine leave from or returns to the shed &apos;Bahar line&apos;.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        This in no way, relieves the Station Master of the responsibility for issuing necessary all concerned messages regarding engine failures and engine trouble enroute. The Controller, shall record the duration of such defects in his chart, diary and registers.
                      </p>
                    </div>
                  </li>
                  {/* xvi */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-sky-200/80 via-indigo-300/80 to-green-200/80 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      xvi
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Time to be checked with control:
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        Station Master, Crew Controller and Lobbies must check their time with control at appointed hours every day when control gives a general ring for setting their watches/clocks at 16:00 hrs. Staff must obtain Station Master&apos;s permission before speaking to Controller.
                      </p>
                    </div>
                  </li>
                  {/* xvii */}
                  <li className="flex items-start gap-4 group">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-indigo-700/80 via-fuchsia-200/80 to-cyan-200/70 shadow-lg border border-indigo-200/30 text-white font-bold text-xl mt-0.5 group-hover:scale-105 transition-transform duration-200 select-none">
                      xvii
                    </span>
                    <div>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed font-semibold mb-1">
                        Mode of using the control phone :
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-1.5">
                        The Control telephone is to be used for operational purposes. The field staff wanting to talk to control will give their identity and wait for their turn to communicate .As this network is intensively used, the conversation should be brief, meaningful and polite. Discussions, disputes and arguments must be avoided.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-1.5">
                        <span className="font-bold text-indigo-200/80">a)</span> Station Master and others must not start to speak to control unless they have ascertained by lifting the receiver and listening in, that the line is free. They must then announce the name of the station, shed, lobby or site from where they are speaking and wait for its being repeated by the controller before beginning the conversation.
                      </p>
                      <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-bold text-indigo-200/80">b)</span> When, however an urgent message has to be conveyed and the line happens to be engaged, the station name must be called indicating Emergency. The Controller will immediately attend to the Station having an emergency. Station Masters must attend &apos;Control Call&apos; promptly.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Co-ordination between Control and Stations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  Co-ordination between Control and Stations
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Asking line clear: In order to avoid the detention to passenger trains for crossing a less important train, line clear enquiry for the less important train must not be asked until the train is ready to leave and until the Section Controller&apos;s permission has been obtained. The Station Master receiving the line clear enquiry must immediately ask the Controller&apos;s permission to give line clear before giving the reply. The Station Master on duty is entirely responsible for seeing that the necessary General and Subsidiary rules and Station Working Rules are observed before giving Line Clear.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">When a Station Master for any reason finds it difficult to carry out Controller&apos;s arrangement to receive the train in yard/station due to yard/ station constraints, he must explain his reasons clearly and fully to the Controller.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Work at stations: The permission of the Controller must be obtained before the performance of any shunting; Controller must be informed of the likely duration of shunting to enable him to arrange crossing and precedence of trains. In the event of Station Master being unable to start a train on receipt of line clear, he must at once report the circumstances to the Controller.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">4</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Control order regarding crossings etc.: The Section Controller will give definite instruction for crossing or precedence and will not change them except under unavoidable circumstance because last minute change of order will result in confusion and unsafe operation. The Station Master is entirely responsible for seeing that the crossing is effected safely and strictly in accordance with the rules. The Controller must see that sufficient time is available for the necessary operations to be carried out. If the Controller fails to do so, the Station Master should represent that delay may occur, but it does not allow him to disregard any rules in order to avoid such delay.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Order of Precedence of Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  General Order of Precedence of Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Unless specific orders to the contrary are issued by the COM or by those acting on his behalf, the following general orders of precedence shall be observed by control and stations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">1</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">ARME, ART proceeding to the site of accident.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">2</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">President&apos;s and VVIP&apos;s specials (Unless otherwise specified in the Time Table).</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">3</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Suburban train in peak rush direction.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">4</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Super fast trains like Shatabdi, Rajdhani etc.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">5</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Mail / Express trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">6</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Military personnel special, if instructed by emergency control/DOM.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">7</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Fast Passenger train</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">8</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Special engaged by the public. (Precedence order may be revised)</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">9</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Passenger trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">10</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Mixed trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">11</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Military stores special.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">12</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Express or special goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">13</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Through goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">14</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Accident relief train returning from the site of accident (unless otherwise ordered).</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">15</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Shunting and van goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">16</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Departmental trains.</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-red-200">Note:</span> - The following general principles are mentioned for the guidance of Controllers but it must be distinctly understood that nothing in these instructions modifies the safety precautions laid down in the rules (General and Subsidiary Rules, Station Working Rules etc.).
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(i) A Passenger train nearing the end of its run should not normally be detained in preference to a train which has a longer run before it, as the latter train is more likely to make up time and reach its destination punctually than the former.</li>
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(ii) A train running to time should not be detained more than 30 minutes to effect crossing on single line. (This should be decided by the Division based on actual condition.)</li>
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(iii) A train running late due to defective engine, or defect in rolling stock or any other cause which is likely to continue to operate against it and prevent it from making up time, should generally give way to a train running properly.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accidents Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Accidents
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light">
                  Controllers and other staff should thoroughly understand and act on the guidelines contained in G & SR and Accident Manual. Saving of lives and rescue of injured and mitigating hardship to passengers must be given the topmost priority.
                </p>
              </div>
            </div>

            {/* Working of Trains when Control is interrupted Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Clock className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Working of Trains when Control is interrupted
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed font-light">
                  When the control is interrupted and no communication with the Controller is possible, Station Masters will be responsible for the working and regulating of trains, keeping in view the instructions issued by the railway administration.
                </p>
              </div>
            </div>

            {/* Books/Documents and basic records Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-indigo-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-indigo-500/30 transition-all duration-500">
                  <BookOpen className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Books/Documents and basic records to be kept in Control Office
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-3 list-decimal list-inside marker:text-blue-400/80 marker:font-bold marker:text-2xl">
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Station Working Rules of all stations.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Working facilities available on the transhipment sheds.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Schedule of shunting engines in the various yards.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Link diagrams of rakes and engines working the passenger services and also of goods trains where laid down.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Crew link diagram of the various services, for the running staff.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Details of maximum moving dimensions permitted on the various section of the railway.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Map showing the maximum permissible axle load on all the railways with which traffic is interchanged.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Charts showing line capacity of the various sections.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Index sections and plans of the various sections of the jurisdiction and details of train watering, Engine fuelling etc.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Master charts depicting all trains indicated in the working time table in force.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Charts showing jurisdiction of the various officials details of :
                    </span>
                    <ul className="ml-6 mt-2 space-y-1 list-[lower-alpha] marker:text-blue-200/80 marker:font-semibold marker:text-base">
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          of the maintenance branch of the post and Telegraph department responsible for maintaining control circuit wires in good condition.
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          of the various departments of the railways,
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          Zone and telephone numbers of Civil, Police, Military authorities.
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          List of various hospitals with Telephone Numbers.
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          List of stations Civil, district-wise.
                        </span>
                      </li>
                      <li>
                        <span className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">
                          OHE Sectioning diagram.
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Diagrams showing the layout of line wires of the Control Circuit.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Line patrol chart
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      A calendar of returns
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Cranes and Wagon weigh bridges.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Turn tables and Triangles.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      List of spare coaches based in the division as well as slip coaches running on and across the division.
                    </span>
                  </li>
                  <li>
                    <span className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      List of coaching Rakes allotted to the division and those passing over the division.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Registers generally maintained in Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Registers generally maintained in Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3 text-center">1. By the Section controller:</h3>
                    <ul className="ml-0 space-y-2 grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2">
                      {[
                        { letter: "a", text: "Section controller's diary and charge book." },
                        { letter: "b", text: "Inward message book." },
                        { letter: "c", text: "Sick wagon register." },
                        { letter: "d", text: "Yard report registers." },
                        { letter: "e", text: "In-coming and out-going trains RD (Running Diary) (other than passenger)." },
                        { letter: "f", text: "Train Advice (T. A Book)." },
                        { letter: "g", text: "Caution Order Register." },
                        { letter: "h", text: "Caution Order Message Book." },
                        { letter: "i", text: "Morning (6.O clock) Position Register" },
                        { letter: "j", text: "Engine Book." },
                        { letter: "k", text: "Interchange Register." },
                        { letter: "l", text: "Load Register." },
                        { letter: "m", text: "Incoming and Outgoing passenger Train Running Diary." },
                        { letter: "n", text: "Points and S & T Failure Register." },
                        { letter: "o", text: "Important Yard Balance Register." },
                        { letter: "p", text: "Control Failure Register." },
                      ].map(item => (
                        <li key={item.letter} className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="shrink-0 min-w-7 min-h-7 w-7 h-7 rounded-full bg-linear-to-tr from-teal-600 via-cyan-500 to-blue-400 flex items-center justify-center font-semibold text-white shadow-lg border-2 border-teal-300/40">
                            {`${item.letter}`}
                          </span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3 text-center">2. By the Chief Controller (Movement),(Coaching)/Dy. Chief Controller :</h3>
                    <ul className="ml-0 grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2">
                      {[
                        { letter: "a", text: "Yard Running Balance Register." },
                        { letter: "b", text: "Dy. Chief Controller's Diary & Charge Book." },
                        { letter: "c", text: "Train Advise Book." },
                        { letter: "d", text: "Forecast and Acceptance Book." },
                        { letter: "e", text: "Train Ordering Book." },
                        { letter: "f", text: "Punctuality Register." },
                        { letter: "g", text: "Accident Register." },
                        { letter: "h", text: "HQ's Conference Register." },
                        { letter: "i", text: "Goods Train Performance Register." },
                        { letter: "j", text: "GM's Unusual Occurrence Register." },
                        { letter: "k", text: "CTNL (Movement)/(Coaching)/Dy TNL's Order Book." },
                        { letter: "l", text: "ODC Register." },
                        { letter: "m", text: "Rajdhani Express (and similar trains) Caution Order Register." },
                        { letter: "n", text: "Emergency and General Control Office Message Register (Inward)." },
                        { letter: "o", text: "Engine Book." },
                        { letter: "p", text: "Emergency and General Control Office Message Register (Outward.)" },
                        { letter: "q", text: "Interchange Register." },
                      ].map((item) => (
                        <li key={item.letter} className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="shrink-0 min-w-7 min-h-7 w-7 h-7 rounded-full bg-linear-to-tr from-cyan-600 via-teal-500 to-blue-300 flex items-center justify-center font-semibold text-white shadow-lg border-2 border-cyan-300/40 drop-shadow-sm transition-transform duration-200 hover:scale-110">
                            {`${item.letter}`}
                          </span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3 text-center">3. By the Power Controller:</h3>
                    <ul className="ml-0 grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-2">
                      {[
                        { letter: "a", text: "Power Position Book." },
                        { letter: "b", text: "Out Station Loco pilot Register." },
                        { letter: "c", text: "Power Controller's Diary." },
                        { letter: "d", text: "Engine Link." },
                        { letter: "e", text: "Crew Link." },
                        { letter: "f", text: "Crew Position Register." },
                        { letter: "g", text: "Register of Movement and Diversion of departmental/ Diesel/cube oil Fuel Tank Wagons." },
                        { letter: "h", text: "Register showing Undue and Abnormal Detention." },
                        { letter: "i", text: "Shed Conference Register." },
                        { letter: "j", text: "Fuel Balance Register." },
                        { letter: "k", text: "Schedule Dates of Locos" },
                      ].map(item => (
                        <li
                          key={item.letter}
                          className="flex items-start gap-3 text-teal-50/95 lg:text-sm text-xs leading-relaxed"
                        >
                          <span className="shrink-0 min-w-7 min-h-7 w-7 h-7 rounded-full bg-linear-to-tr from-emerald-700 via-teal-500 to-cyan-400 flex items-center justify-center font-semibold text-white shadow-lg border-2 border-emerald-300/50 drop-shadow-md transition-transform hover:scale-110 duration-200">
                            {item.letter}
                          </span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Guidelines Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Additional Guidelines
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light">
                  Additional information and guidelines regarding control are given in various other chapters of the Manual, particularly the chapters on goods train and passenger train operation.
                </p>
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

export default ControlOrganization

