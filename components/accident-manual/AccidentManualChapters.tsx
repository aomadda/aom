"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, FileText, AlertTriangle, Shield, Users, CheckCircle, AlertCircle, Search, Gavel, Clipboard, Heart, ChevronDown, ChevronUp, ExternalLink, BookOpenCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

const AccidentManualChapters = () => {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => {
      // If chapter is already expanded, collapse it
      if (prev.includes(chapterId)) {
        return prev.filter(id => id !== chapterId)
      }
      // If chapter is collapsed, expand it and collapse all others (accordion behavior)
      return [chapterId]
    })
  }

  const openPDF = (pageNumber: string) => {
    // Handle special cases for page numbers that have different file names
    let pdfFileName = ''
    
    // Extract base number from page (e.g., "1A" -> "1", "101" -> "101")
    const baseNumber = pageNumber.replace(/[A-Z]/gi, '')
    
    // Special cases for pages that don't follow the standard naming pattern
    const specialCases: { [key: string]: string } = {
      '101': 'AMCHAPTERPAGE101A.pdf',
      '103': 'AMCHAPTERPAGE103A.pdf',
      '104': 'AMCHAPTERPAGE104A.pdf',
      '106': 'AMCHAPTERPAGE106A.pdf',
      '108': 'AMCHAPTERPAGE108A.pdf',
      '109': 'AMCHAPTERPAGE109A.pdf',
      '113': 'AMCHAPTERPAGE113A.pdf',
      '114': 'AMCHAPTERPAGE114A.pdf',
      '115': 'AMCHAPTERPAGE115A.pdf',
      '116': 'AMCHAPTERPAGE116A.pdf',
      '118': 'AMCHAPTERPAGE118A.pdf',
      '119': 'AMCHAPTERPAGE119A.pdf',
      '121': 'AMCHAPTERPAGE121A.pdf',
      '122': 'AMCHAPTERPAGE122A.pdf',
      '123': 'AMCHAPTERPAGE123A.pdf',
      '125': 'AMCHAPTERPAGE125A.pdf',
      '127': 'AMCHAPTERPAGE127A.pdf',
      '128': 'AMCHAPTERPAGE128A.pdf',
      '129': 'AMCHAPTERPAGE129A.pdf',
      '130': 'AMCHAPTERPAGE130A.pdf',
      '131': 'AMCHAPTERPAGE131A.pdf',
      '132': 'AMCHAPTERPAGE132A.pdf',
      '133': 'AMCHAPTERPAGE133A.pdf',
      '134': 'AMCHAPTERPAGE134A.pdf'
    }
    
    if (specialCases[baseNumber]) {
      pdfFileName = specialCases[baseNumber]
    } else {
      // Standard naming: AMCHAPTERPAGE{pageNumber}.pdf (e.g., AMCHAPTERPAGE1A.pdf)
      pdfFileName = `AMCHAPTERPAGE${pageNumber.toUpperCase()}.pdf`
    }
    
    const pdfPath = `/accident-manual-pdfs/am-chapter-pages/${pdfFileName}`

    setOpeningPDF(pageNumber)

    // Small delay to show loading state
    setTimeout(() => {
      if (isMobile) {
        // For mobile devices, open PDF directly in the same tab
        window.location.href = pdfPath
      } else {
        // For large devices, open PDF in new tab
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (pageNumber: string) => {
    setOpeningContent(pageNumber)

    // Small delay to show loading state
    setTimeout(() => {
      // Navigate to the content page
      router.push(`/manuals/accident-manual/content/${pageNumber}`)
      setOpeningContent(null)
    }, 100)
  }
  const chapters = [
    {
      id: 1,
      title: "DEFINITIONS AND GENERAL INSTRUCTIONS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Core definitions and fundamental instructions for accident management",
      rules: [
        { number: "101", title: "Train", page: "1A" },
        { number: "101.1", title: "Passenger Train", page: "1B" },
        { number: "101.2", title: "Other Trains", page: "1C" },
        { number: "102", title: "Accident", page: "1D" },
        { number: "103", title: "Serious Accident", page: "1E" },
        { number: "104", title: "Injuries", page: "2A" },
        { number: "104.1", title: "Grievous Injuries", page: "2B" },
        { number: "104.2", title: "Simple Injuries", page: "2C" },
        { number: "105", title: "Classification of Accidents", page: "2D" },
        { number: "105.1", title: "Train Accident", page: "2E" },
        { number: "105.2", title: "Consequential train accidents", page: "2F" },
        { number: "105.3", title: "Collisions", page: "2G" },
        { number: "105.4", title: "Fire in Trains", page: "3A" },
        { number: "105.5", title: "Accidents at Level Crossings", page: "3B" },
        { number: "105.6", title: "Derailments", page: "3C" },
        { number: "105.7", title: "Other train Accidents", page: "3D" },
        { number: "105.8", title: "Yard Accidents", page: "3E" },
        { number: "105.9", title: "Indicative Accidents", page: "3F" },
        { number: "105.10", title: "Averted Collision", page: "3G" },
        { number: "105.11", title: "Breach of Block Rules", page: "3H" },
        { number: "105.12", title: "Train Passing Signal at Danger", page: "4A" },
        { number: "105.13", title: "Equipment Failures", page: "4B" },
        { number: "105.14", title: "Unusual Incidents", page: "4C" },
        { number: "105.15", title: "Sabotage", page: "4D" },
        { number: "105.16", title: "Train Wrecking", page: "4E" },
        { number: "105.17", title: "Attempted Train wrecking", page: "4F" },
        { number: "106", title: "Commissioner of Railway Safety", page: "4G" },
        { number: "107", title: "ACT", page: "4H" },
        { number: "108", title: "Threshold Value", page: "4I" },
        { number: "108.1", title: "Classification of Routes", page: "5" },
        { number: "109", title: "Interruption", page: "6A" },
        { number: "110", title: "Railway Property", page: "6B" },
        { number: "111", title: "Public Property", page: "6C" },
        { number: "112", title: "Slight Damage to Property", page: "6D" },
        { number: "113", title: "Damage to Property", page: "6E" },
        { number: "114", title: "Serious Damage to Property", page: "6F" },
        { number: "115", title: "Department", page: "7A" },
        { number: "116", title: "Engine Failure and Time Failure", page: "7B" },
        { number: "117", title: "Scope of the Rules", page: "7C" },
        { number: "118", title: "Distribution of the Accident Manual", page: "7D" },
        { number: "119", title: "Acquaintance with the Rules", page: "7E" },
        { number: "120", title: "Objectives", page: "7F" },
        { number: "121", title: "Resources of all Departments to be made available", page: "8A" },
        { number: "122", title: "Every Railway Official to render all possible assistance", page: "8B" },
        { number: "123", title: "Duty for Securing Safety", page: "8C" }
      ]
    },
    {
      id: 2,
      title: "CLASSIFICATION OF ACCIDENTS",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Systematic classification and categorization of railway accidents",
      rules: [
        { number: "201", title: "Consequential Train Accidents", page: "9" },
        { number: "202", title: "Indicative Accidents", page: "11A" },
        { number: "203", title: "Equipment failure", page: "11B" },
        { number: "204", title: "Unusual Incidents", page: "12" }
      ]
    },
    {
      id: 3,
      title: "DUTIES OF RAILWAY STAFF",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Comprehensive duties and responsibilities during accident situations",
      rules: [
        { number: "301", title: "Guard of the Train Involved in Accident", page: "14A" },
        { number: "302", title: "Engine Crew of the Train", page: "14B" },
        { number: "303", title: "Station Master / Station Manager", page: "14C" },
        { number: "304", title: "Controlling Station Master", page: "16A" },
        { number: "305", title: "Train Superintendent / Traveling Ticket Examiner", page: "16B" },
        { number: "306", title: "Officer or Senior Supervisor first reaching the site", page: "16C" },
        { number: "307", title: "Commercial Inspectors / Commercial Officers", page: "18A" },
        { number: "308", title: "Engineering Staff", page: "18B" },
        { number: "309", title: "Mechanical / B.D.Staff", page: "19A" },
        { number: "310", title: "Signal and Telecommunication Staff", page: "19B" },
        { number: "311", title: "Electrical Staff", page: "20A" },
        { number: "312", title: "Security Staff", page: "20B" },
        { number: "313", title: "Medical Staff", page: "21" },
        { number: "314", title: "Chief Controller / Deputy Chief Controller", page: "22" },
        { number: "315", title: "Commercial Control", page: "23" },
        { number: "316", title: "Power Controller / Traction Loco Controller", page: "24A" },
        { number: "317", title: "Traction Power controller", page: "24B" },
        { number: "318", title: "Senior Divisional Operations Manager", page: "25A" },
        { number: "319", title: "Senior Divisional Safety Officer", page: "25B" },
        { number: "320", title: "Senior Divisional Mechanical Engineer", page: "25C" },
        { number: "321", title: "Senior Divisional Electrical Engineer", page: "26A" },
        { number: "322", title: "Senior Divisional Electrical Engineer (Traction Distribution)", page: "26B" },
        { number: "323", title: "Senior Divisional Electrical Engineer (Traction Operation / Traction Rolling Stock)", page: "26C" },
        { number: "324", title: "Senior Divisional Engineer (Civil)", page: "26D" },
        { number: "325", title: "Senior Divisional Commercial Manager", page: "26E" },
        { number: "326", title: "Senior Divisional Signal and Telecommunication Engineer", page: "27A" },
        { number: "327", title: "Senior Divisional Security Commissioner (R.P.F)", page: "27B" }
      ]
    },
    {
      id: 4,
      title: "REPORTING OF ACCIDENTS",
      icon: <Clipboard className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Procedures and protocols for accident reporting and documentation",
      rules: [
        { number: "401", title: "Reportable Train Accidents", page: "28A" },
        { number: "402", title: "Reporting of Accidents", page: "28B" },
        { number: "403", title: "Particulars to be given in the Accident Report", page: "30" },
        { number: "404", title: "Fax Report to Railway Board", page: "34A" },
        { number: "405", title: "Reporting of Indicative Accidents", page: "34B" },
        { number: "406", title: "Reporting of Accidents at Un-manned Level Crossings", page: "34C" },
        { number: "407", title: "Serious Accidents to be advised promptly", page: "34D" },
        { number: "408", title: "Procedure for Sending Accident Messages", page: "35" },
        { number: "409", title: "Railway Employees to report Accidents", page: "37" },
        { number: "410", title: "Method of reporting Accidents by Railway Employees", page: "38A" },
        { number: "411", title: "Station Master or Railway Employee in-charge of the section to report Accidents", page: "38B" },
        { number: "412", title: "Station Master to Advise Control", page: "39A" },
        { number: "413", title: "Noting down Time of Accident", page: "39B" },
        { number: "414", title: "Preliminary Telephonic Report on Serious Accidents by an Officer", page: "39C" },
        { number: "415", title: "Reporting of Accidents attended with Injury of Loss of Life", page: "39D" },
        { number: "416", title: "Reporting of Accidents on Assisted and Private Sidings", page: "39E" },
        { number: "417", title: "Reporting of Accidents at Joint Stations", page: "39F" },
        { number: "418", title: "Reporting of Accidents in Workshops coming under the Factories Act", page: "39G" },
        { number: "419", title: "Reporting of Accidents on Construction lines", page: "39H" },
        { number: "420", title: "Reporting of Serious Accidents to the Press", page: "40" },
        { number: "421", title: "Train Accident returns to be sent to the Railway Board", page: "41A" },
        { number: "422", title: "Preparation of Accident returns", page: "41B" },
        { number: "423", title: "Accident Returns - Tables 1 to 7", page: "42" }
      ]
    },
    {
      id: 5,
      title: "PRESERVATION OF CLUES AND EVIDENCE",
      icon: <Search className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Evidence preservation and site investigation procedures",
      rules: [
        { number: "501", title: "Steps to be taken to preserve the Clues and Evidence at Accident site", page: "45" },
        { number: "502", title: "Examination to certify fitness for movement of Locomotive and Rolling Stock", page: "49A" },
        { number: "503", title: "The Sketch of the site of Accident", page: "49B" },
        { number: "504", title: "Pro-forma to be filled up in case of Derailment", page: "50" },
        { number: "505", title: "Locomotive (Diesel & Electric) Proforma", page: "54" },
        { number: "506", title: "Measurement Table for Coach involved in Accident", page: "58" },
        { number: "507", title: "Signal & Telecommunication (Points & Signals)", page: "61" },
        { number: "508", title: "Typical Sketch of Accident site", page: "62A" }
      ]
    },
    {
      id: 6,
      title: "RESCUE AND RELIEF MACHINERY",
      icon: <Heart className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Emergency response systems and medical relief procedures",
      rules: [
        { number: "601", title: "Long Range Electric Sirens", page: "63A" },
        { number: "602", title: "Accident Siren Code", page: "63B" },
        { number: "603", title: "Stations Where Accident Relief Trains are Located", page: "64" },
        { number: "604", title: "Medical Relief Train & Medical Relief Equipment", page: "68" },
        { number: "605", title: "Stations where Medical Relief Equipment are located", page: "71" },
        { number: "606", title: "Joint Inspection of entire Accident Relief Machinery", page: "75A" },
        { number: "607", title: "Action by Divisional Medical Superintendent", page: "75B" },
        { number: "608", title: "Action by Divisional Medical Officer", page: "75C" },
        { number: "609", title: "Equipment considered necessary in all accidents", page: "76A" },
        { number: "610", title: "Action by Divisional Medical Officer where MRT is provided", page: "76B" },
        { number: "611", title: "Responsibility of Divisional Medical Officer at Accident spot", page: "76C" },
        { number: "612", title: "Standing Instructions by Divisional Chief Medical Superintendent", page: "77A" },
        { number: "613", title: "Responsibility of Divisional Chief Medical Superintendent", page: "77B" },
        { number: "614", title: "Opening of Dressing Station and Temporary Hospitals", page: "77C" },
        { number: "615", title: "Medical Personnel to attend to the Injured", page: "78A" },
        { number: "616", title: "Divisional Medical Officer to replace articles", page: "78B" },
        { number: "617", title: "Duty of Station Master, Control etc.", page: "78C" },
        { number: "618", title: "Regular drills by staff", page: "79" },
        { number: "619", title: "Maintenance and replenishment of First Aid Boxes", page: "80" },
        { number: "620", title: "Stretchers", page: "84A" },
        { number: "621", title: "Maintenance of Accident Relief Machinery", page: "84B" },
        { number: "622", title: "Maintenance of Equipment kept in Accident Relief Machinery", page: "85A" },
        { number: "623", title: "Training of Man power", page: "85B" },
        { number: "624", title: "Portable Emergency Control Phone", page: "85C" }
      ]
    },
    {
      id: 7,
      title: "SCHEDULE OF POWERS AND MEDIA MANAGEMENT",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Authority delegation and media communication protocols",
      rules: [
        { number: "701", title: "Facility to Non-Railway Officials", page: "87A" },
        { number: "702", title: "Schedule of Powers of Officers for Helicopter/Aero planes", page: "87B" },
        { number: "703", title: "Medical Aid to Persons Grievously Hurt", page: "87C" },
        { number: "704", title: "Media Management at Site", page: "90" },
        { number: "705", title: "Complimentary Passes", page: "92" }
      ]
    },
    {
      id: 8,
      title: "EX-GRATIA AND COMPENSATION",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Compensation procedures and relief measures for accident victims",
      rules: [
        { number: "801", title: "Relief to Passengers involved in Train Accidents", page: "93" },
        { number: "802", title: "Compensation for Death/Injury in train Accident", page: "94A" },
        { number: "803", title: "Compensation", page: "94B" }
      ]
    },
    {
      id: 9,
      title: "INVESTIGATION AND INQUIRIES",
      icon: <Search className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Comprehensive investigation procedures and inquiry protocols",
      rules: [
        { number: "901", title: "Investigation on the spot", page: "99A" },
        { number: "902", title: "Information collection for Inquiry Committee", page: "99B" },
        { number: "903", title: "Object of Accident Inquiry", page: "101" },
        { number: "904", title: "Classification of Accident Enquiries", page: "101" },
        { number: "905", title: "Ordering of Inquiries", page: "102" },
        { number: "906", title: "Minimum level of Inquiry", page: "103" },
        { number: "907", title: "Schedule for completion of Accident Inquiry", page: "103" },
        { number: "908", title: "Acceptance of responsibility by Departments", page: "104" },
        { number: "909", title: "Special Report", page: "104" },
        { number: "910", title: "Commencing of Joint and Inter-departmental Inquiries", page: "104" },
        { number: "911", title: "Method of conducting Joint/Inter Departmental Inquiries", page: "104" },
        { number: "912", title: "Composition of Inquiry Committee", page: "105" },
        { number: "913", title: "President of Inquiry Committee", page: "106" },
        { number: "914", title: "Officer&apos;s duties in connection with inquiry", page: "106" },
        { number: "915", title: "Failure to attend Inquiry", page: "106" },
        { number: "916", title: "Postponing of an Inquiry", page: "106" },
        { number: "917", title: "Guidelines for Inquiry Committee members", page: "106" },
        { number: "918", title: "Proceedings of Joint or Inter-departmental Inquiries", page: "107" },
        { number: "919", title: "Description of the Accident", page: "108A" },
        { number: "920", title: "Recording of Evidence", page: "108B" },
        { number: "921", title: "Findings", page: "108C" },
        { number: "922", title: "Remarks and Reasons for Findings", page: "109A" },
        { number: "923", title: "Suggestions", page: "109B" },
        { number: "924", title: "Matters Brought to Light during Inquiry", page: "109C" },
        { number: "925", title: "Signing of Joint Inquiry Proceedings", page: "109D" },
        { number: "926", title: "Inquiries into accidents at Joint Stations", page: "109E" },
        { number: "927", title: "Particulars in Special Report or Inquiry Report", page: "110" },
        { number: "928", title: "Report of inquiry to Railway Administration", page: "113A" },
        { number: "929", title: "Acceptance of Findings", page: "113B" },
        { number: "930", title: "Reports of Inquiries to Commissioner of Railway Safety", page: "114A" },
        { number: "931", title: "Submission of Inquiry Report", page: "114B" },
        { number: "932", title: "Metallurgical and Chemical investigation", page: "115A" },
        { number: "933", title: "Norms of Punishments", page: "115B" },
        { number: "934", title: "Magisterial Inquiry", page: "115C" },
        { number: "935", title: "Judicial Inquiry", page: "116A" },
        { number: "936", title: "Result of Magisterial Inquiry communication", page: "116B" },
        { number: "937", title: "Procedure for Summoning CRS and Railway servants", page: "116C" },
        { number: "938", title: "Communication of Judicial Inquiry decision", page: "117A" },
        { number: "939", title: "Police Investigation", page: "117B" },
        { number: "940", title: "Notice of Police Investigation", page: "118A" },
        { number: "941", title: "Assistance of the District Police", page: "118B" },
        { number: "942", title: "Communication of Police Investigation result", page: "118C" },
        { number: "943", title: "District Police duties", page: "118D" }
      ]
    },
    {
      id: 10,
      title: "COMMISSIONER OF RAILWAY SAFETY",
      icon: <Shield className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "CRS reporting and investigation procedures",
      rules: [
        { number: "1001", title: "All concerned Telephonic Message to CRS", page: "119A" },
        { number: "1002", title: "Telephonic advice to CRS", page: "119B" },
        { number: "1003", title: "Accidents to be reported to CRS by post", page: "119C" },
        { number: "1004", title: "Non-Reporting of Accidents to CRS", page: "119D" },
        { number: "1005", title: "Statement of Accidents to CRS", page: "119E" },
        { number: "1006", title: "Statutory Investigation into Railway Accidents", page: "120" },
        { number: "1007", title: "Attendance of Railway employees to attend Inquiries", page: "121A" },
        { number: "1008", title: "Officers to assist CRS", page: "121B" },
        { number: "1009", title: "Brief Preliminary Narrative report", page: "121C" },
        { number: "1010", title: "Final Report", page: "122A" },
        { number: "1011", title: "Action on the Report by Railway Administration", page: "122B" },
        { number: "1012", title: "Railway&apos;s remarks on suggestions", page: "122C" },
        { number: "1013", title: "Publication of Reports", page: "123A" },
        { number: "1014", title: "District Magistrate to Attend CRS Inquiry", page: "123B" },
        { number: "1015", title: "District Superintendent of Police to attend CRS Inquiry", page: "123C" },
        { number: "1016", title: "Technical Matters", page: "123D" },
        { number: "1017", title: "Powers of CRS", page: "123E" },
        { number: "1018", title: "Target dates for submission of returns", page: "123F" },
        { number: "1019", title: "Target for Completion of CRS Inquiries", page: "124" }
      ]
    },
    {
      id: 11,
      title: "UNUSUAL OCCURRENCES",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Handling of unusual incidents and special circumstances",
      rules: [
        { number: "1101", title: "Unsafe Bunds of Tanks of Rivers", page: "125A" },
        { number: "1102", title: "Injured or Dead persons found on or near Railway Track", page: "125B" },
        { number: "1103", title: "Person Fallen out of a Train", page: "126" },
        { number: "1104", title: "Carriage Windows or Doors Involved", page: "127A" },
        { number: "1105", title: "Defective Running of Locomotives", page: "127B" },
        { number: "1106", title: "Persons found Dead in Trains or at Stations", page: "127C" },
        { number: "1107", title: "Murder on Running Train", page: "128A" },
        { number: "1108", title: "Care of Dead bodies", page: "128B" },
        { number: "1109", title: "Material fouling the Track", page: "128C" },
        { number: "1110", title: "Precautions against Derailment", page: "128D" },
        { number: "1111", title: "Dangerous practices", page: "129A" },
        { number: "1112", title: "Reporting Fire", page: "129B" }
      ]
    },
    {
      id: 12,
      title: "SABOTAGE",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Security protocols and sabotage response procedures",
      rules: [
        { number: "1201", title: "General", page: "130" },
        { number: "1202", title: "Explosion on Track or Train", page: "130" },
        { number: "1203", title: "Duties of Guard, Engine crew and Railway staff", page: "131A" },
        { number: "1204", title: "Information to Civil and Police Authorities", page: "131B" },
        { number: "1205", title: "Precautions by Engineering Supervisors", page: "131C" },
        { number: "1206", title: "Duties of Officers and Supervisory Officials", page: "131D" },
        { number: "1207", title: "Duties of Railway Protection Force Officials", page: "131E" },
        { number: "1208", title: "Police Clearance", page: "132A" },
        { number: "1209", title: "Joint Examination by Civil, Police and Railway Officials", page: "132B" },
        { number: "1210", title: "Removal and Examination of Rolling stock", page: "132C" },
        { number: "1211", title: "Preparation of Notes and Drawings", page: "133A" },
        { number: "1212", title: "Restoration of Communications", page: "133B" },
        { number: "1213", title: "Preparation of Plan for Inquiry", page: "133C" },
        { number: "1214", title: "Preservation of Notes and Sketches", page: "134A" },
        { number: "1215", title: "Association of Security Officer", page: "134B" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-red-900 via-orange-900 to-amber-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-red-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              ACCIDENT MANUAL CHAPTERS
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-amber-300 mb-4">Comprehensive Guide to Railway Accident Management</h2>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Railway Accident Manual - Comprehensive guide covering all 12 chapters 
              with detailed procedures, duties, and protocols for effective accident response and management.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                                     {/* Chapter Header */}
                   <div 
                     className={`bg-linear-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                     onClick={() => toggleChapter(chapter.id)}
                   >
                     <div className="flex flex-col items-center text-center">
                       {/* Chapter Icon */}
                       <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                         {chapter.icon}
                       </div>
                       
                       {/* Chapter Title and Description */}
                       <div className="mb-4">
                         <h2 className="text-xl sm:text-2xl font-bold">
                           Chapter - {chapter.id}
                         </h2>
                         <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                           {chapter.title}
                         </p>
                         <p className="text-white/80 text-sm mt-2">
                           {chapter.description}
                         </p>
                       </div>
                       
                       {/* Horizontal Line */}
                       <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                       
                       {/* Page Range */}
                       <p className="text-white/70 text-sm font-medium mb-4">
                         Pages: {Math.min(...chapter.rules.map(rule => parseInt(rule.page)))} - {Math.max(...chapter.rules.map(rule => parseInt(rule.page)))}
                       </p>
                       
                       {/* Expand/Collapse Icon */}
                       <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                         {expandedChapters.includes(chapter.id) ? (
                           <ChevronUp className="w-6 h-6 text-white" />
                         ) : (
                           <ChevronDown className="w-6 h-6 text-white" />
                         )}
                       </div>
                     </div>
                   </div>

                  {/* Rules List */}
                  {expandedChapters.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {rule.number.split('.')[1] || rule.number}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {rule.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.page)}
                                  disabled={openingPDF === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.page ? 'Opening...' :  'View Document'}</span>
                                  {!isMobile && openingPDF !== rule.page && <ExternalLink className="w-3 h-3" />}
                                </button>

                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(rule.page)}
                                  disabled={openingContent === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === rule.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === rule.page ? 'Opening...' : 'View Content'}</span>
                                </button>

                                <span className="text-gray-400 text-sm lg:ml-2">
                                  Rule: {rule.number}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Accident Manual Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 12 chapters of the Accident Manual, providing essential information 
                  for railway accident management, emergency response procedures, investigation protocols, and safety compliance.
                </p>
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

export default AccidentManualChapters