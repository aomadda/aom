export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const dadraNagarHaveliHeaderLine = 'DADRA NAGAR & HAVELI' as const

export const dadraNagarHaveliBasicFacts = [
  { label: 'CAPITAL', value: 'Silvassa' },
  { label: 'ESTABLISHED', value: 'August 11, 1961' },
  { label: 'CHIEF MINISTER', value: '--------' },
  { label: 'GOVERNOR', value: 'Mohan Bhai Sanji Bhai (Administrator)' },
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
    value:
      'Hindi,     Gujarati,     	Bheeli,     	Bilodi,     	Marathi,     	English',
  },
] as const

export type DadraNagarHaveliExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const dadraNagarHaveliExtendedFacts: readonly DadraNagarHaveliExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'text', value: '---' },
  {
    label: 'BOUNDARY STATES (3)',
    kind: 'ordered',
    items: ['Gujarat', 'Maharashtra', 'Daman & Diu'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '491 sq km (3rd),                    		Density: 700 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '3,43,709 (5th) ,\t\t	Male = 1,93,760 & Female = 1,49,949 \nMale : Female = 1000 : 775',
  },
  { label: 'LITERACY', kind: 'text', value: '86.34%' },
  { label: 'ASSEMBLY', kind: 'text', value: '---' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '---' },
  { label: 'TRIBES', kind: 'text', value: '---' },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: ['Diwaso', 'Bhawada', 'Kali Puja'],
  },
  {
    label: 'DISTRICTS (1)',
    kind: 'ordered',
    items: ['Dadra & Nagar Haveli'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'text',
    value: '---',
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '---', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: '----', year: '--', location: '---' }] as const

export const riversOrdered = ['Silvasa River', 'Khanvel River', 'Ganga River'] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: '-----', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: '----', river: 'Subansiri', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '-----', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: ' ----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export type DadraNagarHaveliNpWlsRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly DadraNagarHaveliNpWlsRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = 'Nil' as const
export const nationalParksRows: readonly DadraNagarHaveliNpWlsRow[] = []

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows: readonly DadraNagarHaveliNpWlsRow[] = [
  { name: 'Dadra Nagar Haveli W.L.S', year: '---', location: '----' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export type DadraNagarHaveliAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly DadraNagarHaveliAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = 'Nil' as const
export const airportsRows: readonly DadraNagarHaveliAirportRow[] = []

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '-----', location: '---' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '----', location: '---' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: '----', location: '---' }] as const

export const famousPersonsOrdered = ['---'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = '---' as const
export const miscellaneousBlocks: readonly { readonly heading: string; readonly lines: readonly string[] }[] =
  []
