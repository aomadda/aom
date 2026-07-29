'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Table
} from 'lucide-react'

const DASchedule1 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              DISCIPLINARY & APPEAL RULES
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">SCHEDULE – I</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 italic mb-8">
              [ See rule 4 and sub-rule (2) of rule 7 ]
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Main Title */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Table className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Schedule Table
              </h2>

              {/* Table Content */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <div className="text-gray-200 lg:text-base text-sm leading-relaxed space-y-4">
                  <div className="grid grid-cols-5 gap-4 font-semibold text-cyan-200 border-b border-cyan-400/30 pb-3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                  <div className="grid grid-cols-5 gap-4">
                    <div className="font-semibold text-blue-200">Sl.No.</div>
                    <div className="font-semibold text-blue-200">Authority<br/>empowered to<br/>place a Railway<br/>servant under<br/>suspension or to<br/>impose penalties</div>
                    <div className="font-semibold text-blue-200">Class of Railway<br/>Servants over whom<br/>disciplinary powers<br/>can be exercised</div>
                    <div className="font-semibold text-blue-200">Nature of penalties<br/>mentioned in rule 6<br/>which the authorities<br/>specified in Column 2<br/>are empowered to<br/>impose on Railway<br/>Servants mentioned in<br/>corresponding entries in<br/>Column 3 and powers of<br/>that authority to place<br/>them under suspension</div>
                    <div className="font-semibold text-blue-200">Appellate<br/>Authority</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-center text-xl lg:text-2xl font-bold text-cyan-200 mb-4">
                  Railway Board’s Office
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full rounded-xl overflow-hidden border border-cyan-300/30 bg-white/5 backdrop-blur-md shadow-md">
                    <thead>
                      <tr className="text-cyan-100 font-semibold text-sm lg:text-base border-b border-cyan-200/20">
                        <th className="py-3 px-2 text-center">Sl. No.</th>
                        <th className="py-3 px-2 text-center">Authority empowered to impose penalties/suspend</th>
                        <th className="py-3 px-2 text-center">Class of Railway Servants</th>
                        <th className="py-3 px-2 text-center">Nature of penalties & powers</th>
                        <th className="py-3 px-2 text-center">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90 text-sm lg:text-base">
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          Secretary, Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway servants including Group ‘B’ non-gazetted Ministerial Staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Railway Board
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          Joint Secretary, Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway servants including Group ‘B’ non-gazetted Ministerial Staff appointed up to 30th June, 1988.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Secretary, Railway Board
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3</td>
                        <td className="py-4 px-2 text-center">
                          Joint Secretary, Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway servants including Group ‘B’ non-gazetted Ministerial Staff appointed on or after 1st July, 1988.
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Secretary, Railway Board
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">4</td>
                        <td className="py-4 px-2 text-center">
                          Under Secretary, Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          Staff with Grade Pay of up to and including ₹1650/- appointed up to 30th June, 1988.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (iv) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Joint Secretary, Railway Board
                        </td>
                      </tr>
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">5</td>
                        <td className="py-4 px-2 text-center">
                          Under Secretary, Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          Staff with Grade Pay of up to and including ₹1650/- appointed on or after 1st July, 1988.
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Joint Secretary, Railway Board
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-cyan-200 mb-6 text-center">RESEARCH, DESIGNS AND STANDARDS ORGANISATION</h2>
                <div className="overflow-x-auto rounded-xl shadow-xl border border-white/20 backdrop-blur-lg bg-white/10">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-4 px-2 text-center bg-linear-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-tl-xl">S. No.</th>
                        <th className="py-4 px-2 text-center bg-linear-to-r from-blue-700 to-purple-700 text-white font-semibold">Appointing/Disciplinary Authority</th>
                        <th className="py-4 px-2 text-center bg-linear-to-r from-blue-700 to-purple-700 text-white font-semibold">Category of Employees</th>
                        <th className="py-4 px-2 text-center bg-linear-to-r from-blue-700 to-purple-700 text-white font-semibold">Nature of Penalties & Suspension</th>
                        <th className="py-4 px-2 text-center bg-linear-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-tr-xl">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-200 lg:text-lg text-base font-normal">
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          Junior Administrative Grade / Selection Grade Officers or<br />
                          Senior Administrative Grade Officers or<br />
                          Higher Administrative Grade Officers or<br />
                          Additional Director General or<br />
                          Director General
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway servants including Group ‘B’ non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          The next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          Deputy Director and other Officers in Senior Scale or equivalent
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay up to and including ₹2800/-
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          The next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3</td>
                        <td className="py-4 px-2 text-center">
                          Junior Scale or Group ‘B’ Officers (Gazetted)
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay up to and including ₹1650/-
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          The next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">4</td>
                        <td className="py-4 px-2 text-center">
                          Junior Scale or Group ‘B’ Officers (Gazetted)
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay up to and including ₹2400/-
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (v) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          The next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">5</td>
                        <td className="py-4 px-2 text-center">
                          Senior Supervisors with Grade Pay of ₹4200/- and above
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay up to and including ₹2000/-
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i), (iii), (iii-a), and (iv) (no such power can be exercised where inquiry under sub-rule (2) of rule 11 is required) and also suspension subject to report to Junior Scale or Group ‘B’ (Gazetted) Officer of the respective branch within twenty four hours in the case of Group ‘C’ staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          The next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Railway Staff College, Vadodara - Disciplinary Powers Table */}
              <div className="mt-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-cyan-200 mb-6 text-center">
                  Railway Staff College, Vadodara
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-linear-to-tr from-purple-900/60 to-blue-900/60 rounded-xl shadow-xl border border-white/10">
                    <thead>
                      <tr className="text-gray-100 text-base font-semibold bg-linear-to-r from-blue-500/30 to-purple-500/30">
                        <th className="py-3 px-4 border-b border-white/10">S. No.</th>
                        <th className="py-3 px-4 border-b border-white/10">Authority</th>
                        <th className="py-3 px-4 border-b border-white/10">Categories of Railway Servants</th>
                        <th className="py-3 px-4 border-b border-white/10">Nature of Penalty</th>
                        <th className="py-3 px-4 border-b border-white/10">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-200">
                      {/* Row 1 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          Director General, Higher Administrative Grade Officers, Senior Administrative Grade Officers, Junior Administrative Grade Officers
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants
                        </td>
                        <td className="py-4 px-2 text-center">
                          Full powers in respect of non-gazetted staff placed under their control (except that only the Appointing Authority or above will impose penalties under clauses (vii), (viii), and (ix)).
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          Senior Scale Officers
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants <br />
                          (a) With Grade Pay up to and including ₹2400/-<br />
                          (b) For whom the officer concerned is the appointing authority
                        </td>
                        <td className="py-4 px-2 text-center">
                          (a) Penalties specified in clauses (i) to (iv) and suspension. <br />
                          (b) Penalties specified in clauses (vii) to (ix).
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3</td>
                        <td className="py-4 px-2 text-center">
                          Officers in Junior Scale or in Group ‘B’ (Gazetted)
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants <br />
                          (a) With Grade Pay up to and including ₹2000/-<br />
                          (b) For whom the Officer concerned is the appointing authority
                        </td>
                        <td className="py-4 px-2 text-center">
                          (a) Penalties specified in clauses (i) to (iv) and suspension. <br />
                          (b) Penalties specified in clauses (vii) to (ix).
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the authority in column 2 is immediately subordinate.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="my-10">
                <h3 className="text-xl lg:text-2xl font-semibold text-blue-100 mb-4 text-center animate-fade-in">
                  Schedule I - Disciplinary Authorities for Railway Training Institutes
                </h3>
                <ul className="mb-6 text-center flex flex-col items-center gap-1 text-base lg:text-lg text-cyan-100">
                  <li className="flex items-center gap-2">
                    <span className="inline-block bg-blue-500 p-1 rounded-full"><svg width="16" height="16" fill="none"><circle cx="8" cy="8" r="6" fill="#fff" /></svg></span>
                    Indian Railways’ Institute of Civil Engineering, Pune
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block bg-yellow-500 p-1 rounded-full"><svg width="16" height="16" fill="none"><rect x="2" y="2" width="12" height="12" rx="3" fill="#fff" /></svg></span>
                    Indian Railways’ Institute of Electrical Engineering, Nasik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block bg-green-500 p-1 rounded-full"><svg width="16" height="16" fill="none"><polygon points="8,2 14,14 2,14" fill="#fff"/></svg></span>
                    Indian Railways’ Institute of Mechanical & Electrical Engineering, Jamalpur
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block bg-purple-500 p-1 rounded-full"><svg width="16" height="16" fill="none"><rect x="4" y="6" width="8" height="4" fill="#fff" /></svg></span>
                    Indian Railways’ Institute of Signal Engineering and Telecommunication, Secunderabad
                  </li>
                </ul>
                <div className="overflow-x-auto rounded-xl border border-white/20 shadow-lg bg-linear-to-br from-white/10 to-blue-100/5 backdrop-blur-md animate-fade-in">
                  <table className="min-w-full text-sm lg:text-base text-white">
                    <thead>
                      <tr className="bg-linear-to-r from-blue-600/80 to-cyan-600/80 text-white">
                        <th className="py-3 px-2 font-bold text-center border-b border-white/15">S.No.</th>
                        <th className="py-3 px-2 font-bold text-center border-b border-white/15">Disciplinary Authority</th>
                        <th className="py-3 px-2 font-bold text-center border-b border-white/15">Category of Employee</th>
                        <th className="py-3 px-2 font-bold text-center border-b border-white/15">Nature of Powers</th>
                        <th className="py-3 px-2 font-bold text-center border-b border-white/15">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Row 1 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-blue-200">Director, Senior Administrative Grade Officers (other than Director), Junior Administrative Grade Officers</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants
                        </td>
                        <td className="py-4 px-2 text-center">
                          Full powers regarding non-gazetted staff under their control<br/>
                          <span className="block text-xs text-blue-200">
                            (Only the Appointing Authority or above may impose penalties under clauses (vii), (viii), and (ix))
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the disciplinary authority in column 2 is immediately subordinate
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-cyan-200">Senior Scale Officers</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants<br />
                          <span className="inline-block pl-3">
                            (a) With Grade Pay up to and including ₹2400/-<br />
                            (b) For whom the officer concerned is the appointing authority
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <span className="inline-block pl-3">
                            (a) Penalties specified in clauses (i) to (iv) and suspension<br />
                            (b) Penalties specified in clauses (vii) to (ix)
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the disciplinary authority in column 2 is immediately subordinate
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-green-200">Officers in Junior Scale or in Group &lsquo;B&rsquo; (Gazetted)</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants<br />
                          <span className="inline-block pl-3">
                            (a) With Grade Pay up to and including ₹2000/-<br />
                            (b) For whom the officer concerned is the appointing authority
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          <span className="inline-block pl-3">
                            (a) Penalties specified in clauses (i) to (iv) and suspension<br />
                            (b) Penalties specified in clauses (vii) to (ix)
                          </span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          Next higher authority to whom the disciplinary authority in column 2 is immediately subordinate
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-cyan-300 mb-6 text-center">
                  RAILWAY RECRUITMENT BOARDS
                </h2>
                <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
                  <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">S. No.</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Disciplinary Authority</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Railway Servants Under Their Jurisdiction</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Penalties They Can Impose</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-cyan-200">Chairman</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          Railway Board
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-cyan-300 mb-6 text-center">
                  RAILWAY RATES TRIBUNAL
                </h2>
                <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
                  <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">S. No.</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Disciplinary Authority</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Railway Servants Under Their Jurisdiction</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Penalties They Can Impose</th>
                        <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-cyan-200">Chairman</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants
                        </td>
                        <td className="py-4 px-2 text-center">
                          All penalties and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          Railway Board
                        </td>
                      </tr>
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          <span className="font-semibold text-cyan-200">Secretary</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted Railway Servants
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (iv) and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          Chairman, Railway Rates Tribunal
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-cyan-300 mb-6 text-center">
                RAILWAY LIAISON OFFICE
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
                <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">S. No.</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Disciplinary Authority</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Railway Servants Under Their Jurisdiction</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Penalties They Can Impose</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Appellate Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/10 transition">
                      <td className="py-4 px-2 text-center font-bold">1</td>
                      <td className="py-4 px-2 text-center">
                        <span className="font-semibold text-cyan-200">Joint Secretary, Railway Board</span>
                      </td>
                      <td className="py-4 px-2 text-center">
                        All classes of non-gazetted Railway Servants
                      </td>
                      <td className="py-4 px-2 text-center">
                        All penalties and suspension
                      </td>
                      <td className="py-4 px-2 text-center">
                        Railway Board
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-cyan-300 mb-6 text-center">
                ALL OTHER OFFICES <span className="text-lg font-normal">(Not Shown Above)</span>
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-lg mb-8">
                <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">S. No.</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Disciplinary Authority</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Railway Servants Under Their Jurisdiction</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Penalties They Can Impose</th>
                      <th className="py-3 px-4 text-center border-b border-white/10 font-semibold">Appellate Authority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/10 transition">
                      <td className="py-4 px-2 text-center font-bold">1</td>
                      <td className="py-4 px-2 text-center flex items-center justify-center gap-1">
                        <span className="inline-block align-middle text-cyan-200">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 inline mr-2 text-cyan-200" 
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round"
                          >
                            <path d="M12 2v20"/>
                            <path d="M5 12h14"/>
                            <path d="M8 5v14"/>
                            <path d="M16 5v14"/>
                          </svg>
                        </span>
                        <span className="font-semibold">Head of Office</span>
                      </td>
                      <td className="py-4 px-2 text-center">
                        All classes of non-gazetted Railway Servants
                      </td>
                      <td className="py-4 px-2 text-center">
                        All penalties and suspension
                      </td>
                      <td className="py-4 px-2 text-center">
                        Railway Board
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-linear-to-br from-pink-500/10 to-cyan-500/10 p-6 rounded-xl mb-4 shadow-lg border border-pink-400/20">
                <h3 className="text-cyan-200 font-bold text-lg mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 13l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Notes:</span>
                </h3>
                <ul className="list-none space-y-2 text-gray-200 text-base pl-1">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" />
                        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>
                      <span className="font-semibold">(1)</span> The Railway Board may impose any of the penalties specified in rule 6 on all non-gazetted Railway Servants employed in the offices mentioned in this Schedule, and may also place them under suspension.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor"/>
                        <path d="M8 12h8" strokeLinecap="round"/><path d="M12 8v8" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span>
                      <span className="font-semibold">(2)</span> The penalties of compulsory retirement, removal, or dismissal from service shall be imposed only by the Appointing Authority or an authority of equivalent or higher rank.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Disciplinary & Appeal Rules - Schedule I
            </p>
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

export default DASchedule1