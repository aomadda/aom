'use client'
import React from 'react'
import { 
  BookOpen, 
  FileText, 
  Train, 
  Signal, 
  Shield, 
  Route,
  Monitor,
  Settings,
  Archive,
  FileCheck,
  CheckCircle,
  AlertCircle,
  FileX,
  Power,
  Car,
  Truck,
  Clipboard,
  Calendar,
  AlertTriangle,
  Users,
  Wrench,
  Lock,
  Key,
  
  List,
  LaptopMinimal,
  Clock
} from 'lucide-react'

const OMPage15 = () => {
  return (
    <><div className="min-h-screen bg-gradient-to-br from-indigo-900 text-white via-purple-900 to-pink-900 relative overflow-hidden">
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
                              <BookOpen className="w-8 h-8 text-white" />
                          </div>
                      </div>
                      <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
                          STATION REGISTERS, BOOKS & FORMS
                      </h1>
                      <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Operating Manual - Chapter</h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
                      <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
                          A comprehensive guide to understanding the essential registers, books, and forms
                          that must be maintained at railway stations for proper documentation and safety.
                      </p>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-6">

                      {/* Introduction Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              Introduction
                          </h2>
                          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                                  In order to streamline day to day working in stations and to ensure due procedure,
                                  proper documentation of events, a set of books & forms and registers are warranted
                                  to be maintained in stations.
                              </p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                                  Station Master should see to that all registers, forms and charts are properly and neatly maintained
                                  and that they are not used for purpose other than those for which they are printed and supplied.
                              </p>
                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-4">
                                  These registers form a record of performance of the station for the assessment and improvement of the
                                  working of train operations and facilities available at the station.
                              </p>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                                          <Shield className="w-5 h-5 mr-2" />
                                          Storage Requirements
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Registers must be placed on shelves and almairah in dry and secure places where they shall be safe
                                          from irregular handling or removal by unauthorized person.
                                      </p>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-cyan-300 mb-3 flex flex-col gap-2 items-center">
                                          <Archive className="w-5 h-5 mr-2" />
                                          Preservation & Disposal
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          The completed registers must be archived and maintained till their designated period of preservation.
                                          On completion of that period, they can be destroyed duly recording their details in a register.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Main Registers Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              Essential Station Registers
                          </h2>
                          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">

                              {/* Train Passing Registers */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                                  <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                                      <Train className="w-5 h-5 mr-2" />
                                      Train Passing Registers
                                  </h4>
                                  <div className="space-y-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-2 border border-white/20">
                                          <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                                              <Signal className="w-4 h-4 mr-2" />
                                              Train Signals Register (TSR)
                                          </h5>
                                          <p className="text-sm text-gray-200 mb-3">
                                              In this register, the on duty SM records the timings of various train passing operations and events
                                              in the station for every train.
                                          </p>
                                          <ul className="space-y-3 text-gray-100 text-[15px]">
                                              <li className="group flex items-center bg-gradient-to-r from-green-800/20 to-green-600/10 rounded-xl px-2 py-2 border border-green-400/20 shadow-sm hover:bg-gradient-to-l hover:from-green-500/10 hover:to-emerald-400/10 hover:border-green-400/40 transition-all duration-300">
                                                  <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-full shadow-lg mr-4 group-hover:scale-110 transition-transform">
                                                      <Clock className="w-4 h-4 text-white" />
                                                  </span>
                                                  <span className="flex-1 font-medium tracking-wide group-hover:text-green-200 transition-colors">
                                                      Timings of various events from granting line clear to rear station up to section clearance at the advance station
                                                  </span>
                                              </li>
                                              <li className="group flex items-center bg-gradient-to-r from-green-800/20 to-green-600/10 rounded-xl px-2 py-2 border border-green-400/20 shadow-sm hover:bg-gradient-to-l hover:from-green-500/10 hover:to-emerald-400/10 hover:border-green-400/40 transition-all duration-300">
                                                  <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-green-500 via-green-300 to-emerald-300 rounded-full shadow-lg mr-4 group-hover:scale-110 transition-transform">
                                                      <AlertTriangle className="w-4 h-4 text-white" />
                                                  </span>
                                                  <span className="flex-1 font-medium tracking-wide group-hover:text-green-200 transition-colors">
                                                      Failure of block instruments, Maintenance blocks in force, PN obtained from guard regarding complete arrival
                                                  </span>
                                              </li>
                                              <li className="group flex items-center bg-gradient-to-r from-green-800/20 to-green-600/10 rounded-xl px-2 py-2 border border-green-400/20 shadow-sm hover:bg-gradient-to-l hover:from-green-500/10 hover:to-emerald-400/10 hover:border-green-400/40 transition-all duration-300">
                                                  <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-full shadow-lg mr-4 group-hover:scale-110 transition-transform">
                                                      <List className="w-4 h-4 text-white" />
                                                  </span>
                                                  <span className="flex-1 font-medium tracking-wide group-hover:text-green-200 transition-colors">
                                                      Each block instrument mandates a separate TSR
                                                  </span>
                                              </li>
                                              <li className="group flex items-center bg-gradient-to-r from-green-800/20 to-green-600/10 rounded-xl px-2 py-2 border border-green-400/20 shadow-sm hover:bg-gradient-to-l hover:from-green-500/10 hover:to-emerald-400/10 hover:border-green-400/40 transition-all duration-300">
                                                  <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-green-400 via-emerald-500 to-green-400 rounded-full shadow-lg mr-4 group-hover:scale-110 transition-transform">
                                                      <LaptopMinimal className="w-4 h-4 text-green-100" />
                                                  </span>
                                                  <span className="flex-1 font-medium tracking-wide group-hover:text-green-200 transition-colors">
                                                      C-TSR/E-TSR systems available at some stations for computerized entries
                                                  </span>
                                              </li>
                                          </ul>
                                      </div>

                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h5 className="font-semibold text-emerald-200 mb-2 flex flex-col gap-2 items-center">
                                              <CheckCircle className="w-4 h-4 mr-2" />
                                              Train Intact Arrival Register
                                          </h5>
                                          <p className="text-sm text-gray-200">
                                              At stations where BPAC is not available/not working and trains are worked without guard/BV or walkie talkie
                                              of Guard is not functioning, the PN issued by Guard/Pointsman indicating the complete arrival of the trains
                                              is mentioned in this register.
                                          </p>
                                      </div>

                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                          <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                                              <Route className="w-4 h-4 mr-2" />
                                              Gate PN Exchange Register
                                          </h5>
                                          <p className="text-sm text-gray-200 mb-3">
                                              Entries pertaining to exchange of PN with the gateman as per GWIs are mentioned here.
                                              It is maintained both at station and at the gate lodge.
                                          </p>
                                          <p className="text-sm text-gray-200">
                                              With the development of technology, Auto PN Generating system has been provided at some of the gates.
                                              This system provides for automatic generation and transmission of the PN by the SM to the Gatemen through
                                              an ANDROID TAB asking him/her to close the gate and Gateman provided with a similar TAB has to acknowledge.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              {/* Route and Emergency Registers */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                                  <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                                      <AlertTriangle className="w-5 h-5 mr-2" />
                                      Route & Emergency Registers
                                  </h4>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                          <h5 className="font-semibold text-emerald-200 mb-2">Route Cancellation Register</h5>
                                          <p className="text-sm text-gray-200">
                                              These registers are maintained by the on duty SM where he/she is required to furnish the reasons for such operation.
                                          </p>
                                      </div>
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                          <h5 className="font-semibold text-emerald-200 mb-2">Emergency Calling-on Cancellation Register</h5>
                                          <p className="text-sm text-gray-200">
                                              When the respective buttons are operated, it gets logged on the panel/block instruments in the form of veeder counters.
                                          </p>
                                      </div>
                                  </div>
                                  <p className="text-sm text-gray-200 mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                      <strong className="text-emerald-200">Note:</strong> These counter numbers form a part of handing over/taking over
                                      and should be mentioned in the station diary.
                                  </p>
                              </div>

                              {/* Control and Stable Load Registers */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                                  <h4 className="font-semibold text-green-300 mb-3 flex flex-col gap-2 items-center">
                                      <Settings className="w-5 h-5 mr-2" />
                                      Control & Operations Registers
                                  </h4>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h5 className="font-semibold text-green-200 mb-2 flex flex-col gap-2 items-center">
                                              <Monitor className="w-4 h-4 mr-2" />
                                              Control Order Register
                                          </h5>
                                          <p className="text-sm text-gray-200">
                                              Instructions/orders issued by the control office are recorded and same are informed while
                                              handing/taking over of duties by the SMs.
                                          </p>
                                      </div>
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h5 className="font-semibold text-emerald-200 mb-2 text-center flex flex-col gap-2 items-center">
                                              <Truck className="w-4 h-4 mr-2" />
                                              Stable Load and Clearance Register
                                          </h5>
                                          <p className="text-sm text-gray-200">
                                              Whenever trains are stabled at the station, the SM is required to mention the stock and particulars
                                              of the train stabled in this register. After securing the required number of vehicles, the shunting
                                              staff/guard/LP to mention the particulars of vehicles secured and put their signature and record &
                                              issues a PN to the SCOR.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              {/* Caution Order Registers */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                                  <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                                      <AlertCircle className="w-5 h-5 mr-2" />
                                      Caution Order Registers
                                  </h4>
                                  <div className="space-y-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h5 className="font-semibold text-orange-200 mb-2 flex flex-col gap-2 items-center">
                                              <FileText className="w-4 h-4 mr-2" />
                                              Caution Order Message Registers
                                          </h5>
                                          <p className="text-sm text-gray-200">
                                              Caution order messages received directly from the concerned department inspectors or from SMs,
                                              are entered or pasted in this register along with PNs exchanged.
                                          </p>
                                      </div>
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h5 className="font-semibold text-orange-200 mb-2 flex flex-col gap-2 items-center text-center">
                                              <Calendar className="w-4 h-4 mr-2" />
                                              Caution Order Registers (Up and Down)
                                          </h5>
                                          <p className="text-sm text-gray-200 mb-3">
                                              Every Monday at 00.00 hrs., SM on duty has to bring forward all the existing caution orders in geographical order.
                                          </p>
                                          <ul className="space-y-2 text-sm text-gray-200 pl-1">
                                              <li className="flex items-center gap-3">
                                                  <span className="flex-none w-3 h-3 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow"></span>
                                                  <span className="flex-1">New caution orders issued in that week are entered with serial numbers</span>
                                              </li>
                                              <li className="flex items-center gap-3">
                                                  <span className="flex-none w-3 h-3 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow"></span>
                                                  <span className="flex-1">All caution orders from message register should be reflected here</span>
                                              </li>
                                              <li className="flex items-center gap-3">
                                                  <span className="flex-none w-3 h-3 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow"></span>
                                                  <span className="flex-1">Should be tallied/cross checked during inspection</span>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>

                              {/* Station Diary */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                                  <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                                      <Clipboard className="w-5 h-5 mr-2" />
                                      Station Diary
                                  </h4>
                                  <p className="text-sm text-gray-200 mb-4">
                                      A shift wise record maintained at all the stations, where outgoing on duty SM appraises the incoming reliever SM
                                      while handing/taking over of the duties, the position of safety aspects, failures/unusuals occurred and
                                      orders/instructions/messages received during his shift is called Station Diary.
                                  </p>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h6 className="font-semibold text-blue-200 mb-2">Recorded Information</h6>
                                          <ul className="space-y-2 text-sm text-gray-200">
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full shadow-md"></span>
                                                  <span>Visit of various officers/inspectors</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full shadow-md"></span>
                                                  <span>Cleanliness and safety aspects inspected</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full shadow-md"></span>
                                                  <span>Motor trolley permit details</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full shadow-md"></span>
                                                  <span>Track fit certificates</span>
                                              </li>
                                              <li className="flex items-center gap-2">
                                                  <span className="w-2 h-2 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full shadow-md"></span>
                                                  <span>Vehicle/loco fit certificates after accidents</span>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 border border-white/20">
                                          <h6 className="font-semibold text-blue-200 mb-2">Documentation</h6>
                                          <p className="text-sm text-gray-200">
                                              The motor trolley permit given, surrendered at the next station after clearing the block section
                                              to be pasted in the station diary. The track fit certificate or fit certificate of the vehicle/loco
                                              issued by the concerned officials after the accident taken place to be pasted in the diary.
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              {/* Additional Registers */}
                              <div className="space-y-4">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h5 className="font-semibold text-purple-300 mb-2 flex flex-col gap-2 items-center text-center">
                                          <FileCheck className="w-4 h-4 mr-2" />
                                          Private Number Sheets Issue Register
                                      </h5>
                                      <p className="text-sm text-gray-200">
                                          The details of PN sheets issued by the Traffic Inspector are entered along with the order in which
                                          they are to be used is entered in the register duly signed by the TI.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h5 className="font-semibold text-purple-300 mb-2 flex flex-col gap-2 items-center text-center">
                                          <Power className="w-4 h-4 mr-2" />
                                          Power Block Register
                                      </h5>
                                      <p className="text-sm text-gray-200">
                                          In electrified stations, whenever power blocks are availed, the procedure and details are logged
                                          in this register in order to ensure safety and planning of train operations.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h5 className="font-semibold text-purple-300 mb-2 flex flex-col gap-2 items-center text-center">
                                          <Car className="w-4 h-4 mr-2" />
                                          Pilot Movement Register
                                      </h5>
                                      <p className="text-sm text-gray-200">
                                          In station with pilot operations in sidings, this register is mandated as per the system of working in force in the siding.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-4 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h5 className="font-semibold text-purple-300 mb-2 flex flex-col gap-2 items-center text-center">
                                          <FileX className="w-4 h-4 mr-2" />
                                          Sick Wagon Register
                                      </h5>
                                      <p className="text-sm text-gray-200">
                                          In case, a rolling stock is marked sick and detached at the station, SM has to mention the particulars
                                          of the stock and date and time of detachment/dispatch in this register.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Staff Registers Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              Staff Registers
                          </h2>
                          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">  
                                      <h4 className="font-semibold text-yellow-300 mb-3 flex flex-col gap-2 items-center">
                                          <Clipboard className="w-5 h-5 mr-2" />
                                          Staff Attendance Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Staff performing the duty has to sign this register duly mentioning the timing of their shifts.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                                          <Shield className="w-5 h-5 mr-2" />
                                          SWR Declaration/Assurance Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          As per SR 5.06.12 & 13, staff are required to declare that they have understood the station working
                                          and append their signatures with date and time in this register. Without assurance, staff is not allowed to carry out duties.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-yellow-300 mb-3 flex flex-col gap-2 items-center text-center">
                                          <FileText className="w-5 h-5 mr-2" />
                                          Assurance Register for Amendments to Rule Books
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          As per SR 2.03.3, staff are required to acknowledge the knowledge of the amendments issued to various
                                          manuals in this register.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                                          <AlertTriangle className="w-5 h-5 mr-2" />
                                          Fog Signal Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          In this register, the following are recorded - the receipt of detonators, names of fog signal men and their assurance
                                          of knowledge regarding protection and whether the station is in continuous fog prevailing area is available at the station.
                                          The format for the register is provided in the Appendix VII of G&SR.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-yellow-300 mb-3 flex flex-col gap-2 items-center">
                                          <FileCheck className="w-5 h-5 mr-2" />
                                          Staff Bio-Data Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          It has particulars of the staff at the station including name, designation, date of appointment, date of joining the station,
                                          date of attending refresher/PME with due dates and gradation.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                                          <CheckCircle className="w-5 h-5 mr-2" />
                                          Acknowledgement Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          This is for Fortnight Gazettes, Circulars, Safety Bulletins, Vigils, Fly leafs. Contents of these literature received
                                          from the safety department are explained to all the staff by the in-charge of the station and their acknowledgement obtained.
                                      </p>
                                  </div>
                              </div>

                              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                  <h4 className="font-semibold text-yellow-300 mb-3 flex flex-col gap-2 items-center">
                                      <BookOpen className="w-5 h-5 mr-2" />
                                      General Standing Order Book
                                  </h4>
                                  <p className="text-sm text-gray-200">
                                      Any common instructions required to be given by the in-charge of the station to the staff is advised through this register
                                      and acknowledgement obtained.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* S&T Registers Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                                  <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              S&T Registers
                          </h2>
                          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">

                              <div className="space-y-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-red-300 mb-3 flex flex-col gap-2 items-center">
                                          <FileText className="w-5 h-5 mr-2" />
                                          S&T Failure Message Book
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          In case an S&T gear becomes defective, the Station Master shall issue a message and obtain the acknowledgement
                                          by the S&T staff in this register. On completion of attention, a joint restoration message is also issued and recorded.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                                          <AlertCircle className="w-5 h-5 mr-2" />
                                          S&T Failure Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          In this register, SM has to enter the particulars of S&T failure along with rectification time, gear at fault and detentions
                                          caused to the trains. The S&T staff shall mention the cause and how the failure was rectified duly affixing their signature.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-red-300 mb-3 flex flex-col gap-2 items-center text-center">
                                          <Power className="w-5 h-5 mr-2" />
                                          Disconnection and Reconnection Register
                                      </h4>
                                      <p className="text-sm text-gray-200 mb-4">
                                          Whenever S&T staff undertakes Group &ldquo;C&rdquo; works or failure restoration; they need to do the works only after disconnecting the gear.
                                          For this purpose they issue disconnection notice to the SM duly mentioning the gear to be disconnected along with the signals
                                          that will not be available for operations.
                                      </p>
                                      <p className="text-sm text-gray-200">
                                          On rectification or attention followed by correspondence test, S&T staff shall convey the completion of the work to the SM
                                          on duty by issue of Reconnection notice. SM shall resume normal working after receiving the reconnection notice and test
                                          the reconnected gear for proper functioning. SM has to paste these notices and write particulars of date and time of issue
                                          and details of trains detained in this register.
                                      </p>
                                  </div>

                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                          <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                                              <Wrench className="w-5 h-5 mr-2" />
                                              Crank Handle Register
                                          </h4>
                                          <p className="text-sm text-gray-200">
                                              In case of Point failure or for testing, when crank handle is removed from HKT, an entry is made in this register
                                              along with the date and time and reason for extracting.
                                          </p>
                                      </div>

                                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                          <h4 className="font-semibold text-red-300 mb-3 flex flex-col gap-2 items-center">
                                              <Lock className="w-5 h-5 mr-2" />
                                              Relay Room Key Register
                                          </h4>
                                          <p className="text-sm text-gray-200">
                                              Relay room housing the relays of interlocking between the panel and signals are available at the station with the provision
                                              of double locking. One key shall be available with S&T staff and another with SM on duty. When the authorized S&T staff
                                              requires the Relay room key provided with SM, they have to furnish details along with signature in this register.
                                          </p>
                                      </div>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-pink-300 mb-3 flex flex-col gap-2 items-center">
                                          <Key className="w-5 h-5 mr-2" />
                                          Block Instrument Keys Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Whenever the S&T staff requires the Block instrument key, they mention the date, and reason for the same duly affixing
                                          their signatures. After giving the key available with on duty SM, he/she also affix signature.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Guard Registers Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                                  <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              Guard Registers
                          </h2>
                          <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">

                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                                  The following registers are to be maintained where Guards are Headquartered/ Terminating/Originating stations:
                              </p>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-400 text-white text-2xl font-bold shadow-lg mb-1">1</span>
                                          Guards Equipment Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Register for maintaining records of all equipment provided to guards for their duties.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white text-2xl font-bold shadow-lg mb-1">2</span>
                                          Guards Call Book
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Register for recording calls and communications related to guard duties.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-400 text-white text-2xl font-bold shadow-lg mb-1">3</span>
                                          Guards Signing On / Signing Off Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Register for recording when guards start and end their duty shifts.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-300 text-white text-2xl font-bold shadow-lg mb-1">4</span>
                                          Guards (Standing Order Book)
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Book containing standing orders and instructions for guards.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-indigo-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-400 text-white text-2xl font-bold shadow-lg mb-1">5</span>
                                          Breathalyser Test Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Register for recording breathalyser test results of guards before duty.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-blue-300 mb-3 flex flex-col gap-2 items-center">
                                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white text-2xl font-bold shadow-lg mb-1">6</span>
                                          LTM Register
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Register for maintaining records related to LTM (Load Testing Machine) operations.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Level Crossing Gate Books Section */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                          <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                              </span>
                              Level Crossing Gate Books
                          </h2>
                          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">

                              <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                                  The following books and notices are maintained at level crossing gate provided with gate lodge.
                              </p>

                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-400 to-blue-500 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">1</span>
                                          </span>
                                          Equipment List Book
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          A book showing the list of equipment available at the level crossing gate.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-teal-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-teal-400 via-blue-400 to-sky-500 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">2</span>
                                          </span>
                                          Duty Rosters
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Rosters showing the duty schedule of gatemen and staff.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 via-blue-400 to-indigo-500 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">3</span>
                                          </span>
                                          Duty List with Regional Language Translation
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          A copy of duty list with translation in regional language for better understanding.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-teal-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-teal-400 via-purple-400 to-blue-500 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">4</span>
                                          </span>
                                          Level Crossing Working Instructions
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Level crossing working instructions in regional language, which should appear as separate appendix to SWR.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-500 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">5</span>
                                          </span>
                                          Public Complaint Book
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Book for recording complaints and feedback from the public regarding level crossing operations.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-teal-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 via-blue-500 to-emerald-400 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">6</span>
                                          </span>
                                          Vision Test and Competency Certificate
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Vision test results and competency certificates of the gateman for ensuring safety.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-emerald-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-indigo-400 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">7</span>
                                          </span>
                                          Traffic Census Results
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Results of last Traffic Census conducted at the level crossing gate.
                                      </p>
                                  </div>

                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                                      <h4 className="font-semibold text-teal-300 mb-3 flex flex-col gap-2 items-center">
                                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-teal-300 to-emerald-400 shadow-lg mb-1 border-2 border-white/40 animate-fade-in">
                                              <span className="text-xl lg:text-2xl font-bold text-white drop-shadow-md">8</span>
                                          </span>
                                          Inspection Books
                                      </h4>
                                      <p className="text-sm text-gray-200">
                                          Books for recording inspections and maintenance activities at the level crossing gate.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Operating Forms Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                      <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Operating Forms
              </h2>
              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-violet-400/30">

                  <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                          <h4 className="font-semibold text-violet-300 mb-3 flex flex-col gap-2 items-center">
                              <Clipboard className="w-5 h-5 mr-2" />
                              Purpose of Operating Forms
                          </h4>
                          <p className="text-sm text-gray-200 mb-4">
                              As a part of executing train operations in the station, SM in his duties is required to
                              issue written authorities and instructions to the loco pilot, guards and other staff.
                          </p>
                          <p className="text-sm text-gray-200">
                              A standard format of such common instructions / authorities is provided in printed
                              books with numbered folios. These operating forms are usually prefixed with letter
                              &ldquo;T&rdquo; and issued to staff after filling the specific details duly signed by the on duty SM.
                          </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                              <h4 className="font-semibold text-purple-300 mb-3 flex flex-col gap-2 items-center">
                                  <CheckCircle className="w-5 h-5 mr-2" />
                                  Normal Working Forms
                              </h4>
                              <p className="text-sm text-gray-200">
                                  Some forms are issued in the normal working of trains like caution orders and
                                  shunting instructions.
                              </p>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                              <h4 className="font-semibold text-violet-300 mb-3 flex flex-col gap-2 items-center">
                                  <AlertTriangle className="w-5 h-5 mr-2" />
                                  Abnormal Working Forms
                              </h4>
                              <p className="text-sm text-gray-200">
                                  Some forms are issued during the abnormal working like failure of block instruments - PLCT,
                                  failure of signals-T.369(3b), temporary single line working on double line sections - T/D.602, etc.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Non-Interlocked Working Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                      <Settings className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Non-Interlocked Working
              </h2>
              <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-rose-400/30">

                  <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                          <h4 className="font-semibold text-rose-300 mb-3 flex flex-col gap-2 items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Definition & Process
                          </h4>
                          <p className="text-sm text-gray-200 mb-4">
                              Any modification of station yard resulting in alteration to working of signalling and
                              interlocking, has to be executed through a process of non-interlocked working as per
                              Appendix III of G&SR.
                          </p>
                          <p className="text-sm text-gray-200">
                              Before NI working is commenced, the in-charge for the NI
                              working has to ensure that all the staff involved in NI working have read the
                              Temporary working instructions and acknowledged in the assurance register.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Temporary Working Instructions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                      <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Temporary Working Instructions (TWI)
              </h2>
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-amber-400/30">

                  <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                          <h4 className="font-semibold text-amber-300 mb-3 flex flex-col gap-2 items-center">
                              <FileText className="w-5 h-5 mr-2" />
                              Purpose & Preparation
                          </h4>
                          <p className="text-sm text-gray-200 mb-4">
                              When NI is undertaken, interlocking provisions stipulated in SWR are no longer
                              available. So the SWR in its existing form cannot be used and a set of Temporary
                              Working Instructions has to be issued.
                          </p>
                          <p className="text-sm text-gray-200">
                              TWI is prepared in conjunction with G&SR
                              and Block Working Manual covering all aspects of train operations during the period
                              in which it will be in force.
                          </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                          <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                              <Users className="w-5 h-5 mr-2" />
                              Staff Control & Duties
                          </h4>
                          <p className="text-sm text-gray-200 mb-4">
                              TWI should list out number of Goomties and portions of
                              yard that each would control. It should also specify the duties of each staff involved
                              for reception/departure of a train on/from different lines.
                          </p>
                          <p className="text-sm text-gray-200">
                              TWI should list out different
                              conditions required to be fulfilled for reception/dispatch of train, duly assigning
                              specific responsibility to individual staff.
                          </p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                          <h4 className="font-semibold text-amber-300 mb-3 flex flex-col gap-2 items-center">
                              <List className="w-5 h-5 mr-2" />
                              Required Procedures
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              <div className="space-y-3">
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">1</span>
                                      <p className="text-sm text-gray-200">Procedure for granting/obtaining Line Clear</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">2</span>
                                      <p className="text-sm text-gray-200">Procedure for ensuring clearance of nominated line</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">3</span>
                                      <p className="text-sm text-gray-200">Procedure for closure of level crossing gates, if any</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">4</span>
                                      <p className="text-sm text-gray-200">Procedure for setting of route</p>
                                  </div>
                              </div>
                              <div className="space-y-3">
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">5</span>
                                      <p className="text-sm text-gray-200">Description of series of points involved, from trailing end</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">6</span>
                                      <p className="text-sm text-gray-200">Description of the position of each point (Normal/Reverse) to be set</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">7</span>
                                      <p className="text-sm text-gray-200">Conditions to be fulfilled before taking off signals</p>
                                  </div>
                                  <div className="flex items-start">
                                      <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-white mr-3 mt-1 shrink-0 shadow-lg">8</span>
                                      <p className="text-sm text-gray-200">Procedure for taking off signals</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div><style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
    `}</style></>
  
  )
}

export default OMPage15