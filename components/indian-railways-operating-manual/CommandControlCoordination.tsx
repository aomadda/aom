'use client'
import { 
  AlertTriangle,
  Target,
  Building2,
  Briefcase} from 'lucide-react'

const CommandControlCoordination = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-red-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-red-500/70 via-orange-500/70 to-yellow-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-red-700/60 to-orange-800/60 backdrop-blur-md shadow-2xl shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <AlertTriangle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-red-100 via-orange-100 to-yellow-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              COMMAND, CONTROL AND COORDINATION OF EMERGENCY RESCUE OPERATIONS ON THE OPEN LINE
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-red-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Purpose Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Target className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ol className="space-y-6 list-none m-0 p-0">
                  <li className="flex items-start gap-4 group">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-700/60 border-2 border-white/20 shadow-md text-blue-100 font-extrabold text-lg group-hover:bg-blue-800/80 transition-colors duration-300 select-none">
                      i
                    </span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                      The purpose of this Standard Operating Procedure (SOP) is to delineate responsibilities and procedures for the control and coordination of all responses to emergency situations on the mainline.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700/60 border-2 border-white/20 shadow-md text-cyan-100 font-extrabold text-lg group-hover:bg-cyan-800/80 transition-colors duration-300 select-none">
                      ii
                    </span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                      To provide step by step guidance on how to deal with incidents should they happen
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-700/60 border-2 border-white/20 shadow-md text-indigo-100 font-extrabold text-lg group-hover:bg-indigo-800/80 transition-colors duration-300 select-none">
                      iii
                    </span>
                    <span className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                      Particular note should be taken of the need to provide suitable training to keep staff aware of what needs to be done in the event of a serious incident.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
            {/* Objectives of incident Management Plan Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
            <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        1
                      </span>
                    </span>Objectives of incident Management Plan
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  In Order of priority these are:-
                </p>
                <ul className="ml-0 space-y-4 mb-6">
                  {[
                    { num: "1", label: "i", text: "Save lives and alleviate suffering" },
                    { num: "2", label: "ii", text: "Provide help to stranded passengers and arrange their prompt evacuation" },
                    { num: "3", label: "iii", text: "Instil a sense of security amongst all concerned by providing accurate information" },
                    { num: "4", label: "iv", text: "Protect Railway property" },
                    { num: "5", label: "v", text: "Ascertain the cause of accident, preserving clues by cordoning of incident site etc." },
                    { num: "6", label: "vi", text: "Expedite restoration of train operation" },
                  ].map(({ num, label, text }) => (
                    <li key={num} className="flex items-start gap-4">
                      <span
                        className={`
                          flex items-center justify-center shrink-0
                          w-9 h-9 rounded-full
                          bg-green-600/70 border-2 border-green-400/25 shadow
                          font-bold text-green-100 text-base
                          mr-2
                          transition-all duration-300
                          group-hover:scale-105 group-hover:bg-green-700/70
                        `}
                        style={{
                          background: 'linear-gradient(135deg, #34d39988 0%, #10b98166 100%)',
                          boxShadow: '0 4px 20px 0 #10b98133'
                        }}
                      >
                        {label}
                      </span>
                      <span className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  There is a difference between a disaster and an accident. All disasters need not be the outcome of train accidents, neither are all accidents classified as disasters.
                </p>
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Accidents are occurrences where safety has been affected
                </p>
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Disasters are those situations, which cause acute distress to passengers, employees and outsiders and may even be caused by external factors and unless promptly managed the distress levels are likely to increase with time.
                </p>
              </div>
            </div>
            {/* List of serious incidents Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
            <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                <span className="flex items-center justify-center">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                        2
                      </span>
                    </span>List of serious incidents requiring use of this plan
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="ml-0 space-y-3">
                  {[
                    { num: "i", text: "Fire, smoke emission, explosion in railway premises including trains" },
                    { num: "ii", text: "Derailment of a passenger carrying train" },
                    { num: "iii", text: "Collision of a train/trains" },
                    { num: "iv", text: "Security threats/Terrorist attacks, widespread violence, bomb explosion" },
                    { num: "v", text: "Release of Chemical or biological gas in trains, stations or tunnels" },
                    { num: "vi", text: "Natural calamities like cyclone, floods and earth quakes." },
                  ].map(({ num, text }) => (
                    <li key={num} className="flex items-start gap-4">
                      <span
                        className={`
                          flex items-center justify-center shrink-0
                          w-8 h-8 rounded-full
                          bg-red-600/70 border-2 border-red-400/20 shadow
                          font-bold text-red-100 text-base
                          mr-2
                          transition-all duration-300
                          group-hover:scale-105 group-hover:bg-red-700/70
                        `}
                        style={{
                          background: 'linear-gradient(135deg, #f8717180 0%, #ef444470 100%)',
                          boxShadow: '0 4px 16px 0 #b91c1c33'
                        }}
                      >
                        {num}
                      </span>
                      <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Definitions Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          3
                        </span>
                      </span>Definitions
                  </span>
                </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  In the context of Indian Railways, unusual events are classified as under:
                </p>
                <ul className="ml-0 space-y-4">
                  {[
                    {
                      num: "i",
                      text: "Incidents – which cause delay to trains"
                    },
                    {
                      num: "ii",
                      text: "Accidents – which have the potential or do actually cause loss of life and or injury and damage to property"
                    },
                    {
                      num: "iii",
                      text: "Emergency/Serious Accidents/Disasters – these may or may not necessarily be the outcome of train accidents but have the potential to cause loss of life and or injury to human beings causing further death/injury and wide spread and prolonged distress to all those involved unless tackled in an effective manner."
                    },
                    {
                      num: "iv",
                      text: "Disaster Management Team (A team of Railway officials earmarked to reach incident site by first available means & take over site management) at Zonal, Divisional and area/major station levels."
                    }
                  ].map(({ num, text }) => (
                    <li key={num} className="flex items-start gap-4">
                      <span
                        className={`
                          flex items-center justify-center shrink-0
                          w-8 h-8 rounded-full
                          bg-purple-600/70 border-2 border-purple-400/20 shadow
                          font-bold text-purple-100 text-base
                          mr-2
                          transition-all duration-300
                          group-hover:scale-105 group-hover:bg-purple-700/80
                        `}
                        style={{
                          background: 'linear-gradient(135deg, #a78bfa90 0%, #d946efa0 100%)',
                          boxShadow: '0 4px 16px 0 #8b5cf633'
                        }}
                      >
                        {num}
                      </span>
                      <span className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Scope Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          4
                        </span>
                      </span>Scope
                  </span>
                </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-indigo-50/95 lg:text-lg text-base leading-relaxed font-light">
                  This SOP is applicable to all IR personnel working on the Open Line.
                </p>
              </div>
            </div>
            {/* Responsibility Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          5
                        </span>
                      </span>Responsibility
                  </span>
                </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <ul className="space-y-3">
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-4">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      The Assistant Operations Manager Divisional Control Office, or designated Divisional Control Office Supervisor, is responsible for the overall control and coordination of emergency situations on the mainline.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-4">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      The OCS (officer in charge site) is responsible for overall control and coordination of all activities at the incident scene under instructions of Divisional Control.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-4">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      Traction, Track and Structure, Signalling, and Telecommunication, fire service & security personnel are responsible for providing technical assistance to Divisional Control Office & OC site.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      Rolling Stock Department is responsible for providing technical assistance to Divisional Control Office and OCS, as required and managing site restoration work.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      Station Operations & Commercial personnel are responsible for making appropriate station announcements, and providing information, rendering first aid, mobilizing medical & fire services & assistance from civil administration, including police and providing all other assistance in alleviating suffering and hardship to passengers and others.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      The Guards in charge & Loco pilot in the area affected by the incident are responsible for:
                      <ul className="ml-0 mt-2 space-y-1">
                        <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                          <span>
                            Providing their passengers with up-to-date and timely information regarding the situation&apos;s status and/or progress; and
                          </span>
                        </li>
                        <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                          <span>
                            Operating their trains in compliance with applicable rules and procedures and Divisional Control Office instructions.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      Government Railway Police and Railway Protection personnel are responsible for securing the incident scene and for performing/directing investigation activities in compliance with existing procedures. (in case of incidents caused by criminal acts)
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      The senior Police official at the scene is responsible for controlling and coordinating all police activities at all times. In doing so, this official has final authority to determine when these activities are complete and shall coordinate these activities with the OCS and the senior Fire services official.
                    </span>
                  </li>
                  <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-yellow-600/70 border-2 border-yellow-400/20 shadow font-bold text-yellow-100 text-base mr-2 transition-all duration-300 group-hover:scale-105 group-hover:bg-yellow-700/70"></span>
                    <span>
                      Security personnel will assist Civil/Railway Police; Fire services personnel, medical services or station staff as directed by OCS.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* General Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          6
                        </span>
                      </span>General
                  </span>
                </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The following is the list of personnel authorized to act as Officer-in-Charge site (OCS). This list also indicates the probable change of command at the scene.
                </p>
                <ul className="ml-0 space-y-3 mb-4">
                  {[
                    { letter: "a", text: "Train Superintendent or Guard of the affected train" },
                    { letter: "b", text: "Loco pilot" },
                    { letter: "c", text: "Station Manager/ Station Master" },
                    { letter: "d", text: "Rail Operations Supervisor or Traffic Inspector" },
                    { letter: "e", text: "Any Railway Officer either on duty, off duty or on leave, present at the site of incident" },
                    { letter: "f", text: "Members of Division Disaster Management Team" },
                  ].map((item) => (
                    <li key={item.letter} className="flex items-start gap-3 text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-700/90 border border-cyan-300/30 shadow-lg font-bold text-cyan-50 text-sm mt-1 shrink-0">
                        {item.letter}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  When none of the above mentioned personnel are present at the scene, DIVISIONAL CONTROL OFFICE shall appoint an OCS as directed by DRM from the personnel available.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Guards in charge, Loco pilot and Station Manager must assume and carry out the responsibilities of the OCS until relieved.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The first Guard in Charge /Loco pilot, on the scene, shall act as the OCS until he/she is relieved by the first senior personnel /Rail Operations Supervisor to arrive.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The Rail Operations Supervisor shall continue acting as the OCS until he/she is relieved by an authorized senior official or released by DIVISIONAL CONTROL OFFICE after another OCS has been designated.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  However, it is the responsibility of DIVISIONAL CONTROL OFFICE to select the most qualified person, for the type of incident, to act as the OCS.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The mere presence or arrival of an authorized senior official at the scene shall not indicate his/her assumption of command as OCS. Such senior official shall remain in an evaluating capacity unless he/she specifically assumes command.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The method of managing an emergency situation will be in compliance with the applicable Zonal Railway Rules and Procedures contained in Accident Manual, Disaster Management Manual or as directed by DIVISIONAL CONTROL OFFICE during incidents not covered by Rules or Procedures.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The OCS has the authority and the responsibility to command the presence of any personnel and equipment required at the scene and to command the removal of any unnecessary personnel or equipment from the scene. This does not apply to police or Fire Department personnel.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Entry into the incident area by the news media or other visitors must be authorized by the CPRO and shall be coordinated with DIVISIONAL CONTROL OFFICE DIVISIONAL Rail Manager, and OCS and Metro Police.
                </p>
                <p className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light mb-2">
                  When it is necessary to notify the Fire Services, and/or to seek medical assistance the following information shall be provided:
                </p>
                <ul className="ml-0 space-y-2">
                  {[
                    { letter: "a", text: "Identification or caller;" },
                    { letter: "b", text: "Nature of problem (give in plain English,/Hindi e.g., fire, flood, smoke, injuries);" },
                    { letter: "c", text: "Type of assistance requested; be specific" },
                    { letter: "d", text: "Specific location of the problem and the best access points;" },
                  ].map((item) => (
                    <li key={item.letter} className="flex items-start gap-3 text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-700/80 border border-cyan-300/30 shadow-lg font-bold text-cyan-100 text-sm mt-1 shrink-0">
                        {item.letter}
                      </span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Procedure Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
            <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          7
                        </span>
                      </span>Procedure
                  </span>
                </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3 text-center">The Chief Controller/Operations Manager of DIVISIONAL CONTROL OFFICE, or designated DIVISIONAL CONTROL OFFICE Supervisor shall:</h3>
                  <ul className="ml-0 space-y-2">
                    {[
                      { letter: "a", text: "Ensure that ARME & ART is turned out on time" },
                      { letter: "b", text: "Appoint the initial OCS" },
                      { letter: "c", text: "Coordinate all field activities and requests through the OCS." },
                      { letter: "d", text: "Notify members of Disaster Management Team and all departments and personnel, as required." },
                      { letter: "e", text: "Coordinate and direct the safe movement of all trains, to include those trains which may be involved in the incident;" },
                      { letter: "f", text: "Request Police /RPF assistance in critical stations for crowd control;" },
                      { letter: "g", text: "Keep Loco pilots and Station Managers informed of system status and instruct them to make appropriate announcements to their passengers;" },
                      { letter: "h", text: "Ensure that system-wide public address announcements are made frequently to provide patrons with up-to-date information concerning Rail System status;" },
                      { letter: "i", text: "Coordinate and assist OCS with restoration activities;" },
                      { letter: "j", text: "Provide and obtain, from OCS frequent updates on events" },
                      { letter: "k", text: "Inform Commissioner Rail Safety and local civil authorities as per procedures in vogue in the event of train accidents like, derailment, Collision fire, terrorist attack etc., of a passenger carrying train or any other accident relating to train operation resulting in death and/or grievous injury (as per Railway Act provision)." }
                    ].map((item) => (
                      <li
                        key={item.letter}
                        className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed"
                      >
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-teal-600/70 border border-white/20 shadow-lg font-bold text-white text-sm mt-1 shrink-0 ring-2 ring-teal-300/70">
                          {item.letter}
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">The OCS shall:</h3>
                  <ul className="ml-0 space-y-3">
                    {[
                      {
                        letter: "b",
                        text:
                          "Ensure that the safety of passengers and personnel at the incident scene is maintained; ascertaining that all injured and stranded passengers have been safely evacuated. Till evacuation is complete necessary succour in the form of drinking water, tea & edibles are made available to stranded passengers."
                      },
                      {
                        letter: "c",
                        text:
                          "Ensure that all personnel involved, at the scene, work efficiently to restore rail service as quickly and safely as possible;"
                      },
                      {
                        letter: "d",
                        text:
                          "Control and coordinate all field activities with personnel at the scene."
                      },
                      {
                        letter: "e",
                        text:
                          "Coordinate all police related activities and requirements with the senior police official at the scene."
                      },
                      {
                        letter: "f",
                        text:
                          "Coordinate activities with the senior Fire Department official at the scene and, when available, provide the Fire Department Command Post with a knowledgeable employee, to act as a communications link to Divisional and Central Control and to the OCS."
                      },
                      {
                        letter: "g",
                        text:
                          "to the senior official at the scene;"
                      },
                      {
                        letter: "h",
                        text:
                          "and activities at the incident site and keep DIVISIONAL CONTROL OFFICE informed of progress;"
                      },
                      {
                        letter: "i",
                        text:
                          "Establish a command post, at the incident scene Direct all inquiries and/or requests made by jurisdictional police officials Appoint individual (s) to provide public address announcements, at five (5) minute intervals, to passengers of the incident train and/or inside the incident station;"
                      },
                      {
                        letter: "j",
                        text:
                          "Direct all inquiries and/or request made by the news media to the CPRO Office;"
                      },
                      {
                        letter: "k",
                        text:
                          "Maintain a chronological log of all events."
                      }
                    ].map((item) => (
                      <li key={item.letter} className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-teal-500 via-cyan-500 to-blue-500 border border-white/20 shadow-lg font-bold text-white text-sm mt-1 shrink-0 ring-2 ring-cyan-300/60">
                          {item.letter}
                        </span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">Station Operations/Commercial personnel shall:</h3>
                  <ul className="ml-0 space-y-2">
                    <li className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-linear-to-br from-cyan-400 via-teal-400 to-blue-500 shadow-md border border-white/20 ring-2 ring-cyan-200/40">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="8" height="8" transform="rotate(45 7 7)" />
                        </svg>
                      </span>
                      <span>
                        Make appropriate station announcements;
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-linear-to-br from-cyan-400 via-teal-400 to-blue-500 shadow-md border border-white/20 ring-2 ring-cyan-200/40">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="8" height="8" transform="rotate(45 7 7)" />
                        </svg>
                      </span>
                      <span>
                        Assist Police with crowd control; and
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="flex items-center justify-center w-5 h-5 mt-1 rounded-full bg-linear-to-br from-cyan-400 via-teal-400 to-blue-500 shadow-md border border-white/20 ring-2 ring-cyan-200/40">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="8" height="8" transform="rotate(45 7 7)" />
                        </svg>
                      </span>
                      <span>
                        Make every effort to identify and retain knowledgeable witnesses. or to obtain their testimony along with their address.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">Guards and Loco pilots shall:</h3>
                    <ul className="ml-0 space-y-2">
                      <li className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-teal-500 via-cyan-500 to-blue-500 border border-white/20 shadow-lg font-bold text-white text-sm mt-1 shrink-0 ring-2 ring-cyan-300/60">a</span>
                        <span>Operate their trains in compliance with applicable rules and procedures; and</span>
                      </li>
                      <li className="flex items-start gap-3 text-teal-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-br from-teal-500 via-cyan-500 to-blue-500 border border-white/20 shadow-lg font-bold text-white text-sm mt-1 shrink-0 ring-2 ring-cyan-300/60">b</span>
                        <span>Keep their passengers informed by making frequent announcements regarding system and delay status.</span>
                      </li>
                    </ul>
                </div>
                <p className="text-teal-50/95 lg:text-lg text-base leading-relaxed font-light">
                  All Rail personnel at the incident scene shall honour the requests of and obey the directions of the OCS.
                </p>
              </div>
            </div>
            {/* Emergency Control in the Zonal Office Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Emergency Control in the Zonal Office
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Emergency Control shall be manned by designated officers as per procedure laid down.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  It shall take prompt action to inform concerned officers Plan all assistance to the Division.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Mobilize resources and manpower.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Seek GM/COM&apos;s approval to relay the information to Railway Board Regulate traffic on the affected line, on adjoining Divisions and Zonal railways, to include train cancellation, diversion rerouting, road bridging, and air lifting of stranded passengers.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light">
                  CPRO will continuously brief media to inform passengers of the current status of rail situation.
                </p>
              </div>
            </div>
            {/* DUTIES OF COMMERCIAL STAFF IN CASE OF ACCIDENT Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500/30 to-rose-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-rose-500/30 transition-all duration-500">
                  <Briefcase className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  DUTIES OF COMMERCIAL STAFF IN CASE OF ACCIDENT
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          1
                        </span>
                      </span>Nominated Commercial officials (para no. 3) on receipt of information of train accident would proceed to the site of accident by the quickest available means.
                  </span>
                </h2>
                  <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    (Designations of HODs and Dy HODs may differ from zone to zone.)
                  </p>
                  <ul className="ml-0 space-y-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { letter: "a", label: "CCM" },
                      { letter: "b", label: "CCM/G&R" },
                      { letter: "c", label: "CCO" },
                      { letter: "d", label: "CCM/Services & Marketing)" },
                      { letter: "e", label: "Dy. CCM/General" },
                      { letter: "f", label: "Dy. CCM/Catering" },
                      { letter: "g", label: "SCM/General" }
                    ].map((item) => (
                      <li
                        key={item.letter}
                        className="flex items-center bg-pink-800/10 rounded-xl px-4 py-2 shadow-sm gap-3"
                      >
                        <span
                          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-400/50 border-2 border-pink-200 font-bold text-white drop-shadow text-base mr-2"
                          style={{ fontFamily: "ui-monospace, monospace" }}
                        >
                          {item.letter}
                        </span>
                        <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed font-semibold">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          2
                        </span>
                      </span>Nominated Commercial officials (para no. 3) on receipt of information of train accident would proceed to the site of accident by the quickest available means.
                  </span>
                </h2>
                  <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                    In case of serious accidents involving passenger trains, CCO (in absence of CCO, CCM (S&M) or CCM/IT will proceed to the site of accident. CCM/G will remain in Commercial Control.
                  </p>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          3
                        </span>
                      </span>Centers of Activity:
                  </span>
                </h2>
                  <ul className="ml-0 space-y-2">
                    {[
                      { letter: "a", label: "Headquarter" },
                      { letter: "b", label: "Divisional Commercial Control" },
                      { letter: "c", label: "Site of Accident." }
                    ].map((item) => (
                      <li key={item.letter} className="flex items-center gap-3">
                        <span
                          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-600/80 border-2 border-green-100/70 shadow-lg text-green-50 font-bold text-base mr-2"
                          style={{ fontFamily: 'ui-monospace, monospace' }}
                        >
                          {item.letter}
                        </span>
                        <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          a
                        </span>
                      </span>Headquarter
                  </span>
                </h2>
                  <div className="ml-0 space-y-6">
                    {/* Beautifully Styled Roman Numbered List */}
                    <ol className="space-y-5">
                      {/* i */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          i
                        </span>
                        <div className="flex-1">
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                            Commercial Control will have DOT and railway Telephones, FAX, photocopier machine and a PC with an Internet. The details are as under:-
                          </p>
                          <ul className="ml-4 space-y-1">
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">-</span>
                              <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">Telephone Nos. P&amp;T</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">-</span>
                              <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">Rly.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">-</span>
                              <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">Fax</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* ii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          ii
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Commercial Control office in Headquarter would be manned by officers round the clock basis. In case of serious accident of passenger carrying trains, CCM/G will immediately come to Control office. In his absence, CCM(IT)/CCM(S&amp;M) and Dy.CCM/G will come to the Control office. If Dy.CCM/G is not available, SCM/G will attend. Thereafter, Control duties will be assigned as per roster for manning the Control office round the clock. Besides regular staff manning commercial control at least one officer and one inspector will remain in the control round the clock. Officer deputed will be responsible for proper functioning of the control.
                        </p>
                      </li>
                      {/* iii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          iii
                        </span>
                        <div className="flex-1">
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                            Headquarter Commercial Control would collect following information:
                          </p>
                          <ul className="ml-4 space-y-1">
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">a)</span>
                              <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">Time and place of accident from Operating Emergency Control.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">b)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">Details of dead/injured Passengers, rescue operations, helps/assistance being rendered at the site of accident, enroute etc. from the divisional Commercial control/control at the site of accident.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">c)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">Details of specials being run to the accident site and officials accompanying from Operating Emergency Control.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">d)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">CCM/IT will get the reservation charts printed and supplied to control. In addition the addresses as per requisition slips shall also be get collected by CCM/IT &amp; supplied to Commercial control, and Divisional Control.</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* iv */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          iv
                        </span>
                        <div className="flex-1">
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                            Commercial control at HQ will maintain: -
                          </p>
                          <ul className="ml-4 space-y-1">
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">a)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">Telephone and FAX numbers of the control at accident site manned by Commercial officer.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">b)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">Names and phone numbers of hospitals where injured are admitted/(i) with names of passengers and (ii) location of dead bodies identified (iii) digital photographs of all injured and dead transmitted through computer network to be displayed and at sites or telecast &amp; all enquiry offices.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="inline-block w-4 text-green-200 font-semibold">c)</span>
                              <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">Telephone and FAX numbers of enquiry offices that would have been set up at various stations including at other Zonal Railway.</span>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* v */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          v
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Commercial control in the Headquarters office would constantly monitor the information relayed from the divisions and other railways regarding the dead and injured persons and enquiry offices opened at important stations.
                        </p>
                      </li>
                      {/* vi */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          vi
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Commercial control in the HQ office will monitor/coordinate regarding assistance required by the division from other divisions/other railways in terms of deployment of material, staff and officers.
                        </p>
                      </li>
                      {/* vii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          vii
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          In case of confirmation of death/injury, the Commercial control will inform the concerned division/railway (Commercial control) to convey the information to the family of affected passengers.
                        </p>
                      </li>
                      {/* viii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-400 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/50">
                          viii
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Maintain a log of events.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          b
                        </span>
                      </span>Divisional Control
                  </span>
                </h2>
                  <div className="ml-0 space-y-5">
                    {/* Beautifully styled roman-numbered list */}
                    <ol className="space-y-5">
                      {/* i */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          i
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Control Offices will have DOT/Rly. Telephones, FAX, photocopier machine and a PC with an Internet connection. The details of telephones and faxes of all the divisions should also be kept: -
                        </p>
                      </li>
                      {/* ii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          ii
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Commercial Control in Division would be manned by officers on round the clock basis. In case of serious accident of passenger carrying trains, DCM in his absence, DCM/Catering, where available or one of the ACMs will immediately come to the Control. Thereafter, Control duties will be assigned as per roster for manning the Control office. Second senior most commercial officer of the division will work as incharge of the Commercial control.
                        </p>
                      </li>
                      {/* iii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          iii
                        </span>
                        <div className="flex-1">
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                            Divisional Commercial Control would collect the following information from Divisional Emergency Control/accident site:-
                          </p>
                          <ul className="ml-2 space-y-2">
                            {[
                              { letter: "a", content: "Time and place of accident from Operating Emergency Control office." },
                              { letter: "b", content: "Details of causalities – dead/injured and safe passengers from operating emergency control office." },
                              { letter: "c", content: "Details of specials being run to accident site and officials accompanying from Operating Emergency Control office and monitor their arrangements." },
                              { letter: "d", content: "Details of rescue operations and assistance being rendered to the affected passengers." },
                            ].map(item => (
                              <li key={item.letter} className="flex items-start gap-3">
                                <span className="shrink-0 w-7 h-7 min-w-7 min-h-7 flex items-center justify-center rounded-full bg-green-600/80 border-2 border-green-100/70 shadow-lg text-green-50 font-semibold text-base" style={{fontFamily: "ui-monospace, monospace"}}>
                                  {item.letter}
                                </span>
                                <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">{item.content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                      {/* iv */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          iv
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Information collected should be relayed to all concerned including HQ Commercial Control, Enquiry Offices opened at stations through phone, fax, etc. without delay.
                        </p>
                      </li>
                      {/* v */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          v
                        </span>
                        <div className="flex-1">
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                            Commercial Control in Division will maintain:
                          </p>
                          <ul className="ml-2 space-y-2">
                            {[
                              { letter: "a", content: "Telephone and FAX numbers of the accident site." },
                              { letter: "b", content: "Names and phone numbers of hospitals where injured are admitted and dead bodies shifted, and" },
                              { letter: "c", content: "Telephone and FAX numbers of enquiry offices that would be set up at various stations including at other Zonal Railways." },
                              { letter: "d", content: "Name of Commercial Officer(s) deployed in each hospital." },
                            ].map(item => (
                              <li key={item.letter} className="flex items-start gap-3">
                                <span className="shrink-0 w-7 h-7 min-w-7 min-h-7 flex items-center justify-center rounded-full bg-green-700/85 border-2 border-green-100/80 shadow-lg text-green-100 font-semibold text-base" style={{fontFamily: "ui-monospace, monospace"}}>
                                  {item.letter}
                                </span>
                                <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">{item.content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                      {/* vi */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          vi
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Divisional control will advise headquarters commercial control, details of assistance required from Headquarter or the adjoining divisions.
                        </p>
                      </li>
                      {/* vii */}
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-green-500 via-green-300 to-green-600 shadow-lg border-2 border-white/30 text-white font-bold text-base ring-2 ring-green-500/40">
                          vii
                        </span>
                        <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          Maintain a log of events.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          c
                        </span>
                      </span>Site of Accident
                  </span>
                </h2>
                  <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Sr. DCM in his absence, DCM will attend site of accident and work as site in charge of the Commercial department.
                  </p>
                  <div className="ml-0 space-y-4">
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          1
                        </span>
                      </span>Objectives of incident Management Plan
                  </span>
                </h2>
                      <div className="ml-0">
                        {/* Beautifully styled Roman numeral list */}
                        <ol className="space-y-5">
                          {/* i */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              i
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              Division would set up a control office at the site with telephone, FAX and Public Announcement System (PAS) to be manned by Commercial, Security and Medical departments.
                            </p>
                          </li>
                          {/* ii */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              ii
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              Announcement would be made for registering the names of injured passengers, and the list would be verified by Doctor to be relayed to the Control offices at the division and headquarters. Separately indicating the extent of injury viz. Trivial, simple &amp; grievous.
                            </p>
                          </li>
                          {/* iii */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              iii
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              Control office at the site will be manned by Assistant Commercial Officers on round the clock basis.
                            </p>
                          </li>
                          {/* iv */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              iv
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              The site control office would maintain a log book. Flow of information both incoming and outgoing would be recorded along with the time and names of the officers / staff who were given information to keep track of chronology of events.
                            </p>
                          </li>
                          {/* v */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              v
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              Commercial Officers/personnel at site will <span className="font-bold text-red-100 tracking-wide underline">NOT</span> interact with the press.
                            </p>
                          </li>
                          {/* vi */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              vi
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              All necessary arrangements for refund as per rules should be made.
                            </p>
                          </li>
                          {/* vii */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              vii
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed flex-1">
                              A manual/guide be made available with train crew like; TTEs, AC Coach Attendants, AC Pantry Car Staff, which will inter-alia to include <span className="font-semibold text-green-100">DOs</span> and <span className="font-semibold text-red-200">DONTs</span> for them in case of accidents.
                            </p>
                          </li>
                          {/* viii */}
                          <li className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 via-lime-400 to-green-600 shadow-lg border-2 border-white/25 text-white font-bold text-base ring-2 ring-green-500/20">
                              viii
                            </span>
                            <div className="flex-1">
                              <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                                Commercial Control will ensure that at stations where trains are
                              </p>
                              <ul className="ml-8 space-y-1 list-disc list-inside">
                                <li className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">
                                  <span className="font-semibold text-green-100">Delayed,</span>
                                </li>
                                <li className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">
                                  <span className="font-semibold text-yellow-100">Diverted, or</span>
                                </li>
                                <li className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">
                                  <span className="font-semibold text-fuchsia-100">Terminated.</span>
                                </li>
                              </ul>
                              <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mt-2">
                                Additional alphabetical list of passengers on board with their current status must be available and displayed at enquiry counters for quicker dissemination of information. It will be ensured by <span className="font-bold text-green-200">CCM/IT</span> and Divisional Control and divisional Commercial Officers.
                              </p>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          2
                        </span>
                      </span>Rescue
                  </span>
                </h2>
                      <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        Sr. DCM will ensure the following functions.
                      </p>
                      <ol className="ml-2 space-y-3">
                        {[
                          'Sufficient number of TTEs/TCs and licensed porters in uniform would be rushed to the site. The required personnel would be mobilized from the affected division and the neighboring divisions by the quickest available means. For this purpose TTEs from the divisional squad should be utilized. Requirement of staff could be continuously reviewed and augmented depending on the assessment of the officer in charge of site.',
                          'Arrangements will be made for speedy dispersal of stranded passengers of the train(s) involved in the accident, as well as of trains regulated or terminated as a result of the accident in association with operating Department. In case of non availability of rail services, adequate arrangements should be made to disperse them by arranging road vehicles etc. This would be done by site in charge.',
                          'Depending upon the need, accommodation in hotels/Dharamshalas would be hired for accommodating passengers and providing resting facilities to officials working at the site.',
                          'Make arrangements to inform the next of kith & kin of the deceased/injured persons involved in accident. It will be done free of cost.',
                          'TTEs of the affected train will not leave site of accident till ordered by the site in charge.',
                          'Train Superintendent or Conductor or senior most Ticket Checking staff till a commercial officer from division reaches to the site of accident, will allot duties to each available ticket Checking/other Commercial staff/volunteers in a manner to ensure maximum help to passengers under the prevalent circumstances. This function will be taken over by a Commercial officer as soon as he reaches to the site of accident.'
                        ].map((text, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-green-600 via-lime-500 to-green-300 shadow-md border-2 border-white/20 text-white font-bold text-sm ring-2 ring-lime-400/20 mt-0.5">
                              {String.fromCharCode(105 + idx)}) {/* 'i' + idx for roman numberals */}
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">{text}</p>
                          </li>
                        ))}

                        {/* vii */}
                        <li className="flex flex-col gap-2">
                          <div className="flex items-start gap-4 mb-1">
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-green-600 via-lime-500 to-green-300 shadow-md border-2 border-white/20 text-white font-bold text-sm ring-2 ring-lime-400/20 mt-0.5">
                              vii
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                              Duties of ticket checking staff on board will be:
                            </p>
                          </div>
                          <ol className="ml-9 space-y-1">
                            {[
                              'Collect Railway staff, Doctors and volunteers on the train or near the accident site for obtaining assistance.',
                              'Provide assistance to Guard in making quick assessment of assistance required.',
                              'To carry out the duties assigned to them by Guard/Senior official present at the site of the accident.',
                              'Take action to save lives and render First Aid and organise relief operations with the available assistance.'
                            ].map((text, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-r from-fuchsia-500 via-green-400 to-green-600 shadow border border-white/10 text-white font-semibold text-xs mt-0.5">
                                  {String.fromCharCode(97 + idx)}
                                </span>
                                <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">{text}</span>
                              </li>
                            ))}
                          </ol>
                        </li>
                        
                        {/* viii */}
                        <li className="flex flex-col gap-2">
                          <div className="flex items-start gap-4 mb-1">
                            <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-green-600 via-lime-500 to-green-300 shadow-md border-2 border-white/20 text-white font-bold text-sm ring-2 ring-lime-400/20 mt-0.5">
                              viii
                            </span>
                            <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                              In case of involvement of Goods Train, following actions will be taken promptly:
                            </p>
                          </div>
                          <ol className="ml-9 space-y-1">
                            {[
                              'Arrangements of adequate labour by mobilising resources available at other stations as well as from the market locally, for unloading of material from the wagons involved in accident.',
                              'Adequate tarpaulins to cover the contents so that these are saved from rains etc.',
                              'Arrangements of gunny bags etc. for retrieval of loose materials lying at the site of accident.',
                              'Consignor/consignee would be informed regarding involvement of their consignments in accident besides intimating forwarding/destination station. The information will be conveyed through the Commercial Control of the division/HQ as the case may be. Also to make arrangements for delivery of the consignments at the site of accident if they desire.',
                              'Arrangements of road transport for evacuation of the contents from the site of accident.',
                              'To coordinate with the Operating branch for supply of adequate empty stock for transshipment /disposal of the contents.',
                              'Till such time, the consignment involved in the accident is not removed/transported; the same shall be made over to RPF Incharge for security purposes.'
                            ].map((text, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-r from-sky-600 via-lime-400 to-green-400 shadow border border-white/10 text-white font-semibold text-xs mt-0.5">
                                  {String.fromCharCode(97 + idx)}
                                </span>
                                <span className="text-pink-50/95 lg:text-sm text-xs leading-relaxed">{text}</span>
                              </li>
                            ))}
                          </ol>
                        </li>

                        {/* ix */}
                        <li className="flex items-start gap-4">
                          <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-green-600 via-lime-500 to-green-300 shadow-md border-2 border-white/20 text-white font-bold text-sm ring-2 ring-lime-400/20 mt-0.5">
                            ix
                          </span>
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                            Staff using their personal mobile phones in connection with the accident will be eligible for a lump sum grant of Rs.200/- without any clerical work to be performed in accidents
                          </p>
                        </li>

                        {/* x */}
                        <li className="flex items-start gap-4">
                          <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-linear-to-r from-green-600 via-lime-500 to-green-300 shadow-md border-2 border-white/20 text-white font-bold text-sm ring-2 ring-lime-400/20 mt-0.5">
                            x
                          </span>
                          <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                           In case of bodies, which remain unclaimed/unidentified, the division shall get such bodies photographed by hiring a photographer. Each body will be given a number, which can be displayed, on the body of the dead for subsequent identification.
                          </p>
                        </li>
                      </ol>
                    </div>
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          II
                        </span>
                      </span>Safety of Passengers/Passengers luggage
                  </span>
                </h2>
                      <ol className="ml-0 space-y-4 list-none">
                        {[
                          'Separate tent for packages/bags and belongings of the injured and dead should be arranged and guarded with the help of RPF at site.',
                          'A list of each item with distinguishing marks should be made.',
                          'Luggage claimed should be handed over on the satisfactory proof of ownership.',
                          'Unclaimed items will be safely transferred to one of the stations and for this purpose, if need be, road vehicles will be utilized/hired. Their personal belongings are useful in establishing identify of deceased/missing.'
                        ].map((text, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 relative pl-2"
                          >
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-tr from-green-600 via-lime-400 to-green-200 shadow border-2 border-green-200/30 text-white font-semibold text-lg mr-2 mt-0.5 ring-2 ring-green-300/30 select-none">
                              {['i', 'ii', 'iii', 'iv'][idx]}
                            </span>
                            <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">{text}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          III
                        </span>
                      </span>Catering arrangements
                  </span>
                </h2>
                      <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                        It will be ensured by the site incharge.
                      </p>
                      <ol className="ml-0 space-y-4 list-none">
                        {[
                          {
                            label: 'i',
                            text: 'Sr. DCM will ensure that adequate eatables, water etc. is available at the site of accident in case of involvement of a passenger carrying train in an accident. This arrangement will be made for the passengers free of charge at the site of accident and at roadside station where train involved in the accident is stabled temporarily.',
                          },
                          {
                            label: 'ii',
                            text: 'Gas stoves, Gas cylinders, drinking water, provisions for preparation of meals, etc., should be rushed to site for left over stranded passengers and officials involved in rescue operations. This will be augmented later, if necessary. Sufficient cooks and catering staff from departmental catering or catering contractor would be ensured at the site for arranging tea, biscuits, packed meals like poories and vegetables to the stranded passengers, and staff engaged in rescue and restoration.',
                          },
                          {
                            label: 'iii',
                            text: 'Sr. DCMs would prepare advance section-wise nomination of catering agencies both departmental and private for rushing to site.',
                          },
                          {
                            label: 'iv',
                            text: 'To supplement railways catering arrangements, nearby Dhabas and hotels should be contacted and arrangements made for opening up stalls at the site.',
                          }
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 relative pl-2"
                          >
                            <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-tr from-yellow-400 via-pink-400 to-green-400 shadow border-2 border-green-100/50 text-white font-semibold text-lg mr-2 mt-0.5 ring-2 ring-pink-300/30 select-none">
                              {item.label}
                            </span>
                            <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          IV
                        </span>
                      </span>Hospitals</h2>
                      <ol className="ml-0 space-y-5 list-none">
                        {[
                          {
                            label: "i",
                            text: "One assistant officer each in the hospitals will be deputed to look after where injured passengers are admitted or dead passengers are kept. In case of non-availability of assistant officer, one CMI/ inspector/Sr. supervisor will be deputed by Sr. DCM. All dead bodies must be photographed after wiping their faces to establish identify.",
                          },
                          {
                            label: "ii",
                            text: "The nominated officer will work in close coordination with doctors and render required help.",
                          },
                          {
                            label: "iii",
                            text: "Officer incharge of the hospital will assist kith and kin of the passengers involved, in disposal of dead bodies, release injured passengers.",
                          },
                          {
                            label: "iv",
                            text: "Deputed official will obtain details like name, address, etc. of hospitalized/dead passengers. He will also obtain the details of injured, nature of injuries with the help of doctors and convey it to the divisional Commercial control.",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-4 relative pl-2"
                          >
                            <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-tr from-teal-300 via-pink-400 to-orange-300 shadow-lg border-2 border-pink-100/60 text-white font-bold text-lg mr-3 mt-1 ring-2 ring-pink-200/30 select-none transition-all">
                              {item.label}
                            </span>
                            <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          V
                        </span>
                      </span>Payment of ex-gratia
                  </span>
                </h2>
                      <ol className="ml-0 space-y-6 list-none">
                        {[
                          {
                            label: "i",
                            text: "Payment of ex-gratia at the site as well as in the hospitals will be arranged on the basis of the identification of injuries by the doctors.",
                          },
                          {
                            label: "ii",
                            text: "Sr.DCM/DCM will ensure availability of sufficient cash for payment of ex.gratia.",
                          },
                          {
                            label: "iii",
                            text: "CCO will also depute claims officials at the site/hospitals to assist the relatives of the injured/dead passengers regarding filing of claims for compensation.",
                          },
                          {
                            label: "iv",
                            text: "If some injured passengers/kith & kin of deceased involved in accident have not been paid ex-gratia at the site of accident or in the hospital, arrangements should be made to pay at their residence by deputing officials of the division or seeking help of the other divisions/railway. Such payment will be witnessed by the Pardhan or Sarpanch or any other responsible official of the area.",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-5 relative pl-2"
                          >
                            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-tr from-green-400 via-cyan-400 to-pink-400 shadow-lg border-2 border-white/30 text-white font-bold text-lg mt-1 ring-2 ring-pink-200/50 select-none transition-all animate-pulse-slow">
                              {item.label}
                            </span>
                            <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
              
              <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  <span className="flex items-center justify-center">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600/60 border-2 border-white/20 shadow-lg text-green-100 font-bold text-base mb-3">
                          VI
                        </span>
                      </span>Enquiry offices at the important stations enroute
                  </span>
                </h2>
                  <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    This function will be ensured by the incharge available in divisional control.
                  </p>
                  <ol className="ml-0 space-y-4 list-none">
                    {[
                      {
                        label: 'i',
                        content: "Emergency offices would be opened at important stations as per the route of the train. On the basis of need, enquiry offices would be opened at other important stations also."
                      },
                      {
                        label: 'ii',
                        content: "All these enquiry offices should have DOT and Railway telephones with STD facility, Fax machine, photocopier and a PC with Internet connection. Identical telephone numbers will be preferred."
                      },
                      {
                        label: 'iii',
                        content: "These enquiry offices would be manned on round the clock basis by deputing additional staff. It will be supervised by a Commercial officer, where feasible/commercial inspector/CIT."
                      },
                      {
                        label: 'iv',
                        content: "These control offices should constantly keep in touch with the divisional Commercial Control."
                      },
                      {
                        label: 'v',
                        content: "Emergency offices would display the list of dead and injured passengers at the notice board at stations."
                      },
                      {
                        label: 'vi',
                        content: "Officers attending these emergency offices would not interact with the press."
                      },
                      {
                        label: 'vii',
                        content: "Sr.DCMs will prepare their own contingency plan on similar lines."
                      },
                      // Special handling for viii with a subparagraph
                      {
                        label: 'viii',
                        content: (
                          <div>
                            <span className="block font-semibold mb-1">
                              Withdrawal of Money from station earnings:
                            </span>
                            <span>
                              Money withdrawn from station earnings will also be used for relief operations like purchase of items immediately required, hiring of vehicles and other equipments directly.
                            </span>
                          </div>
                        )
                      }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <span
                          className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-linear-to-tr from-green-400 via-cyan-400 to-pink-400 shadow-lg border-2 border-white/30 text-white font-extrabold text-lg mt-1 ring-2 ring-pink-200/50 select-none transition-all animate-pulse-slow group-hover:scale-105"
                          style={{ fontFamily: 'serif' }}
                        >
                          {item.label}
                        </span>
                        <span className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                          {item.content}
                        </span>
                      </li>
                    ))}
                  </ol>
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

export default CommandControlCoordination