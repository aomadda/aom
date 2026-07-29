export const statesInformationPageTitle = 'STATES – INFORMATION' as const

export const andhraPradeshHeaderLine =
  'ANDHRA PRADESH' as const

export const andhraPradeshBasicFacts = [
  { label: 'CAPITAL', value: 'Hyderabad (from 2024, Amaravati)' },
  { label: 'ESTABLISHED', value: 'November 1st, 1956 and June 2nd, 2014' },
  { label: 'CHIEF MINISTER', value: 'Y S Jagan Reddy' },
  { label: 'GOVERNOR', value: 'B Harichandran' },
  { label: 'RULING PARTY', value: 'Y S R Congress Party' },
  { label: 'HIGH COURT', value: 'Hyderabad' },
  { label: 'STATE ANIMAL', value: 'Krishna Jinka (Black buck)' },
  { label: 'STATE BIRD', value: 'Rama Chiluka (Rose – ringed Parakeet)' },
  { label: 'STATE TREE', value: 'Neem' },
  { label: 'STATE FLOWER', value: 'Jasmine' },
  { label: 'STATE FRUIT', value: 'Mango' },
  { label: 'STATE EMBLEM', value: 'Poorna Ghatam' },
  { label: 'STATE SONG', value: 'Maa Telugu Talliki' },
  { label: 'STATE SPORT', value: 'Kabaddi' },
  { label: 'STATE LANGUAGE(S)', value: 'Telugu (State Language), Hindi' },
] as const

/** Tribes in display order (numbered 1…n on the page). */
export const tribesOrdered = [
  'Bodo',
  'Gadaba',
  'Gutob Gadaba',
  'Bondo',
  'Poraja',
  'Khond',
  'Poroja',
  'Parangiperja',
  'Chenchu',
  'Dongaria',
  'Khonds',
  'Kuttiya Kondhs',
  'Kolam Kondareddis',
  'Konda Savaras',
  'Thoti',
] as const

export const festivalsOrdered = [
  'Ugadi – Telugu New year',
  'Sri Rama Navami',
  'Ekadasi',
  'Varalaxmi Vratam',
  'Vinayaka Chavithi',
  'Vijayadashami',
  'Peerla Panduga',
  'Atla Tadde',
  'Deepavali',
  'Kartika Pournami',
  'Bhogi Sankranti',
  'Kanuma Maha Sivaratri',
  'Holi',
  'Eid – al – Fitr/Ramadan',
  'Rakhi Purnima',
  'Krishnashtami',
  'Christamas',
  'Krishna Pushkaralu',
  'Godavari Pushkaralu',
  'Tungabhadra Pushkaralu',
  'Pelican Festival',
] as const

/** Source order (14 entries; original heading used “Districts (13)”). */
export const districtsOrdered = [
  'Anantpur',
  'Chittoor',
  'East Godavari',
  'West Godavari',
  'Kadapa',
  'Krishna',
  'Kurnool',
  'Sri Potti Sriramulu',
  'Prakasham',
  'Nellore',
  'Srikakulam',
  'Visakhapatnam',
  'Vizianagarm',
  'Guntur',
] as const

export const mainCitiesOrdered = [
  'Kadapa',
  'Guntur',
  'Tenali',
  'Machilipatnam',
  'Vizianagaram',
  'Hindupur',
  'Guntakal',
  'Madanapalle',
  'Nellore',
  'Nandyal',
  'Kakinada',
  'Bapatla',
  'Vijayawada (Krishna River)',
  'Kurnool (Tungabhadra River)',
  'Visakhapatnam – Eastern Goa',
] as const

