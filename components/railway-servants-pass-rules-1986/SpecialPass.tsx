"use client"
import React from 'react'

const SpecialPass = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="inline-block p-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-cyan-500 to-blue-600 p-3 rounded-full">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              SPECIAL PASS
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Special circumstances travel authorization for railway servants and family members
            </p>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 leading-relaxed lg:text-lg text-base">
              A special pass may be issued to Railway servants, family members
              or dependent relatives as the case may be, on various grounds
              including medical, sports, official duties, and other special
              circumstances.
            </p>
          </div>

          {/* Grounds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Medical Grounds */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center flex-col gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-red-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">1</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Medical Grounds</h4>
              </div>
              <p className="text-gray-200 text-sm">
                For medical treatment and health-related travel
              </p>
            </div>

            {/* Sports Account */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-green-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">2</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Sports Account</h4>
              </div>
              <p className="text-gray-200 text-sm">
                For participation in sports activities and competitions
              </p>
            </div>

            {/* RRB/Selection Board */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-blue-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">3</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  RRB/Selection Board
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For appearing before RRB/Selection Board while on leave or on
                duty
              </p>
            </div>

            {/* Courts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-purple-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">4</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Courts</h4>
              </div>
              <p className="text-gray-200 text-sm">For attending Courts</p>
            </div>

            {/* Disciplinary Enquiries */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-orange-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">5</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Disciplinary Enquiries
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For attending departmental disciplinary enquiries and for
                inspection of documents
              </p>
            </div>

            {/* Complainant's Enquiry */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-teal-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">6</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Complainant&apos;s Enquiry
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For attending complainant&apos;s enquiry
              </p>
            </div>

            {/* Appellate Authority */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-indigo-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">7</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Appellate Authority
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For personal hearing of the Appellate Authority
              </p>
            </div>

            {/* Railway Unions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-pink-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">8</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Railway Unions</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Office bearer and representative of recognised railway unions
                and of the Federation for whom grant of Pass is governed by the
                instructions issued by Railway Board from time to time
              </p>
            </div>

            {/* Staff Benefit Fund */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-yellow-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">9</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Staff Benefit Fund
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Members of Staff Benefit Fund Committee etc.
              </p>
            </div>

            {/* Special Class Railway Apprentices */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-cyan-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">10</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Special Class Railway Apprentices
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For Special Class Railway Apprentices
              </p>
            </div>

            {/* Other Apprentices */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-emerald-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">11</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Other Apprentices
                </h4>
              </div>
              <p className="text-gray-200 text-sm">For other apprentices</p>
            </div>

            {/* Scout and Guide */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-rose-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">12</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Scout and Guide</h4>
              </div>
              <p className="text-gray-200 text-sm">
                For Scout and Guide activities
              </p>
            </div>

            {/* St. John's Ambulance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-violet-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">13</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  St. John&apos;s Ambulance
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                For St. John&apos;s Ambulance Brigade
              </p>
            </div>

            {/* Settlement Dues */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">14</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Settlement Dues</h4>
              </div>
              <p className="text-gray-200 text-sm">
                To receive settlement dues
              </p>
            </div>

            {/* Motor Vehicle */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-lime-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">15</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Motor Vehicle</h4>
              </div>
              <p className="text-gray-200 text-sm">
                For motor vehicle related travel
              </p>
            </div>

            {/* First Appointment */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-sky-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">16</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  First Appointment
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                On First appointment to Railway Service
              </p>
            </div>

            {/* Retirement/Decease */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-slate-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">17</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Retirement/Decease
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                On retirement/decease - grant of settlement pass
              </p>
            </div>

            {/* Railway Safety */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-stone-500 to-stone-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-stone-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">18</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Railway Safety</h4>
              </div>
              <p className="text-gray-200 text-sm">
                For enquiries by Commissioners for Railway Safety
              </p>
            </div>

            {/* Quasi Railway Institutions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-neutral-500 to-neutral-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-neutral-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">19</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Quasi Railway Institutions
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                To staff of quasi Railway Institutions
              </p>
            </div>

            {/* Suspension */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-zinc-500 to-zinc-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-zinc-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">20</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Suspension</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Railway servants under suspension
              </p>
            </div>

            {/* Conferences */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-gray-400/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">21</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Conferences</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Attending conferences, congresses or meetings
              </p>
            </div>

            {/* Territorial Army */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-red-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">22</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Territorial Army
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Family passes to Territorial Army Personnel proceeding to camps
              </p>
            </div>

            {/* RRB Candidates */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-green-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">23</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">RRB Candidates</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Candidates summoned for test/interview by Railway Recruitment
                Boards and Railway Administrations
              </p>
            </div>

            {/* Children's Camps */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-blue-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">24</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Children&apos;s Camps
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Journeys in connection with children&apos;s camps
              </p>
            </div>

            {/* Cultural Activities */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-purple-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">25</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Cultural Activities
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Attending cultural activities etc.
              </p>
            </div>

            {/* Railway User's Committees */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-orange-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">26</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Railway User&apos;s Committees
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Passes to members of Railway User&apos;s Consultative
                Committees, National Railway User&apos;s Consultative Council
              </p>
            </div>

            {/* Reservists */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-teal-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">27</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Reservists</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Passes for families of reservists
              </p>
            </div>

            {/* Retired Railway Servants */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-indigo-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">28</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Retired Railway Servants
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Retired Railway servants for perusal of documents for
                preparation of his Defence in disciplinary case instituted
                against him
              </p>
            </div>

            {/* Medically Decategorised */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-pink-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">29</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Medically Decategorised
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Medically decategorised staff when called for adjudging their
                suitability for alternative appointment
              </p>
            </div>

            {/* Retired Railway Servant Assistance */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-yellow-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">30</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Retired Railway Servant Assistance
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                To retired Railway servant for assistance to defend a Railway
                servant involved in disciplinary proceedings, to attend any
                meeting of a commission of enquiry or of a Board, Conference,
                Committee, or departmental enquiry convened under proper
                authority or is required to perform any public duty in an
                honorary capacity
              </p>
            </div>

            {/* Casual Labour */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-cyan-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">31</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Casual Labour</h4>
              </div>
              <p className="text-gray-200 text-sm">
                To Casual Labour on recruitment/discharge
              </p>
            </div>

            {/* Railway Accidents */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-emerald-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">32</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Railway Accidents
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Complimentary passes to next of kin of the victims as well as to
                the surviving victims involved in Railway accidents
              </p>
            </div>

            {/* RPF Dogs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-rose-600 to-rose-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-rose-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">33</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">RPF Dogs</h4>
              </div>
              <p className="text-gray-200 text-sm">
                RPF Dogs with Handler/Inspectors
              </p>
            </div>

            {/* Bazar Passes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-violet-600 to-violet-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-violet-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">34</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Bazar Passes</h4>
              </div>
              <p className="text-gray-200 text-sm">Issue of Bazar Passes</p>
            </div>

            {/* Visiting Lecturer */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">35</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Visiting Lecturer
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Grant of I AC Complimentary Pass to the visiting Lecturer of a
                appropriate status
              </p>
            </div>

            {/* Zonal Unions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-lime-600 to-lime-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-lime-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">36</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Zonal Unions</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Whole time employees of the Zonal Recognised Unions and
                Federations
              </p>
            </div>

            {/* Railway Magistrates */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-sky-600 to-sky-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-sky-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">37</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Railway Magistrates
                </h4>
              </div>
              <p className="text-gray-200 text-sm">Railway Magistrates</p>
            </div>

            {/* Government Railway Police */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-slate-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">38</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Government Railway Police
                </h4>
              </div>
              <p className="text-gray-200 text-sm">Government Railway Police</p>
            </div>

            {/* Workers Education */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-stone-600 to-stone-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-stone-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">39</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Workers Education
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Participants in Workers Education Programmes Conducted by
                AIRF/NFIR in the Zonal Headquarters Station/Divl. Headquarters
                Station/Centralised Training Institutes
              </p>
            </div>

            {/* MR/MOS(R)/DMR */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-neutral-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">40</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">MR/MOS(R)/DMR</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Rail travel facilities to MR/MOS(R)/DMR
              </p>
            </div>

            {/* Non-Railwaymen */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-zinc-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">41</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Non-Railwaymen</h4>
              </div>
              <p className="text-gray-200 text-sm">Non-Railwaymen</p>
            </div>

            {/* Railway Claims Tribunal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-gray-500/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">42</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Railway Claims Tribunal
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Claimant before Railway Claims Tribunal
              </p>
            </div>

            {/* Railway Inquiry Officers */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-red-700 to-red-800 rounded-full flex items-center justify-center shadow-lg ring-2 ring-red-600/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">43</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">
                  Railway Inquiry Officers
                </h4>
              </div>
              <p className="text-gray-200 text-sm">
                Retired Railway Officers of Selection Grade and above who are
                empanelled as Railway Inquiry Officers in D&AR cases to
                undertake journey either for conduct of inquiry or for training
                or any other official purpose in this connection
              </p>
            </div>

            {/* Medical Staff */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg py-4 px-3 border border-white/20 hover:shadow-xl hover:bg-white/15 transition-all duration-300 group">
              <div className="flex items-center mb-4 flex-col gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-700 to-green-800 rounded-full flex items-center justify-center shadow-lg ring-2 ring-green-600/50 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold lg:text-lg text-base">44</span>
                </div>
                <h4 className="font-semibold text-white lg:text-lg text-base">Medical Staff</h4>
              </div>
              <p className="text-gray-200 text-sm">
                Doctors/para medical staff invited in connection with blood
                donation/eye testing camps being organised on the Railways
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="space-y-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-10 h-10 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Important Notes
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">•</span>
                  <p className="lg:text-base text-sm">
                    Special passes are issued based on specific circumstances
                    and requirements
                  </p>
                </div>
                <div className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">•</span>
                  <p className="lg:text-base text-sm">
                    Each ground has specific eligibility criteria and
                    documentation requirements
                  </p>
                </div>
                <div className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">•</span>
                  <p className="lg:text-base text-sm">
                    Passes must be properly authorized and signed by competent
                    authority
                  </p>
                </div>
                <div className="flex items-start group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <span className="text-cyan-400 mr-3 mt-1 text-lg group-hover/item:scale-110 transition-transform">•</span>
                  <p className="lg:text-base text-sm">
                    Validity periods may vary based on the purpose of travel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl py-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-10 h-10 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </span>
                Application Process
              </h4>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-lg text-base shadow-lg group-hover/item:scale-110 transition-transform">
                    1
                  </div>
                  <span className="lg:text-lg text-base">Submit application with supporting documents</span>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-lg text-base shadow-lg group-hover/item:scale-110 transition-transform">
                    2
                  </div>
                  <span className="lg:text-lg text-base">Get approval from competent authority</span>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-lg text-base shadow-lg group-hover/item:scale-110 transition-transform">
                    3
                  </div>
                  <span className="lg:text-lg text-base">Collect pass from issuing office</span>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                  <div className="bg-linear-to-r from-cyan-500 to-blue-600 lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold lg:text-lg text-base shadow-lg group-hover/item:scale-110 transition-transform">
                    4
                  </div>
                  <span className="lg:text-lg text-base">Ensure proper documentation for travel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 bg-linear-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
              <div className="flex items-center">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Special Pass Assistance
                  </h4>
                  <p className="text-cyan-200 lg:text-base text-sm">
                    Contact your department for special pass applications and
                    documentation
                  </p>
                </div>
              </div>
              <button className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </button>
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

export default SpecialPass
