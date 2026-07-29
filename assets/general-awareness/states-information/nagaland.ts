
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const nagalandHeaderLine = 'NAGALAND' as const

export const nagalandBasicFacts = [
  { label: 'CAPITAL', value: 'Kohima' },
  { label: 'ESTABLISHED', value: 'December 1, 1963' },
  { label: 'CHIEF MINISTER', value: 'Neiphiu Rio' },
  { label: 'GOVERNOR', value: 'R N Ravi' },
  {
    label: 'RULING PARTY',
    value: 'Nationalist Democratic Proressive Party (NDPP)',
  },
  { label: 'HIGH COURT', value: 'Guhavati' },
  { label: 'STATE ANIMAL', value: 'Gaur' },
  { label: 'STATE BIRD', value: 'Bleth Trogo Pan' },
  { label: 'STATE TREE', value: 'Alder' },
  { label: 'STATE FLOWER', value: 'Rhododendron' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'English (State Language),     Angami,     Seema,    Ao,     Chang,     Konyak,     Lotha,     \n                                                    Nagamese,        Sangtam',
  },
] as const

export type NagalandExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const nagalandExtendedFacts: readonly NagalandExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: ['Naga Dance', 'Chang Lo/Sua Lua'],
  },
  {
    label: 'BOUNDARY STATES (4)',
    kind: 'ordered',
    items: ['Arunachal Pradesh', 'Manipur', 'Assom', 'Myanmar'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '16,579 sq km (26th),                 Density: 119 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '19,78,602(25th), 		Males = 10,24,649 & Females = 9,53,853 \n    \t\t\t\t\tM : F = 1000 : 931',
  },
  { label: 'LITERACY', kind: 'text', value: '80. 11%' },
  { label: 'ASSEMBLY', kind: 'text', value: '60' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  {
    label: 'TRIBES',
    kind: 'ordered',
    items: [
      'Angami',
      'Ao',
      'Chakhesang',
      'Changai',
      'Kachari',
      'Khiamniungan',
      'Konyak',
      'Kuki',
      'Lotha',
      'Phom',
      'Pochury',
      'Rengma',
      'Sangtam',
      'Sumi',
      'Yimchunger',
      'Zeliang',
      'Agurshikukula',
      'Butterfly dance',
      'Khambal lim',
      'Leshalapu',
      'Mayur',
    ],
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Sekreni',
      'Hornbill Festival',
      'Konyak',
      'Pikhuchak',
      'Lotha',
      'Moatsu',
      'Kundanglem',
      'Miu',
      'Tsokum',
      'Mimkut',
      'Monyu',
      'Moha',
      'Yemshe',
      'Ahuna',
      'Tuluni',
      'Hega',
      'Great Hornbill Festival – Every Year December First Week',
    ],
  },
  {
    label: 'DISTRICTS (11)',
    kind: 'ordered',
    items: [
      'Dimapur',
      'Kiphire',
      'Kohima',
      'Longleng',
      'Mokokchung',
      'Mon',
      'Peren',
      'Zunheboto',
      'Phek',
      'Tuensang',
      'Wokha',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: ['Kohima', 'Phek', 'Mon', 'Mokokchung', 'Tuensang', 'Zunheboto', 'Dimapur'],
  },
] as const

export const templesSectionTitle = 'Temple/Church/Masjied:' as const
export const templesRows = [{ name: '-------', location: '---' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '-------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: 'Dikku Hydro Electric Power Plant', year: '---', location: '---' }] as const

export const riversOrdered = [
  'Chindwin',
  'Dhansiri',
  'Doyang',
  'Dikhu',
  'Jhanji',
  'Chubi',
  'Tizu',
  'Tsurong',
  'Nanung',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: 'Shilloi Lake', river: '---', location: '---' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: 'Doyang Dam', river: 'Doynag River', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '-------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: ' ------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '-----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export type NagalandTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly NagalandTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksRows = [
  { name: 'Ntanki National Park', year: '1993', location: 'Peren District' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Fakim W.L.S', year: '1980', location: '-' },
  { name: 'Puliebadze W.L.S', year: '1980', location: '-' },
  { name: 'Rangapahar W.L.S', year: '1986', location: '-' },
  { name: 'Singhphan W.L.S', year: '---', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Nil' as const
export type NagalandZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly NagalandZooRow[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export type NagalandIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly NagalandIntlAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type NagalandDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly NagalandDomesticAirportRow[] = [
  { name: 'Dimapur Airport', city: 'Dimapur', category: 'Domestic' },
  { name: 'Kohima Airport', city: 'Kohima', category: 'Domestic' },
]

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '', location: '' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'National Institute of Technology (NIT)', location: 'Dimapur' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [{ name: 'Imphal', location: '' }] as const

export const famousPersonsOrdered = [] as readonly string[]

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph = 'Saramati Peak – 3841 meters' as const

export const miscellaneousBlocks = [
  {
    heading: 'Nagaland',
    lines: [
      '1.\tFalcon Capital of the World',
      '2.\tThe Land of Festivals',
    ],
  },
  {
    heading: 'Zunhebota',
    lines: ['1.\tLand of Warriors'],
  },
  {
    heading: 'Kohima',
    lines: [
      '1.\tSecond World War Memorial',
      '2.\tStalin Grade of the East',
    ],
  },
  {
    heading: 'Dimapur',
    lines: ['1.\tNational Research Centre of Mithun'],
  },
] as const
