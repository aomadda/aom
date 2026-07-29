'use client'
import React from 'react'
import { 
  Scale,
  FileText
} from 'lucide-react'

const IRACT1989Section3 = () => {
  const subsections = [
    {
      num: "(1)",
      content: "The Central Government may, for the purpose of the efficient administration of the Government railways, by notification, constitute such railways into as many Zonal Railways as it may deem fit and specify in such notification the names and headquarters of such Zonal Railways and the area in respect of which they shall exercise jurisdiction."
    },
    {
      num: "(2)",
      content: "The Zonal Railway existing immediately before the commencement of this Act shall be deemed to be Zonal Railway constituted under sub-section (1)."
    },
    {
      num: "(3)",
      content: "The Central Government may, by notification, declare any unit of the railways engaged in research, development, designing, construction or production of rolling stock, its parts or other equipment used on a railway, to be a Zonal Railway."
    },
    {
      num: "(4)",
      content: "The Central Government may, by notification, abolish any Zonal Railway or constitute any New Zonal Railway out of nay existing Zonal Railway or Zonal Railways, change the name or headquarters of any Zonal Railway or determine the areas in respect of which a Zonal Railway shall exercise jurisdiction."
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4 flex items-center justify-center gap-4">
              <span>Chapter II - Railway Administration</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Zonal Railways Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-green-500 to-emerald-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-green-400/50 shrink-0">
                    3
                  </span>
                  <span className="text-center">Zonal Railways</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  {subsections.map((item, index) => {
                    const num = item.num.replace(/[()]/g, '');
                    return (
                      <div key={index} className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-green-500 to-emerald-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-green-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          {num}
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          {item.content}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-300">
              Indian Railways Act 1989 - Chapter II
            </p>
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

export default IRACT1989Section3