"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, AlertTriangle, CheckCircle, AlertCircle, Search, Clipboard, ChevronDown, ChevronUp, Train, Signal, Wrench, AlertTriangle as ExclamationTriangle, FileText, BookOpenCheck, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BWMPartC = () => {
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
      if (prev.includes(chapterId)) {
        return prev.filter(id => id !== chapterId)
      }
      return [chapterId]
    })
  }

  const openPDF = (page: string) => {
    const pdfFileName = `BWMPartCPage${page}.pdf`
    const pdfPath = `/block-working-manual-pdfs/BWMPartCPages/${pdfFileName}`
    
    setOpeningPDF(page)
    
    // Small delay to show loading state
    setTimeout(() => {
      try {
        // Always try to open in new tab
        window.open(pdfPath, '_blank', 'noopener,noreferrer')
      } catch (error) {
        console.error('Error opening PDF:', error)
        // Fallback: try without parameters
        window.open(pdfPath, '_blank')
      } finally {
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (page: string) => {
    setOpeningContent(page)
    
    setTimeout(() => {
      router.push(`/bwm/content/C${page}`)
      setOpeningContent(null)
    }, 100)
  }

  const chapters = [
    {
      id: 1,
      title: "DESCRIPTION - BLOCK INSTRUMENTS, INDOOR APPARATUS AND OUTDOOR APPARATUS",
      icon: <Signal className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Comprehensive overview of block instruments and their components for double line working",
      rules: [
        { number: "1.1", title: "Provision of Block Instrument", page: "1A" },
        { number: "1.2", title: "Parts of Block Instrument", page: "1B" },
        { number: "1.3", title: "Description of Block Instrument", page: "1B" },
        { number: "1.4", title: "Indoor Apparatus", page: "1B" },
        { number: "1.5", title: "Home signal contacts", page: "1B" },
        { number: "1.6", title: "Outdoor Apparatus", page: "1B" }
      ]
    },
    {
      id: 2,
      title: "SYSTEMS OF WORKING, BLOCK COMPETENCY CERTIFICATE, CODE OF BELL SIGNALS, PRECEDENCE OF TRAINS, AND TRAIN SIGNAL REGISTER",
      icon: <Train className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "Working systems, competency requirements, bell codes, and signal management procedures",
      rules: [
        { number: "2.1", title: "Systems of working", page: "2" },
        { number: "2.2", title: "Block Competency Certificate", page: "2" },
        { number: "2.3", title: "Bell Code", page: "2" },
        { number: "2.4", title: "Acknowledgement of Signals", page: "2" },
        { number: "2.5", title: "Advise of code signals by Cabin Station Master to Station Master at the Station", page: "2" },
        { number: "2.6", title: "Precedence of trains", page: "2" },
        { number: "2.7", title: "Train Signal Register", page: "2" },
        { number: "2.8", title: "Station Masters handing over and taking over charge of duties", page: "2" },
        { number: "2.9", title: "Inspection of Train Signal Register", page: "2" },
        { number: "2.10", title: "Preservation of Train Signal Register", page: "2" }
      ]
    },
    {
      id: 3,
      title: "METHOD OF WORKING BLOCK INSTRUMENTS",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-fuchsia-500 to-fuchsia-600",
      description: "Detailed procedures for operating block instruments and signaling on double lines",
      rules: [
        { number: "3.1", title: "Access to and operation of equipment", page: "3" },
        { number: "3.2", title: "Signalling of a train from one Block station to another", page: "3" },
        { number: "3.2(A)(i)", title: "Despatching a train", page: "4A" },
        { number: "3.2(A)(ii)", title: "To cancel 'Line clear' before the train enters the block section", page: "4B" },
        { number: "3.2(A)(iii)", title: "Procedure for dispatching a train involving IBS", page: "4B" },
        { number: "3.2(B)", title: "Exchange of Private Numbers between Station Master and cabin /cabins for reception of trains", page: "4B" },
        { number: "3.3", title: "The 'Call attention' signal", page: "7A" },
        { number: "3.4", title: "Precautions before asking 'Is line clear'", page: "7B" },
        { number: "3.5", title: "The 'Is line clear' signal - when to be sent", page: "7B" },
        { number: "3.6", title: "Precautions before giving 'Line clear'", page: "7B" },
        { number: "3.7", title: "Acceptance of the 'Is line clear' signal and sending of 'Line clear' signal", page: "7B" },
        { number: "3.8", title: "Driver's authority to proceed", page: "7B" },
        { number: "3.9", title: "The 'Train entering block section' signal", page: "7B" },
        { number: "3.10", title: "Change of indications from 'Line clear' to 'Train on line'", page: "7B" },
        { number: "3.11", title: "Conditions for closing the block section", page: "7B" },
        { number: "3.12", title: "Precautions before giving the 'Train out of block section' or 'Obstruction removed' signal", page: "7B" }
      ]
    },
    {
      id: 4,
      title: "CAUTION ORDERS",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Caution order procedures and safety protocols for double line operations",
      rules: [
        { number: "4.1", title: "Caution order (G.R. 4.09)", page: "8" }
      ]
    },
    {
      id: 5,
      title: "USE OF SPECIAL SIGNALS AND PROCEDURE IN EMERGENCIES",
      icon: <ExclamationTriangle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Emergency procedures and special signal usage protocols for double line working",
      rules: [
        { number: "5.1", title: "Refusal of the 'Is Line clear' signal, and sending of the 'Obstruction danger' signal", page: "9A" },
        { number: "5.2", title: "Special use of 'Obstruction danger' signal", page: "9B" },
        { number: "5.3", title: "Obstruction on double line in the block section in advance (right line) - Block Forward", page: "10" },
        { number: "5.4", title: "Obstruction on double line in the block section in rear (wrong line) - Block Back", page: "11" },
        { number: "5.5", title: "Cancel last signal", page: "13A" },
        { number: "5.6", title: "Train wrongly described", page: "13B" },
        { number: "5.7", title: "Train unusually delayed", page: "14" },
        { number: "5.8", title: "'Stop and examine train' signal", page: "15A" },
        { number: "5.9", title: "Train passed without Tail Lamp / Flashing Tail Lamp or Tail Board", page: "15B" },
        { number: "5.10", title: "'Train divided' signal to block station in rear", page: "15B" },
        { number: "5.11", title: "Vehicles running away in wrong direction", page: "15B" },
        { number: "5.12", title: "Vehicles running away in right direction", page: "15B" },
        { number: "5.13", title: "Signal given in error", page: "15B" },
        { number: "5.14", title: "Government or Railway Telecommunication branch officials working on line affecting train signalling wires", page: "15B" }
      ]
    },
    {
      id: 6,
      title: "BLOCKING THE LINE FOR MATERIAL TRAINS, MOTOR TROLLIES, LORRIES, TROLLIES, RAIL DOLLIES AND RAIL-CUM-ROAD VEHICLES",
      icon: <Clipboard className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      description: "Procedures for blocking lines for various types of vehicles and material trains",
      rules: [
        { number: "6.1", title: "Material trains", page: "23A" },
        { number: "6.2", title: "Lorries, Push Trollies, Cycle Trollies, Motor trollies, Rail Dollies and Rail-cum-Road Vehicles", page: "23B" }
      ]
    },
    {
      id: 7,
      title: "TESTING OF BLOCK INSTRUMENTS",
      icon: <Search className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Testing procedures and maintenance protocols for block instruments",
      rules: [
        { number: "7.1", title: "Persons authorized to test", page: "23C" },
        { number: "7.2", title: "Block Section to be clear during test", page: "24A" },
        { number: "7.3", title: "Procedure for testing", page: "24B" },
        { number: "7.4", title: "Consent required before interfering with block working equipment", page: "24C" },
        { number: "7.5", title: "Block instrument maintenance work by S&T staff", page: "25A" }
      ]
    },
    {
      id: 8,
      title: "FAILURE OF BLOCK INSTRUMENTS OR APPARATUS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Failure handling procedures and emergency communication protocols for double line working",
      rules: [
        { number: "8.1", title: "Failure of Last Stop Signal", page: "25B" },
        { number: "8.2", title: "Failure of the operating handle lock", page: "25C" },
        { number: "8.3", title: "Failure of block instrument", page: "26" },
        { number: "8.4", title: "Reports to be sent", page: "27" },
        { number: "8.5", title: "Paper line clear ticket", page: "30" },
        { number: "8.6", title: "Working of trains during failure or suspension of Block Instrument", page: "31A" },
        { number: "8.7", title: "Procedure for obtaining/granting Line Clear using telephone attached to Block Instrument, Station to Station fixed telephone, Fixed telephone such as Railway auto-phone and BSNL phone as a means of communication between stations 'X' and 'Y'", page: "31B" },
        { number: "8.8", title: "Procedure for obtaining/granting Line Clear using Control telephone as a means of communication between stations 'X' and 'Y'", page: "32" },
        { number: "8.9", title: "Procedure for obtaining/granting Line Clear using VHF sets as a means of communication between stations 'X' and 'Y'", page: "34" },
        { number: "8.10", title: "Total interruption of communications on double line", page: "35" },
        { number: "8.11", title: "Restoration of working with block instruments", page: "36" },
        { number: "8.12", title: "Rules and regulations for Temporary Single Line (TSL) working on a double line section when one line is obstructed", page: "37" },
        { number: "8.13", title: "Rules and regulations for Temporary Single Line (TSL) working on a double line section during total interruption of communications", page: "38A" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-violet-900 to-fuchsia-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-purple-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-fuchsia-400/20 to-violet-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-purple-400/10 to-fuchsia-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-purple-500/20 to-violet-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-purple-500 to-violet-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-purple-100 to-violet-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK WORKING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-fuchsia-300 mb-4">PART-C - DOUBLE LINE BWMD</h2>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-violet-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Block Working Manual Part-C - Comprehensive guide covering all 8 chapters 
              with detailed procedures, safety protocols, and operational guidelines for double line block working.
            </p>
            <div className="mt-6 bg-linear-to-r from-purple-500/20 to-violet-500/20 rounded-lg p-4 backdrop-blur-sm border border-purple-400/30">
              <p className="text-purple-200 font-medium">BWMD 2008 - For Official Use Only</p>
            </div>
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
                        Pages {Math.min(...chapter.rules.map(rule => parseInt(rule.page)))} - {Math.max(...chapter.rules.map(rule => parseInt(rule.page)))}
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
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-purple-500 to-violet-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium">
                                {rule.title}
                              </p>
                              <p className="text-gray-400 text-sm mt-1">
                                Rule {rule.number} • Page - {rule.page}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.page)}
                                  disabled={openingPDF === rule.page}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.page
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.page ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.page ? 'Opening...' : 'View Document'}</span>
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
                    Complete Block Working Manual Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 8 chapters of the Block Working Manual Part-C, providing essential information 
                  for railway block working operations, safety protocols, emergency procedures, and operational guidelines for double line working systems.
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

export default BWMPartC