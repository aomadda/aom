'use client'
import React from 'react'
import { Download, FileText } from 'lucide-react'

const Syllabus = () => {
  const handleDownloadNotification = () => {
    const link = document.createElement('a')
    link.href = '/AOM Notification.pdf'
    link.download = 'AOM Notification.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open('/AOM Notification.pdf', '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }
  const trafficTopics = [
    {
      title: "GENERAL",
      content: `1.	Organizational structure and hierarchy of Operating Department (Division --> Zone --> Railway Board).
`
    },
  ];

  const organizationTopics = [
    {
      title: "TRAFFIC, TRAIN AND POWER CONTROL ORGANIZATION",
      content: `1.	Blocks Management and Management during Accident 
2.	Functions of Control Organization pertaining to…
i.	Train Ordering
ii.	Punctuality
iii.	Maintenance of Operating Statistics
iv.	Wagon & Loco Stock Management
v.	Blocks Management and Management during Accident & Unusual Situations/Circumstances & Disaster Management
3.	Duties & Responsibilities of ….
i.	Chief Controllers
ii.	Deputy Chief Controllers
iii.	Sections Controllers
iv.	TNCs
v.	Recorders and their coordination with Lobbies, Station & Yards
4.	Freight Train Operations (FTO)
5.	Freight Train Ordering Principles with or without coordination with Crew Lobbies
6.	Special instructions during abnormal conditions of working & during emergencies like Cyclone, Civil Disturbances, and Accidents etc
7.	Daily Performances Reporting from (Stations/Yards/Sheds to --> Area Sub-control --> Divisional Control Office --> Zonal Control Office  --> Railway Board)
8.	Basic and important Documents/Registers maintained in Control Office and their basis.
9.	Periodical Performance Reporting and Analysis of Operating Performance along with compilation of Statistical Data.
10.	Power Control Organization (Engine and Crew Scheduling)
11.	Factors affecting Wagon & Engine utilization and methods of improvements
12.	Working pertaining to issue of Caution Orders from Nominated and Notice Stations.
13.	Liaison / Co-ordination with Control Establishments of other Departments like Engineering, Traction Control, Signalling Control, Mechanical etc.
`
    },
  ];

  const freightTopics = [
    {
      title: "FREIGHT TRAIN OPERATIONS",
      content: `1.	Functioning of Crew & Guard Lobbies.
2.	Integrated Lobbies.
3.	Crew Management: Assessment of Crew Requirement
4.	Running Room and its Management.
5.	Engine Utilization aspects requiring special attention :--
i.	Engine Crew and Train Crew Schedule.
ii.	Rules regarding Outstation, Home Station Rest etc. to ensure observation of 10 Hour Rule or Rules applicable from time to time, Role of LI and Crew Control.
iii.	Power Plan: Assessment of Loco Requirement.
iv.	Movement of Dead Locomotives.
v.	Management of Maintenance Schedule of Locomotives.
vi.	Shed and Traffic Outage of Locomotives.
vii.	Specific Fuel Consumption and Assessment of Fuel Requirement.
6.	
7.	Shunting Operations in Yards or Roadside Stations.
8.	Working of Marshalling Yards & Transhipment Points.
9.	Causes of Yard and Section Congestion and remedial strategies.
10.	All India Marshalling Order and Railway-wise Marshalling Orders - Principles and Procedures.
11.	Rules regarding Carriage of Explosive and other General Goods.
12.	Preferential Traffic Schedule, Priority within same class and ODR.
13.	Indent Allotment and Supply of Freight Stock at Stations
14.	Premium Indents and procedure to place Premium Indents
15.	Allotment of Rakes in case of Quota Restrictions.
16.	Notified Stations.
17.	Wagon Stock Management for Loading and Unloading Operations.
18.	Imposition of Operating Restrictions on Wagon Loading 
19.	Acceptance of Wagon Indents
20.	Cancellation and Withdrawal of Indents.
21.	Observance of Civil ban and Carriage of Contraband Goods etc,
22.	Important Documents & Registers maintained in Yards & at Stations.
23.	Familiarity with …..
i.	G&SR
ii.	Accident Manual
iii.	Operating Manual
iv.	Block Working Manual
v.	Red Tariff
vi.	Indian Railways Act 1989
24.	Wagon Turn Round Time (WTR) & Factors affecting Optimum Utilization of the Wagon Fleet and methods of improvement.
25.	Running of Unit Trains and formation of Captive Rakes
i.	Block Train Operations.
ii.	Nominated Day Loading.
iii.	Rationalization Scheme of movement of Freight Traffic for avoiding congestion by specific routes.
iv.	Merry-Go-Round (MGR) System.
v.	Engine on Load (EOL) System.
vi.	Mini/Two Point Multi Point Rake System.
vii.	Container Train Operation, Hub and Spoke system.
26.	Supervision and control over movement of Special type of Stock, ODC.
27.	Definition, meaning and methods of compilation of the Primary, Fundamental and Derived units.
28.	Engine Tickets and maintenance of Engine Tickets
29.	Analysis of the Operating Statistics.
30.	Important Operating Efficiency Indices, their meaning and uses of ….
i.	 WTR
ii.	NTKM
iii.	GTKM
iv.	Average Speed
29.	Operating Ratio: Different types of Expenditures and Plan Heads, Revenue Earnings and Non-Revenue Earnings.
`
    },
    
  ];

  const passengerTopics = [
    {
      title: "PASSENGER TRAINS OPERATIONS",
      content: `1.	General Principles and Methodology of Time Tabling of Passenger Trains. 
2.	Zero Based Time Tabling.
3.	Platform and Pit Occupancy Planning and Preparing Charts.
4.	Consultative Machinery for revision of Timetable at (Divisional --> Zone --> Railway Board)
5.	Publication of (Working Timetable --> Public Timetable --> Sheet Timetable)
6.	Components of WTT and PTT.
7.	Punctuality of Passenger Carrying Trains.
8.	Factors affecting Punctuality of Passenger carrying Trains and methods of improving the Punctuality, Monitoring of Asset Failures and Planning of blocks for Track, 
9.	Signal and OHE maintenance. 
10.	Corridor Blocks.
11.	Integrated Maintenance Blocks.
12.	Augmentation of Train Loads for meeting Traffic requirements, Rules of Marshalling and Slip Coaches etc.
13.	Running of Tourists Coaches, Special Carriages and Special Trains.
14.	Planning & Running of Holiday Specials, Mela Specials, Tourist Specials, etc.
15.	Introduction of new Trains, extension of Train runs, introduction of Through and Sectional Coaches.
16.	Preparation of (Engine Links + Driver/Guards Links + Rake Links)
17.	Commuter Service Operations.
18.	Vande Bharat Trains
19.	High Speed Corridors and Trains.
`
    },
    
  ];


  const trainWorkingTopics = [
    {
      title: "WORKING OF TRAINS AND G&SR",
      content: `1.	Responsibility and Function of Engine Crew before starting and while on run and during abnormal/unusual situations.
2.	Consignments.
3.	Maximum Moving Dimensions. Wagon Census.
4.	IT Applications: 
i.	Freight Operations Information System (FOIS)
ii.	Rake Management System (RMS)
iii.	Terminal Management System (TMS)
iv.	Coaching Operations Information System (COIS)
v.	Integrated Coaching Management System (ICMS)
vi.	Control Office Application (COA)
vii.	Crew Management System (CMS)
viii.	Software Aided Train Scheduling And Network Governance (SATSANG)
ix.	Realtime Train Information System (RTIS)
5.	Relevant Rules and important Policy guidelines.
6.	C&W examination for STR, Intensive, Round Trips, Premium and Close Circuit Rakes.
7.	Sickliness and TXR Repair Depots including POH & ROH Depots and their functions.
8.	Supply of Coaches/Wagons to C&W shops for POH and special repairs
9.	Cycle period of different Stocks 
10.	Workshop Feed Management.
11.	Working of Travelling Traffic Cranes for handling heavy Consignments at Intermediate Stations.
12.	Detaching of Sick Wagons at enroute Stations and their repair and clearance.
13.	Interchange transactions - Junction returns of Inter Railway Inter Change Traffic.
14.	Weighment of Rakes,  
15.	Electronic In-Motion Weighbridge,  
16.	Automatic Pre-Weighing System, 
17.	Nominated and Alternative Weighbridges, 
18.	Load Adjustment, 
19.	Exempted Commodities, 
20.	Maintenance of Weighbridges and Role of Weights and Measures Department,  
21.	Metrological Department and other Railway Departments, Integration of Weighbridge with FOIS.
22.	MIL RAIL.
23.	Permissible Axle Loads
24.	Heavy Haul and Long-Haul Operations
25.	Factors affecting Axle Load
26.	Rules regarding Heavy Haul and Long-Haul Operations.
27.	'Payload' to 'Tare' Ratio of Wagons. 
28.	Factors affecting Payload and Tare Weight.
29.	Concept of Convoy Trains.
30.	Foreign Traffic and its components pattern.
`
    },
    
  ];

  const statisticsTopics = [
    {
      title: "OPERATING STATISTICS",
      content: `1.	Responsibility and function of Guard before starting and while on run and during abnormal/unusual situations.
2.	Role & Responsibility of Station Staff in Working of Trains. 
3.	Various Systems of Working of Trains and Conditions for Granting Line Clear.
4.	Classification	of Stations
5.	Standards of Interlocking	
6.	Signalling Systems, Equipment & their working.
7.	Station Working Rules and Block Working.
8.	Level Crossings.
9.	Line Capacity, 
10.	Method of Calculating Line Capacity, Measures for augmenting it
11.	Token less working
12.	Centralized Traffic Control,
13.	Doubling, 
14.	Automatic Block, IBS / IBH, 
15.	Advanced Signalling and Interlocking.
16.	Combined Train Report, 
17.	Guard's Rough Journal Book,
18.	Vehicle Guidance, 
19.	Driver’s Ticket, 
20.	Brake Power Certificate etc.
21.	Rules regarding Marshalling of vehicles on Passenger, Mixed and Freight Trains.
22.	Air Brake Systems along with Continuity Test.
23.	Precautions to be taken on Ghat Sections.
`
    }
  ]

  const accidentTopics = [
    {
      title: "ACCIDENTS AND SAFETY ORGANIZATION",
      content: `1.	Accidents, Types and their Classification, Causes and their Prevention.
2.	Functioning of Railway Safety Organization.
3.	Chief Commissioner of Railway Safety Organization and his Functions.
4.	Rules for reporting Accidents.
5.	Accident Relief Medical Equipment (ARMEs)
6.	Accident Relief Trains (ARTs).
7.	Role & Responsibilities of various Officials and Departments during Accidents.
8.	Responsibility of the Control Organization Station Masters and Traffic Staff on the affected Section.
9.	Accidents Enquiries and DAR action against Staff held responsible for the Accidents, minimum recommended penalties in case of various Accidents.
10.	Review and Analysis of Accidents for taking Corrective Measures.
11.	Disaster Management on Indian Railways, 
12.	Disaster Management Act, 2005
13.	Disaster Management Plan
14.	Role of NDMA and NDRF.
`
    }
  ]

  const accidentsPreventionTopics = [
    {
      title: "ACCIDENTS PREVENTION",
    content: `1.	Aptitude Testing of Station Masters, Loco Pilots and Motor Men, Components of Aptitude Testing.
2.	Psycho-Technical Analysis in case of Accidents attributed to Human Failures.
3.	SPAD and its Prevention.
4.	Train Operation during Fog, Fog PASS.
5.	Improved Technological Aids to prevent Human Errors like: 
i.	Improved Signalling and Inter-locking arrangement
ii.	SM's central and inter cabin control over route
iii.	Track circuit and Axle counters
iv.	Route Relay Inter-locking
v.	Solid State Interlocking/Electronic Interlocking
vi.	Automatic Train Protection (ATP), 
vii.	KAVACH (TCAS - Train Collision Avoidance System)
viii.	WHEEL IMPACT LOAD DETECTOR (WILD)
ix.	END OF TRAIN TELEMETRY (EOTT) AND ITS FUNCTIONS.
x.	Centralised Traffic Control (CTC)
xi.	On Board Monitoring of Rolling Stock (OMRS).
6.	Refresher Courses, Safety Camps, Safety Campaigns and Safety Drives.
7.	Planning of PME and Refresher of Safety Category Staff.
`
    }
      
  ]

  const railwayPlanningTopics = [
    {
      title: "PLANNING ON THE RAILWAYS",
      content: `1.	Set Up & Functions of Planning Wing on Indian Railways
2.	Corporate Plan and Annual Plan
3.	National Rail Plan
4.	Mission 3000MT
5.	National Logistics Policy
6.	Traffic Survey.
7.	Calculation of Line Capacity.
8.	Traffic Planning and 
9.	Augmentation of Line Capacity Works.
10.	Station Redevelopment.
11.	Doubling, Bypass & Flyover Planning Works.
12.	ESP, SIP, DPR, ROR etc
13.	CONTAINER RAIL TERMINALS
14.	GATI SHAKTI TERMINALS.
15.	Minimum Essential Facilities at Goods Sheds and Stations.
`
    }
  ]

  const financialRulesTopics = [
    {
      title: "FINANCIAL RULES",
      content: `1.	Parliamentary Control over Railway Finance, Public Accountability, Cannons of Financial Propriety.
2.	Railway Budget (Budgetary terms -->  Types of Budgets -->  Budget cycle -->  Demand of Grants --> Budgetary and Financial Reviews.
3.	Rules of Allocation --> Classification of expenditure --> Control of expenditure --> Responsibility Accounting --> Performance Budgeting --> Exchequer Control --> Financial Results of Working lines.
4.	Works Programme -->  Financial justification of Works --> Surveys --> Preparation of Estimates --> Capital Budget --> Control over Capital Expenditure --> Reappropriation of Funds.
5.	Financial control over Stores Expenditure --> Purchase and Stores Keeping Procedure --> Inventory Control and ABC Analysis.
6.	Financial & Cost Control in Railway Workshops/Sheds units.
7.	Rules and procedure relating to Tenders and contracts for execution of works and Procurement of Stores, M&P Programme and RSP.
8.	Procedure for Possessing and finalizing Audit Objections and Draft Paras.
9.	Delegation of Powers.
10.	Losses, Frauds and Embezzlements.
11.	General Financial Rules
12.	Government e-Market (GeM)
13.	Classification of Railway Revenue (Earnings)
14.	Information Technology in general with specific reference to Railway's IT Applications
15.	Taxation matters with special focus on GST & Income Tax
16.	Organization of CGA and C&AG
17.	Any other topic felt necessary from time to time.
`
    }
  ]

  const establishmentRulesTopics = [
    {
      title: "ESTABLISHMENT RULES",
      content: `1.	Organization of the Personnel Department in Railways objectives functions and policies of Personnel Department.
2.	Recruitment and Training, 
3.	Classification of Services, 
4.	Recruitment in Different services,  
5.	Railway Recruitment Boards 
6.	Railway Recruitment Cells 
7.	Compassionate Ground Appointments, 
8.	Initial & In Service Training, 
9.	Refresher Courses, 
10.	Central Training Institutes, 
11.	Training Centres in Zones, Divisions & Workshops
12.	Training Modules for different posts, 
13.	Training under Apprentices Act, 
14.	Online Training, 
15.	APAR (Annual Performance Appraisal Report)
16.	General conditions of service in Railways, 
17.	Seniority, Lien, Inter Railway & Inter Division transfers, 
18.	Deputation, Promotion Policy & methods. 
19.	Selection, Suitability, Trade Tests, 
20.	Leave Rules
21.	Pass Rules
22.	Joining Time Reservation policy
23.	HOER
24.	Overtime
25.	Payment of wages
26.	Current CPC Pay Rules
27.	Advances in Railways
28.	Manpower planning, 
29.	Rightsizing & Benchmarking, 
30.	Creation, extension and surrender of posts, 
31.	Creation of posts against new assets, 
32.	Different types of posts including work charged posts.
33.	The Railway Servants (Discipline & Appeal) Rules - 1968 and related instructions. 
34.	The Railway Services (Conduct) Rules - 1966 and related instructions.
35.	Retirement benefits --> Qualifying service --> Pension --> Family pension --> Commutation gratuity, 
36.	New Pension Scheme (NPS)
37.	Staff welfare, 
38.	Staff Benefit Fund (SBF)
39.	Railway Institutes --> Railway Schools, 
40.	Ex-gratia payment --> Incentive Bonus Scheme --> Staff Grievances Redressal Mechanisms.
41.	Industrial Relations in Railways --> Recognized Trade Unions --> Industrial Disputes
42.	The Industrial Disputes Act, 1947
43.	The Industrial Relations Code, 2020
44.	The Trade Unions Act, 1926 
45.	PNM (Permanent Negotiating Machinery)
46.	PREM (Participation of Railway Employees in Management)
47.	JCM (Joint Consultative Machinery)
48.	Various Associations & Informal Meetings. 
49.	The Factories Act, 1948
50.	The Workmen's Compensation Act, 1923
51.	Functions of Labour Enforcement Officers, Right to Information Act.
`
    }
  ]

  const languageTopics = [
    {
      title: "OFFICIAL LANGUAGE",
      content: `1.	Official Language Polic
2.	Act
3.	Rules
4.	Incentive Schemes
`
    }
  ]

  const sections = [
    {
      title: "TRAFFIC (TRANSPORTATION)",
      topics: trafficTopics,
      color: "from-blue-500 to-blue-600",
      icon: "🚂"
    },
    {
      title: "TRAFFIC, TRAIN AND POWER CONTROL ORGANIZATION",
      topics: organizationTopics,
      color: "from-orange-500 to-orange-600",
      icon: "👥"
    },
    {
      title: "FREIGHT TRAIN OPERATIONS",
      topics: freightTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "PASSENGER TRAINS OPERATIONS",
      topics: passengerTopics,
      color: "from-indigo-500 to-indigo-600",
      icon: "🛤️"
    },
    {
      title: "WORKING OF TRAINS AND G&SR",
      topics: trainWorkingTopics,
      color: "from-pink-500 to-pink-600",
      icon: "🌐"
    },
    {
      title: "OPERATING STATISTICS",
      topics: statisticsTopics,
      color: "from-amber-500 to-amber-600",
      icon: "📊"
    },
    {
      title: "ACCIDENTS AND SAFETY ORGANIZATION",
      topics: accidentTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "ACCIDENTS PREVENTION",
      topics: accidentsPreventionTopics,
      color: "from-green-500 to-green-600",
      icon: "🚨"
    },
    {
      title: "PLANNING ON THE RAILWAYS",
      topics: railwayPlanningTopics,
      color: "from-yellow-500 to-yellow-600",
      icon: "📊"
    },
    {
      title: "FINANCIAL RULES",
      topics: financialRulesTopics,
      color: "from-red-500 to-red-600",
      icon: "🚨"
    },
    {
      title: "ESTABLISHMENT RULES",
      topics: establishmentRulesTopics,
      color: "from-green-500 to-green-600",
      icon: "🚨"
    },
    {
      title: "OFFICIAL LANGUAGE",
      topics: languageTopics,
      color: "from-yellow-500 to-yellow-600",
      icon: "📊"
    }
    
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto lg:px-4 px-2">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4">
            Syllabus for AOM & ACM
          </h1>
          <p className="lg:text-xl text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive syllabus for 70% Selection & 30% LDCE for promotion to Group &apos;B&apos; posts of AOM & ACM in the Traffic (Transportation and Commercial) Departments
          </p>
        </div>

        {/* Syllabus Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
              {/* Section Header */}
              <div className={`bg-linear-to-r ${section.color} lg:p-6 p-3 text-white`}>
                <div className="flex items-center flex-col gap-3 space-x-3">
                  <span className="lg:text-3xl text-2xl">{section.icon}</span>
                  <h2 className="lg:text-2xl text-xl font-bold text-center">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="lg:p-6 p-2">
                <div className="space-y-4">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="group">
                      <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md">
                        <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-blue-400">
                          {topic.title}
                        </h3>
                        <div className="space-y-2">
                          {topic.content.split('\n').filter(line => line.trim()).map((line, lineIndex) => {
                            const trimmedLine = line.trim();
                            
                            // Check if line starts with a number followed by a period
                            const numberMatch = trimmedLine.match(/^(\d+)\.\s*(.+)$/);
                            // Check if line starts with roman numerals (i., ii., iii., iv., v., vi., vii., viii., ix., x.)
                            const romanMatch = trimmedLine.match(/^([ivx]+)\.\s*(.+)$/i);
                            
                            if (numberMatch) {
                              return (
                                <div 
                                  key={lineIndex} 
                                  className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item"
                                >
                                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                                    {numberMatch[1]}
                                  </span>
                                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                                    {numberMatch[2]}
                                  </p>
                                </div>
                              );
                            } else if (romanMatch) {
                              return (
                                <div 
                                  key={lineIndex} 
                                  className="flex items-start gap-2 lg:pl-11 pl-9 lg:pr-3 pr-1 lg:py-2 py-1 ml-2 rounded-lg hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 group/subitem border-l-2 border-transparent hover:border-indigo-400"
                                >
                                  <span className="shrink-0 lg:w-6 lg:h-6 w-5 h-5 bg-linear-to-br from-indigo-400 to-purple-500 text-white rounded flex items-center justify-center font-semibold lg:text-xs text-[10px] group-hover/subitem:scale-110 group-hover/subitem:rotate-6 transition-all duration-200 shadow-sm">
                                    {romanMatch[1]}
                                  </span>
                                  <p className="text-gray-600 leading-relaxed flex-1 group-hover/subitem:text-gray-800 transition-colors duration-200 lg:text-base text-xs font-normal">
                                    {romanMatch[2]}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Criteria Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="bg-linear-to-r from-emerald-500 to-teal-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">✅</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Eligibility Criteria</h2>
            </div>
          </div>

          <div className="lg:p-6 p-2 space-y-6">
            {/* Primary Eligibility Criteria */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-emerald-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-emerald-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">1</span>
                Primary Eligibility Requirements
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    👥
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                    All <span className="font-bold text-emerald-600">Group &#39;C&#39; Ministerial staff/Non-Ministerial staff</span> working in Operating Department
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📊
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                    Level-6 of <span className="font-bold text-emerald-600">7th CPC Pay Matrix and above</span>
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    ⏰
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                    Minimum <span className="font-bold text-emerald-600">05 (five) years</span> of non-fortuitous service in the grade as on <span className="font-bold text-purple-600">01.01.2025</span>
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📜
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                    Including non-fortuitous service rendered in the corresponding pre-revised grades
                  </p>
                </div>
              </div>
            </div>

            {/* Reference Documents */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-blue-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-blue-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">2</span>
                Reference Documents
              </h3>

              <div className="bg-blue-50 border-l-4 border-blue-400 lg:p-4 p-2 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                  Railway Board&#39;s Letter No. <span className="font-bold text-blue-600">E(GP)2019/2/25 dated 27.12.2019</span>,
                  (RBE No.<span className="font-bold text-blue-600">216/2019</span>)
                </p>
              </div>
            </div>

            {/* Transfer Cases */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-purple-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-purple-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">3</span>
                Transfer Cases Consideration
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    🔄
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    In terms of Railway Board&#39;s <span className="font-bold text-purple-600">RBE No. 40/2008</span>, persons transferred on request basis to a new unit in the same category of posts
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📈
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Assigned bottom seniority therein, service from previous unit may be reckoned for eligibility
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    ⚖️
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Subject to condition that service counted does not exceed immediate senior&#39;s service in new unit
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Date */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-red-50 hover:to-orange-50 transition-all duration-300 border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-red-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-red-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">4</span>
                Eligibility Fulfillment Date
              </h3>

              <div className="bg-red-50 border-l-4 border-red-400 lg:p-4 p-2 rounded-r-lg">
                <div className="flex items-start gap-3">
                  
                  <div>
                    <p className="text-gray-700 leading-relaxed lg:text-base text-sm font-medium">
                      The eligibility conditions should have been fulfilled as on <span className="font-bold text-red-600">01.01.2025</span>
                    </p>
                    <p className="text-gray-600 leading-relaxed lg:text-sm text-xs mt-1">
                      In terms of para 6.1.1 of Master Circular No. 68
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Scheme of Selection Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="bg-linear-to-r from-indigo-500 to-purple-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">🎯</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Scheme of Selection</h2>
            </div>
          </div>

          <div className="lg:p-6 p-2 space-y-6">
            {/* Selection Process Overview */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 border border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-indigo-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-indigo-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">📋</span>
                Selection Process Overview
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-white/70 rounded-lg lg:p-4 p-2 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <span className="shrink-0 w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">A</span>
                  <span className="text-gray-700 font-medium lg:text-base text-sm">Written Examination (CBT)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 rounded-lg lg:p-4 p-2 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <span className="shrink-0 w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">B</span>
                  <span className="text-gray-700 font-medium lg:text-base text-sm">Medical Examination</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 rounded-lg lg:p-4 p-2 hover:bg-white hover:shadow-sm transition-all duration-200">
                  <span className="shrink-0 w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-sm">C</span>
                  <span className="text-gray-700 font-medium lg:text-base text-sm">Viva-voce & Record</span>
                </div>
              </div>
            </div>

            {/* A. Written Examination (CBT) */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-6 flex items-center flex-col gap-3 group-hover:text-blue-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-blue-400">
                <span className="shrink-0 w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-sm">A</span>
                Written Examination (CBT)
              </h3>

              <div className="space-y-4">
                {/* Examination Details */}
                <div className="bg-white/70 rounded-sm lg:p-4 p-2 border-l-4 border-blue-400">
                  <div className="flex items-start gap-3">
                    
                    <div>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm font-medium">
                        <span className="font-bold text-blue-600">Tentative Date:</span> 08.03.2026
                      </p>
                      <p className="text-gray-600 leading-relaxed lg:text-base text-sm mt-1">
                        Railway Board&#39;s letter No. E (GP)2022/2/4 dated 28.06.2022 & 08.07.2022
                      </p>
                    </div>
                  </div>
                </div>

                {/* Paper Format */}
                <div className="bg-white/70 rounded-lg lg:p-4 p-2 border-l-4 border-cyan-400">
                  <div className="flex items-start gap-3">
                    
                    <div>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                        <span className="font-bold text-cyan-600">Single Paper:</span> 150 marks, 175 questions (150 to attempt)
                      </p>
                      <p className="text-gray-600 leading-relaxed lg:text-base text-sm mt-1">
                        100% Objective type Multiple Choice Questions • 1 mark per question • Negative marking: 1/3rd deduction
                      </p>
                    </div>
                  </div>
                </div>

                {/* PwBD Facility */}
                <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-sm lg:p-4 p-2 border-l-4 border-amber-400">
                  <div className="flex items-start gap-3">
                    
                    <div>
                      <h4 className="font-bold text-amber-700 lg:text-base text-sm mb-2">Scribe & Compensatory Time for PwBD Employees</h4>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                        Eligible PwBD employees with writing difficulties can avail scribe facility subject to medical certificate from Railway Medical Authority (RBE No. 162/2022)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Marks Distribution Table */}
                <div className="bg-white rounded-lg lg:p-4 p-2 shadow-sm">
                  <h4 className="font-bold text-gray-800 lg:text-base text-sm mb-3 flex items-center flex-col gap-3">
                    <span className="shrink-0 w-6 h-6 bg-linear-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-semibold text-xs mr-2">📊</span>
                    Marks Distribution (150 Questions)
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full lg:text-base text-sm">
                      <thead className="bg-linear-to-r from-purple-500 to-indigo-600 text-white">
                        <tr>
                          <th className="lg:p-3 p-2 text-left font-bold">Topic</th>
                          <th className="lg:p-3 p-2 text-center font-bold">Questions</th>
                          <th className="lg:p-3 p-2 text-center font-bold">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-purple-50 hover:bg-purple-100">
                          <td className="lg:p-3 p-2 font-medium">Technical (Professional) Subject</td>
                          <td className="lg:p-3 p-2 text-center">85 (incl. 5 optional)</td>
                          <td className="lg:p-3 p-2 text-center font-bold text-purple-600">80</td>
                        </tr>
                        <tr className="bg-indigo-50 hover:bg-indigo-100">
                          <td className="lg:p-3 p-2 font-medium">General Knowledge & Official Language</td>
                          <td className="lg:p-3 p-2 text-center">55 (incl. 15 optional)</td>
                          <td className="lg:p-3 p-2 text-center font-bold text-indigo-600">40</td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="lg:p-3 p-2 font-medium">Establishment & Financial Rules</td>
                          <td className="lg:p-3 p-2 text-center">35 (incl. 5 optional)</td>
                          <td className="lg:p-3 p-2 text-center font-bold text-blue-600">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Exam Stats */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border-l-4 border-red-400 rounded-sm lg:p-4 p-2">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <p className="text-red-700 font-bold lg:text-base text-sm">Qualifying Marks: 90</p>
                        <p className="text-red-600 lg:text-base text-sm">Minimum required to qualify</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 rounded-sm lg:p-4 p-2">
                    <div className="flex items-center gap-3">
                      
                      <div>
                        <p className="text-green-700 font-bold lg:text-base text-sm">Duration: 3 Hours</p>
                        <p className="text-green-600 lg:text-base text-sm">Total examination time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B. Medical Examination */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-green-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-green-400">
                <span className="shrink-0 w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-sm">B</span>
                Medical Examination
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📈
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Employees securing <span className="font-bold text-green-600">60% or more marks</span> in CBT are shortlisted
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    👥
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Shortlisting up to <span className="font-bold text-green-600">5 times the vacancies</span> (community-wise) in order of merit
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    🏥
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Medical examination as per Railway Medical Manual for AOM/ATM Group &#39;B&#39; (Technical) post
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    ✅
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Only medically fit candidates proceed to viva-voce round
                  </p>
                </div>
              </div>
            </div>

            {/* C. Viva-voce & Record of Service */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-orange-50 hover:to-red-50 transition-all duration-300 border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-orange-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-orange-400">
                <span className="shrink-0 w-10 h-10 bg-linear-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-sm">C</span>
                Viva-voce & Record of Service
              </h3>

              <div className="bg-white rounded-lg lg:p-4 p-2 shadow-sm">
                <h4 className="font-bold text-gray-800 lg:text-base text-sm mb-3 flex items-center flex-col gap-3">
                  <span className="shrink-0 w-6 h-6 bg-linear-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-semibold text-xs mr-2">📊</span>
                  Marks Allocation (Total: 50 marks)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full lg:text-base text-sm">
                    <thead className="bg-linear-to-r from-orange-500 to-red-600 text-white">
                      <tr>
                        <th className="lg:p-3 p-2 text-left font-bold">Component</th>
                        <th className="lg:p-3 p-2 text-center font-bold">Maximum Marks</th>
                        <th className="lg:p-3 p-2 text-center font-bold">Qualifying Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-orange-50 hover:bg-orange-100">
                        <td className="lg:p-3 p-2 font-medium">Viva-voce</td>
                        <td className="lg:p-3 p-2 text-center font-bold text-orange-600">25</td>
                        <td className="lg:p-3 p-2 text-center">Part of combined 30 marks</td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-red-100">
                        <td className="lg:p-3 p-2 font-medium">Record of Service</td>
                        <td className="lg:p-3 p-2 text-center font-bold text-red-600">25</td>
                        <td className="lg:p-3 p-2 text-center font-bold text-red-600">At least 15 marks</td>
                      </tr>
                      <tr className="bg-yellow-50 hover:bg-yellow-100">
                        <td className="lg:p-3 p-2 font-bold text-gray-800">Combined Total</td>
                        <td className="lg:p-3 p-2 text-center font-bold text-yellow-600">50</td>
                        <td className="lg:p-3 p-2 text-center font-bold text-yellow-600">Minimum 30 marks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* D. Empanelment */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-purple-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-purple-400">
                <span className="shrink-0 w-10 h-10 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-3 shadow-sm">D</span>
                Empanelment Criteria
              </h3>

              <div className="space-y-3">
                <div className="bg-purple-50 border-l-4 border-purple-400 rounded-sm lg:p-4 p-2">
                  <div className="flex items-start gap-3">
                    
                    <div>
                      <p className="text-purple-700 font-bold lg:text-base text-sm mb-1">Important Note</p>
                      <p className="text-gray-700 leading-relaxed lg:text-sm text-xs">
                        Mere passing CBT does not guarantee promotion to AOM/ATM post
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    🏆
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Must secure <span className="font-bold text-purple-600">30 marks out of 50</span> in viva-voce and record of service combined
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📊
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Including at least <span className="font-bold text-purple-600">15 marks out of 25</span> in record of service
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📋
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    No grading system (outstanding, very good, etc.) • Panel drawn based on merit order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* SUBMISSION OF APPLICATIONS THROUGH HRMS SECTION */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="bg-linear-to-r from-teal-500 to-cyan-600 lg:p-6 p-3 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">📱</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Application Submission</h2>
              <p className="lg:text-lg text-base font-medium">Through HRMS Portal</p>
            </div>
          </div>

          <div className="lg:p-6 p-2 space-y-6">
            {/* Application Mode */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 border border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-teal-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-teal-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">📋</span>
                Application Mode & Instructions
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    💻
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-lg text-sm font-medium">
                    All applications for LDCE shall be submitted <span className="font-bold text-teal-600">only through HRMS portal</span>
                  </p>
                </div>

                <div className="bg-red-50 border-red-400 rounded-lg lg:p-4 p-2">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-br from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">🚫</span>
                    <div>
                      <p className="text-red-700 font-bold lg:text-base text-sm mb-1">Important</p>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                        Physical applications will <span className="font-bold text-red-600">NOT</span> be entertained
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📖
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Detailed submission instructions provided in <span className="font-bold text-teal-600">Annexure-C</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 border border-gray-200 hover:border-amber-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-amber-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-amber-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">📅</span>
                Important Dates
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-sm lg:p-4 p-2">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <p className="text-amber-700 font-bold lg:text-base text-sm">Application Deadline</p>
                      <p className="text-gray-700 lg:text-lg text-base font-bold">31.12.2025</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-sm lg:p-4 p-2">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <p className="text-blue-700 font-bold lg:text-base text-sm">Written Examination</p>
                      <p className="text-gray-700 lg:text-lg text-base font-bold">08.03.2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites & Requirements */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-purple-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-purple-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">✅</span>
                Prerequisites & Requirements
              </h3>

              <div className="space-y-4">
                {/* Community Certificate */}
                <div className="bg-purple-50 rounded-lg lg:p-4 p-2 border-purple-400">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">📄</span>
                    <div>
                      <h4 className="font-bold text-purple-700 lg:text-base text-sm mb-2">Community Certificate (Reserved Categories)</h4>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                        Check availability in employee details • Upload via ESS request if missing • Get approval before applying
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photo & Signature */}
                <div className="bg-indigo-50 rounded-lg lg:p-4 p-2 border-indigo-400">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-br from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">📸</span>
                    <div>
                      <h4 className="font-bold text-indigo-700 lg:text-base text-sm mb-2">Photo & Signature</h4>
                      <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                        Mandatory for application submission • Upload current photo and signature via ESS • Get approval before deadline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Notification */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-green-50 hover:to-emerald-50 transition-all duration-300 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-green-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-green-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">📢</span>
                Staff Notification & Publicity
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    🚶
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Staff on deputation/leave/sick serving in other Railways/Railway Board/IRCTC/CONCOR etc. must be notified
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📋
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    Officers must obtain clear acknowledgement from staff on deputation/leave/sick
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    📣
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    <span className="font-bold text-green-600">Wide publicity</span> must be given amongst all concerned staff
                  </p>
                </div>

                <div className="flex items-start gap-3 lg:p-3 p-1 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item">
                  <span className="shrink-0 lg:w-8 lg:h-8 w-7 h-7 bg-linear-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200 shadow-sm">
                    👔
                  </span>
                  <p className="text-gray-700 leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors duration-200 lg:text-base text-sm">
                    <span className="font-bold text-green-600">Personnel Officers/Controlling Officers</span> responsible for timely notification to eligible employees
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-lg lg:p-6 p-3 hover:from-red-50 hover:to-pink-50 transition-all duration-300 border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md">
              <h3 className="font-bold lg:text-xl text-lg text-gray-800 mb-4 flex items-center flex-col gap-3 group-hover:text-red-600 transition-colors duration-300 pb-3 border-b-2 border-gray-200 group-hover:border-red-400">
                <span className="shrink-0 w-8 h-8 bg-linear-to-br from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3 shadow-sm">📞</span>
                Contact Information
              </h3>

              <div className="bg-red-50 border-l-4 border-red-400 rounded-sm lg:p-4 p-2">
                <div className="flex items-start gap-3">
                  
                  <div>
                    <p className="text-red-700 font-bold lg:text-base text-sm mb-2">For Enquiries</p>
                    <div className="space-y-1">
                      <p className="text-gray-700 lg:text-sm text-xs">
                        <span className="font-bold">Phone:</span> 040-27788180 & 040-27785437
                      </p>
                      <p className="text-gray-700 lg:text-sm text-xs">
                        <span className="font-bold">Department:</span> Ch.OS/Gaz. Section/HQ
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed lg:text-xs text-[10px] mt-2">
                      Employees who have submitted applications are equally responsible to attend the written examination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    

        {/* Download Notification Section */}
        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-linear-to-r from-red-500 to-pink-600 p-6 text-white">
            <div className="flex items-center flex-col gap-3 space-x-3">
              <span className="lg:text-3xl text-2xl">📢</span>
              <h2 className="lg:text-2xl text-xl font-bold text-center uppercase">Official Notification</h2>
            </div>
          </div>
          
          <div className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-20 h-20 bg-linear-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">AOM Notification</h3>
                <p className="text-gray-600 mb-6">
                  Download the official AOM notification for complete details about the examination, 
                  eligibility criteria, and selection process.
                </p>
              </div>
              
              <button
                onClick={handleDownloadNotification}
                className="bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Syllabus