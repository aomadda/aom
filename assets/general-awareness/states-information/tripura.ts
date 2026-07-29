export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const tripuraHeaderLine = 'TRIPURA' as const

export const tripuraBasicFacts = [
  { label: 'CAPITAL', value: 'Agartala' },
  { label: 'ESTABLISHED', value: 'January 21, 1972' },
  { label: 'CHIEF MINISTER', value: 'Biblab Kumar Deb' },
  { label: 'GOVERNOR', value: 'Ramesh Bais' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Guhavati' },
  { label: 'STATE ANIMAL', value: "Phyre's Langur" },
  { label: 'STATE BIRD', value: 'Green Imperial Pegion' },
  { label: 'STATE TREE', value: 'Agar' },
  { label: 'STATE FLOWER', value: 'Nag Kesar' },
  { label: 'STATE FRUIT', value: 'Pine Apple' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Bengali (State Language),     Manipuri,     Kokboro,     English,     Noyakhali,        Tripuri,   Chakama',
  },
] as const

export type TripuraExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const tripuraExtendedFacts: readonly TripuraExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Bamboo Dance',
      'Goria',
      'Lebang',
      'Hozagiri',
      'Bizhu',
      'Huk Kaimani',
      'Welcome',
      'Cheraw',
      'Wangala',
      'Mamita',
      'Sangrai',
      'Owa',
      'Lebang Bumani',
    ],
  },
  {
    label: 'BOUNDARY STATES (3)',
    kind: 'ordered',
    items: ['Asom', 'Mizoram', 'Bangladesh'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '10, 492 sq km (27th),               Density: 350 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '36,71,032 (22nd), \t\tMales = 18,74,376 & Females = 17,99,541 \nMale : Female = 1000 : 961',
  },
  { label: 'LITERACY', kind: 'text', value: '87. 75%' },
  { label: 'ASSEMBLY', kind: 'text', value: '60' },
  { label: 'LOK SABHA', kind: 'text', value: '2' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  {
    label: 'TRIBES',
    kind: 'text',
    value:
      'Khasi,     Tong,     Lusai,     Munda,     Oraon,   Santhal,     Jamatia,     Bhil,     Bhutia, Chaimal,      Chakma,         Garo,     Halam,     Kuki,      Lepcha,       Mog,       Noati Uchui',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Karchi puja',
      'Ker puja',
      'Tripureswari festival',
      'Makar Sankranti',
      'Hojagiri',
      'Mansa',
      'Mangal',
      'Budha Purnima',
      'Christamas',
      'Ashokastami',
      'Sarad Festival',
      'Rash Leela',
      'Jhula Jatra',
      'Garia Puja',
    ],
  },
  {
    label: 'DISTRICTS (8)',
    kind: 'ordered',
    items: [
      'North Tripura',
      'Gomati',
      'Khowai',
      'Sepahijala',
      'West Tripura',
      'South Tripura',
      'Unokoti',
      'Dhalai',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Kailashahar',
      'Agartala',
      'Belonia',
      'Udaipur',
      'Khowai',
      'Kumarghat',
      'Kamalpur',
      'Ambassa',
      'Melaghar',
      'Manughat',
      'Dharamnagar',
      'Amarpur',
      'Sonamura',
      'Bisnalgarh',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '-----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Palatana Thermal Power Plant', year: '---', location: '---' },
  { name: 'Tuirial Hydro Power Plant', year: '---', location: 'Aizwal' },
] as const

export const riversOrdered = [
  'Gomati',
  'Khowai',
  'Manu',
  'Howrah',
  'Muhuri',
  'Burima',
  'Dhalai',
  'Juri',
  'Feni',
  'Longai',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Kamala sagar lake', river: '---', location: '---' },
  { name: 'Dumboor lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '-------', river: 'Subansiri', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '-----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: 'Jampui Hills', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type TripuraNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly TripuraNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export const nationalParksRows: readonly TripuraNpWlsRow[] = [
  { name: 'Clouded Leopard National Park', year: '2003', location: '--' },
  { name: 'Bison (Rajbari) National Park', year: '2007', location: '--' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly TripuraNpWlsRow[] = [
  { name: 'Gumti W.L.S', year: '1988', location: '-' },
  { name: 'Rowa W.L.S', year: '1988', location: '-' },
  { name: 'Sepahijala W.L.S', year: '1987', location: '-' },
  { name: 'Trishna W.L.S', year: '1988', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [{ name: 'Sipahijola Wildlife Sanctuary', city: '----' }] as const

export type TripuraAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly TripuraAirportRow[] = []
export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly TripuraAirportRow[] = [
  { name: 'Maharaja Bir Bikram Airport', city: 'Agartala', category: 'Domestic' },
  { name: 'Kailashahar Airport', city: 'Kailashahar', category: 'Domestic' },
  { name: 'Kamalpur Airport', city: 'Kamalpur', category: 'Domestic' },
  { name: 'Khowai Airport', city: 'Khowai', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '-----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'National Institute of Technology (NIT)', location: 'Agartala' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Maharja Bir Bikram University', location: 'Agartala' },
] as const

export const famousPersonsOrdered = ['Manik Sarkar'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Ujjayanta Palace (Rabindranath Tagore Palace),\nUnakoti Pilgrim Centre,\nNeermahal Palace,\nCoconut Island – Dumboor Lake\nAgartala' as const

export const miscellaneousBlocks = [
  {
    heading: '',
    lines: [
      '1.\tInstitute of Chartered Financial Analysts of India (ICFAI)',
      '2.\tCyber Forensic Laboratory',
      '3.\tSpace Technology Incubation Centre (STIC)',
    ],
  },
] as const
