'use client'
import React from 'react'
import {
  Scale,
} from 'lucide-react'

type DefinitionItem = {
  letter: string
  term: string
  text: string
  subItems?: { label: string; text: string }[]
}

const definitions: DefinitionItem[] = [
  {
    letter: 'a',
    term: 'affected area',
    text: 'means an area or part of the country affected by a disaster;',
  },
  {
    letter: 'b',
    term: 'capacity-building',
    text: 'includes—',
    subItems: [
      {
        label: 'i',
        text: 'identification of existing resources and resources to be acquired or created;',
      },
      {
        label: 'ii',
        text: 'acquiring or creating resources identified under sub-clause (i);',
      },
      {
        label: 'iii',
        text: 'organisation and training of personnel and coordination of such training for effective management of disasters;',
      },
    ],
  },
  {
    letter: 'c',
    term: 'Central Government',
    text: 'means the Ministry or Department of the Government of India having administrative control of disaster management;',
  },
  {
    letter: 'd',
    term: 'disaster',
    text: 'means a catastrophe, mishap, calamity or grave occurrence in any area, arising from natural or man made causes, or by accident or negligence which results in substantial loss of life or human suffering or damage to, and destruction of, property, or damage to, or degradation of, environment, and is of such a nature or magnitude as to be beyond the coping capacity of the community of the affected area;',
  },
  {
    letter: 'e',
    term: 'disaster management',
    text: 'means a continuous and integrated process of planning, organising, coordinating and implementing measures which are necessary or expedient for—',
    subItems: [
      { label: 'i', text: 'prevention of danger or threat of any disaster;' },
      { label: 'ii', text: 'mitigation or reduction of risk of any disaster or its severity or consequences;' },
      { label: 'iii', text: 'capacity-building;' },
      { label: 'iv', text: 'preparedness to deal with any disaster;' },
      { label: 'v', text: 'prompt response to any threatening disaster situation or disaster;' },
      { label: 'vi', text: 'assessing the severity or magnitude of effects of any disaster;' },
      { label: 'vii', text: 'evacuation, rescue and relief;' },
      { label: 'viii', text: 'rehabilitation and reconstruction;' },
    ],
  },
  {
    letter: 'f',
    term: 'District Authority',
    text: 'means the District Disaster Management Authority constituted under sub-section (1) of section 25;',
  },
  {
    letter: 'g',
    term: 'District Plan',
    text: 'means the plan for disaster management for the district prepared under section 31;',
  },
  {
    letter: 'h',
    term: 'local authority',
    text: 'includes panchayati raj institutions, municipalities, a district board, cantonment board, town planning authority or Zila Parishad or any other body or authority, by whatever name called, for the time being invested by law, for rendering essential services or, with the control and management of civic services, within a specified local area;',
  },
  {
    letter: 'i',
    term: 'mitigation',
    text: 'means measures aimed at reducing the risk, impact or effects of a disaster or threatening disaster situation;',
  },
  {
    letter: 'j',
    term: 'National Authority',
    text: 'means the National Disaster Management Authority established under sub-section (1) of section 3;',
  },
  {
    letter: 'k',
    term: 'National Executive Committee',
    text: 'means the Executive Committee of the National Authority constituted under sub-section (1) of section 8;',
  },
  {
    letter: 'l',
    term: 'National Plan',
    text: 'means the plan for disaster management for the whole of the country prepared under section 11;',
  },
  {
    letter: 'm',
    term: 'preparedness',
    text: 'means the state of readiness to deal with a threatening disaster situation or disaster and the effects thereof;',
  },
  {
    letter: 'n',
    term: 'prescribed',
    text: 'means prescribed by rules made under this Act;',
  },
  {
    letter: 'o',
    term: 'reconstruction',
    text: 'means construction or restoration of any property after a disaster;',
  },
  {
    letter: 'p',
    term: 'resources',
    text: 'includes manpower, services, materials and provisions;',
  },
  {
    letter: 'q',
    term: 'State Authority',
    text: 'means the State Disaster Management Authority established under sub-section (1) of section 14 and includes the Disaster Management Authority for the Union territory constituted under that section;',
  },
  {
    letter: 'r',
    term: 'State Executive Committee',
    text: 'means the Executive Committee of a State Authority constituted under sub-section (1) of section 20;',
  },
  {
    letter: 's',
    term: 'State Government',
    text: 'means the Department of Government of the State having administrative control of disaster management and includes Administrator of the Union territory appointed by the President under article 239 of the Constitution;',
  },
  {
    letter: 't',
    term: 'State Plan',
    text: 'means the plan for disaster management for the whole of the State prepared under section 23.',
  },
]

const badgeGradients = [
  'from-blue-500 to-cyan-600 ring-blue-400/50',
  'from-cyan-500 to-blue-600 ring-cyan-400/50',
  'from-purple-500 to-pink-600 ring-purple-400/50',
  'from-pink-500 to-orange-600 ring-pink-400/50',
]

const Section2 = () => {
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
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">CHAPTER I</h2>
            <h2 className="lg:text-4xl text-2xl font-bold text-cyan-300 mb-4">PRELIMINARY</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">

            {/* Definitions */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl py-6 lg:px-4 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-linear-to-br from-blue-500 to-cyan-600 text-white lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center font-bold lg:text-xl text-lg shadow-lg ring-2 ring-blue-400/50 shrink-0 z-10">
                2
              </span>
              <h2 className="lg:text-3xl text-xl font-bold text-white mb-4 flex flex-col lg:flex-row gap-4 items-center justify-center pr-12 lg:pr-14">
                <span className="text-center">Definitions</span>
              </h2>
              <p className="text-gray-200 lg:text-lg text-base leading-relaxed text-center mb-8 px-2">
                In this Act, unless the context otherwise requires,—
              </p>
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl py-6 lg:px-4 px-3 shadow-lg border border-blue-400/30">
                <ul className="space-y-6">
                  {definitions.map((item, index) => {
                    const gradient = badgeGradients[index % badgeGradients.length]
                    return (
                      <li
                        key={item.letter}
                        className="flex items-center justify-center flex-col gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                      >
                        <span
                          className={`bg-linear-to-br ${gradient} text-white lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold lg:text-lg text-base shadow-lg ring-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                        >
                          {item.letter}
                        </span>
                        <div className="text-gray-200 lg:text-lg text-base leading-relaxed pt-1 text-center w-full">
                          <span className="font-semibold text-cyan-200">
                            “{item.term}” {item.text}
                          </span>
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

export default Section2