export const stateDancesOrdered = [
  'Kuchipudi (State Dance)',
  'Vilasini Natyam (Classical Dance)',
  'Andhra Natyam (Folk Dance)',
  'Burrakatha/Jangam Katha (Folk Dance)',
  'Veeranatyam/Veerangam (Folk Dance)',
  'Butta Bommalu (Folk Dance)',
  'Tholu Bommalaata (Folk Dance)',
  'Tappeta Gullu (Folk Dance)',
  'Ahimsa/Dhimsa (Folk Dance)',
  'Lambaadi (Folk Dance)',
  'Kolatam/Kolannalu (Folk Dance)',
] as const

export const boundaryStatesOrdered = [
  'Telangana',
  'Chhattisgarh',
  'Odisha',
  'Karnataka',
  'Tamil Nadu',
  'Bay of Bengal',
] as const

export type AndhraPradeshExtendedFact =
  | { readonly label: string; readonly kind: 'text'; readonly value: string }
  | { readonly label: string; readonly kind: 'ordered'; readonly items: readonly string[] }

export const andhraPradeshExtendedFacts: readonly AndhraPradeshExtendedFact[] = [
  {
    label: 'STATE DANCE(S)',
    kind: 'ordered',
    items: stateDancesOrdered,
  },
  {
    label: 'BOUNDARY STATES',
    kind: 'ordered',
    items: boundaryStatesOrdered,
  },
  {
    label: 'AREA',
    kind: 'text',
    value: '1, 62, 975 sq km (7th)',
  },
  {
    label: 'DENSITY',
    kind: 'text',
    value: '308 per km2',
  },
  {
    label: 'POPULATION (2011)',
    kind: 'text',
    value:
      '4,93,86,799 (10th) Male = 2,47,38,068 & Female = 2,46,48,731 Male : Female = 1000 : 996',
  },
  {
    label: 'LITERACY (2011)',
    kind: 'text',
    value: '67.41%',
  },
  {
    label: 'ASSEMBLY',
    kind: 'text',
    value: 'Bicameral Assembly Seats = 175 & Legislative Council = 54',
  },
  {
    label: 'LOK SABHA',
    kind: 'text',
    value: '25',
  },
  {
    label: 'RAJYA SABHA',
    kind: 'text',
    value: '11',
  },
  {
    label: 'TRIBES',
    kind: 'ordered',
    items: tribesOrdered,
  },
  {
    label: 'FESTIVALS',
    kind: 'ordered',
    items: festivalsOrdered,
  },
  {
    label: 'DISTRICTS',
    kind: 'ordered',
    items: districtsOrdered,
  },
  {
    label: 'MAIN CITIES',
    kind: 'ordered',
    items: mainCitiesOrdered,
  },
]

export const templesSectionTitle = 'TEMPLES/CHURCH/MASJID' as const
export const templesRows = [
  { name: 'Sri Venkateswara Swami Temple', location: 'Tirupati' },
  { name: 'Mallikarjun Swami Temple', location: 'Sri Sailam' },
  { name: 'Ahobila Temple/Caves', location: 'Ahobilam' },
  { name: 'Ameen Peer Darga', location: 'Kadapa' },
  { name: 'Kanaka Durga Temple', location: 'Vijayawada' },
  { name: 'Christ Lutheran Church', location: 'Narsapur' },
  { name: 'Shahi Jamia Masjid', location: 'Adoni (Kurnool)' },
  { name: 'Gunadala Church', location: 'Vijayawada' },
  { name: 'Srikalahastheeswara Temple', location: 'Srikalahasti (Chittoor)' },
  { name: 'Varaha Laxmi Narasimha Temple', location: 'Simhachalam (Visakhapatnam)' },
  { name: 'Annavaram Temple', location: 'Annavaram' },
  { name: 'Lepakshi Temple', location: 'Mahasthupa (Amaravati)' },
] as const

export const industriesSectionTitle = 'INDUSTRIES :' as const
export const industriesRows = [
  { name: 'Vizag Steel/Rastriya Ispat Nigam Limited', location: 'Visakhapatnam', year: '1982' },
  { name: 'Tummalapalle Uranium Mine', location: 'Tummalapalle (Kadapa)', year: '2011' },
  { name: 'Agnigundala Copper Mine', location: 'Guntur', year: '---' },
  { name: 'Kia Motors India', location: 'Anantapur', year: '2017' },
] as const

