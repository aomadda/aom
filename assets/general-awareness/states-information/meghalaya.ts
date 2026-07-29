
export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const meghalayaHeaderLine = 'MEGHALAYA' as const

export const meghalayaBasicFacts = [
  { label: 'CAPITAL', value: 'Shillong' },
  { label: 'ESTABLISHED', value: 'January 21, 1972' },
  { label: 'CHIEF MINISTER', value: 'Cornard Sangma' },
  { label: 'GOVERNOR', value: 'Satyapal Malik' },
  { label: 'RULING PARTY', value: 'National People\u2019s Party (NPP)' },
  { label: 'HIGH COURT', value: 'Shillong, 2013' },
  { label: 'STATE ANIMAL', value: 'Clouded Leopard' },
  { label: 'STATE BIRD', value: 'Hill Myna' },
  { label: 'STATE TREE', value: 'White Teak' },
  { label: 'STATE FLOWER', value: 'Lady\u2019s Slipper' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Khasi,     English,     Garo,     Pnar,     Garo,     Hindi',
  },
] as const

export type MeghalayaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const meghalayaExtendedFacts: readonly MeghalayaExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: ['Nongkrem', 'Shad Suk Mynsiem', 'Behdienkhlam', 'Wangala', 'Dorsegata', 'Laho'],
  },
  {
    label: 'BOUNDARY STATES (2)',
    kind: 'ordered',
    items: ['Asom', 'Bangladesh'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '22, 429 sq km (23rd),              \tDensity: 140 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '29,66,889 (23rd), 		Males = 14,91,832 & Females = 14,75,057\n       \t\t\t\t\t\tMale : Female = 1000 : 986',
  },
  { label: 'LITERACY', kind: 'text', value: '75. 84' },
  { label: 'ASSEMBLY', kind: 'text', value: '60' },
  { label: 'LOK SABHA', kind: 'text', value: '2' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  { label: 'TRIBES', kind: 'ordered', items: ['Khasis', 'Garos', 'Jaintias'] },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Khasis',
      'Laho',
      'Wangala',
      'Behdiengkhlam',
      'Miamua',
      'Ahaia',
      'Christamas',
      'Shivaratri',
      'Hajongs',
      'Garos',
      'Nongkrem',
    ],
  },
  {
    label: 'DISTRICTS (11)',
    kind: 'ordered',
    items: [
      'East Garo Hills',
      'East Khasi Hillls',
      'East Jaintia Hills',
      'North Garo Hills',
      'South Garo Hills',
      'West Jaintia Hillls',
      'West Garo Hills',
      'Ri Bhoi',
      'West Khasi Hills',
      'South West Garo Hills',
    ],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: [
      'Masinram',
      'Jowai',
      'Nongstoin',
      'Shillong',
      'Tura',
      'Williamnagar',
      'Ampati',
      'Chirapunji (Sohro)',
    ],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '-----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '-----', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [{ name: 'Umiam Hydel Project', year: '--', location: 'Shillong' }] as const

export const riversOrdered = [
  'Simsang',
  'Manda',
  'Darming',
  'Ringge',
  'Gamol',
  'Bugi',
  'Digaru',
  'Kopili',
  'Myntdu',
  'Piyain',
  'Someshwari',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Umiam Lake', river: '---', location: 'Shillong' },
  { name: 'Thadlaskein Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [{ name: 'Umiam Dam', river: 'Umiam River', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [
  { name: 'Elephant Waterfalls', location: '---' },
  { name: 'Shadthum Waterfalls', location: '---' },
  { name: 'Weinia Waterfalls', location: '---' },
  { name: 'Bishop Waterfalls', location: '---' },
  { name: 'Beadon Waterfalls', location: '---' },
  { name: 'Sweet Waterfalls', location: '---' },
  { name: 'Nohkalikai Waterfalls', location: '---' },
  { name: 'Kynrem Waterfalls', location: '---' },
  { name: 'Langshiang Waterfalls', location: '---' },
  {
    name: "Nohsngithiang Waterfalls (Seven Sister\u2019s Waterfalls)",
    location: '---',
  },
] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Khasi Hills', location: '---' },
  { name: 'Jaintia Hills', location: '---' },
  { name: 'Garo Hills', location: '---' },
  { name: 'Mawsmai Caves', location: '---' },
  { name: 'Krem Liat Prah Cave', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = 'Nil' as const
export type MeghalayaTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly MeghalayaTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksRows = [
  { name: 'Balphakram National Park', year: '1986', location: 'Garo Hills' },
  { name: 'Nokrek National Park', year: '1986', location: 'Garo Hills' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Siju W.L.S', year: '1979', location: '-' },
  { name: 'Baghmara Pitcher Plant W.L.S', year: '1984', location: '-' },
  { name: 'Nongkhyllem W.L.S', year: '1981', location: '-' },
  { name: 'Narpuh', year: '2015', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS:' as const
export const zooMuseumsNote = 'Nil' as const
export type MeghalayaZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly MeghalayaZooRow[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export type MeghalayaIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly MeghalayaIntlAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export const airportsRows = [
  { name: 'Beljak Airport', city: 'Tura', category: 'Domestic' },
  { name: 'Shillong Airport', city: 'Shillong', category: 'Domestic' },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [{ name: '', location: '' }] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [
  {
    name: 'Indian Institute of Management (Rajiv Gandhi IIM)',
    location: 'Shillong',
  },
  { name: 'National Institute of Technology (NIT)', location: 'Shillong' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: '5.\tNorth Eastern Central University',
    location: 'Shillong',
  },
  {
    name: '6.\tMartin Luther Christian University',
    location: 'Shillong',
  },
  {
    name: '7.\tNorth \u2013 Eastern Hill University',
    location: 'Shillong',
  },
] as const

export const famousPersonsOrdered = ['P A Sangma', 'Shiba Prasad Chatterjee'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Nohkalikai Waterfalls (One of the most beautiful waterfalls in the world),\nSiliguri Corridor – Chicken Neck,\nLiving root Bridges (Jingkieng Jri) – Khasi and Jaintia hills of Meghalaya' as const

export const miscellaneousBlocks = [
  {
    heading: 'Meghalaya',
    lines: ['1.\tLand of Clouds in India = Meghalaya'],
  },
  {
    heading: 'Shillong',
    lines: ['2.\tScotland of the East'],
  },
  {
    heading: 'Shillong',
    lines: [
      '1.\tNorth Eastern Indira Gandhi Regional Institute of Health & Medical Sciences',
      '2.\tNorth \u2013 Eastern Space Application Centre',
      '3.\tHeadquarter of Assam Riffles',
    ],
  },
  {
    heading: 'Garo',
    lines: ['1.\tNokrek Biosphere Reserve'],
  },
] as const
