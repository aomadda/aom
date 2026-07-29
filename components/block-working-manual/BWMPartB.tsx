"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, AlertTriangle, CheckCircle, AlertCircle, Search, Clipboard, ChevronDown, ChevronUp, Train, Signal, Wrench, AlertTriangle as ExclamationTriangle, FileText, BookOpenCheck, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BWMPartB = () => {
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
    const pdfFileName = `BWMPartBPage${page}.pdf`
    const pdfPath = `/block-working-manual-pdfs/BWMPartBPages/${pdfFileName}`
    
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
      router.push(`/bwm/content/B${page}`)
      setOpeningContent(null)
    }, 100)
  }

  const chapters = [
    {
      id: 1,
      title: "DESCRIPTION OF BLOCK INSTRUMENTS, INDOOR APPARATUS AND OUTDOOR APPARATUS",
      icon: <Signal className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Comprehensive overview of tokenless block instruments and their components",
      rules: [
        { number: "1.1", title: "Provision of Block Instruments", page: "1A" },
        { number: "1.2", title: "Parts and description of Diodo Handle Type token less Block Instrument", page: "1B" },
        { number: "1.3", title: "Parts and description of Kyosan / Podanur make Push button token less block instruments", page: "6" },
        { number: "1.4", title: "Parts and Description of Axle Counter Proven Block Panel", page: "11" }
      ]
    },
    {
      id: 2,
      title: "SYSTEMS OF WORKING, BLOCK COMPETENCY CERTIFICATE, PRECEDENCE OF TRAINS, ACKNOWLEDGEMENT OF SIGNALS AND TRAIN SIGNAL REGISTER",
      icon: <Train className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Working systems, competency requirements, and signal management procedures",
      rules: [
        { number: "2.1", title: "Systems of working", page: "17A" },
        { number: "2.2", title: "Block Competency Certificate", page: "17B" },
        { number: "2.3", title: "Bell Code", page: "18" },
        { number: "2.4", title: "Acknowledgement of Signals", page: "19A" },
        { number: "2.5", title: "Precedence of trains", page: "19B" },
        { number: "2.6", title: "Train Signal Register", page: "20" },
        { number: "2.7", title: "Station Masters handing over / taking over charge", page: "22" },
        { number: "2.8", title: "Inspection of Train Signal Register", page: "23A" },
        { number: "2.9", title: "Preservation of Train Signal Register", page: "23B" }
      ]
    },
    {
      id: 3,
      title: "METHOD OF WORKING BLOCK INSTRUMENTS",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Detailed procedures for operating tokenless block instruments and signaling",
      rules: [
        { number: "3.1", title: "Access to and operation of equipment", page: "24A" },
        { number: "3.2", title: "Signalling of a train over the block section - Daido Handle Type tokenless block instrument", page: "24B" },
        { number: "3.2(A)", title: "Despatching a train", page: "24B" },
        { number: "3.2(B)", title: "To cancel 'Line clear' before the train enters block section", page: "24B" },
        { number: "3.2(C)", title: "Closing of block section after pushing back of train", page: "24B" },
        { number: "3.3", title: "Signalling of a train over the block section - Kyson / Podanur make push button tokenless block instruments", page: "29" },
        { number: "3.3(A)", title: "Despatching a train", page: "29" },
        { number: "3.3(B)", title: "To cancel 'Train Going To' indication before the train enters block section", page: "29" },
        { number: "3.3(C)", title: "To set the block instrument to 'Line closed' condition after train pushes back to the despatching station", page: "29" },
        { number: "3.4", title: "Operation of Slip siding and Catch siding while despatching / receiving a train in Kyosan/Podanur Push button type and Daido Handle type tokenless block instruments", page: "34" },
        { number: "3.5", title: "Signalling of a train over the block section - Axle Counter Proven Block Panel", page: "37" },
        { number: "3.5(A)", title: "Despatching a train", page: "37" },
        { number: "3.5(B)", title: "To cancel 'Line clear' before a train enters the block section", page: "37" },
        { number: "3.5(C)", title: "To Close the block section after pushing back of a train", page: "37" },
        { number: "3.6", title: "Operation of Slip siding and Catch siding while sending / receiving a train", page: "43" },
        { number: "3.7", title: "Shunting", page: "46" },
        { number: "3.7.1", title: "Shunting between the Last Stop Signal and opposing First Stop Signal at a class 'B' single line station equipped with two aspect signals", page: "46" },
        { number: "3.7.2", title: "Shunting between the Last Stop Signal and opposing First Stop Signal at a class 'B' single line station equipped with multiple aspect signals", page: "46" },
        { number: "3.7.3", title: "Shunting beyond First Stop Signal on a single line in Two Aspect Signalling & Multiple Aspect Signalling territories", page: "46" },
        { number: "3.7.4", title: "Shunting between the Last Stop Signal and opposing First Stop Signal - Daido Handle Type tokenless block instruments", page: "46" },
        { number: "3.7.5", title: "Shunting between the Last Stop Signal and opposing First Stop Signal – Kyosan / Podanur Type tokenless block instruments", page: "46" },
        { number: "3.7.6", title: "To Shunt between the Last Stop Signal and opposing First Stop Signal – Axle Counter Proven Block Panel", page: "46" },
        { number: "3.7.7", title: "Procedure for shunting during failure of Shunt key in all tokenless block instruments", page: "51A" },
        { number: "3.8", title: "The 'Call attention' signal", page: "51B" },
        { number: "3.9", title: "Precautions before asking 'Is line clear' (Daido Handle Type token less block instrument)", page: "52A" },
        { number: "3.10", title: "Precautions before giving 'Line clear'(Daido Handle Type tokenless block instrument)", page: "52B" },
        { number: "3.11", title: "Precautions before obtaining 'Train Going To indication' in Kyosan / Podanur push button tokenless block instrument", page: "53A" },
        { number: "3.12", title: "'Is line clear' in case of Daido Handle type tokenless block instrument and 'Train Going To' indication in respect of Kyosan / Podanur Push button tokenless block instrument – when to be obtained", page: "53B" },
        { number: "3.13", title: "Giving 'Line clear' – Daido Handle type tokenless block instruments", page: "53C" },
        { number: "3.14", title: "Loco Pilot's Authority to proceed", page: "54A" },
        { number: "3.15", title: "The 'Train entering block section' signal", page: "54B" },
        { number: "3.16", title: "Clearing the section and train arrival buzzer (Daido Handle type and Kyosan/Podanur push button/ tokenless block instruments)", page: "55A" },
        { number: "3.17", title: "Precautions before giving the 'Train out of block section' or 'Obstruction removed' signal", page: "55B" },
        { number: "3.18", title: "Private Numbers", page: "57" }
      ]
    },
    {
      id: 4,
      title: "CAUTION ORDERS",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Caution order procedures and safety protocols",
      rules: [
        { number: "4.1", title: "Caution order (G.R. 4.09)", page: "57" }
      ]
    },
    {
      id: 5,
      title: "USE OF SPECIAL SIGNALS AND PROCEDURE IN EMERGENCIES",
      icon: <ExclamationTriangle className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Emergency procedures and special signal usage protocols",
      rules: [
        { number: "5.1", title: "Refusal of the 'Is line clear' signal; sending of the 'Obstruction danger' signal", page: "58A" },
        { number: "5.2", title: "Special use of 'Obstruction danger' signal", page: "58B" },
        { number: "5.3", title: "Working of trains required to go beyond the First Stop Signal at a class B station – Daido Handle type and Kyosan/Podanur push button tokenless block instruments", page: "59A" },
        { number: "5.4", title: "'Cancel last signal'", page: "59B" },
        { number: "5.5", title: "'Signal given in error' signal", page: "60A" },
        { number: "5.6", title: "Trains unusually delayed", page: "60B" },
        { number: "5.7", title: "'Stop and examine train' signal", page: "61A" },
        { number: "5.8", title: "'Train passed without tail lamp / flashing tail lamp or tail board' signal", page: "61B" },
        { number: "5.9", title: "'Train divided' signal", page: "62" },
        { number: "5.10", title: "'Vehicles running away into the block section' signal", page: "63" },
        { number: "5.11", title: "Precautions when Government or Railway Telecommunication staff require to work on the telecommunication wires", page: "64" }
      ]
    },
    {
      id: 6,
      title: "LORRIES, PUSH TROLLIES, CYCLE TROLLIES, MOTOR TROLLIES, RAIL DOLLIES AND RAIL-CUM-ROAD VEHICLES (G.R.15.25)",
      icon: <Clipboard className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Procedures for blocking lines for various types of vehicles",
      rules: [
        { number: "6.1", title: "Blocking the line for Lorries, Push trollies, Cycle trollies, Motor trollies, Rail dollies and Rail-cumRoad Vehicles", page: "66" }
      ]
    },
    {
      id: 7,
      title: "TESTING OF BLOCK INSTRUMENTS",
      icon: <Search className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Testing procedures and maintenance protocols for tokenless block instruments",
      rules: [
        { number: "7.1", title: "The 'Testing' signal", page: "67A" },
        { number: "7.2", title: "Persons authorized to test", page: "67B" },
        { number: "7.3", title: "Block Section to be clear during Test", page: "67C" },
        { number: "7.4", title: "Procedure for testing", page: "67D" }
      ]
    },
    {
      id: 8,
      title: "FAILURE OF BLOCK INSTRUMENTS OR APPARATUS",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Failure handling procedures and emergency communication protocols",
      rules: [
        { number: "8.1", title: "Failure of tokenless block instruments", page: "69" },
        { number: "8.2", title: "Alternative means of communication", page: "73A" },
        { number: "8.3", title: "Block instruments failure record", page: "73B" },
        { number: "8.4", title: "Reports to be sent", page: "74A" },
        { number: "8.5", title: "Train signalling during interruption or suspension of block working", page: "74B" },
        { number: "8.6", title: "Procedure to be adopted when the 'Train entering block section' signal cannot be given owing to the Block Instrument having failed after the departure of the train or before clearing the block section for the train", page: "76A" },
        { number: "8.7", title: "Procedure for obtaining/granting Line Clear-using telephone attached to Block Instrument, Station to Station fixed telephone, Fixed telephone such as Railway auto-phone and BSNL phone as a means of communication between stations 'X' and 'Y'", page: "76B" },
        { number: "8.8", title: "Procedure for obtaining/granting Line Clear-using Control telephone as a means of communication between stations 'X' and 'Y'", page: "77" },
        { number: "8.9", title: "Procedure for obtaining/granting Line Clear using VHF sets as a means of communication between stations 'X' and 'Y'", page: "79" },
        { number: "8.10", title: "Instructions for working trains during total interruption of communications", page: "80A" },
        { number: "8.11", title: "Resumption of block working after interruption or suspension", page: "80B" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BLOCK WORKING MANUAL
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-cyan-300 mb-4">PART-B - SINGLE LINE - TOKENLESS</h2>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete Chapter Index for Block Working Manual Part-B - Comprehensive guide covering all 8 chapters 
              with detailed procedures, safety protocols, and operational guidelines for single line tokenless block working systems.
            </p>
            <div className="mt-6 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4 backdrop-blur-sm border border-emerald-400/30">
              <p className="text-emerald-200 font-medium">BWMS (TL) 2008 - For Official Use Only</p>
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
                            <div className="shrink-0 w-8 h-8 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
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
                                      : 'bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:scale-105'
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
                    Complete Tokenless Block Working Manual Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 8 chapters of the Block Working Manual Part-B, providing essential information 
                  for railway tokenless block working operations, safety protocols, emergency procedures, and operational guidelines for modern signaling systems.
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

export default BWMPartB