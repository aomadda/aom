import React from 'react'
import { FileText } from 'lucide-react'
import ChiefControllerIndex from '@/components/chief-controller/ChiefControllerIndex'

const ChiefController = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Chief Controller
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              Study Material
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive study material for Chief Controller examination covering Speed Restrictions, 
              Timings, Distances, Percentages, Permissions, Numbers, Years, Standard Forms, G&SR Chapters, General Rules, G&SR Appendix, and SWR Appendix. Essential reference guide for AOM aspirants in Indian Railways.
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
        

        <ChiefControllerIndex />
      </div>
    </div>
  )
}

export default ChiefController