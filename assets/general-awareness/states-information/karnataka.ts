export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const karnatakaHeaderLine = 'KARNATAKA' as const

export const karnatakaBasicFacts = [
  { label: 'CAPITAL', value: 'Bengaluru' },
  { label: 'ESTABLISHED', value: 'November 1, 1956' },
  { label: 'CHIEF MINISTER', value: 'B S Yediurappa' },
  { label: 'GOVERNOR', value: 'Vajubhai Rudabhai Vala' },
  { label: 'RULING PARTY', value: 'BJP' },
  { label: 'HIGH COURT', value: 'Bengalore, 1884' },
  { label: 'STATE ANIMAL', value: 'Indian Elephant' },
  { label: 'STATE BIRD', value: 'Indian Roller' },
  { label: 'STATE TREE', value: 'Sandalwood' },
  { label: 'STATE FLOWER', value: 'Lotus' },
  { label: 'STATE FRUIT', value: '---' },
  { label: 'STATE EMBLEM', value: 'Gandaberunda' },
  { label: 'STATE SONG', value: 'Jaya Bharata Jananiya Tanujate' },
  { label: 'STATE SPORT', value: '---' },
  {
    label: 'STATE LANGUAGE(S)',
    value:
      'Kannada (State Language),     Telugu,     Urdu,     Konkani,     Hindi,     Mahl,     \n                                                     Tulu,     Kodava',
  },
] as const

export const stateDancesOrdered = [
  'Yakshagana (State Dance)',
  'Huttari',
  'Suggi Kunitha',
  'Dollu Kunitha (Folk Dance)',
  'Bayalata',
  'Veeragasi',
  'Kola',
  'Lavani',
  'Bootha Aradhana',
  'Patta Gunita',
  'Somana Kunita',
  'Jaggahalige Kunita',
  'Bolak – aat',
  'Komb – aat',
] as const

export const boundaryStatesOrdered = [
  'Maharashtra',
  'Andhra Pradesh',
  'Kerala',
  'Tamil Nadu',
  'Telangana',
  'Arabian Sea',
  'Goa',
] as const

export const tribesOrdered = [
  'Lambadi',
  'Medara',
  'Soligas',
  'Yeravas',
  'Todas',
  'Siddhis',
] as const

export const festivalsOrdered = [
  'Dasara',
  'Sankrantri',
  'Ugadi',
  'Karago',
  'Urs',
  'Diwali',
  'Navaratri',
  'Ramzan',
  'Maha Mastabhisheka Utsav – Lord Gomateshwara (Bahubali)',
] as const

export const districtsOrdered = [
  'Bengalure Rural',
  'Bagalkot',
  'Ballari',
  'Belagavi',
  'Bidar',
  'Bengaluru Urban',
  'Kalaburagi',
  'Kodagu',
  'Koppal',
  'Mandya',
  'Chamarajnagar',
  'Hassan',
  'Haveri',
  'Mysuru',
  'Raichur',
  'Chikkaballapur',
  'Tumakuru',
  'Udupi',
  'Dharwad',
  'Gadag',
  'Chikkamagaluru',
  'Vijayapura',
  'Yadgir',
  'Chitradurga',
  'Devanagere',
  'Dakshina Kannada',
  'Ramanagara',
  'Shivamogga',
  'Uttara Kannada',
] as const

export const mainCitiesOrdered = [
  'Davanagere',
  'Karvar',
  'Hubli',
  'Mysore',
  'Mangaluru',
  'Shivamogga',
  'Belgavi',
  'Bellari',
  'Kolar',
  'Gadag',
  'Chitradurga',
  'Bidar',
  'Udupi',
  'Hosapete',
  'Raichur',
  'Vijayapura',
  'Tumakuru',
  'Kalaburagi',
  'Dharwad',
  'Coorg',
  'Hampi – Tungabhadra River',
  'Kolar',
  'Hosur',
] as const

