"use client"
import React, { useState, useEffect } from 'react'
import { BookOpen, Scale, Shield, Building2, Train, Users, PackageCheck, Truck, AlertTriangle, Gavel, FileText, Settings, ChevronDown, ChevronUp, ExternalLink, BookOpenCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

const IRAct1989 = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [openingPDF, setOpeningPDF] = useState<string | null>(null)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId)
      }
      return [sectionId]
    })
  }

  const openPDF = (sectionNumber: string) => {
    const pdfFileName = `IRACT1989SECTION${sectionNumber}.pdf`
    const pdfPath = `/indian-railways-act-1989/${pdfFileName}`
    
    setOpeningPDF(sectionNumber)
    setTimeout(() => {
      if (isMobile) {
        window.location.href = pdfPath
      } else {
        window.open(pdfPath, '_blank')
        setOpeningPDF(null)
      }
    }, 100)
  }

  const openContent = (sectionNumber: string) => {
    setOpeningContent(sectionNumber)
    
    const route = `/acts/indian-railways-act-1989/content/${sectionNumber}`
    console.log('Navigating to:', route, 'from section:', sectionNumber)
    
    setTimeout(() => {
      router.push(route)
      setOpeningContent(null)
    }, 100)
  }

  const chapters = [
    {
      id: 1,
      title: "PRELIMINARY",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Short title, commencement and definitions",
      sections: [
        { number: "1", title: "Short title and Commencement." },
        { number: "2", title: "Definition" }
      ]
    },
    {
      id: 2,
      title: "Railway Administration",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Zonal railways and administrative appointments",
      sections: [
        { number: "3", title: "Zonal Railways." },
        { number: "4", title: "Appointment of General Manager" }
      ]
    },
    {
      id: 3,
      title: "COMMISSIONERS OF RAILWAY SAFETY",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Appointment, duties and powers of railway safety commissioners",
      sections: [
        { number: "5", title: "Appointment of Chief Commissioner of Railway Safety and Commissioners of Railway Safety. -" },
        { number: "6", title: "Duties of Commissioner - The Commissioner shall -" },
        { number: "7", title: "Powers of Commissioner" },
        { number: "8", title: "Commissioner to be Public Servant" },
        { number: "9", title: "Facilities to be afforded to Commissioner" },
        { number: "10", title: "Annual report of Commissioners" }
      ]
    },
    {
      id: 4,
      title: "CONSTRUCTION AND MAINTENANCE OF WORK",
      icon: <Settings className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      description: "Powers and procedures for railway construction and maintenance",
      sections: [
        { number: "11", title: "Power of railway administration to execute all necessary works" },
        { number: "12", title: "Power to later the position of pipe, electric supply line, drain or sewer, etc." },
        { number: "13", title: "Protection for Government Property." },
        { number: "14", title: "Temporary entry upon land to remove obstruction, to repair or to prevent accident" },
        { number: "15", title: "Payment of amount for damage or loss" },
        { number: "16", title: "Accommodation Works" },
        { number: "17", title: "Power of owner, occupier, State Government or local authority to cause additional accommodation works to be made" },
        { number: "18", title: "Fences, gates and bars" },
        { number: "19", title: "Over bridges and under bridges" },
        { number: "20", title: "Power of Central Government to give directions for safety" }
      ]
    },
    {
      id: 5,
      title: "Opening Of Railways",
      icon: <Train className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Procedures for opening, closing and re-opening of railways",
      sections: [
        { number: "21", title: "Sanction of the Central Government to the opening of railway" },
        { number: "22", title: "Formalities to be compiled with before giving sanction to the opening of a railway" },
        { number: "23", title: "Section 21 and 22 to apply to the opening of certain works" },
        { number: "24", title: "Temporary suspension of traffic" },
        { number: "25", title: "Power to close railway opened for the public carriage of passengers" },
        { number: "26", title: "Re-opening of closed railway" },
        { number: "27", title: "Use of rolling stock" },
        { number: "28", title: "Delegation of powers" },
        { number: "29", title: "Power to make rules in respect of matters in this Chapter" }
      ]
    },
    {
      id: 6,
      title: "Fixation of Rates",
      icon: <Scale className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Powers related to fixing and altering railway rates",
      sections: [
        { number: "30", title: "Power to fix rates" },
        { number: "31", title: "Power to classify commodities or alter rates. – The Central Government shall have power to" },
        { number: "32", title: "Power of railway administration to charge certain rates" }
      ]
    },
    {
      id: 7,
      title: "Railway Rates Tribunal",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      description: "Constitution, powers and procedures of Railway Rates Tribunal",
      sections: [
        { number: "33", title: "Constitution of the Railway Rates Tribunal" },
        { number: "34", title: "Staff of the Tribunal" },
        { number: "35", title: "Sittings of the Tribunal." },
        { number: "36", title: "Complaints against a railway administration" },
        { number: "37", title: "Matters not written the jurisdiction of the Tribunal" },
        { number: "38", title: "Powers of the Tribunal" },
        { number: "39", title: "Reference to the Tribunal" },
        { number: "40", title: "Assistance by the Central Government" },
        { number: "41", title: "Burden of proof, etc.—In the case of any complaint under Cl. (a) of Sec. 36" },
        { number: "42", title: "Decision, etc., or the Tribunal" },
        { number: "43", title: "Bar of jurisdiction of Courts" },
        { number: "44", title: "Relief which the Tribunal may grant" },
        { number: "45", title: "Revision of decisions given by the Tribunal" },
        { number: "46", title: "Execution of decisions or orders of the Tribunal" },
        { number: "47", title: "Report of the Central Government" },
        { number: "48", title: "Power of the Tribunal to make regulations." }
      ]
    },
    {
      id: 8,
      title: "Carriage of Passengers",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
      description: "Rules and regulations for passenger carriage",
      sections: [
        { number: "49", title: "Exhibition of certain timings and Tables of fares at situations.-" },
        { number: "50", title: "Supply of tickets on payment of fare" },
        { number: "51", title: "Provisions for case in which ticket is issued for class or train not having accommodation." },
        { number: "53", title: "Prohibition against transfer of certain tickets.-" },
        { number: "54", title: "Exhibition and surrender of passes and tickets.-" },
        { number: "55", title: "Exhibition against traveling without pass or ticket.-" },
        { number: "56", title: "Power to refuse to carry persons suffering from infectious or contagious diseases.-" },
        { number: "57", title: "Maximum number of passenger for each compartment" },
        { number: "58", title: "Earmarking of compartment, etc. for ladies" },
        { number: "59", title: "Communications between passengers and railway servant in charge if train" },
        { number: "60", title: "Power to make rules in respect of matters in this Chapter" }
      ]
    },
    {
      id: 9,
      title: "Carriage of goods",
      icon: <PackageCheck className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
      description: "Provisions for carriage, delivery and liability for goods",
      sections: [
        { number: "61", title: "Maintenance of rate-books, etc., for carriage of goods" },
        { number: "62", title: "Conditions for receiving, etc., of goods" },
        { number: "63", title: "Provision of risk rates" },
        { number: "64", title: "Forwarding note" },
        { number: "65", title: "Railway receipt" },
        { number: "66", title: "Powers to require statement relating to the description of goods." },
        { number: "67", title: "Carriage of dangerous or offensive goods" },
        { number: "68", title: "Carriage of animals suffering from infectious or contagious diseases.-" },
        { number: "69", title: "Deviation of route" },
        { number: "70", title: "Prohibition of undue preference" },
        { number: "71", title: "Power to give direction in regard to carriage of certain goods" },
        { number: "72", title: "Maximum carrying capacity for wagons and trucks" },
        { number: "73", title: "Punitive charge for over-loading a wagon" },
        { number: "74", title: "Passing of property in the goods covered by railway receipt" },
        { number: "75", title: "Section 74 not to affect right of stoppage in transit or claims for freight.- Nothing contained in Sec. 74 shall prejudice or affect" },
        { number: "76", title: "Surrender of railway receipt" },
        { number: "77", title: "Power of railway administration to deliver goods or sale proceeds thereof in certain cases" },
        { number: "78", title: "Power to measure, weigh , etc." },
        { number: "79", title: "Weighment of consignment on request of the consignee or endorsee :" },
        { number: "80", title: "Liability of railway administration for wrong delivery :" },
        { number: "81", title: "Open delivery of consignments :" },
        { number: "82", title: "Partial delivery of consignment :" },
        { number: "83", title: "Lien for freight or any other sum due" },
        { number: "84", title: "Unclaimed consignment" },
        { number: "85", title: "Disposal of perishable consignments in certain circumstances" },
        { number: "86", title: "Sales under Secs. 83 to 85 not to affect the right to suit.-" },
        { number: "87", title: "Power to make rules in respect of matters in this Chapter" }
      ]
    },
    {
      id: 10,
      title: "Special Provisions as to Goods Booked to Notified Stations",
      icon: <Truck className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
      description: "Special provisions for goods at notified stations",
      sections: [
        { number: "88", title: "Definitions" },
        { number: "89", title: "Power to declare notified stations" },
        { number: "90", title: "Disposal of unremoved goods at stations" },
        { number: "91", title: "Price to be paid to person entitled after deducting dues" },
        { number: "92", title: "Power to make rules in respect of matters in the chapter" }
      ]
    },
    {
      id: 11,
      title: "Responsibilities of Railway Administration as Carriers",
      icon: <Shield className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      description: "Liability and responsibilities of railway administration",
      sections: [
        { number: "93", title: "General responsibilities of a railway administration as carrier of goods." },
        { number: "94", title: "Goods to be loaded or delivered at a siding not belonging to a railway administration" },
        { number: "95", title: "Delay or retention in transit" },
        { number: "96", title: "traffic passing over railway in India and railways in foreign countries" },
        { number: "97", title: "Goods carried at owner's risk rate" },
        { number: "98", title: "Goods in defective condition or defectively packed" },
        { number: "99", title: "Responsibility of a railway administration after termination of transit" },
        { number: "100", title: "Responsibility as carrier or luggage." },
        { number: "101", title: "Responsibility as a carrier of animals" },
        { number: "102", title: "Exoneration from liability in certain cases" },
        { number: "103", title: "Extent of monetary liability in respect of any consignment" },
        { number: "104", title: "Extent of liability in respect of goods carried in open wagon" },
        { number: "105", title: "Right of railway administration to check contents of certain consignment or luggage" },
        { number: "106", title: "Re-weighment of goods when obligatory." },
        { number: "107", title: "Application for compensation for loss, etc. of goods." },
        { number: "108", title: "Person entitled to claim compensation" },
        { number: "109", title: "Railway administration against which application for compensation for personal injury is to be filed" },
        { number: "110", title: "Burden of proof" },
        { number: "111", title: "Extent of liability of railway administration in respect of accidents at sea." },
        { number: "112", title: "Power to make rules in respect of matters in this chapter :" }
      ]
    },
    {
      id: 12,
      title: "Accidents",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
      description: "Notice, inquiry and reporting of railway accidents",
      sections: [
        { number: "113", title: "Notice of railway accident :" },
        { number: "114", title: "Inquiry by Commissioner :" },
        { number: "115", title: "Inquiry by railway administration" },
        { number: "116", title: "Powers of Commissioner in relation to the enquiries" },
        { number: "117", title: "Statement made before Commissioner" },
        { number: "118", title: "Procedure, etc" },
        { number: "119", title: "No inquiry, investigation, etc. to be made if the Commission of Inquiry is appointed" },
        { number: "120", title: "Inquiry into accident not covered by Sec. 113" },
        { number: "121", title: "Returns" },
        { number: "122", title: "Power to make rules in respect of matters in this Chapter.--" }
      ]
    },
    {
      id: 13,
      title: "Liability of Railway Administration for Death and injury to passengers due to accidents",
      icon: <FileText className="w-6 h-6" />,
      color: "from-violet-500 to-violet-600",
      description: "Compensation and liability for passenger injuries and death",
      sections: [
        { number: "123", title: "Definitions. In this Chapter , unless the context otherwise requires" },
        { number: "124", title: "Extent of liability" },
        { number: "124A", title: "Compensation on account of untoward incidents" },
        { number: "125", title: "Application for compensation" },
        { number: "126", title: "Interim relief by railway administration" },
        { number: "127", title: "Determination of compensation in respect of any injury or loss of goods" },
        { number: "128", title: "Savings as to certain rights" },
        { number: "129", title: "Power to make rules in respect of matters in this chapter" }
      ]
    },
    {
      id: 14,
      title: "Regulation of hours of work and period of rest",
      icon: <Users className="w-6 h-6" />,
      color: "from-amber-500 to-amber-600",
      description: "Working hours and rest periods for railway servants",
      sections: [
        { number: "130", title: "Definitions" },
        { number: "131", title: "Chapter not to apply to certain railway servants" },
        { number: "132", title: "Limitations of hours of work" },
        { number: "133", title: "Grant of Periodical rest" },
        { number: "134", title: "Railway servant to remain on duty" },
        { number: "135", title: "Supervisors of railway labour" },
        { number: "136", title: "Power to make rules in respect of matters in this chapter" }
      ]
    },
    {
      id: 15,
      title: "Penalties and Offences",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      description: "Penalties for various offences under the Railway Act",
      sections: [
        { number: "137", title: "Fraudulently traveling or attempting to travel without proper pass or ticket" },
        { number: "138", title: "Levy of excess charge and fare for traveling without proper pass or ticket or beyond authorized distance" },
        { number: "139", title: "Power to remove persons" },
        { number: "140", title: "Security for good behaviour in certain cases" },
        { number: "141", title: "Needlessly interfering with means of communication in a train" },
        { number: "142", title: "Penalty for transfer of tickets" },
        { number: "143", title: "Prohibition for unauthorized carrying on of business of procuring and supplying of railway tickets" },
        { number: "144", title: "Prohibition on hawking, etc. and begging" },
        { number: "145", title: "Drunkenness or nuisance" },
        { number: "146", title: "Obstructing railway servant in his duties" },
        { number: "147", title: "Trespass and refusal to desist from trespass" },
        { number: "148", title: "Penalty for making a false statement in an application for compensation" },
        { number: "149", title: "Making a false claim for compensation" },
        { number: "150", title: "Maliciously wrecking or attempting to wreck a train" },
        { number: "151", title: "Damage to or destruction of certain railway properties" },
        { number: "152", title: "Maliciously hurting or attempting to hurt persons traveling by railway" },
        { number: "153", title: "Endangering safety of persons traveling by railway by willful act of omission" },
        { number: "154", title: "Endangering safety of persons traveling by railway by rash of negligent act or omission" },
        { number: "155", title: "Entering into a compartment reserved or resisting entry into a compartment not reserved" },
        { number: "156", title: "Travelling on roof, step or engine of a train" },
        { number: "157", title: "Altering or defacing pass or ticket" },
        { number: "158", title: "Penalty for contravention of any of the provision of Chapter XIV" },
        { number: "159", title: "Disobedience of drivers or conductors of vehicles to directions of railway servant etc" },
        { number: "160", title: "Opening or breaking a level crossing gate" },
        { number: "161", title: "Negligently crossing unmanned level crossing" },
        { number: "162", title: "Entering carriage or other place reserved for females" },
        { number: "163", title: "Giving false account of goods" },
        { number: "164", title: "Unlawfully bringing dangerous goods on a railways" },
        { number: "165", title: "Unlawfully bringing offensive goods on a railway" },
        { number: "166", title: "Defacing public notices" },
        { number: "167", title: "Smoking" },
        { number: "168", title: "Provision with respect to commission of offence by the children of acts endangering safety of person traveling on railway" },
        { number: "169", title: "Levy of penalty on non-Government railway" },
        { number: "170", title: "Recovery of Penalty" },
        { number: "171", title: "Section 169 or 170 not to preclude Central Government from taking any other action" },
        { number: "172", title: "Penalty for intoxication" },
        { number: "173", title: "Abandoning train, etc., without authority" },
        { number: "174", title: "Obstructing running of train, etc" },
        { number: "175", title: "Endangering the safety of persons" },
        { number: "176", title: "Obstructing level crossing" },
        { number: "177", title: "False returns" },
        { number: "178", title: "Making a false report by a railway servant" },
        { number: "179", title: "Arrest for offences under certain sections" },
        { number: "180", title: "Arrest of persons likely to abscond, etc" },
        { number: "181", title: "Magistrates having jurisdiction under the Act" },
        { number: "182", title: "Place of trial" }
      ]
    },
    {
      id: 16,
      title: "Miscellaneous",
      icon: <Settings className="w-6 h-6" />,
      color: "from-slate-500 to-slate-600",
      description: "Miscellaneous provisions and general powers",
      sections: [
        { number: "183", title: "Power to provide other transport services" },
        { number: "184", title: "Taxation on railways by local authorities" },
        { number: "185", title: "Taxation on railways for advertisement" },
        { number: "186", title: "Protection of action taken in good faith" },
        { number: "187", title: "Restriction on execution against railway property" },
        { number: "188", title: "Railway servants to be public servants for the purposes of Chapter IX and Sec.409 of the Indian Penal Code-" },
        { number: "189", title: "Railway servants not to engage in trade:-" },
        { number: "190", title: "Procedure of delivery to railway administration of property detained by a railway servant." },
        { number: "191", title: "Proof of entries in records and documents" },
        { number: "192", title: "Service of notice, etc., on railway administration" },
        { number: "193", title: "Service of notice by railway administration" },
        { number: "194", title: "Presumption where notice is served by post" },
        { number: "195", title: "Representation of railway administration" },
        { number: "196", title: "Power to exempt railway from Act" },
        { number: "197", title: "Matters supplemental to the definitions of \"railway\" and \"railway servant\"" },
        { number: "198", title: "General Power to make rules" },
        { number: "199", title: "Rules to be laid before parliament" },
        { number: "200", title: "Repeal and saving" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <Scale className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              INDIAN RAILWAYS ACT 1989
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">COMPLETE INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Chapter Index for Indian Railways Act 1989 - Complete legal framework covering all 16 chapters 
              with detailed provisions, regulations, and procedures governing Indian Railway operations.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Indian Railways Act 1989 - Legal Reference Document</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Chapter Header */}
                  <div 
                    className={`bg-linear-to-r ${chapter.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleSection(chapter.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Chapter Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {chapter.icon}
                      </div>
                      
                      {/* Chapter Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          Chapter {chapter.id === 1 ? 'I' : chapter.id === 2 ? 'II' : chapter.id === 3 ? 'III' : chapter.id === 4 ? 'IV' : chapter.id === 5 ? 'V' : chapter.id === 6 ? 'VI' : chapter.id === 7 ? 'VII' : chapter.id === 8 ? 'VIII' : chapter.id === 9 ? 'IX' : chapter.id === 10 ? 'X' : chapter.id === 11 ? 'XI' : chapter.id === 12 ? 'XII' : chapter.id === 13 ? 'XIII' : chapter.id === 14 ? 'XIV' : chapter.id === 15 ? 'XV' : 'XVI'}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg font-medium mt-1">
                          {chapter.title}
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          {chapter.description}
                        </p>
                      </div>
                      
                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>
                      
                      {/* Section Count */}
                      <p className="text-white/70 text-sm font-medium mb-4">
                        Sections: {chapter.sections.length}
                      </p>
                      
                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedSections.includes(chapter.id) ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sections List */}
                  {expandedSections.includes(chapter.id) && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="grid gap-3">
                        {chapter.sections.map((section, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 py-4 lg:px-4 px-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                          >
                            <div className="shrink-0 w-12 h-8 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-semibold">
                              {section.number}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 font-medium text-sm lg:text-base">
                                {section.title}
                              </p>
                              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-3 mt-2">
                                {/* View Document Button */}
                                <button
                                  onClick={() => openPDF(section.number)}
                                  disabled={openingPDF === section.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingPDF === section.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingPDF === section.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                  <span>{openingPDF === section.number ? 'Opening...' : 'View Document'}</span>
                                  {!isMobile && openingPDF !== section.number && <ExternalLink className="w-3 h-3" />}
                                </button>
                                
                                {/* View Content Button */}
                                <button
                                  onClick={() => openContent(section.number)}
                                  disabled={openingContent === section.number}
                                  className={`flex items-center space-x-2 px-3 py-1.5 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                                    openingContent === section.number
                                      ? 'bg-gray-500 cursor-not-allowed'
                                      : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                                  }`}
                                >
                                  {openingContent === section.number ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  ) : (
                                    <BookOpenCheck className="w-4 h-4" />
                                  )}
                                  <span>{openingContent === section.number ? 'Opening...' : 'View Content'}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            
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

export default IRAct1989