export const powerPlantsSectionTitle = 'POWER PLANTS :' as const
export const powerPlantsRows = [
  { name: 'Simhadri Super Thermal Power Plant', year: '2002', location: 'Visakhapatnam' },
  { name: 'Sri Damodaram Sanjeevaiah Thermal Power Station', year: '--', location: 'Krishnapatnam (Nellore)' },
  { name: 'Vizag Thermal Power Station', year: '---', location: 'Visakhapatnam' },
  { name: 'Dr. Narla Tatarao Thermal Power Plant', year: '--', location: 'Vijayawada' },
  { name: 'Rayalaseema Thermal Power Plant', year: '--', location: 'Muddanur (Kadapa)' },
  { name: 'Meenakshi Thermal Power Station', year: '---', location: 'Krishnapatnam (Nellore)' },
  { name: 'Simhapuri Thermal Power Station', year: '---', location: 'Krishnapatnam (Nellore)' },
  { name: 'Godavari Gas Power Plant', year: '---', location: 'Jegurupadu (East Godavari)' },
  { name: 'Sembcorp Energy India Limited', year: '--', location: 'Krishnapatnam (Nellore)' },
  { name: 'Neelam Sanjiva Reddy Sagar Hydel Power Plant', year: '--', location: '--' },
  { name: 'Upper Sileru Hydroelectrical Power Plant', year: '--', location: 'Sileru (Visakhapatnam)' },
  { name: 'Lower Sileru Hydroelectric Power Plant', year: '---', location: 'East Godavari' },
  { name: 'Nagarjuna Sagar Right Canal Hydroelectrical P.S', year: '---', location: 'Guntur' },
  { name: 'Penna Ahobilam Hydroelectrical Power Plant', year: '---', location: 'Korrakodu (Anantapur)' },
  { name: 'Srisailam Right Bank Hydroelectrical Power Plant', year: '---', location: 'Srisailam (Kurnool)' },
  { name: 'Polavaram Hydroelectrical Power Plant', year: '---', location: 'Anguluru (East Godavari)' },
] as const

export const riversOrdered = [
  'Godavari',
  'Krishna River',
  'Nagavali River',
  'Papagni River',
  'Chitravati River',
  'Penna River',
  'Thungabhadra River',
  'Vamsadhara Riv',
  'Vedavathi River',
  'Sileru River',
  'Kundu River',
  'Maldevi River',
  'Cheyyeur River',
  'Budameru River (The Sorrow of Vijayawada)',
] as const

export const famousPersonsOrdered = [
  'Tanguturi Prakasham – Andhra Kesari & Andhra Gandhi',
  'Potti Sriramulu – Amarjeevi',
  'Krishana Devaraya – Andhra Bhojan',
] as const

export const lakesSectionTitle = 'LAKES :' as const
export const lakesRows = [
  { name: 'Pulicat Lake', location: 'Sullurpet', river: '--' },
  { name: 'Kolleru Lake', location: '--', river: '--' },
  { name: 'Nagarjun Sagar Lake', location: 'Nalgonda', river: '--' },
] as const

export const projectsDamsSectionTitle = 'PROJECTS/ DAMS :' as const
export const projectsDamsRows = [
  { name: 'Sriram Sagar Reservoir', river: 'Godavari', location: '--' },
  { name: 'Srisailam Dam', river: 'Krishna', location: '--' },
  { name: 'Almatty Irrigation Project', river: '--', location: '--' },
  { name: 'Dindi Reservoir', river: 'Krishna', location: '--' },
  { name: 'Somasila River', river: 'Penna', location: '--' },
  { name: 'Nizam Sagar Irrigation Project', river: '--', location: '--' },
] as const

