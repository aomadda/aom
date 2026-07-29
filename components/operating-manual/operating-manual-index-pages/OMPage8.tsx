'use client'
import React from 'react'
import { 
  Building2, 
  Lock, 
  Users, 
  Zap, 
  Train, 
  Square,
  Ticket,
  Calendar,
  Package,
  Warehouse,
  Home,
  Bed,
  Luggage,
  Megaphone,
  Toilet,
  Coffee,
  ShoppingBag,
  Settings,
  FileText,
  AlertCircle,
  Database,
  ChevronUp
} from 'lucide-react'

const OMPage8 = () => {
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter II - Station Buildings & Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to understanding station infrastructure, passenger amenities, 
              and operational procedures in railway stations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Station Buildings */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Buildings
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-6">
                  {/* Technical Buildings */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Technical Infrastructure
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      The station equipment are housed in buildings like Panel room, Relay room, Cabins etc. 
                      These along with other rooms critical to train running like Running rooms, Crew lobby are kept away from public.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h5 className="font-semibold text-blue-200 mb-2 flex flex-col gap-2 items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Security Features
                      </h5>
                      <p className="text-base text-gray-200">
                        Relay rooms are double key locked so as to ensure only authorized S&T personnel can have access 
                        and only with the knowledge of the on duty SM.
                      </p>
                    </div>
                  </div>

                  {/* Service Buildings */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-cyan-300 mb-3 flex flex-col gap-2 items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Service Buildings
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      Service buildings like power supply room, ARME, Train lighting staff room are also located nearer 
                      so that they are readily accessible when required.
                    </p>
                  </div>

                  {/* Passenger Amenities */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Passenger Amenities
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      Passenger and other user amenities are made with easy access for passengers/users as per the service 
                      they provide and foot fall expected.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger & User Amenities */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Passenger & User Amenities
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  
                  {/* Platforms */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                      <Square className="w-5 h-5 mr-2" />
                      Platforms
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                        <h6 className="font-semibold text-green-200 mb-2">Passenger Platforms</h6>
                        <p className="text-sm text-gray-200">
                          Passenger platforms are provided at the station to facilitate the boarding/alighting of passengers.
                        </p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                        <h6 className="font-semibold text-emerald-200 mb-2">Goods Shed Platforms</h6>
                        <p className="text-sm text-gray-200">
                          Goods shed platforms are provided to facilitate loading/unloading freight/parcel trains.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                      <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                        <Train className="w-4 h-4 mr-2" />
                        Platform Specifications
                      </h5>
                      <ul className="space-y-4 text-sm text-gray-200">
                        <li className="flex items-start group transition-all duration-200 hover:bg-green-900/20 rounded-lg px-1 py-2 border border-transparent hover:border-green-400/30 shadow-sm">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110">
                            <Square className="w-4 h-4 text-white"/>
                          </span>
                          <span className="flex-1 leading-relaxed">
                            <span className="font-medium text-green-200">Platform Numbers:&nbsp;</span>
                            Number of platforms varies from station to station based on the quantum of traffic dealt.
                          </span>
                        </li>
                        <li className="flex items-start group transition-all duration-200 hover:bg-green-900/20 rounded-lg px-1 py-2 border border-transparent hover:border-green-400/30 shadow-sm">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110">
                            <Train className="w-4 h-4 text-white"/>
                          </span>
                          <span className="flex-1 leading-relaxed">
                            <span className="font-medium text-green-200">Platform Length:&nbsp;</span>
                            Platform length must accommodate the longest train dealt on it.
                          </span>
                        </li>
                        <li className="flex items-start group transition-all duration-200 hover:bg-green-900/20 rounded-lg px-1 py-2 border border-transparent hover:border-green-400/30 shadow-sm">
                          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110">
                            <ChevronUp className="w-4 h-4 text-white"/>
                          </span>
                          <span className="flex-1 leading-relaxed">
                            <span className="font-medium text-green-200">Platform Level:&nbsp;</span>
                            Suburban train platforms are higher; goods shed platforms are generally ground level.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Office Facilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                        <Ticket className="w-5 h-5 mr-2" />
                        Enquiry/Booking Office
                      </h4>
                      <p className="text-sm text-gray-200">
                        These counters are available for issue of tickets and answering the enquiries of passengers. 
                        Reservation tickets are also issued at booking office dealing with less number of passengers.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Reservation Office
                      </h4>
                      <p className="text-sm text-gray-200">
                        Counters are provided at major stations for passengers to book their advance journey tickets.
                      </p>
                    </div>
                  </div>

                  {/* Parcel & Goods */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                        <Package className="w-5 h-5 mr-2" />
                        Parcel Office
                      </h4>
                      <p className="text-sm text-gray-200">
                        Separate office/sheds are provided for booking of Parcels/luggage by the passengers transported through coaching trains. 
                        At stations with high volume of parcel traffic separate inward and outward parcel offices are made along with required storage area.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                        <Warehouse className="w-5 h-5 mr-2" />
                        Goods Shed
                      </h4>
                      <p className="text-sm text-gray-200">
                        Goods shed shall be provided only at such stations which are notified by railway administration based upon the quantum of freight traffic. 
                        Nowadays, rail side warehousing is encouraged rather than having goods sheds.
                      </p>
                    </div>
                  </div>

                  {/* Accommodation & Facilities */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                        <Home className="w-5 h-5 mr-2" />
                        Waiting Halls
                      </h4>
                      <p className="text-sm text-gray-200">
                        Separate halls are provided at station for Upper class, 2nd class and ladies passengers to sit during their wait for the trains. 
                        These are provided with wash room facilities.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                        <Bed className="w-5 h-5 mr-2" />
                        Retiring Rooms/Dormitories
                      </h4>
                      <p className="text-sm text-gray-200">
                        At major stations facilities are available for boarding and lodging for the passengers. 
                        The facility to book these rooms online has now been universalised. Some are managed by IRCTC.
                      </p>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h5 className="font-semibold text-emerald-200 mb-2 flex flex-col gap-2 items-center">
                        <Luggage className="w-4 h-4 mr-2" />
                        Cloak Rooms
                      </h5>
                      <p className="text-sm text-gray-200">
                        Facility is provided for passengers to deposit their luggage in case they do not want to carry with them during their stay.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                        <Megaphone className="w-4 h-4 mr-2" />
                        Sign Boards/Displays
                      </h5>
                      <p className="text-sm text-gray-200">
                        Display boards and PA system are provided for passengers to know about train details and directions.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h5 className="font-semibold text-emerald-200 mb-2 flex flex-col gap-2 items-center">
                        <Toilet className="w-4 h-4 mr-2" />
                        Public Utilities
                      </h5>
                      <p className="text-sm text-gray-200">
                        Toilets and bathing facilities are provided on platforms. Maintained by railways at way side stations and run under pay and use system at major stations.
                      </p>
                    </div>
                  </div>

                  {/* Food & Utility Stalls */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                        <Coffee className="w-5 h-5 mr-2" />
                        Food Stalls
                      </h4>
                      <p className="text-sm text-gray-200">
                        Catering stalls are provided on the platforms for meeting the requirement of food to the passengers.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Utility Stalls
                      </h4>
                      <p className="text-sm text-gray-200">
                        Multi-purpose stalls are provided on the platforms for meeting the requirement of general items of the passengers. 
                        &ldquo;One Station One Product&rdquo; is a recent initiative by the government to encourage local products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Train Operations at Station */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Operations at Station
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-6">
                  
                  {/* Operating Rules */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Operating Rules & Procedures
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      The station is operated by station staff duly following the rules for operating trains in
                      the station as provided in SWR – Station working rules, which are framed in
                      compliance to G&SR, taking into consideration the station&apos;s layout, signalling plan
                      and table of control.
                    </p>
                  </div>

                  {/* Temporary Working Instructions */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 text-center items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Temporary Working Instructions (TWI)
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                      In case of yard modifications and new station commissioning, a temporary set of working instructions (TWI) are issued, 
                      which needs to be followed during the period of work.
                    </p>
                  </div>

                  {/* Additional Instructions */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 text-center items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Additional Operational Instructions
                    </h4>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Apart from the SWR, instructions through Divisional Circulars and Joint Procedure Orders are also issued 
                      regarding certain specific operations.
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

export default OMPage8