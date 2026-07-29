export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const jammuKashmirHeaderLine = 'JAMMU & KASHMIR' as const

export const jammuKashmirBasicFacts = [
  { label: 'CAPITAL', value: 'Srinagar (summer), Jammu (winter)' },
  { label: 'ESTABLISHED', value: '26 October 1947' },
  { label: 'CHIEF MINISTER', value: '' },
  { label: 'GOVERNOR', value: '' },
  { label: 'RULING PARTY', value: '' },
  { label: 'HIGH COURT', value: 'Sri Nagar, 1928' },
  { label: 'STATE ANIMAL', value: 'Kasmir stag' },
  { label: 'STATE BIRD', value: 'Black necked crane' },
  { label: 'STATE TREE', value: 'Chinar Tree' },
  { label: 'STATE FLOWER', value: 'Lotus' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Urdu (State Language),     Kashmiri,      Punjabi,     Ladakhi,      Dogri,      Pahari,      Balti,    Gurji,      Dadri',
  },
] as const

export const stateDancesOrdered = [
  'Rouff (Folk Dance)',
  'Kud Dance',
  'Hikat Dance (Folk Dance)',
  'Hikant',
  'Chakri',
  'Dumhal (folk dance)',
] as const

export const boundaryStatesOrdered = ['Himachal Pradesh', 'Punjab', 'Pakistan', 'China', 'Afghanistan'] as const

export const tribesOrdered = [
  'Dogras',
  'Gujjars',
  'Chongpa',
  'Brokpa',
  'Beda',
  'Bakarwal',
  'Purigpa',
  'Boto',
] as const

export const festivalsOrdered = [
  'Nav warish',
  'Sont Vaisakhi',
  'Har Navami',
  'Urs',
  'Hemis',
  'Bahu Mela',
  'Losar Mela',
  'Muharram',
  'Assuj',
  'Id – ul – fitr',
  'Id – ul – Zuha',
  'Lohri',
  'Holi',
  'Baisakhi',
  'Naropa – Buddist festival',
  'Vasantosthav',
  'Sindhu Darshan',
  'Tulip Festival – Dal Lake (Sri Nagar)',
  'Singhe – Khababs',
] as const

export const districtsOrdered = [
  'Anantnag',
  'Bandipora',
  'Baramulla',
  'Badgam',
  'Doda',
  'Ganderbal',
  'Jammu',
  'Kargil',
  'Kathua',
  'Kishtwar',
  'Kulgam',
  'Kupwara',
  'Leh',
  'Poonch',
  'Pulwama',
  'Rajouri',
  'Ramban',
  'Reasi',
  'Samba',
  'Shopian',
  'Srinagar',
  'Udhampur',
] as const

export const mainCitiesOrdered = [
  'Ladakh',
  'Lay',
  'Siachin',
  'Gulmarg',
  'Udhampur',
  'Baramula',
  'Sopore',
  'Kathua',
  'Bandipura',
  'Anantnag',
  'Srinagar (Jhelum River)',
  'Leh',
] as const

