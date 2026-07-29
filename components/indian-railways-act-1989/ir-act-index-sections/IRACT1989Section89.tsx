'use client'
import React from 'react'
import { 
  Scale
} from 'lucide-react'

const IRACT1989Section89 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-2 flex items-center justify-center gap-4">
              <span>CHAPTER X</span>
            </h2>
            <h3 className="lg:text-3xl text-xl font-bold text-cyan-200 mb-4">Special Provisions as to Goods Booked to Notified Stations</h3>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Section 89 Main Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    89
                  </span>
                  <span className="text-center">Power to declare notified stations.-</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Sub-section (1) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        1
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        The Central Government may , if it is satisfied that it is necessary that goods entrusted for carriage by train intended solely for the carriage of goods to any railway station should be removed without delay from such railway station, declare, by notification, such railway station to be a notified station for such period as may be specified in the notification :
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400 mb-4">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that</p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                        before declaring any railway station to be a notified station under this Sub-Section, the Central Government shall have regarded to all or any of the following factors, namely :-
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            a
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            the volume of traffic and the storage space available at such railway station ;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            b
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            the nature and quantities of goods generally booked to such railway station ;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            c
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            the scope for causing scarcity of such goods by not removing them for long periods from such railway station and the hardship which such scarcity may cause to the community ;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            d
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            the number of wagons likely to be held up at such railway station if goods are not removed there from quickly and the need for quick movement and availability of such wagons ;
                          </span>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                          <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            e
                          </span>
                          <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                            Such other factors (being relevant from the point of view of the interest of the general public) as may be prescribed :
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400 mt-4">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided further that</p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        the period specified in any notification issued under this subsection in respect of any railway station shall not exceed six months in the first instance, but such period may by notification, be extended from time to time by a period not exceeding six months on each occasion.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (2) */}
                  <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                      If any person entrusting any goods to a railway administration to be carried to a notified station makes an application in which form and manner as may be prescribed and specifies therein the address of the person to whom intimation by registered post of the arrival of the goods at the notified station shall be given and pays the postage of the arrival of the goods at the notified station shall be given and pays the postage charges required for giving such intimation, the railway administration shall, as soon as may be after the arrival of the goods at the notified station, shall such intimation accordingly.
                    </span>
                  </div>

                  {/* Sub-section (3) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        3
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        There shall be exhibited at a conspicuous place at each notified station a statement in the prescribed form setting out the description of the goods which by reason of the fact that they have not been removed from the station within a period of seven days from the termination of transit thereof are liable to be sold, in accordance with the provision, of sub-section (1) of sec. 90 by public auction and the dates on which they would be do sold :
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border-l-4 border-cyan-400">
                      <p className="text-cyan-200 font-semibold lg:text-base text-sm mb-2">Provided that</p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        different statements may be so exhibited in respect of goods proposed to be sold on different dates.
                      </p>
                    </div>
                  </div>

                  {/* Sub-section (4) */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 mb-4">
                      <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        4
                      </span>
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        If the goods specified in any statement to be exhibited under subsection (3) include essential commodities, the railway servant preparing the statement shall, as soon as may be after the preparation of such statement, forward a copy thereof to -
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          a
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          the representative of the Central Government nominated by that Government in this behalf ;
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-cyan-500 to-blue-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-cyan-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          b
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          the representative of the State Government, nominated by that Government in this behalf; and
                        </span>
                      </div>
                      <div className="flex items-center justify-center flex-col gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          c
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          the District Magistrate within the local limits of whose jurisdiction the railway station is situated.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                    <div className="flex items-center justify-center flex-col gap-3 mb-4">
                      <span className="bg-linear-to-br from-blue-500 to-indigo-600 text-white lg:w-8 lg:h-8 w-6 h-6 rounded-full flex items-center justify-center font-bold lg:text-sm text-xs shadow-lg ring-2 ring-blue-400/50 shrink-0 mt-1">
                        C
                      </span>
                      <h3 className="text-blue-200 font-bold lg:text-lg text-base">Comments</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Section 89, sub-section (1) empowers the Central Government to declare a station to be notified station for the purposes of removing consignment without delay under the circumstances specified therein.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (2) lays down the manner of giving notice of goods carried to a notified station.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (3) provides that goods not removed from a notified station within seven days from the termination of transit may be sold under subclause (1) of Cl. 88 by public auction.
                      </p>
                      <p className="text-gray-200 lg:text-base text-sm leading-relaxed">
                        Sub-section (4) provides that if the goods to be sold include essential commodities, the copy of statement may be sent to the representative of the Central Government, the State Government and the District Magistrate within whose local limits such notified station is situated.
                      </p>
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

export default IRACT1989Section89
