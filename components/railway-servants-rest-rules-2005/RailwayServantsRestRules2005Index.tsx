"use client"
import React, { useState, useEffect } from 'react'
import { FileText, ChevronDown, ChevronUp, BookOpenCheck, Clock, Shield, Settings, AlertTriangle, Scale } from 'lucide-react'
import { useRouter } from 'next/navigation'

const RailwayServantsRestRules2005Index = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [, setIsMobile] = useState(false)
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

  const openContent = (ruleId: string) => {
    setOpeningContent(ruleId)

    setTimeout(() => {
      router.push(`/acts/railway-servants-rest-rules-2005/content/${ruleId}`)
      setOpeningContent(null)
    }, 100)
  }

  const parts = [
    {
      id: 1,
      title: "Introduction",
      icon: <FileText className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500",
      description: "Short title, commencement and definitions",
      rules: [
        { number: "1", title: "Short title, commencement and application" },
        { number: "2", title: "Definitions" }
      ]
    },
    {
      id: 2,
      title: "Classification of Employment and Hours of Work",
      icon: <Clock className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      description: "Employment classification, working hours and overtime",
      rules: [
        { number: "3", title: "Prescribed authority to classify the employment of railway servant" },
        { number: "4", title: "Appeals against classification" },
        { number: "5", title: "Supervisory staff" },
        { number: "6", title: "Excluded staff" },
        { number: "7", title: "Criteria for determining classification of railway servants" },
        { number: "8", title: "Fixation of hours of work" },
        { number: "9", title: "Power to make temporary exemption" },
        { number: "10", title: "Principle of averaging and payment of overtime allowance" },
        { number: "11", title: "Register of extra hours of work" },
        { number: "12", title: "Periodical Rest" },
        { number: "13", title: "Compensatory periods of rest" }
      ]
    },
    {
      id: 3,
      title: "Authorities to Ensure Proper Implementation",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Supervisory authorities and implementation requirements",
      rules: [
        { number: "14", title: "Appointment of Supervisors" },
        { number: "15", title: "Display of rules and notices" },
        { number: "16", title: "Annual Return" }
      ]
    },
    {
      id: 4,
      title: "Residuary Powers",
      icon: <Settings className="w-6 h-6" />,
      color: "from-violet-500 to-purple-500",
      description: "Special case modifications and residual powers",
      rules: [
        { number: "17", title: "Power to make modification in special cases" }
      ]
    },
    {
      id: 5,
      title: "Repeal and Saving",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-rose-500 to-pink-500",
      description: "Repeal of previous rules and saving provisions",
      rules: [
        { number: "18", title: "The Railway Servants (Hours of Employment) Rules, 1961" }
      ]
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
                <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              HOURS OF WORK AND PERIOD OF REST
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The document is divided into parts, with each part containing specific rules.
              There are total 5 parts with 18 rules covering working hours and rest entitlements.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Railway Servants (Hours of Work and Period of Rest) Rules, 2005 - Complete Rules Reference</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {parts.map((part) => (
                <div
                  key={part.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Part Header */}
                  <div
                    className={`bg-linear-to-r ${part.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(part.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Part Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {part.icon}
                      </div>

                      {/* Part Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Part {part.id === 1 ? 'I' : part.id === 2 ? 'II' : part.id === 3 ? 'III' : part.id === 4 ? 'IV' : 'V'}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {part.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {part.description}
                        </p>
                      </div>

                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>

                      {/* Rules Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Rules: {part.rules.length}
                      </p>

                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(part.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rules List */}
                  {expandedSections.includes(part.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {part.rules.map((rule, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-12 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                              {rule.number}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium text-sm lg:text-base">
                                Rule {rule.number}: {rule.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
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

            {/* Footer */}
            <div className="mt-6 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Hours of Work and Period of Rest Rules Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all 5 parts with 18 rules of the Railway Servants (Hours of Work and Period of Rest) Rules, 2005,
                  providing complete framework for working hours, rest entitlements, and regulatory provisions for railway servants.
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

export default RailwayServantsRestRules2005Index