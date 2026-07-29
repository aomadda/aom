export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const himachalPradeshHeaderLine = 'HIMACHAL PRADESH' as const

export const himachalPradeshBasicFacts = [
  { label: 'CAPITAL', value: 'Shimla (Dharmasala, 2nd Capital in winter)' },
  { label: 'ESTABLISHED', value: 'January 25, 1971' },
  { label: 'CHIEF MINISTER', value: 'Jai Ram Thakur' },
  { label: 'GOVERNOR', value: 'Bandaru Dattatreya' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Shimla – 1971 and Dharamshala' },
  { label: 'STATE ANIMAL', value: 'Snow leopard' },
  { label: 'STATE BIRD', value: 'Western Trogo Pan' },
  { label: 'STATE TREE', value: 'Deodar' },
  { label: 'STATE FLOWER', value: 'Rhododendron' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Hindi (State Language),      Punjabi,      Pahari,      Kinnauri,      Kullvi,      Mandeali,     \n                                                     Kangri,        Chambeali',
  },
] as const

export const stateDancesOrdered = [
  'Chhanak Chham',
  'Dangi',
  'Nati',
  'Thoda Dance',
  'Mala Dance',
  'Munjra',
  'Gidha parhaun',
  'Charba',
  'Kariyala kayanga',
  'Mahasu',
  'Kinnauri',
  'Thali',
  'Nati',
  'Jadda',
  'Loodi',
  'Chamm',
  'Namgeri',
] as const

export const boundaryStatesOrdered = ['Haryana', 'Uttarakhand', 'Punjab', 'Jammu & Kashmir', 'China'] as const

export const tribesOrdered = ['Dasasu', 'Gadhis', 'Kinnars', 'Gujjars'] as const

export const festivalsOrdered = [
  'Minjar Mela',
  'Jwalamukti fair',
  'Dasara',
  'Lohri',
  'Namdas',
  'Gudma',
] as const

export const districtsOrdered = [
  'Bilaspur',
  'Chamba',
  'Hamirpur',
  'Kangra',
  'Kinnaur',
  'Kullu',
  'Lahaul',
  'Mandi',
  'Shimla',
  'Sirmaur',
  'Solan',
  'Una',
] as const

export const mainCitiesOrdered = [
  'Manali',
  'Dalhausi',
  'Baddi',
  'Sahib',
  'Nahan',
  'Kinnaur',
  'Sundarnagar',
  'Bilaspur',
  'Sirmaur',
  'Solan',
  'Kulu',
  'Chamba (Ravi River)',
  'Dharmashala',
  'Khajjar',
  'Mandi',
] as const

export type HimachalPradeshExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const himachalPradeshExtendedFacts: readonly HimachalPradeshExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (5)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '55, 673 sq km (18th),                	Density: 123 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '68,64,602 (21st), 			Males = 34,81,873 & Females = 33,82,729 \n   									Male : Female = 1000 : 974',
  },
  { label: 'LITERACY', kind: 'text', value: '82.80%' },
  { label: 'ASSEMBLY', kind: 'text', value: '68' },
  { label: 'LOK SABHA', kind: 'text', value: '4' },
  { label: 'RAJYA SABHA', kind: 'text', value: '3' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (12)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Naina Devi Temple', location: '---' },
  { name: 'Jwala ji Temple', location: '---' },
  { name: 'Chameli Devi Temple', location: '---' },
  { name: 'Baijnath Temple', location: '---' },
  { name: 'Bhimakali Temple', location: '---' },
  { name: 'Bijli Mahadev Temple', location: '---' },
  { name: 'Manu Temple', location: '---' },
  { name: 'Jakhoo Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [{ name: '-------', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Nathpajakri hydro power plant', year: '---', location: '---' },
  { name: 'Mandi Hydro power plant', year: '---', location: '---' },
  { name: 'Rothang Hydro Power Plant', year: '---', location: '---' },
  { name: 'Girinagar Hydel project', year: '---', location: '---' },
  { name: 'Binwa Hydel Project', year: '---', location: '---' },
  { name: 'Rangtong Hydel Project', year: '---', location: '---' },
  { name: 'Baner and Neugal Project', year: '---', location: '---' },
] as const