export type KarnatakaExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const karnatakaExtendedFacts: readonly KarnatakaExtendedFact[] = [
  { label: 'STATE DANCE(S)', kind: 'ordered', items: stateDancesOrdered },
  { label: 'BOUNDARY STATES (7)', kind: 'ordered', items: boundaryStatesOrdered },
  {
    label: 'AREA',
    kind: 'text',
    value: '1, 91, 791 sq km (7th),                Density: 320 per sq. km',
  },
  {
    label: 'POPULATION',
    kind: 'text',
    value:
      '6,10,95,297 (8th), 		Males = 3,09,66,657 & Females = 3,01,28,640\n     								M : F = 1000 : 968',
  },
  { label: 'LITERACY', kind: 'text', value: '75.36%' },
  {
    label: 'ASSEMBLY',
    kind: 'text',
    value: '224,     			Vidhana Parishat = 75',
  },
  { label: 'LOK SABHA', kind: 'text', value: '28' },
  { label: 'RAJYA SABHA', kind: 'text', value: '12' },
  { label: 'TRIBES', kind: 'ordered', items: tribesOrdered },
  { label: 'FESTIVALS', kind: 'ordered', items: festivalsOrdered },
  { label: 'DISTRICTS (30)', kind: 'ordered', items: districtsOrdered },
  { label: 'MAIN CITIES', kind: 'ordered', items: mainCitiesOrdered },
] as const

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Keshava Temple', location: 'Somanathapura' },
  { name: 'Mysore Palace', location: 'Mysore' },
  { name: 'Marikamba Temple', location: 'Sirsi ' },
  { name: 'Sri Krishna Matha', location: 'Udupi' },
  { name: 'Sri Manjunatha Temple', location: 'Dharmasthala' },
  { name: 'Virupaksha Temple', location: 'Hampi ' },
  { name: 'Kukke Sumbramanya Temple', location: 'Shringeri' },
  { name: 'Sharadamba Temple', location: 'Shringeri' },
  { name: 'Gomateswar Temple', location: '---' },
  { name: ' Murudeswar Temple', location: '---' },
] as const

