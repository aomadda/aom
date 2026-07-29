"use client"
import React, { useState, useCallback } from 'react'
import { FileText, AlertTriangle, Heart, ChevronDown, ChevronUp, BookOpen, ExternalLink, BookOpenCheck, CheckCircle } from 'lucide-react'
import { AlertCircle, Gavel } from 'lucide-react'
import { FileSpreadsheet } from 'lucide-react'
import { useRouter } from 'next/navigation'

const heroTitle = "GSR APPENDICES"
const heroSubtitle = "Complete Appendix Index for General and Subsidiary Rules"

const GeneralSubsidiaryRulesAppendix = () => {
  const [expandedAppendices, setExpandedAppendices] = useState<number[]>([])
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  const toggleAppendix = useCallback((appendixId: number) => {
    setExpandedAppendices(prev => {
      if (prev.includes(appendixId)) {
        return prev.filter(id => id !== appendixId)
      }
      return [appendixId]
    })
  }, [])

  const openPDF = useCallback((pageNumber: string) => {
    // Handle special cases for page numbers that have different file names
    let pdfFileName = ''
    
    // Convert page number to PDF filename format
    // Handle cases like "350", "356A", "464D", etc.
    const formattedPage = pageNumber.toUpperCase()
    pdfFileName = `GSRAppendixPage${formattedPage}.pdf`
    
    const pdfPath = `/general-subsidiary-rules-pdf-pages/g&sr-appendix-pdf-pages/${pdfFileName}`

    setOpeningPDF(pageNumber)

    setTimeout(() => {
      try {
        // Use matchMedia for more reliable mobile detection
        const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
        if (isMobileDevice) {
          window.location.href = pdfPath
        } else {
          const newWindow = window.open(pdfPath, '_blank')
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            // Popup blocked, fallback to same window
            window.location.href = pdfPath
          }
          setOpeningPDF(null)
        }
      } catch (error) {
        console.error('Error opening PDF:', error)
        setOpeningPDF(null)
      }
    }, 100)
  }, [])

  const openContent = useCallback((pageNumber: string) => {
    setOpeningContent(pageNumber)

    setTimeout(() => {
      try {
        const formattedPage = pageNumber.toUpperCase()
        router.push(`/manuals/general-subsidiary-rules/content/${formattedPage}`)
        setOpeningContent(null)
      } catch (error) {
        console.error('Error opening content:', error)
        setOpeningContent(null)
      }
    }, 100)
  }, [router])

  const appendices = [
    {
      id: 1,
      title: "APPENDIX - I",
      icon: <AlertTriangle className="w-7 h-7 text-white" />,
      color: "from-red-500 to-red-600",
      description: "CAUTION ORDERS",
      pageRange: "350 to 355",
      content: [
        { number: "1", title: "Circumstances for issue of Caution Order", page: "350" },
        { number: "2", title: "Method of notifying imposition of speed restriction or special precautions", page: "351" },
        { number: "3", title: "Method of obtaining acknowledgement from the Station Master of ‗Notice Station‘", page: "352" },
        { number: "4", title: "List of ‗Notice Stations‘", page: "352" },
        { number: "5", title: "Description and preparation of Caution Order", page: "352" },
        { number: "6", title: "Procedure for issue of Caution Order by the Station Master of Notice Station", page: "353" },
        { number: "7", title: "In case of train originating from station other than ‘Notice Stations’", page: "353" },
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
      icon: <Heart className="w-7 h-7 text-white" />,
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
      icon: <FileText className="w-7 h-7 text-white" />,
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
      icon: <AlertCircle className="w-7 h-7 text-white" />,
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
      icon: <Gavel className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
      color: "from-teal-500 to-teal-600",
      description: "INTERLOCKING",
      pageRange: "445 to 456",
      content: [
        {number: "1", title: "Interlocking", page: "445"},
        {number: "2", title: "PANEL INTERLOCKING", page: "447"},
        {number: "3", title: "SIEMEN’S PANEL", page: "447"},
        {number: "4", title: "PODANUR WORKSHOP PANEL", page: "450"},
        {number: "5", title: "Common features in the operation of Siemens’ and Podanur workshop panels", page: "452"},
        {number: "6", title: "‘Dos’ for Station Masters", page: "454"},
        {number: "7", title: "‘Don’ts for Station Masters", page: "455"},
        {number: "8", title: "‘Don’ts’ for S & T Staff", page: "456"},
      ]
    },
    {
      id: 12,
      title: "APPENDIX - XII",
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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
      icon: <FileSpreadsheet className="w-7 h-7 text-white" />,
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

  // Disable blur on mobile for better performance
  const blurClass = 'blur-none md:blur-2xl lg:blur-3xl'

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduced opacity and no blur on mobile for performance */}
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 md:from-emerald-500/20 to-teal-500/10 md:to-teal-500/20 rounded-full ${blurClass}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-500/10 md:from-teal-500/20 to-cyan-500/10 md:to-cyan-500/20 rounded-full ${blurClass}`}></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6">
              {heroTitle}
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-teal-300 mb-4">Comprehensive Reference Guide for Railway Operations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {heroSubtitle} - Essential reference materials covering supplementary instructions, special procedures, and detailed protocols for comprehensive railway operations.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {appendices.map((appendix) => {
                // Disable backdrop-blur on mobile for better performance
                const cardBlurClass = 'backdrop-blur-none md:backdrop-blur-sm lg:backdrop-blur-lg'
                return (
                <div
                  key={appendix.id}
                  className={`bg-white/10 ${cardBlurClass} rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-200 overflow-hidden border border-white/20 hover:bg-white/15`}
                >
                  <div
                    className={`bg-gradient-to-r ${appendix.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-200`}
                    onClick={() => toggleAppendix(appendix.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {appendix.icon}
                      </div>
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {appendix.title}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {appendix.description}
                        </p>
                      </div>
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Pages: {appendix.pageRange}
                      </p>
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedAppendices.includes(appendix.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedAppendices.includes(appendix.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {appendix.content && appendix.content.map((item, index) => {
                          // Disable backdrop-blur on mobile for better performance
                          const itemBlurClass = 'backdrop-blur-none md:backdrop-blur-sm'
                          return (
                          <div
                            key={index}
                            className={`flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 ${itemBlurClass} rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/10`}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {item.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                <button
                                  onClick={() => openPDF(item.page)}
                                  disabled={openingPDF === item.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-200 ${
                                    openingPDF === item.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-emerald-500 to-teal-600 active:from-emerald-600 active:to-teal-700 md:hover:from-emerald-600 md:hover:to-teal-700 md:hover:shadow-lg md:hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === item.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === item.page ? 'Opening...' : 'View Document'}</span>
                                  {openingPDF !== item.page && <ExternalLink className="w-3 h-3 hidden md:block" />}
                                </button>

                                <button
                                  onClick={() => openContent(item.page)}
                                  disabled={openingContent === item.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-200 ${
                                    openingContent === item.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-gradient-to-r from-green-500 to-emerald-600 active:from-green-600 active:to-emerald-700 md:hover:from-green-600 md:hover:to-emerald-700 md:hover:shadow-lg md:hover:scale-105'
                                  }`}
                                >
                                  {openingContent === item.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === item.page ? 'Opening...' : 'View Content'}</span>
                                </button>

                                <span className="text-gray-400 text-sm lg:ml-2">
                                  Page: {item.page}
                                </span>
                              </div>
                            </div>
                          </div>
                        )})}
                      </div>

                      {/* Special Note for Deleted Appendix */}
                      {appendix.id === 6 && (
                        <div className="mt-4 p-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-xl">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                            <p className="text-red-200 font-medium">
                              This appendix has been deleted from current regulations
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )})}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
              <div className="bg-white/10 backdrop-blur-none md:backdrop-blur-sm lg:backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Appendix Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive appendix guide covers all 17 appendices of the General and Subsidiary Rules, providing essential reference materials 
                  for supplementary instructions, special procedures, and detailed protocols for comprehensive railway operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GeneralSubsidiaryRulesAppendix  