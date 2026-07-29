'use client'
import React from 'react'
import { 
  Upload,
  FileText,
  Building,
  DollarSign,
  Calculator,
  MapPin,
  Route,
  Wrench,
  Package,
  CheckCircle,
  Users,
  Globe,
  Database,
  Award,
  List,
  Umbrella,
  BookOpen,
  AlertCircle,
  PlayCircle,
  Clock,
  ArrowDown,
} from 'lucide-react'

const OMPage113 = () => {
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
                <Upload className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              IRPSM Proposal Management System
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide for uploading and managing proposals in IRPSM, including PWP, LSWP, Umbrella Works, and Out of Turn works for Indian Railways.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* IRPSM Proposal Upload Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Upload className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                IRPSM Proposal Upload Process
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Apart from the major works which are dealt through survey and DPRs, the works required by the concerned branches of the division, which are to be undertaken in the next year with order of priority are uploaded with brief justification in IRPSM.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-blue-300 text-sm font-semibold">Priority Order</span>
                      </div>
                      <p className="text-white text-xs">Works prioritized for next year implementation</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-cyan-300 text-sm font-semibold">Justification</span>
                      </div>
                      <p className="text-white text-xs">Brief justification required for each proposal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract Estimates Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Calculator className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Abstract Estimates & Cost Calculation
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                
                {/* Abstract Estimates Process */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <Calculator className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-300">Abstract Estimates Process</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      The abstract estimates for these projects/works are sought from the relevant branches as per the requirement with a rough sketch if necessary.
                    </p>
                    <div className="flex flex-col flex-wrap gap-2">
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <FileText className="w-3 h-3" /> Abstract Estimates
                      </span>
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <MapPin className="w-3 h-3" /> Site Survey
                      </span>
                      <span className="text-xs text-green-300 bg-green-500/10 p-2 rounded flex items-center gap-3">
                        <Wrench className="w-3 h-3" /> Rough Sketch
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cost Calculation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-emerald-500/20 p-2 rounded-full mr-3">
                      <DollarSign className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-300">Total Cost Calculation</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      After getting the abstract estimates from all the concerned branches after site survey, by adding these abstract costs the total cost of the work is arrived.
                    </p>
                    <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-400/20">
                      <p className="text-yellow-200 text-sm">
                        <strong>Procurement Cost:</strong> If the work has a portion of procurement or completely related to procurement, then a budgetary quotation from the GeM website will be the basis for arriving at the cost of the work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal Submission Process Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Route className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Proposal Submission & Processing Flow
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                
                {/* Divisional Level */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                      <Building className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-300">Divisional Level Processing</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      List of such projects/works, identified by the concerned branch officer with the order of priority is uploaded in the IRPSM with abstract estimates, justification and rough sketch if required with the administrative approval of DRM.
                    </p>
                    <div className="flex flex-col flex-wrap gap-2">
                      <span className="text-xs text-purple-300 bg-purple-500/10 p-2 rounded flex items-center gap-3">
                        <List className="w-3 h-3" /> Priority List
                      </span>
                      <span className="text-xs text-purple-300 bg-purple-500/10 p-2 rounded flex items-center gap-3">
                        <CheckCircle className="w-3 h-3" /> DRM Approval
                      </span>
                      <span className="text-xs text-purple-300 bg-purple-500/10 p-2 rounded flex items-center gap-1">
                        <Database className="w-3 h-3" /> IRPSM Upload
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engineering Branch Forwarding */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-6">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-pink-500/20 p-2 rounded-full mr-3">
                      <Route className="w-5 h-5 text-pink-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-pink-300">Engineering Branch Forwarding</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Subsequently the proposals are forwarded by divisional Engineering branch (Sr.DEN/Co-ord) with order of priority to headquarters engineering branch (CE/P&D) in IRPSM which in turn is forwarded to the concerned Plan-head Nodal Officer at the Zonal Headquarters for each plan-head for shortlisting the proposal.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center text-white text-sm">
                      <span>Divisional Engineering</span>
                      <ArrowDown className="w-4 h-4 my-2 text-pink-400" />
                      <span>Headquarters Engineering</span>
                      <ArrowDown className="w-4 h-4 my-2 text-pink-400" />
                      <span>Zonal Nodal Officer</span>
                    </div>
                  </div>
                </div>

                {/* Zonal Processing */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="flex items-center mb-4 gap-3 flex-col lg:flex-row text-center justify-center">
                    <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
                      <Globe className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-300">Zonal Headquarters Processing</h3>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <p className="text-white text-sm leading-relaxed mb-3">
                      The Nodal Officers at The Zonal Headquarters after consolidating all the proposals received from all the divisions scrutinized and with an overall order of zonal priority the administrative approval of GM is obtained.
                    </p>
                    <div className="flex flex-col flex-wrap gap-2">
                      <span className="text-xs text-indigo-300 bg-indigo-500/10 p-2 rounded flex items-center gap-3">
                        <Users className="w-3 h-3" /> Nodal Officers
                      </span>
                      <span className="text-xs text-indigo-300 bg-indigo-500/10 p-2 rounded flex items-center gap-3"> 
                        <List className="w-3 h-3" /> Zonal Priority
                      </span>
                      <span className="text-xs text-indigo-300 bg-indigo-500/10 p-2 rounded flex items-center gap-3">
                        <CheckCircle className="w-3 h-3" /> GM Approval
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PWP Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                PWP – Preliminary Works Programme
              </h2>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    These are works of higher financial implications which can only be sanctioned by Railway Board. Such work proposals are shortlisted by zones and prioritized and sent to Railway Board through IRPSM.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-orange-300 text-sm font-semibold">Financial Impact</span>
                      </div>
                      <p className="text-white text-xs">Higher financial implications requiring Railway Board sanction</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-red-300 text-sm font-semibold">PINK BOOK</span>
                      </div>
                      <p className="text-white text-xs">Presented to Parliament along with Budget Paper</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-4">
                    <p className="text-white text-sm">
                      <strong>PINK BOOK Contents:</strong> The approved projects/works are published in the PINK BOOK along with demand for grant under different heads for different railways.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LSWP Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Package className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                LSWP – Lump Sum Works Programme
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    Apart from PWP, sometimes a lump sum provision is made in the PINK BOOK Zone-wise plan-head-wise for the Zonal Railways to process the projects/works under the respective plan-heads for sanction for different projects/works as per the SOP.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-emerald-300 text-sm font-semibold">Lump Sum Provision</span>
                      </div>
                      <p className="text-white text-xs">Zone-wise plan-head-wise allocation in PINK BOOK</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-teal-300 text-sm font-semibold">SOP Compliance</span>
                      </div>
                      <p className="text-white text-xs">Processing according to Standard Operating Procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Umbrella Works Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Umbrella className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Umbrella Works & Projects
              </h2>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    To give additional flexibility to sanction works throughout the year, and to channelize railway investments in identified focus areas by the Zonal Railway, lump sum fund PUs/ZRs plan-head-wise the Umbrella Funds are allotted by Railway Board and they are UMBRELLA Works/Projects.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-300 text-sm font-semibold">Year-Round Flexibility</span>
                      </div>
                      <p className="text-white text-xs">Sanction works throughout the year</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-orange-300 text-sm font-semibold">Focus Areas</span>
                      </div>
                      <p className="text-white text-xs">Channelize investments in identified areas</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 mt-4">
                    <p className="text-white text-sm">
                      <strong>Processing:</strong> Based on this, the respective PUs/ZRs have to identify and process the proposals in IRPSM as per the policy changes and guidelines given by Railway Board with the required SOP changes where required are given from time to time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Out of Turn Works Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Out of Turn Works - OOT
              </h2>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    The projects/works that are not included in LSWP but required urgently by the railways are processed in IRPSM for sanction of the competent authority under the Out Of Turn (GM-OOT) projects/works as per the SOP for each plan-head.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-red-300 text-sm font-semibold">Urgent Requirements</span>
                      </div>
                      <p className="text-white text-xs">Not included in LSWP but urgently needed</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-pink-300 text-sm font-semibold">GM-OOT Authority</span>
                      </div>
                      <p className="text-white text-xs">Sanctioned under Out Of Turn procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution & Follow-up Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <PlayCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Execution & Follow-up Process
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-indigo-400/30">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white lg:text-base text-sm leading-relaxed mb-4">
                    All sanctioned works are followed up for their execution and completion within time through IRPSM for achieving the desired benefits.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <div className="bg-indigo-500/20 p-3 rounded-full inline-block mb-3">
                        <CheckCircle className="w-6 h-6 text-indigo-400" />
                      </div>
                      <h5 className="font-semibold text-indigo-300 mb-2">Sanction</h5>
                      <p className="text-sm text-gray-200">Works approved by competent authority</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <div className="bg-blue-500/20 p-3 rounded-full inline-block mb-3">
                        <PlayCircle className="w-6 h-6 text-blue-400" />
                      </div>
                      <h5 className="font-semibold text-blue-300 mb-2">Execution</h5>
                      <p className="text-sm text-gray-200">Implementation of approved works</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <div className="bg-green-500/20 p-3 rounded-full inline-block mb-3">
                        <Clock className="w-6 h-6 text-green-400" />
                      </div>
                      <h5 className="font-semibold text-green-300 mb-2">Completion</h5>
                      <p className="text-sm text-gray-200">Timely completion for desired benefits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center gap-3">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                IRPSM System Overview
              </h2>
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <h5 className="font-semibold text-emerald-300 mb-3">Regular Works</h5>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> PWP - Railway Board sanction</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> LSWP - Lump sum provision</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Umbrella Works - Flexible funding</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <h5 className="font-semibold text-teal-300 mb-3">Special Cases</h5>
                    <ul className="text-sm text-gray-200 space-y-2">
                      <li className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-orange-400" /> OOT Works - Urgent requirements</li>
                      <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-blue-400" /> Year-round flexibility</li>
                      <li className="flex items-center gap-3"><Database className="w-4 h-4 text-purple-400" /> IRPSM integration</li>
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

export default OMPage113