export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const telanganaHeaderLine = 'TELANGANA' as const

export const telanganaBasicFacts = [
  { label: 'CAPITAL', value: 'Hyderabad (Musi River)' },
  { label: 'ESTABLISHED', value: 'June 2, 2014' },
  { label: 'CHIEF MINISTER', value: 'K Chandrashekar Rao' },
  { label: 'GOVERNOR', value: 'Tamilisai Rangarajaan' },
  { label: 'RULING PARTY', value: 'Telangana Rasthra Samithi (TRS)' },
  { label: 'HIGH COURT', value: 'Hyderabad' },
  { label: 'STATE ANIMAL', value: 'Deer' },
  { label: 'STATE BIRD', value: 'Indian Roller' },
  { label: 'STATE TREE', value: 'Jammi Chettu (Prosopis Cineraria)' },
  { label: 'STATE FLOWER', value: 'Tangedu Puvvu (Senna Auriculata)' },
  { label: 'STATE FRUIT', value: 'Mango' },
  { label: 'STATE EMBLEM', value: 'Kakatiya Kala Thoranam, Charminar' },
  {
    label: 'STATE ANTHEM/SONG',
    value: 'Jaya Jaya He Telangana Janani Jayakethanam',
  },
  { label: 'STATE SPORT', value: 'Kabaddi' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Telugu (State Language),     Urdu,     Hindi,     English',
  },
] as const

