'use client'

import React from 'react'

interface Section {
  number: string
  title: string
}

interface Chapter {
  number: string
  title: string
  sections: Section[]
}

const RailwaysAct1989AllChapters = () => {
  const chapters: Chapter[] = [
    {
      number: 'I',
      title: 'PRELIMINARY',
      sections: [
        { number: '1', title: 'Short title and Commencement.' },
        { number: '2', title: 'Definition' }
      ]
    },
    {
      number: 'II',
      title: 'Railway Administration',
      sections: [
        { number: '3', title: 'Zonal Railways.' },
        { number: '4', title: 'Appointment of General Manager' }
      ]
    },
    {
      number: 'III',
      title: 'COMMISSIONERS OF RAILWAY SAFETY.',
      sections: [
        { number: '5', title: 'Appointment of Chief Commissioner of Railway Safety and Commissioners of Railway Safety.' },
        { number: '6', title: 'Duties of Commissioner - The Commissioner shall -' },
        { number: '7', title: 'Powers of Commissioner' },
        { number: '8', title: 'Commissioner to be Public Servant' },
        { number: '9', title: 'Facilities to be afforded to Commissioner' },
        { number: '10', title: 'Annual report of Commissioners' }
      ]
    },
    {
      number: 'IV',
      title: 'CONSTRUCTION AND MAINTENANCE OF WORK',
      sections: [
        { number: '11', title: 'Power of railway administration to execute all necessary works' },
        { number: '12', title: 'Power to later the position of pipe, electric supply line, drain or sewer, etc.' },
        { number: '13', title: 'Protection for Government Property.' },
        { number: '14', title: 'Temporary entry upon land to remove obstruction, to repair or to prevent accident' },
        { number: '15', title: 'Payment of amount for damage or loss' },
        { number: '16', title: 'Accommodation Works' },
        { number: '17', title: 'Power of owner, occupier, State Government or local authority to cause additional accommodation works to be made' },
        { number: '18', title: 'Fences, gates and bars' },
        { number: '19', title: 'Over bridges and under bridges' },
        { number: '20', title: 'Power of Central Government to give directions for safety' }
      ]
    },
    {
      number: 'V',
      title: 'Opening Of Railways',
      sections: [
        { number: '21', title: 'Sanction of the Central Government to the opening of railway' },
        { number: '22', title: 'Formalities to be compiled with before giving sanction to the opening of a railway' },
        { number: '23', title: 'Section 21 and 22 to apply to the opening of certain works' },
        { number: '24', title: 'Temporary suspension of traffic' },
        { number: '25', title: 'Power to close railway opened for the public carriage of passengers' },
        { number: '26', title: 'Re-opening of closed railway' },
        { number: '27', title: 'Use of rolling stock' },
        { number: '28', title: 'Delegation of powers' },
        { number: '29', title: 'Power to make rules in respect of matters in this Chapter' }
      ]
    },
    {
      number: 'VI',
      title: 'Fixation of Rates',
      sections: [
        { number: '30', title: 'Power to fix rates' },
        { number: '31', title: 'Power to classify commodities or alter rates. – The Central Government shall have power to' },
        { number: '32', title: 'Power of railway administration to charge certain rates' }
      ]
    },
    {
      number: 'VII',
      title: 'Railway Rates Tribunal',
      sections: [
        { number: '33', title: 'Constitution of the Railway Rates Tribunal' },
        { number: '34', title: 'Staff of the Tribunal' },
        { number: '35', title: 'Sittings of the Tribunal.' },
        { number: '36', title: 'Complaints against a railway administration' },
        { number: '37', title: 'Matters not written the jurisdiction of the Tribunal' },
        { number: '38', title: 'Powers of the Tribunal' },
        { number: '39', title: 'Reference to the Tribunal' },
        { number: '40', title: 'Assistance by the Central Government' },
        { number: '41', title: 'Burden of proof, etc.—In the case of any complaint under Cl. (a) of Sec. 36' },
        { number: '42', title: 'Decision, etc., or the Tribunal' },
        { number: '43', title: 'Bar of jurisdiction of Courts' },
        { number: '44', title: 'Relief which the Tribunal may grant' },
        { number: '45', title: 'Revision of decisions given by the Tribunal' },
        { number: '46', title: 'Execution of decisions or orders of the Tribunal' },
        { number: '47', title: 'Report of the Central Government' },
        { number: '48', title: 'Power of the Tribunal to make regulations.' }
      ]
    },
    {
      number: 'VIII',
      title: 'Carriage of Passengers',
      sections: [
        { number: '49', title: 'Exhibition of certain timings and Tables of fares at situations.-' },
        { number: '50', title: 'Supply of tickets on payment of fare' },
        { number: '51', title: 'Provisions for case in which ticket is issued for class or train not having accommodation.' },
        { number: '53', title: 'Prohibition against transfer of certain tickets.-' },
        { number: '54', title: 'Exhibition and surrender of passes and tickets.-' },
        { number: '55', title: 'Exhibition against traveling without pass or ticket.-' },
        { number: '56', title: 'Power to refuse to carry persons suffering from infectious or contagious diseases.-' },
        { number: '57', title: 'Maximum number of passenger for each compartment' },
        { number: '58', title: 'Earmarking of compartment, etc. for ladies' },
        { number: '59', title: 'Communications between passengers and railway servant in charge if train' },
        { number: '60', title: 'Power to make rules in respect of matters in this Chapter' }
      ]
    },
    {
      number: 'IX',
      title: 'Carriage of goods',
      sections: [
        { number: '61', title: 'Maintenance of rate-books, etc., for carriage of goods' },
        { number: '62', title: 'Conditions for receiving, etc., of goods' },
        { number: '63', title: 'Provision of risk rates' },
        { number: '64', title: 'Forwarding note' },
        { number: '65', title: 'Railway receipt' },
        { number: '66', title: 'Powers to require statement relating to the description of goods.' },
        { number: '67', title: 'Carriage of dangerous or offensive goods' },
        { number: '68', title: 'Carriage of animals suffering from infectious or contagious diseases.-' },
        { number: '69', title: 'Deviation of route' },
        { number: '70', title: 'Prohibition of undue preference' },
        { number: '71', title: 'Power to give direction in regard to carriage of certain goods' },
        { number: '72', title: 'Maximum carrying capacity for wagons and trucks' },
        { number: '73', title: 'Punitive charge for over-loading a wagon' },
        { number: '74', title: 'Passing of property in the goods covered by railway receipt' },
        { number: '75', title: 'Section 74 not to affect right of stoppage in transit or claims for freight.- Nothing contained in Sec. 74 shall prejudice or affect' },
        { number: '76', title: 'Surrender of railway receipt' },
        { number: '77', title: 'Power of railway administration to deliver goods or sale proceeds thereof in certain cases' },
        { number: '78', title: 'Power to measure, weigh , etc.' },
        { number: '79', title: 'Weighment of consignment on request of the consignee or endorsee :' },
        { number: '80', title: 'Liability of railway administration for wrong delivery :' },
        { number: '81', title: 'Open delivery of consignments :' },
        { number: '82', title: 'Partial delivery of consignment :' },
        { number: '83', title: 'Lien for freight or any other sum due' },
        { number: '84', title: 'Unclaimed consignment' },
        { number: '85', title: 'Disposal of perishable consignments in certain circumstances' },
        { number: '86', title: 'Sales under Secs. 83 to 85 not to affect the right to suit.-' },
        { number: '87', title: 'Power to make rules in respect of matters in this Chapter' }
      ]
    },
    {
      number: 'X',
      title: 'Special Provisions as to Goods Booked to Notified Stations',
      sections: [
        { number: '88', title: 'Definitions' },
        { number: '89', title: 'Power to declare notified stations' },
        { number: '90', title: 'Disposal of unremoved goods at stations' },
        { number: '91', title: 'Price to be paid to person entitled after deducting dues' },
        { number: '92', title: 'Power to make rules in respect of matters in the chapter' }
      ]
    },
    {
      number: 'XI',
      title: 'Responsibilities of Railway Administration as Carriers',
      sections: [
        { number: '93', title: 'General responsibilities of a railway administration as carrier of goods.' },
        { number: '94', title: 'Goods to be loaded or delivered at a siding not belonging to a railway administration' },
        { number: '95', title: 'Delay or retention in transit' },
        { number: '96', title: 'traffic passing over railway in India and railways in foreign countries' },
        { number: '97', title: 'Goods carried at owner\'s risk rate' },
        { number: '98', title: 'Goods in defective condition or defectively packed' },
        { number: '99', title: 'Responsibility of a railway administration after termination of transit' },
        { number: '100', title: 'Responsibility as carrier or luggage.' },
        { number: '101', title: 'Responsibility as a carrier of animals' },
        { number: '102', title: 'Exoneration from liability in certain cases' },
        { number: '103', title: 'Extent of monetary liability in respect of any consignment' },
        { number: '104', title: 'Extent of liability in respect of goods carried in open wagon' },
        { number: '105', title: 'Right of railway administration to check contents of certain consignment or luggage' },
        { number: '106', title: 'Re-weighment of goods when obligatory.' },
        { number: '107', title: 'Application for compensation for loss, etc. of goods.' },
        { number: '108', title: 'Person entitled to claim compensation' },
        { number: '109', title: 'Railway administration against which application for compensation for personal injury is to be filed' },
        { number: '110', title: 'Burden of proof' },
        { number: '111', title: 'Extent of liability of railway administration in respect of accidents at sea.' },
        { number: '112', title: 'Power to make rules in respect of matters in this chapter :' }
      ]
    },
    {
      number: 'XII',
      title: 'Accidents',
      sections: [
        { number: '113', title: 'Notice of railway accident :' },
        { number: '114', title: 'Inquiry by Commissioner :' },
        { number: '115', title: 'Inquiry by railway administration' },
        { number: '116', title: 'Powers of Commissioner in relation to the enquiries' },
        { number: '117', title: 'Statement made before Commissioner' },
        { number: '118', title: 'Procedure, etc' },
        { number: '119', title: 'No inquiry, investigation, etc. to be made if the Commission of Inquiry is appointed' },
        { number: '120', title: 'Inquiry into accident not covered by Sec. 113' },
        { number: '121', title: 'Returns' },
        { number: '122', title: 'Power to make rules in respect of matters in this Chapter.--' }
      ]
    },
    {
      number: 'XIII',
      title: 'Liability of Railway Administration for Death and injury to passengers due to accidents.',
      sections: [
        { number: '123', title: 'Definitions. In this Chapter , unless the context otherwise requires' },
        { number: '124', title: 'Extent of liability' },
        { number: '124A', title: 'Compensation on account of untoward incidents' },
        { number: '125', title: 'Application for compensation' },
        { number: '126', title: 'Interim relief by railway administration' },
        { number: '127', title: 'Determination of compensation in respect of any injury or loss of goods' },
        { number: '128', title: 'Savings as to certain rights' },
        { number: '129', title: 'Power to make rules in respect of matters in this chapter' }
      ]
    },
    {
      number: 'XIV',
      title: 'Regulation of hours of work and period of rest',
      sections: [
        { number: '130', title: 'Definitions' },
        { number: '131', title: 'Chapter not to apply to certain railway servants' },
        { number: '132', title: 'Limitations of hours of work' },
        { number: '133', title: 'Grant of Periodical rest' },
        { number: '134', title: 'Railway servant to remain on duty' },
        { number: '135', title: 'Supervisors of railway labour' },
        { number: '136', title: 'Power to make rules in respect of matters in this chapter' }
      ]
    },
    {
      number: 'XV',
      title: 'Penalties and Offences',
      sections: [
        { number: '137', title: 'Fraudulently traveling or attempting to travel without proper pass or ticket' },
        { number: '138', title: 'Levy of excess charge and fare for traveling without proper pass or ticket or beyond authorized distance' },
        { number: '139', title: 'Power to remove persons' },
        { number: '140', title: 'Security for good behaviour in certain cases' },
        { number: '141', title: 'Needlessly interfering with means of communication in a train' },
        { number: '142', title: 'Penalty for transfer of tickets' },
        { number: '143', title: 'Prohibition for unauthorized carrying on of business of procuring and supplying of railway tickets' },
        { number: '144', title: 'Prohibition on hawking, etc. and begging' },
        { number: '145', title: 'Drunkenness or nuisance' },
        { number: '146', title: 'Obstructing railway servant in his duties' },
        { number: '147', title: 'Trespass and refusal to desist from trespass' },
        { number: '148', title: 'Penalty for making a false statement in an application for compensation' },
        { number: '149', title: 'Making a false claim for compensation' },
        { number: '150', title: 'Maliciously wrecking or attempting to wreck a train' },
        { number: '151', title: 'Damage to or destruction of certain railway properties' },
        { number: '152', title: 'Maliciously hurting or attempting to hurt persons traveling by railway' },
        { number: '153', title: 'Endangering safety of persons traveling by railway by willful act of omission' },
        { number: '154', title: 'Endangering safety of persons traveling by railway by rash of negligent act or omission' },
        { number: '155', title: 'Entering into a compartment reserved or resisting entry into a compartment not reserved' },
        { number: '156', title: 'Travelling on roof, step or engine of a train' },
        { number: '157', title: 'Altering or defacing pass or ticket' },
        { number: '158', title: 'Penalty for contravention of any of the provision of Chapter XIV' },
        { number: '159', title: 'Disobedience of drivers or conductors of vehicles to directions of railway servant etc' },
        { number: '160', title: 'Opening or breaking a level crossing gate' },
        { number: '161', title: 'Negligently crossing unmanned level crossing' },
        { number: '162', title: 'Entering carriage or other place reserved for females' },
        { number: '163', title: 'Giving false account of goods' },
        { number: '164', title: 'Unlawfully bringing dangerous goods on a railways' },
        { number: '165', title: 'Unlawfully bringing offensive goods on a railway' },
        { number: '166', title: 'Defacing public notices' },
        { number: '167', title: 'Smoking' },
        { number: '168', title: 'Provision with respect to commission of offence by the children of acts endangering safety of person traveling on railway' },
        { number: '169', title: 'Levy of penalty on non-Government railway' },
        { number: '170', title: 'Recovery of Penalty' },
        { number: '171', title: 'Section 169 or 170 not to preclude Central Government from taking any other action' },
        { number: '172', title: 'Penalty for intoxication' },
        { number: '173', title: 'Abandoning train, etc., without authority' },
        { number: '174', title: 'Obstructing running of train, etc' },
        { number: '175', title: 'Endangering the safety of persons' },
        { number: '176', title: 'Obstructing level crossing' },
        { number: '177', title: 'False returns' },
        { number: '178', title: 'Making a false report by a railway servant' },
        { number: '179', title: 'Arrest for offences under certain sections' },
        { number: '180', title: 'Arrest of persons likely to abscond, etc' },
        { number: '181', title: 'Magistrates having jurisdiction under the Act' },
        { number: '182', title: 'Place of trial' }
      ]
    },
    {
      number: 'XVI',
      title: 'Miscellaneous',
      sections: [
        { number: '183', title: 'Power to provide other transport services' },
        { number: '184', title: 'Taxation on railways by local authorities' },
        { number: '185', title: 'Taxation on railways for advertisement' },
        { number: '186', title: 'Protection of action taken in good faith' },
        { number: '187', title: 'Restriction on execution against railway property' },
        { number: '188', title: 'Railway servants to be public servants for the purposes of Chapter IX and Sec.409 of the Indian Penal Code-' },
        { number: '189', title: 'Railway servants not to engage in trade:-' },
        { number: '190', title: 'Procedure of delivery to railway administration of property detained by a railway servant.' },
        { number: '191', title: 'Proof of entries in records and documents' },
        { number: '192', title: 'Service of notice, etc., on railway administration' },
        { number: '193', title: 'Service of notice by railway administration' },
        { number: '194', title: 'Presumption where notice is served by post' },
        { number: '195', title: 'Representation of railway administration' },
        { number: '196', title: 'Power to exempt railway from Act' },
        { number: '197', title: 'Matters supplemental to the definitions of "railway" and "railway servant"' },
        { number: '198', title: 'General Power to make rules' },
        { number: '199', title: 'Rules to be laid before parliament' },
        { number: '200', title: 'Repeal and saving' }
      ]
    }
  ]

  const getChapterColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-600 to-blue-700',
      'bg-gradient-to-r from-indigo-600 to-indigo-700',
      'bg-gradient-to-r from-purple-600 to-purple-700',
      'bg-gradient-to-r from-pink-600 to-pink-700',
      'bg-gradient-to-r from-red-600 to-red-700',
      'bg-gradient-to-r from-orange-600 to-orange-700',
      'bg-gradient-to-r from-yellow-600 to-yellow-700',
      'bg-gradient-to-r from-green-600 to-green-700',
      'bg-gradient-to-r from-teal-600 to-teal-700',
      'bg-gradient-to-r from-cyan-600 to-cyan-700',
      'bg-gradient-to-r from-sky-600 to-sky-700',
      'bg-gradient-to-r from-violet-600 to-violet-700',
      'bg-gradient-to-r from-rose-600 to-rose-700',
      'bg-gradient-to-r from-amber-600 to-amber-700',
      'bg-gradient-to-r from-emerald-600 to-emerald-700',
      'bg-gradient-to-r from-lime-600 to-lime-700'
    ]
    return colors[index % colors.length]
  }

  const getSectionColor = (index: number) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-indigo-500 to-indigo-600',
      'bg-gradient-to-r from-purple-500 to-purple-600',
      'bg-gradient-to-r from-pink-500 to-pink-600',
      'bg-gradient-to-r from-red-500 to-red-600',
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'bg-gradient-to-r from-yellow-500 to-yellow-600',
      'bg-gradient-to-r from-green-500 to-green-600',
      'bg-gradient-to-r from-teal-500 to-teal-600',
      'bg-gradient-to-r from-cyan-500 to-cyan-600'
    ]
    return colors[index % colors.length]
  }

  const totalSections = chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0)

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Railways Act, 1989 - All Chapters
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Complete reference guide to all chapters and sections of the Railways Act, 1989
          </p>
        </div>

        {/* Chapters */}
        <div className="space-y-8">
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              {/* Chapter Header */}
              <div className={`${getChapterColor(chapterIndex)} text-white px-3 py-5`}>
                <div className="flex items-center justify-between flex-col flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-center">
                        CHAPTER - {chapter.number}
                      </h2>
                      <p className="text-sm sm:text-base text-white/90 mt-1 text-center">
                        {chapter.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/80">Sections - {chapter.sections.length}</div>
                  </div>
                </div>
              </div>

              {/* Sections Grid */}
              <div className="lg:p-6 p-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapter.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="group bg-slate-700/50 rounded-lg p-4 border border-slate-600 hover:border-blue-400 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${getSectionColor(sectionIndex)} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0`}>
                          {section.number}
                        </div>
                        <p className="text-gray-200 leading-relaxed text-sm font-medium flex-1">
                          {section.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {chapters.length}
            </div>
            <div className="text-gray-300">Total Chapters</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {totalSections}
            </div>
            <div className="text-gray-300">Total Sections</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              1989
            </div>
            <div className="text-gray-300">Act Year</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RailwaysAct1989AllChapters
