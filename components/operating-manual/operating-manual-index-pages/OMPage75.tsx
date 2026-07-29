'use client'
import React from 'react'
import { 
  Train, 
  Wrench,
  AlertTriangle,
  Settings,
  Zap,
  FileText,
  BarChart3,
  ClipboardList,
  Shield,
  Power,
  Network,
  Server,
  Construction,
  Building,
  Cable,
  Unplug,
  CircuitBoard,
  Clock,
  Calendar,
  Moon,
  Route,
  Target,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'

const OMPage75 = () => {
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
                <Train className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              TRAFFIC BLOCKS
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Chapter V - Maintenance & Operations Management</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to traffic blocks, maintenance procedures, power blocks, 
              OHE systems, and operational safety measures for efficient railway operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Introduction Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Introduction to Traffic Blocks
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Key Concepts
                    </h5>
                    <ul className="space-y-3 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Wrench className="w-5 h-5" />
                        </span>
                        <span>All material assets being used in operations require maintenance. In an ideal scenario, maintenance and operations should not interfere with each other.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <AlertTriangle className="w-5 h-5" />
                        </span>
                        <span>However, there are works of maintenance, failure restoration and new projects that require train operations to be stopped. Such works are carried out under traffic blocks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Clock className="w-5 h-5" />
                        </span>
                        <span>For accommodating such works to the extent possible, coaching trains are charted in such a way that time slots are available in a section to provide traffic blocks without affecting punctuality.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-700">
                          <Calendar className="w-5 h-5" />
                        </span>
                        <span>Such time slots called as &apos;corridor blocks&apos; are incorporated in the Working Time Table.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-800">
                          <Moon className="w-5 h-5" />
                        </span>
                        <span>In some cases like suburban, since the need for transportation is almost nil in night time, corridor blocks are slotted at night time.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-900">
                          <Route className="w-5 h-5" />
                        </span>
                        <span>In branch line and sections with less traffic, providing slots for traffic blocks are easily done.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-950">
                          <BarChart3 className="w-5 h-5" />
                        </span>
                        <span>In sections where there is congestion due to growth in traffic disproportionate to the line capacity, path becomes critical.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-100">
                          <Target className="w-5 h-5" />
                        </span>
                        <span>Also, the fixed assets are most utilized in the congested lines and hence the issue of maintenance in such lines becomes important.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-200">
                          <TrendingUp className="w-5 h-5" />
                        </span>
                        <span>Thus sections with heavy traffic often become the focus of both operations as well as maintenance. In these sections, every path is precious and should be utilized to the maximum.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-300">
                          <Train className="w-5 h-5" />
                        </span>
                        <span>Long haul trains and Integrated Blocks are two such measures in this direction.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Shield className="w-5 h-5" />
                        </span>
                        <span>Many such measures are required to ensure that such congestion do not result in loss of loading/earning or a backlog in maintenance.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Blocks Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Traffic Blocks
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  
                  {/* Emergency Blocks */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-red-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Emergency Blocks
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-400">
                          <AlertTriangle className="w-4 h-4" />
                        </span>
                        <span>These are taken to rectify failures that result in unsafe condition for train running.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-500">
                          <Clock className="w-4 h-4" />
                        </span>
                        <span>Since such blocks are not planned per se, staff of various departments are trained to do such works in shortest possible time.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-red-600">
                          <Target className="w-4 h-4" />
                        </span>
                        <span>Primary goal is restoring the traffic. Complete restoration is then planned subsequently.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Maintenance Blocks */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Wrench className="w-5 h-5 mr-2" />
                      Maintenance Blocks
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-400">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <span>These are planned blocks to ensure that the current assets are kept in proper shape so that failures are prevented.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-500">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span>When machines are used for such blocks they are termed as Machine Blocks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-blue-600">
                          <Clock className="w-4 h-4" />
                        </span>
                        <span>As the output of machine is dependent on the effective block hours, longer blocks are preferred to the extent possible.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Mega Blocks */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Mega Blocks
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Clock className="w-4 h-4" />
                        </span>
                        <span>These are of longer duration and are taken for major works involving bridges, subways etc.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <Calendar className="w-4 h-4" />
                        </span>
                        <span>As these works are well known, they need to be planned in advance and programmed to have the least impact on train operations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-600">
                          <Route className="w-4 h-4" />
                        </span>
                        <span>A temporary change in the pattern of train working like rescheduling, diversion, partial and full cancellations is planned for one or two days with adequate advance intimation to traveling public.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Pre NI / NI Blocks */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Construction className="w-5 h-5 mr-2" />
                      Pre NI / NI Blocks
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Construction className="w-4 h-4" />
                        </span>
                        <span>These are blocks required for carrying out yard modifications needed for commissioning new projects.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <ClipboardList className="w-4 h-4" />
                        </span>
                        <span>As every yard is different from other and works are also different from each other, there needs to be meticulous planning of such works.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <Target className="w-4 h-4" />
                        </span>
                        <span>The primary goal of such blocks is to keep the duration of &quot;Non-interlocked working&quot; to the barest minimum.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-700">
                          <Route className="w-4 h-4" />
                        </span>
                        <span>The blocks should be planned to have the least impact on train running.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-800">
                          <Calendar className="w-4 h-4" />
                        </span>
                        <span>As in mega blocks, a temporary change in pattern of train running and maintenance are also planned to tide over the block period.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Block Planning Guidelines */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <ClipboardList className="w-5 h-5 mr-2" />
                      Block Planning Guidelines
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-400">
                          <ClipboardList className="w-4 h-4" />
                        </span>
                        <span>In all the above type of blocks, advance planning is very vital in improving the block utilization.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-500">
                          <BarChart3 className="w-4 h-4" />
                        </span>
                        <span>When blocks are better utilized, block hours become optimum and train operations are least affected.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-600">
                          <Target className="w-4 h-4" />
                        </span>
                        <span>In sections where block availability is not an issue, works can be planned for execution at an economically optimum method.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-700">
                          <Clock className="w-4 h-4" />
                        </span>
                        <span>However, in congested sections, works need to be planned for execution at the most time efficient manner.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-emerald-800">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <span>Block time should be minimized by doing additional preparatory works and choosing the fastest method of execution etc.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Block Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Zap className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Power Blocks & OHE Systems
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="space-y-6">
                  
                  {/* Power Block Definition */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Power className="w-5 h-5 mr-2" />
                      Power Block Definition
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Power className="w-4 h-4" />
                        </span>
                        <span>When only OHE power supply is disconnected, the block is termed as power block.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Train className="w-4 h-4" />
                        </span>
                        <span>In some cases, such blocks allow movement of diesel locomotive hauled trains. This must be specifically mentioned while seeking the block.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <span>Power blocks are generally taken for OHE maintenance.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-700">
                          <AlertTriangle className="w-4 h-4" />
                        </span>
                        <span>Emergency power blocks are imposed during abnormalities like hot axle, fire in train etc. where power supply is switched off immediately on receipt of such information.</span>
                      </li>
                    </ul>
                  </div>

                  {/* OHE Components */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Cable className="w-5 h-5 mr-2" />
                      OHE Components
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Cable className="w-4 h-4" />
                        </span>
                        <span>OHE – Over Head equipment comprises of a catenary wire and contact wire.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <Zap className="w-4 h-4" />
                        </span>
                        <span>The contact wire is a grooved copper wire that carries the 25KV current and feeds it to the locomotive when the loco&apos;s pantograph touches it.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <Network className="w-4 h-4" />
                        </span>
                        <span>The contact wire is supported by the catenary wire through dropper wires.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-700">
                          <Cable className="w-4 h-4" />
                        </span>
                        <span>The catenary wire is a stranded cadmium copper or aluminum alloy wire that runs above the contact wire throughout its length.</span>
                      </li>
                    </ul>
                  </div>

                  {/* OHE Structure */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-400 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Building className="w-5 h-5 mr-2" />
                      OHE Structure & Support
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-400">
                          <Building className="w-4 h-4" />
                        </span>
                        <span>Both these wires are supported by masts or portals in a span of 72 meters in straight alignment.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Route className="w-4 h-4" />
                        </span>
                        <span>On curves, the mast span reduces up to 27 meters depending on the radius of the curve.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span>The wires are connected to the mast through an insulated cantilever bracket assembly.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-700">
                          <Cable className="w-4 h-4" />
                        </span>
                        <span>For some less important lines, the catenary wire is not provided and only contact wire is provided. Such OHE is called tramway OHE.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Power Supply System */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-400 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Server className="w-5 h-5 mr-2" />
                      Power Supply System
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-400">
                          <Zap className="w-4 h-4" />
                        </span>
                        <span>The 25KV power supply is derived from the power grids through traction substations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <BarChart3 className="w-4 h-4" />
                        </span>
                        <span>The number of such substations in a section depends on the intensity of traffic and load of the trains.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <Network className="w-4 h-4" />
                        </span>
                        <span>The lines which supply power from the grid to the substations are called feeder lines. They are supported by feeder posts (FP).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-700">
                          <Server className="w-4 h-4" />
                        </span>
                        <span>At locations where supply from two different sub stations converges, a sectioning and paralleling post (SP) is provided with a neutral section.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sectioning Posts */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-500 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Network className="w-5 h-5 mr-2" />
                      Sectioning & Paralleling Posts
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-500">
                          <Network className="w-4 h-4" />
                        </span>
                        <span>These posts keep the supplies of two substations isolated from each other.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-600">
                          <Zap className="w-4 h-4" />
                        </span>
                        <span>If a supply from one substation fails, the SP has provision for bridging and providing the supply from the adjacent substation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-yellow-700">
                          <Server className="w-4 h-4" />
                        </span>
                        <span>Also additional sub sectioning and paralleling posts (SSP) are provided between each FP and adjacent SP depending upon the distance between them, which can do similar functions like SP.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Sub Sectors */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-orange-500 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <CircuitBoard className="w-5 h-5 mr-2" />
                      Sub Sectors & Elementary Sections
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-500">
                          <AlertTriangle className="w-4 h-4" />
                        </span>
                        <span>When there is a fault or there is a requirement of maintenance, the power supply can be isolated between any two SSPs/SPs by using the power interrupters.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-600">
                          <CircuitBoard className="w-4 h-4" />
                        </span>
                        <span>The shortest section of OHE which can be isolated by opening interrupters is called a &apos;sub sector&apos;.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-700">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span>Each sub sector is further sub divided into &apos;elementary sections&apos; by providing manually operated isolator switches.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-orange-800">
                          <Shield className="w-4 h-4" />
                        </span>
                        <span>These isolators are provided with earthing arrangements.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Power Block Impact */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-yellow-600 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Power Block Impact
                    </h5>
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      Power blocks are usually planned elementary section wise to limit its impact on train operations. The impact of a power block will depend on the number and positioning of elementary sections that are to be switched off.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disconnection/Reconnection Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Unplug className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Disconnection & Reconnection Procedures
              </h2>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      S&T Works Disconnection
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <Shield className="w-4 h-4" />
                        </span>
                        <span>Some of the S&T works should only be done duly disconnecting the gear required and making the corresponding signal inoperative.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-500">
                          <Wrench className="w-4 h-4" />
                        </span>
                        <span>Such works are done on disconnection.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-600">
                          <ClipboardList className="w-4 h-4" />
                        </span>
                        <span>These gears are then taken for normal working only after issue of reconnection memo by the authorized S&T staff.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-pink-300 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <Train className="w-5 h-5 mr-2" />
                      Train Operations During Disconnection
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-400">
                          <Train className="w-4 h-4" />
                        </span>
                        <span>Train operations if required to be done during this period, has to be done duly intimating the S&T staff working.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-500">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span>Proper setting of points manually by cranking and clamping must be ensured.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-600">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span>All conditions that are needed for train movements have to be ensured.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-pink-700">
                          <ClipboardList className="w-4 h-4" />
                        </span>
                        <span>Proper authority has to be issued to the Loco Pilot.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 border border-white/20">
                    <h5 className="font-semibold text-purple-400 mb-3 flex flex-col lg:flex-row gap-3 text-center lg:text-left items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Non-interlocked Working
                    </h5>
                    <ul className="space-y-2 pl-1 text-white lg:text-base text-sm">
                      <li className="flex items-start">
                        <span className="shrink-0 mt-1 mr-3 text-purple-400">
                          <AlertTriangle className="w-4 h-4" />
                        </span>
                        <span>A prolonged disconnection leads to &quot;Non-interlocked working&quot; where Temporary working instructions need to be issued.</span>
                      </li>
                    </ul>
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

export default OMPage75