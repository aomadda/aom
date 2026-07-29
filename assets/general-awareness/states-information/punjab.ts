
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const punjabHeaderLine = 'PUNJAB' as const

export const punjabBasicFacts = [
  { label: 'CAPITAL', value: 'Chandigarh' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: 'Amarinder Singh' },
  { label: 'GOVERNOR', value: 'V P Singh Bandore' },
  { label: 'RULING PARTY', value: 'Congress Party' },
  { label: 'HIGH COURT', value: 'Chandigarh, 1975' },
  { label: 'STATE ANIMAL', value: 'Blackbuck' },
  { label: 'STATE BIRD', value: 'Northern Goshawk' },
  { label: 'STATE TREE', value: 'Indian Rosewood' },
  { label: 'STATE FLOWER', value: '---' },
  { label: 'STATE FRUIT', value: '---' },
  {
    label: 'STATE EMBLEM',
    value: 'Lion Capital of Ashoka with Wheat stem (above) & crossed swords (below)',
  },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Punjabi (State Language),     Hindi,     Urdu,     Gurmukhi,     English',
  },
] as const

export type PunjabExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const punjabExtendedFacts: readonly PunjabExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Bhangra (State Dance)',
      'Gidda',
      'Thumar',
      'Gatka (folk dance)',
      'Dandas',
      'Lohri',
      'Dhaman (Folk Dance)',
      'Basant',
      'Teeyan',
      'Maghi',
    ],
  },
  {
    label: 'BOUNDARY STATES (4)',
    kind: 'ordered',
    items: ['Himachal Pradesh', 'Haryana', 'Jammu & Kasmir', 'Rajasthan'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '50,362 sq km (20th),              \tDensity: 550 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '2,77,43,338 (16th), 		Males = 1,46,39,465 & Females = 1,31,03,873] \n    \t\t\t\t\t\tMale : Female = 1000 : 893',
  },
  { label: 'LITERACY', kind: 'text', value: '82.20%' },
  { label: 'ASSEMBLY', kind: 'text', value: '117' },
  { label: 'LOK SABHA', kind: 'text', value: '13' },
  { label: 'RAJYA SABHA', kind: 'text', value: '7' },
  { label: 'TRIBES', kind: 'text', value: '' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Guru pournimi',
      'Dasara',
      'Holi',
      'Diwali',
      'Holamohola',
      'Lohri',
      'Maghi Mela',
      'Vaisakhi',
      'Basant',
      'Holla Mohalla',
      'Saboo',
      'Urs',
      'Rauza Sharif',
      'Chappar Mela',
      'Baisakhi',
    ],
  },
  {
    label: 'DISTRICTS (22)',
    kind: 'ordered',
    items: [
      'Fatehgarh Sahib',
      'Amritsar',
      'Barnala',
      'Bathinda',
      'Firozpur',
      'Sri Muktsar Sahib',
      'Faridkot',
      'Fazilka',
      'Gurdaspur',
      'Hoshiapur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Pathankot',
      'Patiala',
      'Mansa',
      'Moga',
      'Rupnagar',
      'Tarn Taran',
      'Sahibzada Ajit Singh Nagar',
      'Shahid Bhagat Singh Nagar',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Jalianvalla bagh',
      'Amritsar',
      'Patiala',
      'Kapurtala',
      'Nangal',
      'Jalandhar',
      'Bathinda',
      'Pathankot',
      'Batala',
      'Firozpur',
      'Hoshiapur',
      'Muktsar',
      'Moga',
      'Mandi',
      'Barnala',
      'Gobindgarh',
      'Attari',
      'Ludhiana (Sutlej River)',
      'Firozabad (Sutlej River)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Golden Temple', location: 'Amritsar' },
  { name: 'Durgiana Temple', location: 'Amritsar' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '---', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Nangal Heavy Water plant', year: '---', location: '---' },
  {
    name: 'Guru Gobind Singh Super Thermal Power Plant',
    year: '---',
    location: '---',
  },
] as const

export const riversOrdered = [
  'Satlaj',
  'Ravi',
  'Beas',
  'Chenab',
  'Jhelum',
  'Sammi',
  'Giddha',
  'Jaago',
  'Kikli',
  'Luddi',
  'Bhangra',
  'Jhumar',
  'Karthi',
  'Jindua',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Kaniji Lake', river: '---', location: '---' },
  { name: 'Harike Lake', river: '---', location: 'Ferozpur' },
  { name: 'Ropar Lake', river: '---', location: 'Rupnagar' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Bakranangal Dam', river: 'Satlj River', location: '---' },
  { name: 'Thein Dam (Ranjit Sagar Dam)', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '-------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export type PunjabTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly PunjabTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export type PunjabNationalParkRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const nationalParksRows: readonly PunjabNationalParkRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Abohar W.L.S', year: '1988', location: '-' },
  { name: 'Harike Lake W.L.S', year: '1982', location: '-' },
  { name: 'Bir Aishvan W.L.S', year: '1952', location: '-' },
  { name: 'Bir Bhadson W.L.S', year: '1952', location: '-' },
  { name: 'Bir Bunerheri W.L.S', year: '1952', location: '-' },
  { name: 'Bir Dosanjh W.L.S', year: '1952', location: '-' },
  { name: 'Bir Gurdialpura W.L.S', year: '1977', location: '-' },
  { name: 'Bir Mehaswala W.L.S', year: '1952', location: '-' },
  { name: 'Bir Motibagh W.L.S', year: '1952', location: '-' },
  { name: 'Jhajjar Bacholi W.L.S', year: '1998', location: '-' },
  { name: 'Kathlaur Kushlian W.L.S', year: '2007', location: '-' },
  { name: 'Takhni – Rehampur W.L.S', year: '1992', location: '-' },
  { name: 'Nangal W.L.S', year: '2009', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = '' as const
export type PunjabZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly PunjabZooRow[] = [
  {
    name: 'Mahendra Chaudhary Zoological Park (Chhatbir Zoo)',
    city: 'Zirakpur',
  },
]

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export type PunjabIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly PunjabIntlAirportRow[] = [
  {
    name: 'Sri Guru Ram Das Jee International Airport',
    city: 'Amritsar',
    category: 'International',
  },
]

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type PunjabDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly PunjabDomesticAirportRow[] = [
  { name: 'Beas Airport', city: 'Amritsar', category: 'Private' },
  { name: 'Jallowal Airport', city: 'Amritsar', category: 'Domestic' },
  { name: 'Bathinda Airport', city: 'Bathinda', category: 'Domestic' },
  {
    name: 'Adampur (Sri Guru Ravidas Ji) Airport',
    city: 'Jalandhar',
    category: 'Domestic',
  },
  { name: 'Sahnewal Airport', city: 'Ludhiana', category: 'Domestic' },
  {
    name: 'Halwara Air Force Station',
    city: 'Halwara',
    category: 'Defense',
  },
  { name: 'Pathankot Airport', city: 'Pathankot', category: 'Domestic' },
  { name: 'Patiala Airport', city: 'Patiala', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: 'Gandhi Sports Complex Cricket Stadium',
    location: 'Amritsar',
  },
  {
    name: 'Guru Nanak Football Stadium',
    location: 'Ludhiana',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Management (IIM)', location: 'Amritsar' },
  {
    name: 'All India Institute of Medical Sciences (AIIIMS)',
    location: 'Bathinda',
  },
  { name: 'Indian Institute of Technology (IIT)', location: 'Ropar' },
  {
    name: 'Dr B R Ambedkar Nantional Institute of Technology (NIT)',
    location: 'Jalandhar',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Rajiv Gandhi National University of Law',
    location: 'Patiala',
  },
  {
    name: 'Rajiv Gandhi National University of Law',
    location: 'Patiala',
  },
  {
    name: 'Central University of Punjab',
    location: 'Bathinda',
  },
  {
    name: 'Guru Angad Dev Veterinary & Animal Sciences University',
    location: 'Ludhiana',
  },
] as const

export const famousPersonsOrdered = [
  'Lala Lajipti Roy – Lion of Punjab',
  'Manmohan singh    Gurunanak',
  'Amrita Pritam',
  'Bhagat Singh',
  'Kiren Bedi',
  'Ranjith Singh – Sher – e – Punjab',
  'Milkha Singh – Flying Sikh',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Jallianwallabagh Bagh – Amritsar (A public garden infamous for the massacre of hundreds of innocent Indians by the British on 13 April 1919),\nRural Olympics – Kila Raipur Sports Festival,\nGobindgarh (Steel Town of Punjab)' as const

export const miscellaneousBlocks = [
  {
    heading: 'Punjab',
    lines: [
      '1.\tLand of Five Rivers',
      '2.\tBread Basket of India',
      '3.\tGranary of India',
    ],
  },
  {
    heading: 'Wagah Border',
    lines: ['1.\tBerlin Wall of Asia'],
  },
  {
    heading: 'Amritsar',
    lines: ['1.\tGolden City'],
  },
  {
    heading: 'Patiala',
    lines: ['1.\tRoyal City of India'],
  },
  {
    heading: 'Ludhiana',
    lines: ['1.\tCycle City of India'],
  },
  {
    heading: 'Patiala',
    lines: [
      '1.\tSubash Chandra Bose Institute of Sports',
      '2.\tRajiv Gandhi National Institute of Sports',
    ],
  },
  {
    heading: 'Mohali',
    lines: [
      '1.\tIndian Institute of Science Education Research',
      '2.\tInstitute of Nano Science and Technology',
      '3.\tNational Institue of Pharmaceutical Education & Research (NIPER)',
      '4.\tNational Agri – Food Biotechnology Institute (NABI)',
    ],
  },
  {
    heading: 'Amritsar',
    lines: ['1.\tPG Institute of Horticulture'],
  },
  {
    heading: 'Kapurtala',
    lines: ['1.\tRail Coach Factory'],
  },
  {
    heading: 'Faridkot',
    lines: ['1.\tBaba Farid University fof Health Sciences'],
  },
  {
    heading: 'Hussain Wala',
    lines: ['1.\tNational Maryrs Memorial'],
  },
] as const
