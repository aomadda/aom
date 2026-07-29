// G&SR Appendix Data
// This file exports the appendix data structure from G&SRAppendix.tsx
// Used to extract titles for content pages

export interface AppendixContentItem {
  number: string
  title: string
  page: string
}

export interface Appendix {
  id: number
  title: string
  color: string
  description: string
  pageRange: string
  content: AppendixContentItem[]
}

// Appendix data structure matching G&SRAppendix.tsx
export const appendicesData: Appendix[] = [
  {
    id: 1,
    title: "APPENDIX - I",
    color: "from-red-500 to-red-600",
    description: "CAUTION ORDERS",
    pageRange: "350 to 355",
    content: [
      { number: "1", title: "Circumstances for issue of Caution Order", page: "350" },
      { number: "2", title: "Method of notifying imposition of speed restriction or special precautions", page: "351" },
      { number: "3", title: "Method of obtaining acknowledgement from the Station Master of ‗Notice Station'", page: "352" },
      { number: "4", title: "List of ‗Notice Stations'", page: "352" },
      { number: "5", title: "Description and preparation of Caution Order", page: "352" },
      { number: "6", title: "Procedure for issue of Caution Order by the Station Master of Notice Station", page: "353" },
      { number: "7", title: "In case of train originating from station other than 'Notice Stations'", page: "353" },
      { number: "8", title: "Change of train crew en route", page: "354" },
      { number: "9", title: "Attaching of assisting/banking engine", page: "354" },
      { number: "10", title: "In case of Local/Suburban trains", page: "354" },
      { number: "11", title: "Action by the SM after cancellation of the speed restriction", page: "354" },
      { number: "12", title: "Record of Caution Order message registers", page: "354" },
      { number: "13", title: "Preservation of Caution Orders", page: "355" },
    ]
  },
  {
    id: 2,
    title: "APPENDIX - II",
    color: "from-green-500 to-green-600",
    description: "LEVEL CROSSING GATES",
    pageRange: "356 to 382",
    content: [
      { number: "1", title: "Census of traffic at Level Crossings", page: "356" },
      { number: "2", title: "Classification of Level Crossings", page: "356" },
      { number: "3", title: "General instructions for all types of Level Crossing (LC) gates", page: "356" },
      { number: "4", title: "Special Instructions for different types of level crossings", page: "363" },
      { number: "5", title: "Annexure-I", page: "364" },
      { number: "6", title: "Annexure-II", page: "368" },
      { number: "7", title: "Annexure-III", page: "372" },
      { number: "8", title: "Annexure-IV", page: "374" },
      { number: "9", title: "Annexure-V", page: "377" },
      { number: "10", title: "Annexure-VI", page: "379" },
      { number: "11", title: "Annexure-VII", page: "381" },
    ]
  },
  {
    id: 3,
    title: "APPENDIX - III",
    color: "from-blue-500 to-blue-600",
    description: "NON-INTERLOCKED WORKING",
    pageRange: "383 to 386",
    content: [
      {number: "1", title: "Definition", page: "383"},
      {number: "2", title: "Occasions for non-interlocked working", page: "383"},
      {number: "3", title: "Engineering & S&T Joint works", page: "384"},
      {number: "4", title: "Action before commencement of NI working", page: "384"},
      {number: "5", title: "Rules for NI Working", page: "386"},
    ]
  },
  {
    id: 4,
    title: "APPENDIX - IV",
    color: "from-orange-500 to-orange-600",
    description: "SPECIAL INSTRUCTIONS REGARDING LINE PATROLLING",
    pageRange: "387 to 397",
    content: [
      {number: "1", title: "Definition", page: "387"},
      {number: "2", title: "Occasions when line patrolling is necessary", page: "387"},
      {number: "3", title: "Equipment for Patrolmen", page: "389"},
      {number: "4", title: "Procedure for monsoon patrolling", page: "389"},
      {number: "5", title: "Beat books", page: "390"},
      {number: "6", title: "Selection of Patrolmen", page: "391"},
      {number: "7", title: "Duties of Patrolmen", page: "391"},
      {number: "8", title: "Duties of Gangmates", page: "392"},
      {number: "9", title: "Duties of PWIs", page: "392"},
      {number: "10", title: "Duties of Station Masters", page: "393"},
      {number: "11", title: "Action to be taken by Patrolman when line is obstructed or breached", page: "394"},
      {number: "12", title: "When the line is unsafe but not actually breached and the Patrolman can cross the damaged place", page: "395"},
      {number: "13", title: "When the line is breached and the breach cannot be crossed", page: "396"},
      {number: "14", title: "The following minimum checks shall be exercised by the PWIs and AENs on the working of monsoon Patrolmen", page: "397"},   
    ]
  },
  {
    id: 5,
    title: "APPENDIX - V",
    color: "from-purple-500 to-purple-600",
    description: "SPECIAL INSTRUCTIONS REGARDING NEW WORKS",
    pageRange: "398 to 408",
    content: [
      {number: "1", title: "General", page: "398"},
      {number: "2", title: "Sanction of the Central Government to the opening of railway (section 21)", page: "398"},
      {number: "3", title: "Application for sanction for works", page: "399"},
      {number: "4", title: "Application for running of new types of locomotives and for rolling stock and for increase in speed (Annexure 13/4 of IRPWM)", page: "399"},
      {number: "5", title: "Repetition of application to obtain the sanction of the CRS shall be avoided", page: "399"},
      {number: "6", title: "Documents to accompany application for sanction", page: "399"},
      {number: "7", title: "Inspection by the CRS", page: "400"},
      {number: "8", title: "Submission of Safety Certificates (Annexure 13/5)", page: "400"},
      {number: "9", title: "Deviation from plans approved by the CRS", page: "400"},
      {number: "10", title: "Special instructions regarding Safety Certificate for Signalling Works", page: "400"},
      {number: "11", title: "Notification to railway Officials when opening works", page: "401"},
      {number: "12", title: "Opening of temporary diversions or bridges", page: "401"},
      {number: "13", title: "Works resulting from accidents", page: "402"},
      {number: "14", title: "Opening of new works within station limits", page: "402"},
      {number: "15", title: "Opening of new works outside station limits", page: "403"},
      {number: "16", title: "Provision for locking bolts, cotters, padlocks and clamps", page: "403"},
      {number: "17", title: "Special Instructions in connection with signalling and engineering works (Rules 15.06 and 15.08)", page: "403"},
      {number: "18", title: "Special instructions for Line Block – single and double lines (Rules 15.06 and 15.08)", page: "404"},
      {number: "19", title: "Obtaining Line Block on Portable radio communication", page: "408"},
    ]
  },
  {
    id: 6,
    title: "APPENDIX - VI",
    color: "from-teal-500 to-teal-600",
    description: "BRAKE POWER ON TRAINS",
    pageRange: "409 to 417",
    content: [
      {number: "1", title: "Replacement page no. 409 to G&SR including and upto AS no. 12", page: "409"},
      {number: "2", title: "Replacement page no. 410 to G&SR including and upto AS no. 12", page: "410"},
      {number: "3", title: "Replacement page no. 411 to G&SR including and upto AS no. 12", page: "411"},
      {number: "4", title: "Replacement page no. 412 to G&SR including and upto AS no. 12", page: "412"},
      {number: "5", title: "Replacement page no. 413 to G&SR including and upto AS no. 12", page: "413"},
      {number: "6", title: "Replacement page no. 414 to G&SR including and upto AS no. 12", page: "414"},
      {number: "7", title: "Replacement page no. 415 to G&SR including and upto AS no. 12", page: "415"},
      {number: "8", title: "Replacement page no. 416 to G&SR including and upto AS no. 12", page: "416"},
      {number: "9", title: "Replacement page no. 417 to G&SR including and upto AS no. 12", page: "417"},
    ]
  },
  {
    id: 7,
    title: "APPENDIX - VII",
    color: "from-teal-500 to-teal-600",
    description: "SPECIAL INSTRUCTIONS FOR THE USE OF DETONATING (FOG) SIGNALS AT STATIONS TO INDICATE TO THE LOCO PILOTS OF APPROACHING TRAINS THE LOCATION OF A SIGNAL",
    pageRange: "418 to 422",
    content: [
      {number: "1", title: "Station Detonators Register", page: "418"},
      {number: "2", title: "PART-I", page: "419"},
      {number: "3", title: "PART-II", page: "420"},
      {number: "4", title: "PART-III", page: "421"},
      {number: "5", title: "PART-IV", page: "422"},
    ]
  },
  {
    id: 8,
    title: "APPENDIX - VIII",
    color: "from-teal-500 to-teal-600",
    description: "MARSHALLING",
    pageRange: "423 to 432",
    content: [
      {
        number: "1",
        title: "Precautions to be observed during marshalling of carriages/wagons containing explosives",
        page: "423"
      },
      {
        number: "2",
        title: "Precautions to be observed during marshalling of wagons containing petroleum and other inflammable liquids",
        page: "424"
      },
      { number: "3", title: "Guard or dummy wagons", page: "425" },
      { number: "4", title: "For marshalling of wagons containing gases", page: "426" },
      { number: "5", title: "Definition of Coaching Stock", page: "426" },
      {number: "6", title: "Definition of Goods Stock", page: "426"},
      {number: "7", title: "Goods vehicles not to be used for carrying passengers", page: "426"},
      {number: "8", title: "Marshalling of passengers/mixed trains", page: "426"},
      { number: "9", title: "Marshalling of goods trains", page: "427" },
      { number: "10", title: "Railway Officers saloons", page: "430" },
      {
        number: "11",
        title: "Marshalling of trains, attaching of SLR/LR and anti-telescopic/steel bodied coaches on passenger carrying trains",
        page: "431"
      },
    ]
  },
  {
    id: 9,
    title: "APPENDIX - IX",
    color: "from-teal-500 to-teal-600",
    description: "Rules Applicable to Different Categories",
    pageRange: "433 to 441",
    content: [
      {number: "1", title: "PART-I", page: "433"},
      {number: "2", title: "PART-II", page: "434"},
      {number: "3", title: "PART-III", page: "435"},
      {number: "4", title: "PART-IV", page: "436"},
      {number: "5", title: "PART-V", page: "437"},
      {number: "6", title: "PART-VI", page: "438"},
      {number: "7", title: "PART-VII", page: "439"},
      {number: "8", title: "PART-VIII", page: "440"},
    ]
  },
  {
    id: 10,
    title: "APPENDIX - X",
    color: "from-teal-500 to-teal-600",
    description: "AUTOMATIC DANGER LEVEL INDICATORS",
    pageRange: "442 to 444",
    content: [
      {number: "1", title: "Automatic Danger Level Indicators at vulnerable locations", page: "442"},
    ]
  },
  {
    id: 11,
    title: "APPENDIX - XI",
    color: "from-teal-500 to-teal-600",
    description: "INTERLOCKING",
    pageRange: "445 to 456",
    content: [
      {number: "1", title: "Interlocking", page: "445"},
      {number: "2", title: "PANEL INTERLOCKING", page: "447"},
      {number: "3", title: "SIEMEN'S PANEL", page: "447"},
      {number: "4", title: "PODANUR WORKSHOP PANEL", page: "450"},
      {number: "5", title: "Common features in the operation of Siemens' and Podanur workshop panels", page: "452"},
      {number: "6", title: "'Dos' for Station Masters", page: "454"},
      {number: "7", title: "'Don'ts for Station Masters", page: "455"},
      {number: "8", title: "'Don'ts' for S & T Staff", page: "456"},
    ]
  },
  {
    id: 12,
    title: "APPENDIX - XII",
    color: "from-teal-500 to-teal-600",
    description: "SHUNTING",
    pageRange: "457 to 458",
    content: [
      {number: "1", title: "General", page: "457"},
      {number: "2", title: "TO SHUNT PAST LSS", page: "457"},
      {number: "3", title: "TO SHUNT INTO REAR BLOCK SECTION", page: "458"},
    ]
  },
  {
    id: 13,
    title: "APPENDIX - XIII",
    color: "from-teal-500 to-teal-600",
    description: "S&T maintenance works – Testing of points, signals and other equipment – Disconnection Notice",
    pageRange: "459 to 464D",
    content: [
      {number: "1", title: "Disconnection and testing of S&T gears", page: "459"},
      {number: "2", title: "GROUP (A)", page: "460"},
      {number: "3", title: "GROUP (B)", page: "461"},
      {number: "4", title: "GROUP (C)", page: "461"},
      {number: "5", title: "DOUBLE KEY LOCK ARRANGEMENT", page: "463"},
      {number: "6", title: "OPENING OF RELAY ROOM", page: "464"},
      {number: "7", title: "RELAY ROOM REGISTER", page: "464A"},
      {number: "8", title: "DUTIES OF S&T STAFF", page: "464A"},
      {number: "9", title: "DUTIES OF OPERATING STAFF", page: "464B"},
      {number: "10", title: "REPORTING AND RECORDING OF OPENING OF RELAY ROOMS", page: "464B"},
    ]
  },
  {
    id: 14,
    title: "APPENDIX - XIV",
    color: "from-teal-500 to-teal-600",
    description: "STATION WORKING RULES",
    pageRange: "465 to 472",
    content: [
      {number: "1", title: "Station Working Rule diagram", page: "465"},
      {number: "2", title: "Description of station", page: "466"},
      {number: "3", title: "System and means of working", page: "467"},
      {number: "4", title: "System of signalling and interlocking", page: "467"},
      {number: "5", title: "Telecommunication", page: "467"},
      {number: "6", title: "System of train working", page: "468"},
      {number: "7", title: "Blocking of lines", page: "470"},
      {number: "8", title: "Shunting", page: "470"},
      {number: "9", title: "Abnormal conditions", page: "470"},
      {number: "10", title: "Visibility Test Object", page: "471"},
      {number: "11", title: "Essential equipment at the station", page: "471"},
      {number: "12", title: "Fog signalmen nominated to be called in case of fog", page: "471"},
    ]
  },
  {
    id: 15,
    title: "APPENDIX - XV",
    color: "from-teal-500 to-teal-600",
    description: "Operating Forms",
    pageRange: "473 to 475",
    content: [
      {number: "1", title: "Operating Forms", page: "473"},
    ]
  },
  {
    id: 16,
    title: "APPENDIX - XVI",
    color: "from-teal-500 to-teal-600",
    description: "EMUs/MEMUs",
    pageRange: "476 to 482",
    content: [
      {number: "1", title: "Bell Signals", page: "476"},
      {number: "2", title: "Maximum number of persons permitted in the cab", page: "478"},
      {number: "3", title: "Guards applying the brake", page: "478"},
      {number: "4", title: "Changing destination indicators:", page: "478"},
      {number: "5", title: "Testing of brake power", page: "478"},
      {number: "6", title: "Stabling - following precautions must be taken before stabling", page: "479"},
      {number: "7", title: "Power going off the line - application of hand brakes", page: "480"},
      {
        number: "8",
        title: "Protection of EMU/MEMUs stopped between block stations/Automatic signaling territory",
        page: "480"
      },
      {number: "9", title: "Fire", page: "480"},
      {number: "10", title: "Leading cab of EMU/MEMU becoming defective", page: "480"},
      {number: "11", title: "Annexure–I", page: "481"},
      {number: "12", title: "Annexure - II", page: "482"},
    ]
  },
  {
    id: 17,
    title: "APPENDIX - XVII",
    color: "from-teal-500 to-teal-600",
    description: "SIDINGS",
    pageRange: "483 to 492",
    content: [
      {number: "1", title: "Working of trains into and out of Sidings", page: "483"},
      {number: "2", title: "ONE PILOT ONLY SYSTEM", page: "484"},
      {number: "3", title: "MULTIPLE PILOTS SYSTEM", page: "486"},
      {number: "4", title: "Working of trains into Sidings having operating in-charge", page: "489"},
      {number: "5", title: "Working of Pilots where the Siding line extends to another Siding or diverges to various Sidings", page: "490"},
    ]
  },
]

