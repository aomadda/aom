"use client"
import React, { useState, useEffect } from 'react'
import { FileText, ChevronDown, ChevronUp, BookOpenCheck, ExternalLink, Users, Ticket, GraduationCap, Award, Star, CreditCard, Pause, Ruler, Calendar, AlertTriangle, Heart, UserCheck, Scissors, FileQuestion, Settings, BarChart3 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const RailwayServantsPassRulesIndex = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
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

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(prev => prev === topicId ? null : topicId)
  }

  const openContent = (topicId: string) => {
    setOpeningContent(topicId)

    setTimeout(() => {
      router.push(`/acts/railway-servants-pass-rules-1986/content/${topicId}`)
      setOpeningContent(null)
    }, 100)
  }

  const topics = [
    {
      id: 'definitions',
      title: 'Important Definitions',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Key definitions and terminology used in Railway Servants (Pass) Rules, 1986'
    },
    {
      id: 'pass-types',
      title: 'Authority and Types',
      icon: <Ticket className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Authorities empowered to issue passes and different types of railway passes'
    },
    {
      id: 'duty-pass',
      title: 'Duty Pass',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Rules and regulations for duty passes issued to railway servants'
    },
    {
      id: 'pass-transfer',
      title: 'Pass on Transfer',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Pass facilities available to railway servants on transfer'
    },
    {
      id: 'privilege-pass',
      title: 'Privilege Pass',
      icon: <Award className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      description: 'Entitlement and rules for privilege passes for railway employees'
    },
    {
      id: 'members-pass',
      title: 'Members Permitted in Privilege Pass',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Family members and dependents permitted to travel on privilege passes'
    },
    {
      id: 'school-pass',
      title: 'School Pass',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      description: 'School pass facilities for children of railway servants'
    },
    {
      id: 'retirement-pass',
      title: 'Post-Retirement Complimentary Pass',
      icon: <UserCheck className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Complimentary pass facilities after retirement'
    },
    {
      id: 'widow-pass',
      title: 'Widow Pass',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Pass facilities for widows of railway servants'
    },
    {
      id: 'special-pass',
      title: 'Special Pass',
      icon: <Star className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Special pass facilities for exceptional circumstances'
    },
    {
      id: 'complimentary-pass',
      title: 'Complimentary Card Passes',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Rules for complimentary card passes and their usage'
    },
    {
      id: 'suspension-pass',
      title: 'Suspension Passes',
      icon: <Pause className="w-6 h-6" />,
      color: 'from-violet-500 to-violet-600',
      description: 'Pass facilities during suspension period'
    },
    {
      id: 'distance-restrictions',
      title: 'Distance Restrictions',
      icon: <Ruler className="w-6 h-6" />,
      color: 'from-rose-500 to-rose-600',
      description: 'Distance limitations and restrictions for various passes'
    },
    {
      id: 'yearend-pass',
      title: 'Year-ending Passes/PTOs',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-sky-500 to-sky-600',
      description: 'Year-ending pass and privilege ticket order facilities'
    },
    {
      id: 'loss-pass',
      title: 'Loss/Misuse/Fraudulent Use',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600',
      description: 'Rules regarding loss, misuse, and fraudulent use of passes and PTOs'
    },
    {
      id: 'entitles-pass',
      title: 'Privilege Ticket Order Entitlements',
      icon: <Ticket className="w-6 h-6" />,
      color: 'from-lime-500 to-lime-600',
      description: 'Entitlement rules for privilege ticket orders'
    },
    {
      id: 'companion-pass',
      title: 'Companion in Lieu of Attendant',
      icon: <Users className="w-6 h-6" />,
      color: 'from-fuchsia-500 to-fuchsia-600',
      description: 'Rules for companion travel in lieu of attendant'
    },
    {
      id: 'sahayaks-pass',
      title: 'Passes for Licensed Porters (Sahayaks)',
      icon: <Users className="w-6 h-6" />,
      color: 'from-slate-500 to-slate-600',
      description: 'Pass facilities for licensed railway porters'
    },
    {
      id: 'split-pass',
      title: 'Split Pass',
      icon: <Scissors className="w-6 h-6" />,
      color: 'from-zinc-500 to-zinc-600',
      description: 'Rules and procedures for split passes'
    },
    {
      id: 'other-notes',
      title: 'Other Notes',
      icon: <FileQuestion className="w-6 h-6" />,
      color: 'from-stone-500 to-stone-600',
      description: 'Additional notes and clarifications on pass rules'
    },
    {
      id: 'gm-powers',
      title: 'GM Powers to Condon Irregularities',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-neutral-500 to-neutral-600',
      description: 'Powers of General Managers to condone irregularities in pass rules'
    },
    {
      id: 'pass-levels',
      title: 'VII CPC Pay Matrix Levels',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-gray-500 to-gray-600',
      description: 'Pay levels as per VII Central Pay Commission matrix for pass entitlements'
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
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
                <FileText className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              RAILWAY SERVANTS (PASS) RULES, 1986
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">IMPORTANT TOPICS INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Complete guide covering Duty Pass, Privilege Pass, Complimentary Pass, Special Pass, Distance Restrictions,
              Year-ending Passes, and all other pass-related rules and regulations for railway employees.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Railway Servants Pass Rules, 1986 - Complete Study Material Reference</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Topic Header */}
                  <div
                    className={`bg-linear-to-r ${topic.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Topic Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {topic.icon}
                      </div>

                      {/* Topic Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {topic.title}
                        </h2>
                        <p className="text-white/80 text-sm mt-2">
                          {topic.description}
                        </p>
                      </div>

                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>

                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedTopic === topic.id ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topic Content */}
                  {expandedTopic === topic.id && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="flex items-center justify-center space-x-4 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        {/* View Content Button */}
                        <button
                          onClick={() => openContent(topic.id)}
                          disabled={openingContent === topic.id}
                          className={`flex items-center space-x-2 px-6 py-3 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                            openingContent === topic.id
                              ? 'bg-gray-500 cursor-not-allowed'
                              : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {openingContent === topic.id ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <BookOpenCheck className="w-4 h-4" />
                          )}
                          <span>{openingContent === topic.id ? 'Opening...' : 'View Content'}</span>
                          {!isMobile && openingContent !== topic.id && <ExternalLink className="w-3 h-3" />}
                        </button>
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
                  <FileText className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Complete Pass Rules Reference
                  </h3>
                </div>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  This comprehensive guide covers all essential topics for Railway Servants (Pass) Rules, 1986,
                  providing complete reference material for all types of passes and pass-related rules and regulations.
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

export default RailwayServantsPassRulesIndex
