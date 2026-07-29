'use client'
import React from 'react'
import { 
  Building,
  Package,
  FileText,
  Calendar,
  CheckCircle,
  MapPin,
  Settings,
  Award,
  Target,
  BookOpen,
} from 'lucide-react'

const OMPage115 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-full">
                <Package className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Private Freight Handling Terminals
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to Private Freight Handling Terminals on Private land and Railway land, including Private Sidings, PFT, and GCT policies.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Terminal Types Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Building className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Types of Private Freight Handling Terminals
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    There are 3 types of Private Freight handling terminals on Private land / fully or partially on railway land.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-green-600/40 via-green-700/20 to-emerald-700/30 rounded-xl p-5 border border-green-300/20 text-center hover:scale-[1.025] shadow-lg hover:shadow-green-400/20 transition-all duration-300 relative overflow-hidden">
                      <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 text-2xl font-extrabold rounded-full bg-gradient-to-br from-white/70 to-green-500/30 text-green-700 shadow-inner border-2 border-green-400">
                          1
                        </span>
                      </div>
                      <h5 className="font-semibold text-green-200 text-lg mb-2 drop-shadow">Private Sidings</h5>
                      <p className="text-white/90 text-sm font-light">Traditional private freight terminals</p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-600/40 via-teal-700/20 to-cyan-700/20 rounded-xl p-5 border border-teal-300/20 text-center hover:scale-[1.025] shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 relative overflow-hidden">
                      <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 text-2xl font-extrabold rounded-full bg-gradient-to-br from-white/70 to-teal-500/30 text-teal-700 shadow-inner border-2 border-teal-400">
                          2
                        </span>
                      </div>
                      <h5 className="font-semibold text-teal-200 text-lg mb-2 drop-shadow">Private Freight Terminals (PFT)</h5>
                      <p className="text-white/90 text-sm font-light">Modern freight terminal facilities</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-700/40 via-indigo-700/15 to-blue-500/20 rounded-xl p-5 border border-blue-300/20 text-center hover:scale-[1.025] shadow-lg hover:shadow-blue-400/20 transition-all duration-300 relative overflow-hidden">
                      <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 text-2xl font-extrabold rounded-full bg-gradient-to-br from-white/70 to-blue-500/30 text-blue-700 shadow-inner border-2 border-blue-400">
                          3
                        </span>
                      </div>
                      <h5 className="font-semibold text-blue-200 text-lg mb-2 drop-shadow">Gati Shakti Multimodal Cargo Terminal (GCT)</h5>
                      <p className="text-white/90 text-sm font-light">Advanced multimodal cargo facilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Guidelines Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Policy Guidelines & Processing
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 flex-col lg:flex-row gap-4 text-center">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                      <Settings className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-300">Processing Guidelines</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      The proposals of Private Siding / Private Freight Terminal / Gati Shakti Multi-Modal Cargo Terminal proposals are processed as per the latest Railway Board policy guidelines issued from time to time and subsequent corrections/modifications made by Railway Board from time to time and their corresponding SOP changes wherever required are issued.
                    </p>
                    <div className="flex flex-col flex-wrap gap-2">
                      <span className="text-sm text-blue-300 bg-blue-500/10 p-2 rounded flex items-center gap-3">
                        <FileText className="w-3 h-3" /> Latest Policy Guidelines
                      </span>
                      <span className="text-sm text-blue-300 bg-blue-500/10 p-2 rounded flex items-center gap-3">
                        <Settings className="w-3 h-3" /> SOP Changes
                      </span>
                      <span className="text-sm text-blue-300 bg-blue-500/10 p-2 rounded flex items-center gap-3">
                        <Calendar className="w-3 h-3" /> Time to Time Updates
                      </span>
                    </div>
                  </div>
                </div>

                {/* GCT Policy Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center mb-4 flex-col lg:flex-row gap-4 text-center">
                    <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
                      <Target className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-300">New GCT Policy Implementation</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      All the new proposals for freight terminals after 15.12.2021 are covered under new GCT Policy. The existing Private Sidings / Private Freight Terminals can opt duly following the procedures laid down for migration to Gati Shakti Multi-Modal Cargo Terminal.
                    </p>
                    <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-400/20">
                      <p className="text-yellow-200 text-sm">
                        <strong>Cut-off Date:</strong> 15.12.2021 - All new proposals after this date fall under GCT Policy
                      </p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-lg border border-green-400/20 mt-3">
                      <p className="text-green-200 text-sm">
                        <strong>Migration Option:</strong> Existing terminals can migrate to GCT following proper procedures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Circulars Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Important Policy Circulars
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <ol className="space-y-6 pl-0">
                  {/* Circular 1 */}
                  <li className="relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-0">
                    <div className="flex items-center gap-4 px-5 py-3">
                      <div className="shrink-0">
                        <span className="text-xl font-bold text-purple-100 bg-purple-600/80 rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-4 border-purple-400/40">
                          1
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-purple-200 text-left">
                        Private Sidings Policy Circular
                      </h3>
                    </div>
                    <div className="bg-white/5 rounded-b-lg px-5 py-3 border-t border-white/10">
                      <div className="flex items-center mb-1">
                        <span className="text-purple-300 text-sm font-semibold">Railway Board Letter</span>
                      </div>
                      <p className="text-white text-sm mb-1">No.99/TC(FM)/26/1/Pt.II dated 22.08.2016</p>
                      <div className="flex items-center text-xs text-purple-200">
                        <span className="mr-1">Date:</span>
                        <span>22.08.2016</span>
                      </div>
                    </div>
                  </li>

                  {/* Circular 2 */}
                  <li className="relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-0">
                    <div className="flex items-center gap-4 px-5 py-3">
                      <div className="shrink-0">
                        <span className="text-xl font-bold text-pink-100 bg-pink-600/80 rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-4 border-pink-400/40">
                          2
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-pink-200 text-left">
                        Master Circular on Private Freight Terminal (PFT)
                      </h3>
                    </div>
                    <div className="bg-white/5 rounded-b-lg px-5 py-3 border-t border-white/10">
                      <div className="flex items-center mb-1">
                        <span className="text-pink-300 text-sm font-semibold">Railway Board Letter</span>
                      </div>
                      <p className="text-white text-sm mb-1">No. 2018/TC/(FM)/14/04, dated 23.06.2020</p>
                      <div className="flex items-center text-xs text-pink-200">
                        <span className="mr-1">Date:</span>
                        <span>23.06.2020</span>
                      </div>
                    </div>
                  </li>

                  {/* Circular 3 */}
                  <li className="relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-0">
                    <div className="flex items-center gap-4 px-5 py-3">
                      <div className="shrink-0">
                        <span className="text-xl font-bold text-indigo-100 bg-indigo-600/80 rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-4 border-indigo-400/40">
                          3
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-indigo-200 text-left">
                        Master Circular on Gati Shakti Multi-Modal Cargo Terminal (GCT)
                      </h3>
                    </div>
                    <div className="bg-white/5 rounded-b-lg px-5 py-3 border-t border-white/10">
                      <div className="flex items-center mb-1">
                        <span className="text-indigo-300 text-sm font-semibold">Railway Board Letter</span>
                      </div>
                      <p className="text-white text-sm mb-1">No. 2021/TC(FM)/18/23 Rail Bhavan, New Delhi-110 001, Dated 06.12.2022</p>
                      <div className="flex items-center text-xs text-indigo-200">
                        <span className="mr-1">Date:</span>
                        <span>06.12.2022</span>
                      </div>
                    </div>
                  </li>

                  {/* Circular 4 */}
                  <li className="relative bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-0">
                    <div className="flex items-center gap-4 px-5 py-3">
                      <div className="shrink-0">
                        <span className="text-xl font-bold text-teal-100 bg-teal-600/80 rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-4 border-teal-400/40">
                          4
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-teal-200 text-left">
                        Joint Director/GS (Civil) – II / Railway Board
                      </h3>
                    </div>
                    <div className="bg-white/5 rounded-b-lg px-5 py-3 border-t border-white/10">
                      <div className="flex items-center mb-1">
                        <span className="text-teal-300 text-sm font-semibold">Railway Board Letter</span>
                      </div>
                      <p className="text-white text-sm mb-1">Lr. No.2021/W-I/Genl./Gati Shakti dated 28.10.2022</p>
                      <div className="flex items-center text-xs text-teal-200">
                        <span className="mr-1">Date:</span>
                        <span>28.10.2022</span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Terminal Management Overview
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-3">Terminal Types</h5>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Private Sidings</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Private Freight Terminals (PFT)</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Gati Shakti Multimodal Cargo Terminal (GCT)</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-3">Key Features</h5>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-blue-400" /> Private/Railway land</li>
                      <li className="flex items-center gap-3"><Calendar className="w-4 h-4 text-orange-400" /> Policy updates from time to time</li>
                      <li className="flex items-center gap-3"><Settings className="w-4 h-4 text-purple-400" /> SOP compliance</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-4">
                  <div className="flex items-center mb-2">
                    <span className="text-blue-300 font-semibold">Important Note</span>
                  </div>
                  <p className="text-white text-sm">
                    All new proposals after 15.12.2021 are covered under the new GCT Policy. Existing terminals can migrate to GCT following proper procedures and guidelines.
                  </p>
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

export default OMPage115