export const industriesSectionTitle = 'INDUSTRIES' as const
export const industriesRows = [
  { name: 'Visweswaraiah Iron & Steel ', year: '---', location: 'Bhadravati' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Kaiga Atomic power plant', year: '---', location: '---' },
  { name: 'Kakarpar Nuclear Power Plant', year: '---', location: '---' },
  { name: 'Kali Hydro power plant', year: '---', location: '---' },
  { name: 'Sharavati Hydro Power Plant', year: '---', location: '---' },
  { name: 'Siva samudram Hydro Power Plant', year: '---', location: '---' },
  { name: 'Raichur Thermal Power Station', year: '---', location: '---' },
  { name: 'Udupi Thermal Power Plant', year: '---', location: '---' },
  { name: 'Bellary Thermal Power Plant', year: '---', location: '---' },
] as const

export const riversOrdered = [
  'Thungabadhra',
  'Kaveri',
  'Penna',
  'Sharavati',
  'Malaprabha',
  'Krishna',
  'Hemavati',
  'Bhima',
  'Ghataprabha',
  'Vedavathi',
  'Shimsha',
  'Arkavati',
  'Laxmana Thirta',
  'Kabini',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Ulsoor Lake', river: '---', location: 'Bengaluru ' },
  { name: 'Agara Lake ', river: '---', location: 'Bengaluru ' },
  { name: 'Bellandur Lake', river: '---', location: 'Bengaluru ' },
  { name: 'Honnaman Lake', river: '---', location: 'Kodagu ' },
  { name: 'Karanji Lake', river: '---', location: 'Mysore' },
  { name: 'Kukarahalli Lake ', river: '---', location: 'Mysore' },
  { name: 'Pampa Sarovar Lake', river: '---', location: 'Hampi' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/DAMS :' as const
export const projectsDamsRows = [
  { name: 'Supa dam', river: 'Kali River', location: '--- ' },
  { name: 'Bhadra Dam', river: '---', location: '---' },
  { name: 'Malaprabha project', river: '---', location: '---' },
  { name: 'Kundremukh Iron project', river: '---', location: '---' },
  { name: 'Chakra Dam', river: '---', location: '---' },
  { name: 'Tungabadra Dam ', river: 'Tungabadra River', location: '---' },
  { name: 'Krishna Raja Sagar Dam ', river: 'Kaveri River', location: '---' },
  { name: 'Alamatti Dam ', river: 'Krishna River', location: '---' },
  { name: 'Kodasali Dam ', river: 'Kali River', location: '---' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Abbey Waterfalls', location: '---' },
  { name: 'Jog Waterfalls ', location: 'Shimoga' },
  { name: 'Unchalli Waterfalls', location: '---' },
  { name: 'Gokak Waterfalls', location: '---' },
  { name: 'Magod Waterfalls', location: '---' },
  { name: 'Kunchikal Waterfalls ', location: 'Udipi' },
  { name: 'Shivanasmudra Waterfalls ', location: 'Mysore' },
  { name: 'Kedumar Waterfalls ', location: 'Udipi' },
  { name: 'Barkana Waterfalls ', location: 'Shimoga' },
  { name: ' Hebbe Waterfalls ', location: 'Chikkamangulur' },
  { name: ' Kalhatti Waterfalls ', location: 'Chikkamangulur' },
  { name: ' Barachukki Waterfalls', location: '---' },
  { name: ' Koosali Waterfalls ', location: 'Udipi' },
  { name: ' Keppa Waterfalls ', location: 'Uttar Kannada' },
  { name: ' Mutyala Maduva Waterfalls ', location: 'Bengalore Rural' },
  { name: ' Maravanthe Beach', location: '---' },
  { name: ' Kudle Beach', location: '---' },
  { name: ' Panambur Beach', location: '---' },
] as const

export const portsPeakSectionTitle = 'PORTS :' as const
export const portsPeakRows = [
  { name: ' Panambur Port', location: '---' },
  { name: 'New Mangalore Port', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES :' as const
export const hillsValleyCavesRows = [{ name: '------', location: '---' }] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereNote = 'Nil' as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesNote = '' as const
export const tigerReservesRows = [
  { name: 'Bandipur Tiger Reserve ', year: '1974 ', location: 'Chamarajanagar District' },
  { name: 'Bhardra Tiger Reserve ', year: '1999 ', location: 'Chikkamagalur District' },
  {
    name: 'Dandeli – Anshi (Kali) Tiger Reserve ',
    year: '2009 ',
    location: 'Uttara Kannada District',
  },
  { name: 'Nagarhole Tiger Reserve ', year: '2009 ', location: 'Kodagur District' },
  { name: 'Biligiri Ranganatha Temple T.R', year: '2011 ', location: '--' },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  { name: 'Bandipur National Park ', year: '1974 ', location: 'Chamarajanagar District' },
  { name: 'Bannerghatta National Park ', year: '1986 ', location: 'Near Bengaluru' },
  { name: 'Anshi National Park ', year: '1987 ', location: 'Uttara Kannda District' },
  { name: 'Kundremukh National Park ', year: '1987 ', location: 'Chikkamagaluru' },
  { name: 'Nagarhole National Park ', year: '1988 ', location: 'Kodagu and Mysore' },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Thungabadhra Wildlife Sanctuary', year: '--', location: '--' },
  { name: 'Dandeli Wild Life Sanctuary ', year: '1987', location: '--' },
  { name: 'Someswar Wildlife Sanctuary ', year: '1974 ', location: '--' },
  { name: 'Sharavati Wildlife Sanctuary ', year: '1974', location: '--' },
  { name: 'Bhadra Wild Life Sanctuary ', year: '1974 ', location: '--' },
  { name: 'Bhimgad Wild Life Sanctuary ', year: '2010 ', location: '--' },
  { name: 'Arabithittu Wildlife Sanctuary ', year: '1985 ', location: '--' },
  { name: 'Attiveri Wildlife Sanctuary ', year: '1994', location: '--' },
  { name: 'Bankapura Bird Sanctuary', year: '--', location: '--' },
  { name: ' Bonal Bird Sanctuary', year: '--', location: '--' },
  { name: ' Kokrebellur Pelicanry Bird Sanctuary', year: '--', location: 'Kokrebellur' },
  { name: ' Pavagada Solar Park ', year: '--', location: 'Tumakuru' },
  { name: ' Magadi Bird Sanctuary – Gadag', year: '--', location: '--' },
  { name: ' Nugu Wildlife Sanctuary ', year: '1974 ', location: '--' },
  { name: ' Pushpagiri Wildlife Sanctuary ', year: '1987', location: '--' },
  { name: ' Cauvery Wildlife Sanctuary ', year: '1987', location: '--' },
  { name: ' Rangan Tittu Bird W.L.S', year: '1940 ', location: '--' },
  { name: ' Gudavi Bird Sanctuary ', year: '1989 ', location: 'Shimoga ' },
  { name: ' Attiveri Bird Sanctuary ', year: '--', location: 'Mundgod Taluk' },
  { name: ' Bonal Bird Sanctuary ', year: '--', location: 'Yadgir' },
  { name: ' Kaggaladu Bird Sanctuary', year: '--', location: 'Sira Taluk' },
  { name: ' Adichunchunagiri W.L.S', year: '1981 ', location: '--' },
  { name: ' Biligiri Rangaswami Temple W.L.S', year: '1987 ', location: '--' },
  { name: ' Brahmagiri Wildlife Sanctuary ', year: '1974', location: '--' },
  { name: ' Chincholi Wildlife Sanctuary ', year: '2012 ', location: '--' },
  { name: ' Daroji Bear Wildlife Sanctuary ', year: '1992 ', location: '--' },
  { name: ' Ghataprabha Bird W.L.S', year: '1974', location: '--' },
  { name: ' Gudekote Sloth Bear W.L.S', year: '2013 ', location: '--' },
  { name: ' Malai Mahadeswara W.L.S', year: '2013 ', location: '--' },
  { name: ' Melkote Temple Wildlife Sanctuary ', year: '1974', location: '--' },
  { name: 'Mookambika Wildlife Sanctuary ', year: '1974', location: '--' },
  { name: 'Ranebennur Black Buck W.L.S', year: '1974', location: '--' },
  { name: 'Ramadevara Betta Vulture W.L.S', year: '2012', location: '--' },
  {
    name: 'Ranganayana Durga Four Horned Antelope',
    year: '2011',
    location: '--',
  },
  { name: 'Shettinahalli Wildlife Sanctuary', year: '1974', location: '--' },
  { name: ' Talakaveri Wildlife Sanctuary ', year: '1987', location: '--' },
  { name: ' Jogimatti Wildlife Sanctuary ', year: '2015 ', location: '--' },
  { name: ' Thimlapura Wildlife Sanctuary ', year: '2016', location: '--' },
  { name: ' Yadahalli Chinkara W.L.S', year: '2015', location: '--' },
  { name: 'Mandagadde Bird Sanctuary', year: '---', location: '---' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUM :' as const
export const zooMuseumsNote = '' as const
export const zooMuseumsRows = [
  { name: 'Bannerghatta National Park', city: 'Bengaluru' },
  { name: 'Sri Champarajendra Zoological Garden', city: 'Mysore' },
  { name: 'Pilikula Biological Park', city: 'Mangalore' },
  {
    name: 'Visweswaraiah Institute of Technological Museum ',
    city: 'Bengaluru',
  },
  { name: 'Tippu Sultan Museum ', city: 'Srirangapatnam ' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsNote = '' as const
export type KarnatakaInternationalAirportRow = {
  readonly name: string
  readonly city: string
  readonly category: string
}
export const internationalAirportsRows: readonly KarnatakaInternationalAirportRow[] = [
  {
    name: 'Kempegowda International Airport',
    city: 'Bengaluru',
    category: 'International',
  },
  {
    name: 'Mangalore International Airport',
    city: 'Mangalore',
    category: 'International',
  },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Belgaum Airport', city: 'Belgaum', category: 'Domestic' },
  { name: 'Bellary Airport', city: 'Bellary', category: 'Domestic' },
  { name: 'HAL Airport', city: 'Bengaluru', category: 'Defense' },
  { name: 'Yelahanka Air Force Station', city: 'Bengaluru', category: 'Defense' },
  { name: 'Jakkur Airfield', city: 'Bengaluru', category: 'Domestic' },
  { name: 'Bidar Airport', city: 'Bidar', category: 'Defense' },
  { name: 'Bijapur Airport', city: 'Bijapur', category: 'Domestic' },
  {
    name: 'Chitradurga Aeronautical Test Range',
    city: 'Chitradurga',
    category: 'Defense',
  },
  { name: 'Harihar Airport', city: 'Harihar', category: 'Private' },
  { name: ' Hassan Airport', city: 'Hassan', category: 'Domestic' },
  { name: ' Hubli Airport', city: 'Hubli', category: 'Domestic' },
  { name: ' Gulbarga Airport', city: 'Kalaburagi', category: 'Domestic' },
  { name: ' Karwar Airport', city: 'Karwar', category: 'Domestic' },
  { name: ' Mysore Airport', city: 'Mysore', category: 'Domestic' },
  { name: ' Shimoga Airport', city: 'Shimoga', category: 'Domestic' },
  { name: ' Jindal Vijayanagar Airport', city: 'Ballari', category: 'Domestic' },
  { name: ' Raichur Airport', city: 'Raichur', category: 'Domestic' },
] as const

export type KarnatakaStadiumRow = { readonly name: string; readonly location: string }
export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows: readonly KarnatakaStadiumRow[] = [
  {
    name: 'M Chinnaswami Cricket Stadium',
    location: 'Bangalore',
  },
]

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  {
    name: 'Indian Institute of Management (IIM)                                    ',
    location: 'Bengalore',
  },
  { name: 'Indian Institute of Technology (IIT)                                   ', location: 'Dharwad' },
  {
    name: 'Indian Institute of Information Technology (IIIT)                   ',
    location: 'Dharwad',
  },
  {
    name: 'National Institute of Technology (NIT)                                     ',
    location: 'Surathkal',
  },
  {
    name: 'Indian Institute of Information Technology (IIIT)                 ',
    location: 'Raichur',
  },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'Central University for National Law School                            ',
    location: 'Benglalore',
  },
  {
    name: 'Gandhi Institute of Technology & Management (GITAM University)',
    location: 'Bengalore',
  },
  {
    name: 'University of Agricultural Sciences                               ',
    location: 'Bengalore + Dharwad + Raichur',
  },
  {
    name: 'Jagadguru Sri Shivarathreeshwara University (Medicine)    ',
    location: 'Mysore',
  },
  {
    name: 'Central University of Karnataka                                           ',
    location: 'Gulbarga',
  },
  {
    name: 'University of Horticultural Sciences                                                 ',
    location: 'Bagalkot',
  },
  {
    name: 'University of Horticultural & Agricultural Sciences                  ',
    location: 'Shimoga',
  },
] as const

export const famousPersonsOrdered = [
  'Pampa',
  'Ponna',
  'Ranna',
  'K V Puttappa',
  'Bhimsen Joshi',
  'Tippu Sultan – Mysore Tiger',
  'Rahul Dravid',
  'Anil Kumble',
  'Mokshagundam Vishweswaraiah – Father of Indian Engineering',
  'Javagal Srinath – Mysore Express',
  'Purandaradas – Father of Yakshagana',
  'H. D Deva Gowda – The Son of the Soil',
] as const

export const miscellaneousSectionTitle = 'MISCELLANEOUS :' as const
export const miscellaneousIntroParagraph =
  'Gomateswara – Mysore (2000 year old statue of Jain sage carved out of a \n                                                                  single stone)                                          	                                          	                 ' as const

export const miscellaneousBlocks = [
  {
    heading: 'Karnataka ',
    lines: ['1.	Roof of the South '],
  },
  {
    heading: 'Bengaluru ',
    lines: [
      '1.	IT Capital of India ',
      '2.	Space City ',
      '3.	Electronic City of India ',
      '4.	Silicon Valley of India ',
      '5.	Pensioners Paradise ',
      '6.	Science City ',
      '7.	Garden City ',
    ],
  },
  {
    heading: 'Mysore ',
    lines: ['1.	City of Sandals ', '2.	Cultural Capital of Karnataka'],
  },
  {
    heading: 'Mangalore',
    lines: ['1.	Rome of the East ', '2.	Gate Way of Karnataka '],
  },
  {
    heading: 'Coorg',
    lines: ['1.	Scotland of India '],
  },
  {
    heading: 'Hampi',
    lines: ['1.	Ruined City of India'],
  },
  {
    heading: 'Bengaluru ',
    lines: [
      '1.	National Horticulture Research Institute                                     ',
      '2.	National Aeronautical Laboratory                                          ',
      '3.	Indian Plywood Industries Research Institute                          ',
      '4.	Indian Scientific Satellite Project                                          ',
      '5.	Indian Space Research Organisation (ISRO)      ',
      ' ',
      '6.	Indian Institute of Spirtualogy                                             ',
      '7.	Hindustan Aeronautics Limited (HAL)                                       ',
      '8.	Bharat Heavy Electricals Limited (BHEL)                                   ',
      '9.	Bharat Earth Movers Limited (BEML)                                          ',
      '10.	 Hindustan Machine Tools (HMT)       ',
      ' ',
      '11.	 Central Power Research Institute (CPRI)                               ',
      '12.	 Bharat Electronics Limited (BEL)                                                 ',
      '13.	 Kingfisher Airlines                                                                  ',
      '14.	 Indian Institute of Astrophysics                                                 ',
      '15.	 National Institute of Mental Health And Neuro – Sciences (NIMHANS) ',
      '',
      '16.	 National Institute of Fashion Technology                                    ',
      '17.	 National Institute of Design                                               ',
      '18.	 Indian Institute of Sciences (IIS)                                            ',
      '19.	 Jawaharlal Nehru Centre for Advanced Scientific Research   ',
      '20.	 International Institute of Information Technology',
      '21.  Swami Vivekananda Yoga Anusandhana Samsthana                ',
      '22.	 Liquid Propulsion Systems Centre (LPSC) = Bangalore + Tiruvananthapuram',
      '23.	 Indian Deep Space Network (IDSN)                       			',
      '24.	 ISRO Telemetry, Tracking & Command Network                          ',
      '25.	 Institute of Aviation and Medicine 		',
      '',
      '26.	 Indian Cricket Academy 			',
      '27.	 Indian Coffee Board 					',
      '28.	 National Accreditation & Assessement Council (NAAC) ',
      '29.	 India – Israel Innovation Centre (IIIC) 		',
    ],
  },
  {
    heading: 'Mysore ',
    lines: [
      '1.	Central Institute of Indian Languages                                            ',
      '2.	Chemical Food Technological Research Institute                   ',
      '3.	All India Institute of Speech & Hearing                                         ',
      '4.	Defence Food Research Laboratory                                                 ',
      '5.	Central Food Technological Research Institute                         ',
    ],
  },
  {
    heading: 'Hubli ',
    lines: ['1.	South – Western Railway Zone                                                 '],
  },
  {
    heading: 'Belgaum ',
    lines: ['1.	K L E Academy of Hegher Education & Research (Medicine) 	'],
  },
  {
    heading: 'Kolar ',
    lines: ['1.	Sri Devaraj Urs Academy of Higher Education & Research (Medicine) '],
  },
  {
    heading: 'Nagamangla ',
    lines: ['1.	PG Institute for Research in Yoga                                  	'],
  },
  {
    heading: 'Jalahalli ',
    lines: ['1.	Airforce Technical College 				'],
  },
  {
    heading: 'Yelahanka ',
    lines: ['1.	Rail Wheel Factory'],
  },
] as const