export const waterfallsBeachSectionTitle = 'WATERFALLS/BEACH :' as const
export const waterfallsBeachRows = [
  { name: 'Ethipothala Waterfalls', location: 'Guntur' },
  { name: 'Ubbalamadugu Waterfalls (Tana Waterfalls)', location: 'Chittoor' },
  { name: 'Talakona Waterfalls', location: 'Tirupati' },
  { name: 'Kailasakona Waterfalls', location: 'Narayanavanam (Chittoor)' },
  { name: 'Gundalakona Waterfalls', location: '---' },
  { name: 'Gunjana Waterfalls', location: '---' },
  { name: 'Suryalanka Beach', location: 'Bapatla' },
] as const

export const portsPeakSectionTitle = 'PORTS/PEAK :' as const
export const portsPeakRows = [
  { name: 'Vizag Port', location: 'Visakhapatnam' },
  { name: 'Arma Konda (Seethamma Konda)', location: '---' },
] as const

export const hillsValleyCavesSectionTitle = 'HILLS/VALLEY/CAVES:' as const
export const hillsValleyCavesRows = [
  { name: 'Horsley Hills', location: 'Visakhapatnam' },
  { name: 'Papi Hills', location: '--' },
  { name: 'Araku Valley', location: 'Visakhapatnam' },
  { name: 'Belum & Borra Caves', location: '--' },
] as const

export const biosphereSectionTitle = 'BIOSPHERE RESERVES :' as const
export const biosphereRows = [
  {
    name: 'Sheshachalam Biosphere Reserve',
    year: '2010',
    location: 'Chittoor & Kadapa Districts',
    area: '4756 (sq.km)',
  },
] as const

export const tigerReservesSectionTitle = 'TIGER RESERVES :' as const
export const tigerReservesRows = [
  {
    name: 'Nagarjun Sagar – Srisailam T.R',
    year: '1983',
    location: 'Kurnool, Guntur, Prakasam Mahabubnagar & Nalgonda',
    area: '3,728 (sq.km)',
  },
] as const

export const elephantReservesSectionTitle = 'ELEPHANT RESERVES :' as const
export const elephantReservesRows = [
  {
    name: 'Rayala Elephant Reserve',
    year: '2003',
    location: 'Chittoor',
    area: '766 (sq.km)',
  },
] as const

export const ramsarSitesSectionTitle = 'RAMSAR SITES :' as const
export const ramsarSitesRows = [
  {
    name: 'Kolleru Lake',
    year: '2002',
    location: 'Eluru & West Godavari Districts',
    area: '900 (sq.km)',
  },
] as const

export const nationalParksSectionTitle = 'NATIONAL PARKS :' as const
export const nationalParksRows = [
  {
    name: 'Sri Venkateswara National Park',
    year: '1989',
    location: 'Chittoor & Cuddapah District',
    area: '353 (sq.km)',
  },
  {
    name: 'Rajiv Gandhi National Park',
    year: '2005',
    location: 'Rameswaram (Cuddapah District)',
    area: '2.4',
  },
  {
    name: 'Papikonda National Park',
    year: '2008',
    location: 'Rajamahendravaram',
    area: '1012.85',
  },
] as const

