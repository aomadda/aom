'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

const badgeGradients = [
  'from-blue-500 to-cyan-600 ring-blue-400/50',
  'from-cyan-500 to-blue-600 ring-cyan-400/50',
  'from-purple-500 to-pink-600 ring-purple-400/50',
  'from-pink-500 to-orange-600 ring-pink-400/50',
  'from-orange-500 to-pink-600 ring-orange-400/50',
  'from-blue-500 to-purple-600 ring-blue-400/50',
  'from-cyan-500 to-purple-600 ring-cyan-400/50',
  'from-purple-500 to-blue-600 ring-purple-400/50',
  'from-blue-500 to-cyan-600 ring-blue-400/50',
]

const subsections = [
  {
    num: '1',
    text: 'With effect from such date as the Central Government may, by notification in the Official Gazette appoint in this behalf, there shall be constituted an institute to be called the National Institute of Disaster Management.',
  },
  {
    num: '2',
    text: 'The National Institute of Disaster Management shall consist of such number of members as may be prescribed by the Central Government.',
  },
  {
    num: '3',
    text: 'The term of office of, and vacancies among, members of the National Institute of Disaster Management and manner of filling such vacancies shall be such as may be prescribed.',
  },
  {
    num: '4',
    text: 'There shall be a governing body of the National Institute of Disaster Management which shall be constituted by the Central Government from amongst the members of the National Institute of Disaster Management in such manner as may be prescribed.',
  },
  {
    num: '5',
    text: 'The governing body of the National Institute of Disaster Management shall exercise such powers and discharge such functions as may be prescribed by regulations.',
  },
  {
    num: '6',
    text: 'The procedure to be followed in exercise of its powers and discharge of its functions by the governing body, and the term of office of, and the manner of filling vacancies among the members of the governing body, shall be such as may be prescribed by regulations.',
  },
  {
    num: '7',
    text: 'Until the regulations are made under this section, the Central Government may make such regulations; and any regulation so made may be altered or rescinded by the National Institute of Disaster Management in exercise of its powers.',
  },
  {
    num: '8',
    text: 'Subject to the provisions of this Act, the National Institute of Disaster Management shall function within the broad policies and guidelines laid down by the National Authority and be responsible for planning and promoting training and research in the area of disaster management, documentation and development of national level information base relating to disaster management policies, prevention mechanisms and mitigation measures.',
  },
  {
    num: '9',
    text: 'Without prejudice to the generality of the provisions contained in sub-section (8), the National Institute, for the discharge of its functions, may—',
    subItems: [
      {
        label: 'a',
        text: 'develop training modules, undertake research and documentation in disaster management and organise training programmes;',
      },
      {
        label: 'b',
        text: 'formulate and implement a comprehensive human resource development plan covering all aspects of disaster management;',
      },
      {
        label: 'c',
        text: 'provide assistance in national level policy formulation;',
      },
      {
        label: 'd',
        text: 'provide required assistance to the training and research institutes for development of training and research programmes for stakeholders including Government functionaries and undertake training of faculty members of the State level training institutes;',
      },
      {
        label: 'e',
        text: 'provide assistance to the State Governments and State training institutes in the formulation of State level policies, strategies, disaster management framework and any other assistance as may be required by the State Governments or State training institutes for capacity-building of stakeholders, Government including its functionaries, civil society members, corporate sector and people\'s elected representatives;',
      },
      {
        label: 'f',
        text: 'develop educational materials for disaster management including academic and professional courses;',
      },
      {
        label: 'g',
        text: 'promote awareness among stakeholders including college or school teachers and students, technical personnel and others associated with multi-hazard mitigation, preparedness and response measures;',
      },
      {
        label: 'h',
        text: 'undertake, Organise and facilitate study courses, conferences, lectures, seminars within and outside the country to promote the aforesaid objects;',
      },
      {
        label: 'i',
        text: 'undertake and provide for publication of journals, research papers and books and establish and maintain libraries in furtherance of the aforesaid objects;',
      },
      {
        label: 'j',
        text: 'do all such other lawful things as are conducive or incidental to the attainment of the above objects; and',
      },
      {
        label: 'k',
        text: 'undertake any other function as may be assigned to it by the Central Government.',
      },
    ],
  },
]

const Section42 = () => {
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
              DISASTER MANAGEMENT ACT, 2005
            </h1>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER VII</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">NATIONAL INSTITUTE OF DISASTER MANAGEMENT</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* National Institute of Disaster Management */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-lg text-sm shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                42
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">National Institute of Disaster Management</span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  {subsections.map((item, index) => {
                    const gradient = badgeGradients[index % badgeGradients.length]
                    return (
                      <li
                        key={item.num}
                        className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                      >
                        <span
                          className={`bg-linear-to-br ${gradient} text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                        >
                          {item.num}
                        </span>
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                          <span className="font-semibold text-cyan-200">{item.text}</span>
                          {item.subItems && (
                            <ul className="mt-4 space-y-3">
                              {item.subItems.map((sub) => (
                                <li
                                  key={sub.label}
                                  className="flex items-center justify-center flex-col gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                                >
                                  <span className="bg-linear-to-br from-blue-400/40 to-cyan-500/40 text-cyan-100 lg:w-8 lg:h-8 w-7 h-7 rounded-full flex items-center justify-center font-semibold lg:text-xs text-[10px] shadow-md ring-1 ring-cyan-400/40 shrink-0 group-hover/item:scale-110 transition-transform">
                                    {sub.label}
                                  </span>
                                  <span className="text-gray-200 lg:text-base text-sm leading-relaxed text-center">
                                    {sub.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
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

export default Section42
