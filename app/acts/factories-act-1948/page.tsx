"use client"
import React from 'react'

const TheFactoriesAct1948 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-4 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              THE FACTORIES ACT, 1948
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive legislation regulating labor conditions in factories, ensuring worker safety, health, and welfare across India
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Act Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">📅 Enactment Date</h3>
                  <p className="text-gray-200 text-sm">September 23, 1948 (Effective from April 1, 1949)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">🏭 Applicability</h3>
                  <p className="text-gray-200 text-sm">Factories with 10+ workers (with power) or 20+ workers (without power)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">🎯 Primary Objective</h3>
                  <p className="text-gray-200 text-sm">Regulate labor conditions and ensure worker safety, health, and welfare</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">⚖️ Enforcement</h3>
                  <p className="text-gray-200 text-sm">State governments through factory inspectors</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">💰 Penalties</h3>
                  <p className="text-gray-200 text-sm">Up to ₹2 lakh fine and/or 2 years imprisonment</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-blue-300 font-semibold mb-2">🔄 Amendments</h3>
                  <p className="text-gray-200 text-sm">Multiple amendments in 1987, 2016, and ongoing modernization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-green-600 to-green-700 rounded-xl p-4 text-white hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">🛡️</div>
                <h3 className="font-semibold mb-2">Worker Protection</h3>
                <p className="text-sm text-green-100">Protect workers from hazardous working conditions</p>
              </div>
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-semibold mb-2">Work Regulations</h3>
                <p className="text-sm text-blue-100">Regulate working hours, leave, and overtime</p>
              </div>
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-xl p-4 text-white hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">🏥</div>
                <h3 className="font-semibold mb-2">Health & Safety</h3>
                <p className="text-sm text-purple-100">Ensure health, safety, and welfare measures</p>
              </div>
              <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-xl p-4 text-white hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-2">⚖️</div>
                <h3 className="font-semibold mb-2">Prevent Exploitation</h3>
                <p className="text-sm text-indigo-100">Prevent exploitation and promote decent work environments</p>
              </div>
            </div>
          </div>

          {/* Key Provisions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-amber-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Key Provisions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Health */}
              <div className="bg-linear-to-br from-green-600 to-green-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🏥</span>
                  Health
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2">✓</span>
                    Cleanliness and adequate ventilation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2">✓</span>
                    Proper lighting and temperature control
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2">✓</span>
                    Waste disposal and dust prevention
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-200 mr-2">✓</span>
                    Drinking water and sanitation facilities
                  </li>
                </ul>
              </div>

              {/* Safety */}
              <div className="bg-linear-to-br from-red-600 to-red-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🛡️</span>
                  Safety
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-200 mr-2">✓</span>
                    Mandatory fencing of machinery
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-2">✓</span>
                    Protection from dangerous parts
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-2">✓</span>
                    Fire and explosion precautions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-200 mr-2">✓</span>
                    Regular inspection and maintenance
                  </li>
                </ul>
              </div>

              {/* Welfare */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">❤️</span>
                  Welfare
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Restrooms and canteens (250+ workers)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Creches (30+ women workers)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    First-aid facilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">✓</span>
                    Welfare officers (500+ workers)
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">⏰</span>
                  Working Hours
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2">✓</span>
                    Max 48 hours/week, 9 hours/day
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2">✓</span>
                    Weekly rest day mandatory
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2">✓</span>
                    30 min break after 5 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-200 mr-2">✓</span>
                    Double wages for overtime
                  </li>
                </ul>
              </div>

              {/* Employment of Women & Children */}
              <div className="bg-linear-to-br from-pink-600 to-pink-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">👥</span>
                  Women & Children
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-pink-200 mr-2">✓</span>
                    No children below 14 years
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-200 mr-2">✓</span>
                    Adolescents need fitness certificate
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-200 mr-2">✓</span>
                    Women: No work 7 PM - 6 AM
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-200 mr-2">✓</span>
                    Restricted from hazardous work
                  </li>
                </ul>
              </div>

              {/* Registration & Compliance */}
              <div className="bg-linear-to-br from-indigo-600 to-indigo-700 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-2">📋</span>
                  Registration
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Register with Chief Inspector
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Maintain records and returns
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Display notices
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-200 mr-2">✓</span>
                    Regular inspections
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Chapters Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-yellow-600 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Chapters and Sections
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(() => {
                const allSections = [
                  // Chapter I: PRELIMINARY (Sections 1-7)
                  { title: "CHAPTER I: PRELIMINARY", sections: [
                    { number: 1, text: "Short title, extent and commencement" },
                    { number: 2, text: "Interpretation" },
                    { number: 3, text: "References to time of day" },
                    { number: 4, text: "Power to declare different departments" },
                    { number: 5, text: "Power to exempt during public emergency" },
                    { number: 6, text: "Approval, licensing and registration" },
                    { number: 7, text: "Notice by occupier" }
                  ]},
                  // Chapter II: THE INSPECTING STAFF (Sections 7A-10)
                  { title: "CHAPTER II: THE INSPECTING STAFF", sections: [
                    { number: '7A', text: "General duties of the occupier" },
                    { number: 8, text: "General duties of manufacturers" },
                    { number: 9, text: "Inspectors" },
                    { number: 10, text: "Powers of Inspectors" },
                    { number: '10A', text: "Certifying surgeons" }
                  ]},
                  // Chapter III: HEALTH (Sections 11-20)
                  { title: "CHAPTER III: HEALTH", sections: [
                    { number: 11, text: "Cleanliness" },
                    { number: 12, text: "Disposal of wastes and effluents" },
                    { number: 13, text: "Ventilation and temperature" },
                    { number: 14, text: "Dust and fume" },
                    { number: 15, text: "Artificial humidification" },
                    { number: 16, text: "Overcrowding" },
                    { number: 17, text: "Lighting" },
                    { number: 18, text: "Drinking water" },
                    { number: 19, text: "Latrines and urinals" },
                    { number: 20, text: "Spittoons" }
                  ]},
                  // Chapter IV: SAFETY (Sections 21-40)
                  { title: "CHAPTER IV: SAFETY", sections: [
                    { number: 21, text: "Fencing of machinery" },
                    { number: 22, text: "Work on or near machinery in motion" },
                    { number: 23, text: "Employment of young persons on dangerous machines" },
                    { number: 24, text: "Striking gear and devices" },
                    { number: 25, text: "Self-acting machines" },
                    { number: 26, text: "Casing of new machinery" },
                    { number: 27, text: "Hoists and lifts" },
                    { number: 28, text: "Lifting machines, chains, ropes" },
                    { number: 29, text: "Revolving machinery" },
                    { number: 30, text: "Pressure plant" },
                    { number: 31, text: "Floors, stairs and means of access" },
                    { number: 32, text: "Pits, sumps, openings in floors" },
                    { number: 33, text: "Excessive weights" },
                    { number: 34, text: "Protection of eyes" },
                    { number: 35, text: "Precautions against dangerous fumes" },
                    { number: 36, text: "Explosive or inflammable dust, gas" },
                    { number: 37, text: "Precautions in case of fire" },
                    { number: 38, text: "Safety of buildings and machinery" },
                    { number: 39, text: "Safety officers" },
                    { number: 40, text: "Power to make rules" }
                  ]},
                  // Chapter IVA: HAZARDOUS PROCESSES (Sections 41A-41H)
                  { title: "CHAPTER IVA: HAZARDOUS PROCESSES", sections: [
                    { number: 41, text: "Constitution of Site Appraisal Committee" },
                    { number: 42, text: "Compulsory disclosure of information" },
                    { number: 43, text: "Specific responsibility of the occupier" },
                    { number: 44, text: "Power of Central Government to appoint Inquiry Committee" },
                    { number: 45, text: "Emergency standards" },
                    { number: 46, text: "Permissible limits of exposure" },
                    { number: 47, text: "Workers' participation in safety management" },
                    { number: 48, text: "Right of workers to warn about imminent danger" }
                  ]},
                  // Chapter V: WELFARE (Sections 42-50)
                  { title: "CHAPTER V: WELFARE", sections: [
                    { number: 49, text: "Washing facilities" },
                    { number: 50, text: "Facilities for storing and drying clothing" },
                    { number: 51, text: "Facilities for sitting" },
                    { number: 52, text: "First-aid appliances" },
                    { number: 53, text: "Canteens" },
                    { number: 54, text: "Shelters, rest rooms and lunch rooms" },
                    { number: 55, text: "Creches" },
                    { number: 56, text: "Welfare officers" }
                  ]},
                  // Chapter VI: WORKING HOURS OF ADULTS (Sections 51-66)
                  { title: "CHAPTER VI: WORKING HOURS OF ADULTS", sections: [
                    { number: 57, text: "Weekly hours" },
                    { number: 58, text: "Weekly holidays" },
                    { number: 59, text: "Compensatory holidays" },
                    { number: 60, text: "Daily hours" },
                    { number: 61, text: "Intervals for rest" },
                    { number: 62, text: "Spread over" },
                    { number: 63, text: "Night shifts" },
                    { number: 64, text: "Prohibition of overlapping shifts" },
                    { number: 65, text: "Extra wages for overtime" },
                    { number: 66, text: "Restriction on double employment" },
                    { number: 67, text: "Notice of periods of work for adults" },
                    { number: 68, text: "Register of adult workers" },
                    { number: 69, text: "Further restrictions on employment of women" }
                  ]},
                  // Chapter VII: EMPLOYMENT OF YOUNG PERSONS (Sections 67-77)
                  { title: "CHAPTER VII: EMPLOYMENT OF YOUNG PERSONS", sections: [
                    { number: 70, text: "Prohibition of employment of young children" },
                    { number: 71, text: "Non-adult workers to carry tokens" },
                    { number: 72, text: "Certificates of fitness" },
                    { number: 73, text: "Effect of certificate of fitness" },
                    { number: 74, text: "Working hours for children" },
                    { number: 75, text: "Notice of periods of work for children" },
                    { number: 76, text: "Register of child workers" },
                    { number: 77, text: "Power to require medical examination" }
                  ]},
                  // Chapter VIII: ANNUAL LEAVE WITH WAGES (Sections 78-84)
                  { title: "CHAPTER VIII: ANNUAL LEAVE WITH WAGES", sections: [
                    { number: 78, text: "Application of Chapter" },
                    { number: 79, text: "Annual leave with wages" },
                    { number: 80, text: "Wages during leave period" },
                    { number: 81, text: "Payment in advance in certain cases" },
                    { number: 82, text: "Mode of recovery of unpaid wages" },
                    { number: 83, text: "Power to make rules" },
                    { number: 84, text: "Power to exempt factories" }
                  ]},
                  // Chapter IX: SPECIAL PROVISIONS (Sections 85-106)
                  { title: "CHAPTER IX: SPECIAL PROVISIONS", sections: [
                    { number: 85, text: "Power to apply the Act to certain premises" },
                    { number: 86, text: "Power to exempt public institutions" },
                    { number: 87, text: "Dangerous operations" },
                    { number: 88, text: "Power to prohibit employment" },
                    { number: 89, text: "Notice of certain accidents" },
                    { number: 90, text: "Notice of certain dangerous occurrences" },
                    { number: 91, text: "Notice of certain diseases" },
                    { number: 92, text: "Power to direct enquiry" },
                    { number: 93, text: "Power to take samples" },
                    { number: 94, text: "Penalty for offences" },
                    { number: 95, text: "Enhanced penalty after previous conviction" },
                    { number: 96, text: "Penalty for obstructing Inspector" },
                    { number: 97, text: "Offences by workers" }
                  ]},
                  // Chapter X: PENALTIES AND PROCEDURE (Sections 92-106A)
                  { title: "CHAPTER X: PENALTIES AND PROCEDURE", sections: [
                    { number: 98, text: "Penalty for offences" },
                    { number: 99, text: "Liability of owner of premises" },
                    { number: 100, text: "Enhanced penalty after previous conviction" },
                    { number: 101, text: "Penalty for obstructing Inspector" },
                    { number: 102, text: "Penalty for wrongfully disclosing results" },
                    { number: 103, text: "Penalty for contravention" },
                    { number: 104, text: "Penalty for using false certificate" },
                    { number: 105, text: "Penalty for permitting double employment" },
                    { number: 106, text: "Exemption of occupier or manager" },
                    { number: 107, text: "Power of Court to make orders" },
                    { number: 108, text: "Presumption as to employment" },
                    { number: 109, text: "Onus as to age" },
                    { number: 110, text: "Cognizance of offences" },
                    { number: 111, text: "Limitation of prosecutions" },
                    { number: 112, text: "Jurisdiction of a court" }
                  ]},
                  // Chapter XI: SUPPLEMENTAL (Sections 107-120)
                  { title: "CHAPTER XI: SUPPLEMENTAL", sections: [
                    { number: 113, text: "Appeals" },
                    { number: 114, text: "Display of notices" },
                    { number: 115, text: "Service of notices" },
                    { number: 116, text: "Returns" },
                    { number: 117, text: "Obligations of workers" },
                    { number: 118, text: "Right of workers" },
                    { number: 119, text: "General power to make rules" },
                    { number: 120, text: "Powers of Centre to give directions" }
                  ]}
                ];

                return allSections.map((chapter, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-blue-300 font-bold mb-3 text-sm">{chapter.title}</h3>
                                         <ul className="space-y-2">
                       {chapter.sections.map((section, sectionIndex) => (
                         <li key={sectionIndex} className="text-gray-300 text-xs flex items-start group hover:bg-white/5 p-1 rounded transition-all duration-200">
                           <span className="shrink-0 w-6 h-6 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 text-white text-xs font-bold shadow-lg group-hover:scale-110 transition-transform">
                             {section.number}
                           </span>
                           <span className="flex-1 leading-relaxed">{section.text}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                ));
              })()}
            </div>
          </div>

                     {/* Significance Section */}
           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-6 px-2 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
             <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
               <span className="bg-linear-to-r from-emerald-500 to-teal-500 p-2 lg:p-3 rounded-full mr-3 shadow-lg">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </span>
               Significance & Impact
             </h2>
             <div className="grid md:grid-cols-3 gap-6">
               <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-4 border border-white/20 hover:bg-white/15">
                 <div className="bg-linear-to-br from-blue-500 to-blue-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-24 lg:h-24 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-shadow">
                   ⚖️
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Balanced Approach</h3>
                 <p className="text-gray-200 text-sm">Balances industrial productivity with worker rights</p>
               </div>
               <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-4 border border-white/20 hover:bg-white/15">
                 <div className="bg-linear-to-br from-green-500 to-green-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-24 lg:h-24 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transition-shadow">
                   🛡️
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Safety Standards</h3>
                 <p className="text-gray-200 text-sm">Sets minimum standards for safe working conditions</p>
               </div>
               <div className="text-center group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-8 px-4 border border-white/20 hover:bg-white/15">
                 <div className="bg-linear-to-br from-purple-500 to-purple-600 lg:text-4xl text-2xl font-bold p-6 rounded-full lg:w-24 lg:h-24 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                   🌍
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">National Coverage</h3>
                 <p className="text-gray-200 text-sm">Applies across India with state-level enforcement</p>
               </div>
             </div>
           </div>

           {/* Download PDF Section */}
           <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 lg:px-8 px-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
             <div className="text-center">
               <div className="inline-block lg:p-4 p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
                 <div className="bg-linear-to-r from-red-500 to-orange-600 lg:p-4 p-2 rounded-full">
                   <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
               </div>
               <h2 className="lg:text-3xl text-xl font-bold text-white mb-4">
                 Download The Factories Act 1948 PDF File
               </h2>
               <p className="text-gray-300 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                 Get the complete The Factories Act, 1948 document for offline reference and detailed study
               </p>
               
               <button 
                 onClick={() => {
                   const link = document.createElement('a');
                   link.href = '/The Factories Act 1948.pdf';
                   link.download = 'The Factories Act 1948.pdf';
                   link.target = '_blank';
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }}
                 className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-linear-to-r from-red-500 to-orange-600 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-red-500/50"
               >
                 <span className="absolute inset-0 bg-linear-to-r from-red-600 to-orange-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                 <span className="relative flex items-center">
                   <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                   Download PDF
                 </span>
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

export default TheFactoriesAct1948