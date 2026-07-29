'use client'
import React from 'react'
import { 
  Scale,
  FileText,
  Table,
  ShieldCheck
} from 'lucide-react'

const DASchedule3 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">SCHEDULE III</h2>
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
                  <div className="grid grid-cols-4 gap-4 font-semibold text-cyan-200 border-b border-cyan-400/30 pb-3">
                    <div>1.</div>
                    <div>2.</div>
                    <div>3.</div>
                    <div>4.</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-semibold text-blue-200">Item No.</div>
                    <div className="font-semibold text-blue-200">Class of Railway servants</div>
                    <div className="font-semibold text-blue-200">Authority empowered to place a Railway Servant under suspension or to impose penalty and its nature.</div>
                    <div className="font-semibold text-blue-200">Appellate Authority</div>
                  </div>
                </div>
              </div>

              {/* Main Table */}
              <div className="mt-10">
                <div className="overflow-x-auto">
                  <table className="min-w-full rounded-xl overflow-hidden border border-cyan-300/30 bg-white/5 backdrop-blur-md shadow-md">
                    <thead>
                      <tr className="text-cyan-100 font-semibold text-sm lg:text-base border-b border-cyan-200/20">
                        <th className="py-3 px-2 text-center">Item No.</th>
                        <th className="py-3 px-2 text-center">Class of Railway servants</th>
                        <th className="py-3 px-2 text-center">Authority empowered to place a Railway Servant under suspension or to impose penalty and its nature.</th>
                        <th className="py-3 px-2 text-center">Appellate Authority</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90 text-sm lg:text-base">
                      {/* Row 1 - Group A */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">1.</td>
                        <td className="py-4 px-2 text-center">
                          Railway Servants Group &apos;A&apos;
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div><span className="font-semibold">President</span> - Full powers</div>
                            <div><span className="font-semibold">Railway Board</span> - Suspension and the penalties specified in Clauses (i) to (vi) of Rule 6.</div>
                            <div>
                              <span className="font-semibold">General Manager/Additional General Manager</span> who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager, <span className="font-semibold">Director General/RDSO</span>, <span className="font-semibold">Principal/ Railway Staff College</span>, <span className="font-semibold">Chief Administrative Officers</span> (having independent charge of their organisations) - Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6 in the case of Officers upto and including Selection Grade Officers of Junior Administrative Grade.
                            </div>
                            <div>
                              <span className="font-semibold">Principal Heads of Departments</span> - Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6 in the case of Officers in Junior Scale……
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div>President</div>
                            <div>President</div>
                            <div>General Manager/ Additional General Manager who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager</div>
                          </div>
                        </td>
                      </tr>
                      {/* Row 2 - Group B */}
                      <tr className="border-b border-white/10 hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">2.</td>
                        <td className="py-4 px-2 text-center">
                          Railway Servants Group &apos;B&apos;
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div><span className="font-semibold">President</span> - Full Powers</div>
                            <div><span className="font-semibold">Railway Board</span> - Full Powers</div>
                            <div>
                              <span className="font-semibold">General Manager/Additional General Manager</span> who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager, <span className="font-semibold">Director General/RDSO</span>, <span className="font-semibold">Principal/ Railway Staff College</span>, <span className="font-semibold">Chief Administrative Officers</span> (having independent charge of their organisations) - Suspension and the penalties specified in clauses (i) to (vi) of Rule 6.
                            </div>
                            <div>
                              <span className="font-semibold">Secretary, Railway Board</span> - Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6 in the case of Group &apos;B&apos; officers of the Railway Secretariat Service.
                            </div>
                            <div>
                              <span className="font-semibold">Principal Heads of Departments</span> - Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6.……
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div>President</div>
                            <div>Railway Board</div>
                            <div>Railway Board</div>
                            <div>General Manager/ Additional General Manager who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager.</div>
                          </div>
                        </td>
                      </tr>
                      {/* Row 3 - Not classified */}
                      <tr className="hover:bg-white/10 transition">
                        <td className="py-4 px-2 text-center font-bold">3.</td>
                        <td className="py-4 px-2 text-center">
                          Railway Servants not classified either as Group &apos;A&apos; or Group &apos;B&apos; such as Temporary Assistant Officers.
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div><span className="font-semibold">President</span> - Full Powers</div>
                            <div><span className="font-semibold">Railway Board</span> - Full Powers</div>
                            <div>
                              <span className="font-semibold">General Manager/Additional General Manager</span> who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager, <span className="font-semibold">Director General/RDSO</span>, <span className="font-semibold">Principal/Railway Staff College</span>, <span className="font-semibold">Chief Administrative Officers</span> (having independent charge of their organisations) -Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6.
                            </div>
                            <div>
                              <span className="font-semibold">Principal Heads of Departments</span> - Suspension and the penalties specified in clauses (i), (iii), (iii-a), (iii-b) and (iv) of Rule 6.…….
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="space-y-2">
                            <div>President</div>
                            <div>Railway Board</div>
                            <div>General Manager/ Additional General Manager who has been ordered by the Competent Authority to look after the current duties of General Manager in the absence of a regularly posted General Manager.</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/80 text-white">
                    <FileText className="w-5 h-5" />
                  </span>
                  Important Notes
                </h3>
                <ol className="space-y-6 list-none px-1">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 inline-flex items-center justify-center w-8 h-8 bg-purple-600/80 rounded-full text-white font-bold text-lg">
                      1
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      Disciplinary powers of Principal Heads of Departments under this Schedule shall also be exercised by Coordinating Heads of Departments or Heads of Departments in Senior Administrative Grade (who are in independent charge) in their respective departments, in the following Production Units:
                      <span className="block mt-2 ml-3">
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Chittaranjan Locomotive Works (Chittaranjan),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Diesel Components Works (Patiala),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Diesel Locomotive Works (Varanasi),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Integral Coach Factory (Perambur),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Wheel and Axle Plant (Yelahanka, Bangalore),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-yellow-300" /></span> Rail Coach Factory (Kapurthala)
                        <br />
                        as well as in new Zonal Railways:
                        <br />
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> East Coast Railway (Bhubaneshwar),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> East Central Railway (Hajipur),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> North Central Railway (Allahabad),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> North Western Railway (Jaipur),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> South Western Railway (Hubli),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> West Central Railway (Jabalpur),
                        <span className="inline-block mr-1 align-middle"><Scale className="inline w-4 h-4 text-green-300" /></span> South East Central Railway (Bilaspur).
                        <br />
                        <span className="block mt-1">
                          This applies in respect of officers in Junior Scale and Group ‘B’ who are under their administrative control.
                        </span>
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 inline-flex items-center justify-center w-8 h-8 bg-pink-600/80 rounded-full text-white font-bold text-lg">
                      2
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      Disciplinary powers of Principal Heads of Departments under this Schedule shall also be exercised by Directors of the Railway Training Institutes, namely:
                      <span className="block mt-2 ml-3">
                        <span className="inline-block mr-1 align-middle"><ShieldCheck className="inline w-4 h-4 text-lime-300" /></span> Indian Railways Institute of Civil Engineering (Pune),<br/>
                        <span className="inline-block mr-1 align-middle"><ShieldCheck className="inline w-4 h-4 text-lime-300" /></span> Indian Railways Institute of Electrical Engineering (Nasik),<br/>
                        <span className="inline-block mr-1 align-middle"><ShieldCheck className="inline w-4 h-4 text-lime-300" /></span> Indian Railways Institute of Mechanical and Electrical Engineering (Jamalpur),<br/>
                        <span className="inline-block mr-1 align-middle"><ShieldCheck className="inline w-4 h-4 text-lime-300" /></span> Indian Railways Institute of Signal Engineering and Telecommunications (Secunderabad),<br/>
                        <span className="inline-block mr-1 align-middle"><ShieldCheck className="inline w-4 h-4 text-lime-300" /></span> Indian Railways Centre for Advanced Maintenance Technology (Gwalior)
                        <br />
                        in respect of officers in Junior Scale and Group &apos;B&apos; under their administrative control.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 inline-flex items-center justify-center w-8 h-8 bg-cyan-600/80 rounded-full text-white font-bold text-lg">
                      3
                    </span>
                    <span className="text-gray-200 lg:text-base text-sm leading-relaxed">
                      Disciplinary powers of Principal Heads of Departments under this Schedule shall also be exercised by:
                      <span className="block mt-2 ml-3">
                        <span className="inline-block mr-1 align-middle"><Table className="inline w-4 h-4 text-emerald-300" /></span> Senior Executive Directors and Executive Directors who are in independent charge in the Research, Designs and Standards Organization,<br/>
                        <span className="inline-block mr-1 align-middle"><Table className="inline w-4 h-4 text-emerald-300" /></span> Coordinating Heads of Departments in Senior Administrative Grade or by the Heads of Departments in Senior Administrative Grade who are in independent charge in Metro Railway (Kolkata),<br/>
                        <span className="inline-block mr-1 align-middle"><Table className="inline w-4 h-4 text-emerald-300" /></span> Central Organization for Railway Electrification (Allahabad),<br/>
                        <span className="inline-block mr-1 align-middle"><Table className="inline w-4 h-4 text-emerald-300" /></span> Central Organization for Modernisation of Workshops (New Delhi),<br/>
                        <span className="inline-block mr-1 align-middle"><Table className="inline w-4 h-4 text-emerald-300" /></span> Chairmen of respective Railway Recruitment Boards,
                        <br />
                        in respect of officers in Junior Scale and Group &apos;B&apos; who are under their administrative control.
                      </span>
                    </span>
                  </li>
                </ol>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Disciplinary & Appeal Rules - Schedule III
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

export default DASchedule3