export const wildlifeSanctuariesSectionTitle = 'WILDLIFE SANCTUARIES :' as const
export const wildlifeSanctuariesRows = [
  { name: 'Nellapattu W.L.S', year: '--', location: '---', area: '----' },
  { name: 'Kolleru W.L.S', year: '--', location: 'Eluru', area: '673 (sq.km)' },
  { name: 'Coringa W.L.S', year: '--', location: '--', area: '--' },
  { name: 'Pulicat Lake Bird Sanctuary', year: '--', location: '--', area: '--' },
  { name: 'Rajiv Gandhi W.L.S', year: '--', location: 'Nagarjun Sagar – Srisailam', area: '--' },
  { name: 'Uppalapadu Bird Sanctuary', year: '--', location: 'District District', area: '--' },
  {
    name: 'Telineelapuram & Telukunchi Bird Sanctuary',
    year: '--',
    location: 'Srikakulam',
    area: '--',
  },
  { name: 'Rollapadu W.L.S', year: '--', location: '--', area: '--' },
  { name: 'Atapaka Bird Sanctuary', year: '--', location: '--', area: '--' },
  { name: 'Kambalakonda W.L.S', year: '--', location: '--', area: '--' },
  { name: 'Gundla Brahmeswara Bird Sanctuary', year: '--', location: 'Nandyal', area: '--' },
  { name: 'Koundinya W.L.S', year: '1990', location: 'Chittoor', area: '357.6' },
  { name: 'Krishna W.L.S', year: '--', location: 'Machilipatnam', area: '194.81' },
  { name: 'Sri Penusila Narasimha W.L.S', year: '--', location: 'Nellore', area: '1030.85' },
  { name: 'Sri Lankamalleswara W.L.S', year: '--', location: 'Kadapa District', area: '464.42' },
] as const

export const zooMuseumsSectionTitle = 'ZOO PARKS/MUSEUMS :' as const
export const zooMuseumsRows = [
  { name: 'Indira Gandhi Zoological Park', city: 'Visakhapatnam' },
  { name: 'Sri Venkateswara Zoological Park', city: 'Tirupati' },
  { name: 'Amaravati Archaeological Museum', city: 'Visakhapatnam' },
  { name: 'Telugu Cultural Museum', city: 'Visakhapatnam' },
  { name: 'INS Kursura Submarine Museum', city: 'Visakhapatnam' },
] as const

export const internationalAirportsSectionTitle = 'INTERNATIONAL AIRPORTS :' as const
export const internationalAirportsRows = [
  { name: 'Visakhapatnam International Airport', city: 'Visakhapatnam', category: 'International' },
  { name: 'Vijayawada International Airport', city: 'Gannavaram', category: 'International' },
] as const

export const airportsSectionTitle = 'AIRPORTS :' as const
export const airportsRows = [
  { name: 'Bobbili Airport', city: 'Badangi', category: 'Defence' },
  { name: 'Donakonda Airport', city: 'Donakonda', category: 'Domestic' },
  { name: 'Kadapa Airport', city: 'Kadapa', category: 'Domestic' },
  { name: 'Kuppam Airport', city: 'Kuppam', category: 'Domestic' },
  { name: 'Kurnool Airport', city: 'Kurnool', category: 'Domestic' },
  { name: 'Nagarjuna Sagar Airport', city: 'Nagarjuna Sagar', category: 'Domestic' },
  { name: 'Nellore Airport', city: 'Nellore', category: 'Domestic' },
  { name: 'Sri Sathya Sai Airport', city: 'Puttaparthi', category: 'Private' },
  { name: 'Rajahmundry Airport', city: 'Rajahmundry', category: 'Domestic' },
  { name: 'Tirupati Airport', city: 'Tirupati', category: 'Domestic' },
  { name: 'Bhogapuram Airport', city: 'Visakhapatnam', category: 'Domestic' },
] as const

export const iitSectionTitle = 'IIT/IIM/NIT/IIIT/AIIMS :' as const
export const iitRows = [
  { name: 'Indian Institute of Technology (IIT)', location: 'Tirupati' },
  { name: 'Indian Institute of Management (IIM)', location: 'Visakhapatnam' },
  { name: 'All India Institute of Medical Sciences (AIIMS)', location: 'Guntur (Mangalagiri)' },
  { name: 'National Institute of Technology (NIT)', location: 'Kurnool' },
  { name: 'National Institute of Technology (NIT)', location: 'Tadepalligudem' },
  { name: 'Indian Institute of Information Technology (IIIT)', location: 'Kurnool' },
] as const