export type TelanganaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const telanganaExtendedFacts: readonly TelanganaExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Perini Shiva Tandavam (State Dance)',
      'Gusadi',
      'Kolatam',
      'Dappu',
      'Lambadi Dance',
      'Bathukamma (Flower & Cultural festival)',
      'Mayuri Dance',
    ],
  },
  {
    label: 'BOUNDARY STATES (5)',
    kind: 'ordered',
    items: [
      'Andhra Pradesh',
      'Maharasthra',
      'Chhattisgarh',
      'Odisha',
      'Karnataka',
    ],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '1,14,840 sq km (12th),                        Density: 307 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '3,51,93,978 (12th),                 1,14,840 sq km (12th)',
  },
  { label: 'LITERACY', kind: 'text', value: '66.46%' },
  {
    label: 'ASSEMBLY',
    kind: 'text',
    value: '119,              			Vidhana parishat  = 43',
  },
  { label: 'LOK SABHA', kind: 'text', value: '17' },
  { label: 'RAJYA SABHA', kind: 'text', value: '7' },
  { label: 'TRIBES', kind: 'text', value: 'Lambadi' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Batukamma',
      'Bonalu',
      'Sankranti',
      'Ramdhan',
      'Christamas',
      'Dasara',
      'Vinayaka Chavithi',
      'Holi',
      'Diwali',
      'Krishnasthami',
      'Ugadi',
      'Rakhi',
      'Pournami',
      'Naga Panchami',
      'Ratha Saptami',
    ],
  },
  {
    label: 'DISTRICTS (31)',
    kind: 'ordered',
    items: [
      'Mahabubnagar',
      'Adilabad',
      'Hyderabad',
      'Jagtial',
      'Jangaon',
      'Jogulamba Gadwal',
      'Kamareddy',
      'Karimnagar',
      'Khammam',
      'Nirmal',
      'Mahabubabad',
      'Mancherial',
      'Medak',
      'Medchal',
      'Nalgonda',
      'Nagarkurnool',
      'Nizamabad',
      'Peddapalli',
      'Siddipet',
      'Suryapet',
      'Warangal (Urban)',
      'Vikarabad',
      'Rangareddy',
      'Sangareddy',
      'Wanaparthy',
      'Yadadri',
      'Bhuvanagiri',
      'Rajanna Siriclla',
      'Warangal (Rural)',
      'Bhadradri Kothagudem',
      'Komaram Bheem Asifabad',
      'Jayashankar Bhupalapally',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Hyderabad (Musi River)',
      'Warangal',
      'Nizambad',
      'Karimnagar',
      'Mahabubnagar',
      'Ramagundam',
      'Pochampalli',
      'Nirmal',
      'Adilabad',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Gnana Saraswati Temple', location: 'Basar' },
  { name: 'Sri Ram Temple', location: 'Bhadrachala' },
  { name: 'Birla Mandir', location: '---' },
  { name: 'Yadagirigutta Temple', location: '---' },
  { name: 'Vemulavada Raja Rajeswari Temple', location: '---' },
  { name: 'Ramappa Temple', location: '---' },
  { name: 'Thousand Pillar Temple', location: 'Warangal' },
  { name: 'Macca Majid ', location: 'Hyderabad      ' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [
  {
    name: 'Singareni (Coal & Power)',
    year: '---',
    location: 'Kothagudem',
  },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  {
    name: 'Kothagudem Thermal Power Station',
    year: '---',
    location: '---',
  },
  {
    name: 'Ramagundam Thermal Power Station',
    year: '---',
    location: '---',
  },
  {
    name: 'Singareni Thermal Power Plant',
    year: '---',
    location: '---',
  },
  {
    name: 'Bhadradri Thermal Power Plant ',
    year: '---',
    location: 'Manugur',
  },
  {
    name: 'Telangana Super Thermal Power Plant',
    year: '---',
    location: 'Ramagundam',
  },
  {
    name: 'Jurala Hydro Power Plant',
    year: '---',
    location: 'Gadwal',
  },
  {
    name: 'Yadadri Thermal Power Plant',
    year: '---',
    location: 'Damerlacherla (Nalgonda)',
  },
] as const

export const riversOrdered = [
  'Godavari (Dakshin Ganga & Old Ganga)',
  'Krishna – Ardha Ganga',
  'Musi',
  'Bhima',
  'Manjira',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  {
    name: 'Hussain Sagar Lake',
    river: '---',
    location: 'Hyderabad ',
  },
  {
    name: 'Bhadrakali Lake',
    river: '---',
    location: 'Warangal   ',
  },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Sri Sailam Dam', river: 'Krishna River', location: '---' },
  { name: 'Nagarjuna Sagar Dam', river: 'Krishna River', location: '---' },
  { name: 'Nizam Sagar Dam', river: 'Manjira River', location: '---' },
  {
    name: 'Singur Dam',
    river: 'Manjira River',
    location: 'Sangareddy ',
  },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Kuntala Waterfalls', location: '---' },
  { name: 'Bogatha Waterfalls', location: '---' },
  { name: 'Savatula Gundam Waterfalls', location: '---' },
  { name: 'Gowri Gundaala Waterfalls', location: '---' },
  { name: 'Pochera Waterfalls', location: 'Nirmal' },
] as const

export const portsPeakSectionTitle = 'PORTS/FORTS:' as const
export const portsPeakRows = [
  { name: 'Golconda Fort', location: '---' },
  { name: 'Warangal Fort', location: '---' },
  { name: 'Khammam Fort', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '-----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type TelanganaTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly TelanganaTigerReserveRow[] = [
  {
    name: 'Kawal Tiger Reserve',
    year: '2013',
    location: 'Jannaram (Mancherial District)',
  },
  {
    name: 'Amarabad Tiger Reserve',
    year: '2014',
    location: 'Mahabubnagar & Nalgonda Districts',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export type TelanganaNationalParkRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const nationalParksRows: readonly TelanganaNationalParkRow[] = [
  {
    name: 'Kasu Brahmananda Reddy N.P',
    year: '1994',
    location: 'Jubili Hills – Hyderabad',
  },
  {
    name: 'Mahavir Harina Vanasthali N.P',
    year: '1994',
    location: 'Vanastahlipuram – Hyderabad',
  },
  {
    name: 'Mrugavani National Park',
    year: '1994',
    location: 'Chilkur – Hyderabad',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Eturunagaram W.L.S', year: '1953', location: 'Warangal' },
  { name: 'Kawal W.L.S', year: '1965', location: '-' },
  { name: 'Lanja Madugu Siwaram', year: '1978', location: '-' },
  { name: 'Pakhal W.L.S', year: '1952', location: 'Warangal' },
  { name: 'Pranahita W.L.S', year: '1980', location: 'Adilabad' },
  { name: 'Shivaram W.L.S', year: '---', location: 'Karimnagar' },
  { name: 'Kinnerasani W.L.S', year: '1977', location: 'Khammam' },
  {
    name: 'Manjira Crocodile W.L.S',
    year: '1978',
    location: 'Medak',
  },
  {
    name: 'Pocharam W.L.S',
    year: '1952',
    location: 'Medak & Nizamabad Districts',
  },
  {
    name: ' Nagarjuna Sagar – Srisailam W.L.S',
    year: '1978',
    location: '-',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export type TelanganaZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly TelanganaZooRow[] = [
  { name: 'Nehru Zoological Park', city: 'Hyderabad' },
  { name: 'Salar Jung Museum', city: '---' },
]

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export type TelanganaIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly TelanganaIntlAirportRow[] = [
  {
    name: 'Rajiv Gandhi International Airport',
    city: 'Hyderabad',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type TelanganaDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly TelanganaDomesticAirportRow[] = [
  {
    name: 'Begumpet Airport',
    city: 'Hyderabad',
    category: 'Domestic',
  },
  {
    name: 'Dundigul Air Force Station',
    city: 'Hyderabad',
    category: 'Defense',
  },
  {
    name: 'Nadirgul Airport',
    city: 'Hyderabad',
    category: 'Domestic',
  },
  {
    name: 'Kothagudem Airport',
    city: 'Kothagudem',
    category: 'Future',
  },
  {
    name: 'Nizamabad Airport',
    city: 'Nizamabad',
    category: 'Future',
  },
  {
    name: 'Ramagundam Airport',
    city: 'Ramagundam',
    category: 'Future',
  },
  {
    name: 'Warangal Airport',
    city: 'Warangal',
    category: 'Domestic',
  },
  {
    name: 'Air Force Station ',
    city: 'Hakimpet',
    category: 'Defense',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'Rajiv Gandhi International Cricket Stadium',
    location: 'Hyderabad',
  },
  {
    name: 'Lal Bahadur Shatri Football Stadium',
    location: 'Hyderabad',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  {
    name: 'Indian Institute of Technology (IIT)',
    location: 'Hyderabad',
  },
  {
    name: 'National Institute of Technology (NIT)',
    location: '= Warangal',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Gandhi Institute of Technology & Management (GITAM University)',
    location: 'Hyderabad',
  },
  {
    name: 'Jawaharlal Nehru Technology University (JNTU)',
    location: 'Hyderabad',
  },
  {
    name: 'Dr B R Ambedkar Open University',
    location: 'Hyderabad',
  },
  {
    name: 'English and Foreign Languages University',
    location: 'Hyderabad',
  },
  {
    name: 'Jawaharlal Nehru Architecture and Fine Arts University',
    location: 'Hyderabad',
  },
  {
    name: 'Maulana Azad National Urdu University',
    location: 'Hyderabad',
  },
  {
    name: 'NALSAR University of Law',
    location: 'Hyderabad',
  },
  {
    name: 'Osmania University',
    location: 'Hyderabad',
  },
  {
    name: 'Potti Sriramulu Telugu University',
    location: 'Hyderabad',
  },
  {
    name: 'Professor Jayashankar Telangan State Agriculture University',
    location: 'Hyderabad',
  },
  {
    name: 'Sri Konda Laxman Telangana State Horticulture University',
    location: 'Hyderabad',
  },
  {
    name: 'Sri P V Narasimha Rao Telangana State University for Veterinary, Animal & Fishery Sciences',
    location: 'Hyderabad',
  },
  {
    name: 'Kakatiya University',
    location: 'Warangal',
  },
  {
    name: 'Kaloji Narayana Rao University of Health Sciences',
    location: 'Warangal',
  },
  {
    name: 'Mahatma Gandhi University',
    location: 'Nalgonda',
  },
  {
    name: 'Palamuru University',
    location: 'Mahbubnagar',
  },
  {
    name: 'Rajiv Gandhi University of Knowledge Technologies',
    location: 'Adilabad',
  },
] as const

export const famousPersonsOrdered = ['Nil'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Char Minar – Hyderabad,          \nFalaknuma Palace,\nGauthama Buddha Statue – Hussain Sagar Lake,\nRamoji Rao Film City – Hyderabad,\nMallela Theertham – Mahabubnagar,\nAir Force Academy – Dundigal' as const

export const miscellaneousBlocks = [
  {
    heading: 'Hyderabad',
    lines: [
      '1.\tCity of Pearls',
      '2.\tCapital City of Biryani',
      '3.\tTwin City = Hyderabad + Secunderabad',
      '4.\tHitech City',
      '5.\tCity of Nizams',
    ],
  },
  {
    heading: 'Telugu',
    lines: ['1.\tItalian of the East'],
  },
  {
    heading: 'Ramagundem',
    lines: ['1.\tEnergy City of India'],
  },
  {
    heading: 'Hyderabad',
    lines: [
      '1.\tCentre for Cellular & Molucular Biology',
      '2.\tNational Fishery Development Board',
      '3.\tNational Institute for Nutrition',
      '4.\tNational Geophysical Research Institute',
      '5.\tNational Institute of Fashion Technology',
      '6.\tC R Rao Advanced Institute of Mathematics, Statistics & Computer Science',
      '7.\tElectronics Corporation of India Limited (ECIL)',
      '8.\tNational Institute of Animal Biotechnology',
      '9.\tNational Institute of Rural Development',
      '10.\tIndian National Centre for Ocean Information Services',
      '11.\tNational Remote Sensing Centre',
      '12.\tSardar Vallabhai Patel Police Academy',
      '13.\tNavigation & Signals School',
      '14.\tIndian Airforce Academy',
      '15.\tNational Remote Sensing Agency',
      '16.\tCentre for DNA Finger Printing and Diagnostics',
      '17.\tBharat Dynamics Limited',
      '18.\tIndian Institute of Chemical Technology',
      '19.\tIndian National Centre for Ocean Information Service',
      '20.\tNational Academy for Constructions',
      '21.\tNational Regulatory and Development Authority of India (IRDAI)',
      '22.\tNational Academy of Agriculture Research Management (NAARM)',
      '23.\tNational Wildlife Genetic Resource Bank (NWGRB)',
      '24.\tNational Data Centre of National Informatics Centre = Hyderabad + New Delhi + Pune + Bhubaneshwar',
      '25.\tNational Institute of Animal Biotechnology (NIAB)',
      '26.\tIndian Institute of Millet Research (IIMR)',
      '27.\tIndian Institute of Rice Research (IIRR)',
    ],
  },
  {
    heading: 'Secunderabad',
    lines: [
      '1.\tSouth Central Railway (SCR) Zone Headquarters',
      '2.\tCentralized Training Academy of Railway Accounts [& Vadodara, Gujarat]',
      '3.\tCollege of Air Warfare',
      '4.\tCollege of Defense Management',
    ],
  },
  {
    heading: 'Warangal',
    lines: ["1.\tTribal Sainik School (India's first) = Warangal (Rural)"],
  },
] as const
