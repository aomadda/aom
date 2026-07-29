'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Table
} from 'lucide-react'

const DASchedule2 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">SCHEDULE – II</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 italic mb-8">
              [ See rule 4 and sub-rule (2) of rule 7 ]
            </p>
            <p className="text-gray-200 lg:text-lg text-base max-w-4xl mx-auto">
              Schedule of Disciplinary powers and powers of suspension of different grades of Railway Officers and Senior Supervisors in respect of non-gazetted staff of Zonal Railways, Chittaranjan Locomotive Works, Diesel Locomotive Works, Integral Coach Factory, Rail Wheel Factory, Metro Railway (Kolkata), Diesel Loco Modernisation Works (Patiala), Rail Coach Factory (Kapurthala), Railway Electrification Projects and Metropolitan Transport Projects (Railways).
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
                    <div className="font-semibold text-blue-200">Nature of penalties<br/>mentioned in rule 6<br/>which the authority<br/>in column 2 is<br/>empowered to<br/>impose on Railway<br/>Servants mentioned in<br/>corresponding entries in<br/>column 3 and powers of<br/>that authority to place<br/>them under suspension</div>
                    <div className="font-semibold text-blue-200">Appellate<br/>Authority</div>
                  </div>
                </div>
              </div>

              {/* Main Table */}
              <div className="mt-10">
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
                      {/* Row 1 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1</td>
                        <td className="py-4 px-2 text-center">
                          Senior Supervisors incharge with Grade Pay of 4200/- and above.<br />
                          <span className="text-xs text-gray-300">(Described as Supervisors In-charge by the Railway Administration for this purpose)</span>
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff who are three grades (Grade Pay) below and lower than the Disciplinary Authority.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (iv) (no such power can be exercised where inquiry under sub-rule (2) of rule 11 is required) and suspension subject to report to Divisional Officer or Assistant Officer Incharge within twenty four hours in the case of Group &apos;C&apos; staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Assistant Officers (Junior Scale and Group &apos;B&apos;) (Gazetted)
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2</td>
                        <td className="py-4 px-2 text-center">
                          Assistant Officers (Junior Scale and Group &apos;B&apos;) (Gazetted)
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay of up to and including 2400/-.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (v) and suspension. Also Penalty specified in clause (vi) on staff with Grade Pay of up to and including 1650/- only.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Senior Scale Officers and Assistant Officers (Junior Scale and Group &apos;B&apos; (Gazetted) holding independent charge)
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3</td>
                        <td className="py-4 px-2 text-center">
                          Senior Scale Officers and Assistant Officers (Junior Scale and Group &apos;B&apos; (Gazetted) holding independent charge)
                        </td>
                        <td className="py-4 px-2 text-center">
                          All staff with Grade Pay of up to and including 2800/-.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Junior Administrative Grade Officers and Senior Scale Officers holding independent Charge or In-charge of a Department in the Division
                        </td>
                      </tr>
                      {/* Row 4 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">4</td>
                        <td className="py-4 px-2 text-center">
                          Junior Administrative Grade Officers and Senior Scale Officers holding independent Charge or In-charge of a Department in the Division
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          Additional Divisional Railway Managers in relation to the Departments attached to them or Divisional Railway Managers
                        </td>
                      </tr>
                      {/* Row 5 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">5</td>
                        <td className="py-4 px-2 text-center">
                          Additional Divisional Railway Managers in relation to the Departments attached to them or Divisional Railway Managers
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Senior Administrative Grade Officers in the Zonal Railways&apos; Head Quarters in Pay Band-4 with Grade Pay 10000/- including Principal Heads of Departments in Pay Band-4 with Grade Pay 12000/-.
                        </td>
                      </tr>
                      {/* Row 6 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">6</td>
                        <td className="py-4 px-2 text-center">
                          Senior Administrative Grade Officers in the Zonal Railways&apos; Head Quarters in Pay Band-4 with Grade Pay 10000/- including Principal Heads of Departments in Pay Band-4 with Grade Pay 12000/-.
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Additional General Managers in relation to Departments attached to them or Chief Administrative Officers or General Managers
                        </td>
                      </tr>
                      {/* Row 7 */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">7</td>
                        <td className="py-4 px-2 text-center">
                          Additional General Managers in relation to Departments attached to them or Chief Administrative Officers or General Managers
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          Railway Board
                        </td>
                      </tr>
                      {/* Row 8 */}
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">8</td>
                        <td className="py-4 px-2 text-center">
                          Railway Board
                        </td>
                        <td className="py-4 px-2 text-center">
                          All classes of non-gazetted staff.
                        </td>
                        <td className="py-4 px-2 text-center">
                          Penalties specified in clauses (i) to (vi) and suspension
                        </td>
                        <td className="py-4 px-2 text-center">
                          President
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-linear-to-br from-pink-500/10 to-cyan-500/10 p-6 rounded-xl mt-10 shadow-lg border border-pink-400/20">
                <h3 className="text-cyan-200 font-bold text-lg mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 13l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Note:</span>
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
                      <span className="font-semibold">(1)</span> An Appointing authority or an authority of equivalent rank or any higher authority shall be competent to impose penalties specified in clauses (vii), (viii) and (ix) of rule 6.
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
                      <span className="font-semibold">(2)</span> Where the post of appellate authority as shown in column 5 is vacant, then, in that case, the next higher authority shown in the row just below that authority shall be the appellate authority.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>
                      <span className="font-semibold">(3)</span> The appointing authority or an authority of equivalent rank or any higher authority who is competent to impose the penalty of dismissal or removal or compulsory retirement from service, may also impose any lower penalty.
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
              Disciplinary & Appeal Rules - Schedule II
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

export default DASchedule2
