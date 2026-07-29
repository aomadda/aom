export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const arunachalPradeshHeaderLine = 'ARUNACHAL PRADESH' as const

export const arunachalPradeshBasicFacts = [
  { label: 'CAPITAL', value: 'Eata Nagar' },
  { label: 'ESTABLISHED', value: 'February – 20, 1987' },
  { label: 'CHIEF MINISTER', value: 'Pema Khandu' },
  { label: 'GOVERNOR', value: 'Kaiwalya Trivikram Parnaik' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Guhavathi' },
  { label: 'STATE ANIMAL', value: 'Gayal (Ox)' },
  { label: 'STATE BIRD', value: 'Great Hornbill' },
  { label: 'STATE TREE', value: 'Hollong' },
  { label: 'STATE FLOWER', value: 'Lady’s Slipper' },
  { label: 'STATE FRUIT', value: '' },
  { label: 'STATE EMBLEM', value: '' },
  { label: 'STATE SONG', value: '' },
  { label: 'STATE SPORT', value: '' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'English (State Language),     Hindi, Nefamese (Assamese-based),  Nyishi, Adi, Monpa, Galo',
  },
] as const

export const stateDancesOrdered = [
  'Popir',
  'Ali Lamu (Folk Dance)',
  'Hiri',
  'Khaning',
  'Cham',
  'Bardo',
] as const

export const boundaryStatesOrdered = ['Myanmar', 'Bhutan', 'China', 'Assam', 'Nagaland'] as const

export const tribesOrdered = ['Aadi', 'Apatani', 'Nyishi'] as const

export const festivalsOrdered = [
  'Pakke Paga Hornbil Festival (State Festival)',
  'Solung',
  'Mopin',
  'Losar',
  'Boori – boot',
  'Sherdukpens',
  'Dree',
  'Nyokum',
  'Loku',
  'Si Donyi',
  'Aran',
  'Oriah',
  'Reh',
  'Pangsai Pas',
  'Gomkum Gompa',
  'Tamaldu',
  'Mol',
] as const

export const districtsOrdered = [
  'Anjaw',
  'Changlang',
  'East Kameng',
  'East Siang',
  'Kamle',
  'Kra Daadi',
  'Kurung Kumey',
  'Lower Dibang Valley',
  'Lohit',
  'Longding',
  'Lower Siang',
  'Upper Dibang Valley',
  'Namasi',
  'Papum Pare',
  'Siang',
  'Lower Subansiri',
  'Tawang',
  'West Siang',
  'Upper Subansiri',
  'West Kameng',
  'Tirap',
  'Upper Siang',
  'Dibang Valley',
  'Kra Daadi',
  'Shi – Yomi',
] as const

export const mainCitiesOrdered = [
  'Aalo',
  'Itanagar',
  'Naharlagun',
  'Pasighat',
  'Daporijo',
  'Seppa',
  'Tawang',
  'Changlang',
  'Ziro',
  'Tezu',
  'Bomdila',
  'Hawai',
  'Dirang',
  'Basar',
] as const

export type ArunachalPradeshExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const arunachalPradeshExtendedFacts: readonly ArunachalPradeshExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES', kind: 'ordered', items: boundaryStatesOrdered },
  { label: 'AREA', kind: 'text', value: '83, 743 sq km (17th)' },
  { label: 'DENSITY', kind: 'text', value: '17 per Km2' },
  {
    label: 'POPULATION (2011)',
    kind: 'text',
    value:
      '13,83,727 (27th) Males = 7,13,912 and Females = 6,69,815 Male : Female = 1000 : 920',
  },
  { label: 'LITERACY', kind: 'text', value: '66.95%' },
  { label: 'ASSEMBLY', kind: 'text', value: '60' },
  { label: 'LOK SABHA', kind: 'text', value: '2' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (25)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
]

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [{ name: '------', location: '-------' }] as const

export const industriesSectionTitle = 'INDUSTRIES :' as const
export const industriesRows = [{ name: '---------', year: '--', location: '--' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [{ name: '-------------', year: '--', location: '---' }] as const

export const riversOrdered = [
  'Siang (Brahmaputra)',
  'Lohit',
  'Subansiri',
  'Dibang',
  'Kameng',
  'Dikrang',
  'Dihing',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Kettle Lake – Se La Lake', river: '---', location: 'Tawang District' },
  { name: 'Mehao Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Subansiri Lower Dam', river: 'Subansiri', location: '---' },
  { name: 'Ranganad Dam', river: 'Ranganad', location: '' },
  { name: 'Kalai-II Hydropower Project', river: 'Lohit', location: 'Anjaw' },
  { name: 'Kamala Hydroelectric Project', river: 'Kamala', location: '' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: 'Birsa Munda Waterfalls', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: '-----', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES/PEAK :' as const
export const hillsValleyCavesRows = [{ name: 'Kangto(Kanggardo Rize)', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereRows = [
  {
    name: 'Dihang – Dibang B.R',
    year: '1998',
    location: 'Siang & Dibang Valley',
    area: '5112',
  },
] as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesRows = [
  {
    name: 'Namdapha T.R',
    year: '1983',
    location: 'Changlang District',
    area: '1985',
  },
  {
    name: 'Pakke (Pakhui) T.R',
    year: '2000',
    location: 'Pakke Kesang District',
    area: '861.95',
  },
  {
    name: 'Kamlang T.R',
    year: '2016',
    location: 'Lohit River',
    area: '783',
  },
] as const

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesRows = [
  {
    name: 'Kameng Elephant Reserve',
    year: '2002',
    location: 'Himalayan Foothills',
    area: '1894',
  },
] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesNote = 'Nil' as const
export const ramsarSitesRows = [{ name: '---', year: '---', location: '---', area: '---' }] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Namdapha National Park',
    year: '1974',
    location: 'Changlang District',
    area: '1985.24',
  },
  {
    name: 'Mouling National Park',
    year: '1986',
    location: 'Siang District',
    area: '483',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Varsey Rhododendron Sanctuary', year: '2004', location: '--', area: '104' },
  { name: 'Eagle Nest Bird Sanctuary', year: '1989', location: '--', area: '217' },
  { name: 'Dibang W.L.S', year: '1991', location: '--', area: '4149' },
  { name: 'Pakke (Pakhui) W.L.S', year: '1977', location: '--', area: '861.95' },
  { name: 'Mehao W.L.S', year: '1980', location: '--', area: '28.15' },
  { name: 'D’ering W.L.S', year: '1978', location: '--', area: '190' },
  { name: 'Itangar W.L.S', year: '1978', location: '--', area: '140.3' },
  { name: 'Kamlang W.L.S', year: '1989', location: '--', area: '783' },
  { name: 'Kane W.L.S', year: '2007', location: '--', area: '31' },
  { name: 'Sessa Orchid W.L.S', year: '1989', location: '--', area: '100' },
  { name: 'Tale Valley W.L.S', year: '1996', location: '--', area: '337' },
  { name: 'Yordi – Rabe Supse W.L.S', year: '1996', location: '--', area: '397' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUMS :' as const
export const zooMuseumsRows = [
  { name: 'Jawaharlal Nehru State Museum', city: 'Itanagar' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export const internationalAirportsRows: readonly {
  name: string
  city: string
  category: string
}[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Along Airport', city: 'Along', category: 'Domestic' },
  { name: 'Daporijo Airport', city: 'Daporijo', category: 'Defence' },
  { name: 'Itangar Airport', city: 'Itanagar', category: 'Domestic' },
  { name: 'Mechuka Advanced Landing Ground', city: 'Mechuka', category: 'Defence' },
  { name: 'Pasighat Airport', city: 'Pasighat', category: 'Domestic' },
  { name: 'Tawang Air Force Station', city: 'Tawang', category: 'Defence' },
  { name: 'Tezu Airport', city: 'Tezu', category: 'Domestic' },
  { name: 'Tuting Advanced Landing Ground', city: 'Tuting', category: 'Defence' },
  { name: 'Walang Advanced Landing Ground', city: 'Walang', category: 'Defence' },
  { name: 'Ziro Airport', city: 'Ziro', category: 'Domestic' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'National Institute of Technology (NIT)', location: 'Yupia' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  { name: 'Rajiv Gandhi University', location: 'Doimukh' },
  {
    name: 'Indira Gandhi Technological & Medical Science University (IGTAMSU)',
    location: 'Ziro',
  },
  {
    name: 'North East Frontier Technical University (NEFTU)',
    location: 'Aalo',
  },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows = [
  {
    name: 'Dr. Bhupen Hazarika (Barsapara) Cricket Stadium',
    location: 'Guwahati',
  },
] as const

export const famousPersonsOrdered = ['-----'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const

export const miscellaneousIntroLine = 'Kangto Peak – 7090 meters' as const

export const miscellaneousBlocks = [
  {
    heading: 'ARUNACHAL PRADESH',
    lines: [
      '1. Land of the Dawn – Lit Mountins',
      '2. Orchid State of India',
      '3. Paradise of the Botanists',
      '4. Land of Red Hills',
    ],
  },
  {
    heading: 'NAMSAI',
    lines: ['1. The Golden Pagoda Monastery'],
  },
  {
    heading: 'PASIGHAT',
    lines: ['1. Jawaharlal Nehru Colledge'],
  },
  {
    heading: 'NIRJULI (PAPUM PARE DISTRICT)',
    lines: ['1. North Eastern Regional Institute of Science and Technology (NERIST)'],
  },
  {
    heading: 'ROING',
    lines: [
      '1. Research Institution of World Ancient Traditional Cultural & Heritage (RIWATCH) Museum',
    ],
  },
  {
    heading: 'DIRANG',
    lines: ['1. National Research Centre on Yak'],
  },
] as const
