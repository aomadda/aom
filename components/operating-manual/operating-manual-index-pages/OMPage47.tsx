'use client'
import React from 'react'
import { 
  Train, 
  Package, 
  Zap,
  Route,
  TrendingUp,
  Gauge,
  RefreshCw,
  Link,
  MapPin,
  Building2,
  BarChart3,
  Cpu,
  Zap as Power,
  Wrench,
  Users
} from 'lucide-react'

const OMPage47 = () => {
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
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              OPERATING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Freight Train Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to freight transportation, types of freight trains, 
              and locomotive operations for efficient cargo movement across Indian Railways.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Freight Transportation Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                  Freight Transportation involves movement of raw material from production
                  centers to industries and semi-finished/finished goods to consuming areas. It plays
                  an important role in economic and industrial development of a country.
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                  The freight business is the major source of revenue for the Indian Railways. Main activity
                  centers of freight operation include sidings, goods sheds and examination yards.
                </p>
              </div>
            </div>

            {/* Types of Freight Trains */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Train className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Freight Trains
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                {/* Pilot Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Pilot Trains
                  </h4>
                  <p className="text-sm text-gray-200">
                    Pilot Trains are those moving between serving station and siding for loading or
                    unloading.
                  </p>
                </div>

                {/* Through Goods Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Through Goods Trains
                  </h4>
                  <p className="text-sm text-gray-200">
                    Through goods trains are freight trains transporting goods from one goods yard to
                    the next without stoppage at intermediate points. Most of the freight trains run in the
                    Indian Railways fall in this category.
                  </p>
                </div>

                {/* MGR Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Merry Go Round (MGR) Trains
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    Certain circuits are planned to make continuous trips between loading and unloading 
                    points with captive loco / formation. In SCR, such a system is functioning for 
                    supplying coal from Singareni Collieries at Mancherial station to NTPC power plant 
                    at Ramagundam station.
                  </p>
                  <p className="text-sm text-gray-200">
                    The track is arranged in a bulb like formation so that there is no requirement for 
                    Engine reversal since the movement is circular. Since these trains make continuous 
                    round trips between dedicated loading and unloading points virtually without detention, 
                    they are named as Merry Go Round trains.
                  </p>
                </div>

                {/* Block Rake */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Package className="w-5 h-5 mr-2" />
                    Block Rake
                  </h4>
                  <p className="text-sm text-gray-200">
                    Depending upon the type of wagon, a full train length is determined as a
                    block rake. Most of the freight trains in Indian Railway fall in this category. Usually
                    this train is booked for a single destination and gets a fare benefit of Train Load.
                  </p>
                </div>

                {/* Mini Rake */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Gauge className="w-5 h-5 mr-2" />
                    Mini Rake
                  </h4>
                  <p className="text-sm text-gray-200">
                    It is a short rake composed of half the number of wagons specified for a
                    Block Rake. These rakes are generally formed during slack seasons to promote
                    loading with lesser quantity than Block Rake.
                  </p>
                </div>

                {/* Long Haul Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Route className="w-5 h-5 mr-2" />
                    Long Haul Trains
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    With the increase in freight traffic disproportionate to increase in
                    line capacity, Indian Railways has been innovating on increasing throughput per
                    train. Improving design of wagon for a better pay to tare weight ratio, improved axle
                    load etc. are long term solutions requiring expenditure.
                  </p>
                  <p className="text-sm text-gray-200 mb-4">
                    However, Long Haul Trains which are formed by joining two or three block rakes 
                    and run in a single path, doubles/triples the section capacity and through put. 
                    With the success of running such trains, Longer Loop lines are being developed 
                    in one station for every stretch of 50-60 km.
                  </p>
                  <p className="text-sm text-gray-200">
                                         In SCR long haul trains with two rake composition are called python rakes
                     and trains&apos; name are suffixed with &apos;P&apos;.
                  </p>
                </div>

                {/* Two Point Rake */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Two Point Rake
                  </h4>
                  <p className="text-sm text-gray-200">
                    Two Point Rake is a freight train carrying two sets of wagons destined for two
                    terminals. This is generally permitted for authorized pair of destinations.
                  </p>
                </div>

                {/* Multi Point Rake */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Link className="w-5 h-5 mr-2" />
                    Multi Point Rake
                  </h4>
                  <p className="text-sm text-gray-200">
                    Multi Point Rake is a train carrying sets of wagons destined to more than two
                    destinations. This type of loading is permitted only during slack season.
                  </p>
                </div>

                {/* Crack Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-green-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Crack Trains
                  </h4>
                  <p className="text-sm text-gray-200 mb-4">
                    These trains are planned to run through bypassing an intermediate
                    crew changing point without changing of crew. They are given a good path so as to
                    reach the destination/interchange point/another crew change point within crew hours.
                  </p>
                  <p className="text-sm text-gray-200">
                    By running crack specials average speed of goods trains are increased thereby
                    improving wagon turn-round, sectional through put and reducing crew detentions.
                  </p>
                </div>

                {/* Private Trains */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-emerald-300 mb-3 flex items-center flex-col gap-2 text-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Private Trains
                  </h4>
                  <p className="text-sm text-gray-200">
                    Though most of the freight trains are owned by Indian Railways,
                    there are fleets owned by private companies too. Most container trains fall under
                    this category. Some special type of wagon trains and automobile carriers are also
                    owned by private companies.
                  </p>
                </div>
              </div>
            </div>

            {/* Freight Locomotives */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Power className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Freight Locomotives
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Locomotives for freight operations are usually of higher hauling power in order to
                  work loaded trains. Except in some captive circuits, freight locomotives do not work
                  in specific links.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Load Chart */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-purple-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Load Chart
                    </h4>
                    <p className="text-sm text-gray-200">
                      In order to ensure adequate powering for a freight train, including the factors like
                      ruling gradient, trailing load, a section wise tabulation is provided in WTT for various
                      combinations of freight locomotives and formation loads. This table known as Load
                      chart also provides special conditions like running through at a station, providing
                      banker, etc.
                    </p>
                  </div>

                  {/* Power Plan */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-pink-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Cpu className="w-5 h-5 mr-2" />
                      Power Plan
                    </h4>
                    <p className="text-sm text-gray-200">
                      The requirement of freight locomotives worked out for running freight and other trains
                      is known as power plan. It is prepared once in a year on the basis of the number of
                      trains run section wise in the previous year. A prescribed additional % engine kms
                      are added for anticipated traffic growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Wagons */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Package className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Wagons
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Based on the different goods to be transported in freight trains, the following types of
                  wagon have been designed and put in use.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Open Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-yellow-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Open Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      They carry coal, ores, limestone etc. which are not drastically
                      affected by atmosphere during transit. These wagons can be tippled or be unloaded
                      through flap doors provided. They are also used for loading bagged commodities
                      duly covering them with tarpaulins to avail benefits of back loading or empty flow.
                    </p>
                  </div>

                  {/* Covered Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Covered Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      Normally used for goods which are prone to damage during
                      transit by the atmosphere conditions such as good grains, cement, fertilizers, etc.
                    </p>
                  </div>

                  {/* Flat Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-yellow-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Flat Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      Normally used for transportation of steel coils, rail sleepers, etc. are
                      wagons without any side walls.
                    </p>
                  </div>

                  {/* Container Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Container Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are special flat wagons designed for handling containers.
                      These wagons are provided with semi-permanent coupling.
                    </p>
                  </div>

                  {/* Hopper Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-yellow-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Hopper Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      Special wagons designed for rapid discharge from bottom used for
                      transporting coal and ballast.
                    </p>
                  </div>

                  {/* Well Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Gauge className="w-5 h-5 mr-2" />
                      Well Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      Wagons having a well-shaped under frame normally used for
                      transportation of larger consignments like military tanks, heavy equipment etc.
                    </p>
                  </div>

                  {/* Tank Wagons */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-yellow-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Package className="w-5 h-5 mr-2" />
                      Tank Wagons
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are wagons designed to carry liquid consignment like
                      petroleum products, milk, edible oils, etc.
                    </p>
                  </div>

                  {/* Automobile Carriers */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-orange-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Train className="w-5 h-5 mr-2" />
                      Automobile Carriers
                    </h4>
                    <p className="text-sm text-gray-200">
                      These are specially designed to carry automobiles. Passenger
                      coaches modified to suit loading of automobiles are called NMGs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wagon Syntax */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-cyan-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Wagon Syntax
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  All wagons are provided with alphabetical code which indicates the type or purpose
                  of the wagon.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">Code</h5>
                    <h6 className="font-semibold text-teal-300 mb-2">Details</h6>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">B</h5>
                    <p className="text-sm text-gray-200">Bogie Wagon</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">O</h5>
                    <p className="text-sm text-gray-200">Open Wagon</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">C</h5>
                    <p className="text-sm text-gray-200">Covered Wagon</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">T</h5>
                    <p className="text-sm text-gray-200">Tank Wagon</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">P</h5>
                    <p className="text-sm text-gray-200">Petrol</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">LPG</h5>
                    <p className="text-sm text-gray-200">Liquid Petroleum Gas</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">BR</h5>
                    <p className="text-sm text-gray-200">Bottom Rapid Discharge</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">BY</h5>
                    <p className="text-sm text-gray-200">Bottom Mech. Discharge</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">R</h5>
                    <p className="text-sm text-gray-200">Rails</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">C</h5>
                    <p className="text-sm text-gray-200">Container</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">L</h5>
                    <p className="text-sm text-gray-200">Low Platform</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">ST</h5>
                    <p className="text-sm text-gray-200">Steel Load</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">N</h5>
                    <p className="text-sm text-gray-200">Air Brake Stock</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">X</h5>
                    <p className="text-sm text-gray-200">All welded construction</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">HS</h5>
                    <p className="text-sm text-gray-200">High speed</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">HL</h5>
                    <p className="text-sm text-gray-200">High Load</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">HA</h5>
                    <p className="text-sm text-gray-200">Higher axle load</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h5 className="font-semibold text-cyan-300 mb-2">LW</h5>
                    <p className="text-sm text-gray-200">Light weight</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wagon Pooling */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Link className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Wagon Pooling
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Every zonal railway of IR has been allotted with a fleet of freight wagons by the
                  Directorate of Wagon Interchange (DWI) under the IRCA for coordinating wagon
                  interchanges. Of these, most wagons are contributed to the general pool.
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Zones are restricted to maintain their wagon balances proportionate to their contribution to the
                  general pool of wagons. Wagons not contributed to the general pool of wagons are
                  marked as Non-Pooled Wagons (&apos;NP&apos;). These are usually some special-purpose
                  high-capacity wagons earmarked for specific operations on particular routes.
                </p>
              </div>
            </div>

            {/* Train Examination */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Train Examination
              </h2>
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-pink-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  Freight trains are examined in nominated yards having the facilities for examination
                  and wagon attention. The examination normally gets done when the wagons are in
                  empty condition with a few exceptions of loaded examinations permitted by extant
                  instructions / JPO.
                </p>
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  There are three kinds of freight examination - Closed circuit
                  examination, Premium examination & End to end examination. As CC rakes are valid
                  for a higher number of days, they can be loaded multiple times before subsequent
                  examination and hence have a positive effect on Wagon Turn Round.
                </p>
              </div>
            </div>

            {/* Crew */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Crew
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                  In case of freight trains, crew is booked through Crew Management System (CMS)
                  on the basis of first in and first out for the first week and in subsequent week based
                  on the number of duty hours they performed.
                </p>
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

export default OMPage47