'use client'
import React from 'react'
import { 
  Scale,
} from 'lucide-react'

const ConductRules1966Rule6 = () => {
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
              THE RAILWAY SERVICES (CONDUCT) RULES, 1966
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Joining of Associations or Unions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0">
                    6
                  </span>
                  <span className="text-center">Joining of Associations or Unions by Railway Servants</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                
                {/* Main Rule */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="flex-1">
                      <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                        No railway servants shall join, or continue to be a member of an association or union the objects or activities of which are prejudicial to the interests of the sovereignty and integrity of India or public order or morality.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Note Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <div className="flex-1">
                      <div className="p-4 bg-linear-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-400/30">
                        <p className="text-gray-200 lg:text-base text-sm leading-relaxed mb-3">
                          <span className="font-semibold text-orange-300">Note.</span> – It is not permissible for a gazetted railway servant to join any association of non-gazetted railway servant like a Railway Employees Union,. When a non-gazetted railway servant who is a member of a Railway Employees&apos; Union is promoted to gazetted rank, either in an officiating or permanent capacity he shall resign his membership of such Union. If, however, the officer concerned satisfies the General Manager of the railway concerned that by such resignation he will lose financially or otherwise under any beneficent scheme organized by such Union such as death or accident insurance, he may be permitted to continue as an ordinary member, but not as office bearer or representative, of that Union. The responsibility for satisfying the General Manager in this respect will rest with the officer concerned.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

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

export default ConductRules1966Rule6