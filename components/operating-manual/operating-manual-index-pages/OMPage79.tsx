'use client'
import React from 'react'
import { 
  TrendingUp, 
  Target,
  Wrench,
  Clock,
  Settings,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Users,
  ClipboardList
} from 'lucide-react'

const OMPage79 = () => {
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
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK PRODUCTIVITY
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Machine Performance & Output Standards</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to block productivity measurement, machine output standards, and performance optimization 
              for efficient railway maintenance operations in congested sections.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Block Productivity Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      The actual output of a block as compared to the designed / standardized output is a measure of productivity of the block. 
                      Block productivity is critical in congested sections and it has to be the maximum there. It can be improved by reducing 
                      ineffective time in a block and also by improving the output obtained during the effective time.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex items-center flex-col gap-2 text-center">
                      <Clock className="w-5 h-5 mr-2" />
                      4-Hour Block Standards
                    </h5>
                    <p className="text-white lg:text-base text-sm">
                      Some of the indicative targeted output of machines for a 4 hour block is furnished in the below sections...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Machines Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Wrench className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Track Maintenance Machines
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* 09-3X Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-green-400">
                        Track Machine : 
                      </div>
                      <h5 className="font-semibold text-green-300">09-3X</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-green-400 font-semibold mr-2">Purpose : </span> Plain track tamping
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-green-400 font-semibold mr-2">Function : </span> Corrects track geometry i.e., alignment, twist, cross level, longitudinal level, packs ballast under sleepers. This machine can pack three sleepers at a time.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-green-400 font-semibold mr-2">Output : </span> 1.6 km
                      </div>
                    </div>
                  </div>

                  {/* CSM Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-blue-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-blue-300">CSM</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-blue-400 font-semibold mr-2">Purpose : </span> Plain track tamping with two sleepers at a time
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-blue-400 font-semibold mr-2">Function : </span> Same as above. But can pack two sleepers at a time.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-blue-400 font-semibold mr-2">Output : </span> 1.2 km
                        <span className="text-blue-300 font-bold">Output: 1.2 km</span>
                      </div>
                    </div>
                  </div>

                  {/* UNO Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-purple-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-purple-300">UNO</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-purple-400 font-semibold mr-2">Purpose : </span> Plain track tamping
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-purple-400 font-semibold mr-2">Function : </span> Same as above. Generally deployed at work site. But can pack one sleeper at a time.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-purple-400 font-semibold mr-2">Output : </span> 0.5 km
                      </div>
                    </div>
                  </div>

                  {/* DUO (0) Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-orange-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-orange-300">DUO (0)</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-orange-400 font-semibold mr-2">Purpose : </span> Plain track tamping
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-orange-400 font-semibold mr-2">Function : </span> Same as above. Generally deployed at work site. But can pack two sleepers at a time.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-orange-400 font-semibold mr-2">Output : </span> 0.8 km
                      </div>
                    </div>
                  </div>

                  {/* WST Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-teal-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-teal-300">WST</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-teal-400 font-semibold mr-2">Purpose : </span> Plain track tamping
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-teal-400 font-semibold mr-2">Output : </span> Standard
                      </div>
                    </div>
                  </div>

                  {/* BCM Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-indigo-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-indigo-300">BCM</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-indigo-400 font-semibold mr-2">Purpose : </span> Ballast screening of Plain and Turnout track
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-indigo-400 font-semibold mr-2">Function : </span> It screens track ballast by removing muck, thus improve drainage & elasticity of track for safe & comfortable running.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-indigo-400 font-semibold mr-2">Output : </span> 0.2 km
                      </div>
                    </div>
                  </div>

                  {/* FRM Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-pink-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-pink-300">FRM</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-pink-400 font-semibold mr-2">Purpose : </span> Shoulder Ballast cleaning machine
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-pink-400 font-semibold mr-2">Function : </span> It is used to carry out cleaning of shoulder ballast by removing muck, drainage of track and improving elasticity of ballast bed.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-pink-400 font-semibold mr-2">Output : </span> 0.4 km
                      </div>
                    </div>
                  </div>

                  {/* UNI Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-yellow-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-yellow-300">UNI</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-yellow-400 font-semibold mr-2">Purpose : </span> Turnout packing
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-yellow-400 font-semibold mr-2">Function : </span> It corrects turnout track geometry i.e., alignment, twist, cross level, longitudinal level and pack ballast under sleepers.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-yellow-400 font-semibold mr-2">Output : </span> 1 T/out
                      </div>
                    </div>
                  </div>

                  {/* DGS Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-emerald-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-emerald-300">DGS</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-emerald-400 font-semibold mr-2">Purpose : </span> Consolidation of newly packed track
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-emerald-400 font-semibold mr-2">Function : </span> It builds up lateral resistance & consolidation of track faster and helps to relax speed restriction early.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-emerald-400 font-semibold mr-2">Output : </span> 1.0 km
                      </div>
                    </div>
                  </div>

                  {/* TRT Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-violet-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-violet-300">TRT</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-violet-400 font-semibold mr-2">Purpose : </span> Laying of track
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-violet-400 font-semibold mr-2">Function : </span> It is fully mechanized system of complete Track Renewal.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">   
                        <span className="text-violet-400 font-semibold mr-2">Output : </span> 0.36 km
                      </div>
                    </div>
                  </div>

                  {/* PQRS Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-cyan-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-cyan-300">PQRS</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-cyan-400 font-semibold mr-2">Purpose : </span> Laying of track
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-cyan-400 font-semibold mr-2">Function : </span> It is a semi-mechanized system of track renewal wherein prefabricated rail panels are laid and existing panels are laid and existing panels removed with minimum labour.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-cyan-400 font-semibold mr-2">Output : </span> 0.24 km
                      </div>
                    </div>
                  </div>

                  {/* T-28 Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-rose-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-rose-300">T-28</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-rose-400 font-semibold mr-2">Purpose : </span> Turnout replacement
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-rose-400 font-semibold mr-2">Function : </span> It is fully mechanized system of replacing complete turn out with minimum labour.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">   
                        <span className="text-rose-400 font-semibold mr-2">Output : </span> 1 T/out
                      </div>
                    </div>
                  </div>

                  {/* UTV Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-amber-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-amber-300">UTV</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-amber-400 font-semibold mr-2">Purpose : </span> Utility Vehicle
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-amber-400 font-semibold mr-2">Function : </span> It mechanizes system of transporting heavy material like rails, sleepers etc., from one station to another station under traffic block.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-amber-400 font-semibold mr-2">Output : </span> 50 rails per hour in one BFR
                      </div>
                    </div>
                  </div>

                  {/* BRM Machine */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className=" mr-3 flex items-center justify-center text-sm font-semibold text-sky-400">
                        Track Machine
                      </div>
                      <h5 className="font-semibold text-sky-300">BRM</h5>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-200">
                        <span className="text-sky-400 font-semibold mr-2">Purpose : </span> Ballast Regulating Machine
                      </p>
                      <p className="text-sm text-gray-200">
                        <span className="text-sky-400 font-semibold mr-2">Function : </span> It is fully mechanized system of Track Ballast equalization, regulation and profiling.
                      </p>
                      <div className="flex items-center mt-3 text-sm text-white">
                        <span className="text-sky-400 font-semibold mr-2">Output : </span> 2 Km
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Key Factors Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Star className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Key Factors Affecting Block Output
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <p className="text-white lg:text-base text-sm leading-relaxed">
                      The output of any block depends on level of preparatory works done, strength of staff and labour used, 
                      level of detailed planning etc. This is critical especially in congested sections. Also a judicious mix 
                      of periodical and condition based maintenance will also be needed in such sections so that the block 
                      requirements are optimized and assets are fully utilized.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-purple-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Preparatory Works
                      </h5>
                      <p className="text-sm text-gray-200">
                        Level of preparatory works completed before block execution
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-pink-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <Users className="w-4 h-4 mr-2" />
                        Staff & Labour Strength
                      </h5>
                      <p className="text-sm text-gray-200">
                        Adequate manpower allocation and skill levels
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-purple-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <ClipboardList className="w-4 h-4 mr-2" />
                        Detailed Planning
                      </h5>
                      <p className="text-sm text-gray-200">
                        Comprehensive planning and coordination efforts
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h5 className="font-semibold text-pink-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Maintenance Strategy
                      </h5>
                      <p className="text-sm text-gray-200">
                        Balance between periodical and condition-based maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Optimization Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Performance Optimization Strategies
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-orange-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Reduce Ineffective Time
                      </h5>
                      <p className="text-sm text-gray-200">
                        Minimize downtime and optimize block utilization
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-red-300 mb-2 flex items-center flex-col gap-2 text-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Improve Effective Time Output
                      </h5>
                      <p className="text-sm text-gray-200">
                        Maximize productivity during active work periods
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-orange-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Congested Section Focus
                      </h5>
                      <p className="text-sm text-gray-200">
                        Prioritize productivity in high-traffic areas
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                      <h5 className="font-semibold text-red-400 mb-2 flex items-center flex-col gap-2 text-center">
                        <Target className="w-4 h-4 mr-2" />
                        Asset Utilization
                      </h5>
                      <p className="text-sm text-gray-200">
                        Ensure full utilization of available resources
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

export default OMPage79