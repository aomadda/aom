import React from 'react'
import { Scale } from 'lucide-react'
import Link from 'next/link'
import IRAct1989Index from '@/components/indian-railways-act-1989/IRAct1989'

const IndianRailwaysAct1989 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Indian Railways Act
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              1989
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The Indian Railways Act, 1989 is a comprehensive piece of legislation enacted by the Parliament of India 
              to regulate all aspects of rail transport in the country. It came into force on July 1, 1989, 
              replacing the Indian Railways Act of 1890.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        

        <IRAct1989Index />
      </div>

      {/* PDF Download Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white border border-blue-200/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm animate-pulse">
              <svg className="w-12 h-12 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="lg:text-4xl text-2xl font-bold mb-4 bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Indian Railways Act 1989
            </h3>
            <p className="lg:text-xl text-base text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the complete Indian Railways Act, 1989 document in PDF format for offline reference and detailed study. 
              This comprehensive legislation covers all aspects of railway operations, administration, and regulations.
            </p>
            
            <Link 
              href="/ir-act-1989/Indian Railways Act 1989.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Indian Railways Act 1989.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold lg:text-lg text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default IndianRailwaysAct1989