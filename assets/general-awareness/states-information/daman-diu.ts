export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const damanDiuHeaderLine = 'DAMAN & DIU' as const

export const damanDiuBasicFacts = [
  { label: 'CAPITAL', value: 'Daman' },
  { label: 'ESTABLISHED', value: 'May 30, 1987' },
  { label: 'CHIEF MINISTER', value: '--------' },
  { label: 'GOVERNOR', value: 'Praful Khoda Patel (Administrator)' },
  { label: 'RULING PARTY', value: '--------' },
  { label: 'HIGH COURT', value: 'Mumbai' },
  { label: 'STATE ANIMAL', value: '---' },
  { label: 'STATE BIRD', value: '---' },
  { label: 'STATE TREE', value: '---' },
  { label: 'STATE FLOWER', value: '---' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Hindi,     Gujarati,     	English,     	Konkani,     	Agri,     		Warli',
  },
] as const

export type DamanDiuExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const damanDiuExtendedFacts: readonly DamanDiuExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES',
    kind: 'ordered',
    items: ['Gujarat'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '112 sq km (6th),                 		Density: 2,169 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '2,43,247 (6th), 			Male = 1,50,301 & Female = 92,946\n                                                                                            		Male : Female = 1000 : 618',
  },
  { label: 'LITERACY', kind: 'text', value: '92.28%' },
  { label: 'ASSEMBLY', kind: 'text', value: '---' },
  { label: 'LOK SABHA', kind: 'text', value: '---	1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '---' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  { label: 'FESTIVALS', kind: 'text', value: '---' },
  {
    label: 'DISTRICTS (2)',
    kind: 'ordered',
    items: ['Daman', 'Diu'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: ['Diu', 'Daman', 'Coimbra', 'Portugal', 'Loures'],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '---', location: '------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '---', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: '----', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Bhagwan',
  'Damanganga',
  'Kolak',
  'Kalai',
  'Chasi',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: '---', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: '---', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Ghoghla Beach', location: '---' },
  { name: 'Chakratirth Beach', location: '---' },
  { name: 'Nagoa Beach', location: '---' },
  { name: 'Gomtimata Beach', location: '---' },
  { name: 'Jalandhar Beach', location: '---' },
  { name: 'Jampore Beach', location: '---' },
  { name: 'Devka Beach', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS/FORTS:' as const
export const portsPeakRows = [
  { name: 'Nani Daman Fort', location: '---' },
  { name: 'Portuguese Fort', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '---', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type DamanDiuNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly DamanDiuNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote =
  'Sasangir Wildlife Sancturary     Fudam Bird SanctuarY' as const
export const nationalParksRows: readonly DamanDiuNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly DamanDiuNpWlsRow[] = [
  {
    name: 'Sasangir W.L.S',
    year: '---',
    location: '---',
  },
  {
    name: 'Fudam W.L.S',
    year: '1991',
    location: '---',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export const internationalParksSectionTitle = 'INTERNATIONAL PARKS:' as const
export const internationalParksNote = 'Nil' as const

export type DamanDiuAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly DamanDiuAirportRow[] = [
  {
    name: 'Daman Airport',
    city: 'Daman',
    category: 'Defence',
  },
  {
    name: 'Diu Airport',
    city: 'Diu',
    category: 'Domestic',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: '----', location: '---' }] as const

export const famousPersonsOrdered = ['---'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = '---' as const
export const miscellaneousBlocks: readonly { readonly heading?: string; readonly lines: readonly string[] }[] = []
