export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const keralaHeaderLine = 'KERALA' as const

export const keralaBasicFacts = [
  { label: 'CAPITAL', value: 'Tiruvananthapuram' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: 'P Vijayan' },
  { label: 'GOVERNOR', value: 'Arif Mahammad Khan' },
  { label: 'RULING PARTY', value: 'Communist Party of India (Marxist)' },
  { label: 'HIGH COURT', value: 'Ernakulam, 1958' },
  { label: 'STATE ANIMAL', value: 'Indian Elephant' },
  { label: 'STATE BIRD', value: 'Great Hornbill' },
  { label: 'STATE TREE', value: 'Coconut' },
  { label: 'STATE FLOWER', value: 'Golden Shower' },
  { label: 'STATE FRUIT', value: 'Jack Fruit' },
  { label: 'STATE EMBLEM', value: '---' },
  { label: 'STATE SONG', value: '---' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value: 'Malayalam (State Language),     English,   Hindi',
  },
] as const

export const stateDancesOrdered = [
  'Kathakali',
  'Kudiyattam',
  'Kalavipanattu',
  'Kaliyattam',
  'Oottam',
  'Padayani (Folk Dance)',
  'Krishnastam',
  'Kaikottukali',
  'Thullal',
  'Margamkalli',
  'Oppana',
  'Mohiniattam',
  'Theyyam',
] as const

export const boundaryStatesOrdered = ['Tamil Nadu', 'Karnataka', 'Lakshadweep'] as const

export const tribesOrdered = ['Moplah'] as const

export const festivalsOrdered = [
  'Onam',
  'Poorum',
  'Vishu',
  'Thrissurpuram',
  'Shivaratri',
  'Ramzan',
  'Christamas',
  'Attukal Pongala',
] as const

export const districtsOrdered = [
  'Alappuzha',
  'Ernakulam',
  'Idukki',
  'Kannur',
  'Kasaragod',
  'Pathanamthitta',
  'Kollam',
  'Kottayam',
  'Kozhikode',
  'Wayanad',
  'Thiruvananthapuram',
  'Palakkad',
  'Malappuram',
  'Thrissur',
] as const

export const mainCitiesOrdered = [
  'Kojikode (kalikat)',
  'Alapuja',
  'Kochin',
  'Palakkad',
  'Kannur',
  'Trivendram',
  'Ernakulam',
  'Kasargadh',
  'Karaikudi',
  'Idukki',
  'Malappuram',
  'Kottayam',
  'Kochi',
  'Thrissur',
  'Kollam',
] as const

