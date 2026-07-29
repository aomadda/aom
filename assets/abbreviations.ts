// Type definition for abbreviation items
type AbbreviationItem = {
    acronym: string;
    fullForm: string;
    explanation?: string;
    reference?: string;
  };
  
  export const abbreviations: Record<string, AbbreviationItem[]> = {
    A: [
      {
        acronym: "AAWS",
        fullForm: "Advanced Approach Warning System",
        explanation:
          "A system that warns drivers of an approaching train before they enter the track.",
        reference: "--",
      },
      { 
        acronym: "ACD", 
        fullForm: "Anti Collision Device",
        explanation: "A GPS-based collision avoidance system implemented earlier before KAVACH.",
        reference: "--"
      },
      { 
        acronym: "ACMS", 
        fullForm: "Additional Chief Medical Superintendent",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "ACP", 
        fullForm: "Alarm Chain Pulling",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ACPCNF", fullForm: "Alarm Chain Pulled But Culprit Not Found" },
      { acronym: "ADCR", fullForm: "Analog to Digital Converter Relay" },
      {
        acronym: "ACRS",
        fullForm: "Additional Commissioner of Railway Safety",
        explanation: "A senior authority assisting the Commissioner of Railway Safety in ensuring railway safety supervision.",
        reference: "--"
      },
      { acronym: "ACS", fullForm: "Advance Correction Slips" },
      { 
        acronym: "ADGM", 
        fullForm: "Additional Deputy General Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ADMO", fullForm: "Assistant Divisional Medical Officer" },
      {
        acronym: "ADRM",
        fullForm: "Additional Divisional Railway Manager",
        explanation: "The second highest administrative officer at divisional level who assists the DRM in managing operations.",
        reference: "--"
      },
      { 
        acronym: "ADT", 
        fullForm: "Actual Departure Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "AEB", 
        fullForm: "Automatic Emergency Braking",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "AEN", 
        fullForm: "Assistant Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "AFM", 
        fullForm: "Assistant Finance Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "AFRES", 
        fullForm: "Advanced Finance & Railway Earning & Expenditure System",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "AFTO", 
        fullForm: "Automobile Frieght Train Operators",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "AGM", 
        fullForm: "Additional General Manager",
        explanation: "An officer assisting the General Manager at zonal level in administrative and operational matters.",
        reference: "--"
      },
      { 
        acronym: "AIEHC", 
        fullForm: "All India Engine Hour Cost",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AILTC", fullForm: "All India Leave Travel Concession",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AIMS", fullForm: "Accounting Information Management System",
        explanation: "Platform for maintaining and accessing financial/accounting data.",
        reference: "--"
      },
      { acronym: "AIRF", fullForm: "All India Railwaymen’s Federation",
        explanation: "A major trade union representing Indian Railway employees",
        reference: "--"
      },
      { acronym: "AITT", fullForm: "All India Time Table",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AITUC", fullForm: "All India Trade Union Congress",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "AM",
        fullForm: "Accident Manual",
        explanation: "A manual containing detailed procedures to be followed in case of railway accidents.",
        reference: "--"
      },
      { acronym: "AMA", fullForm: "Authorised Medical Attendant",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "AMC",
        fullForm: "Annual Maintenance Contract",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AME", fullForm: "Assistant Mechanical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AOM", fullForm: "Assistant Operations Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "APAR", fullForm: "Annual Performance Appraisal Report",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "APO", fullForm: "Assistant Personnel Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ARME", fullForm: "Accident Relief Medical Equipment",
        explanation: "Medical equipment provided for accident relief operations to treat injured passengers",
        reference: "--"
      },
      { acronym: "ARMV", fullForm: "Accident Relief Medical Van",
        explanation: "A dedicated railway van equipped with medical staff and supplies used during accidents",
        reference: "--"
      },
      { acronym: "ARPAN", fullForm: "Advanced Railway Pension Access Network",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ARS", fullForm: "All Right Signal",
        explanation: "A hand/flag or lamp signal given by station staff indicating that everything is safe and clear",
        reference: "--"
      },
      { acronym: "ART", fullForm: "Accident Relief Train",
        explanation: "A special train equipped for rescue and restoration work during railway accidents",
        reference: "--"
      },
      { acronym: "ASAR", fullForm: "As Soon As Ready",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "ASD",
        fullForm: "Auto Sectioning Device",
        explanation: "Automatic switching device that maintains power continuity in OHE without human intervention.",
        reference: "--"
      },
      { acronym: "ASS", fullForm: "Automatic Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AT", fullForm: "Auxiliary Transformers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ATLC", fullForm: "Assistant Traction Loco Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ATP", fullForm: "Automatic Train Protection",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "ATR", fullForm: "Action Taken Reports",
        explanation: "Station Superintendents must submit Action Taken Reports (ATR) on observations, after taking corrective actions such as counseling or written advice to concerned departments. ATRs should be sent to SrDOMs, with a copy to the inspecting official.",
        reference: "--"
      },
      { acronym: "ATVM", fullForm: "Automatic Ticket Vending Machine",
        explanation: "Self-service kiosk for issuing unreserved tickets using smart cards or cash",
        reference: "--"
      },
      { acronym: "AWS", fullForm: "Auxillary Warning System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "AYS", fullForm: "Assistant Yard Master",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    B: [
      { acronym: "BAL", fullForm: "Brake Applied Loop",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BAS", fullForm: "Biometric Attendance System",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "BCB", fullForm: "Bell Code Button",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "BCL", 
        fullForm: "Braithwaite & Company Limited",
        explanation: "Will be added later",
        reference: "--"
       },
      { acronym: "BCM", fullForm: "Ballast Cleaning Machine",
        explanation: "The track machine which screens plain & turnout track ballast by removing muck, thus improve drainage & elasticity of track for safe & comfortable running is known as Ballast Cleaning Machine.",
        reference: "--"
      },
      
      { acronym: "BCU", fullForm: "Brake Control Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BEML", fullForm: "Bharat Earth Movers Limited",
        explanation: "Will be added later",
        reference: "--"
      },
      
      
      { acronym: "BIC", fullForm: "Bogie Isolation Cock",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BIU", fullForm: "Brake Interface Unit",
        explanation: "It is a part of Loco Kavach. It executes the brake commanded by Onboard Vital Computer automatically when Loco pilot is not controlling the speed in commensuration with permitted speed which is based on signalling information including permanent speed restrictions, gradient, braking characterstics of train.",
        reference: "--"
      },
      
      { acronym: "BLW", fullForm: "Baldwin Locomotive Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BLW", fullForm: "Banaras Locomotive Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BMBS", fullForm: "Bogie Mounted Brake System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BOBR", fullForm: "Breach Of Block Rules",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "BOL", fullForm: "Block Over Lap",
        explanation: "Will be added later",
        reference: "--"
      },
     
      { acronym: "BPAC", fullForm: "Block Proving by Axle Counter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BPC", fullForm: "Brake Power Certificate",
        explanation: "A certificate confirming the brake power adequacy of the train before departure",
        reference: "--"
      },
      { acronym: "BPSU", fullForm: "Budget Spending Unit Level",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BPT", fullForm: "Blank Paper Ticket",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "BRM", fullForm: "Ballast Regulating Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "BSCL", 
        fullForm: "Burn Standard Company Limited", 
        explanation: "Will be added later", 
        reference: "--" 
      },
      { 
        acronym: "BSDOT", 
        fullForm: "Before Schedule Departure Of Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BSLB", fullForm: "Block Section Limit Board",
        explanation: "A board indicating the limit of the block section for operational reference",
        reference: "--"
      },
      
      { acronym: "BUD", fullForm: "Basic User Data",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "BWEL", 
        fullForm: "Bharat Wagon & Engineering Limited", 
        explanation: "To manufacture Wagons and undertake structural fabrication jobs.", 
        reference: "--" 
      },
      
      { acronym: "BWM", fullForm: "Block Working Manual",
        explanation: "A manual governing the procedures of block working in Indian Railways",
        reference: "--"
      },
    ],
    C: [
      { 
        acronym: "CADAT", 
        fullForm: "Computer Aided Drivers Aptitude Test",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "CAD",
        "fullForm": "Computer Aided Design",
        "explanation": "Use of computer systems to assist in drawing and design.",
        reference: "--"
      },
      {
        acronym: "CAL",
        fullForm: "Clear Available Length",
        explanation: "The usable platform length available for receiving trains safely.",
        reference: "--"
      },
      {
        acronym: "CAMTECH",
        fullForm: "Centre for Advanced Maintenance Technology.",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CAO", fullForm: "Chief Accounts Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CAO", fullForm: "Chief Administrative Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CAO/C", fullForm: "Chief Administrative Officer/Construction",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CASM", fullForm: "Cabin Assistant Station Master",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CAT", fullForm: "Central Administrative Tribunal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CB", fullForm: "Caution Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CBC", fullForm: "Central Buffer Coupler",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CBS", fullForm: "Chief Booking Supervisor",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CBTC",
        fullForm: "Communication Based Train control Technology",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CBTC", fullForm: "Chief Ballast Train Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CC", fullForm: "Carrying Capacity",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CCAA", fullForm: "Course Completed Act Apprentices",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CCC", fullForm: "Chief Crew Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CCI", fullForm: "Container Corporation of India",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CCL",
        fullForm: "Child Care Leave",
        explanation: "Leave admissible for eligible employees for child care needs.",
        reference: "--"
      },
      { acronym: "CCM", fullForm: "Chief Commercial Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CCMS", fullForm: "Centralised Coach Monitoring System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CCO", fullForm: "Chief Claims Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CCRS",
        fullForm: "Chief Commissioner of Railway Safety",
        explanation: "The head of the Railway Safety Organization responsible for oversight of railway safety nationwide.",
        reference: "--"
      },
      { acronym: "CCS", fullForm: "Central Civil Services",
        explanation: "The Central Civil Services (Pension) Rules, 1972 (CCS Pension Rules) govern retirement benefits for central government employees under the Old Pension Scheme (OPS).",
        reference: "--"
      },
      { acronym: "CDTS", fullForm: "Control Discharge Toilet System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CDU", fullForm: "Cab Display unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CEE", fullForm: "Chief Electrical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CE", fullForm: "Couple Engine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CEA", fullForm: "Children Education Allowance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CELE", fullForm: "Chief Electrical Locomotive Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CELE", fullForm: "Coupled Electric Light Engine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CEN", fullForm: "Centralized Employment Notification",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CF", fullForm: "Capital Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CFS", fullForm: "Container Freight Station",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CFTM", fullForm: "Chief Freight Transportation Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CGA", fullForm: "Compassionate Grounds Appointment",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CGEGIS",
        fullForm: "Central Government Employee Group Insurance Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CGHS", fullForm: "Central Government Health Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CHC", fullForm: "Chief Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CHC", fullForm: "Central Hindi Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CI", fullForm: "Catution Indicator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CLAP", fullForm: "Comprehensive Logistics Action Plan",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CLCT", fullForm: "Conditional Line Clear Ticket",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CLI", fullForm: "Chief Loco Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CLW", fullForm: "Chittaranjan Locomotive Works",
        explanation: "Manufacturing unit producing electric locomotives",
        reference: "--"
      },
      { acronym: "CMD", fullForm: "Chief Medical Director",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CME", fullForm: "Chief Mechanical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CMI", fullForm: "Chief Mechanical Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CMM", fullForm: "Coaching Maintenance Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CMO", fullForm: "Cheif Medical Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CMPE", fullForm: "Chief Motive Power Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CMRL",
        fullForm: "Chennai Metro Rail Limited",
        explanation: "The metro rail authority responsible for Chennai metro operations.",
        reference: "--"
      },
      { acronym: "CMS", fullForm: "Crew Management System",
        explanation: "A computerized system for scheduling, monitoring and managing running crew",
        reference: "--"
      },
      { acronym: "CMS", fullForm: "Chief Medical Superintendent",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CNM", fullForm: "Chief Network Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CO", fullForm: "Caution Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "COA", fullForm: "Control Office Application",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "COATVM", fullForm: "Cash/Cum Coin And Smart Card Operated Ticket Vending Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "COFMOW", fullForm: "Central Organization For Modernization Of Workshop",
        explanation: "An organisation responsible for modernization of railway workshops",
        reference: "--"
      },
      { acronym: "COIS", fullForm: "Coaching Operations Information System",
        explanation: "An IT-based system used for monitoring and planning coaching train operations",
        reference: "--"
      },
      { acronym: "COM", fullForm: "Chief Operations Manager",
        explanation: "Zonal-level head responsible for operational management (often PCOM in re-designated posts)",
        reference: "--"
      },
      { acronym: "COMS", fullForm: "Complaint Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CONCOR", 
        fullForm: "Container Corporation of India Limited",
        explanation: "To develop multi-modal logistics support for India’s international and domestic containerized cargo and trade.",
        reference: "--"
      },
      { acronym: "COR", fullForm: "Control Order Register",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CORE",
        fullForm: "Central Organization for Railway Electrification",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "COS",
        fullForm: "Controller of Stores",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "COTVM", fullForm: "Currency Operated Ticket Vending Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPC", fullForm: "Central Pay Commission",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPDE", fullForm: "Chief Planning & Design Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPGO", fullForm: "Chief Public Grievance Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CPGRAMS",
        fullForm: "Centralized Public Grievance Redress And Monitoring System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPM", fullForm: "Chief Project Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPO", fullForm: "Chief Personnel Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPR", fullForm: "Cardio Pulmonary Resuscitation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPRC", fullForm: "Chief Power Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CPRO", fullForm: "Chief Public Relations Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "CPT",
        fullForm: "Computerized Printed Ticket",
        explanation: "Printed ticket generated through PRS/UTS systems.",
        reference: "--"
      },
      { acronym: "CPTM", fullForm: "Chief Passenger Transportation Manager",
        explanation: "An officer responsible for overall planning and management of passenger traffic operations",
        reference: "--"
      },
      { acronym: "CRB", fullForm: "Chairman of Railway Board",
        explanation: "The top authority and head of the Railway Board",
        reference: "--"
      },
      { acronym: "CRC", fullForm: "Consignee Receipt Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CRIS", fullForm: "Centre for Railway Information System",
        explanation: "To provide consultancy and IT services to IR as partners to conceptualize and realize technology initiatives, to build new products or services and to implement prudent business and technology strategies.",
        reference: "--"
      },
      { acronym: "CRN", fullForm: "Consignee Receipt Note",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CRRM", fullForm: "Credit from Rail Release Material",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CRS", fullForm: "Commissioner of Railway Safety",
        explanation: "An authority responsible for inspecting and approving railway safety infrastructure and operations",
        reference: "--"
      },
      { acronym: "CRSE", fullForm: "Chief Rolling Stock Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CRT", fullForm: "Container Rail Terminal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSBF", fullForm: "Central Staff Benefit Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSC", fullForm: "Central Security Commissioner",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSL", fullForm: "Clear Standing Length",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSO", fullForm: "Chief Safety Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSO", fullForm: "Central Standards Office",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSR", fullForm: "Clear Standing Room",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSR", fullForm: "Corporate Social Responsibility",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CSTE", fullForm: "Chief Signal & Telecommunication Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTARA", fullForm: "Centralized Training Academy for Railway Accounts",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTC", fullForm: "Centralized Traffic Control",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTG", fullForm: "Composite Transfer Grant",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTI", fullForm: "Centralised Training Institutes",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTLC", fullForm: "Chief Traction Loco Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTM", fullForm: "Chief Transportation Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTNC", fullForm: "Chief Train Clerk",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTNL", fullForm: "Control Telephone",
        explanation: "A telephone line used for communication between control centers and field staff",
        reference: "--"
      },
      { acronym: "CTO", fullForm: "Container Train Operators",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTPC", fullForm: "Chief Traction Power Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTPM", fullForm: "Chief Traffic Planning Manager",
        explanation: "The officer responsible for planning and optimizing traffic movements",
        reference: "--"
      },
      { acronym: "CTR", fullForm: "Combined Train Report",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTR", fullForm: "Complete Track Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTRB", fullForm: "Catridge Tapered Roller Bearings",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CTSE", fullForm: "Cashless Treatment Sceme in Emergency",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CUG", fullForm: "Closed User Group",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "CVM",
        "fullForm": "Coupon Validating Machine",
        "explanation": "Machine used for validating ticket coupons.",
        reference: "--"
      },
      { acronym: "CVO", fullForm: "Chief Vigilance Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "C&W", fullForm: "Carriage & Wagons",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CWC", fullForm: "Carriage & Wagon Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CWE", fullForm: "Chief Workshop Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CWM", fullForm: "Chief Workshop Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "CWR", fullForm: "Continuous Welded Rails",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    D: [
      {
        acronym: "DA",
        fullForm: "Dearness Allowance",
        explanation: "Allowance to offset inflation for government employees.",
        reference: "--"
      },
      { acronym: "DAC", fullForm: "Digital Axle Counter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DAO", fullForm: "Divisional Accounts Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DAR", fullForm: "Discipline & Appeal Rules",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "DCF",
        fullForm: "Discounted Cash Flow",
        explanation: "Financial method to value a project by discounting future cash flows.",
        reference: "--"
      },
      { acronym: "DCM", fullForm: "Divisional Commercial Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DCO", fullForm: "Divisional Caution Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DCOS", fullForm: "Divisional Controller Of Stores",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DCP", fullForm: "Duty Card Pass",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DCPT", fullForm: "Digital Capacity Planning Tool",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DCRG", fullForm: "Death Cum Retirement Gratuity",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DDC", fullForm: "Department Dealing Clerks",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DDU", fullForm: "Driver Display Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DEC", fullForm: "Divisional Empowered Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DEE", fullForm: "Divisional Electrical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DEMU", fullForm: "Diesel Electrical Multiple Unit",
        explanation: "Self-propelled passenger unit powered by diesel-electric transmission",
        reference: "--"
      },
      { acronym: "DEN", fullForm: "Divisional Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DF", fullForm: "Depreciation Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DF", fullForm: "Development Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DFC", fullForm: "Dedicated Freight Corridor",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "DFCCIL",
        fullForm: "Dedicated Freight Corridor Corporation of India Limited",
        explanation: "To plan and construct Dedicated Rail Freight Corridors (DFCs) for movement of freight trains on the corridors.",
        reference: "--"
      },
      { acronym: "DFM", fullForm: "Divisional Finance Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DGM", fullForm: "Deputy General Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DIU", fullForm: "Digital Indoor Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DLBI", fullForm: "Double Line Block Instrument",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DLE", fullForm: "Diesel Light Engine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DLI", fullForm: "Deposit Linked Insurance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DME", fullForm: "Divisional Mechanical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMI", fullForm: "Driver Machine Interface",
        explanation: "It is a part of Loco Kavach. DMI is a display panel in the locomotive cab that provides real-time information about the track conditions, movement authority, signal aspects, and allows Loco Pilot to acknowledge warnings or initiate emergency actions through buttons.",
        reference: "--"
      },
      { acronym: "DMM", fullForm: "Divisional Material Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMO", fullForm: "Divisional Medical Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMRC", fullForm: "Delhi Metro Rail Corporation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMS", fullForm: "Divisional Medical Superintendent",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMT", fullForm: "Departmental Material Trains",
        explanation: "A maintenance train used to carry materials for track repair and maintenance works",
        reference: "--"
      },
      { acronym: "DMTR", fullForm: "Daily Material Transaction Report",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DMU", fullForm: "Diesel Multiple Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DOLIC", fullForm: "Divisional Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DOM", fullForm: "Divisional Operating Manager",
        explanation: "The officer responsible for planning and supervision of train operations in a railway division",
        reference: "--"
      },
      { acronym: "DPC", fullForm: "Diesel Power Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPC", fullForm: "Divisional Power Control",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPCS", fullForm: "Distributed Power Control System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPIIT", fullForm: "Department for Promotion of Industry and Internal Trade",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPMF", fullForm: "Dual Phone Modulation Frequency",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPO", fullForm: "Divisional Personnel Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DPR", fullForm: "Detailed Project Report",
        explanation: "Detailed Project Report is required to be prepared for all works costing above Rs.5 Crore. DPRs are sent to Railway Board by Zonal/PSUs for appraisal and obtaining sanction of the competent authority as per the prevailing delegation of powers.",
        reference: "--"
      },
      { acronym: "DPWCS", fullForm: "Distributed Power Wireless control System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DRF", fullForm: "Depreciation Reserve Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DRM", fullForm: "Divisional Railway Manager",
        explanation: "The administrative head of a railway division overseeing all functions including operations, safety, and finance",
        reference: "--"
      },
      { acronym: "DRS", fullForm: "Deficiency Rolling Stock",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DRS", fullForm: "Departmental Review System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DRUCC",
        fullForm: "Divisional Railway Users Consultative Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DS", fullForm: "Derailing Switch",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DSC", fullForm: "Divisional Safety Commissoner",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DSC", fullForm: "Digital Signature Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DSO", fullForm: "Divisional Safety Officer",
        explanation: "he officer supervising safety measures, practices, and compliance within the division",
        reference: "--"
      },
      { acronym: "DSTE",
        fullForm: "Divisional Signal & Telecommunication Engineer",
        explanation: "The divisional head of signalling and telecommunication systems responsible for their maintenance and reliability",
        reference: "--"
      },
      { acronym: "DTI", fullForm: "Divisional Traffic Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DTTC", fullForm: "Divisional Transportation Training Center",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "DV",
        fullForm: "Distribute Valves",
        explanation: "A key component in the train brake system that regulates and distributes brake pressure.",
        reference: "--"
      },
      { acronym: "DWB", fullForm: "Divisional Wagon Balance",
        explanation: "Divisional Wagon Balance (DWB) is the total number of wagons held by the division, including the ineffective and departmental. It indicates the status of freight train operations in a division.",
        reference: "--"
      },
      { acronym: "DTWL", fullForm: "Disabled Train Warning Light ",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "DWI", fullForm: "Directorate of Wagon Interchange ",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    E: [
      { acronym: "EA", fullForm: "Extra Allowances",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EACT", fullForm: "Electronic Allotment for Congested Terminals",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EBCU", fullForm: "Electronic Brake Control Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EBD", fullForm: "Emergency Braking Distance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EBL", fullForm: "Emergency Brake Loop",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EBR", fullForm: "Extra Budgetary Resources",
        explanation: "Funds raised through borrowings instead of gross budgetary support",
        reference: "--"
      },
      { acronym: "ECA", fullForm: "Employees Compensation Act",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ECR", fullForm: "Expenditure Control Register",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "e-DAS", fullForm: "Electronic Drawing Approval System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EDD", fullForm: "Early Departure Detention",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EECH", fullForm: "Extreme Emergency Crank Handle",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EFT", fullForm: "Excess Fare Ticket",
        explanation: "Ticket issued by TTE for passengers with irregular or insufficient tickets",
        reference: "--"
      },
      { acronym: "EFT", fullForm: "Emergency Field Telephone",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EI", fullForm: "Electronic Interlocking",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EIMWB", fullForm: "Electronic In - Motion Weigh Bridge",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EIRR", fullForm: "Economic Internal Rate of Return",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "EIW",
        fullForm: "Essential Indirect Workers",
        explanation: "Support staff indirectly contributing to production/service delivery.",
        reference: "--"
      },
      { acronym: "EKM", fullForm: "Engine Kilometer",
        explanation: "Engine Kilometer (EKM) is the distance traveled by an engine in a day. It includes train kms hauled by the engine as well as distance travelled by the engine as 'light engine'.",
        reference: "--"
      },
      { acronym: "EKT", fullForm: "Electronic Key Transmitter",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "EMC",
        fullForm: "Electric Multiple Coach",
        explanation: "A self-propelled electric train set used primarily for suburban passenger services.",
        reference: "--"
      },
      { acronym: "EMD", fullForm: "Employee Master Data",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EMD", fullForm: "Electro Motive Diesel",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EMD", fullForm: "Earnest Money Deposit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EMU", fullForm: "Electrical Multiple Units",
        explanation: "A self-propelled passenger train unit powered by electricity, commonly used for suburban services",
        reference: "--"
      },
      { acronym: "ENPV", fullForm: "Economic Net Present Value",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOA", fullForm: "End Of Authority",
        explanation: "It is the location up to which the train is permitted to proceed and where the target speed is zero.",
        reference: "--"
      },
      { acronym: "EOG", fullForm: "End On Generator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOL", fullForm: "Engine On Load",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOL", fullForm: "Extra Ordinary Leave",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOQ", fullForm: "Economic Order Quantity",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOT", fullForm: "End Of Train",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EOTT", fullForm: "End of Train Telemetry",
        explanation: "It comprises of Head of train (HoT) device mounted in the locomotive and End of train (EoT) device mounted on the rear end of rearmost vehicle of the train along with other fittings and accessories complete as per this specifications. ",
        reference: "--"
      },
      { acronym: "EPB", fullForm: "Emergency Power Block",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EPS", fullForm: "E-Procurement System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "EPS", fullForm: "Employee Pension Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ESP", fullForm: "Engineering Scale Plan",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ES", fullForm: "Elementary Section",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ESI", fullForm: "Engineering Stop Indicator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ESS",
        fullForm: "Employee Self Service & Internal Applications",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "ETKM",
        "fullForm": "Equated Track Kilometers",
        "explanation": "Railway term to measure traffic density per track.",
        reference: "--"
      },
      { acronym: "ETRR", fullForm: "Electronic Transmission of Railway Receipt",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "EWSS", fullForm: "E-Working Software Solution",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    F: [
      { acronym: "FA&CAO", fullForm: "Financial Advisor & Chief Accounts Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FATO", fullForm: "Factors Affecting Train Operations",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FCT", fullForm: "Fixed Cellular Telephone",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FDR", fullForm: "Fixed Deposit Receipt",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FEMA", fullForm: "Failure Mode & Effects Analysis",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FIBA", fullForm: "Failure Indication and Brake Application",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FIFO", fullForm: "First In First Out",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FIRR", fullForm: "Financial Internal Rate of Return",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FL", fullForm: "Flasher Light",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FM", fullForm: "Fouling Mark",
        explanation: "A mark indicating the safe point beyond which a vehicle must not stand to avoid fouling another track",
        reference: "--"
      },
      { acronym: "FMVFT", fullForm: "Frequency Modulated Voice Frequency Telegraph",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FNM", fullForm: "Fort-Nightly Meetings",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FNR", fullForm: "Freight Name Record",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FOB", fullForm: "Foot Over Bridge",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FOIS", fullForm: "Freight Operations & Information System",
        explanation: "A computerized system used for monitoring and managing freight train movements and logistics",
        reference: "--"
      },
      { acronym: "FP", fullForm: "Feeding Post",
        explanation: "It is a supply control post, where the incoming feeder link from grid substation are terminated.",
        reference: "--"
      },
      { acronym: "FRED", fullForm: "Flashing Rear End Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FSD", fullForm: "Fag Safe Device",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "FSP",
        fullForm: "Fog Signal Post",
        explanation: "A post used to place detonators or fog signals to provide audible warnings in low visibility conditions.",
        reference: "--"
      },
      { acronym: "FSS", fullForm: "First Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FTCB", fullForm: "Fixed Time Corridor Block",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FTR", fullForm: "Full Tariff Rates",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "FWP", fullForm: "Final Works Program",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    G: [
      { acronym: "GAAP", fullForm: "Generally Accepted Accounting Principles",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GAGAN", fullForm: "GPS aided GEO augmented Navigation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GCT", fullForm: "Gati Shakti Multi-Modal Cargo Terminal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GDC", fullForm: "Grievance Dealing Clerk",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GDCE", fullForm: "General Departmental Competitive Exam",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GDR", fullForm: "Guard Driver Check Report",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GeM", fullForm: "Government e - Market",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GFR", fullForm: "General Financial Rules",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GIO", fullForm: "Grievance In-Charge Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GIPR", fullForm: "Great Indian Penisular Railway",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GIS", fullForm: "Group Incentive Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GM", fullForm: "General Manager",
        explanation: "Administrative head of a Zonal Railway",
        reference: "--"
      },
      { acronym: "GNSS", fullForm: "Global Navigation Satellite System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GOB", fullForm: "General Order Book",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GPF", fullForm: "General Provident Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GPRS", fullForm: "General Packet Radio Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GPS", fullForm: "Global Positioning System",
        explanation: "A satellite-based navigation system providing location and time information globally",
        reference: "--"
      },
      {
        acronym: "G&SR",
        fullForm: "General & Subsidiary Rules",
        explanation: "The core rule book governing train operation and safety across Indian Railways.",
        reference: "--"
      },
      { acronym: "GRP", fullForm: "Government Railway Police",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GRRC", fullForm: "General Rules Review Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GS", fullForm: "Ordinary Second Class",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GSCN", fullForm: "Generation Second Class Three Tier AC",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GSD", fullForm: "General Stores Department",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GSM", fullForm: "Global System for Mobile Communication",
        explanation: "A wireless communication system used for mobile phone services",
        reference: "--"
      },
      { acronym: "GST", fullForm: "Goods and Services Tax",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GTA", fullForm: "Goods Transporation Agency",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GTKM", fullForm: "Gross Tonne Kilo Meter",
        explanation: "Total train weight (including vehicles) multiplied by distance (km) run",
        reference: "--"
      },
      { acronym: "GWB", fullForm: "Goods Warning Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GWI", fullForm: "Grievance Welfare Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "GWR", fullForm: "Gate Working Rules",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    H: [
      { acronym: "HCW", fullForm: "High Capacity Wagons",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "HKT", fullForm: "Happer Key Transmitter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "HMIS", fullForm: "Hospital Management Information System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "HOER",
        fullForm: "Hours of Employment Regulations",
        explanation: "Rules regulating duty hours and rest periods for railway running and safety staff.",
        reference: "--"
      },
      { acronym: "HOG", fullForm: "Head On Generation",
        explanation: "Power supply system where the locomotive supplies electrical power to the entire train, eliminating the need for generator cars",
        reference: "--"
      },
      { acronym: "HOR", fullForm: "High Official Requisition",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "HOR", fullForm: "Hours on Road",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "HRA",
        fullForm: "House Rent Allowance",
        explanation: "Allowance to meet rental housing expenses.",
        reference: "--"
      },
      { acronym: "HRMS", fullForm: "Human Resource Management System",
        explanation: "Digital HR platform for employee records and services",
        reference: "--"
      },
      { acronym: "HSN", fullForm: "Harmonised System of Nomenclature",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "HSRC", 
        fullForm: "High Speed Rail Corporation of India", 
        explanation: "For development and implementation of high speed rail projects.", 
        reference: "--  " 
      },
      { acronym: "HVML", fullForm: "High Visibility Marker Light",
        explanation: "The marker light portion of the EoT device, flashing light to mark the End of Train (EoT).",
        reference: "--"
      },
    ],
    I: [
      { acronym: "IBH", fullForm: "Intermediate Block Hut",
        explanation: "A block station without staff, used for dividing block sections to increase line capacity",
        reference: "--"
      },
      { acronym: "IBP", fullForm: "Intermediate Block Post",
        explanation: "A staffed block post provided in a long block section to enhance capacity and reduce delays",
        reference: "--"
      },
      { acronym: "IBS", fullForm: "Intermediate Block Signalling",
        explanation: "Provision of an intermediate signal in a long block section to increase line capacity",
        reference: "--"
      },
      { acronym: "IBSS", fullForm: "Intermediate Block Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ICD", fullForm: "Inland Container Deports",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ICF", fullForm: "IIntegrated Coach Factory",
        explanation: "Chennai-based factory manufacturing passenger coaches for Indian Railways",
        reference: "--"
      },
      { acronym: "ICMS", fullForm: "Integrated Coaching Management Systems",  
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ICRTS", fullForm: "Integrated Computerized Reservation & Ticketing System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IDRT", fullForm: "Inter Divisional Request Transfer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IDS", fullForm: "Integration of Digital System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IDS", fullForm: "Inner Distant Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IFM", fullForm: "Intermediate Frequency Module",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IFMS", fullForm: "Integrated Financial Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IMMIS", fullForm: "Integrated Material Management Information System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IMR", fullForm: "Immediate Rail Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "INRWF", fullForm: "Indian National Railway Workers’ Federation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "INTUC", fullForm: "Indian National Trade Union Congress",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IOH", fullForm: "Intermediate Over Hauling",
        explanation: "Maintenance carried out on rolling stock between scheduled periodic overhauls",
        reference: "--"
      },
      { acronym: "IOL", fullForm: "Intra Ocular Lens",  
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IOP", fullForm: "Inoperatvie Piston",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IOW", fullForm: "Inspector of Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IPAS", fullForm: "Integrated Payroll and Accounting System",
        explanation: "Digital system for payroll and accounting functions in Railways",
        reference: "--"
      },
      { acronym: "IPMD", fullForm: "Infrastructure Projects Monitoring Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IPWE", fullForm: "Institution of Permanent Way Engineers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRAS", fullForm: "Indian Railway Accounts Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRATP",
        fullForm: "Indian Railway Automatic Train Protection System",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "IRCA", fullForm: "Indian Railway Conference Association",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRCON", fullForm: "Indian Railway Construction Corporation", 
        explanation: "To undertake construction activities in India and abroad on turnkey basis or otherwise in various fields of infrastructure like Railways, Bridges, Roads, Highways, Industrial and Residential Complexes, Airports, etc.", 
        reference: "--" 
      },
      {
        acronym: "IRCTC",
        fullForm: "Indian Railway Categoring & Tourism Corporation Limited",
        explanation: "To undertake catering and tourism activities of the Railways. Also facilitates internet ticketing through its website.",
        reference: "--"
      },
      { acronym: "IREC", fullForm: "Indian Railway Establishment Code",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IREM", fullForm: "Indian Railway Establishment Manual",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IREPS", fullForm: "Indian Railway Electronic Procurement System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRFC", 
        fullForm: "Indian Railway Finance corporation",
        explanation: "To raise funds from the market to part finance the Plan Outlay of IR.",
        reference: "--"
      },
      { 
        acronym: "IRCEN", 
        fullForm: "Indian Railways Institute of Civil Engineering",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRHS", fullForm: "Indian Railway Health Services",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRPFS", fullForm: "Indian Railways Protection Force Services",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRICEN", fullForm: "Indian Railways Institute of Civil Engineering",
        explanation: "The Indian Railways Institute of Civil Engineering (IRICEN), located in Pune, Maharashtra, is a premier Centralised Training Institute (CTI) dedicated to the professional development of the Indian Railway Service of Engineers (IRSE) cadre.",
        reference: "--"
      },
      { acronym: "IRIEEN", fullForm: "Indian Railways Institute of Electrical Engineering",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRIFM", fullForm: "Indian Railways Institute of Financial Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRILMM", fullForm: "Indian Railways Institute of Logistics & Materials Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRIMEE", fullForm: "Indian Railways Institute of Mechanical and Electrical Engineering",  
        explanation: "Railway mechanical and electrical specialization institute",
        reference: "--"
      },
      { acronym: "IRISET", fullForm: "Indian Railways Institute of Signal Engineering and Telecommunications",
        explanation: "Trains staff in railway signaling and telecom",
        reference: "--"
      },
      { acronym: "IRITM", fullForm: "Indian Railways Institute of Transport Management",  
        explanation: "Railway operations training institute",
        reference: "--"
      },
      { acronym: "IRLDA", fullForm: "Indian Railways Land Development Authority",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRMM", fullForm: "Indian Railway Medical Manual",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRMS", fullForm: "Indian Railway Medical Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRMS", fullForm: "Indian Railway Management Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRPS", fullForm: "Indian Railway Personnel Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRPSM", fullForm: "Indian Railway Projects & Sanctioning Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRPWM", fullForm: "Indian Railways Permanent Way Manual",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRRT", fullForm: "Inter Railway Request Transfer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSDC", fullForm: "Indian Railway Station Development Corporation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSE", fullForm: "Indian Railway Service of Engineers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSEE", fullForm: "Indian Railway Service of Electrical Engineers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSEM", fullForm: "Indian Railways Signal Engineering Manual",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSME", fullForm: "Indian Railway Service of Mechanical Engineers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSS", fullForm: "Indian Railway Stores Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRSSE", fullForm: "Indian Railway Service of Signal Engineers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRST", fullForm: "Inter Section Running Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRTMM", 
        fullForm: "Indian Railway Track Machine Manual",
        explanation: "To provide track maintenance and repair services to the Indian Railways.",
        reference: "IRTMM - 2019"
      },
      { acronym: "IRTRD", fullForm: "Implementation of Regulatory in Traction Distribution",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRTS", fullForm: "Indian Railway Traffic Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRTTCC", fullForm: "Inter Railway Time Table Co-ordination Committee",
        explanation: "The Inter Railway Time Table Co-ordination Committee (IRTTCC) is the apex national body that finalises all Time Table related decisions across Indian Railways. It is the only forum where all Zonal Railways sit together under the Railway Board’s Directorate(Coaching) to harmonize train timings across zones.",
        reference: "--"
      },
      { acronym: "IRWCMS", fullForm: "Indian Railways Works Contract Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IRWO", fullForm: "Indian Railway Welfare Organization",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ISDN", fullForm: "Integrated Service Digital Network",
        explanation: "A telecommunication network that provides digital transmission of voice, data, and video services over a single, high-speed channel. It combines the features of both ISDN and PSTN, offering faster transmission speeds and improved reliability compared to traditional analog telephone lines.",
        reference: "--"
      },
      { acronym: "ISMD", fullForm: "Infringing Standard Moving Dimensions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ISRT", fullForm: "Inter Station Running Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ITC", fullForm: "Input Tax Credit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "IVRS", fullForm: "Interactive voice response system",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    J: [
      
      { acronym: "JAG", fullForm: "Junior Administrative Grade",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "JCM", fullForm: "Joint Consultative Machinery",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "JPO", fullForm: "Joint Procedure Order",
        explanation: "A jointly issued order defining coordinated working procedures between two or more departments",
        reference: "--"
      },
      { acronym: "JRRPFA", fullForm: "Jagjivan Ram Railway Protection Force Academy",
        explanation: "The Jagjivan Ram Railway Protection Force Academy (JRRPFA), located in Lucknow, is the premier Centralised Training Institute (CTI) for the Indian Railway Protection Force Service (IRPFS). Recently recognized as an \"Ati Utkrisht\" (Excellent) accredited institution, it ranks among India's top six apex training facilities.",
        reference: "--"
      },
      { acronym: "JTBS", fullForm: "Jansadharan Ticket Booking Sewak",
        explanation: "Outlets authorized to issue unreserved journey tickets to the public",
        reference: "--"
      },
    ],
    K: [
      { acronym: "KMS",
        fullForm: "Key Management Systme",
        explanation: "Ensures secure exchange of Movement Authorities between Stationary Kavach and Onboard Kavach system.",
        reference: "--"
      },
      { acronym: "KMRCL",
        fullForm: "Kolkata Metro Rail Corporation Limited",
        explanation: "To construct and operate metro rail systems in Kolkata.",
        reference: "--"
      },
      { acronym: "KRCL", 
      fullForm: "Konkan Railway Corporation Limited",
      explanation: "To construct and operate railway lines, construct Road Over Bridges and rail line projects.",
      reference: "--"
    },
    ],
    L: [
      { acronym: "LAP", fullForm: "Leave on Average Pay",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LAN", fullForm: "Local Area Network",
        explanation: "A network that connects devices within a limited geographical area, such as a building or campus, using cables or wireless technology.",
        reference: "--"
      },
      { acronym: "LAR", fullForm: "Latest Accepted Rates",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LAW", fullForm: "List of Approved Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LDCE", fullForm: "Limited Departmental Competitive Exam",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LEO", fullForm: "Labour Enforcement Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LGS", fullForm: "Second Class Coach (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LGSLR", fullForm: "Second Class Cum Luggage and Brake Van (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LHAP", fullForm: "Leave on Half Average Pay",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LHB", fullForm: "Linke Holfmann Busch",
        explanation: "High-speed modern passenger coaches designed for improved safety, ride quality, and reduced derailment risk",
        reference: "--"
      },
      { acronym: "LI", fullForm: "Loco Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LILA", fullForm: "Learn Indian Languages through Artificial Intelligence",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LIMBS", fullForm: "Legal Information Management & Briefing System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LND", fullForm: "Leave Not Due",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LPOCIP",
        fullForm: "Loco Pilot's Operation Cum Indication Panel",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LPR", fullForm: "Leave Preparatory to Retirement",
        explanation: "A railway servant not desirous of encashment of leave on average pay at his credit at the time of retirement on superannuation may be permitted by a competent authority to take leave preparatory to retirement to the extent of leave on average pay due not exceeding 300 days together with half pay leave due subject to the conditions that such leave extends upto and includes the day preceding the date of retirement.",
        reference: "Railway Service (Liberalised Leave) Rules, 1949 (Rule 540)"
      },
      { acronym: "LRZAC", fullForm: "EOG AC Track Recording Car LHB Variant Coach",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LRDAC", fullForm: "Track Recording Staff Car LHB Variant Coach",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LSFTO", fullForm: "Liberalized Special Freight Train Operators",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LSS", fullForm: "Last Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "LTB",
        fullForm: "Load Test Bench",
        explanation: "Used for testing performance of locomotives/traction motors under controlled load conditions.",
        reference: "--"
      },
      { acronym: "LTC", fullForm: "Last Train Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LTC", fullForm: "Leave Travel Concession",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LTE", fullForm: "Long Term Evolution",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "LTM", fullForm: "Late Train Movement",
        explanation: "Every Coaching train Guard after completion of his journey is required to submit a report called LTM report.",
        reference: "--"
      },
      { acronym: "LTTC", fullForm: "Long Term Traffic Contract",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LSWP", fullForm: "Lumpsum Works Program",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LVCD", fullForm: "Last Vehicle Check Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LVI", fullForm: "Last Vehicle Indicator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWCZ", fullForm: "Non AC IInd Chair car",
        explanation: "Will be added later",
        reference: "--"
      },
  
      { acronym: "LWACCN", fullForm: "AC 3 Tier Sleeper Coach (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWACCW", fullForm: "AC 2 Tier Sleeper Coach (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LFCBAC", fullForm: "AC Hot Buffer Car (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWCB", fullForm: "Non-AC Hot Buffer Car (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWLRRM", fullForm: "Brake Luggage Cum Generator Car (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWFCZAC", fullForm: "AC Executive Chair Car (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWOGCARAC", fullForm: "EOG AC Data Acquisition and Analysis Car",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWSCN", fullForm: "Non-AC 3 Tier Sleeper Coach (LHB)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWLH", fullForm: "Leight Weight Low Height",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWIS", fullForm: "Liberalized Wagon Investment Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "LWR", fullForm: "Long Welded Rails",
        explanation: "A rail that is continuously welded for long lengths to reduce joints and improve ride quality",
        reference: "--"
      },
    ],
    M: [
      {
        acronym: "MA",
        fullForm: "Movement Authority",
        explanation: "Movement Authority' It is the distance up to which the train is permitted to travel safety",
        reference: "--"
      },
      {
        acronym: "MACPS",
        fullForm: "Modified Assured Career Progression Scheme",
        explanation: "Financial upgradation scheme when promotions are delayed.",
        reference: "--"
      },
      { acronym: "MACL", fullForm: "Multiple Aspect Color Light",
        explanation: "A colour light signalling system providing multiple aspects for improved signaling flexibility",
        reference: "--"
      },
      { acronym: "MASA", fullForm: "Multiple Aspect Signalling Arrangement",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "MAUQ",
        fullForm: "Multiple Aspect Upper Quadrant",
        explanation: "A type of semaphore signalling where the arm moves upward to indicate clear aspects.",
        reference: "--"
      },
      { acronym: "MCDO", fullForm: "Monthly Confidential Demi Official",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MDZTI", fullForm: "Multi Disciplinary Zonal Training Institute",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ME", fullForm: "Member Electrical",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MELE", fullForm: "Multiple Electric Light Engine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MEMU", fullForm: "Mainline Electrical Multiple Unit",
        explanation: "An EMU designed for semi-urban and intercity passenger services on electrified routes",
        reference: "--"
      },
      {
        acronym: "MGGFR",
        fullForm: "Minimum Guaranteed Gross Freight Revenue",
        explanation: "Will be added later",
        reference: "--"
      },
      
      { acronym: "MGR", fullForm: "Many Go Round",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MIS", fullForm: "Management Information System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MLO", fullForm: "Multiple Loco Operations",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MM", fullForm: "Member Mechanical",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MMD", fullForm: "Maximum Moving Dimensions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MMTS", fullForm: "Multi Model Transport System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MOBD", fullForm: "Member Operations & Business Development",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MOMA", fullForm: "Manually Operated Multiple Aspect",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MOR", fullForm: "Ministry of Railways",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MOSR", fullForm: "Minister of State for Railways",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MPC", fullForm: "Multiport Port Control",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MPLADS", fullForm: "Member of Parliament Local Area Development Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MPS", fullForm: "Maximum Permissible Speed",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MRSP", fullForm: "Most Restrictive Speed Profile",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MRT", fullForm: "Medical Relief Train",
        explanation: "A train equipped with doctors, staff, and medical supplies for accident relief work",
        reference: "--"
      },
      { acronym: "MRTS", fullForm: "Mass Rapid Transport System",
        explanation: "A high-capacity public transport system typically used in urban metropolitan cities",
        reference: "--"
      },
      { acronym: "MRV", fullForm: "Medical Relief Van",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MRVC", 
        fullForm: "Mumbai Railway Vikas Corporation Limited", 
        explanation: "To plan & implement rail projects in the Mumbai Metropolitan Region.", 
        reference: "--" 
      },
      { acronym: "MSASS", fullForm: "Modified Semi Automatic Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MSoP", fullForm: "Model Schedule of Powers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MSS", fullForm: "Manual Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MSD", fullForm: "Minimum sighting Distance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MSDAC", fullForm: "Multi Section Digital Axle Counter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MTRC", fullForm: "Mobile Train Radio Communication",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MTI", fullForm: "Material Train Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "MTRS", fullForm: "Member Traction Rolling Stock",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    N: [
      { acronym: "NAIR", fullForm: "National Academy of Indian Railway",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NCDRC", fullForm: "National Consumer Dispute Redressal Commission",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NCRTC", fullForm: "National Capital Region Transport Corporation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NDMA", fullForm: "National Disaster Management Authority",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NDRF", fullForm: "National Disaster Response Force",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NFIR", fullForm: "National Federation of Indian Railwaymen",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NHSRCL", fullForm: "National High Speed Rail Corporation of India Limited",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NIP", fullForm: "Notice of Imposition Penalty",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NIT", fullForm: "Notice Inviting Tender",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NLP", fullForm: "National Logistics Policy",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NMG", fullForm: "Newly Modified Goods",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NMS", fullForm: "Network Monitoring System",
        explanation: "Logs train movements, inputs, and fault messages. It automatically alerts the fault teams to address issues.",
        reference: "--"
      },
      { acronym: "NP", fullForm: "Non-Pooled",
        explanation: "Wagons not contributed to the general pool of wagons are marked as Non-Pooled Wagons (&apos;NP&apos;). These are usually some special-purpose high-capacity wagons earmarked for specific operations on particular routes.",
        reference: "--"
      },
      { acronym: "NPA", fullForm: "Non-Practicing Allowance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NPG", fullForm: "Network Planning Group",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NPS", fullForm: "National Pension System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "NPV",
        fullForm: "Net Present Value",
        explanation: "Present value of future cash inflows minus the initial investment.",
        reference: "--"
      },
      
      { acronym: "NRP", fullForm: "National Rail Plan",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NRT", fullForm: "Normal Running Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NRTI", fullForm: "National Rail and Transportation Institute",
        explanation: "The National Rail and Transportation Institute (NRTI), established in 2018 in Vadodara, Gujarat, was India's first university dedicated to transportation and logistics. As of December 2022, the institute was upgraded and renamed Gati Shakti Vishwavidyalaya (GSV), transitioning from a 'deemed to be' university to a full-fledged Central University.",
        reference: "--"
      },
      { acronym: "NRUCC", fullForm: "National Railway Users Consultative Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "NTES", fullForm: "National Train Enquiry System",
        explanation: "The official platform for real-time train running information and passenger updates",
        reference: "--"
      },
      { acronym: "NTKM", fullForm: "Net Tonne Kilo Meter",
        explanation: "Freight load (tonnes) multiplied by distance (km) actually carried",
        reference: "--"
      },
      { acronym: "NTPC", fullForm: "Non-Technical Popular Category",
        explanation: "Freight load (tonnes) multiplied by distance (km) actually carried",
        reference: "--"
      },
    ],
    O: [
      { acronym: "OBC", fullForm: "Over Bulky Consignment",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OCC", fullForm: "Operational Control Center ",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OCMS", fullForm: "Online Computerized Monitoring System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OCR", fullForm: "Optical Character Recognition",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OCS", fullForm: "Officer-in-Charge Site",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OCV", 
        fullForm: "Other Coaching Vehicle",
        explanation: "These vehicles do not have a passenger carrying portion but are planned to be attached to coaching trains for providing other facilities. Saloons, inspection cars, medical cars, tourist cars, parcels & horse van, composite luggage Power Cars, Pantry Cars & brake van are some of the OCVs.",
        reference: "--"
      },
      { acronym: "ODC", fullForm: "Over Dimensional Consignment",
        explanation: "Consignments, which when loaded upon a wagon, would infringe the maximum standard moving dimension, at any point, on the entire route, from the booking station to the destination, including via break of gauge is called an Over Dimensional Consignment (ODC).",
        reference: "--"
      },
      { acronym: "ODR", fullForm: "Oldest Date of Registration",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ODU", fullForm: "Out Door Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OEM", fullForm: "Other End Maintenance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OFC", fullForm: "Optical Fibre Cable",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OHE", fullForm: "Over Head Equipment",
        explanation: "Electrical equipment installed above railway tracks to supply power to electric locomotives",
        reference: "--"
      },
      { acronym: "OLIC", fullForm: "Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OM", fullForm: "Operating Manual",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OMRS", fullForm: "On Board Monitoring of Rolling Stock",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ONDC", fullForm: "Open Network for Digital Commerce",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OPS", fullForm: "Old Pension Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OOT", fullForm: "Out Of Turn",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OTL", fullForm: "One Time Lock",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OTOS", fullForm: "One Train Only System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "OYWS", fullForm: "Own Your Wagon Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    P: [
      { acronym: "PAC", fullForm: "Passenger Amenities Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PAC", fullForm: "Proprietary Article Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PAD", fullForm: "Post Arrival Detention",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PAM", fullForm: "Punctuality Analysis & Monitoring",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PAS", fullForm: "Public Announcement System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCC", fullForm: "Permissible Carrying Capacity",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCCM", fullForm: "Principal Chief Commercial Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCDO", fullForm: "Periodical Confidential Demi Official",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCDR", fullForm: "Personal Cash Declaration Register",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCEE", fullForm: "Principal Chief Electrical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCE", fullForm: "Principal Chief Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCEV", fullForm: "Percentage Charge on Excessive Value",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCMD", fullForm: "Principal Chief Medical Director",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCME", fullForm: "Principal Chief Mechanical Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCMM", fullForm: "Principal Chief Materials Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCOL", fullForm: "Parliamentary Committee on Official Language",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCOM", fullForm: "Principal Chief Operations Manager",
        explanation: "The head of operations at zonal level responsible for overall train movement planning and control",
        reference: "--"
      },
      { acronym: "PCO", fullForm: "Private Container Operator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCOR", fullForm: "Power Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCPO", fullForm: "Principal Chief Personnel Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCSC", fullForm: "Principal Chief Security Commissioner",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCSO", fullForm: "Principal Chief Safety Officer",
        explanation: "The zonal head responsible for safety monitoring and compliance",
        reference: "--"
      },
      { acronym: "PFRDA", fullForm: "Pension Fund Regulatory and Development Authority",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCS", fullForm: "Prestressed Concrete Sleepers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCSTE",
        fullForm: "Principal Chief Signal and Telecommunication Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PCVO", fullForm: "Principal Chief Vigilance Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PDD", fullForm: "Pre Departure Detention",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PDT", fullForm: "Pre Departure Time",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PEASD", fullForm: "Passenger Emergency Alarm Signal Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PED", fullForm: "Principal Executive Director",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PES", fullForm: "Power Earth Station",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PETS", fullForm: "Premilinary Engineering cum Traffic Survey",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PFA", fullForm: "Principal Financial Advisor",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PFT", fullForm: "Private Freight Terminals",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PFT", fullForm: "Portable Field Telephone",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PFM", fullForm: "Public Financial Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PG", fullForm: "Performance Guarantee",
        explanation: "Related to Tenders",
        reference: "--"
      },
      { acronym: "PGC", fullForm: "Passenger Gaurd Course",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PGRM", fullForm: "Public Grievance Redressal Machinery",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PGS", fullForm: "Pilot Guard System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PHC", fullForm: "Primary Health Center",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PHS", fullForm: "Proceed Hand Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PHOD", fullForm: "Principal Head of Department",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PI", fullForm: "Panel Interlocking",
        explanation: "It is modern signalling system provided at station where points and signals are operated from centrally located panels by mean of push buttons or knobs",
        reference: "--"
      },
      { acronym: "PIA", fullForm: "Project Influence Area",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PIA", fullForm: "Pass Issuing Authority",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PIO", fullForm: "Public Information Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PKM", fullForm: "Passenger Kilometers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PLB", fullForm: "Productivity Linked Bonus",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PLCT", fullForm: "Paper Line Clear Ticket",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PLPM", fullForm: "Pay Level in Pay Matrix",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PME", fullForm: "Periodic Medical Examination",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PME", fullForm: "Periodical Monitoring Examination",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PMS", fullForm: "Passenger Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PNM", fullForm: "Permanent Negotiating Machinery",
        explanation: "System for structured dialogue between staff unions and administration",
        reference: "--"
      },
      { acronym: "PNR", fullForm: "Passenger Name record",
        explanation: "Travel booking reference used in passenger reservation systems. It is a unique alphanumeric code (10 characters) assigned to each passenger reservation, used for tracking, managing, and canceling bookings.",
        reference: "--"
      },
      { acronym: "POET", fullForm: "Passenger Operated Enquiry Terminal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "POH", fullForm: "Periodical Over Hauling",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "POL", fullForm: "Petroleum Oil Lubricants",
        explanation: "Major scheduled maintenance of rolling stock at specified intervals",
        reference: "--"
      },
      { acronym: "POL", fullForm: "Power On Line",
        explanation: "",
        reference: "--"
      },
      { acronym: "POMKA", fullForm: "Portable Medical Kit for Accidents",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "POS", fullForm: "Point of Sale",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PPAN", fullForm: "Permanent Pension Account Number",
        explanation: "The PPAN (Permanent Pension Account Number) for NPS subscribers, typically used for government employees, consists of 16 digits. This number is allotted by the concerned Pay and Accounts Office (PAO) or DDO, with the first four digits often indicating the calendar year of joining government service.",
        reference: "--"
      },
      { acronym: "PPO", fullForm: "Pension Payment Order",
        explanation: "A Pension Payment Order (PPO) number consists of 2 digits. This unique number acts as a permanent identifier for all pension-related transactions and communications under the Employee Pension Scheme (EPS).",
        reference: "--"
      },
      { acronym: "PQ", fullForm: "Promotional Quota",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PQRS", fullForm: "Plasser Quick Relaying System",
        explanation: "The track machine which is a semi mechanized system of track renewal wherein pre fabricated rail panels are laid and existing panels removed with minimum labour is known as Plasser Quick Relaying System.",
        reference: "--"
      },
      { acronym: "PR", fullForm: "Periodical Rest",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PRAN", fullForm: "Permanent Retirement Account Number",
        explanation: "The PRAN (Permanent Retirement Account Number) for NPS subscribers, typically used for government employees, consists of 12 digits. This unique, permanent number is assigned to each subscriber upon registration and remains valid throughout their lifetime, regardless of changes in employment or location, acting as the primary identifier for all account transactions.",
        reference: "--"
      },
      { acronym: "PRCP", fullForm: "Post Retirement Complimentary Passes",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PREM", fullForm: "Participation of Railway Employees in Management",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PRO", fullForm: "Public Relations Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PRS", fullForm: "Passenger Reservation System",
        explanation: "System used for railway seat/berth booking",
        reference: "--"
      },
      { acronym: "PSC", fullForm: "Pre Stressed Concrete Sleepers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PSR", fullForm: "Permanent Speed Restrictions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PSSA", fullForm: "Project Supervisors Services Agencies",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PTO", fullForm: "Preferential Traffic Order",
        explanation: "No undue preference should be given to any individual or commodity in allotment of wagons (Section 70 of the Indian Railways Act 1989).",
        reference: "--"
      },
      { acronym: "PTO", fullForm: "Previlege Ticket Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PTS", fullForm: "Preferential Time Schedule",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PTT", fullForm: "Public Time Table",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PTVM", fullForm: "Platform Ticket Vending Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PVC", fullForm: "Price Variation Cause",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PVIS", fullForm: "Photographic Vehicle Identification System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PWB", fullForm: "Parcel Way Bills",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PWB", fullForm: "Passenger Warning Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "PwBD", fullForm: "Persons with Benchmark Disabilities",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "PWD",
        "fullForm": "Public Works Department",
        "explanation": "Government body responsible for infrastructure works.",
        reference: "--"
      },
      { acronym: "PWI", fullForm: "Permanent Way Inspector",
        explanation: "The supervisor responsible for maintenance and safety of railway track and structures",
        reference: "--"
      },
      { acronym: "PWP", fullForm: "Preliminary Works Program",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    Q: [
      { acronym: "QCBS", fullForm: "Quality and Cost Based Selection",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "QRT", fullForm: "Quick Response Team",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    R: [
      { acronym: "RA", fullForm: "Inspection Carriage (Administration)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RAC", fullForm: "Reservation Against Cancellation",
        explanation: "Railway ticket status ensuring travel but conditional berth",
        reference: "--"
      },
      {
        acronym: "RAR",
        fullForm: "Railway Accounting Rules",
        explanation: "Rules that govern accounting procedures on Indian Railways.",
        reference: "--"
      },
      { acronym: "RARV", fullForm: "Road Accident Restoration Vehicles",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RAS", fullForm: "Rake Allocation System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RB", fullForm: "Inspection Carriage (Divisional Officers)",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RBPC", fullForm: "Round Trip Brake Power Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RCC", fullForm: "Railway Convention Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "RCF",
        fullForm: "Rail Coach Factory",
        explanation: "Kapurthala-based factory producing modern passenger coaches.",
        reference: "--"
      },
      { acronym: "RBS", fullForm: "Rates Branch System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RBE", fullForm: "Railway Board Establishment",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RCIL", 
        fullForm: "RailTel Corporation of India Limited", 
        explanation: "To utilize the surplus telecom capacity and right of way available with the IR to build nationwide optical fibre cable based broadband telecom and multimedia network", 
        reference: "--" 
      },
      { acronym: "RCM", fullForm: "Reverse Charge Mechanism",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RCP", fullForm: "Residental Card Pass",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RCT", fullForm: "Railway Claims Tribunal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RDM", fullForm: "Rescue Drive Mode",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "RDS", 
        fullForm: "Rolling Deposit Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "RDSO",
        "fullForm": "Research Designs & Standards Organisation",
        "explanation": "The R&D wing of Indian Railways responsible for developing and standardizing designs and systems.",
        reference: "--"
      },
      { acronym: "RDW", fullForm: "Rail Dolly Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "REMMLOT", fullForm: "Remote Monitoring and Management of Locomotives and Trains",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RESS", fullForm: "Railway Employee Self Service",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RELHS", fullForm: "Retired Employees Liberalized Health Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RETS", fullForm: "Reconnaissance Engineering cum Traffic Survey",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RFID", fullForm: "Radio Frequency Identification",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RFMS", fullForm: "Referential File Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RH", fullForm: "Railway Hospital Van",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "RIDE", 
        fullForm: "Rail Infrastructure Development Corporation",
        explanation: "Will be added later",
        reference: "--"
       },
      { acronym: "RITES", fullForm: "Rail India Technical and Economic Services Limited", explanation: "To design, establish, provide, operate, maintain and perform engineering, technical and consultancy services for development of projects/systems of all types and descriptions pertaining to Railways and other Sectors/Industries in India and outside India.", reference: "--" },
      { 
        acronym: "RIU", 
        fullForm: "Remote Interface Unit",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "RKMS", fullForm: "Route Kilometers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RLDA", 
        fullForm: "Railway Land Development Authority",
        explanation: "To develop vacant railway land for commercial use for the purpose of generating revenue by non-tariff measures for IR.",
        reference: "--"
      },
      { acronym: "RLC", fullForm: "Regional Labour Commissioner",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RLT", fullForm: "Railway Labour Tribunal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RM", fullForm: "Railway Motor Van",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RMC", fullForm: "Railway Material Consignment",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RMP", fullForm: "Registered Medical Practitioner",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RMS", fullForm: "Rake Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "ROB",
        "fullForm": "Road Over Bridge",
        "explanation": "A bridge allowing a road to pass over railway tracks, removing level crossing conflicts.",
        reference: "--"
      },
      { acronym: "ROH", fullForm: "Routine Over Hauling",
        explanation: "Scheduled maintenance of rolling stock done periodically to ensure reliability",
        reference: "--"
      },
      { acronym: "RORO", fullForm: "Roll On Roll Off",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ROSHAN", fullForm: "Rolling Stock Health Analyst",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RPF", fullForm: "Railway Protection Force",
        explanation: "Security organization protecting railway passengers and property",
        reference: "--"
      },
      { acronym: "RPSF", fullForm: "Railway Protection Special Force",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "RR", 
        fullForm: "Railway Reciept",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RRB", fullForm: "Railway Recruitment Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RRC", fullForm: "Railway Recruitment Cell",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RRCB", fullForm: "Railway Recruitment Control Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RRI", fullForm: "Route Relay Interlocking",
        explanation: "A relay-based interlocking system enabling safe control of signals and points",
        reference: "--"
      },
      { acronym: "RRSK", fullForm: "Rashtriya Rail Sanraksha Kosh",
        explanation: "Dedicated fund for safety-related works on Indian Railways",
        reference: "--"
      },
      { acronym: "RRT", fullForm: "Railway Rates Tribunal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RRTS", fullForm: "Regional Rapid Transit System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSC", fullForm: "Rolling Stock Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSC", fullForm: "Railway Staff College",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSF", fullForm: "Railway Safety Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSHC", fullForm: "RPF Security Helpline",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSP", fullForm: "Rolling Stock Programme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSPB", fullForm: "Railway Safety Promotion Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSIS", fullForm: "Rolling Stock Inspection System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSMS", fullForm: "RPF Security Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RSS", fullForm: "Reception Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RTIS", fullForm: "Realtime Train Information System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RTRC", fullForm: "Railway Testing & Research Centre",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RTT", fullForm: "Round Trip Tariff",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "RUB", fullForm: "Rail Under Bridge",
        explanation: "A bridge allowing railway tracks to pass underneath a road",
        reference: "--"
      },
      { acronym: "RVNL", 
        fullForm: "Rail Vikas Nigam Limited",
        explanation: "To create and augment the capacity of rail infrastructure. To mobilize resources mainly through multilateral/bilateral funding agencies and also through domestic market for successful implementation of projects.",
        reference: "--"
      },
      { acronym: "RZ", fullForm: "Track Recorder Car",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    S: [
      
      { acronym: "SAG", fullForm: "Senior Administrative Grade",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SAMPRATI",
        fullForm:
          "Status Alerts in Monitoring Projects Related Actions & Targets Importance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SASS", fullForm: "Semi Automatic Stop Signal",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SATSANG",
        fullForm: "Software Aided Train Scheduling And Network Governance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SB", fullForm: "Stop Board",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SBAS", fullForm: "Satellite-Based Augmentation System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SBCM", fullForm: "Shoulder Blast Clearing Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SBU", fullForm: "Signal & Brake Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SBU", fullForm: "Sense & Brake Unit",
        explanation: "It is part of EoT.It is capable of determine status of Brake pipe pressure",
        reference: "--"
      },
      {
        acronym: "SCADA",
        fullForm: "Supervisory Control And Data Acquisition",
        explanation: "Real-time electrical traction power monitoring and remote control system for OHE supply.",
        reference: "--"
      },
      { acronym: "SCO", fullForm: "Sectional Caution Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SCOR", fullForm: "Senior Control Office Representative",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SCRA", fullForm: "Special Class Railway Apprentices",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SCRES", fullForm: "South Central Railway Employees Sangh",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SCRMU", fullForm: "South Central Railway Mazdoor Union",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SDGM", fullForm: "Senior Deputy General Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SDIR", fullForm: "Stop Dead If Required",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "SEJ",
        "fullForm": "Switch Expansion Joint",
        "explanation": "A track joint that allows rails to expand and contract during temperature variation.",
        reference: "--"
      },
      { acronym: "SFOORTI", fullForm: "Smart Freight Operation Optimisation and Real Time Information",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SFTO", fullForm: "Special Freight Train Operator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SG", fullForm: "Self Generated",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SGF", fullForm: "Sovereign Green Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SGSLRD", fullForm: "Self Generated",
        explanation: "Second class, Luggage & Brake van with disabled compartment",
        reference: "--"
      },
      { acronym: "SHINE", fullForm: "Sexual Harassment Incident Notification for Empowerment of Female Employees",
        explanation: "Indian Railways launched the SHINE app for women employees safety and security. Allows confidential reporting of workplace harassment via the HRMS app.",
        reference: "--"
      },
      { acronym: "SI", fullForm: "Special Instructions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SI", fullForm: "Speed Indicator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SIL", fullForm: "Safety Integrity Level",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "SIMRAN", fullForm: "Satellite Imaging for Rail Navigation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SIMS", fullForm: "Safety Information Management System.",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SIP", fullForm: "Signal Interlocking Plan",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SLB", fullForm: "Shunting Limit Board",
        explanation: "A board indicating the maximum limit up to which shunting movements are allowed",
        reference: "--"
      },
      { acronym: "SLI", fullForm: "Senior Loco Inspector",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SLO", fullForm: "Specific Loading Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SLR", fullForm: "Second Class Luggage & Brake Van",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SLRD", fullForm: "Second Class Luggage, Brake Van & Disabled",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SM", fullForm: "Station Master",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SMD", fullForm: "Standard Moving Dimensions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SMART", fullForm: "Specially Modified Asthetic Refreshing Travel",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SMARTS",
        fullForm: "Singular Modular Advance Railway Ticketing System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SMOCIP",
        fullForm: "Station Master Operation Cum Identification Panel",
        explanation: "SMOCIP is a part of Station Kavach. It is a display unit provided to the Station Master. It is placed in SM Office. It is operated by Station Master as and when necessary, like manual SOS generation etc.",
        reference: "--"
      },
      { acronym: "SNR", fullForm: "Signanl Normal Relay",
        explanation: "In the Podanur push button block instrument, the indicator which is an aid to the Station Master to verify if all relevant controls, levers/knobs, signals etc., are normal is called SNR.",
        reference: "--"
      },
      { acronym: "SOB", fullForm: "Standing Order Book",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOD", fullForm: "Schedule Of Dimensions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOL", fullForm: "Signal Over Lap",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOLIC", fullForm: "Station Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOP", fullForm: "Schedule Of Powers",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOP", fullForm: "Standard Operating Procedure",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SORC", fullForm: "Summary of Other Railway Circulars",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SOS", fullForm: "Save Our Souls",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "SP", fullForm: "Sectioning and Paralleling Post",
        explanation: "These posts are situated approximately midway between feeding posts marking the demarcating point of two zones fed from different phases a 'paralleling interrupter' is provided at each 'SP' to parallel the OHE of the up and down tracks of a double track section, 'bridging interrupters' are also provided to permit one feeding post to feed beyond the sectioning post upto the next FP if its 25 kV supply is interrupted for some reasons. ",
        reference: "--"
      },
      { acronym: "SPAD", fullForm: "Signal Passing At Danger",
        explanation: "A serious operational violation where a train passes a stop signal at danger",
        reference: "--"
      },
      {
        acronym: "SPARME",
        fullForm: "Self Profelled Accident Relief Medical Equipment",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SPARROW",
        fullForm: "Smart Performance Appraisal Report Recording Online Window",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SPART", fullForm: "Self Profelled Accident Relief Trains",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SPASHT",
        fullForm: "Safe Practices Avoiding Shortcut Methods in Train Operations",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SPI", fullForm: "Shunting Permitted Indicator",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SPO", fullForm: "Senior Personnel Officer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SPT", fullForm: "Signal Post Telephone",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SPTM", fullForm: "Self Printing Ticket Machines",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SPURT",
        fullForm: "Self Profelled Ultrasonic Rail Testing Car",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "SPW",
        fullForm: "Special Purpose Wagons",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SR", fullForm: "Subsidiary Rules",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SRIJAN", fullForm: "Station Rejuvenation Initiative through Joint Action",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SRSB", fullForm: "Swachh Rail Swachh Bharat",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SRSF", fullForm: "Special Railway Safety Fund",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SS", fullForm: "Sub Sectioning Post",
        explanation: "These are provided only occasionally. They are similar to SSPs with provision for sectioning of the OHE but not paralleling.",
        reference: "--"
      },
      {
        acronym: "SSBPAC",
        fullForm: "Solid State Block Proving by Axle Counter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SSD", fullForm: "Speed Sensing Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SSDAC", fullForm: "Single section Digital axle counter",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SSE", fullForm: "Senior Section Engineer",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SSI", fullForm: "Solid State Interlocking",
        explanation: "A modern microprocessor-based interlocking system used for safe control of points and signals",
        reference: "--"
      },
      { acronym: "SSP", fullForm: "Sub Sectioning & Paralleling Post",
        explanation: "One or more SSPs are provided between each FP and adjacent SP depending upon the distance between them. In a double track section, normally three interrupters are provided at each SSP i.e. two connecting the adjacent sub-sectors of up and down tracks.",
        reference: "--"
      },
      { acronym: "STA", fullForm: "Senior Technical Assistant",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "STBA", fullForm: "Station Ticket Booking Agent",
        explanation: "Authorized local agent engaged for ticket booking at stations",
        reference: "--"
      },
      { acronym: "STM", fullForm: "Senior Transportation Manager",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "STR", fullForm: "Safety To Run",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "STRI", fullForm: "Stensile Type Route Indication",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "STS", fullForm: "Station to Station Rates",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "STT", fullForm: "Sheet Time Table",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SVK", fullForm: "Stationary Vital Kavach",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "SWB", fullForm: "Signal Warning Board",
        explanation: "Signal Warning Board is used when double distant signal is not provided and it is placed in 1400 metres distance in rear of Stop signal.",
        reference: "--"
      },
      { acronym: "SWR", fullForm: "Station Working Rules",
        explanation: "A station-specific document describing procedures for safe and efficient train working",
        reference: "--"
      },
      { acronym: "SWRD", fullForm: "Station Working Rule Diagram",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "SYLR", fullForm: "Second Class Ladies, Luggage & Brake Van",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    T: [
      { acronym: "TAAG", fullForm: "Trains At A Glance",
        explanation: "Trains At A Glance (TAAG) is the All-India Public Time Table of Indian Railways. It is the most authoritative national publication for all long distance train timings, routes, days of run, classes, distance tables, and passenger information across Indian Railways.",
        reference: "--"
      },
      { acronym: "TACL", fullForm: "Two Aspect Colour Light",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "TACLS",
        fullForm: "Train Actuated Control Level Crossing System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TALQ", fullForm: "Two Aspect Lower Quadrant",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TAMS", fullForm: "Traffic Accounts Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TASA", fullForm: "Two Aspect Signalling Arrangement",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TAST", fullForm: "Two Aspect Signalling Territory",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TAWD", fullForm: "Train Actuated Warning Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TBR", fullForm: "Through Ballast Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TBTR", fullForm: "Through Bridge Timber Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TCAS", fullForm: "Train Collision Avoidance System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TCC", fullForm: "Travelling Cash Chest",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TCMS", fullForm: "Train Control & Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "TD",
        fullForm: "Train Declaration",
        explanation: "Electronic or manual declaration signaling readiness of a train for operation.",
        reference: "--"
      },
      { acronym: "TDC", fullForm: "Tentative Date of Cancellation",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TDMS", fullForm: "Track Distribution Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "TFC",
        "fullForm": "Total Failure of Communication",
        "explanation": "A condition where communication between stations completely fails, requiring special handling.",
        reference: "--"
      },
      { acronym: "TEFD", fullForm: "Traditional Empty Flow Direction",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TFR", fullForm: "Transnet Fright Rail",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TFW", fullForm: "Traffic Facility Works",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TG", fullForm: "Tank for LPG",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TG", fullForm: "Termination for Goods Train",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "TI",
        "fullForm": "Traffic Inspector",
        "explanation": "A supervisory officer responsible for monitoring operating staff and train operations.",
        reference: "--"
      },
      { acronym: "TI", fullForm: "Trip Inspection",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TIC", fullForm: "Total Interruption of Communication",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TIEL", fullForm: "Terminal Incentive cum Engine on Load",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TIN", fullForm: "Track Identification Number",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TLBI", fullForm: "Token Less Block Instrument",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TLC", fullForm: "Traction Loco Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TK", fullForm: "Tank for Kerosene",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TMC", fullForm: "Terminal Management Company",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TMM", fullForm: "Transfer Management Module",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TMS", fullForm: "Track Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TMS", fullForm: "Terminal Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TOD", fullForm: "Train On Demand",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TOLIC", fullForm: "Town Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TP", fullForm: "Tank for Petroleum",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TP", fullForm: "Termination for Passenger Train",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TPC", fullForm: "Traction Power Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TPWS", fullForm: "Train Protection & Warning System",
        explanation: "A system that prevents collisions by enforcing braking when trains exceed speed limits or approach danger signals",
        reference: "--"
      },
      { acronym: "TRD", fullForm: "Traction Distribution",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TRR", fullForm: "Through Rail Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TRT", fullForm: "Track Relaying Train",
        explanation: "The track machine which is fully mechanized system of complete track renewal is known as Track Relaying Train.",
        reference: "--"
      },
      { acronym: "TSL", fullForm: "Temporary Single Line",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TSR", fullForm: "Train Signal Register",
        explanation: "A register used to record all train movement signal indications and timings",
        reference: "--"
      },
      { acronym: "TSR", fullForm: "Temporary Speed Restrictions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TSRMS", fullForm: "Temporary Speed Restriction Management System",
        explanation: "Kavach",
        reference: "--"
      },
      {
        acronym: "TSS",
        fullForm: "Traction Sub Station",
        explanation: "Electric power supply station feeding overhead traction system to power trains.",
        reference: "--"
      },
      { acronym: "TSS", fullForm: "Terminal Sub-Systems",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TSTS", fullForm: "Train Staff Ticket System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TTC", fullForm: "Time Table Controller",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "TTE",
        "fullForm": "Travelling Ticket Examiner",
        "explanation": "Railway staff responsible for on-board ticket verification.",
        reference: "--"
      },
      {
        "acronym": "TTI",
        "fullForm": "Travelling Ticket Inspector",
        "explanation": "A railway staff responsible for inspecting tickets and ensuring compliance with fare rules.",
        reference: "--"
      },
      { acronym: "TTM", fullForm: "Track Tamping Machine",
        explanation: "Will be added later",
        reference: "--"
      },
      { 
        acronym: "TTM", 
        fullForm: "Train Time-Table Module",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TTR", fullForm: "Track Turnout Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TVU", fullForm: "Train Vehicle Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TW", fullForm: "Tank for Water",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TWI", fullForm: "Temporary Working Instructions",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TWO", fullForm: "Temporary Working Order",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TWR", fullForm: "Through Weld Renewal",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TWS", fullForm: "Thick Web Switches",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "TXR", fullForm: "Train Examiner",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    U: [
      { acronym: "UDAY", fullForm: "Utkrist Double Decker Air Condition Yatri Express",
        explanation: "Uday Express (Utkrisht Double-Decker Air-conditioned Yatri Express) is a double-decker train designed to carry more passengers and is primarily used for day travel between major cities.",
        reference: "--"
      },
      { acronym: "UDIP", fullForm: "Unified Digital Interface for Promotion",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UDIT", fullForm: "Unified Digital Interface for Transfer Module",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UDM", fullForm: "User Depot Module",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UFSBI", fullForm: "Universal Fail Safe Block Interface",
        explanation: "An electronic block interface that ensures fail-safe operation between block instruments and signaling equipment",
        reference: "--"
      },
      { acronym: "UHF", fullForm: "Ultra High Frequency",
        explanation: "Kavach",
        reference: "--"
      },
      { acronym: "ULIP", fullForm: "Unified Logistics Interface Platform",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UMID", fullForm: "Unique Medical Identity Card",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UMLCG", fullForm: "Unmanned Level Crossings Gate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UPI", fullForm: "Unified Payments Interface",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UPS", fullForm: "Unified Pension Scheme",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UPS", fullForm: "Uninterruptible Power Supply",
        explanation: "It is an electrical apparatus that provides emergency power to a load when the input power source or mains power fails. Unlike an auxiliary or emergency power system or standby generator, a UPS provides near-instantaneous protection from input power interruptions by using energy stored in batteries, supercapacitors, or flywheels.",
        reference: "--"
      },
      { acronym: "USFD", fullForm: "Ultra Sonic Flaw Detection",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "UTS", fullForm: "Unreserved Ticketing System",
        explanation: "System/platform for issuing unreserved tickets (counter, ATVM, and mobile)",
        reference: "--"
      },
    ],
    V: [
      { acronym: "VCB", fullForm: "Vacuum Circuit Braker",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VCC", fullForm: "Vacuum Continuity Certificate",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VCD", fullForm: "Vigilance Control Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VDPC", fullForm: "Voice Data Port Card",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VDU", fullForm: "Visual Display Unit",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VED", fullForm: "Vital Essential Desirable",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VG", fullForm: "Vehicle Guidance",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VHF", fullForm: "Very High Frequency",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VPU", fullForm: "High capacity Motor cum parcel van",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VSAT", fullForm: "Very Small Aperture Terminal",
        explanation: "It is a two-way satellite ground station that uses a small dish antenna (typically under 3.8 metres) to transmit and receive data, voice, and video signals. VSAT technology is especially useful for providing connectivity in remote or rural areas where terrestrial infrastructure like cables or fibre is unavailable.",
        reference: "--"
      },
      { acronym: "VTO", fullForm: "Visibility Test Object",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "VTP", fullForm: "Visibility Test Post",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    W: [
      {
        acronym: "WACCNH",
        fullForm: "AC Sleeper 3 tier",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WAG",
        fullForm: "Wide Gauge AC Goods Locomotive",
        explanation: "Designation for goods-hauling electric locomotives (e.g., WAG-7, WAG-9).",
        reference: "--"
      },
      { acronym: "WAN", fullForm: "Wide Area Network",
        explanation: "A network that connects devices over a large geographical area, such as a city or country, using long-distance communication lines.",
        reference: "--"
      },
      {
        acronym: "WAP",
        fullForm: "Wide Gauge AC Passenger Locomotive",
        explanation: "Designation for passenger electric locomotives (e.g., WAP-4, WAP-7).",
        reference: "--"
      },
      { acronym: "WCA", fullForm: "Workmen Compensation Act",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WCM", fullForm: "Wheel Condition Monitor",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WDG",
        fullForm: "Wide Gauge Diesel Goods Locomotive",
        explanation: "Diesel locomotives primarily designed for hauling freight trains.",
        reference: "--"
      },
      {
        acronym: "WDP",
        fullForm: "Wide Gauge Diesel Passenger Locomotive",
        explanation: "Diesel locomotives mainly used for passenger services.",
        reference: "--"
      },
      {
        acronym: "WDRF",
        fullForm: "Wagon Demand Registration Fees",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WGACCZ",
        fullForm: "AC Chair Car",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WGCB",
        fullForm: "Pantry car",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WFCZ", fullForm: "Vestibule First Class Chair Car",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WGFACCW", fullForm: "First class cum AC 2 tier",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WGSCZ",
        fullForm: "Vestibule Self-Generated Second Class Chair Car",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WGSCZAC",
        fullForm: "Vestibule Self-Generated Second Class AC Chair Car",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WGACCN", fullForm: "Vestibule Self-Generated AC Three Tier",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WGACCW", fullForm: "Vestibule Self-Generated AC Two Tier",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WGFCWAC", fullForm: "Vestibule Self-Generated First Class AC",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        acronym: "WGSCNLR",
        fullForm:
          "Vestibule Self-Generated Second Class Three Tier Sleeper Luggage",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WFDD", fullForm: "Wheel Flat Detection Device",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WILD", fullForm: "Wheel Impact Load Detection",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WIPER", fullForm: "Welfare Inspector Progress Evaluation & Review",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WKM", fullForm: "Wagon Kilometer",
        explanation: "",
        reference: "--"
      },
      { acronym: "WMS", fullForm: "Wage Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WMUCS", fullForm: "Wireless Multiple Unit Coupler System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WOLIC", fullForm: "Workshop Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WRRMDAC", fullForm: "Power car with disabled compartment",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WRIIL", fullForm: "Work Related Illness and Injury Leave",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WTR", fullForm: "Wagon Turn Round",
        explanation: "Wagon Turn Round is the time interval between two successive loadings. It is normally expressed in number of days. It is the time taken by a wagon to go through one complete cycle of loading, movement to destination, unloading and next loading.",
        reference: "--"
      },
      { acronym: "WTT", fullForm: "Working Time Table",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "WWB", fullForm: "Wagon Way Bill",
        explanation: "Will be added later",
        reference: "--"
      },
    ],
    Y: [
      { acronym: "YM", fullForm: "Yard Master",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "YMS", fullForm: "Yard Management System",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "YTSK", fullForm: "Yatri Ticket Suvidha Kendra",
        explanation: "Licensed ticket counters operated by private parties for public convenience",
        reference: "--"
      },
    ],
    Z: [
      { acronym: "ZBTT", fullForm: "Zero-Based Time Tabling",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ZOLIC", fullForm: "Zonal Official Language Implementation Committee",
        explanation: "Will be added later",
        reference: "--"
      },
      { acronym: "ZRTI", fullForm: "Zonal Railway Training Institute",
        explanation: "Will be added later",
        reference: "--"
      },
      {
        "acronym": "ZRUCC",
        "fullForm": "Zonal Railway Users Consultative Committee",
        "explanation": "Represents public interests to railway zonal authorities."
      },
    ],
  };
  