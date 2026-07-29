export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const uttarakhandHeaderLine = 'UTTARAKHAND' as const

export const uttarakhandBasicFacts = [
  { label: 'CAPITAL', value: 'Dehradun' },
  { label: 'ESTABLISHED', value: 'November 9, 2000 from UP' },
  { label: 'CHIEF MINISTER', value: 'Trivendra Singh Rawat' },
  { label: 'GOVERNOR', value: 'Baby Rani Maurya' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Nainital, 2000' },
  { label: 'STATE ANIMAL', value: 'Musk Deer' },
  { label: 'STATE BIRD', value: 'Himalayan Monal' },
  { label: 'STATE TREE', value: 'Burans' },
  { label: 'STATE FLOWER', value: 'Brahma Kamal' },
  { label: 'STATE FRUIT', value: 'Kaphal' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Hindi (State Language),     Sanskrit,     Garhwali,     Kumaoni,     English,     Jaunsari',
  },
] as const

export type UttarakhandExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const uttarakhandExtendedFacts: readonly UttarakhandExtendedFact[] = [
  {
    label: 'STAT DANCE(S)',
    kind: 'ordered',
    items: [
      'Jagar',
      'Chaufulla',
      'Jhumalia',
      'Jhoda',
      'Langvir Nritya',
      'Baradanati',
      'Choliya',
      'Bhotia',
    ],
  },
  {
    label: 'BOUNDARY STATES(5)',
    kind: 'ordered',
    items: ['Uttara Pradesh', 'Himachal Pradesh', 'Haryana', 'Nepal', 'China'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '53, 484 sq km (19th),                  \tDensity: 189 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '1,00,86,292 (20th), \t\t\tMale = 51,37,773 & Female = 49,48,519 \nMale : Female = 1000 : 963',
  },
  { label: 'LITERACY', kind: 'text', value: '79.63%' },
  { label: 'ASSEMBLY', kind: 'text', value: '70' },
  { label: 'LOK SABHA', kind: 'text', value: '5' },
  { label: 'RAJYA SABHA', kind: 'text', value: '3' },
  {
    label: 'TRIBES',
    kind: 'text',
    value: 'Jaunsari,      Raji,     Tharu,       Bhotiya',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Kumbh Mela',
      'Nanda Devi Mela',
      'Shravan Harela',
      'Gauchar Mela',
      'Baisakhi Mela',
      'Sankranti',
      'Vasant Panchami',
      'Phul Dei',
    ],
  },
  {
    label: 'DISTRICTS (13)',
    kind: 'ordered',
    items: [
      'Champawat',
      'Almora',
      'Bhageswar',
      'Chamoli',
      'Dehradun',
      'Pauri Garhal',
      'Haridwar',
      'Nainital',
      'Garhal',
      'Tehri',
      'Udham Singh Nagar',
      'Pithoragarh',
      'Rudraprayag',
      'Uttarakashi',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Mussori',
      'Nainital',
      'Roorkee',
      'Ramnagar',
      'Kichha',
      'Udhamsingh Nagar',
      'Rudrapur',
      'Kashipur',
      'Rishikesh',
      'Pithoragarh',
      'Kathgodham',
      'Jaspur',
      'Kotdwar',
      'Haridwar (Ganga River)',
      'Badrinath (Ganga River)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Manasa Devi Temple', location: 'Haridwar' },
  { name: 'Badhrinarayan Temple', location: 'Badhrinath' },
  { name: 'Gangothri Temple', location: 'Uttarakashi' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: 'Chibro Power Plant', year: '---', location: '---' },
  { name: 'Khodri Power Plant', year: '---', location: '---' },
  { name: 'Chilla Power Plant', year: '---', location: '---' },
  { name: 'Naitwar Mori Hydro Electric Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Bhagirati',
  'Gangotri',
  'Ganga',
  'Yamuna',
  'Ramganga',
  'Kali',
  'Sarayu',
  'Alaknanda',
  'Dhauliganga',
  'Tons',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Bheemtal lake', river: '---', location: 'Nainital' },
  { name: 'Gohna lake', river: '---', location: '---' },
  { name: 'Roopkund lake', river: '---', location: '---' },
  { name: 'Naini Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Tehri Dam (Bhagirati)', river: '---', location: '---' },
  { name: 'Lakshwar Dam', river: 'Yamuna River', location: '---' },
  { name: 'Koteswar Dam (Bhagirati', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Vasudhara Waterfalls', location: '---' },
  { name: 'Kempty Waterfalls', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: 'PPPPPPP', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Mussoorie Hills', location: '---' },
  { name: 'Nainital Hills', location: '---' },
  { name: 'Dhanaulti Hills', location: '---' },
  { name: 'Almora Hills', location: '---' },
  { name: 'Raniket Hills', location: '---' },
  { name: 'Bhima Hills', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type UttarakhandNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows: readonly UttarakhandNpWlsRow[] = [
  {
    name: 'Jim Carbett Tiger Reserve',
    year: '1974',
    location: 'Nainital & Pauri Garhwal Districts',
  },
  { name: 'Rajaji Tiger Reserve', year: '2015', location: 'Haridwar & Dehradun' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export const nationalParksRows: readonly UttarakhandNpWlsRow[] = [
  { name: 'Jim Carbett National Park', year: '1936', location: '--' },
  { name: 'Govind Pashu Vihar National Park', year: '1955', location: '--' },
  { name: 'Nanda Devi National Park', year: '1982', location: 'Chamoli District' },
  {
    name: 'Valley of Flowers National Park',
    year: '1982',
    location: 'North Chamoli & Pithoragarh',
  },
  { name: 'Gangotri National Park', year: '1989', location: 'Uttar Kashi District' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly UttarakhandNpWlsRow[] = [
  { name: 'Binsar W.L.S', year: '1988', location: '-' },
  { name: 'Sonanandi W.L.S', year: '1987', location: '-' },
  { name: 'Askot Musk Deer W.L.S', year: '1986', location: '-' },
  { name: 'Nandhaur W.L.S', year: '2012', location: '-' },
  { name: 'Govind Pashu Vihar W.L.S', year: '1955', location: '-' },
  { name: 'Kedarnath W.L.S', year: '1972', location: '-' },
  { name: 'Mussoorie W.L.S', year: '1993', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'Pt. G. B Pant High Altitude Zoo', city: 'Nainital' },
  { name: 'Sumitranandan Pant Museum', city: 'Kausani' },
] as const

export type UttarakhandAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly UttarakhandAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly UttarakhandAirportRow[] = [
  { name: 'Chaukhutia Airport', city: 'Chaukhutia', category: 'Future' },
  { name: 'Maa Ganga Airport', city: 'Chinyalsaur', category: 'Private' },
  { name: 'Jolly Grant Airport', city: 'Dehradun', category: 'Domestic' },
  { name: 'Gauchar Airport', city: 'Gauchar', category: 'Future' },
  { name: 'Pantnagar Airport', city: 'Pantnagar', category: 'Domestic' },
  { name: 'Naini Saini Airport', city: 'Pithoragarh', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '-----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Technology (IIT)', location: 'Roorkee' },
  { name: 'National Institute of Technology (NIT)', location: 'Srinagar' },
  { name: 'Indian Institute of Management (IIM)', location: 'Kashipur' },
  { name: 'All India Institute of Medical Sciences (AIIMS)', location: 'Rishikesh' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Uttarakhand Ayurveda University', location: 'Dehradun' },
  { name: 'University of Petroleum and Energy Studies', location: 'Dehradun' },
  { name: 'Yoga University', location: 'Haridwar' },
  { name: 'Uttarkhand Sanskrit University', location: 'Haridwar' },
  { name: 'Hemavati Nandan Bahuguna Garhwal University', location: 'Srinagar' },
  {
    name: 'Govind Vallab Pant University of Agriculture and Technology',
    location: 'Pantnagar',
  },
  {
    name: 'Uttarakhand University of Horticulture & Forestry',
    location: 'Bharsar + Ranichauri',
  },
] as const

export const famousPersonsOrdered = ['Sundarlal Bahuguna', 'Vandana Shiva'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Nanda Devi Peak – 7817 meters,        Jyothir Math – Rishikeshi' as const

export const miscellaneousBlocks = [
  {
    heading: 'Uttarakhand',
    lines: ['1.\tValley of Flowers'],
  },
  {
    heading: 'Rishikesh',
    lines: [
      '1.\tCity of Sages',
      '2.\tWorld Capital of Yoga/Yoga City of India',
    ],
  },
  {
    heading: 'Dehradun',
    lines: ['1.\tSchool Capital of India'],
  },
  {
    heading: 'Mussoorie',
    lines: ['1.\tQueen of the Hills/Mountains'],
  },
  {
    heading: 'Haridwar',
    lines: ['1.\tGateway of God'],
  },
  {
    heading: 'Dehradun',
    lines: [
      '1.\tNational Forest Research Institute',
      '2.\tArmy Cadet College',
      '3.\tInstitute for the Visually Handicaped',
      '4.\tIndhira Gandhi National Forest Academy',
      "5.\tIndia's first Earthquake Warning system",
      '6.\tNational Centre for Himalayan Studies',
      '7.\tIndian Petroleum Research Institute',
      '8.\tIndian Military Academy',
      '9.\tRashtriya Indian Military College',
      '10.\t Indian Institute of Remote Sensing',
      '11.\t Forest Survey of India',
      '12.\t Central Forest Research Institute',
      '13.\t Oil and Natural Gas Corporation (ONGC)',
      '14.\t National Blind Centre',
      '15.\t Zoological Survey of India',
      '16.\t Centre for Aromatic Plants (CAP)',
      '17.  Wildlife Institute of India',
      '18.\t Indian Council of Forestry Research and Education (ICFRE)',
      '19.\t The Wadia Institute of Himalayan Geology',
      '20.\tForest Research Institute of India',
    ],
  },
  {
    heading: 'Roorkee',
    lines: [
      '1.\tCentral Building Research Institute',
      '2.\tStructural Engineering Research Centre',
      '3.\tNational Institute of Hydrology',
    ],
  },
  {
    heading: 'Mussoorie',
    lines: ['1.\tLal Bahadur Shastri National Academy for Administration'],
  },
  {
    heading: 'Nainital',
    lines: ['1.\tAryabhatta Research Institute of Observational Sciences (ARIES)'],
  },
] as const
