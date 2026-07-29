import { Clock, Download, FileText } from 'lucide-react'
import RailwayServantsRestRules2005Index from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Index'

const RailwayServantsRestRules2005 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
              Railway Servants (Hours of Work and Period of Rest) Rules, 2005
            </h1>
            <div className="text-xl md:text-2xl font-light mb-8 text-blue-100">
              Work Hours & Rest Rules Reference
            </div>
            <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive reference guide covering all rules related to hours of work and periods of rest for Railway Servants.
              Essential reference material for Railway Servants in Indian Railways regarding working hours and rest entitlements.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <RailwayServantsRestRules2005Index />
      </div>

      {/* Download Railway Servants (Hours of Work and Period of Rest) Rules, 2005 PDF Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-linear-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-12 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">
              Download Railway Servants (Hours of Work and Period of Rest) Rules, 2005 PDF
            </h2>
            <p className="text-gray-600 lg:text-lg text-base max-w-2xl mx-auto">
              Get the complete Railway Servants (Hours of Work and Period of Rest) Rules, 2005 in PDF format. 
              This comprehensive guide covers all regulations related to working hours and rest periods for Railway Servants.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="/railway-servants-rest-rules-2005/Railway Servants (Hours of Work & Period of Rest) Rules 2005.pdf"
              download="Railway Servants (Hours of Work & Period of Rest) Rules 2005.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-12 lg:py-5 text-lg lg:text-xl font-bold text-white bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 border-2 border-blue-400/30 hover:border-blue-300/50"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Download className="w-6 h-6 lg:w-7 lg:h-7 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Download PDF</span>
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-200 text-center shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-2">18</div>
              <div className="text-gray-700 text-sm font-medium">Rules</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-indigo-200 text-center shadow-md">
              <div className="text-2xl font-bold text-indigo-600 mb-2">2005</div>
              <div className="text-gray-700 text-sm font-medium">Year</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-purple-200 text-center shadow-md">
              <div className="text-2xl font-bold text-purple-600 mb-2">PDF</div>
              <div className="text-gray-700 text-sm font-medium">Format</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwayServantsRestRules2005