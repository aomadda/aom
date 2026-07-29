
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const manipurHeaderLine = 'MANIPUR' as const

export const manipurBasicFacts = [
  { label: 'CAPITAL', value: 'Imphal' },
  { label: 'ESTABLISHED', value: 'January 21, 1972' },
  { label: 'CHIEF MINISTER', value: 'N Biren Singh' },
  { label: 'GOVERNOR', value: 'Namjma Heptulla' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Imphal, 2013' },
  { label: 'STATE ANIMAL', value: 'Sangai' },
  { label: 'STATE BIRD', value: 'Mistres Homes Peasant' },
  { label: 'STATE TREE', value: 'Indian Mahogany' },
  { label: 'STATE FLOWER', value: 'Siroy Lily' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Meitei (State Language),     Manipuri,     English,     Sino,     Tibetan',
  },
] as const

export type ManipurExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const manipurExtendedFacts: readonly ManipurExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: [
      'Manipuri or Ras Lila (State Dance)',
      'Maharashtra',
      'Thang Ta (Classical dance)',
      'Dhol Cholam',
      'Nupa',
      'Pung Cholam',
      'Khamba Thoibi',
    ],
  },
  {
    label: 'BOUNDARY STATES (4)',
    kind: 'ordered',
    items: ['Nagaland', 'Asom', 'Mizoram', 'Myanmar'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '22,327 sq km (24th),             \tDensity: 130 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '29,66,889 (24th), 		Males = 14,91,832 & Females = 14,75,057 \n    \t\t\t\t\tMale : Female = 1000 : 987',
  },
  { label: 'LITERACY', kind: 'text', value: '79.85%' },
  { label: 'ASSEMBLY', kind: 'text', value: '60' },
  { label: 'LOK SABHA', kind: 'text', value: '2' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  {
    label: 'TRIBES',
    kind: 'ordered',
    items: ['Angami', 'Kuki', 'Nagas', 'Burmesee', 'Bishnupriya', 'Shan', 'Tai'],
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Sangai Festival (21 – 30 November)',
      'Dol Jatra',
      'Lai Haroba',
      'Ras Lila',
      'Chelraoba Kang',
      'Gang Nagai',
      'Yaoshang (Holi)',
      'tamas',
      'Id – Ul – Fitr',
      'Ningol Chakouba',
      'Khuado Pawi',
      'Chumpha',
      'Shirui Lily',
      'Mera Hou Chongba',
      'Ningol Chakouba',
    ],
  },
  {
    label: 'DISTRICTS (16)',
    kind: 'ordered',
    items: [
      'Bishnupur',
      'Thoubal',
      'Imphal East',
      'Senapati',
      'Ukhrul',
      'Imphal West',
      'Kakching',
      'Tengnoupal',
      'Kamjong',
      'Noney',
      'Churachandpur',
      'Chandel',
      'Tamenglong',
      'Jiribam',
      'Kangpokpi',
      'Pherzwal',
    ],
  },
  { label: 'MAIN CITIES', kind: 'ordered', items: ['Imphal', 'Kakching', 'Thoubal', 'Ukhrul'] },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [
  { name: 'Ningthoukhong Gopinath Temple', location: '---' },
  { name: 'Sanamahi Temple', location: 'Kangla' },
  { name: 'Sree Govindaji Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: 'Lokthak Hydre power plant', year: '---', location: '---' }] as const

export const riversOrdered = [
  'Barak',
  'Iril',
  'Imphal',
  'Nambul',
  'Sekmai',
  'Chakpi',
  'Thoubal',
  'Khuga',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [{ name: 'Lokthak lake', river: '---', location: '---' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: 'Khuga Dam', river: 'Imphal River', location: '---' },
  { name: 'Singda Dam', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Leimaram Waterfalls', location: '---' },
  { name: 'Sadu Chiru Waterfalls', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: 'Kangla Fort', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Thalona Caves', location: '---' },
  { name: 'Mao Hill Station', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export type ManipurTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly ManipurTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksRows = [
  { name: 'Keibul Lamjao Floating N.P', year: '1977', location: 'Bishnupur District' },
  { name: 'Sirohi National Park', year: '1982', location: '--' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Yangoupokpi – Lokchao W.L.S', year: '1989', location: '-' },
  { name: 'Khongjaingamba Ching W.L.S', year: '2016', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Rani Gaidinliu Tribal Freedom Fighters Museum = Luangkao' as const
export type ManipurZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly ManipurZooRow[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows = [
  {
    name: 'Bir Tikendrajit International Airport',
    city: 'Imphal',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = 'Nil' as const
export type ManipurDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly ManipurDomesticAirportRow[] = []

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '', location: '' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  { name: 'Indian Institute of Information Technology (IIIT)', location: 'Imphal' },
  { name: 'National Institute of Technology (NIT)', location: 'Imphal' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  { name: 'Central Agricultural University', location: 'Imphal' },
  { name: 'Manipur University of Culture', location: 'Imphal' },
  { name: 'National Sports University (India\u2019s first)', location: 'Imphal' },
  { name: 'Sangai International University', location: 'Churachandpur' },
] as const

export const famousPersonsOrdered = [
  'Trilochan Polharel (Manipur Gandhi)',
  'M C Mary Kom (Million Rupee Baby)',
  'Irom Sharmila (Iron Lady of Manipur)',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Polo Game Originated here,     \nMount Iso – Highest Peak in Manipur,\nKhayang Peak – 3114 meters,\nLokthak lake (largest fresh water lake in North – East, India)' as const

export const miscellaneousBlocks = [
  {
    heading: 'Manipur',
    lines: [
      '1.\tThe Jewel of India ',
      '2.\tSwitzerland of East ',
      '3.\tSwitzerland of India',
      '4.\tThe Land of Germs',
    ],
  },
  {
    heading: 'Porompat',
    lines: ['1.\tJawaharlal Nehru Institute of Medical Sciences'],
  },
] as const