export const universitiesSectionTitle = 'UNIVERSITIES :' as const
export const universitiesRows = [
  {
    name: 'Gandhi Institute of Technology & Management (GITAM University)',
    location: 'Visakhapatnam',
  },
  { name: 'Koneru Laxmaiah University', location: 'Guntur' },
  { name: 'Vignan University', location: 'Guntur' },
  { name: 'NTR University of Health Science', location: 'Vijayawada' },
] as const

export const stadiumsSectionTitle = 'STADIUMS :' as const
export const stadiumsRows = [
  { name: 'Apca – Vdca Stadium', location: 'Visakhapatnam' },
  { name: 'Indira Gandhi Stadium', location: 'Vijayawada' },
] as const

export const miscellaneousBlocks = [
  {
    heading: 'ANDHRA PRADESH',
    lines: ['1. Rice Bowl of India', '2. Egg Bowl of Asia', '3. Cyber State of India'],
  },
  {
    heading: 'VIJAYAWADA',
    lines: ['1. The Place of Victory'],
  },
  {
    heading: 'GUNTUR',
    lines: ['1. City of Chillies'],
  },
  {
    heading: 'VISAKHAPATNAM',
    lines: ['1. The City of Destiny', '2. Eastern Goa'],
  },
  {
    heading: 'TIRUPATI',
    lines: [
      '1. Spiritual Capital of Andhra Pradesh',
      '2. Financial Capital of Andhra Pradesh',
      '3. Temple of Seven Hills',
    ],
  },
  {
    heading: 'KAKINADA',
    lines: ['1. Pensioners Paradise', '2. City of Fertilizers', '3. City of Kaja'],
  },
  {
    heading: 'PIDUGRURALLA',
    lines: ['1. Lime City'],
  },
  {
    heading: 'RAJAHMUNDRY',
    lines: ['1. Cultural Capital of Andhra Pradesh'],
  },
  {
    heading: 'BHIMAVARAM',
    lines: ['1. City of Prawns', '2. Second Bardoli of India'],
  },
  {
    heading: 'TENALI',
    lines: ['1. Andhra Paris'],
  },
  {
    heading: 'TELUGU',
    lines: ['1. Italian of the East'],
  },
  {
    heading: 'GODAVARI',
    lines: ['1. Vridha Ganga', '2. Lifeline of Andhra Pradesh'],
  },
  {
    heading: 'VISAKHAPATNAM',
    lines: [
      '1. Indian Institute of Petroleum & Energy',
      '2. Naval Science and Technological Laboratory',
      '3. National Ship Design and Research Centre',
      '4. Headquarter of Southern Coast Railway (18th Zone)',
    ],
  },
  {
    heading: 'TIRUPATI',
    lines: [
      '1. Indian Institute of Science Education & Research (IISER)',
      '2. National Atmospheric Research Laboratory',
      '3. Indian Culinary Institute and Noida',
      '4. Central Sanskrit Institute',
    ],
  },
  {
    heading: 'VIJAYAWADA',
    lines: ['1. School of Planning & Architecture', '2. UIDAI Aadhar Seva Kendra'],
  },
  {
    heading: 'RAJAHMUNDRY',
    lines: ['1. Central Tobacco Research Institute'],
  },
  {
    heading: 'ANANTPUR',
    lines: ['1. Central Institute of Plastic Engineering & Technology'],
  },
  {
    heading: 'KADAPA',
    lines: ['1. Academy of Adventure Sports – Gandikota'],
  },
  {
    heading: 'NELLORE',
    lines: ['1. Cyber Grameen Centre (India’s first) – Venkatachalam village'],
  },
  {
    heading: 'WEST GODAVARI',
    lines: ['1. Godavari Mega Aqua Food Park (India’s 1st) – Bhimavaram'],
  },
  {
    heading: 'PEDAVEGI',
    lines: ['1. National Palm Oil Research Centre'],
  },
] as const
