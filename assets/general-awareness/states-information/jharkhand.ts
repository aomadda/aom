export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const jharkhandHeaderLine = 'JHARKHAND' as const

export const jharkhandBasicFacts = [
  { label: 'CAPITAL', value: 'Ranchi (Subamareka River)' },
  { label: 'ESTABLISHED', value: 'November 15, 2000 from Bihar' },
  { label: 'CHIEF MINISTER', value: 'Hemant Soren' },
  { label: 'GOVERNOR', value: 'Draupadi Murmu' },
  { label: 'RULING PARTY', value: 'JMM' },
  { label: 'HIGH COURT', value: 'Ranchi, 2000' },
  { label: 'STATE ANIMAL', value: 'Indian Elephant' },
  { label: 'STATE BIRD', value: 'Asian Koel' },
  { label: 'STATE TREE', value: 'Sal' },
  { label: 'STATE FLOWER', value: 'Palash' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Hindi (State Language),     Urdu,     Kasmiri,     Dongri,     Kurmati,     Santhali,     \n                                                      Ho,    Sadri,         Bengali,     Malto,      Nagpuria,      Khortha,     Karmali,     Khariya,      \n                                                      Mudari,    Kurukh,',
  },
] as const

export const stateDancesOrdered = [
  'Karma',
  'Jhumri',
  'Jogida',
  'Panwaria',
  'Chhau',
  'Chhath',
] as const

export const boundaryStatesOrdered = ['Bihar', 'Uttar Pradesh', 'Chattisgarh', 'Odisha', 'West Bengal'] as const

export const tribesOrdered = ['Munda', 'Gondu', 'Santhal', 'Oraon', 'Biror', 'Karmali'] as const

export const festivalsOrdered = [
  'Diwali',
  'Id',
  'Budha Purnima',
  'Sarhul (Tribal festival)',
  'Jhumar',
  'Phagwa',
] as const

export const districtsOrdered = [
  'Bokaro',
  'Chatra',
  'Deogarh',
  'Dhanbad',
  'Dumka',
  'East Singhbhum',
  'Garhwa',
  'Giridih',
  'Godda',
  'Gumla',
  'Hazaribagh',
  'Jamtara',
  'Khunti',
  'Koderma',
  'Latehar',
  'Lohardaga',
  'Pakur',
  'Palamu',
  'Ramgarh',
  'Ranchi',
  'West Singbhum',
  'Sahibganj',
  'Seraikela',
  'Kharsawan',
  'Simdega',
] as const

export const mainCitiesOrdered = [
  'Jamshedpur',
  'Dhanbad',
  'Jadhuguda',
  'Hajaribagh',
  'Ranchi',
  'Deoghar',
  'Phurso',
  'Giridh',
  'Medininagar',
  'Chirukonda',
  'Palamau',
  'Khunti',
  'Sahebganj',
  'Bokaro',
] as const

