'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AuthNav, { type AuthUser } from '@/components/AuthNav'

type TopicNavLink = { href: string; label: string; icon: string }

const topicsLinksRaw: TopicNavLink[] = [
  { href: '/topics/chief-controller', label: 'Chief Controller', icon: '👨‍💼' },
  { href: '/topics/container-rail-terminals', label: 'Container rail terminals', icon: '🏗️' },
  { href: '/topics/public-complaints', label: 'Public complaints', icon: '📢' },
  { href: '/topics/establishment-rules', label: 'Establishment rules', icon: '📜' },
  { href: '/topics/financial-rules', label: 'Financial rules', icon: '💰' },
  { href: '/topics/general-rules', label: 'General rules', icon: '📘' },
  { href: '/topics/railway-acts', label: 'Railway acts', icon: '⚖️' },
  { href: '/topics/operating-material', label: 'Operating material', icon: '📂' },
  { href: '/topics/hrms', label: 'HRMS', icon: '👥' },

  { href: '/topics/irec', label: 'IREC', icon: '📕' },
  { href: '/topics/irem', label: 'IREM', icon: '📗' },
  { href: '/topics/joint-consultative-machinery', label: 'Joint consultative machinery', icon: '💬' },
  { href: '/topics/staff-benefit-fund', label: 'Staff benefit fund', icon: '🤝' },
  { href: '/topics/macp', label: 'MACP', icon: '📈' },
  { href: '/topics/apar', label: 'APAR', icon: '📋' },
  { href: '/topics/cat', label: 'CAT', icon: '📝' },
  { href: '/topics/master-circulars', label: 'Master circulars', icon: '📜' },
  { href: '/topics/merry-go-round', label: 'Merry go round', icon: '🎠' },
  { href: '/topics/mission-3000MT', label: 'Mission 3000 MT', icon: '🎯' },
  { href: '/topics/service-rules', label: 'Service rules', icon: '📋' },
  { href: '/topics/leave-travel-concession', label: 'Leave travel concession', icon: '🎫' },
  { href: '/topics/govt-pension', label: 'Government pension', icon: '🏛️' },
  { href: '/topics/government-e-market', label: 'Government e-market', icon: '🛒' },
  { href: '/topics/national-logistics-policy', label: 'National logistics policy', icon: '📦' },
  { href: '/topics/national-pension-scheme', label: 'National pension scheme', icon: '💰' },
  { href: '/topics/permanent-negotiating-machinery', label: 'Permanent negotiating machinery', icon: '🗣️' },
  { href: '/topics/prem', label: 'PREM', icon: '📑' },
  { href: '/topics/national-rail-plan', label: 'National rail plan', icon: '🗺️' },
  { href: '/topics/quarters', label: 'Quarters', icon: '🏠' },
  { href: '/topics/schemes', label: 'Schemes', icon: '📋' },
  { href: '/topics/transfers', label: 'Transfers', icon: '🔄' },
  { href: '/topics/wagons-data', label: 'Wagons data', icon: '🚃' },
  { href: '/topics/coaches-data', label: 'Coaches data', icon: '🚃' },
  { href: '/topics/engine-on-load', label: 'Engine on load', icon: '🚂' },
  { href: '/topics/gati-shakti-terminals', label: 'Gati Shakti terminals', icon: '⚡' },
  { href: '/topics/information-technology-apps', label: 'Information technology apps', icon: '💻' },
]

const topicsLinks: TopicNavLink[] = topicsLinksRaw

type NavbarProps = {
  user?: AuthUser
}

