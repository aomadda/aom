export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const sikkimHeaderLine = 'SIKKIM' as const

export const sikkimBasicFacts = [
  { label: 'CAPITAL', value: 'Gangtak' },
  { label: 'ESTABLISHED', value: 'May 16, 1975' },
  { label: 'CHIEF MINISTER', value: 'Prem Singh Tamang' },
  { label: 'GOVERNOR', value: 'Ganga Prasad' },
  { label: 'RULING PARTY', value: 'SKM' },
  { label: 'HIGH COURT', value: 'Gangtak, 1975' },
  { label: 'STATE ANIMAL', value: 'Red Panda' },
  { label: 'STATE BIRD', value: 'Blood Pheasant' },
  { label: 'STATE TREE', value: 'Rhododendron' },
  { label: 'STATE FLOWER', value: 'Noble Orchid' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Nepali + English (State Language),     Bhutiya,     Lepcha,     Limbuhing,\n' +
      '                                                     Manger,      Shepra,     Rangpo,     Gurung,    Mukhia,     Newari,     Rai,     Sikkimese,\n' +
      '                                                     Tamang,     Rumtek,     Lachen,         Yunthang,     Limbu',
  },
] as const

export type SikkimExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const sikkimExtendedFacts: readonly SikkimExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: ['Singhi Chham', 'Lu Khangthamo', 'Maruni'],
  },
  {
    label: 'BOUNDARY STATES (5)',
    kind: 'ordered',
    items: ['West Bengal', 'Bhutan', 'Nepal', 'Tibet', 'China'],
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '7, 086 sq km (28th),                 	Density: 91 per sq km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '6,10,557 (29th), 		Males = 3,23,070 & Females = 2,87,507\n   								M : F = 1000 : 889',
  },
  { label: 'LITERACY', kind: 'text', value: '82.60%' },
  { label: 'ASSEMBLY', kind: 'text', value: '32' },
  { label: 'LOK SABHA', kind: 'text', value: '1' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  {
    label: 'TRIBES',
    kind: 'text',
    value: 'Lepcha',
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: [
      'Bumchu',
      'Sankranti',
      'Durga Puja',
      'Chaite Dasai',
      'Pang Lhabsol',
      'Losar',
      'Losoong',
      'Kalchakra Puja',
      'Kagyed Dance Festival',
    ],
  },
  {
    label: 'DISTRICTS (4)',
    kind: 'ordered',
    items: ['East Sikkim', 'North Sikkkim', 'West Sikkim', 'South Sikkim'],
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: ['Gangtok', 'Namchi', 'Gyals', 'Mangan'],
  },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID:' as const
export const templesRows = [{ name: '-----', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES:' as const
export const industriesRows = [{ name: '------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS:' as const
export const powerPlantsRows = [
  {
    name: 'Rangit Hydro Electric Power Plant',
    year: '---',
    location: '---',
  },
] as const

export const riversOrdered = [
  'Teesta – Lifeline of Sikkim',
  'Rangit',
  'Lhonak',
  'Dharla',
  'Lachen',
  'Lachung',
  'Rangpo',
] as const

export const lakesSectionTitle = 'LAKES:' as const
export const lakesRows = [
  { name: 'Gurundongmar Lake', river: '---', location: '---' },
  { name: 'Tsongmo Lake', river: '---', location: 'East Sikkim' },
  { name: 'Khecheopalri Lake', river: '---', location: 'West Sikkim ' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS:' as const
export const projectsDamsRows = [
  { name: '------', river: 'Subansiri', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH:' as const
export const waterfallsBeachRows = [{ name: '-----', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS:' as const
export const portsPeakRows = [{ name: '------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [{ name: '-----', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES:' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES:' as const
export const tigerReservesNote = '' as const
export type SikkimTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesRows: readonly SikkimTigerReserveRow[] = [
  {
    name: 'Khangchandzonga B.R',
    year: '2000',
    location: 'Kangchenzunga',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS:' as const
export const nationalParksNote = '' as const
export type SikkimNationalParkRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const nationalParksRows: readonly SikkimNationalParkRow[] = [
  {
    name: 'Khangchandzonga National Park',
    year: '1977',
    location: 'North & West Sikkim Districts',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES:' as const
export const wildlifeSanctuariesRows = [
  { name: 'Pangolakha W.L.S', year: '2002', location: '-' },
  { name: 'Fambong Lho W.L.S', year: '1984', location: '-' },
  { name: 'Maenam W.L.S', year: '1987', location: '-' },
  { name: 'Kitam Bird Sanctuary', year: '2005', location: 'Namchi' },
  { name: 'Kyongnosla Alphine W.L.S', year: '1977', location: '-' },
  { name: 'Barsey Rhododendron W.L.S', year: '1998', location: '-' },
  { name: 'Shingba Rhododendron W.L.S', year: '1984', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM:' as const
export const zooMuseumsNote = 'Nil' as const
export type SikkimZooRow = { readonly name: string; readonly city: string }
export const zooMuseumsRows: readonly SikkimZooRow[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS:' as const
export const internationalAirportsNote = 'Nil' as const
export type SikkimIntlAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly SikkimIntlAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS:' as const
export const airportsNote = '' as const
export type SikkimDomesticAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const airportsRows: readonly SikkimDomesticAirportRow[] = [
  {
    name: 'Pakyong Airport (Trilochan Pokhrel)',
    city: 'Gangtok',
    category: 'Domestic',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS:' as const
export const stadiumsRows = [
  {
    name: '------',
    location: '---',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS:' as const
export const iitRows = [{ name: '------', location: 'Imphal' }] as const

export const universitiesSectionTitle = 'UNIVERSITIES:' as const
export const universitiesRows = [
  {
    name: 'Sikkim Manipal University',
    location: 'Gangtok',
  },
] as const

export const famousPersonsOrdered = [
  'Trilochan Pokhrel – Sikkim Gandhi',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS:' as const
export const miscellaneousIntroParagraph =
  'Kanghenjunga Peak – 8586 Metres,              \nGurundongmar Lake (Gurundongmar lake is one of the highest lakes in the world, this fresh water lake is located in North – East of the Kangchenjunga range in Sikkim)' as const

export const miscellaneousBlocks = [
  {
    heading: 'Gangtak',
    lines: ['1.\tNational Organic Farming Research Institute'],
  },
  {
    heading: 'Pakyong',
    lines: ['1.\tNational Research Centre for Orchid'],
  },
] as const
