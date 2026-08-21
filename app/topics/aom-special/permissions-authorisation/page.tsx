'use client'

import React from 'react'

interface PermissionItem {
  description: string
  authority: string
  category?: string
}

const PermissionsAuthorisationPage = () => {
  const permissions: PermissionItem[] = [
    {
      description: 'Subsidiary rules are framed by',
      authority: 'Authorised Officer',
      category: 'Authorised Officer'
    },
    {
      description: 'Coordinating officer for approval of plans and sanctioning of estimates for PFT is ______',
      authority: 'CGE',
      category: 'CGE'
    },
    {
      description: 'Classifying a passenger carrying train as a mixed train needs authorization by ______ of the concerned Railway.',
      authority: 'COM',
      category: 'COM'
    },
    {
      description: 'In addition to normal LR trips, additional LR trips for LP/Guard may be given with the approval of ______',
      authority: 'Controlling branch officers',
      category: 'Controlling branch officers'
    },
    {
      description: 'At Zonal level the management of Passenger Traffic is looked after by ______',
      authority: 'CPTM',
      category: 'CPTM'
    },
    {
      description: 'In the month of October minutes of Divisional time table meeting sent to ______',
      authority: 'CPTM',
      category: 'CPTM'
    },
    {
      description: 'Nodal officer of the construction of Private freight terminal is ______',
      authority: 'CTPM',
      category: 'CTPM'
    },
    {
      description: 'The coordinating officer throughout the construction stage of a Private Freight Terminal at headquarter level is ______',
      authority: 'CTPM',
      category: 'CTPM'
    },
    {
      description: 'Approved special instructions are issued or approved by',
      authority: 'Commissioner of Railway Safety (CRS)',
      category: 'CRS'
    },
    {
      description: 'The Central Government shall before giving its sanction to the opening of a Railway obtain a report from ______',
      authority: 'Commissioner of Railway Safety (CRS)',
      category: 'CRS'
    },
    {
      description: 'The sanctioning authority in case of combination of a color light distant signal with intermediate Block Signalling in section with Slip siding and Catch siding along with corresponding changes at stations without yard remodelling is ______',
      authority: 'CRS',
      category: 'CRS'
    },
    {
      description: 'The level of enquiry to be conducted in case of other consequential accidents to be done by ______',
      authority: 'Dy.CSO',
      category: 'CSO'
    },
    {
      description: 'Frequent power failures are to be reported to ______',
      authority: 'DEE',
      category: 'DEE'
    },
    {
      description: 'Patrol man must patrol their beats according to the Patrol charts issued by the ______',
      authority: 'DEN',
      category: 'DEN'
    },
    {
      description: 'Whenever Officers and Inspectors & Guards shall check speed of trains and if it is found that speed has been exceeded, they should inform LP at next stop and submit a report to ______',
      authority: 'DOM/DME/DEE',
      category: 'DOM'
    },
    {
      description: 'Trains not carrying passengers may be run without guard with the orders of the ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'In an emergency, a train not carrying passengers may be run without Guard can be ordered by ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'Before commencement of NI works the Engineering and S&T officials responsible for carrying out NI work shall send a Circular notice to ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'The official authorized to prescribe either one pilot only system or multiple pilot system of working at siding ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'Specific Loading Order (S.L.O) is givenby  ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'When ODC consignment is offered at a station for booking SS/SM should apply to the ___________, who will obtain the necessary sanction of the competent authority. An application must show the length, width, height, and weight of the load accompanied by a sketch in duplicate of the consignment.',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: '_______ shall provide model draft of letters, which are frequently received at stations, using a model draft will ensure that language used is polite, respectful and courteous.',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'The officials to sign and issue the SWR are ______',
      authority: 'DOM & DSTE',
      category: 'DOM'
    },
    {
      description: 'SWR diagram must be signed by ______',
      authority: 'DOM & DSTE& DEN',
      category: 'DOM'
    },
    {
      description: 'Appendix ‘G’ (rules for electrified section) of SWR must be signed by ______',
      authority: 'DOM & DSTE & DEE',
      category: 'DOM'
    },
    {
      description:
        'Temporary Working order is an embodiment of detailed instructions issued and circulated by the ________ whenever any pre-planned work of signalling, electrical (OHE) or engineering department is to be executed, requiring special safety precautions to be observed by staff.',
      authority: 'Sr.DOM/DOM',
      category: 'DOM'
    },
    {
      description: '_______________ shall fix the duty hours for the staff at stations in accordance with the (Hours of employment regulations) in consultation with concerned officials',
      authority: 'Sr.DPO/DPO',
      category: 'DPO'
    },
    {
      description: 'No. of detonators which shall be kept in stock at a station is prescribed by',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The time of reporting before the scheduled departure for LPs, Guards and ALPs is prescribed by',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Whenever alarm chain is pulled, Guard shall record the fact in CTR and submit a special report to ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Guard shall report to SM of the next important station, any stoppage or other irregularities in train working record the details in CTR and send a special report to the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'In case shunters are required to work any train outside station limits, special instructions to be obtained from ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Material train shall be ordered to work with the permission of ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The Officer authorized to certify Officers of the division for working of motor trolleys ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Application to the CRS for sanction for carrying out works affecting running lines shall be made by the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Who is the Chairman of the Official Language Implementation Committee of the Divisional Railway Office?',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Record pertaining to public claims etc., or those under reference from Home or other railways, should not be destroyed without permission from ______ of the concerned Railway.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The playing of bands and presentation of Guard of Honour etc., on the Station Platform is prohibited, except with the prior permission of the ______ of the concerned Railway.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The Officers and Senior Subordinates present at the site of accident must jointly investigate the cause and advise _______ and other Officers concerned, their opinion, mentioning the department or departments responsible and person or persons responsible for the occurrence.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Staff alleged to be guilty of offences which, in the opinion of the ______________ or the concerned Divisional Officer would, if proved, amounting in their removal from service /dismissal, shall be placed under suspension, pending the result of the inquiry',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'For accidents not falling under the purview of CRS, the ______ shall order an enquiry by a committee of officers from the departments concerned.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Normally __________ shall order all departmental and inter-departmental inquiries into accidents.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'All cases of Indicative Accidents shall be inquired into by a Committee of SS or JS Officers with ___________ as the accepting authority.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'If no department accepts responsibility, the Divisional Safety Officer shall at once put up the case to the _________ who will, if necessary, order an Inter Departmental inquiry.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'If the findings of Sr. Supervisors of inquiry Committee are not accepted, an inquiry at Officers level should be ordered by the ____________.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Before an employee takes independent charge of a post connected with train working for the first time, the pickup period is generally laid down by the _________',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Station Masters and other railway staff including Guards and Loco pilots of any train must not permit the display of advertisement matters on engines, passenger coaches and other rolling stock, unless the prior permission of the ________ concerned has been obtained.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'If there is any difficulty in replying to the required information from the public, the Station Master shall acknowledge the receipt of the letter immediately and matter referred to the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The playing of bands and presentation of Guard of Honour etc., on the Station Platform is prohibited, except with the prior permission of the ________',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'For NI working of up to 3 days, plans will be finalized in consultation with ____________, Branch Officers and concerned HOD of Construction/RE Organization.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Before permitting introduction of NI working, _______________ will satisfy himself regarding arrangement of staff, safety equipment, lighting, telecommunication and ground position.',
      authority: 'DRM/ADRM',
      category: 'DRM'
    },
    {
      description: 'Running staff review when carried out, after accounts vetting, sanction of ___________ be taken and Sr. DPO will issue circulars of revised sanction.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Letters from the public asking for information must be replied to as promptly as possible. If there is any difficulty in supplying the required information, the receipt of the letter must be acknowledged and matter referred to the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Record pertaining to public claims etc., or those under reference from Home or other railways, should not be destroyed without permission from _______ concerned.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Competent Authority to dispose off an appeal made under CPGRAMS by a divisional officer is ______',
      authority: 'ADRM',
      category: 'DRM'
    },
    {
      description: 'Who is the chairman of the Divisional Rajbhasha Co-ordination committee?',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Who is the competent authority to grant advance increment on sports account for excellence in sports?',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The Officer authorized to certify Group ‘C’ staff of the division for working of motor trolleys ______',
      authority: 'Sr.DSO',
      category: 'DSO'
    },
    {
      description: 'All yard accidents shall be inquired into by a Committee of Sr. Supervisors with __________as accepting authority.',
      authority: 'Sr. DSO / DSO',
      category: 'DSO'
    },
    {
      description: 'In extreme exigencies , the maintenance/repair of S&T gear is urgently needed to avoid an accident, same may be permitted by ______',
      authority: 'Sr.DSTE',
      category: 'DSTE'
    },
    {
      description: 'Color light Distant signal may be permitted to be combined with the last Stop signal of a station in rear with an Intermediate Block signal by the Sanctioning Authority is _______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Double Distant signalling along with corresponding changes at adjacent stations without yard remodelling shall be brought into use if they have been passed by the Sanctioning Authority of ________ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Intermediate Block signalling and Automatic Block signalling except in section with Slip siding and Catch siding, along with corresponding changes at adjacent stations without yard remodelling shall brought into use if they have been passed by the Sanctioning Authority of ________ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Irregularities for use of Passes may be condoned by ______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Who is the Chairman of Zonal Railways Official Language Implementation Committee?',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Employees are forbidden to occupy any place in station area for praying holding religious functions speeches, discourses etc., to erect religious structures, either permanent or temporary, or to add or alter any existing religious structures on railway land, without the sanction of the ______ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Merry Go Round (MGR) schemes proposals to be approved by ______ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'In case of CRS or CCRS is not in a position to conduct inquiry into serious accident cases, PCSO of the Railway shall be convenor of such Committee and _______ Railway will be the accepting authority.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'All cases of collisions falling under A1 to A4 categories shall be inquired into by a committee of SAG officers with __________ as the accepting authority',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'If suitable response is not received from the respondent Railway at ___________ level, for finalisation of DAR cases for accident involved by staff of foreign railway, then the case should be referred to Railway Board.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Railway Board has authorized _______________ for declaring an untoward incident as Railway Disaster.',
      authority: 'GM or AGM',
      category: 'GM'
    },
    {
      description: 'Employees are forbidden to occupy any place in station area for praying holding religious functions speeches, discourses etc., to erect religious structures, either permanent or temporary, or to add or alter any existing religious structures on railway land, without the sanction of the ______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'For NI working of more than 7 days personal approval of the _______________must be obtained.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Re-appropriation of funds from one itemised to another itemised work of a plan head is within the powers of ______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'In the case of all Group \'C\' including erstwhile Group \'D\' railway employees, the power to grant the leave beyond maximum period of 5 years is delegated to concerned ______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Who is the competent authority to sanction study leave to the officers in India?',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Who is the sanctioning authority for 100% excess due to escalation?',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Re-appropriation of funds from one itemised work to another itemised work of a plan head is within the power of _____',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Variation beyond 150% of the contract value requires the sanction of',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Accident Inquiry Reports with staff of foreign railway responsibility should be put to __________directly being the Accepting Authority in such cases.',
      authority: 'AGM',
      category: 'GM'
    },
    {
      description: 'Who is the competent authority for curtailing the period of training of non-gazetted employees in exigencies of service?',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'General Rules can be framed by',
      authority: 'Government of India',
      category: 'Governmen of India'
    },
    {
      description: 'Who is empowered to make rules to implement the Official Language Act?',
      authority: 'Government of India',
      category: 'Government of India'
    },
    {
      description: '______ is the nodal officer for all Amrit Bharat Station Scheme (ABSS) works',
      authority: 'PCCM',
      category: 'PCCM'
    },
    {
      description: 'In case of emergency, CC+6 loaded wagons can be permitted on excepted CC+6 routes. Permission of ______ is required',
      authority: 'PCE',
      category: 'PCE'
    },
    {
      description: 'Normally fixed signals are placed on the left side of track of an approaching train, provided on right side under the authorization of',
      authority: 'PCOM',
      category: 'PCOM'
    },
    {
        description: 'ODC shall be allowed to be attached by a train for transport only with prior sanction of ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'No private trolley shall be used by non railway official except under special permission of ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'For booking against a restriction, thepermission of ______ is required',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: "For block rake composition and marshalling order, 'Normal composition and marshalling order and rake link of passenger trains' are issued by ___________ of respective railways from time to time.",
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: "Classifying a passenger carrying train as a mixed train needs authorization by ________",
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'The Operating Branchwill arrange to advise the _______ of the other Ralways concerned, with full dimensions of the consignment, as loaded in the truck for issue of necessary final sanction for movement.',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'Maximum Permissible speed for each section of the railway is given by ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'Who is the competent authority to notify the Associate weighbridge?',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'Who is the Chairman of the Headquerter level of Staff Benefit Fund (SBF)',
        authority: 'PCPO',
        category: 'PCPO'
      },
      {
        description: 'Power to declare the employment of a Railway servant as "Intensive" or "Essentially Intermittent" is vested in the ______',
        authority: 'PCPO',
        category: 'PCPO'
      },
      {
        description: 'Sanction for ‘C’ class ODC special trains has to be given by ______',
        authority: 'PCSO',
        category: 'PCSO & CRS & PCE'
      },
      {
        description: 'The Officer authorized to certify Officers of HQ for working of motor trolleys ______',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'All consequential accidents & yard accidents having serious repercussion are to be immediately conveyed to the Railway Board by _______________',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'In case of CRS or CCRS is not in a position to conduct inquiry into serious accident cases, notified to him, the inquiry shall be carried out by a Committee of ___________and ________of the Railway shall be convenor of such Committee.',
        authority: 'SA Grade Officers, PCSO',
        category: 'PCSO'
      },
      {
        description: 'In accident cases where the Inquiry Committee determines the responsibility on the staff of Foreign Railway, the Inquiry Report should be put upto PHOD of the Railway on which the accident took place through_________',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'Only on receipt of the orders of the _______________regarding the finding in the inquiry proceedings, shall disciplinary action be taken by the appropriate authorities in accordance with Discipline and Appeal Rules',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'The actual punishment imposed on the staff shall be communicated to the __________________within the stipulated time.',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'If the Magistracy or the Railway Police or the Local Police require a copy of the Inquiry Proceedings or the findings, they have to apply to the ______________.',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'Who is the authorised to nominate / select the members of the SBF',
        authority: 'PCPO',
        category: 'PCPO'
      },
      {
        description: 'Railway Board has authorized ________________ (when GM/AGM is not available)for declaring an untoward incident as Railway Disaster.',
        authority: 'PCSO',
        category: 'PCSO'
      },
      
      {
        description: 'Who is the head of Transformation Cell at Railway Board? ______',
        authority: 'PED',
        category: 'PED'
      },
      {
        description: 'For accidents not falling under the purview of CRS, the GM considers it is necessary to hold an inquiry by the __________ in to such accidents, the same can be ordered.',
        authority: 'PHOD',
        category: 'PHOD'
      },
      {
        description: 'If the cause of the accident is attributable beyond doubt to a particular department in Railways and the ______________ accepts the responsibility, the inquiry by the inter-departmental committee can be dispensed with.',
        authority: 'PHOD',
        category: 'PHOD'
      },
      {
        description: 'In accident cases where the Inquiry Committee determines the responsibility on the staff of Foreign Railway, the Inquiry Report should be put upto PHOD of the Railway on which the accident took place through_________',
        authority: 'PHOD',
        category: 'PHOD'
      },
    {
      description: 'All India Trains at a glance is prepared by ______',
      authority: 'Railway Board',
      category: 'Railway Board'
    },

    {
      description: 'Who is the competent authority to sanction study leave to the officers abroad/foreign countries?',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Re-appropriation of funds from one plan head to another plan head is within the powers of',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Who can sanction Joining time beyond 30 days?',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Re-appropriation of funds from one source to another source is within the powers of',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Re-appropriation of funds from a priority work to a non-priority work',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Who is the sanctioning authority for 25% excess due to scope?',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'The per-capita grant for the Staff Benefit Fund is sanctioned by ______',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'The level of enquiry to be conducted in case of A1 to A4(collision) in case CRS is not conducting to be done by minimum grade officers of ______',
      authority: 'SAG',
      category: 'SAG'
    },
    {
      description: 'Magisterial Inquiry may be judicial or non-judicial and is appointed by the_______.',
      authority: 'State Government',
      category: 'State Government'
    },
  ]

  // Group permissions by category for better organization
  const groupedByCategory = permissions.reduce((acc, permission) => {
    const categoryKey = permission.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(permission)
    return acc
  }, {} as Record<string, PermissionItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Government':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'CRS':
        return 'bg-linear-to-r from-orange-600 to-orange-700'
      case 'Authorised Officer':
        return 'bg-linear-to-r from-blue-600 to-blue-700'
      case 'PCOM':
        return 'bg-linear-to-r from-green-600 to-green-700'
      case 'DRM':
        return 'bg-linear-to-r from-purple-600 to-purple-700'
      default:
        return 'bg-linear-to-r from-indigo-600 to-indigo-700'
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Permissions/Sanctions/Authorised
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to permissions, sanctions, and authorized procedures for railway operations
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Category Header */}
              <div className={`${getCategoryColor(category)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {category}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-emerald-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Description */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Authority */}
                      <div className="shrink-0 sm:w-64 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900/50 border border-emerald-700">
                          <span className="text-emerald-300 font-semibold text-lg">
                            {item.authority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {permissions.length}
            </div>
            <div className="text-gray-300">Total Permissions</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              Authorities
            </div>
            <div className="text-gray-300">Authorized By</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermissionsAuthorisationPage
