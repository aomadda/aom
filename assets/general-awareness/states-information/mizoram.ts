
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const mizoramHeaderLine = 'MIZORAM' as const

export const mizoramBasicFacts = [
  { label: 'CAPITAL', value: 'Aizwal' },
  { label: 'ESTABLISHED', value: 'February 20, 1987' },
  { label: 'CHIEF MINISTER', value: 'Zoramthanga' },
  { label: 'GOVERNOR', value: 'P S Sridharan Pillai' },
  { label: 'RULING PARTY', value: 'MNF' },
  { label: 'HIGH COURT', value: 'Guhavathi' },
  { label: 'STATE ANIMAL', value: 'Hillock Gibbon' },
  { label: 'STATE BIRD', value: 'Mistress Homes Peasant' },
  { label: 'STATE TREE', value: 'Iron wood' },
  { label: 'STATE FLOWER', value: 'Red Vanda' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Mizo (State Language),     English,     Kuki,     Hindi',
  },
] as const

export type MizoramExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const mizoramExtendedFacts: readonly MizoramExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Cheraw',
      'Bamboo Dance',
      'Kuallam',
      'Chheihlam',
      'Chai',
      'Solakla',
      'Chawnglaizawn',
      'Tlanglam',
      'Zangtalam',
    ],
  },
  {
    label: 'BOUNDARY STATES (4)',
    kind: 'ordered',
    items: ['Tripura', 'Asom', 'Manipur', 'Myanmar'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '21, 087 sq km (25th),             \tDensity: 52 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '10,91,014(28th), 		Males = 5,55,339 & Females = 5,41,867\n      \t\t\t\t\t\tMale : Female = 1000 : 975',
  },
  { label: 'LITERACY', kind: 'text', value: '91.58%' },
  { label: 'ASSEMBLY', kind: 'text', value: '40' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  { label: 'TRIBES', kind: 'text', value: '' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Chapchar Kut (New year of Mizoram)',
      'Mim Kut',
      'Pawl Kut',
      'Christamas',
      'Easter',
      'Thalfavang',
    ],
  },
  {
    label: 'DISTRICTS (8)',
    kind: 'ordered',
    items: [
      'Aizwal',
      'Champhai',
      'Kolasib',
      'Lawngtlai',
      'Lunglei',
      'Mamit',
      'Saiha',
      'Serchhip',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: ['Aizwal', 'Lunglei', 'Champhai', 'Kolosib', 'Saiha', 'Serchhip', 'Lawngtlai'],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '------', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '--------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: '---------', year: '--', location: '---' }] as const

export const riversOrdered = [
  'Dhaleswari',
  'Sonai',
  'Tuivawl',
  'Tuipui River',
  'Tlawng',
  'Tut',
  'Tuirial',
  'Barak',
  'Tiau',
  'Tuichawng',
  'Chhimtuipui (Koladyne)',
  'Khawthlangtuipui',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Tam Dil lake', river: '---', location: 'Saitual' },
  { name: 'Palak Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: 'Tuirial Dam', river: 'Tuirial River', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: 'Vantawng Waterfalls – Serchhip', location: '---' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: ' PPPPPPP', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: 'Lushai Hills', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type MizoramTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly MizoramTigerReserveRow[] = [
  { name: 'Dampa Tiger Reserve', year: '1995', location: 'Near Aizwal' },
]

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksRows = [
  { name: 'Murlen National Park', year: '1991', location: 'Champai' },
  { name: 'Phawngpui Blue Mountain N.P', year: '1992', location: 'Lawngtlai' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Dampa W.L.S', year: '1985', location: '-' },
  { name: 'Khawnglung W.L.S', year: '1992', location: '-' },
  { name: 'Lengteng W.L.S', year: '1999', location: '-' },
  { name: 'Tokalo W.L.S', year: '2007', location: '-' },
  { name: 'Ngengpui W.L.S', year: '1991', location: '-' },
  { name: 'Pualreng W.L.S', year: '2004', location: '-' },
  { name: 'Tawi W.L.S', year: '1978', location: '-' },
  { name: 'Thorangtlang W.L.S', year: '2002', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Nil' as const
export type MizoramZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly MizoramZooRow[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export type MizoramIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly MizoramIntlAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type MizoramDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly MizoramDomesticAirportRow[] = [
  { name: 'Lengpui Airport', city: 'Aizwal', category: 'Domestic' },
]

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: 'Imp', location: '' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: 'National Institute of Technology (NIT)', location: 'Aizwal' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Institute of Chartered Financial Analysts of India University',
    location: '',
  },
] as const

export const famousPersonsOrdered = ['Nil'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = 'Green Mizoram Day – June 11' as const

export const miscellaneousBlocks = [
  {
    heading: 'Mizoram',
    lines: ['1.\tLand of Hill People'],
  },
  {
    heading: 'Aizwal',
    lines: ['1.\tMountain City'],
  },
  {
    heading: 'Aizwal',
    lines: [
      '1.\tCollege of Veterinary Sciences and Animal Husbandry',
      '2.\tNational Institute of Electronics & Information Technology',
    ],
  },
] as const
