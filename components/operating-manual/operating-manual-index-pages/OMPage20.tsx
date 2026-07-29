'use client'
import React from 'react'
import { 
  Building2, 
  Users, 
  Shield, 
  BookOpen, 
  FileText, 
  AlertTriangle,
  Clock,
  TrendingUp,
  Settings,
  Wrench,
  Train,
  Award,
  UserCheck,
  AlertCircle,
  BarChart3,
  Database,
  CheckCircle,
  XCircle,
  Calendar,
} from 'lucide-react'

const OMPage20 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
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
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              STATION MANAGEMENT
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">Operating Manual - Station Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to station management, staff responsibilities, and essential registers 
              for efficient railway station operations.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Station Management Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg flex items-center justify-center">
                  <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Management Overview
              </h2>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                <ul className="space-y-5 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">👤</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>Depending on the importance and workload of the station,</strong> the station management is headed by Station Director/Station Manager/Station Master in-charge.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🚆</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>At bigger stations,</strong> Station Masters in shifts are exclusively assigned for train passing duties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🎫</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>In wayside stations with less traffic,</strong> Station Masters are also entrusted with duties like ticketing, announcement and other station management duties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🤝</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>All station staff work under the supervision of SD/SMR/SM in-charge.</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">🛠️</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>Other departmental staff</strong> of Commercial, Security, Mechanical, Electrical, S&amp;T, Loco (running) and Engineering are also deputed at stations for carrying out the duties pertaining to their respective department.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Station Director/Manager/SM in-charge */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Users className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Station Director/Manager/SM in-charge
              </h2>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                <ul className="space-y-5 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">🛡️</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>The in-charge of station is responsible for smooth functioning of the station in all areas</strong> – safety, train operations, passenger amenities etc. Safety & train operation duties include proper maintenance of registers; ensuring that station staff follow and carry out all the responsibilities and duties mentioned in Appendix ‘D’ of SWR of the station; award grades to the staff working under them.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">📚</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>Rule books must be kept up to date</strong> and available to station staff for reference (G&SR 2.01, 5.02 & 5.03).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">🚨</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>In case of abnormal working,</strong> they need to attend and render all possible assistance for passenger needs and traffic restoration. For major stations, where maintenance of coaching and goods stock are carried out, they are required to coordinate with division/control and other departments for achieving efficient utilization and timely operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">📊</span>
                    <span className="text-gray-200 lg:text-lg text-base leading-relaxed">
                      <strong>Besides train running duties,</strong> he/she must ensure updating of various commercial registers, exhibit and maintain various statistics, charts and other information pertaining to the station. Also, ensure proper working of passenger amenities and general cleanliness of the station through proper coordination with other departments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Staff Grading System */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                  <Award className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                </span>
                Staff Grading System
              </h2>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                  All operating staff involved in train passing duties shall be assigned grades under
                  one of the four heads – &quot;A&quot;, &quot;B&quot;, &quot;C&quot; &amp; &quot;D&quot;. The categorization shall be done after
                  careful analysis of performance of that employee for the last 6 months.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-purple-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Grading Parameters & Marks
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-purple-100">Knowledge of rules</span>
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">25 marks</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-purple-100">Alertness and observance of rules</span>
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">25 marks</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-purple-100">Safety record</span>
                        <span className="text-xs text-gray-200 bg-purple-500/30 px-2 py-1 rounded">15 marks</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-100">Leadership & Management</span>
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">15 marks</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-100">Discipline</span>
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">10 marks</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-pink-100">Appearance & neatness</span>
                        <span className="text-xs text-gray-200 bg-pink-500/30 px-2 py-1 rounded">10 marks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20 mb-6">
                  <h4 className="font-semibold text-pink-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Qualification Requirements
                  </h4>
                  <p className="text-gray-200 text-sm mb-4">
                    For staff to be qualified as A or B category, they must secure a minimum of 60%
                    marks each in &quot;Knowledge of Rules&quot; parameter as well as &quot;Alertness and observance
                    of Rules&quot; parameter.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                  <h4 className="font-semibold text-purple-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <Award className="w-5 h-5 mr-2" />
                    Grade Categories
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-green-300">Category &quot;A&quot;</span>
                        <span className="text-xs text-gray-200 bg-green-500/30 px-2 py-1 rounded">80 and above</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-blue-300">Category &quot;B&quot;</span>
                        <span className="text-xs text-gray-200 bg-blue-500/30 px-2 py-1 rounded">50 to 79</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-yellow-300">Category &quot;C&quot;</span>
                        <span className="text-xs text-gray-200 bg-yellow-500/30 px-2 py-1 rounded">49 to 26</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                        <span className="text-sm font-medium text-red-300">Category &quot;D&quot;</span>
                        <span className="text-xs text-gray-200 bg-red-500/30 px-2 py-1 rounded">25 & below</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                    <p className="text-sm text-red-200 flex flex-col gap-2 items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <strong>Important:</strong> Alcoholic staff must be categorized under &quot;D&quot; category irrespective of marks obtained
                      by them in other aspect of working.
                    </p>
                  </div>
                </div>
              </div>
            </div>

                         {/* Essential Registers */}
             <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
               <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                 <span className="bg-gradient-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                   <BookOpen className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                 </span>
                 Essential Station Registers
               </h2>
               <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-orange-400/30">
                 <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                   Some of the registers maintained for the purpose of managing the various facets of
                   the station are…
                 </p>

                 <div className="space-y-6">
                   {/* Address Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Users className="w-5 h-5 mr-2" />
                       Address Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       It should contain the name, address, telephone/mobile phone
                       number, email address of all the station staff. At major stations, a separate register
                       containing list of all shop keepers, licensed vendors, licensed coolies, licensed
                       contractors coolies or any other persons working at station other than railway
                       employees must also be maintained along with the up to date address and telephone
                       numbers, blood group if available and office copy of their Photo Identity Cards.
                     </p>
                     <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30">
                       <p className="text-sm text-yellow-200 flex flex-col gap-2 items-center">
                         <AlertCircle className="w-4 h-4 mr-2" />
                         <strong>Security Note:</strong> Entry of such persons into station area should be permitted only after checking the identify card.
                       </p>
                     </div>
                   </div>

                   {/* Staff Gradation Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Award className="w-5 h-5 mr-2" />
                       Staff Gradation Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The supervisory Station Manager in case of big stations
                       and Traffic inspector in case of way side stations are required to assess the staff of
                       the station and give grading in this register.
                     </p>
                   </div>

                   {/* Staff Grievance Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <UserCheck className="w-5 h-5 mr-2" />
                       Staff Grievance Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       Any grievance registered by the staff in this register, the in-charge
                       of the station is required to dispatch to the concerned officials and obtain
                       their acknowledgement. Separate grievance register has to be maintained for
                       general and SC/ST staff.
                     </p>
                     <p className="text-sm text-gray-200 flex flex-col gap-2 items-center">
                       The rectification of the grievance also has to be mentioned
                       in this register.
                     </p>
                   </div>

                   {/* Overtime Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Clock className="w-5 h-5 mr-2" />
                       Overtime Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The details of staff performing over hours of duty have to be
                       entered in this register in order to monitor OT and ensure compensatory rest (CR)
                       whenever possible and verify claims of allowance.
                     </p>
                   </div>

                   {/* Safety Meeting Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Shield className="w-5 h-5 mr-2" />
                       Safety Meeting Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       Monthly and when required, a meeting on one safety
                       aspect/rule is conducted among the station staff and their acknowledgement
                       obtained in this register.
                     </p>
                   </div>

                   {/* Weather Warning Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <AlertTriangle className="w-5 h-5 mr-2" />
                       Weather Warning Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       Whenever weather warning is issued by the control
                       office, the SM has to send and obtain acknowledgement of engineering staff and
                       paste the same in the register duly writing the particulars of message received from
                       the control.
                     </p>
                     <p className="text-sm text-gray-200">
                       In case the concerned staff is not residing near to the station, the
                       message can be relayed through CUG mobile and recorded in the register.
                     </p>
                   </div>

                   {/* Public Complaints Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <FileText className="w-5 h-5 mr-2" />
                       Public Complaints Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       This has to be available with the on duty SM, and should
                       be produced to any bonafide passenger who wants to lodge a complaint. Efforts
                       have to be taken to redress the complaint and put the passenger at ease.
                     </p>
                     <p className="text-sm text-gray-200">
                       The complaint along with remarks of the station in-charge should be sent to divisional
                       office.
                     </p>
                   </div>

                   {/* Statistical Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <TrendingUp className="w-5 h-5 mr-2" />
                       Statistical Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The in-charge of the station to fill in the particulars of tickets &
                       freight with the earnings in this register. It is maintained monthly and cumulative for
                       the financial year April to March every year.
                     </p>
                   </div>

                   {/* Establishment Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Settings className="w-5 h-5 mr-2" />
                       Establishment Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       All circulars pertaining to personnel department are to be
                       recorded here or pasted.
                     </p>
                   </div>

                   {/* Tools and Plant Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center justify-center text-center">
                       <Wrench className="w-5 h-5 mr-2" />
                       Tools and Plant (Dead Stock) Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       Particulars of all the furniture, equipment and
                       other non-perishable items issued by the administration are to be maintained in this
                       register. Whenever any new stock item is received, it has to be entered in this
                       register and when condemned to be mentioned.
                     </p>
                     <p className="text-sm text-gray-200">
                       Stock verification is done by the accounts department periodically on the basis of this register.
                     </p>
                   </div>

                   {/* Accident Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <AlertCircle className="w-5 h-5 mr-2" />
                       Accident Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       Particulars of accidents occurred at the station is mentioned in
                       this register including the action taken against the staff involved.
                     </p>
                   </div>

                   {/* Untoward Incidents Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <XCircle className="w-5 h-5 mr-2" />
                       Untoward Incidents Register
                     </h4>
                     <p className="text-sm text-gray-200 mb-4">
                       Any untoward incidents like, run over, murder, suicide,
                       death, bomb blast, agitations occurring in the station premises have to be entered in
                       this book.
                     </p>
                     <p className="text-sm text-gray-200">
                       The proper reporting of run over cases helps in dealing with spurious
                       claims for compensation against Railways.
                     </p>
                   </div>

                   {/* Station Imprest Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center">
                       <Database className="w-5 h-5 mr-2" />
                       Station Imprest Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The details of station imprest utilization must be logged in
                       this register with proper bills. This will be useful in recouping the station imprest in a
                       timely manner.
                     </p>
                   </div>

                   {/* Rake & Loco Detention Registers */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-orange-300 mb-3 flex flex-col gap-2 items-center justify-center text-center">
                       <Train className="w-5 h-5 mr-2" />
                       Rake Detention Register and Loco Detention Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       At stations where loading and
                       shunting take place, these registers are maintained with particulars regarding the
                       time of arrival/departure of rakes and locomotive along with reasons. This helps in
                       analysing and reducing detentions in the station.
                     </p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Inspection Registers */}
             <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
               <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                 <span className="bg-gradient-to-r from-teal-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                   <Shield className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                 </span>
                 Inspection Registers
               </h2>
               <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-teal-400/30">
                 <div className="space-y-6">
                   {/* Officer's Inspection Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Users className="w-5 h-5 mr-2" />
                       Officer&apos;s Inspection Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       This register is for recording the details of inspections
                       done by officers at the station. The deficiencies pointed out and the rectifying action
                       should be recorded in the register.
                     </p>
                   </div>

                   {/* Inspector's Inspection Register (Traffic) */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <BarChart3 className="w-5 h-5 mr-2" />
                       Inspector&apos;s Inspection Register (Traffic)
                     </h4>
                     <p className="text-sm text-gray-200">
                       Traffic Inspectors, after conducting regular,
                       casual or surprise inspection, mention the detailed notes in this register and append
                       their signature. Action taken by the station in-charge should be mentioned against
                       the relevant points noted in the register.
                     </p>
                   </div>

                   {/* Inspector's Inspection Register (other than Traffic) */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Settings className="w-5 h-5 mr-2" />
                       Inspector&apos;s Inspection Register (other than Traffic)
                     </h4>
                     <p className="text-sm text-gray-200">
                       Inspectors of commercial,
                       accounts and other departments, after conducting their inspection, mention notes in
                       this register and append their signature. Action taken by the station in-charge should
                       be mentioned against the relevant points noted in the register.
                     </p>
                   </div>

                   {/* SMR/SS Night Surprise Inspection Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Clock className="w-5 h-5 mr-2" />
                       SMR/SS Night Surprise Inspection Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       Wherever exclusive supervisory
                       SMR/SM in-charge is there for a station, they are required to conduct night surprise
                       inspection and write notes regarding the alertness of the staff in this register duly
                       intimating the control office.
                     </p>
                   </div>

                   {/* Cabin Inspection Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Building2 className="w-5 h-5 mr-2" />
                       Cabin Inspection Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       This register is maintained at cabins which are generally
                       away from the station master room. The deficiencies noticed have to be mentioned
                       by the inspecting official against which the action taken has to be entered by the
                       station in-charge.
                     </p>
                   </div>

                   {/* Level Crossing Gate Inspection Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Train className="w-5 h-5 mr-2" />
                       Level Crossing Gate Inspection Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       This register has to be maintained at the
                       Level Crossing gates.
                     </p>
                   </div>

                   {/* Joint Inspection of Points and Crossings Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Wrench className="w-5 h-5 mr-2" />
                       Joint Inspection of Points and Crossings Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The details of the joint inspection
                       of points and crossings conducted by P-Way inspector & Signal inspector, like the
                       readings, abnormalities found and attended are recorded in this register and signed
                       by the supervisors.
                     </p>
                   </div>

                   {/* Joint Inspection of Track Circuits Register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                       <Database className="w-5 h-5 mr-2" />
                       Joint Inspection of Track Circuits Register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The details of the joint inspection of track
                       circuits are conducted by P-Way inspector, Signal inspector & JE/TRD(OHE area),
                       like the readings, abnormalities found and attended are recorded in this register and
                       signed by the supervisors.
                     </p>
                   </div>

                   {/* Joint Inspection of OHE Bond register */}
                   <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                     <h4 className="font-semibold text-teal-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center">
                       <Shield className="w-5 h-5 mr-2" />
                       Joint Inspection of OHE Bond register
                     </h4>
                     <p className="text-sm text-gray-200">
                       The details of the joint inspection of OHE
                       bonds are conducted by P-Way inspector, Signal inspector & JE/TRD(OHE area),
                       like the readings, abnormalities found and attended are recorded in this register and
                       signed by the supervisors.
                     </p>
                   </div>
                 </div>
               </div>
             </div>

                           {/* Commercial Registers */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Commercial Registers
                </h2>
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-emerald-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed">
                    Apart from the above registers, various commercial registers like Wagon
                    demand/priority register, indent/loading register, etc. are to be maintained at the
                    station dealing in freight.
                  </p>
                </div>
              </div>

              {/* Record Preservation Periods */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <span className="bg-gradient-to-r from-violet-500 to-purple-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Record Preservation Periods
                </h2>
                <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-violet-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                    The period for which Station Operating Registers and Records are required to be
                    preserved is advised by division office. An indicative period of preservation from the
                    date of completion of various registers / records is as follows…
                  </p>

                  <div className="space-y-6">
                    {/* 1 Year Records */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-violet-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Records to be Preserved for 1 Year
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Train passing Registers/Books/Forms</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Caution order/message books</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Station Diary and charge Book</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Form of Train Examination Advices</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Spectacles Register</strong></p>
                        </div>
                      </div>
                    </div>

                    {/* 3 Years Records */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-violet-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Records to be Preserved for 3 Years
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Stabled stock/Damaged Stock Register/Sick Wagon Register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Registers pertaining to S&T other than S&T failure</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Fog signal register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Weather warning register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Control Order book/Conference book</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Guard&apos;s Duty Register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Guard&apos;s Rough Journal</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Joint inspection of Points & crossing/Track circuits/OHE bond</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Wagon Demand/Priority Register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Indent and Loading Register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Safety meeting register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Register of outward and inward letters</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Unconnected Wagon Register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Register showing Analysis of late starts to Goods Trains at important yards</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Register showing load of Goods trains and Goods trains run under load</strong></p>
                        </div>
                      </div>
                    </div>

                    {/* 6 Months Records */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-violet-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Records to be Preserved for 6 Months
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Register of Train Advices</strong></p>
                        </div>
                      </div>
                    </div>

                    {/* Permanent Records */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-violet-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Permanent Records
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>S&T failure register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>SWR assurance and other assurance register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Attendance register/Muster Roll</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Officers/Inspectors/Surprise night/Cabin/LC gates Inspection register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Accident register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Staff Bio-data/Gradation Home Addresses of staff register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Staff grievance register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Public complaints register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>General standing order book</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Establishment register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Tool & Plant (Dead stock) register</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Record of Station Equipment sent for repairs</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Register of important Circulars</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Station Order Book</strong></p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                          <p className="text-sm text-gray-200"><strong>Unusual Incident register</strong></p>
                        </div>
                      </div>
                    </div>

                    {/* Special Notes */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg py-6 lg:px-4 px-2 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-violet-300 mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Important Notes
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30 flex items-start gap-3">
                          <span className="font-serif text-xl text-yellow-300 shrink-0 bg-yellow-600/30 rounded-full w-9 h-9 flex items-center justify-center border border-yellow-200 shadow-sm">
                            i
                          </span>
                          <p className="text-sm text-yellow-200">
                            In calculating the one year or the three years period, the year to which the books
                            and documents relate, and the year in which they are to be destroyed should be
                            excluded.
                          </p>
                        </div>
                        <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/30 flex items-start gap-3">
                          <span className="font-serif text-xl text-orange-300 shrink-0 bg-orange-600/30 rounded-full w-9 h-9 flex items-center justify-center border border-orange-200 shadow-sm">
                          ii
                          </span>
                          <p className="text-sm text-orange-200">
                            Record pertaining to Court cases, departmental enquiries should not be
                            destroyed till three years from the date the case is decided.
                          </p>
                        </div>
                        <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30 flex items-start gap-3">
                          <span className="font-serif text-xl text-red-300 shrink-0 bg-red-600/30 rounded-full w-9 h-9 flex items-center justify-center border border-red-200 shadow-sm">
                            iii
                          </span>
                          <p className="text-sm text-red-200">
                            Record pertaining to public claims etc., or those under reference from Home or
                            other railways, should not be destroyed without permission from DRM
                            concerned.
                          </p>
                        </div>
                        <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30 flex items-start gap-3">
                          <span className="font-serif text-xl text-blue-300 shrink-0 bg-blue-600/30 rounded-full w-9 h-9 flex items-center justify-center border border-blue-200 shadow-sm">
                            iv
                          </span>
                          <p className="text-sm text-blue-200">
                            Each book/register when completed must be stocked in a bundle with a cover
                            showing dates of commencement and completion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts and Station Management */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300 mb-8">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <BarChart3 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Items to be Displayed at the Station
                </h2>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                    The following boards have to be made and displayed in station:
                  </p>
                  <ul className="space-y-3 pl-0 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📋</span>
                      <span className="text-gray-100">
                        <strong>Bio data of the staff</strong> mentioning the Grade, PF No, DOA, DOJ, PME/Refresher Course last attended/next due, medically fit with or without spectacles, mobile number.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🗂️</span>
                      <span className="text-gray-100">
                        <strong>Duty rosters and classification list</strong> of staff employed at station.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🏥</span>
                      <span className="text-gray-100">
                        <strong>List of nearest Doctors and Hospitals</strong> with telephone numbers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📢</span>
                      <span className="text-gray-100">
                        <strong>Notice boards</strong> for each of the trade organization.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🚒</span>
                      <span className="text-gray-100">
                        <strong>List of nearest Fire stations, Bus depots, Airports, Oil companies, etc.</strong> with telephone numbers.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">☎️</span>
                      <span className="text-gray-100">
                        <strong>List of telephone numbers</strong> of Civil, Police, Military and Railway Officials.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">⚠️</span>
                      <span className="text-gray-100">
                        <strong>Disaster Management board</strong> depicting the contact numbers & address of high officials of the district to be contacted in case of disaster.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">⛑️</span>
                      <span className="text-gray-100">
                        <strong>List of staff qualified in First Aid.</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🛤️</span>
                      <span className="text-gray-100">
                        <strong>Pit line occupation charts:</strong> Station Manager of the station shall prepare the occupation chart of each pit line available at that station, which guides the staff on the occupancy/availability of slots for maintenance in pit lines.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">🚉</span>
                      <span className="text-gray-100">
                        <strong>Platform occupation charts:</strong> Station Manager of the station shall prepare the occupation chart of each platform line of the station; it helps to know the nominated line for reception of trains and also helps in planning for the introduction of new trains.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📈</span>
                      <span className="text-gray-100">
                        <strong>Accident charts:</strong> Chart depicting the station yard and location of accidents in the yard with date & year is mentioned.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">⚡</span>
                      <span className="text-gray-100">
                        <strong>OHE charts:</strong> Chart depicting the layout of OHE and their connections at the station including isolators are mentioned.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📊</span>
                      <span className="text-gray-100">
                        <strong>Charts depicting coaching and goods statistics</strong> significant to the station.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              </div>

              {/* Correspondence */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Correspondence
                </h2>
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                    All official correspondence must be attended to by the Station Master, who shall
                    open all covers and see that all letters are replied without delay. Every outward letter
                    must be numbered, dated and must also bear reference number of the subject.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                    <h4 className="font-semibold text-green-300 mb-4 flex items-center text-center text-lg flex-col gap-2">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Correspondence Guidelines
                    </h4>
                    <ul className="space-y-4 text-gray-200 text-sm ">
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 rounded-full bg-green-500/20 text-green-300 w-7 h-7 flex items-center justify-center shadow">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span>
                          This must be adhered to in all subsequent correspondences; when replying to correspondence, reference must be made to the letter number under reply.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 rounded-full bg-green-500/20 text-green-300 w-7 h-7 flex items-center justify-center shadow">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span>
                          Letters from the public asking for information must be replied promptly.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 rounded-full bg-green-500/20 text-green-300 w-7 h-7 flex items-center justify-center shadow">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                        <span>
                          If there is any difficulty in supplying the required information, the receipt of the letter must be acknowledged and matter referred to the DRM.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="shrink-0 rounded-full bg-green-500/20 text-green-300 w-7 h-7 flex items-center justify-center shadow">
                          <CheckCircle className="w-4 h-4" /> 
                        </span>
                        <span>
                          When forwarding letters or complaints from staff working under them, Station Masters must furnish their own remarks along.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Station Imprest Cash */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <Database className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Station Imprest Cash
                </h2>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-yellow-400/30">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 mb-4">
                    <p className="text-xs text-gray-300 text-center">
                      <strong>Reference:</strong> 14/P/Vol.XV/G.III dated 01.05.2010, JPOs No S.200Mode of Distribution.97 (1/97) & MD.52/P dated 2004 of CCM/PS & FA&CAO
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-200">
                    <p><strong>Mode of Distribution:</strong> Station Manager/Station Master/Clerk In charge of the respective stations are
                    authorized to spend from the cash imprest to meet the miscellaneous & urgent
                    requirement of station like cleaning, minor repairs, stationary etc.</p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-300/20 shadow-lg">
                      <h4 className="font-semibold text-yellow-300 mb-4 flex items-center gap-2 text-center text-lg">
                        
                        Key Points:
                      </h4>
                      <ul className="flex flex-col gap-4 mt-2">
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-400/20 text-yellow-300 rounded-full min-w-7 min-h-7 flex items-center justify-center shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm leading-relaxed">
                            Individual items of expenditure should not exceed <span className="font-semibold text-yellow-200">Rs.500/-</span> per case.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-400/20 text-yellow-300 rounded-full min-w-7 min-h-7 flex items-center justify-center shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm leading-relaxed">
                            Recoupment of cash should be initiated by <span className="font-semibold text-yellow-200">SM</span> when the expenditure level reaches <span className="font-semibold text-yellow-200">50%</span> of the sanctioned imprest cash.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-400/20 text-yellow-300 rounded-full min-w-7 min-h-7 flex items-center justify-center shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm leading-relaxed">
                            Existing imprest cash can be enhanced by obtaining associate finance concurrence and sanction of competent authority.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-400/20 text-yellow-300 rounded-full min-w-7 min-h-7 flex items-center justify-center shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeOpacity="0.5" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm leading-relaxed">
                            A register is to be maintained regarding the purchase and its use.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Public Notices for Exhibition */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <AlertCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Public Notices for Exhibition
                </h2>
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-pink-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                    The following notices and publications, besides those, which may be ordered from
                    time to time, have to be exhibited at each station in conspicuous places.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40">
                          1
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Time table of arrival departure of all the trains stopping at the station.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40">
                          2
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Board showing current running of trains in the Waiting hall or at the Entrance.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40">
                          3
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Indication signage boards for various facilities and offices.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40">
                          4
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Notices regarding hours of business of Booking windows, Reservation Windows, goods, luggage and parcels – outside the respective offices.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40 border-2 border-pink-300/60">
                          5
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Notices regarding restrictions in Goods Booking
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40 border-2 border-pink-300/60">
                          6
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Notices regarding Allotment of Wagons.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40 border-2 border-pink-300/60">
                          7
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Rules regarding occupation/use of Waiting rooms – Inside the Waiting rooms.
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 border border-white/20 flex items-start gap-3">
                        <span className="flex items-center justify-center bg-pink-500 text-white font-bold rounded-full w-7 h-7 shadow-lg text-base mt-1 ring-2 ring-white/40 border-2 border-pink-300/60">
                          8
                        </span>
                        <p className="text-sm text-gray-200 flex-1">
                          Rules for the occupation/tariff of Rest houses and Rest rooms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                    <p className="text-sm text-yellow-200 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      <strong>Important:</strong> The Station Manager must be careful to see that out-dated time tables and notices
                      are removed and replaced with current ones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exhibition of Public Advertisements */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                  <span className="bg-gradient-to-r from-purple-500 to-violet-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <TrendingUp className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Exhibition of Public Advertisements
                </h2>
                <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-purple-400/30">
                  <div className="space-y-4 text-sm text-gray-200">
                    <p>In station premises, public advertisements in the form of Boards, Posters, Show
                    cases, Models, Neon signs or in any other form should be allowed to be exhibited at
                    any place only with the written permission of the competent officer of divisional
                    commercial office.</p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h4 className="font-semibold text-purple-300 mb-3 text-center">Requirements:</h4>
                      <ul className="space-y-4 pl-0">
                        <li className="flex items-start gap-3">
                          <span className="inline-flex mt-1 bg-purple-400 rounded-full p-1.5 shadow-md">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#a78bfa" />
                              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01"/>
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm">
                            <span className="font-medium text-purple-200">The Station Master</span> will maintain a register showing full particulars of each advertisement exhibited at the station in the prescribed form.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="inline-flex mt-1 bg-purple-400 rounded-full p-1.5 shadow-md">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#a78bfa" />
                              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01"/>
                            </svg>
                          </span>
                          <span className="text-gray-100 text-sm">
                            <span className="font-medium text-purple-200">Station Masters and other Railway staff</span> (including Guards and Loco pilots of any train) <span className="font-semibold text-purple-100">must not permit</span> the display of advertisement matters on Engines, Passenger Coaches and other Rolling stock unless the prior permission of the competent officer of divisional commercial office has been obtained.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prohibition and Restrictions */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <XCircle className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Prohibition and Restrictions
                </h2>
                <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-red-400/30">
                  <div className="space-y-6">
                    {/* Photography Prohibition */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-red-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <XCircle className="w-5 h-5 mr-2" />
                        Prohibition against Photography / Film shooting on Railway premises
                      </h4>
                      <p className="text-sm text-gray-200">
                        Photography/Film shooting is strictly prohibited within station limits and on the
                        Railway lines, except with the permission of the Chief Public Relations Officer
                        (CPRO) who is the nodal officer in SCR.
                      </p>
                    </div>

                    {/* Encroachments */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-red-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Encroachments within the Railway limits
                      </h4>
                      <p className="text-sm text-gray-200">
                        No structures permanent or temporary are permitted on Railway land without the
                        sanction of the General Manager. If such encroachments arise, the Station Master
                        has to promptly report to the division office.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Station Management Challenges */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-2 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                    <Building2 className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </span>
                  Station Management Challenges
                </h2>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-2 shadow-lg border border-cyan-400/30">
                  <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-6">
                    Every station based on its lay out, infrastructure, geographical location,
                    facilities offered and type of traffic handled has different areas of concerns and
                    requires different facets of management.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Passenger Terminals */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-cyan-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Users className="w-5 h-5 mr-2" />
                        Major Passenger Terminals
                      </h4>
                      <p className="text-sm text-gray-200">
                        Major passenger terminals have now become centre of the cities due to rapid urbanization. 
                        Providing additional train services and world class facilities to passengers in these terminals 
                        with existing space constraints is a challenge that requires detailed integrated planning.
                      </p>
                    </div>

                    {/* Freight Terminals */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg lg:p-6 p-3 hover:shadow-lg transition-all duration-300 border border-white/20">
                      <h4 className="font-semibold text-blue-300 mb-3 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                        <Train className="w-5 h-5 mr-2" />
                        Freight Terminals
                      </h4>
                      <p className="text-sm text-gray-200">
                        Freight terminals are now preferred to be outside city limits so that they are accessible to
                        trucks throughout 24 hours so that loading / unloading activities carry on without any
                        restrictions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg py-6 lg:px-4 px-2 border border-cyan-400/30">
                    <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center">
                      With all train running and user activities happening, stations will
                      continue to be a vital unit in operations.
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

export default OMPage20