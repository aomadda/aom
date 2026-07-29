"use client"
import React, { useState, useEffect } from 'react'
import { FileText, ChevronDown, ChevronUp, BookOpenCheck, ExternalLink, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LeaveRules1949Index = () => {
  const ruleDescriptions = [
    'Short title',
    'Extent of application',
    'Right to leave',
    'Effect of dismissal, removal or resignation on leave at credit',
    'Conversion of one kind of leave into another',
    'Commencement and end of leave',
    'Combination of different kinds of leave',
    'Combination of holidays with leave',
    'Employment during leave',
    'Maximum amount of continuous leave',
    'Application for leave',
    'Grant of leave',
    'Leave account',
    'Verification of title to leave',
    'Leave when not to be granted',
    'Recall to duty before expiry of leave',
    'Return to duty from leave',
    'Absence after the expiry of leave',
    'Grant of leave on Medical Certificate',
    'Grant of leave on Medical Certificate to Group A and Group B Officers',
    'Comutted leave/Leave on Production of Medical Certificate by the Railway Servants',
    'Leave to a railway servant who is unlikely to be fit to return to duty',
    'Leave on average pay',
    'Calculation of leave on average pay',
    'Leave applicable to school staff',
    'Leave on half average pay',
    'Commuted leave',
    'Leave not due',
    'Leave not due to temporary railway employees',
    'Extraordinary leave',
    'Leave to probationers and a railway servant on probation',
    'Leave to Special Class Railway Apprentices',
    'Leave to Apprentices Mechanics',
    'Leave to Trade Apprentices',
    'Leave to other Apprentices',
    'Extraordinary leave to Apprentices',
    'General Conditions for grant of leave to Apprentices',
    'Leave to persons re-employed after retirement',
    'Leave to workshop staff',
    'Leave preparatory to retirement & Encashment of Leave on Average Pay along with Railway Pass while in service',
    'Leave beyond the date of retirement or quitting service',
    'Leave on termination of employment and leave (terminal) to teporary railway servantm',
    'Drawal of leave salary',
    'Leave salary',
    'Leave salary to workshop staff',
    'Leave salary to running staff',
    'Reckoning of special pay for leave salary',
    'Advances of leave salary',
    'Cash equivalent of leave salary in case of death in service & Payment of Cash equivalent of Leave Salary in case of death etc. of Railway servant',
    'Cash Payment in lieu of unutilized leave on average pay on the date of retirement',
    'Maternity leave & Paternity Leave & Paternity Leave to Leave to Male casual Railway employee who has been granted temporary status & Child Adoption Leave & Paternity Leave for child adoption & Child Care Leave',
    'Special disability leave for injury intentionally inflicted',
    'Special disability leave for accidental  injury',
    'Hospital Leave',
    'Quarantine Leave-- Deleted',
    'Study Leave',
    'Miscellaneous',
  ]

  const [expandedRule, setExpandedRule] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
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

  const toggleRule = (ruleId: string) => {
    setExpandedRule(prev => prev === ruleId ? null : ruleId)
  }

  const openContent = (ruleId: string) => {
    setOpeningContent(ruleId)
    
    setTimeout(() => {
      router.push(`/acts/railway-servants-leave-rules-1949/content/${ruleId}`)
      setOpeningContent(null)
    }, 100)
  }

  // Generate rules array from 501 to 557
  const rules = Array.from({ length: 57 }, (_, i) => {
    const ruleNumber = 501 + i
    const colors = [
      'from-emerald-500 to-emerald-600',
      'from-teal-500 to-teal-600',
      'from-cyan-500 to-cyan-600',
      'from-blue-500 to-blue-600',
      'from-indigo-500 to-indigo-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-rose-500 to-rose-600',
      'from-orange-500 to-orange-600',
      'from-amber-500 to-amber-600',
    ]
    const colorIndex = i % colors.length
    
    return {
      id: ruleNumber.toString(),
      title: `Rule ${ruleNumber}`,
      icon: <Calendar className="w-6 h-6" />,
      color: colors[colorIndex],
      description: ruleDescriptions[i] ?? `Railway Servants (Liberalised Leave) Rules, 1949 - Rule ${ruleNumber}`,
    }
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 lg:p-3 p-2 rounded-full">
                <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-4xl text-xl font-bold bg-linear-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVANTS (LIBERALISED LEAVE) RULES, 1949
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-emerald-300 mb-4">RULES INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide covering all rules from Rule 501 to Rule 557 - 
              Essential reference material for Railway Servants regarding leave entitlements and regulations.
            </p>
            <div className="mt-6 bg-linear-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-4 backdrop-blur-sm border border-emerald-400/30">
              <p className="text-emerald-200 font-medium">Railway Servants (Liberalised Leave) Rules, 1949 - Complete Rules Reference</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {rules.map((rule) => (
                <div
                  key={rule.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Rule Header */}
                  <div 
                    className={`bg-linear-to-r ${rule.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleRule(rule.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Rule Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {rule.icon}
                      </div>
                      
                      {/* Rule Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {rule.title}
                        </h2>
                        <p className="text-white/80 text-sm mt-2">
                          {rule.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedRule === rule.id ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rule Content */}
                  {expandedRule === rule.id && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="flex items-center justify-center space-x-4 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        {/* View Content Button */}
                        <button
                          onClick={() => openContent(rule.id)}
                          disabled={openingContent === rule.id}
                          className={`flex items-center space-x-2 px-6 py-3 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                            openingContent === rule.id
                              ? 'bg-gray-500 cursor-not-allowed'
                              : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {openingContent === rule.id ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <BookOpenCheck className="w-4 h-4 hidden" />
                          )}
                          <span>{openingContent === rule.id ? 'Opening...' : 'View Content'}</span>
                          {!isMobile && openingContent !== rule.id && <ExternalLink className="w-3 h-3" />}
                        </button>
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

export default LeaveRules1949Index
