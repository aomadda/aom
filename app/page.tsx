'use client'

import React from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  FileText, 
  FileCheck, 
  GraduationCap, 
  Search, 
  HelpCircle,
  Train,
  Award,
  Users,
  Library,
  Download,
  Brain,
  ChevronRight,
  Sparkles
} from 'lucide-react'

const Home = () => {
  const quickLinks = [
    {
      href: '/acts',
      title: 'Acts & Regulations',
      description: 'Comprehensive collection of railway acts and regulations',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      count: '14+ Acts'
    },
    {
      href: '/manuals',
      title: 'Manuals',
      description: 'Essential railway operation manuals and guidelines',
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      count: '7 Manuals'
    },
    {
      href: '/pdfs',
      title: 'PDF Documents',
      description: 'Downloadable PDFs, amendments, and circulars',
      icon: Download,
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      count: '5 Categories'
    },
    {
      href: '/topics',
      title: 'Study Topics',
      description: 'Chief Controller and IT applications study material',
      icon: GraduationCap,
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      count: '2 Topics'
    },
    {
      href: '/quizzes',
      title: 'Quiz',
      description: 'Test your knowledge with interactive quizzes',
      icon: Brain,
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      count: 'Practice Tests'
    },
    {
      href: '/abbreviations',
      title: 'Abbreviations',
      description: 'Complete reference guide for railway abbreviations',
      icon: Search,
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-700',
      count: '3600+ Terms'
    },
    {
      href: '/definitions',
      title: 'Definitions',
      description: 'Important definitions and terminology',
      icon: HelpCircle,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      count: 'Reference'
    },
    {
      href: '/syllabus',
      title: 'Syllabus',
      description: 'Complete syllabus for railway examinations',
      icon: FileCheck,
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      count: 'Study Guide'
    }
  ]

  const stats = [
    { icon: BookOpen, label: 'Acts & Rules', value: '14+', color: 'text-blue-500' },
    { icon: Library, label: 'Manuals', value: '7', color: 'text-purple-500' },
    { icon: Users, label: 'Study Topics', value: '2', color: 'text-pink-500' },
    { icon: Award, label: 'Quiz Tests', value: 'Multiple', color: 'text-emerald-500' }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm animate-bounce">
                <Train className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
              AOM Aspirant
            </h1>
            
            {/* Subtitle */}
            <div className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-blue-100">
              AOM Aspirant Study Material Portal
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10">
              Your comprehensive guide to railway acts, manuals, regulations, and study materials. 
              Everything you need for railway examinations in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/topics/chief-controller"
                className="group px-8 py-4 bg-white text-purple-700 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Start Learning
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/quizzes"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Take Quiz
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-12 md:h-20 text-blue-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 600,0 900,50 C1050,75 1150,25 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative -mt-8 md:-mt-12 lg:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full bg-linear-to-br ${stat.color.replace('text-', 'from-').replace('-500', '-100')} to-white mb-3`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Explore Resources
            </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials, acts, manuals, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                className="group relative"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`mb-4 p-4 rounded-xl bg-linear-to-br ${link.color} ${link.hoverColor} transition-all duration-300 w-fit`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {link.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs font-semibold text-gray-500">{link.count}</span>
                    <ChevronRight className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-linear-to-r from-purple-600 via-indigo-700 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose AOM Aspirant?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Comprehensive, organized, and easy-to-access AOM Aspirant study materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-3 bg-white/20 rounded-full w-fit mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Coverage</h3>
              <p className="text-blue-100">
                Access all AOM Aspirant acts, manuals, rules, and regulations in one centralized platform
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-3 bg-white/20 rounded-full w-fit mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Navigation</h3>
              <p className="text-blue-100">
                Intuitive interface with organized categories for quick access to any AOM Aspirant study material
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="p-3 bg-white/20 rounded-full w-fit mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exam Ready</h3>
              <p className="text-blue-100">
                Practice quizzes and study materials specifically designed for AOM Aspirant examinations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-linear-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Begin exploring our comprehensive collection of AOM Aspirant study materials today
          </p>
          <Link
            href="/topics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Train className="w-5 h-5" />
            Explore Topics
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home