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
import { getSession } from '@/lib/auth/session'

const Home = async () => {
  let fullName: string | null = null
  try {
    const session = await getSession()
    fullName = session?.fullName ?? null
  } catch {
    fullName = null
  }

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Content — left on large screens */}
            <div className="order-2 w-full max-w-2xl text-center lg:order-1 lg:flex-1 lg:text-left">
              {fullName ? (
                <p className="mb-4 text-lg font-medium text-white/95 sm:text-xl md:text-2xl">
                  Welcome{' '}
                  <span className="font-bold text-white">{fullName}</span> . .  .
                </p>
              ) : null}

              <h1 className="mb-6 text-4xl font-bold tracking-tight animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl">
                AOM Adda
              </h1>

              <div className="mb-8 text-xl font-light text-blue-100 sm:text-2xl md:text-3xl">
                AOM Aspirant Study Material Portal
              </div>

              <p className="mx-auto mb-10 max-w-4xl text-lg leading-relaxed text-blue-100 sm:text-xl md:text-2xl lg:mx-0">
                Your comprehensive guide to railway acts, manuals, regulations, study materials, topics, quizzes, and more.
                
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/topics/chief-controller"
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-purple-700 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Start Learning
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/quizzes"
                  className="group flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  Take Quiz
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Profile — small circle top-center on mobile; full picture right on large screens */}
            <div className="order-1 flex w-full justify-center lg:order-2 lg:w-auto lg:shrink-0 lg:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt="AOM Aspirant profile"
                width={520}
                height={520}
                className="size-20 rounded-full border-4 border-white/40 object-cover object-top shadow-2xl sm:size-24 lg:size-105 lg:rounded-3xl lg:border lg:border-white/30 lg:bg-[#f5f0e8] lg:object-contain xl:size-120"
              />
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        
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
