"use client"

const TheWorkmenCompensationAct1923 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-teal-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6">
              THE WORKMEN&apos;S COMPENSATION ACT, 1923
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Employees&apos; Compensation Act, 1923</h2>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A significant piece of legislation in India aimed at providing financial protection to workers who suffer injuries, 
              disabilities, or death due to accidents or occupational diseases arising out of and in the course of their employment.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-emerald-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Act Overview
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                Enacted during the British colonial era and modeled after similar UK laws, it was designed to offer a safety net for workers, 
                addressing the inadequacies of earlier laws like the Fatal Accidents Act of 1885. The Act was officially renamed the 
                Employees&apos; Compensation Act, 1923 in 2010 to reflect gender-neutral terminology.
              </p>
            </div>
          </div>

          {/* Key Objectives Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-indigo-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Key Objectives
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
                  Financial Compensation
                </h3>
                <p className="text-gray-200 text-base">
                  Ensures workers or their dependents receive compensation for workplace-related injuries, disabilities, or death, 
                  regardless of employer negligence.
                </p>
              </div>
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-green-500 to-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  Social Security
                </h3>
                <p className="text-gray-200 text-base">
                  Provides social security to workers in hazardous occupations such as factories, mines, plantations, 
                  construction sites, railways, and other industries.
                </p>
              </div>
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-linear-to-br from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></span>
                  Employer Accountability
                </h3>
                <p className="text-gray-200 text-base">
                  Mandates employers to compensate employees for work-related incidents, promoting safer work environments.
                </p>
              </div>
            </div>
          </div>

          {/* Coverage and Applicability Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-amber-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
              Coverage and Applicability
            </h2>
            <div className="space-y-4">
              <div className="bg-linear-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30">
                <h3 className="text-xl font-bold text-white mb-3">Who is Covered</h3>
                <p className="text-gray-200 text-base mb-3">
                  The Act applies to workers employed in industries and occupations listed in Schedule II, including full-time, 
                  part-time, temporary, or casual workers.
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center text-gray-200">
                    <span className="text-amber-400 mr-2">✓</span>
                    Non-permanent railway employees
                  </div>
                  <div className="flex items-center text-gray-200">
                    <span className="text-amber-400 mr-2">✓</span>
                    Construction workers
                  </div>
                  <div className="flex items-center text-gray-200">
                    <span className="text-amber-400 mr-2">✓</span>
                    Miners and dock workers
                  </div>
                  <div className="flex items-center text-gray-200">
                    <span className="text-amber-400 mr-2">✓</span>
                    Drivers and mechanics
                  </div>
                </div>
              </div>
              <div className="bg-linear-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-amber-400/30">
                <h3 className="text-xl font-bold text-white mb-3">Types of Injuries Covered</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-amber-400 text-2xl mb-2">🏥</div>
                    <div className="text-white font-semibold">Bodily Injuries</div>
                    <div className="text-gray-300 text-sm">Temporary or permanent disabilities</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-amber-400 text-2xl mb-2">🦠</div>
                    <div className="text-white font-semibold">Occupational Diseases</div>
                    <div className="text-gray-300 text-sm">Listed in Schedule III</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-3">
                    <div className="text-amber-400 text-2xl mb-2">💔</div>
                    <div className="text-white font-semibold">Death</div>
                    <div className="text-gray-300 text-sm">Work-related fatalities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Details Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </span>
              Compensation Details
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Death</h3>
                <p className="text-gray-200 text-sm">
                  50% of monthly wages × factor or ₹1,20,000 (whichever higher) + ₹1,000 funeral expenses
                </p>
              </div>
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-orange-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Permanent Total Disability</h3>
                <p className="text-gray-200 text-sm">
                  60% of monthly wages × factor or ₹1,20,000 (whichever higher)
                </p>
              </div>
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Permanent Partial Disability</h3>
                <p className="text-gray-200 text-sm">
                  Percentage of earnings loss based on injuries in Schedule I Part II
                </p>
              </div>
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Temporary Disability</h3>
                <p className="text-gray-200 text-sm">
                  Up to 25% of monthly wages for duration of disability
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-linear-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30 backdrop-blur-sm">
              <p className="text-gray-200 text-center">
                <strong className="text-green-300">2020 Amendment:</strong> Wage ceiling increased from ₹8,000 to ₹15,000
              </p>
            </div>
          </div>

          {/* Employer Liability Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Employer Liability
            </h2>
            <div className="space-y-4">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-3">Absolute Liability</h3>
                <p className="text-gray-200 text-base">
                  Employers are liable to pay compensation for injuries or deaths arising out of and in the course of employment, 
                  regardless of fault, except in specific cases.
                </p>
              </div>
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-3">Insurance Requirement</h3>
                <p className="text-gray-200 text-base">
                  Employers are generally required to have insurance to cover their liability under the Act, 
                  though they remain liable even without insurance.
                </p>
              </div>
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-red-400/30">
                <h3 className="text-xl font-bold text-white mb-3">Exemptions</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-200">
                    <span className="text-red-400 mr-2">✗</span>
                    Injury results in disablement for less than three days
                  </div>
                  <div className="flex items-center text-gray-200">
                    <span className="text-red-400 mr-2">✗</span>
                    Injury caused by employee intoxication
                  </div>
                  <div className="flex items-center text-gray-200">
                    <span className="text-red-400 mr-2">✗</span>
                    Willful disobedience of safety rules
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Claim Process Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Claim Process
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Filing a Claim</h3>
                <p className="text-gray-200 text-sm">
                  Injured worker or dependents must submit a claim with medical certificate detailing the injury or illness.
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Role of Commissioners</h3>
                <p className="text-gray-200 text-sm">
                  Claims processed through Commissioners for Employee Compensation, appointed under Section 20.
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">Notional Extension</h3>
                <p className="text-gray-200 text-sm">
                  Compensation payable if causal connection exists between accident and workplace, even outside physical workplace.
                </p>
              </div>
            </div>
          </div>

          {/* Judicial Interpretations Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-indigo-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </span>
              Landmark Cases
            </h2>
            <div className="space-y-4">
              <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Indian Iron and Steel Co. Ltd. v. Durgaprasad</h3>
                <p className="text-gray-200 text-sm">
                  Supreme Court emphasized that the Act is beneficial legislation and should be interpreted liberally to favor workers.
                </p>
              </div>
              <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Parimal Chandra Raha v. Life Insurance Corporation</h3>
                <p className="text-gray-200 text-sm">
                  Compensation should be based on worker&apos;s earning capacity, not just actual wages at the time of accident.
                </p>
              </div>
              <div className="bg-linear-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-indigo-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Moondra & Co. v. Mst. Bhawani</h3>
                <p className="text-gray-200 text-sm">
                  Driver&apos;s family entitled to compensation for death caused by workplace accident, reinforcing notional extension principle.
                </p>
              </div>
            </div>
          </div>

          {/* Amendments Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </span>
              Key Amendments
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">2010</h3>
                <p className="text-gray-200 text-sm">
                  Act renamed to Employees&apos; Compensation Act to reflect gender-neutral terminology.
                </p>
              </div>
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">1995</h3>
                <p className="text-gray-200 text-sm">
                  Added 16 new employments to Schedule II, included occupational diseases in Schedule III.
                </p>
              </div>
              <div className="bg-linear-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">2020</h3>
                <p className="text-gray-200 text-sm">
                  Increased wage ceiling for compensation calculations to ₹15,000.
                </p>
              </div>
            </div>
          </div>

          {/* Chapters and Schedules Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-teal-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              Chapters and Schedules
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Chapter I</h3>
                <p className="text-gray-200 text-sm">Preliminary - Short title, extent, commencement and definitions</p>
              </div>
              <div className="bg-linear-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Chapter II</h3>
                <p className="text-gray-200 text-sm">Workmen&apos;s Compensation - Liability, amounts and methods</p>
              </div>
              <div className="bg-linear-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Chapter III</h3>
                <p className="text-gray-200 text-sm">Commissioners - Venue, applications, appeals and recovery</p>
              </div>
                <div className="bg-linear-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-teal-400/30 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">Chapter IV</h3>
                <p className="text-gray-200 text-sm">Rules - State and Central Government powers</p>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Schedule I</h3>
                <p className="text-gray-200 text-sm">List of injuries and loss of earning capacity</p>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Schedule II</h3>
                <p className="text-gray-200 text-sm">List of persons included in definition of workmen</p>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Schedule III</h3>
                <p className="text-gray-200 text-sm">List of occupational diseases</p>
              </div>
              <div className="bg-linear-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-emerald-400/30">
                <h3 className="text-lg font-bold text-white mb-2">Schedule IV</h3>
                <p className="text-gray-200 text-sm">Factors for calculating compensation</p>
              </div>
            </div>
          </div>

          {/* Significance and Limitations Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex items-center">
                <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-3 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-6 lg:h-6 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Significance
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-200 text-sm">Milestone in workers&apos; rights in India</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-200 text-sm">Legal framework without costly litigation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-200 text-sm">Aligns with ILO conventions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">✓</span>
                  <span className="text-gray-200 text-sm">Provides social security net</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-2xl text-xl font-bold text-white mb-6 flex items-center">
                <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-3 p-2 rounded-full mr-4 shadow-lg">
                  <svg className="lg:w-6 lg:h-6 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </span>
                Limitations
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-200 text-sm">ESIC workers ineligible</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-200 text-sm">Minor injuries not compensable</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-200 text-sm">State variations in implementation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-200 text-sm">Negligence clauses may deny compensation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download PDF Section */}
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-8 px-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center">
              <div className="inline-block p-3 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
                <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-4">
                Download The Workmen Compensation Act 1923 PDF File
              </h2>
              <p className="text-gray-200 lg:text-lg text-base mb-8 max-w-2xl mx-auto">
                Get the complete text of The Workmen&apos;s Compensation Act, 1923 in PDF format for offline reading and reference.
              </p>
              <a 
                href="/The Workmen Compensation Act 1923.pdf" 
                download="The Workmen Compensation Act 1923.pdf"
                className="inline-flex items-center px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="mt-4 text-sm text-gray-300">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free download • Official document
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TheWorkmenCompensationAct1923