// Helper function to get title from page ID using appendix data
// Handles page IDs with suffixes (e.g., "352A", "352B") and maps them to content items
export const getAppendixTitleFromPageId = (pageId: string): string | null => {
  if (!pageId) {
    return null
  }
  
  // Normalize page ID (handle uppercase/lowercase)
  const normalizedPageId = pageId.toUpperCase().trim()
  
  // Debug: Log what we're searching for
  // console.log('getAppendixTitleFromPageId called with:', normalizedPageId)
  
  // Extract base page number and suffix (e.g., "352A" -> base: "352", suffix: "A")
  // Also handle cases like "352" (no suffix)
  const match = normalizedPageId.match(/^(\d+)([A-Z]?)$/)
  if (!match) {
    // If regex doesn't match, try direct lookup
    for (const appendix of appendicesData) {
      for (const item of appendix.content) {
        if (item.page.toUpperCase() === normalizedPageId) {
          // console.log('Direct match found:', item.title)
          return item.title
        }
      }
    }
    // console.log('No direct match found for:', normalizedPageId)
    return null
  }
  
  const basePage = match[1]
  const suffix = match[2] || ''
  
  // Debug: Log extracted values
  // console.log('Extracted basePage:', basePage, 'suffix:', suffix)
  
  // Search through all appendices
  for (const appendix of appendicesData) {
    // Find all content items with matching base page number
    const matchingItems = appendix.content.filter(
      item => item.page.toUpperCase() === basePage
    )
    
    // Debug: Log matching items
    // console.log(`Found ${matchingItems.length} items for basePage ${basePage}`)
    
    if (matchingItems.length === 0) {
      continue
    }
    
    // If no suffix, return first matching item
    if (!suffix) {
      // console.log('No suffix, returning first item:', matchingItems[0].title)
      return matchingItems[0].title
    }
    
    // If suffix exists, map it to item index (A=0, B=1, C=2, etc.)
    const suffixIndex = suffix.charCodeAt(0) - 'A'.charCodeAt(0)
    
    // Debug: Log suffix mapping
    // console.log(`Suffix ${suffix} maps to index ${suffixIndex}, total items: ${matchingItems.length}`)
    
    // Return the title at the corresponding index
    if (suffixIndex >= 0 && suffixIndex < matchingItems.length) {
      // console.log('Returning item at index:', suffixIndex, 'title:', matchingItems[suffixIndex].title)
      return matchingItems[suffixIndex].title
    }
    
    // If suffix index is out of range, return first item as fallback
    // console.log('Suffix index out of range, returning first item:', matchingItems[0].title)
    return matchingItems[0].title
  }
  
  // If no match found with suffix logic, try direct lookup as fallback
  for (const appendix of appendicesData) {
    for (const item of appendix.content) {
      if (item.page.toUpperCase() === normalizedPageId || item.page.toUpperCase() === basePage) {
        // console.log('Fallback direct match found:', item.title)
        return item.title
      }
    }
  }
  
  // Debug: Log when no match is found
  console.warn('getAppendixTitleFromPageId: No match found for:', normalizedPageId, 'basePage:', basePage || 'N/A', 'suffix:', suffix || 'N/A')
  return null
}

