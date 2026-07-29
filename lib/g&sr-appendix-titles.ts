// G&SR Page Titles Mapping (Combined for Chapters and Appendices)
// Maps page IDs to titles

import { getRuleTitleFromPageId } from './g&sr-rule-titles'
import { getAppendixTitleFromPageId } from './g&sr-appendix-data'

// Appendix page titles mapping
const appendixPageTitles: { [key: string]: string } = {
  // Appendix I - Caution Orders
  '350': 'Circumstances for issue of Caution Order',
  '351': 'Method of notifying imposition of speed restriction or special precautions',
  '352': 'Method of obtaining acknowledgement from the Station Master of Notice Station',
  '352A': 'Method of obtaining acknowledgement from the Station Master of Notice Station',
  '352B': 'List of Notice Stations',
  '352C': 'Description and preparation of Caution Order',
  '353': 'Procedure for issue of Caution Order by the Station Master of Notice Station',
  '353A': 'Procedure for issue of Caution Order by the Station Master of Notice Station',
  '353B': 'In case of train originating from station other than Notice Stations',
  '354': 'Change of train crew en route',
  '354A': 'Change of train crew en route',
  '354B': 'Attaching of assisting/banking engine',
  '354C': 'In case of Local/Suburban trains',
  '354D': 'Action by the SM after cancellation of the speed restriction',
  '354E': 'Record of Caution Order message registers',
  '355': 'Preservation of Caution Orders',
  
  // Appendix II - Level Crossing Gates
  '356': 'Census of traffic at Level Crossings',
  '356A': 'Census of traffic at Level Crossings',
  '356B': 'Classification of Level Crossings',
  '356C': 'General instructions for all types of Level Crossing (LC) gates',
  '363': 'Special Instructions for different types of level crossings',
  '364': 'Annexure-I',
  '368': 'Annexure-II',
  '372': 'Annexure-III',
  '374': 'Annexure-IV',
  '377': 'Annexure-V',
  '379': 'Annexure-VI',
  '381': 'Annexure-VII',
  
  // Appendix III - Non-Interlocked Working
  '383': 'Definition',
  '383A': 'Definition',
  '383B': 'Occasions for non-interlocked working',
  '384': 'Engineering & S&T Joint works',
  '384A': 'Engineering & S&T Joint works',
  '384B': 'Action before commencement of NI working',
  '386': 'Rules for NI Working',
  
  // Appendix IV - Special Instructions Regarding Line Patrolling
  '387': 'Definition',
  '387A': 'Definition',
  '387B': 'Occasions when line patrolling is necessary',
  '389': 'Equipment for Patrolmen',
  '389A': 'Equipment for Patrolmen',
  '389B': 'Procedure for monsoon patrolling',
  '390': 'Beat books',
  '391': 'Selection of Patrolmen',
  '391A': 'Selection of Patrolmen',
  '391B': 'Duties of Patrolmen',
  '392': 'Duties of Gangmates',
  '392A': 'Duties of Gangmates',
  '392B': 'Duties of PWIs',
  '393': 'Duties of Station Masters',
  '394': 'Action to be taken by Patrolman when line is obstructed or breached',
  '395': 'When the line is unsafe but not actually breached',
  '396': 'When the line is breached and the breach cannot be crossed',
  '397': 'Minimum checks by PWIs and AENs',
  
  // Appendix V - Special Instructions Regarding New Works
  '398': 'General',
  '398A': 'General',
  '398B': 'Sanction of the Central Government to the opening of railway (section 21)',
  '399': 'Application for sanction for works',
  '399A': 'Application for sanction for works',
  '399B': 'Application for running of new types of locomotives and for rolling stock and for increase in speed (Annexure 13/4 of IRPWM)',
  '399C': 'Repetition of application to obtain the sanction of the CRS shall be avoided',
  '399D': 'Documents to accompany application for sanction',
  '400': 'Inspection by the CRS',
  '400A': 'Inspection by the CRS',
  '400B': 'Submission of Safety Certificates (Annexure 13/5)',
  '400C': 'Deviation from plans approved by the CRS',
  '400D': 'Special instructions regarding Safety Certificate for Signalling Works',
  '401': 'Notification to railway Officials when opening works',
  '401A': 'Notification to railway Officials when opening works',
  '401B': 'Opening of temporary diversions or bridges',
  '402': 'Works resulting from accidents',
  '402A': 'Works resulting from accidents',
  '402B': 'Opening of new works within station limits',
  '403': 'Opening of new works outside station limits',
  '403A': 'Opening of new works outside station limits',
  '403B': 'Provision for locking bolts, cotters, padlocks and clamps',
  '403C': 'Special Instructions in connection with signalling and engineering works (Rules 15.06 and 15.08)',
  '404': 'Special instructions for Line Block – single and double lines (Rules 15.06 and 15.08)',
  '408': 'Obtaining Line Block on Portable radio communication',
  
  // Appendix VI - Brake Power on Trains
  '409': 'Replacement page no. 409 to G&SR including and upto AS no. 12',
  '410': 'Replacement page no. 410 to G&SR including and upto AS no. 12',
  '411': 'Replacement page no. 411 to G&SR including and upto AS no. 12',
  '412': 'Replacement page no. 412 to G&SR including and upto AS no. 12',
  '413': 'Replacement page no. 413 to G&SR including and upto AS no. 12',
  '414': 'Replacement page no. 414 to G&SR including and upto AS no. 12',
  '415': 'Replacement page no. 415 to G&SR including and upto AS no. 12',
  '416': 'Replacement page no. 416 to G&SR including and upto AS no. 12',
  '417': 'Replacement page no. 417 to G&SR including and upto AS no. 12',
  
  // Appendix VII - Special Instructions for Detonating Signals
  '418': 'Station Detonators Register',
  '419': 'PART-I',
  '420': 'PART-II',
  '421': 'PART-III',
  '422': 'PART-IV',
  
  // Appendix VIII - Marshalling
  '423': 'Precautions to be observed during marshalling of carriages/wagons containing explosives',
  '424': 'Precautions to be observed during marshalling of wagons containing petroleum and other inflammable liquids',
  '425': 'Guard or dummy wagons',
  '426': 'For marshalling of wagons containing gases',
  '426A': 'For marshalling of wagons containing gases',
  '426B': 'Definition of Coaching Stock',
  '426C': 'Definition of Goods Stock',
  '426D': 'Goods vehicles not to be used for carrying passengers',
  '426E': 'Marshalling of passengers/mixed trains',
  '427': 'Marshalling of goods trains',
  '430': 'Railway Officers saloons',
  '431': 'Marshalling of trains, attaching of SLR/LR and anti-telescopic/steel bodied coaches on passenger carrying trains',
  
  // Appendix IX - Rules Applicable to Different Categories
  '433': 'PART-I',
  '434': 'PART-II',
  '435': 'PART-III',
  '436': 'PART-IV',
  '437': 'PART-V',
  '438': 'PART-VI',
  '439': 'PART-VII',
  '440': 'PART-VIII',
  
  // Appendix X - Automatic Danger Level Indicators
  '442': 'Automatic Danger Level Indicators at vulnerable locations',
  
  // Appendix XI - Interlocking
  '445': 'Interlocking',
  '447': 'PANEL INTERLOCKING',
  '447A': 'SIEMEN\'S PANEL',
  '447B': 'PODANUR WORKSHOP PANEL',
  '450': 'PODANUR WORKSHOP PANEL',
  '452': 'Common features in the operation of Siemens\' and Podanur workshop panels',
  '454': '\'Dos\' for Station Masters',
  '455': '\'Don\'ts for Station Masters',
  '456': '\'Don\'ts\' for S & T Staff',
  
  // Appendix XII - Shunting
  '457': 'General',
  '457A': 'General',
  '457B': 'TO SHUNT PAST LSS',
  '458': 'TO SHUNT INTO REAR BLOCK SECTION',
  
  // Appendix XIII - S&T maintenance works
  '459': 'Disconnection and testing of S&T gears',
  '460': 'GROUP (A)',
  '461': 'GROUP (B)',
  '461A': 'GROUP (B)',
  '461B': 'GROUP (C)',
  '463': 'DOUBLE KEY LOCK ARRANGEMENT',
  '464': 'OPENING OF RELAY ROOM',
  '464A': 'RELAY ROOM REGISTER',
  '464B': 'DUTIES OF S&T STAFF',
  '464C': 'DUTIES OF OPERATING STAFF',
  '464D': 'REPORTING AND RECORDING OF OPENING OF RELAY ROOMS',
  '464E': 'REPORTING AND RECORDING OF OPENING OF RELAY ROOMS',
  
  // Appendix XIV - Station Working Rules
  '465': 'Station Working Rule diagram',
  '466': 'Description of station',
  '467': 'System and means of working',
  '467A': 'System and means of working',
  '467B': 'System of signalling and interlocking',
  '467C': 'Telecommunication',
  '468': 'System of train working',
  '470': 'Blocking of lines',
  '470A': 'Blocking of lines',
  '470B': 'Shunting',
  '470C': 'Abnormal conditions',
  '471': 'Visibility Test Object',
  '471A': 'Visibility Test Object',
  '471B': 'Essential equipment at the station',
  '471C': 'Fog signalmen nominated to be called in case of fog',
  
  // Appendix XV - Operating Forms
  '473': 'Operating Forms',
  
  // Appendix XVI - EMUs/MEMUs
  '476': 'Bell Signals',
  '478': 'Maximum number of persons permitted in the cab',
  '478A': 'Maximum number of persons permitted in the cab',
  '478B': 'Guards applying the brake',
  '478C': 'Changing destination indicators:',
  '478D': 'Testing of brake power',
  '479': 'Stabling - following precautions must be taken before stabling',
  '480': 'Power going off the line - application of hand brakes',
  '480A': 'Power going off the line - application of hand brakes',
  '480B': 'Protection of EMU/MEMUs stopped between block stations/Automatic signaling territory',
  '480C': 'Fire',
  '480D': 'Leading cab of EMU/MEMU becoming defective',
  
  // Appendix XVII - Sidings
  '483': 'Working of trains into and out of Sidings',
  '484': 'ONE PILOT ONLY SYSTEM',
  '486': 'MULTIPLE PILOTS SYSTEM',
  '489': 'Working of trains into Sidings having operating in-charge',
  '490': 'Working of Pilots where the Siding line extends to another Siding or diverges to various Sidings',
}

