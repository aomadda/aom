'use client'
import React from 'react'
import { 
  FileText,
  Building,
  TrendingUp,
  DollarSign,
  Target,
  Route,
  Calendar,
  CheckCircle,
  BookOpen,
  Users,
  Globe,
  Database, 
  Award,
  ArrowDown
} from 'lucide-react'

const OMPage112 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Detailed Project Report (DPR)
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide for preparing Detailed Project Reports for Indian Railways projects costing above Rs.5 Crore, ensuring proper appraisal and sanction procedures.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* DPR Overview Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                DPR Overview & Requirements
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Detailed Project Report is required to be prepared for all works costing above Rs.5 Crore. DPRs are sent to Railway Board by Zonal/PSUs for appraisal and obtaining sanction of the competent authority as per the prevailing delegation of powers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <Target className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-blue-300 text-sm font-semibold">Cost Threshold</span>
                      </div>
                      <p className="text-white text-xs">Above Rs.5 Crore</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <Building className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-cyan-300 text-sm font-semibold">Purpose</span>
                      </div>
                      <p className="text-white text-xs">Appraisal & Sanction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DPR Submission Process Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                DPR Submission Process
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                {/* Divisional Level Submission */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <Building className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-300">Divisional Level Submission</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      DPRs are submitted by DRM to Gati Shakti Directorate of Railway Board with Finance concurrence of Divisional Gati Shakti unit through PCOM/NPG and approval of GM.
                    </p>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-2">
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <Users className="w-3 h-3" /> DRM
                      </span>
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <Globe className="w-3 h-3" /> Gati Shakti Directorate
                      </span>
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <DollarSign className="w-3 h-3" /> Finance Concurrence
                      </span>
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <CheckCircle className="w-3 h-3" /> GM Approval
                      </span>
                    </div>
                  </div>
                </div>

                {/* Inter Divisional/Zonal Submission */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-emerald-500/20 p-2 rounded-full mr-3">
                      <Route className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-300">Inter Divisional/Inter Zonal Railways</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      DPRs of inter divisional/inter Zonal Railways are submitted to Gati Shakti Directorate of Railway Board by CAO/C with the concurrence of FA&CAO/C through PCOM and approval of GM.
                    </p>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-2">
                      <span className="text-xs text-emerald-300 bg-emerald-500/10 p-2 rounded flex items-center gap-3">
                        <Users className="w-3 h-3" /> CAO/C
                      </span>
                      <span className="text-xs text-emerald-300 bg-emerald-500/10 p-2 rounded flex items-center gap-3">
                        <DollarSign className="w-3 h-3" /> FA&CAO/C Concurrence
                      </span>
                      <span className="text-xs text-emerald-300 bg-emerald-500/10 p-2 rounded flex items-center gap-3">
                        <CheckCircle className="w-3 h-3" /> GM Approval
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission 3000 MT Plan Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Target className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Mission 3000 MT Plan
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Under Mission 3000 MT plan, many such capacity enhancement works are required to be sanctioned in near future for which DPRs are being prepared and sent by zonal railways to Railway Board.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-purple-300 text-sm font-semibold">Capacity Enhancement</span>
                      </div>
                      <p className="text-white text-xs">Works required for Mission 3000 MT plan</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-pink-400 mr-2" />
                        <span className="text-pink-300 text-sm font-semibold">Timeline</span>
                      </div>
                      <p className="text-white text-xs">Near future sanction requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IRPSM System Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                IRPSM - Indian Railway Projects Sanction and Management System
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    On acceptance of the DPR by the appropriate authority, the works are duly sanctioned and included in the IRPSM – Indian Railway Projects Sanction and Management system.
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-green-300 text-sm font-semibold">Process Flow:</span>
                    </div>
                    <div className="flex flex-col items-center text-white text-sm">
                      <span>DPR Preparation</span>
                      <ArrowDown className="w-4 h-4 my-2 text-orange-400" />
                      <span>Authority Acceptance</span>
                      <ArrowDown className="w-4 h-4 my-2 text-orange-400" />
                      <span>Work Sanction</span>
                      <ArrowDown className="w-4 h-4 my-2 text-orange-400" />
                      <span>IRPSM Inclusion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Components Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                DPR Key Components Summary
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center">
                    <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-3">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <h5 className="font-semibold text-blue-300 mb-2">Documentation</h5>
                    <p className="text-sm text-gray-200">Comprehensive project details, cost estimates, and technical specifications</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center">
                    <div className="bg-green-500/20 p-3 rounded-full inline-block mb-3">
                      <Route className="w-6 h-6 text-green-400" />
                    </div>
                    <h5 className="font-semibold text-green-300 mb-2">Submission Process</h5>
                    <p className="text-sm text-gray-200">Proper channels through PCOM/NPG with GM approval</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center">
                    <div className="bg-purple-500/20 p-3 rounded-full inline-block mb-3">
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <h5 className="font-semibold text-purple-300 mb-2">System Integration</h5>
                    <p className="text-sm text-gray-200">Inclusion in IRPSM for project management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Important Notes & Guidelines
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center mb-3 gap-3 flex-col lg:flex-row text-center justify-center">
                      <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                        <DollarSign className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-yellow-300">Cost Threshold</h3>
                    </div>
                    <p className="text-white text-xs leading-relaxed">
                      DPRs are mandatory for all works costing above Rs.5 Crore to ensure proper financial scrutiny and approval processes.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center mb-3 gap-3 flex-col lg:flex-row text-center justify-center">
                      <div className="bg-orange-500/20 p-2 rounded-full mr-3">
                        <CheckCircle className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-orange-300">Approval Chain</h3>
                    </div>
                    <p className="text-white text-xs leading-relaxed">
                      All DPRs must go through proper channels including PCOM/NPG and receive GM approval before submission to Railway Board.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center mb-3 gap-3 flex-col lg:flex-row text-center justify-center">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-blue-300">Gati Shakti Integration</h3>
                    </div>
                    <p className="text-white text-xs leading-relaxed">
                      DPRs are submitted to Gati Shakti Directorate ensuring alignment with national infrastructure development goals.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center mb-3 gap-3 flex-col lg:flex-row text-center justify-center">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3">
                        <Database className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-green-300">IRPSM System</h3>
                    </div>
                    <p className="text-white text-xs leading-relaxed">
                      Approved projects are integrated into IRPSM for centralized project management and monitoring.
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

export default OMPage112