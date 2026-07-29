export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const goaHeaderLine = 'GOA' as const

export const goaBasicFacts = [
  { label: 'CAPITAL', value: 'Panaji (Mandovi River)' },
  { label: 'ESTABLISHED', value: 'May 30, 1987' },
  { label: 'CHIEF MINISTER', value: 'Pramod Sawant' },
  { label: 'GOVERNOR', value: 'Bhagat Singh Kotari' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Mumbai' },
  { label: 'STATE ANIMAL', value: 'Gaur' },
  { label: 'STATE BIRD', value: 'Black central bul bul' },
  { label: 'STATE TREE', value: 'Asna' },
  { label: 'STATE FLOWER', value: '----' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Konkani (State Language), Marathi',
  },
] as const

export const stateDancesOrdered = [
  'Dhakto',
  'Shigma',
  'Talgadi (Folk Dance)',
  'Dhalo (Folk Dance)',
  'Corridinho',
  'Lamp Dance',
  'Fugadi',
  'Kunbi',
  'Taramgamel',
  'Dhangar (Navaratri)',
  'Hanpet Sword',
  'Mussal Khel',
  'Dashavatar',
  'Bhadap',
  'Dekhni',
  'Gauda Jagar',
  'Goff',
  'Ghode Modni',
  'Mando',
  'Morullem',
  'Ranmale',
  'Romat or Mell',
  'Suvari',
] as const

export const boundaryStatesOrdered = ['Karnataka', 'Maharashtra', 'Arabian Sea'] as const

export const tribesOrdered = ['----'] as const

export const festivalsOrdered = [
  'Zatra at cansaulim',
  'Goan Carnival',
  'Shigmotsav',
  'Sabado Gordo',
  'Diwali',
  'Christamas',
  'Easter',
  'Chavoth',
  'Dasara',
  'Konkani Drama Fest',
  'Sao Jao',
  'Sansvar Padvo',
] as const

export const districtsOrdered = ['North Goa – Panaji', 'South Goa – Margao'] as const

export const mainCitiesOrdered = [
  'Bicholim',
  'Chimbel',
  'Davorlim',
  'Margao',
  'Panaji',
  'Mormugao',
  'Ponda',
  'Quepem',
  'Taleigao',
  'Dona Paula',
  'Bardez',
  'Bambolim',
  'Farmagudi',
  'Concolim',
  'Asagaon',
  'Vasco da Gama (Zuari river)',
  'Mapusa',
] as const

export type GoaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const goaExtendedFacts: readonly GoaExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '3, 702 sq.km (29th),           		Density: 394 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '14,58,545 (26th), 			Males = 7,39,140 & Females = 7,19,405 \n          									Male : Femlae = 1000 : 968',
  },
  { label: 'LITERACY', kind: 'text', value: '88.70%' },
  { label: 'ASSEMBLY', kind: 'text', value: '40' },
  { label: 'LOK SABHA', kind: 'text', value: '2' },
  { label: 'RAJYA SABHA', kind: 'text', value: '1' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (2)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Shanta Durga Temple', location: '---' },
  { name: 'Mangueshi Temple', location: '---' },
  { name: 'Mahalasa Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRY' as const
export const industriesRows = [{ name: '-------', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [{ name: '----', year: '--', location: '---' }] as const

export const riversOrdered = [
  'Therekhol',
  'Mandovi – Lifeline of Goa',
  'Zuari',
  'Chopra',
  'Saleri',
  'Galgibag',
  'Kumbaarjua Canal',
  'Talpona',
  'Sal',
  'Baga',
  'Betul',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [{ name: 'Mayem Lake', river: '---', location: '-----' }] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [{ name: '----', river: '---', location: '---' }] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Dudhsagar Waterfalls ', location: 'Sanguem' },
  { name: 'Kharavelan Waterfallls', location: '---' },
  { name: 'Arvalam Waterfalls', location: '---' },
  { name: 'Kuskeran Waterfalls', location: '---' },
  { name: 'Tamdi Surla Waterfalls', location: '---' },
  { name: 'Kesarval Waterfalls', location: '---' },
  { name: 'Colva Beach', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: 'Mormugo Port', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export type GoaTigerReserveRow = { readonly name: string; readonly year: string; readonly location: string }
export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly GoaTigerReserveRow[] = []

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesNote = 'Nil' as const
export const elephantReservesRows = [
  { name: '---', year: '---', location: '---' },
] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesRows = [
  {
    name: 'Nanda Lake',
    year: '2022',
    location: 'Curchorem (South Goa)',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Bhagwan Mahavir (Mollem) N.P',
    year: '--',
    location: 'Sangeum Taluk',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Salim Ali (Chorao Island) Birds Sanct.', year: '1988', location: '--' },
  { name: 'Bondla Wildlife Sanctuary ', year: '1969', location: '--' },
  { name: 'Bhagwan Mahavir (Molem) W.L.S', year: '1967', location: '--' },
  { name: 'Netravali Wildlife Sanctuary ', year: '1999', location: '--' },
  { name: 'Madei Wildlife Sanctuary ', year: '1999', location: '--' },
  { name: 'Cotigaon Wildlife Sanctuary ', year: '1968', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsRows = [
  { name: 'Bondla Wildlife Sanctuary ', city: 'Ponda' },
  { name: 'State Archaeology Museum', city: 'Panaji' },
  { name: 'Naval Aviation Museum', city: 'Vasco da Gama' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export const internationalAirportsRows = [
  { name: 'Dabolim International Airport', city: 'Dabolim', category: 'Domestic' },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Mopa Airport', city: 'Mopa', category: 'Domestic' },
  { name: 'Indian Naval Air Station ', city: 'Dabolim', category: 'Defense' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly { readonly name: string; readonly location: string }[] = [
  { name: 'Fatorda Stadium (Football & Cricket)', location: 'Margao' },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'National Institute of Technology (NIT)',
    location: 'Farmagudi',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows: readonly { readonly name: string; readonly location: string }[] = []

export const famousPersonsOrdered = [
  'Shasikala Kathokar',
  'Mohan Ranade – Goa Gandhi',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph = 'Nil' as const

export const miscellaneousBlocks = [
  {
    heading: 'Goa',
    lines: [
      '1.	Paradise of The East',
      '2.	Land of Emerland ',
      '3.	Tourist Paradise of India ',
    ],
  },
  {
    heading: 'Mormugoa',
    lines: ['1.	Commercial Capital of Goa '],
  },
  {
    heading: 'Mandovi River',
    lines: ['1.	Life Line of Goa'],
  },
  {
    heading: 'Panaji',
    lines: [
      '1.	International Film Festival of India (IFFI) ',
      '2.	National Institute of Water Sports ',
      '3.	Birla Institute of Technology & Science (BITS Pilani)',
    ],
  },
  {
    heading: 'Margao',
    lines: ["1.\tV V Mandal's Institute of Management Training & Research \t= Margao"],
  },
  {
    heading: 'Vasco da Gama',
    lines: ['1.	National Centre for Antarctica and Ocean Research (NCAOR)'],
  },
  {
    heading: 'Dona Paula',
    lines: ['1.	National Institute of Oceanography'],
  },
  {
    heading: 'Assgaon',
    lines: ['1.	Angel Institute of Technololgy and Design'],
  },
  {
    heading: 'Bardez',
    lines: [
      '1.	Institute of Hotel Management, Catering, Technology & Applied Nutrition ',
    ],
  },
  {
    heading: 'Bambolim',
    lines: ['1.	Institute of Psychiatry and Human Behaviour'],
  },
] as const
