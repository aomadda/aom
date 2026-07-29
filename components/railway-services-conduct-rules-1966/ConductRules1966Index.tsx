"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, Scale, Shield, Users, FileText, ChevronDown, ChevronUp, ExternalLink, BookOpenCheck, Gavel, Briefcase, Newspaper, MessageSquare, Gift, Home, Banknote, Heart, Megaphone, Vote, UserCheck, AlertTriangle, FileSearch } from 'lucide-react'
import { useRouter } from 'next/navigation'

const ConductRules1966Index = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
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

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openPDF = (ruleNumber: string) => {
    const pdfFileName = `ConductRules1966Rule${ruleNumber}.pdf`
    const pdfPath = `/railway-services-conduct-rules-1966/${pdfFileName}`
    
    setOpeningPDF(ruleNumber)
    setTimeout(() => {
      if (isMobile) {
        window.location.href = pdfPath
      } else {
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (ruleNumber: string) => {
    setOpeningContent(ruleNumber)
    
    setTimeout(() => {
      router.push(`/acts/railway-services-conduct-rules-1966/content/${ruleNumber}`)
      setOpeningContent(null)
    }, 100)
  }

  const rules = [
    { number: "1", title: "Short title.", icon: <FileText className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { number: "2", title: "Definition", icon: <FileSearch className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { number: "3", title: "General", icon: <BookOpen className="w-6 h-6" />, color: "from-purple-500 to-purple-600" },
    { number: "4", title: "Employment of near relatives of railway servants in Company or firm enjoying Government patronage.", icon: <Briefcase className="w-6 h-6" />, color: "from-yellow-500 to-yellow-600" },
    { number: "5", title: "Taking part in politics and elections", icon: <Vote className="w-6 h-6" />, color: "from-red-500 to-red-600" },
    { number: "6", title: "Joining of Associations or Unions by Railway Servants", icon: <Users className="w-6 h-6" />, color: "from-orange-500 to-orange-600" },
    { number: "7", title: "Demonstration.", icon: <Megaphone className="w-6 h-6" />, color: "from-indigo-500 to-indigo-600" },
    { number: "8", title: "Connection with press or other media", icon: <Newspaper className="w-6 h-6" />, color: "from-teal-500 to-teal-600" },
    { number: "9", title: "Criticism of Government", icon: <MessageSquare className="w-6 h-6" />, color: "from-pink-500 to-pink-600" },
    { number: "10", title: "Evidence before Committee or any other Authority", icon: <Gavel className="w-6 h-6" />, color: "from-cyan-500 to-cyan-600" },
    { number: "11", title: "Communication of Official Information", icon: <FileText className="w-6 h-6" />, color: "from-emerald-500 to-emerald-600" },
    { number: "12", title: "Subscription", icon: <Heart className="w-6 h-6" />, color: "from-rose-500 to-rose-600" },
    { number: "13", title: "Gifts", icon: <Gift className="w-6 h-6" />, color: "from-violet-500 to-violet-600" },
    { number: "14", title: "Public demonstrations in honour of Railway servants", icon: <UserCheck className="w-6 h-6" />, color: "from-amber-500 to-amber-600" },
    { number: "15", title: "Private trade or Employment", icon: <Briefcase className="w-6 h-6" />, color: "from-red-600 to-red-700" },
    { number: "16", title: "Investment, lending and borrowing", icon: <Banknote className="w-6 h-6" />, color: "from-slate-500 to-slate-600" },
    { number: "17", title: "Insolvency and Habitual indebtedness", icon: <AlertTriangle className="w-6 h-6" />, color: "from-orange-600 to-orange-700" },
    { number: "18", title: "Movable, immovable and valuable Property", icon: <Home className="w-6 h-6" />, color: "from-blue-600 to-blue-700" },
    { number: "19", title: "Vindication of Acts and Character of Railway servants.", icon: <Shield className="w-6 h-6" />, color: "from-green-600 to-green-700" },
    { number: "20", title: "Canvassing of Non-official or other Influence", icon: <Users className="w-6 h-6" />, color: "from-purple-600 to-purple-700" },
    { number: "21", title: "Restrictions Regarding Marriage", icon: <Heart className="w-6 h-6" />, color: "from-pink-600 to-pink-700" },
    { number: "22", title: "Consumption of intoxicating Drinks and Drugs", icon: <AlertTriangle className="w-6 h-6" />, color: "from-red-700 to-red-800" },
    { number: "23", title: "Interpretation", icon: <FileSearch className="w-6 h-6" />, color: "from-indigo-600 to-indigo-700" },
    { number: "24", title: "Delegation of Powers", icon: <Scale className="w-6 h-6" />, color: "from-teal-600 to-teal-700" },
    { number: "25", title: "Repeal and Savings", icon: <FileText className="w-6 h-6" />, color: "from-gray-600 to-gray-700" }
  ]

  // Group rules into chapters for better organization
  const chapters = [
    {
      id: 1,
      title: "PRELIMINARY",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Short title, definitions and general provisions",
      rules: rules.slice(0, 3)
    },
    {
      id: 2,
      title: "EMPLOYMENT AND POLITICAL ACTIVITIES",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Rules regarding employment, politics and associations",
      rules: rules.slice(3, 7)
    },
    {
      id: 3,
      title: "MEDIA AND COMMUNICATION",
      icon: <Newspaper className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Rules regarding press, media and official information",
      rules: rules.slice(7, 11)
    },
    {
      id: 4,
      title: "FINANCIAL AND PROPERTY MATTERS",
      icon: <Banknote className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Rules regarding subscriptions, gifts, property and financial matters",
      rules: rules.slice(11, 18)
    },
    {
      id: 5,
      title: "CHARACTER AND CONDUCT",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Rules regarding vindication, marriage and intoxicants",
      rules: rules.slice(18, 22)
    },
    {
      id: 6,
      title: "MISCELLANEOUS",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Interpretation, delegation and repeal provisions",
      rules: rules.slice(22, 25)
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <Gavel className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
        THE RAILWAY SERVICES (CONDUCT) RULES, 1966
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Rule Index for Railway Services (Conduct) Rules 1966 - Complete regulatory framework covering 
              all 25 rules with detailed provisions governing conduct, behavior, and ethical standards for railway servants.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Railway Services (Conduct) Rules 1966 - Regulatory Reference Document</p>
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
                    onClick={() => toggleSection(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Chapter Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {chapter.icon}
                      </div>
                      
                      {/* Chapter Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Chapter {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : chapter.id === 4 ? 'IV' : chapter.id === 5 ? 'V' : 'VI'}
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
                      
                      {/* Rules Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Rules: {chapter.rules.length}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedSections.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className={`shrink-0 w-12 h-8 bg-linear-to-r ${rule.color} text-white rounded-lg flex items-center justify-center text-sm font-semibold`}>
                              {rule.number}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start space-x-3 mb-2">
                                <div className="mt-0.5 text-white/70">
                                  {rule.icon}
                                </div>
                                <p className="text-gray-200 font-medium text-sm lg:text-base flex-1">
                                  {rule.title}
                                </p>
                              </div>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(rule.number)}
                                  disabled={openingPDF === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === rule.number ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== rule.number && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(rule.number)}
                                  disabled={openingContent === rule.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === rule.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === rule.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === rule.number ? 'Opening...' : 'View Content'}</span>
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

export default ConductRules1966Index