export type JharkhandExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const jharkhandExtendedFacts: readonly JharkhandExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (5)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '1,14,840 sq km (16th),       	Density: 414 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '3,29,88,134 (14th), 		Males = 1,69,30,315 & Females = 1,60,57,819 \n     				  				M : F = 1000 : 947',
  },
  { label: 'LITERACY', kind: 'text', value: '67.60 %' },
  { label: 'ASSEMBLY', kind: 'text', value: '81' },
  { label: 'LOK SABHA', kind: 'text', value: '14' },
  { label: 'RAJYA SABHA', kind: 'text', value: '6' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (24)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [{ name: 'Baidhyanath Jyothirlinga', location: '---' }] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [
  { name: 'Bokaro Steel Plant', year: '---', location: '---' },
  { name: 'Tata Steel Plant (TISCO)', year: '---', location: 'Jamshedpur' },
  { name: 'Jaduguda Uranium Mine', year: '---', location: '---' },
  { name: 'Jharia Coal Mine', year: '---', location: '---' },
  { name: 'Kodarma Mica Mine', year: '---', location: '---' },
  { name: 'Sigbhum Copper Mine', year: '---', location: '---' },
  { name: 'Giridhika Copper Mine', year: '---', location: '---' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Chandrapura Thermal Power Station', year: '---', location: '---' },
  { name: 'Koderma Thermal Power Station', year: '---', location: '---' },
  { name: 'Bokaro Thermal Power Station', year: '---', location: '---' },
  { name: 'Patratu Super Thermal Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Ganga',
  'Jayanthi',
  'Badwa',
  'Damodar',
  'Subarnarekha',
  'Brakat',
  'Sankh',
  'South Koel',
  'Punpun',
  'Barakar',
  'Deo',
  'Brhmani',
  'Kharkai',
  'Koina',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Topchanchi Lake', river: '---', location: '---' },
  { name: 'Dimna Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Maithon Dam ', river: 'Barakar River', location: '---' },
  { name: 'Panchet Dam ', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Lodh Waterfalls ', location: 'Latehar' },
  { name: 'Lower Ghangri Waterfalls ', location: 'Latehar' },
  { name: 'Hundru Waterfalls ', location: 'Ranchi' },
  { name: 'Hirni Waterfalls', location: '---' },
  { name: 'Jonha Waterfalls', location: '---' },
  { name: 'Dassam Waterfalls', location: '---' },
  { name: 'Usri Waterfalls', location: '---' },
  { name: 'Dughander Waterfalls', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: ' ------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [
  { name: 'Raja Mahal Hills', location: '---' },
  { name: 'Tagore Hills', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows = [
  { name: 'Palamau Tiger Reserve ', year: '1974', location: 'Latehar' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Betla National Park ',
    year: '1999',
    location: 'Latehar & Palamau Districts',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Palamau Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: 'Hajaribagh Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: 'Lawlaong Wildlife Sanctuary ', year: '1978', location: '--' },
  { name: 'Parasnath Wildlife Sanctuary ', year: '1984', location: '--' },
  { name: 'Palkot Wildlife Sanctuary ', year: '1990', location: '--' },
  { name: 'Dalma Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: 'Gautam Buddha Wildlife Sanctuary ', year: '1976 ', location: '--' },
  { name: 'Koderma Wildlife Sanctuary ', year: '1985 ', location: '--' },
  { name: 'Mahaudanr Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: ' Topchanchi Wildlife Sanctuary ', year: '1978 ', location: '--' },
  { name: ' Udhwa Lake Wildlife Sanctuary ', year: '1991 ', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS :' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'Birsa Deer Park (Birsa Mrig Vihar)', city: 'Ranchi' },
  { name: 'Crocodile Breeding Centre', city: 'Muta (Ranchi)' },
  { name: 'Jawahar Lal Nehru Biological Park ', city: 'Bokaro Steel City' },
  { name: 'Bhagwan Birsa Biological Park', city: 'Ranchi' },
  { name: 'Tata Steel Zoological Park', city: 'Jamshedpur' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export type JharkhandInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly JharkhandInternationalAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Bokaro Airport', city: 'Bokaro', category: 'Domestic' },
  { name: 'Chakulia Airport', city: 'Chakulia', category: 'Defense' },
  { name: 'Deogarh Airport', city: 'Deogarh', category: 'Domestic' },
  { name: 'Dhanbad Airport', city: 'Dhanbad', category: 'Domestic' },
  { name: 'Dumka Airport', city: 'Dumka', category: 'Domestic' },
  { name: 'Sonari Airport', city: 'Jamshedpur', category: 'Domestic' },
  { name: 'Dhalbhumgarh Airport', city: 'Jamshedpur', category: 'Domestic' },
  { name: 'Birsa Munda Airport', city: 'Ranchi', category: 'Domestic' },
] as const

export type JharkhandStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly JharkhandStadiumRow[] = [
  { name: 'Keenan Stadium ', location: 'Jamshedpur' },
  { name: 'JSCA Cricket Stadium', location: 'Ranchi' },
  { name: 'Birsa Munda Athletics Stadium', location: 'Ranchi' },
  { name: 'Harivansh Tana Bhagat Indore Stadium', location: 'Ranchi' },
  { name: 'Astroturf Hockey Stadium', location: 'Morhabadi' },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'Indian Institute of Management (IIM)                        		',
    location: 'Ranchi',
  },
  {
    name: 'Indian Institute of Information Technology (IIIT) 		',
    location: 'Ranchi',
  },
  {
    name: 'National Institute of Technology (NIT)                       		',
    location: 'Jamshedpur',
  },
  {
    name: 'All India Institute of Medical Sciences (AIIMS) 		',
    location: 'Deoghar',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'Birsa Agricultural University                                            ',
    location: '---',
  },
  {
    name: 'Central University of Jharkhand               			',
    location: '---',
  },
  {
    name: 'Vinobabhave Central University                                       ',
    location: 'Hajaribagh',
  },
  {
    name: 'Nilamber – Pitamber University                                      ',
    location: 'Palamau',
  },
  {
    name: 'Sido Kanhu University                                                           ',
    location: 'Dumka',
  },
] as const

export const famousPersonsOrdered = ['Mahendra Singh Dhoni', 'Deepika Kumari', 'Birsa Munda'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph = 'Nil' as const

export const miscellaneousBlocks = [
  {
    heading: 'Jharkhand ',
    lines: ['1.	Tribal State of India ', '2.	Mineral State of India '],
  },
  {
    heading: 'Jamshedpur ',
    lines: ['1.	Pittsburg of India ', '2.	Steel City of India '],
  },
  {
    heading: 'Dhanbad ',
    lines: ['1.	Coal City of India ', '2.	Dhanbad – Land of Mines'],
  },
  {
    heading: 'Ranchi ',
    lines: [
      '1.	All India Soil Research Institute 			',
      '2.	National Coal Development Corporation 		',
      '3.	Central Tribal Research Institute 		',
      '4.	National Institute of Foundry and Forge Technology 	',
      '5.	National University of Study and Research in Law   	',
      '6.	Xavier Institute of Social Service (XISS)                       ',
      '7.	Birla Institute of Technology                                             ',
      '8.	Central Institute of Psychiatry                                            ',
      '9.	Indian Institute of Agricultural Biotechnology             ',
      '10.	Indian Lac Research Institute 	',
    ],
  },
  {
    heading: 'Dhanbad ',
    lines: [
      '1.	Indian School of Mines                                                          ',
      '2.	Central Institute of Mining and Fuel Research                                                 ',
      '3.	Indian Institute of Technology (Indian School of Mines [IIT (ISM]',
    ],
  },
  {
    heading: 'Jamshedpur ',
    lines: [
      '1.	National Metalogical Laboratory                                    ',
      '2.	Xavier Labour Relations Institute (XLRI)                      ',
      '3.	Mahatma Gandhi Memorial Medical Colllege                ',
    ],
  },
  {
    heading: 'Jadhuguda ',
    lines: ['1.	Uranium Corporation of India                                          '],
  },
  {
    heading: 'Sindri ',
    lines: ['1.	Birsa Institute of Technology '],
  },
] as const