// Helper function to get title from page ID (handles both chapters and appendices)
// Always returns a title string, never a page number
export const getPageTitle = (pageId: string): string => {
  if (!pageId) {
    return 'Content'
  }
  
  // Clean and normalize page ID
  const cleanPageId = pageId.trim()
  const normalizedPageId = cleanPageId.toUpperCase()
  
  // First try to get from G&SRAppendix.tsx data structure (most accurate)
  let appendixTitle = getAppendixTitleFromPageId(normalizedPageId)
  if (appendixTitle && appendixTitle.trim() !== '') {
    return appendixTitle
  }
  
  // Try with original case as well
  appendixTitle = getAppendixTitleFromPageId(cleanPageId)
  if (appendixTitle && appendixTitle.trim() !== '') {
    return appendixTitle
  }
  
  // Try without any normalization (raw pageId)
  appendixTitle = getAppendixTitleFromPageId(pageId)
  if (appendixTitle && appendixTitle.trim() !== '') {
    return appendixTitle
  }
  
  // Fallback to static mapping (try both cases)
  if (appendixPageTitles[normalizedPageId]) {
    return appendixPageTitles[normalizedPageId]
  }
  
  if (appendixPageTitles[cleanPageId]) {
    return appendixPageTitles[cleanPageId]
  }
  
  // Finally check chapter rule titles
  const chapterTitle = getRuleTitleFromPageId(cleanPageId)
  
  // If chapter title contains "Chapter Page" (fallback), it means no title was found
  if (chapterTitle && chapterTitle.startsWith('Chapter Page')) {
    // Try one more time with different matching strategies
    // Sometimes page IDs might have different formats
    return 'Content'
  }
  
  // Return the chapter title if it exists and is valid
  if (chapterTitle) {
    // Check if it's a valid title (not just numbers/letters)
    const isPageNumber = /^\d+[A-Z]?$/.test(chapterTitle.trim())
    if (!isPageNumber && chapterTitle.trim() !== '') {
      return chapterTitle
    }
  }
  
  // Last resort: return page ID temporarily to see what's being searched
  // TODO: Remove this debug return after fixing
  console.warn('getPageTitle: No title found for pageId:', cleanPageId, 'normalized:', normalizedPageId)
  return `Page ${cleanPageId}`
}

