import React from 'react'
import { Shield, Download } from 'lucide-react'

import ConductRules1966Index from '@/components/railway-services-conduct-rules-1966/ConductRules1966Index'
import Link from 'next/link'  

const RailwayServicesConductRules1966 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-indigo-700 via-purple-700 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold mb-6 tracking-tight">
              Railway Services (Conduct) Rules - 1966
            </h1>
            
            <p className="text-lg md:text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive behavioural framework for Railway servants in India covering ethics, integrity,
              professional conduct, and public trust. Explore all 25 rules with structured summaries, study aids,
              and downloadable references tailored for AOM aspirants.
            </p>
           
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        

        {/* Index */}
        <div id="index">
          <ConductRules1966Index />
        </div>
      </div>

      {/* Footer Callout */}
      <div className="bg-linear-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-[0_25px_50px_-12px_rgba(79,70,229,0.6)] overflow-hidden">
          <div className="relative px-8 sm:px-12 py-12 sm:py-16">
            <div className="absolute -right-16 -top-16 w-52 h-52 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid gap-8 md:grid-cols-[1.2fr,auto] items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide uppercase">
                  Premium Study Aid
                </span>
                <h2 className="mt-6 lg:text-3xl text-xl font-bold leading-tight">
                  Railway Services (Conduct) Rules 1966 PDF File
                </h2>
                <p className="mt-4 text-lg text-indigo-100 leading-relaxed">
                  Download meticulously digitized rule-wise PDFs, crafted for quick revision and offline study. Includes the
                  comprehensive 1966 rulebook and individual sections tailored for AOM aspirants.
                </p>
                
              </div>
              <div className="flex flex-col items-stretch gap-3">
                <Link
                  href="/conduct-rules-1966-pdf-pages/CONDUCTRULESACT1966.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white text-indigo-900 px-8 py-4 text-lg font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
                >
                  <Download className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  Download PDF
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayServicesConductRules1966