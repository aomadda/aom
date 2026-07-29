export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const chandigarhHeaderLine = 'CHANDIGARH' as const

export const chandigarhBasicFacts = [
  { label: 'CAPITAL', value: 'Chandigarh' },
  { label: 'ESTABLISHED', value: 'November 1, 1966' },
  { label: 'CHIEF MINISTER', value: '--------' },
  { label: 'GOVERNOR', value: 'V P Singh Badnore (Administrator)' },
  { label: 'RULING PARTY', value: '--------' },
  { label: 'HIGH COURT', value: 'Chandigarh, 1975' },
  { label: 'STATE ANIMAL', value: 'Indian Grey Mongoose' },
  { label: 'STATE BIRD', value: 'Indian Grey Hornbill' },
  { label: 'STATE TREE', value: 'Mango' },
  { label: 'STATE FLOWER', value: 'Dhak Flower' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: 'Open Hand Monument' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi,     Punjabi,     English',
  },
] as const

export type ChandigarhExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const chandigarhExtendedFacts: readonly ChandigarhExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES (2)',
    kind: 'ordered',
    items: ['Punjab', 'Haryana'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '114 sq km (5th),                   \tDensity: 9,262 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value: '10,54,686 (3rd), \t\tMale = 5,80,663 & Female = 4,47,787\nMale : Female = 1000 : 818',
  },
  { label: 'LITERACY', kind: 'text', value: '86.05%' },
  { label: 'ASSEMBLY', kind: 'text', value: '---' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '---' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: ['Lodhi', 'Baisakhi'],
  },
  {
    label: 'DISTRICTS (1)',
    kind: 'ordered',
    items: ['Chandigarh'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'text',
    value: '---',
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHUCH/MASJID:' as const
export const templesRows = [{ name: '-----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '-----', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: '-----', year: '---', location: '---' }] as const

export const riversOrdered = ['Patiala – Ki – Rao'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: 'Sukhna Lake', river: '---', location: '---' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '----', river: 'Subansiri', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Shivalik Hills', location: '---' },
  { name: 'Morni Hills', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type ChandigarhNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly ChandigarhNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export const nationalParksRows: readonly ChandigarhNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly ChandigarhNpWlsRow[] = [
  { name: 'Parrot Bird Sanctuary', year: '---', location: '---' },
  { name: 'Sukhna Lake W.L.S', year: '1986', location: '-' },
  { name: 'City Birds W.L.S', year: '1988', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'Pinjore Garden', city: '---' },
  { name: 'Zakir Hussain Rock Garden', city: '---' },
  { name: 'Rose Garden', city: '---' },
] as const

export type ChandigarhAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly ChandigarhAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly ChandigarhAirportRow[] = [
  {
    name: 'Chandigarh Airport',
    city: 'Chandigarh',
    category: 'Customs',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  { name: 'Sector 42 Stadium', location: '---' },
  { name: 'Sector 16 Stadium (Cricket)', location: '---' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '-----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'PEC University of Technology', location: '---' },
] as const

export const famousPersonsOrdered = ['Milkha Singh', 'Nek Chand', 'Abhinav Bindra'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Rock Garden (Built by Nek Chand),          Open Hand Monument' as const

export const miscellaneousBlocks = [
  {
    heading: 'Chandigarh',
    lines: [
      '1.\tCentral Scientific Instruments Organization',
      '2.\tPost- Graduate Institute of Medical Education & Research',
      '3.\tDr Ambedkar Institute of Hotel Management, Catering & Nutrition',
      '4.\tNational Institute of Technical Teachers Training & Research',
      '5.\tSemi – Conductor Laboratory',
      '6.\tDNA Forensic Laboratory',
    ],
  },
] as const
