export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const lakshadweepHeaderLine = 'LAKSHADWEEP' as const

export const lakshadweepBasicFacts = [
  { label: 'CAPITAL', value: 'Kavarati' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: '--------' },
  { label: 'GOVERNOR', value: 'Praful Khoda Patel (Administrator)' },
  { label: 'RULING PARTY', value: '--------' },
  { label: 'HIGH COURT', value: 'Ernakulam' },
  { label: 'STATE ANIMAL', value: 'Butterfly Fish' },
  { label: 'STATE BIRD', value: 'Sooty Tern' },
  { label: 'STATE TREE', value: 'Bread Fruit' },
  { label: 'STATE FLOWER', value: '---' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Malayalam,     	Mahi,     	Jesari,     	Divehi,\n       				Tamil,     		English,     	Hindi',
  },
] as const

export type LakshadweepExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const lakshadweepExtendedFacts: readonly LakshadweepExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES (3)',
    kind: 'ordered',
    items: ['Kerala', 'Karnataka', 'Arabian Sea'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '32 sq km (7th),                   		Density: 2,000 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '65,473 (7th), 				Male = 33,123 & Female = 31,350              				  					Male : Female  = 1000 : 946',
  },
  { label: 'LITERACY', kind: 'text', value: '92.28%' },
  { label: 'ASSEMBLY', kind: 'text', value: '' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '---' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  { label: 'FESTIVALS', kind: 'text', value: '---' },
  {
    label: 'DISTRICTS (1)',
    kind: 'ordered',
    items: ['Lakshadweep'],
  },
  { label: 'MAIN CITIES', kind: 'text', value: '---' },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '---', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  { name: '----', year: '--', location: '---' },
] as const

export const riversOrdered = ['---'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: '----', river: '---', location: '-----' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: '----', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '---', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: ' ---', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '---', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type LakshadweepNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly LakshadweepNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export const nationalParksRows: readonly LakshadweepNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly LakshadweepNpWlsRow[] = [
  {
    name: 'Pitti Bird W.L.S',
    year: '1995',
    location: '-',
  },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const

export type LakshadweepAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows: readonly LakshadweepAirportRow[] = [
  {
    name: 'Agatti Airport',
    city: 'Lakshadweep',
    category: 'Domestic',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '-----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: '----', location: '---' }] as const

export const famousPersonsOrdered = ['---'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = '---' as const
export const miscellaneousBlocks: readonly { readonly heading?: string; readonly lines: readonly string[] }[] = []