export type JammuKashmirExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const jammuKashmirExtendedFacts: readonly JammuKashmirExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (5)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '2, 22, 236 sq km (5th),                 	Density: 124 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '1,25,41,302 (19th), 			Males = 66,40,662 & Females = 59,00,640\n    									Male : Female = 1000 : 883',
  },
  { label: 'LITERACY', kind: 'text', value: '68.74%' },
  { label: 'ASSEMBLY', kind: 'text', value: '87' },
  { label: 'LOK SABHA', kind: 'text', value: '6' },
  { label: 'RAJYA SABHA', kind: 'text', value: '4' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (24)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Vaishno Devi Temple', location: 'Katra' },
  { name: 'Amarnath Temple', location: '---' },
  { name: 'Jammu Masjid', location: '---' },
  { name: 'Hasrat Bal Masjid', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [{ name: '-------', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Kalakat Thermal Power Plant', year: '---', location: '---' },
  { name: 'Salal & Baramulla Hydro Power Plants', year: '---', location: '---' },
  { name: 'Krishna Ganga Hydro Power Plant', year: '---', location: '---' },
  { name: 'Baglihar Hydroelectric Power Project', year: '1999', location: '---' },
] as const

export const riversOrdered = [
  'Chenab',
  'Jhelum',
  'Indus',
  'Zanskar',
  'Suru',
  'Nubra',
  'Shyok',
  'Tawi',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Dal Lake', river: '---', location: 'Sri Nagar ' },
  { name: 'Tso Moriri Lake', river: '---', location: 'Ladakh ' },
  { name: 'Achar Lake', river: '---', location: '---' },
  { name: 'Pangong Lake', river: '---', location: 'Ladakh ' },
  { name: 'Nageen Lake', river: '---', location: '---' },
  { name: 'Wular Lake', river: '---', location: 'Bandipora ' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Salal Dam', river: 'Chenab River', location: '---' },
  { name: 'Baglihar Dam', river: 'Chenab River', location: '---' },
  { name: 'Pakal Dam', river: '---', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [{ name: '--------', location: '--' }] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: '-------', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [
  { name: 'Kashmir Valley', location: '---' },
  { name: 'Amarnath Caves (Naturally formed ice Shivlinga)', location: '---' },
  { name: 'Lidder Valley', location: '---' },
  { name: 'Chenab Valley', location: '---' },
  { name: 'Sind Valley', location: '---' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export type JammuKashmirTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly JammuKashmirTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  { name: 'Dachigam National Park ', year: '1981', location: 'Near Kashmir' },
  { name: 'Kishtwar National Park', year: '1981', location: 'Kishtwar District' },
  { name: 'Hemis National Park', year: '1981', location: 'Leh' },
  { name: 'Salim Ali National Park ', year: '1992', location: 'Srinagar' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Baltal W.L.S ', year: '1987', location: '-' },
  { name: 'Changthang Cold Desert W.L.S', year: '1987', location: '-' },
  { name: 'Gulmarg W.L.S', year: '1987', location: '-' },
  { name: 'Hirapora W.L.S', year: '1987', location: '-' },
  { name: 'Hokersar W.L.S', year: '1992', location: '-' },
  { name: 'Jasrota W.L.S', year: '1987', location: '-' },
  { name: 'Karakoram (Nubra Shyok) W.L.S', year: '1987', location: '-' },
  { name: 'Lachipora W.L.S', year: '1987', location: '-' },
  { name: 'Limber W.L.S', year: '1987', location: '-' },
  { name: ' Nandini W.L.S', year: '1987', location: '-' },
  { name: ' Overa Aru W.L.S', year: '1987', location: '-' },
  { name: ' Rajparian W.L.S', year: '2002', location: '-' },
  { name: ' Ramnagar Rakha W.L.S', year: '1981', location: '-' },
  { name: ' Surinsar Mansar W.L.S', year: '1981', location: '-' },
  { name: ' Trikuta W.L.S', year: '1981', location: '-' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS :' as const
export const zooMuseumsNote = 'Nil' as const
export const zooMuseumsRows: readonly { readonly name: string; readonly city: string }[] = []

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export type JammuKashmirInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly JammuKashmirInternationalAirportRow[] = [
  {
    name: 'Sheikh Ul – Alam International Airport',
    city: 'Sri Nagar',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Awantipur Air Force Station', city: 'Awantipur', category: 'Defence' },
  { name: 'Jammu Airport', city: 'Jammu', category: 'Domestic' },
  { name: 'Kishtwar Airstrip', city: 'Kishtwar', category: 'Domestic' },
  { name: 'Rajouri Airport', city: 'Rajouri', category: 'Domestic' },
  { name: 'Poonch Airport', city: 'Poonch', category: 'Domestic' },
  { name: 'Udhampur Air Force Station', city: 'Udhampur', category: 'Defense' },
  { name: 'Fukche Airbase ', city: 'Demchok', category: 'Defense' },
  { name: 'Kargil Airport', city: 'Kargil', category: 'Defense' },
  {
    name: 'Kushok Bakula Rimpochee Airport',
    city: 'Leh',
    category: 'Domestic',
  },
  { name: ' Thoise Airbase', city: 'Thoise', category: 'Defense' },
] as const

export type JammuKashmirStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly JammuKashmirStadiumRow[] = [
  {
    name: 'Maulana Azad Cricket Stadium',
    location: 'Jammu',
  },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'National Institute of Technology (NIT)                           ',
    location: 'Srinagar',
  },
  { name: 'Indian Institute of Technology (IIT)                                ', location: 'Jammu' },
  {
    name: 'Indian Institute of Management (IIM)                             ',
    location: 'Jammu',
  },
  {
    name: 'All India Institute of Medical Sciences(AIIMS)                 ',
    location: 'Avantipura',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'Sher – e – Kashmir University of Agricultural Sciences & Technology ',
    location: 'Srinagar',
  },
  {
    name: 'Sher – e – Kashmir University of Agricultural Sciences & Technology ',
    location: 'Jammu',
  },
  {
    name: 'Shri Mata Vaishno Devi University ',
    location: 'Katra',
  },
  {
    name: 'Islamic University of Science and Technology            ',
    location: 'Pulwama',
  },
  {
    name: 'Baba Ghulam Shah Badhsaha University                       ',
    location: 'Rajauri',
  },
] as const

export const famousPersonsOrdered = ['Sheik Mohammad Abdulla – Lion of Kashmir'] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Saltoro Kangri Peak – 7742 meters,     Ladakh (Little Tibet),\nWular Lake (Wular Lake is one of the largest fresh water lakes in Asia' as const

export const miscellaneousBlocks = [
  {
    heading: 'Jammu & Kashmir',
    lines: ['1.	Heaven of India ', '2.	Garden of India '],
  },
  {
    heading: 'Kashmir',
    lines: ['1.	Switzerland of India '],
  },
  {
    heading: 'Sri Nagar',
    lines: ['1.	The City of Lakes ', '2.	Venice of Kashmir'],
  },
  {
    heading: 'Sri Nagar',
    lines: [
      '1.	National Institute of Fashion Technology                     ',
      '2.	Indiara Gandhi Memorial Tulip Garden (Asia’s largest Tulip Garden) ',
      '3.	Jawaharlal Nehru Memorial Botanical Garden 			',
    ],
  },
  {
    heading: 'Gulmarg ',
    lines: ['1.	High Altitude Research Laboratory                                     '],
  },
  {
    heading: 'Ladakh ',
    lines: [
      '1.	Extreme Altitude Research Centre (17600 metre above sea level world’s highest research centre)',
    ],
  },
] as const