export const riversOrdered = ['Ravi', 'Beas', 'Satlej', 'Chenab', 'Yamuna'] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Govinda sagar lake', river: '---', location: '---' },
  { name: 'Chandra Taal Lake ', river: '---', location: 'Lahul and Spiti ' },
  { name: 'Maharana Pratap Sagar', river: '---', location: 'Kangra ' },
  { name: 'Suraj Taal Lake', river: '---', location: 'Lahul and Spiti' },
  { name: 'Parashar Lake ', river: '---', location: 'Mandi ' },
  { name: 'Renuka Lake', river: '---', location: '---' },
  { name: 'Nakao Lake', river: '---', location: '---' },
  { name: 'Khajjar Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Bhakra Nangal dam ', river: 'Sutlej River', location: '---' },
  { name: 'Parbatti dam ', river: 'Parbatti River', location: '---' },
  { name: 'Pong Dam', river: 'Beas River', location: '---' },
  { name: 'Pondoh Dam', river: 'Beas River', location: '---' },
  { name: 'Nathpa Jhakri Dam', river: 'Sutlej River', location: '---' },
  { name: 'Chamera Dam', river: 'Ravi River', location: '---' },
  { name: 'Gobind Sagar Reseroir ', river: 'Chenab River', location: '---' },
  { name: 'Manikaran Geothermal Project', river: '---', location: '---' },
  { name: 'Arjun Dam River', river: 'Ravi ', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Bundla Waterfalls ', location: 'Kangra' },
  { name: 'Palani Waterfalls', location: 'Kullu ' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [{ name: ' PPPPPPP', location: '---' }] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: 'HHHHHHHHHHHHHHHH', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export type HimachalPradeshTigerReserveRow = {
  readonly name: string
  readonly year: string
  readonly location: string
}
export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = 'Nil' as const
export const tigerReservesRows: readonly HimachalPradeshTigerReserveRow[] = []

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  { name: 'Great Himalayan National Park ', year: '1984 ', location: 'Kullu Region	' },
  { name: 'Pin Valley National Park', year: '1987', location: 'Lahaul & Spiti District ' },
  { name: 'Inderkilla National Park ', year: '2010', location: 'Kullu District	' },
  { name: 'Khirganga National Park', year: '2010', location: 'Kullu District	' },
  { name: 'Simbalbara National Park', year: '2010', location: 'Sirmour District	' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Shikari devi sanctuary ', year: '1962 ', location: 'Mandi ' },
  { name: 'Bandli Wildlife Sanctuary ', year: '1962 ', location: '--' },
  { name: 'Daranghati Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: 'Talra Wildlife Sanctuary ', year: '1962 ', location: '--' },
  { name: 'Pong Dam Lake Wildlife Sanctuary ', year: '1982 ', location: '--' },
  { name: 'Dhauladhar Wildlife Sanctuary ', year: '1994 ', location: '--' },
  { name: 'Nargu Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: 'Shilli Wildlife Sanctuary', year: '---', location: '---' },
  { name: 'Chail Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: ' Chandratal Wildlife Sanctuary ', year: '2007', location: '--' },
  { name: ' Churdhar Wildlife Sanctuary ', year: '1985', location: '--' },
  { name: ' Gamgul Siyabehi Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: ' Kais Wildlife Sanctuary ', year: '1954', location: '--' },
  { name: ' Kalatop – Khajjar Wildlife Sanctuary ', year: '1958', location: '--' },
  { name: ' Kanawar Wildlife Sanctuary ', year: '1954', location: '--' },
  { name: ' Khokhan Wildlife Sanctuary ', year: '1954', location: '--' },
  { name: ' Kibber Wildlife Sanctuary ', year: '1992', location: '--' },
  { name: ' Kugti Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: ' Lippa Asarang Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: ' Majathal Wildlife Sanctuary ', year: '1954', location: '--' },
  { name: ' Manali Wildlife Sanctuary ', year: '1954', location: '--' },
  { name: ' Renuka Wildlife Sanctuary ', year: '2013', location: '--' },
  { name: ' Rupi Bhaba Wildlife Sanctuary ', year: '1982', location: '--' },
  { name: ' Sainj Wildlife Sanctuary ', year: '1994', location: '--' },
  { name: ' Sangla Valley (Rakcham Chitkul) W.L.S', year: '1989', location: '--' },
  { name: ' Sech Tuan Nala Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: ' Shimla Water Catchment W.L.S', year: '1958 ', location: '--' },
  { name: 'Tirthan Wildlife Sanctuary ', year: '1962', location: '--' },
  { name: ' Tundah Wildlife Sanctuary ', year: '1962', location: '--' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS :' as const
export const zooMuseumsRows = [{ name: 'Gopalpur Zoo', city: 'Gopalpur' }] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = 'Nil' as const
export type HimachalPradeshInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly HimachalPradeshInternationalAirportRow[] = []

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Kangra Airport', city: 'Kangra', category: 'Domestic' },
  { name: 'Kullu – Manali Airport ', city: 'Kullu ', category: 'Domestic' },
  { name: 'Mandi Airport', city: 'Mandi', category: 'Domestic' },
  { name: 'Shimla Airport', city: 'Shimla', category: 'Domestic' },
  { name: 'Dharmashala Airport', city: '---', category: '---' },
  { name: 'Gaggal Airport ', city: 'Kangra', category: '---' },
  { name: 'Bhuntar Airport ', city: 'Kulu', category: '---' },
] as const

export type HimachalPradeshStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly HimachalPradeshStadiumRow[] = [
  { name: 'HPCA Cricket Stadium', location: 'Dharmashala' },
  { name: 'Chail Cricket Stadium', location: '---' },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'Indian Institute of Information Technology (IIIT)                         ',
    location: 'Una',
  },
  { name: 'Indian Institute of Technology (IIT)                                           ', location: 'Mandi' },
  {
    name: 'Indian Institute of Management (IIM)                                       ',
    location: 'Sirmaur',
  },
  {
    name: 'All India Institute of Medical Sciences (AIIMS)                                ',
    location: 'Bilaspur',
  },
  { name: 'National Institute of Technology (NIT)                                     ', location: 'Hamirpur' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'Central University of Himachal Pradesh',
    location: 'Dharmasala',
  },
  {
    name: 'Jaypee University of Information Technology',
    location: 'Solan',
  },
  {
    name: 'Dr Yashwant Singh Parmar University of Horticulture & Foresty    ',
    location: 'Solan',
  },
] as const

export const famousPersonsOrdered = [
  'Prem Chopra',
  'The Great Khali',
  'Preity Zinta',
  'Kangana Ranaut',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Reo Purgyil Peak – 6816 meters,     Palani Waterfalls – Kullu,      \n                                                                  Bundla Waterfalls – Kangra,              Kasauli Hill Station,         Kangra Valley,       \n                                                                  Rasshtrapati Nivas – Shimla,              Chandvik Waterfalls – Shimla,       \nChail Cricket Stadium (2nd highest cricket stadium in the world)' as const

export const miscellaneousBlocks = [
  {
    heading: 'Himachal Pradesh',
    lines: ['1.	Apple State of India ', '2.	Fruit Bowl of India ', '3.	Mountain State of India '],
  },
  {
    heading: 'Solan ',
    lines: ['1.	The City of Red Gold', '2.	Mushroom City of India '],
  },
  {
    heading: 'Shimla',
    lines: ['1.	The Queen of Hills'],
  },
  {
    heading: 'Kulu ',
    lines: ['1.	Valley of Gods'],
  },
  {
    heading: 'Dharmashala',
    lines: ['1.	Little Tibet'],
  },
  {
    heading: 'Khajjar ',
    lines: ['1.	Mini Switzerland of India'],
  },
  {
    heading: 'Mandi ',
    lines: ['1.	Chota Kashi', '2.	Cultural Capital of Himachal Pradesh'],
  },
  {
    heading: 'Shimla ',
    lines: [
      '1.	Central Potato Research Institute                                                        ',
      '2.	Indian Institute of Advance Study                                                 ',
      '3.	National Academy of Audit & Accounts 		',
      '4.	The Research Centre of Wheat & Barley 				',
    ],
  },
  {
    heading: 'Dharmashala',
    lines: ['1.	Central Tibetan Administration 				'],
  },
  {
    heading: 'Solan',
    lines: ['1.	Central Mushroom Research Institute '],
  },
  {
    heading: 'Palampur ',
    lines: ['1.	Chaudhary Sarwan Kumar Himacha Pradesh Krishi Vishvavidyalaya '],
  },
  {
    heading: 'Kangra ',
    lines: ['1.	National Institute of Fashion Technololgy (NIFT) '],
  },
] as const