export type KeralaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const keralaExtendedFacts: readonly KeralaExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (3)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '38, 863 sq km (22nd),                Density: 860 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '3,34,06,061 (13th), 		Males = 1,60,27,412 & Females = 1,73,78,649\n     								M : F = 1000 : 1084',
  },
  { label: 'LITERACY', kind: 'text', value: '93.90%' },
  {
    label: 'ASSEMBLY',
    kind: 'text',
    value: '140',
  },
  { label: 'LOK SABHA', kind: 'text', value: '20' },
  { label: 'RAJYA SABHA', kind: 'text', value: '9' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (14)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Sabarimala', location: 'Perunad' },
  { name: 'Ananta Padmanabha Swami Temple', location: 'Tiruvananthapuram' },
  { name: 'Guruvayur Temple', location: '---' },
  { name: 'Yogamaya Temple', location: '---' },
  { name: 'Attukal  BhagavathyTemple', location: '---' },
  { name: 'Chinnakkathoor Temple', location: '---' },
  { name: 'Sree Poornathrayeesa Temple', location: '---' },
  { name: 'Vaikom Temple', location: '---' },
  { name: 'Aluva Temple', location: '---' },
  { name: ' Valiyakoickal Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [{ name: '------', year: '---', location: '---' }] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Idukki Hydro power plant', year: '---', location: '---' },
  { name: 'Shabaragiri Hydro Power Plant', year: '---', location: '---' },
  { name: 'Kayakulam Power Station', year: '---', location: '---' },
  { name: 'Brahmaputram power Station', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Periyar',
  'Chaliyar',
  'Kadalundi',
  'Chalakkudy',
  'Achenkovil',
  'Kalada',
  'Valapattanam',
  'Bhavani',
  'Kabani',
  'Bharathapuzha',
  'Pamba',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Astamudi lake', river: '---', location: 'Kollam' },
  { name: 'Kayamkulam Lake', river: '---', location: '---' },
  { name: 'Kuttanad Lake ', river: '---', location: 'Kottayam ' },
  { name: 'Vellayani Lake', river: '---', location: '---' },
  { name: 'Pookot Lake', river: '---', location: '---' },
  { name: 'Shashtamkotta Lake', river: '---', location: 'Kollam ' },
  { name: 'Vembanadu Lake', river: '---', location: '---' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Idukki dam ', river: 'Periyar River', location: '---' },
  { name: 'Mullaperiyar Dam', river: '---', location: '---' },
  { name: 'Banasura Sagar Dam ', river: 'Kabini River', location: '---' },
  { name: 'Kundala Dam ', river: 'Parambikulam River', location: '---' },
  { name: 'Parambikulam Dam ', river: 'Parambikulam River', location: '---' },
  { name: 'Walayar Dam ', river: 'Walayar River', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Athirappilly Waterfalls', location: '---' },
  { name: 'Meenmutty Waterfalls ', location: 'Wayanad' },
  { name: 'Soochipara Waterfalls ', location: 'Wayanad' },
  { name: 'Kovalam Beach', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [
  { name: 'Cochin Port', location: '---' },
  { name: 'Quilon Port', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '-------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows = [
  { name: 'Periyar Tiger Reserve ', year: '1979', location: 'Idukki & Pathanamthatti' },
  {
    name: 'Parambikulam Tiger Reserve ',
    year: '2009',
    location: ' Palakkad District',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  { name: 'Eravikulam National Park ', year: '1978', location: 'Idukki District' },
  {
    name: 'Silent Valley National Park ',
    year: '1980 ',
    location: 'Nilgiri',
  },
  {
    name: 'Periyar National Park ',
    year: '1982 ',
    location: 'Idukki & Pathanamthitta Districts',
  },
  {
    name: 'Anamudi Shola National Park ',
    year: '2003 ',
    location: 'Idukki District',
  },
  {
    name: 'Mathikettan Shola National Park ',
    year: '2003 ',
    location: 'Idukki District',
  },
  {
    name: 'Pambadam Shola National Park ',
    year: '2003 ',
    location: 'Devikulam Taluk',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Chinnar Wildlife Sanctuary ', year: '1984', location: '--' },
  { name: 'Muthanga Wildlife Sanctuary', year: '--', location: '--' },
  { name: 'Kumarakom Bird Sanctuary', year: '--', location: 'Kottayam' },
  { name: 'Kadalundi Bird Sanctuary ', year: '--', location: 'Malapparam' },
  { name: 'Thattekad Bird Wildlife Sanctuary', year: '1983 ', location: 'Kochi ' },
  { name: 'Mangalavanam Bird Sanctuary', year: '---', location: 'Kochi' },
  { name: 'Mangalavanam Bird W.L.S', year: '2004 ', location: '--' },
  { name: 'Neyyar Wildlife Sanctuary ', year: '1958', location: '--' },
  { name: 'Malabar Wildlife Sanctuary ', year: '2010', location: '--' },
  {
    name: ' Periyar Elephants W.L.S',
    year: '1950 ',
    location: 'Idukki District',
  },
  {
    name: ' Parambikulam W.L.S',
    year: '1973',
    location: 'Kannur District',
  },
  {
    name: ' Wayanad Wildlife Sanctuary',
    year: '1973',
    location: 'Kozekode',
  },
  { name: ' Aralam Butterfly Sanctuary ', year: '1984', location: '--' },
  { name: ' Chimmony Wildlife Sanctuary ', year: '1984', location: '--' },
  { name: ' Idukki Wildlife Sanctuary ', year: '1976', location: '--' },
  { name: ' Chulannur Peafowl W.L.S', year: '2007', location: '--' },
  { name: ' Kottiyoor Wildlife Sanctuary ', year: '2011', location: '--' },
  { name: ' Kurinjimala Wildlife Sanctuary ', year: '2006', location: '--' },
  {
    name: ' Peechi – Vazhani Wildlife Sanctuary ',
    year: '1958',
    location: '--',
  },
  { name: ' Peppara Wildlife Sanctuary ', year: '1983', location: '--' },
  {
    name: ' Shendurney Wildlife Sanctuary ',
    year: '1984 ',
    location: '--',
  },
  { name: ' Pakshipathalam Bird Sanctuary ', year: '---', location: '---' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  {
    name: 'Crocodile Rehabilitation and Research Centre',
    city: 'Trivendram',
  },
  { name: 'Thiruvananthapuram Zoo', city: 'Trivendram' },
  { name: 'Thrissur Zoo', city: 'Thrissur' },
  {
    name: 'Sardar Vallabhai Patel Police Museum ',
    city: 'Kollam',
  },
  { name: 'Napier Museum', city: '---' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export type KeralaInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly KeralaInternationalAirportRow[] = [
  {
    name: 'Trivendram International Airport',
    city: 'Thiruvanthapuram',
    category: 'International',
  },
  {
    name: 'Cochin International Airport',
    city: 'Kochi',
    category: 'International',
  },
  {
    name: 'Needumbaseri International Air port',
    city: 'Kochi',
    category: 'International',
  },
  {
    name: 'Calicut International Airport',
    city: 'Kozhikode',
    category: 'International',
  },
  {
    name: 'Kannur International Airport',
    city: 'Kannur',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'INS Garuda', city: 'Kochi', category: 'Domestic' },
  { name: 'Quilon Aerodrome', city: 'Kollam', category: 'Defense' },
  {
    name: 'Sabarimala Airport',
    city: 'Kottayam',
    category: 'Domestic',
  },
] as const

export type KeralaStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly KeralaStadiumRow[] = [
  {
    name: 'University Football Stadium',
    location: 'Tiruvanantapuram',
  },
  {
    name: 'Jawahar Lal Nehru Stadium (Multipurpose)',
    location: 'Kochi',
  },
  {
    name: 'Fort Maidan (Football)',
    location: 'Palakkad',
  },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'Indian Institute of Management (IIM)',
    location: 'Kozhikode',
  },
  {
    name: 'Indian Institute of Technology (IIT)',
    location: 'Palakkad',
  },
  {
    name: 'National Institute of Technology (NIT)',
    location: 'Kozhikode',
  },
  {
    name: 'Indian Institute of Information Technology (IIIT)',
    location: 'Kottayam',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'National University on Disability Studies',
    location: 'Thiruvananthapuram',
  },
  {
    name: 'A P J Abdul Kalam Technological University',
    location: 'Thiruvananthapuram',
  },
  {
    name: 'Sree Sankaracharya University of Sanskrit (SSUS)',
    location: 'Kalady (Kochi)',
  },
  {
    name: 'Indian Maritime University',
    location: 'Cochin',
  },
  {
    name: 'Central University of Kerala',
    location: 'Kasaragod',
  },
  {
    name: 'Kerala Veterinary & Animal Sciences University',
    location: 'Wayanad',
  },
] as const

export const famousPersonsOrdered = [
  'Annachandi',
  'K R Narayanan',
  'Arundati Roy',
  'K G Balakrishnan',
  'Raja Ravivarma',
  'K Kelappan – Kerala Gandhi',
  'Vagrhese Kurien – Milk Man of India & Father of White Revolution ',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  "Anamudi Peak – 2695 meters,\nCochin International Airport – World's first fully solar energy powered Airport,\nVembanadu Lake (Vembanadu Lake is India's longest lake and is the largest lakes inKerala)" as const

export const miscellaneousBlocks = [
  {
    heading: 'Kerala ',
    lines: ["1.\tGod's Own Country ", "2.\tLand of Coconuts", '3.\tSpice Garden of India ', '4.\tLand of Parasuram '],
  },
  {
    heading: 'Kollam',
    lines: ['1.\tCashew Capital of the World ', '2.\tPrice of Arabian Sea '],
  },
  {
    heading: 'Alaphuza ',
    lines: ['1.\tVenice of the East '],
  },
  {
    heading: 'Kochi ',
    lines: ['1.\tQueen of Arabian Sea '],
  },
  {
    heading: 'Thiruvananthapuram ',
    lines: ['1.\tEvergreen City of India'],
  },
  {
    heading: 'Tiruvananthapuram',
    lines: [
      '1.\tVikram Sarabhai Space Centre',
      '2.\tThumba Space Centre',
      '3.\tIndian Institute of Space Science & Technology (IIST)',
      '4.\tIndian Institute of Science Education & Research',
      '5.\tVikram Sarabhai Space Centre (VSSC)',
      ' ',
      '6.\tThumba Equitorial Rocket Launching Station (TERLS)',
      '7.\tRajiv Gandhi Centre for Biotechnology',
      '8.\tTrophical Botanicla Garden & Research Institute',
      '9.\tNational Instiitute of Interdisciplinary Science & Technology ',
      '',
      '10.\t Free Software Foundation of India',
      ' ',
      '11.\t Regional Cancer Centre',
      '12.\t Sree Chitra Thirunal Institute of Medical Sciences & Technololgy ',
      '13.\t Centre for Earth Sciences Studies (CESS)',
      '14.\t Central Tuber Crops Research Institute',
      '15.\t The Oriental Research Institute & Manuscripts Library ',
      '16.\t Liquid Propulsion Systems Centre (LPSC) = Tiruvananthapuram + Bangalore',
    ],
  },
  {
    heading: 'Kochi ',
    lines: [
      '1.\tResearch Institute for Sea Fish',
      '2.\tCentral Institute of Fisheries Nautical & Engineering Training',
      '3.\tNational Institute of Advanced Legal Studies',
      '4.\tThe Central Institute of Fisheries Technologies',
      '5.\tNational Institute of Oceanography = Kochi + Goa + Mumbai + Vizag',
      '6.\tCentral Marine Fisheries Research Institute',
      '7.\tCentral Institute of Fisheries Technology',
    ],
  },
  {
    heading: 'Kozhikode',
    lines: ['1.\tRail Coach Factory'],
  },
  {
    heading: 'Karaikudi ',
    lines: ['1.\tCentral Electro – chemical Research Institute'],
  },
  {
    heading: 'Thumba ',
    lines: ['1.\tThumba Equilateral Rocket Launching Centre'],
  },
  {
    heading: 'Thrissur ',
    lines: [
      '1.\tFirst Elephant Hospital = Thrissur & Nagaon (Assam)',
      '2.\tIndia Innovation Centre for Graphene (IICG) ',
    ],
  },
  {
    heading: 'Kannur ',
    lines: ['1.\tNational Institute of Fashion Technology'],
  },
  {
    heading: 'Idukki  ',
    lines: ['1.\tIndian Cardamom Research Centre'],
  },
] as const
