'use client'
import React from 'react'
import { 
  Scale,
  FileText
} from 'lucide-react'

const IRACT1989Section11 = () => {
  const powers = [
    {
      label: "(a)",
      content: "make a construct in or upon, across, under or over any lands, or any street, hills, valleys, roads, railway, tramways, or any rivers, canals, brooks, streams or other waters, or any drains, water pipes, gas pipes, oil-pipes, sewers, electric supply lines, or telegraph lines, such temporary or permanent inclined - planes, bridges, tunnels, culverts, embankments, aqueducts, roads, lines of railways, passages, conduits, drains, piers, cutting and fences, in-take wells, tube wells, dams, river training and protection works as it thinks proper;"
    },
    {
      label: "(b)",
      content: "alter the course of any river, brooks, streams or other water courses, for the purpose of constructing and maintenance tunnels, bridges, passages, or other works over or under them and divert or alter either temporarily or permanently, the course of any river, brooks, streams, or other water courses or any roads, streets or ways, or raise or sink the level thereof, in order to carry them more conveniently over or under or by the side of the railway;"
    },
    {
      label: "(c)",
      content: "make drains or conduits into, through or under any lands adjoining the railway for the purpose of conveying water from or to the railway;"
    },
    {
      label: "(d)",
      content: "erect and construct such houses, ware houses, offices and other buildings, and such yards, stations, wharves, engines, machinery apparatus and other works and the conveniences as the railway administration thinks proper;"
    },
    {
      label: "(e)",
      content: "alter, repair or discontinue such buildings, works and convenience as aforesaid or any of them and substitute other in their stead;"
    },
    {
      label: "(f)",
      content: "erect, operate, maintain or repair any telegraph and telephone lines in connection with the working of the railway;"
    },
    {
      label: "(g)",
      content: "erect, operate, maintain or repair any electric traction equipment, power supply and distribution installation in connection with the working of the railway; and"
    },
    {
      label: "(h)",
      content: "do all other acts necessary for making, maintaining, altering or repairing and using the railway."
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
              <span>CHAPTER IV - CONSTRUCTION AND MAINTENANCE OF WORKS</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            
            {/* Power of railway administration Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="flex items-center justify-center flex-col gap-3">
                  <span className="bg-linear-to-br from-violet-500 to-purple-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-violet-400/50 shrink-0">
                    11
                  </span>
                  <span className="text-center">Power of railway administration to execute all necessary works</span>
                </div>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-violet-400/30">
                <p className="text-gray-200 lg:text-lg text-base font-semibold mb-6 text-center leading-relaxed">
                  Notwithstanding anything contained in any other law for the time being in force, but subject to the provisions of this Act and the provisions of any law for the acquisition of land for a public purpose or for the companies, and subject also, in the case of a non-government railway, to the provisions of any contract between the Non-Government railway and the Central Government, a railway administration may, for the purpose of constructing or maintaining a railway -
                </p>
                <div className="space-y-4">
                  {powers.map((power, index) => {
                    const label = power.label.replace(/[()]/g, '').toLowerCase();
                    return (
                      <div key={index} className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                        <span className="bg-linear-to-br from-violet-500 to-purple-600 text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 ring-violet-400/50 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                          {label}
                        </span>
                        <span className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1">
                          {power.content}
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
              Indian Railways Act 1989 - Chapter IV
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

export default IRACT1989Section11