export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const puducherryHeaderLine = 'PUDUCHERRY' as const

export const puducherryBasicFacts = [
  { label: 'CAPITAL', value: 'Puducherry' },
  { label: 'ESTABLISHED', value: 'January 7, 1963' },
  { label: 'CHIEF MINISTER', value: 'N Rangaswamy' },
  { label: 'GOVERNOR', value: 'Tamilisai Rangarajan' },
  { label: 'RULING PARTY', value: 'AINRC' },
  { label: 'HIGH COURT', value: 'Chennai' },
  { label: 'STATE ANIMAL', value: 'Squirrel' },
  { label: 'STATE BIRD', value: 'Asian Koel' },
  { label: 'STATE TREE', value: 'Bael Fruit Tree' },
  {
    label: 'STATE FLOWER',
    value: "Cannonball Tree's Flower",
  },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Tamil,     	Telugu,     	Malayalam,     		English,     	French',
  },
] as const

export type PuducherryExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const puducherryExtendedFacts: readonly PuducherryExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: ['Podikazhiattam', 'Garadi'],
  },
  { label: 'BOUNDARY STATES', kind: 'text', value: '---' },
  { label: 'AREA', kind: 'text', value: '---' },
  {
    label: 'POPULATION',
    kind: 'text',
    value: '12,47,953              479 sq km',
  },
  { label: 'LITERACY', kind: 'text', value: '---' },
  { label: 'ASSEMBLY', kind: 'text', value: '30' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: ['Mascarade', 'Masimagam'],
  },
  {
    label: 'DISTRICTS (4)',
    kind: 'ordered',
    items: ['Karaikal', 'Mahe', 'Pondicherry', 'Yanam'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: ['Puducherry', 'Karaikal', 'Yanam', 'Mahe', 'Villupuram'],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Manakula Vinayagar Temple', location: '-------' },
  { name: 'Basilica of the Sacred Heart of Jesus', location: '-------' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '---', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: '----', year: '--', location: '---' }] as const

export const riversOrdered = ['Gingee River', 'Mahe River'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: '----', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '----', river: '---', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Promenade Beach', location: '--' },
] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: ' ---', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '---', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type PuducherryNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly PuducherryNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export const nationalParksRows: readonly PuducherryNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly PuducherryNpWlsRow[] = [
  {
    name: 'Oussudu W.L.S',
    year: '2008',
    location: '-',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const

export type PuducherryAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly PuducherryAirportRow[] = [
  {
    name: 'Karaikal Airport',
    city: 'Karaikal',
    category: 'Domestic',
  },
  {
    name: 'Puducherry Airport',
    city: 'Puducherry',
    category: 'Domestic',
  },
  {
    name: 'Mahe Airport',
    city: 'Mahe',
    category: 'Domestic',
  },
  {
    name: 'Yanam Airport',
    city: 'Yanam',
    category: 'Domestic',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: '---', location: '---' }] as const

export const famousPersonsOrdered = ['---'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Sri Aurobindo Ashram,     	French War Memorial' as const
export const miscellaneousBlocks = [
  {
    heading: 'Puducherry',
    lines: ['1.\tParis of the Eastern India'],
  },
  {
    heading: 'Puducherry',
    lines: [
      '1.\tJawaharlal Institute of Postgraduate Medical Education Research',
      '2.\tMahatma Gandhi Medical College & Research Institue                     ',
      '3.\tNational Institute of Technology                                                         ',
      '4.\tSri Aurobindo International Centre of Education',
    ],
  },
] as const