const Navbar = ({ user = null }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActsDropdownOpen, setIsActsDropdownOpen] = useState(false)
  const [isManualsDropdownOpen, setIsManualsDropdownOpen] = useState(false)
  const [isTopicsDropdownOpen, setIsTopicsDropdownOpen] = useState(false)
  const [isQuizzesDropdownOpen, setIsQuizzesDropdownOpen] = useState(false)
  const [isGeneralAwarenessDropdownOpen, setIsGeneralAwarenessDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/abbreviations', label: 'Abbreviations' },
    { href: '/definitions', label: 'Definitions' },
  ]

  const actsLinks = [
    { href: '/acts/disaster-management-act-2005', label: 'Disaster Management Act, 2005' },
    { href: '/acts/employees-compensation-act-2010', label: 'Employees Compensation Act, 2010' },
    { href: '/acts/factories-act-1948', label: 'Factories Act, 1948' },
    { href: '/acts/industrial-disputes-act-1947', label: 'Industrial Disputes Act, 1947' },
    { href: '/acts/industrial-relations-code-2010', label: 'Industrial Relations Code, 2010' },
    { href: '/acts/indian-railways-act-1989', label: 'Indian Railway Acts, 1989' },
    { href: '/acts/official-language-act-1963', label: 'Official Language Act, 1963' },
    { href: '/acts/railway-servants-da-rules-1968', label: 'Railway Servants (DA) Rules, 1968' },
    { href: '/acts/railway-servants-pass-rules-1986', label: 'Railway Servants (Pass) Rules, 1986' },
    { href: '/acts/railway-servants-leave-rules-1949', label: 'Railway Servants (Leave) Rules, 1949' },
    { href: '/acts/railway-servants-rest-rules-2005', label: 'Railway Servants (Rest) Rules, 2005' },
    { href: '/acts/railway-services-conduct-rules-1966', label: 'Railway Services (Conduct) Rules, 1966' },
    { href: '/acts/right-to-information-act-2005', label: 'Right to Information Act, 2005' },
    { href: '/acts/trade-union-act-1926', label: 'Trade Union Act, 1926' },
    { href: '/acts/workmen-compensation-act-1923', label: 'Workmen Compensation Act, 1923' },
  ]

  const manualsLinks = [
    { href: '/manuals/accident-manual', label: 'Accident Manual', icon: '⚠️' },
    { href: '/manuals/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
    { href: '/manuals/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
    { href: '/manuals/opertaing-manual', label: 'Operating Manual', icon: '📘' },
    { href: '/manuals/indian-railways-operating-manual', label: 'Indian Railways Operating Manual', icon: '🚂' },
    { href: '/manuals/station-working-rules', label: 'Station Working Rules', icon: '🚉' },
    { href: '/manuals/working-time-table', label: 'Working Time Table', icon: '⏰' },
  ]

  const quizzesLinks = [
    { href: '/quizzes/accident-manual', label: 'Accident Manual', icon: '⚠️' },
    { href: '/quizzes/aom-previous-papers', label: 'AOM Previous Papers', icon: '📝' },
    { href: '/quizzes/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
    { href: '/quizzes/commercial-department', label: 'Commercial Department', icon: '💼' },
    { href: '/quizzes/establishment-rules', label: 'Establishment Rules', icon: '📜' },
    { href: '/quizzes/financial-rules', label: 'Financial Rules', icon: '💰' },
    { href: '/quizzes/general-awareness', label: 'General Awareness', icon: '🌐' },
    { href: '/quizzes/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
    { href: '/quizzes/kavach', label: 'Kavach', icon: '🛡️' },
    { href: '/quizzes/operating-department', label: 'Operating Department', icon: '🚂' },
    { href: '/quizzes/operating-manual', label: 'Operating Manual', icon: '📘' },
    { href: '/quizzes/rajabhasha', label: 'Rajabhasha', icon: '📝' },
    { href: '/quizzes/railway-gk', label: 'RailwayGK', icon: '🧠' },
  ]

  const generalAwarenessLinks = [
    { href: '/general-awareness/abbreviations', label: 'Abbreviations', icon: '📝' },
    { href: '/general-awareness/awards', label: 'Awards', icon: '🏆' },
    { href: '/general-awareness/banking-finance', label: 'Banking & Finance', icon: '🏦' },
    { href: '/general-awareness/beauty-pageant', label: 'Beauty Pageant', icon: '👑' },
    { href: '/general-awareness/biology', label: 'Biology', icon: '🧬' },
    { href: '/general-awareness/biosphere-reserves', label: 'Biosphere Reserves', icon: '🌿' },
    { href: '/general-awareness/books-authors', label: 'Books & Authors', icon: '📚' },
    { href: '/general-awareness/chemistry', label: 'Chemistry', icon: '⚗️' },
    { href: '/general-awareness/committees', label: 'Committees', icon: '👥' },
    { href: '/general-awareness/elephant-reserves', label: 'Elephant Reserves', icon: '🐘' },
    { href: '/general-awareness/geography', label: 'Geography', icon: '🌍' },
    {
      href: '/general-awareness/geographical-indication',
      label: 'Geographical Indications',
      icon: '🏷️',
    },
    { href: '/general-awareness/history', label: 'History', icon: '📜' },
    { href: '/general-awareness/important-days', label: 'Important Days', icon: '📅' },
    { href: '/general-awareness/india-information', label: 'India Information', icon: '🇮🇳' },
    { href: '/general-awareness/indian-constitution', label: 'Indian Constitution', icon: '📖' },
    { href: '/general-awareness/indian-penal-code', label: 'Indian Penal Code', icon: '⚖️' },
    { href: '/general-awareness/index-reports', label: 'Index Reports', icon: '📊' },
    { href: '/general-awareness/international-airports', label: 'International Airports', icon: '🛫' },
    { href: '/general-awareness/international-organization', label: 'International Organization', icon: '🌐' },
    { href: '/general-awareness/maharatna-companies', label: 'Maharatna Companies', icon: '🏢' },
    { href: '/general-awareness/national-parks', label: 'National Parks', icon: '🌲' },
    { href: '/general-awareness/physics', label: 'Physics', icon: '⚛️' },
    { href: '/general-awareness/ramsar-sites', label: 'Ramsar Sites', icon: '🌊' },
    { href: '/general-awareness/schemes', label: 'Schemes', icon: '📋' },
    { href: '/general-awareness/science-technology-defence', label: 'Science Technology & Defence', icon: '🔬' },
    { href: '/general-awareness/sports', label: 'Sports', icon: '⚽' },
    { href: '/general-awareness/states-information', label: 'States Information', icon: '🗺️' },
    { href: '/general-awareness/summits', label: 'Summits', icon: '🏛️' },
    { href: '/general-awareness/tiger-reserves', label: 'Tiger Reserves', icon: '🐅' },
    { href: '/general-awareness/united-nations-organization', label: 'United Nations Organization', icon: '🇺🇳' },
    { href: '/general-awareness/unesco-world-heritage-sites', label: 'UNESCO World Heritage Sites', icon: '🏰' },
    { href: '/general-awareness/who-is-who', label: 'Who Is Who', icon: '👤' },
    { href: '/general-awareness/wildlife-sanctuaries', label: 'Wildlife Sanctuaries', icon: '🦅' },
    { href: '/general-awareness/world-information', label: 'World Information', icon: '🌐' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-purple-300/30 shadow-xl shadow-purple-500/20'
          : 'border-b border-transparent shadow-lg shadow-purple-500/10'
      }`}
      style={{
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(124, 58, 237, 0.95) 50%, rgba(59, 130, 246, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.85) 0%, rgba(124, 58, 237, 0.85) 50%, rgba(59, 130, 246, 0.85) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="mx-auto w-full max-w-360 px-3 sm:px-4 lg:px-6">
        <div className="relative h-16 w-full">
          {/* Left — brand */}
          <div className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 items-center">
            <Link
              href="/"
              className="group flex h-10 items-center rounded-xl px-1 transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl sm:text-xl lg:text-2xl">
                AOM Adda
              </span>
            </Link>
          </div>

          {/* Center — main nav (desktop) */}
          <div className="absolute left-1/2 top-1/2 z-10 hidden w-max max-w-[calc(100%-24rem)] -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-2 py-1 shadow-lg shadow-black/10 backdrop-blur-md lg:gap-3 lg:px-3 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px]"
                >
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'text-white font-bold drop-shadow-lg'
                        : 'text-white/90 group-hover:text-white group-hover:drop-shadow-md'
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  ></span>
                  {/* Hover background effect */}
                  <span 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                    }}
                  ></span>
                  {/* Active state background */}
                  {isActive && (
                    <span 
                      className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                      style={{
                        background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                      }}
                    ></span>
                  )}
                </Link>
              )
            })}
            
            {/* Acts Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsActsDropdownOpen(true)}
              onMouseLeave={() => setIsActsDropdownOpen(false)}
            >
              <Link
                href="/acts"
                className={`group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px] ${
                  pathname.startsWith('/acts') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Acts & Rules
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isActsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/acts') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/acts') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isActsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-100 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Acts & Rules
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{actsLinks.length} Acts & Rules</span>
                    </div>
                  </div>
                  
                  {/* Content - Single Column with Scroll */}
                  <div className="p-4 flex flex-col gap-2.5 max-h-100 overflow-y-auto">
                    {actsLinks.map((act) => {
                      const isActive = pathname === act.href
                      const year = act.href.match(/\d{4}/)?.[0] || ''
                      return (
                        <Link
                          key={act.href}
                          href={act.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                                ? 'bg-linear-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-br hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-start gap-2.5">
                              {year && (
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                  isActive  
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'
                                }`}>
                                  {year}
                                </span>
                              )}
                              <span className="text-xs font-medium leading-snug flex-1">
                                {act.label}
                              </span>
                            </div>
                          </div>
                          
                          {/* Hover arrow */}
                          <svg
                            className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 ${
                              isActive ? 'opacity-100' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/acts"
                      onClick={() => setIsActsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Acts</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Manuals Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsManualsDropdownOpen(true)}
              onMouseLeave={() => setIsManualsDropdownOpen(false)}
            >
              <Link
                href="/manuals"
                className={`group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px] ${
                  pathname.startsWith('/manuals') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Manuals
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isManualsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/manuals') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/manuals') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isManualsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-125 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Manual Documents
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{manualsLinks.length} Manuals</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {manualsLinks.map((manual) => {
                      const isActive = pathname === manual.href
                      return (
                        <Link
                          key={manual.href}
                          href={manual.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{manual.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {manual.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/manuals"
                      onClick={() => setIsManualsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Manuals</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Topics Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTopicsDropdownOpen(true)}
              onMouseLeave={() => setIsTopicsDropdownOpen(false)}
            >
              <Link
                href="/topics"
                className={`group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px] ${
                  pathname.startsWith('/topics') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Topics
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isTopicsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/topics') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/topics') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isTopicsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-125 max-h-[min(70vh,560px)] flex flex-col bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="shrink-0 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Topics
                      </h3>
                      <span className="shrink-0 text-xs text-gray-500 font-medium">{topicsLinks.length} topics</span>
                    </div>
                  </div>
                  
                  {/* Content — scrollable so all topics stay reachable */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 flex flex-col gap-2">
                    {topicsLinks.map((topic) => {
                      const isActive = pathname === topic.href
                      return (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{topic.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {topic.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="shrink-0 bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/topics"
                      onClick={() => setIsTopicsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Topics</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Quizzes Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsQuizzesDropdownOpen(true)}
              onMouseLeave={() => setIsQuizzesDropdownOpen(false)}
            >
              <Link
                href="/quizzes"
                className={`group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px] ${
                  pathname.startsWith('/quizzes') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Quizzes
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isQuizzesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/quizzes') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/quizzes') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isQuizzesDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-125 max-h-[min(70vh,560px)] flex flex-col bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="shrink-0 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Quizzes
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{quizzesLinks.length} Quizzes</span>
                    </div>
                  </div>
                  
                  {/* Content — scrollable so all quiz links stay reachable */}
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 flex flex-col gap-2">
                    {quizzesLinks.map((quiz) => {
                      const isActive = pathname === quiz.href
                      return (
                        <Link
                          key={quiz.href}
                          href={quiz.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{quiz.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {quiz.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="shrink-0 bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/quizzes"
                      onClick={() => setIsQuizzesDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Quizzes</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* General Awareness Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsGeneralAwarenessDropdownOpen(true)}
              onMouseLeave={() => setIsGeneralAwarenessDropdownOpen(false)}
            >
              <Link
                href="/general-awareness"
                className={`group relative whitespace-nowrap rounded-xl px-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 lg:px-2.5 lg:text-sm xl:px-3 xl:text-[15px] ${
                  pathname.startsWith('/general-awareness') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  General Awareness
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isGeneralAwarenessDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/general-awareness') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {pathname.startsWith('/general-awareness') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isGeneralAwarenessDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-125 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        General Awareness
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{generalAwarenessLinks.length} Topics</span>
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col gap-2 max-h-100 overflow-y-auto">
                    {generalAwarenessLinks.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{item.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">{item.label}</span>
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/general-awareness"
                      onClick={() => setIsGeneralAwarenessDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All General Awareness</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>

          {/* Right — username + admin pinned to right edge */}
          <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <AuthNav user={user} variant="desktop" />
              {user?.role === 'admin' ? (
                <Link
                  href="/admin"
                  className={`inline-flex h-10 shrink-0 items-center rounded-full px-4 text-sm font-bold tracking-wide shadow-md transition-all duration-300 ${
                    pathname.startsWith('/admin')
                      ? 'bg-white text-purple-700 ring-2 ring-white/70'
                      : 'bg-linear-to-r from-amber-300 to-orange-400 text-slate-900 hover:from-amber-200 hover:to-orange-300 hover:shadow-lg'
                  }`}
                >
                  Admin
                </Link>
              ) : null}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu — cap to viewport so nested accordions can scroll inside the screen */}
        <div
          className={`md:hidden overflow-y-auto overflow-x-hidden overscroll-contain transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[calc(100dvh-4.5rem)] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                      : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* Acts Link with Accordion */}
            <div>
              <button
                onClick={() => setIsActsDropdownOpen(!isActsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/acts')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Acts & Rules</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isActsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Acts Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isActsDropdownOpen ? 'max-h-150 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {actsLinks.map((act) => {
                    const isActive = pathname === act.href
                    return (
                      <Link
                        key={act.href}
                        href={act.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsActsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        {act.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Manuals Link with Accordion */}
            <div>
              <button
                onClick={() => setIsManualsDropdownOpen(!isManualsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/manuals')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Manuals</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isManualsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Manuals Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isManualsDropdownOpen ? 'max-h-100 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {manualsLinks.map((manual) => {
                    const isActive = pathname === manual.href
                    return (
                      <Link
                        key={manual.href}
                        href={manual.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsManualsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{manual.icon}</span>
                        <span>{manual.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Topics Link with Accordion */}
            <div>
              <button
                onClick={() => setIsTopicsDropdownOpen(!isTopicsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/topics')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Topics</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isTopicsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Topics — same A–Z order as desktop hover menu */}
              <div
                className={`relative touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] transition-all duration-300 ease-in-out ${
                  isTopicsDropdownOpen
                    ? 'max-h-[min(65dvh,28rem)] opacity-100 mt-2'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col space-y-1 pl-4">
                  {topicsLinks.map((topic) => {
                    const isActive = pathname === topic.href
                    return (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsTopicsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{topic.icon}</span>
                        <span>{topic.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quizzes Link with Accordion */}
            <div>
              <button
                onClick={() => setIsQuizzesDropdownOpen(!isQuizzesDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/quizzes')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Quizzes</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isQuizzesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Quizzes Dropdown — viewport-based height + touch scroll */}
              <div
                className={`relative touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] transition-all duration-300 ease-in-out ${
                  isQuizzesDropdownOpen
                    ? 'max-h-[min(65dvh,28rem)] opacity-100 mt-2'
                    : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <div className="flex min-h-0 flex-col space-y-1 pl-4">
                  {quizzesLinks.map((quiz) => {
                    const isActive = pathname === quiz.href
                    return (
                      <Link
                        key={quiz.href}
                        href={quiz.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsQuizzesDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{quiz.icon}</span>
                        <span>{quiz.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* General Awareness Link with Accordion */}
            <div>
              <button
                onClick={() => setIsGeneralAwarenessDropdownOpen(!isGeneralAwarenessDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/general-awareness')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>General Awareness</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isGeneralAwarenessDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile General Awareness Dropdown */}
              <div
                className={`overflow-y-auto transition-all duration-300 ease-in-out ${
                  isGeneralAwarenessDropdownOpen ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {generalAwarenessLinks.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsGeneralAwarenessDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <AuthNav
              user={user}
              variant="mobile"
              onNavigate={() => setIsMobileMenuOpen(false)}
            />

            {user?.role === 'admin' ? (
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-full px-4 py-3 text-center text-base font-bold transition-all duration-300 ${
                  pathname.startsWith('/admin')
                    ? 'bg-white text-purple-700 shadow-lg'
                    : 'bg-linear-to-r from-amber-300 to-orange-400 text-slate-900'
                }`}
              >
                Admin
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar