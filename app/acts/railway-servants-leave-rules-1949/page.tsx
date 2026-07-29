import React from 'react'
import { FileText } from 'lucide-react'
import LeaveRules1949Index from '@/components/railway-servants-leave-rules-1949/LeaveRules1949Index'

const RailwayServantsLeaveRules1949 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-emerald-600 via-teal-700 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
              Railway Servants (Liberalised Leave) Rules, 1949
            </h1>
            <div className="text-xl md:text-2xl font-light mb-8 text-emerald-100">
              Leave Rules Reference
            </div>
            <p className="text-base md:text-lg text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Railway Servants are entitled for different kinds of leave which is governed by the Railway Servants (Liberalised Leave) Rules, 1949. 
              Comprehensive reference guide covering all rules from Rule 501 to Rule 557. Essential reference material for Railway Servants in Indian Railways.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <LeaveRules1949Index />
      </div>
    </div>
  )
}

export default RailwayServantsLeaveRules1949