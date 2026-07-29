export type WhoIsWhoItem = {
  index: number
  designation: string
  nameAndOrdinal: string
  constituency?: string
}

export const constitutionalOfficials = {
  sectionTitle: 'CONSTITUTIONAL OFFICIALS',
  items: [
    {
      index: 1,
      designation: 'President Of India',
      nameAndOrdinal: 'Smt. Droupadi Murmu (15th)',
    },
    {
      index: 2,
      designation: 'Vice President Of India',
      nameAndOrdinal: 'Shri C. P. Radhakrishnan (14th)',
    },
    {
      index: 3,
      designation: 'Chief Justice Of India',
      nameAndOrdinal: 'Justice Surya Kant (53rd)',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const politicalOfficials = {
  sectionTitle: 'POLITICAL OFFICIALS',
  items: [
    {
      index: 1,
      designation: 'Prime Minister Of India',
      nameAndOrdinal: 'Narendra Modi (BJP)',
    },
    {
      index: 2,
      designation: 'Lok Sabha Speaker',
      nameAndOrdinal: 'Om Birla (BJP)',
    },
    {
      index: 3,
      designation: 'Lok Sabha Deputy Speaker',
      nameAndOrdinal: '---',
    },
    {
      index: 4,
      designation: 'Home Minister',
      nameAndOrdinal: 'Amit Shah',
    },
    {
      index: 5,
      designation: 'Opposite Leader In Lok Sabha',
      nameAndOrdinal: 'Shri Rahul Gandhi',
    },
    {
      index: 6,
      designation: 'Rajya Sabha Chairman',
      nameAndOrdinal: 'Shri C. P. Radhakrishnan (Vice President of India)',
    },
    {
      index: 7,
      designation: 'Rajya Sabha Deputy Chairman',
      nameAndOrdinal: 'Harivansh Narayan Singh',
    },
    {
      index: 8,
      designation: 'Opposite Leader in Rajya Sabha',
      nameAndOrdinal: 'Shri Mallikarjun Kharge (Congress)',
    },
    {
      index: 9,
      designation: 'Lok Sabha Secretary General',
      nameAndOrdinal: 'Shri Utpal Kumar Singh (17th)',
    },
    {
      index: 10,
      designation: 'Rajya Sabha Secretary General',
      nameAndOrdinal: 'Shri Pramod Chandra Mody',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const defenseServicesOfficials = {
  sectionTitle: 'DEFENCE & SECURITY',
  items: [
    {
      index: 1,
      designation: 'Army Chief',
      nameAndOrdinal: 'General Upendra Dwivedi (30th)',
    },
    {
      index: 2,
      designation: 'Air Force Chief',
      nameAndOrdinal: 'Air Chief Marshal Amar Preet Singh (28th)',
    },
    {
      index: 3,
      designation: 'Navy Chief',
      nameAndOrdinal: 'Admiral Dinesh Kumar Tripathi (26th)',
    },
    {
      index: 4,
      designation: 'Indian Coast Guard',
      nameAndOrdinal: '----',
    },
    {
      index: 5,
      designation: 'BSF – Boarder & Security Force',
      nameAndOrdinal: 'Shri Praveen Kumar',
    },
    {
      index: 6,
      designation: 'CRPF – Central Reserve Police Force',
      nameAndOrdinal: 'Shri Gyanendra Pratap Singh',
    },
    {
      index: 7,
      designation: 'CISF – Central Industrial Security Force',
      nameAndOrdinal: 'Shri Praveer Ranjan',
    },
    {
      index: 8,
      designation: 'National Investigation Agency',
      nameAndOrdinal: 'Shri Rakesh Aggarwal',
    },
    {
      index: 9,
      designation: 'CBI – Central Bureau Of Investigation',
      nameAndOrdinal: 'Shri Praveen Sood',
    },
    {
      index: 10,
      designation: 'IB – Intelligence Bureau',
      nameAndOrdinal: 'Shri Tapan Kumar Deka',
    },
    {
      index: 11,
      designation: 'CVC – Central Vigilance Commissionar',
      nameAndOrdinal: 'Shri Praveen Kumar Srivastava',
    },
    {
      index: 12,
      designation: 'RAW – Research & Analysis Wing (RAW)',
      nameAndOrdinal: 'Shri Parag Jain',
    },
    {
      index: 13,
      designation: 'NSG – National Security Guard',
      nameAndOrdinal: 'Shri Brighu Srinivasan',
    },
    {
      index: 14,
      designation: 'RPF – Railway Protection Force',
      nameAndOrdinal: 'Ms. Sonali Mishra',
    },
    {
      index: 15,
      designation: 'ITBP – Indo Tibetan Boarder Police',
      nameAndOrdinal: 'Shri Shatrujeet Singh Kapoor',
    },
    {
      index: 16,
      designation: 'Chiefs of Staff Committee',
      nameAndOrdinal: '---',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const headsOfGovernmentDepartment = {
  sectionTitle: 'HEADS OF GOVERNMENT DEPARTMENT',
  items: [
    {
      index: 1,
      designation: 'NITI (National Institution for Transforming India) Aayog Chairman',
      nameAndOrdinal: 'Narendra Modi',
    },
    {
      index: 2,
      designation: 'NITI Aayog Deputy Chairman',
      nameAndOrdinal: 'Shri Suman Bery',
    },
    {
      index: 3,
      designation: 'NITI Aayog CEO',
      nameAndOrdinal: 'Shri B.V.R. Subrahmanyam',
    },
    {
      index: 4,
      designation: 'Chief Election Commissioner of India',
      nameAndOrdinal: 'Shri Gyanesh Kumar',
    },
    {
      index: 5,
      designation: 'Other Election Commissioners of India',
      nameAndOrdinal: '------',
    },
    {
      index: 6,
      designation: 'National Statistical Commission, Chairman',
      nameAndOrdinal: 'Prof. Rajeeva Laxman Karandikar',
    },
    {
      index: 7,
      designation: 'NHRC – National Human Rights Commission',
      nameAndOrdinal: 'Justice V. Ramasubramanian',
    },
    {
      index: 8,
      designation: 'Law Commission of India, Chairman',
      nameAndOrdinal: 'Justice (Retd.) Dinesh Maheshwari',
    },
    {
      index: 9,
      designation: 'CCI – Competition Commission of India',
      nameAndOrdinal: 'Smt. Ravneet Kaur',
    },
    {
      index: 10,
      designation: 'CIC – Central Information Commission',
      nameAndOrdinal: 'Shri Raj Kumar Goyal',
    },
    {
      index: 11,
      designation: 'Confederation of Indian Industry (CII)',
      nameAndOrdinal: 'Chandrajit Banarjee',
    },
    {
      index: 12,
      designation: 'National Commission for Women, Chairman',
      nameAndOrdinal: 'Smt. Vijaya Kishore Rahatkar',
    },
    {
      index: 13,
      designation: 'National Commission for Protection for Child Rights',
      nameAndOrdinal: 'Shri Valeti Premchand',
    },
    {
      index: 14,
      designation: 'National Commission for BC, Chairman',
      nameAndOrdinal: 'Shri Hansraj Gangaram Ahir',
    },
    {
      index: 15,
      designation: 'National Commission for SC, Chairman',
      nameAndOrdinal: 'Shri Kishor Makwana',
    },
    {
      index: 16,
      designation: 'National Commission for ST, Chairman',
      nameAndOrdinal: '----',
    },
    {
      index: 17,
      designation: 'National Commission for Minorities, Chairman',
      nameAndOrdinal: '----',
    },
    {
      index: 18,
      designation:
        'National Consumer Disputes Redressal Commission, Chairman (NCDRC)',
      nameAndOrdinal: 'Justice Amreshwar Pratap Sahi',
    },
    {
      index: 19,
      designation: 'University Grant Commission (UGC)',
      nameAndOrdinal: 'Dr. Vineet Joshi',
    },
    {
      index: 20,
      designation: 'Union Public Service Commission (UPSC)',
      nameAndOrdinal: 'Dr. Ajay Kumar',
    },
    {
      index: 21,
      designation: 'Atomic Energy Commission',
      nameAndOrdinal: 'Dr. Ajit Kumar Mohanty',
    },
    {
      index: 22,
      designation: 'Indian Space Research Organization (ISRO)',
      nameAndOrdinal: 'Dr. V. Narayanan',
    },
    {
      index: 23,
      designation: 'Defence Research & Development Organization (DRDO)',
      nameAndOrdinal: 'Dr. Samir V. Kamat',
    },
    {
      index: 24,
      designation: 'Baba Atomic Research Centre (BARC)',
      nameAndOrdinal: 'Shri Vivek Bhasin',
    },
    {
      index: 25,
      designation: 'Prasar Bharati, Chairman',
      nameAndOrdinal: '----',
    },
    {
      index: 26,
      designation: 'Unique Identification Authority of India (UIDAI), Chairman',
      nameAndOrdinal: 'Shri Neelkanth Mishra',
    },
    {
      index: 27,
      designation: 'National Diary Development Board (NDDB)',
      nameAndOrdinal: '----',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const headsOfFinancialInstitutions = {
  sectionTitle: 'HEADS OF FINANCIAL BODIES',
  items: [
    {
      index: 1,
      designation: 'Finance Commission, Chairman (16th)',
      nameAndOrdinal: 'Dr. Arvind Panagariya',
    },
    {
      index: 2,
      designation: 'PM’s Economic Advisory Council, Chairman',
      nameAndOrdinal: 'Prof. S. Mahendra Dev',
    },
    {
      index: 3,
      designation: 'Reserve Bank of India, Governor (RBI)',
      nameAndOrdinal: 'Shri Sanjay Malhotra',
    },
    {
      index: 5,
      designation: 'Securities & Exchange Board of India (SEBI)',
      nameAndOrdinal: 'Shri Tuhin Kanta Pandey',
    },
    {
      index: 6,
      designation:
        'National Bank for Agricultural & Rural Development (NABARD)',
      nameAndOrdinal: 'Shri Shaji K. V.',
    },
    {
      index: 7,
      designation: 'Central Board of Direct Taxes (CBDT)',
      nameAndOrdinal: 'Shri Ravi Agrawal',
    },
    {
      index: 7,
      designation: 'Central Board of Excise & Customs (CBEC)',
      nameAndOrdinal: '----',
    },
    {
      index: 8,
      designation: 'Central Board of Indirect Taxes & Customs (CBIC)',
      nameAndOrdinal: 'Shri Vivek Chaturvedi',
    },
    {
      index: 9,
      designation: 'Telecom Regulator Authority of India (TRAI)',
      nameAndOrdinal: 'Shri Anil Kumar Lahoti',
    },
    {
      index: 10,
      designation:
        'Insurance Regulator Development Authority of India (IRDAI)',
      nameAndOrdinal: 'Shri Ajay Seth',
    },
    {
      index: 11,
      designation:
        'Federation of Indian Chamber of Commerce & Industry (FICCI)',
      nameAndOrdinal: 'Shri Anant Goenka (President)',
    },
    {
      index: 12,
      designation: 'Life Insurance Corporation (LIC)',
      nameAndOrdinal: 'Shri R. Doraiswamy',
    },
    {
      index: 13,
      designation: 'Pension Fund Regulatory Development Authority (PFRDA)',
      nameAndOrdinal: 'Shri Sivasubramanian Ramann',
    },
    {
      index: 14,
      designation:
        'National Association of Software & Services Companies (NASSCOM), Chairman',
      nameAndOrdinal: 'Sindhu Gangadharan',
    },
    {
      index: 15,
      designation: 'NASSCOM President',
      nameAndOrdinal: 'Rajesh Nambiar',
    },
    {
      index: 16,
      designation:
        'Associated Chamber of Commerce & Industry of India (ASSOCHAM)',
      nameAndOrdinal:
        '--- Shri Nirmal Kumar Minda (President)\n--- Deepak Sood (Secretary General)',
    },
    {
      index: 17,
      designation: 'Small Industrial Development Bank of India (SIDBI)',
      nameAndOrdinal: 'Manoj Mittal',
    },
    {
      index: 18,
      designation: 'National Housing Bank (NHB)',
      nameAndOrdinal: '----',
    },
    {
      index: 19,
      designation: 'World Bank',
      nameAndOrdinal: '----',
    },
    {
      index: 20,
      designation: 'International Monetary Fund (IMF)',
      nameAndOrdinal: '----',
    },
    {
      index: 21,
      designation: 'Asian Development Bank (ADB)',
      nameAndOrdinal: '----',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const bureaucrats = {
  sectionTitle: 'BUREAUCRATS',
  items: [
    {
      index: 1,
      designation: 'National Advisory Council (NAC), Chairman',
      nameAndOrdinal: '----',
    },
    {
      index: 2,
      designation: 'National Security Advisor',
      nameAndOrdinal: 'Shri Ajit Doval, KC',
    },
    {
      index: 3,
      designation: 'Cabinet Secretary of India',
      nameAndOrdinal: 'Dr. T. V. Somanathan',
    },
    {
      index: 4,
      designation: 'Chief Secretary of President',
      nameAndOrdinal: 'Ms. Deepti Umashankar',
    },
    {
      index: 5,
      designation: 'Chief Secretary to Vice President',
      nameAndOrdinal: 'Shri Amit Khare',
    },
    {
      index: 6,
      designation: 'Principle Secretary to PM',
      nameAndOrdinal: 'Dr. Pramod Kumar Mishra',
    },
    {
      index: 7,
      designation: 'Home Secretary of India',
      nameAndOrdinal: 'Shri Govind Mohan',
    },
    {
      index: 8,
      designation: 'Foreign Secretary of India',
      nameAndOrdinal: 'Shri Vikram Misri',
    },
    {
      index: 9,
      designation: 'Finance Secretary of India',
      nameAndOrdinal: 'Shri Ajay Seth',
    },
    {
      index: 10,
      designation: 'Commerce Secretary of India',
      nameAndOrdinal: 'Shri Rajesh Agrawal',
    },
    {
      index: 11,
      designation: 'Defence Secretary of India',
      nameAndOrdinal: 'Shri Rajesh Kumar Singh',
    },
    {
      index: 12,
      designation: 'Public Accounts Committee (PAC), Chairman',
      nameAndOrdinal: 'Shri K. C. Venugopal',
    },
    {
      index: 13,
      designation: 'Comptroller & Auditor General (CAG)',
      nameAndOrdinal: 'Shri K. Sanjay Murthy',
    },
    {
      index: 14,
      designation: 'Attorney General of India',
      nameAndOrdinal: 'Shri R. Venkataramani',
    },
    {
      index: 15,
      designation: 'Solicitor General of India',
      nameAndOrdinal: 'Shri Tushar Mehta',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const headsOfSports = {
  sectionTitle: 'HEADS OF SPORTS',
  items: [
    {
      index: 1,
      designation: 'International Cricket Council (ICC)',
      nameAndOrdinal:
        'Shri Jay Shah (Chairman) Imran Khwaja – Singapore (Deputy Chairman) Manu Sahney – India (CEO)',
    },
    {
      index: 2,
      designation: 'Indian Premier League (IPL), Chairman',
      nameAndOrdinal: 'Shri Arun Singh Dhumal',
    },
    {
      index: 3,
      designation: 'All India Tennis Association President',
      nameAndOrdinal: 'Dr. Anil Jain',
    },
    {
      index: 4,
      designation: 'Indian Hockey Federation, President',
      nameAndOrdinal: 'Dr. Dilip Tirkey',
    },
    {
      index: 5,
      designation: 'International Hockey Federation (FIH)',
      nameAndOrdinal: 'Dato Tayyab Ikram (Macau)',
    },
    {
      index: 6,
      designation: 'FIFA President (FOOTBALL)',
      nameAndOrdinal: 'Gianni Infantino (Switzerland)',
    },
    {
      index: 7,
      designation: 'International Olympic Committee, President',
      nameAndOrdinal: 'Kirsty Coventry',
    },
    {
      index: 8,
      designation: 'Indian Olympic Association, President',
      nameAndOrdinal: 'Dr. P. T. Usha',
    },
    {
      index: 9,
      designation: 'Board of Control for Cricket in India (BCCI)',
      nameAndOrdinal:
        'Shri Mithun Manhas (President) Rajiv Shukla (Vice President) Jay Shah (Secretary)',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const cabinetMinisters = {
  sectionTitle: 'CABINET MINISTERS',
  items: [
    {
      index: 1,
      designation:
        'Ministry of Personnel, Public grievances and Pensions Department of Atomic Energy Department of space All important policy issues and all other portfolios not allocated to any minister',
      nameAndOrdinal: 'Narendra Modi',
      constituency: 'Varanasi, Uttar Pradesh',
    },
    {
      index: 2,
      designation: 'Defense',
      nameAndOrdinal: 'Rajnath Singh',
      constituency: 'Lucknow, Uttar Pradesh',
    },
    {
      index: 3,
      designation: 'Home Affairs',
      nameAndOrdinal: 'Amit Shah',
      constituency: 'Gandhi Nagar, Gujarat',
    },
    {
      index: 4,
      designation:
        'Road Transports & Highways + Micro Small & Medium Enterprises',
      nameAndOrdinal: 'Nitin Jairam Gadkari',
      constituency: 'Nagpur – Maharashtra',
    },
    {
      index: 5,
      designation: 'Chemicals and Fertilizers',
      nameAndOrdinal: 'D V Sadananda Gowda',
      constituency: 'Bengaluru North, Karnataka',
    },
    {
      index: 6,
      designation: 'Finance + Corporate Affairs',
      nameAndOrdinal: 'Nirmala Seetharaman',
      constituency: 'Rajya Sabha – Karnataka',
    },
    {
      index: 7,
      designation: 'Consumer Affairs + Food and Public Distribution',
      nameAndOrdinal: 'Ramvilas Paswan',
      constituency: 'Rajya Sabha – Hajipur (Bihar)',
    },
    {
      index: 8,
      designation:
        'Agriculture & Farmer Welfares + Rural Development + Panchayat Raj',
      nameAndOrdinal: 'Narendra Singh Tomar',
      constituency: 'Morena – Madhya Pradesh',
    },
    {
      index: 9,
      designation:
        'Law and Justice + Communications + Electronics and Information Technology',
      nameAndOrdinal: 'Ravi Shankar Prasad',
      constituency: 'Patna Sahib – Bihar',
    },
    {
      index: 10,
      designation: 'Food Processing Industries',
      nameAndOrdinal: 'Harsimrat Kaur Badal',
      constituency: 'Bathinda – Punjab',
    },
    {
      index: 11,
      designation: 'Social Justice and Empowerment',
      nameAndOrdinal: 'Thaawar Chand Gehlot',
      constituency: 'Rajya Sabha – Madhya Pradesh',
    },
    {
      index: 12,
      designation: 'External Affairs',
      nameAndOrdinal: 'Subrahmanyam Jaishankar',
      constituency: 'Rajya Sabha – Gujarat',
    },
    {
      index: 13,
      designation: 'Human Resource Development',
      nameAndOrdinal: 'Ramesh Pokhriyal Nishank',
      constituency: 'Haridwar – Uttarakhand',
    },
    {
      index: 14,
      designation: 'Tribal Affairs',
      nameAndOrdinal: 'Arjun Munda',
      constituency: 'Khunti – Jharkhand',
    },
    {
      index: 15,
      designation: 'Women and Child Development + Textiles',
      nameAndOrdinal: 'Smruti Zubin Irani',
      constituency: 'Amethi – Uttar Pradesh',
    },
    {
      index: 16,
      designation:
        'Health & Family Welfare + Science and Technology + Earth Sciences',
      nameAndOrdinal: 'Dr. Harsh Vardhan',
      constituency: 'Chandni Chowk – New Delhi',
    },
    {
      index: 17,
      designation:
        'Environment, Forest and Climate Change + Information Broadcasting + Heavy Industries and Public Enterprises',
      nameAndOrdinal: 'Prakash Javadekar',
      constituency: 'Rajya Sabha – Madhya Pradesh',
    },
    {
      index: 18,
      designation: 'Railways + Commerce and Industry',
      nameAndOrdinal: 'Piyush Goyal',
      constituency: 'Rajya Sabha – Maharashtra',
    },
    {
      index: 19,
      designation: 'Petroleum and Natural Gas + Steel',
      nameAndOrdinal: 'Dharmendra Pradhan',
      constituency: 'Rajya Sabha – Madhya Pradesh',
    },
    {
      index: 20,
      designation: 'Minority Affairs',
      nameAndOrdinal: 'Mukhtar Abbas Naqvi',
      constituency: 'Rajya Sabha – Jharkhand',
    },
    {
      index: 21,
      designation: 'Parliamentary Affairs + Coal + Mines',
      nameAndOrdinal: 'Pralhad Joshi',
      constituency: 'Dharwad – Karnataka',
    },
    {
      index: 22,
      designation: 'Skill Development and Entrepreneurship',
      nameAndOrdinal: 'Dr. Mahendra Nath Pandey',
      constituency: 'Chandauli – Uttar Pradesh',
    },
    {
      index: 23,
      designation: 'Animal Husbandry, Dairying and Fisheries',
      nameAndOrdinal: 'Giriraj Singh',
      constituency: 'Begusarai – Bihar',
    },
    {
      index: 24,
      designation: 'Jal Shakti',
      nameAndOrdinal: 'Gajendra Singh Shekawat',
      constituency: 'Jodhpur – Rajasthan',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const ministersOfStateIndependent = {
  sectionTitle: 'Ministers of State (Independent Charge)',
  items: [
    {
      index: 1,
      designation: 'Planning + Statistics and Program Implementation',
      nameAndOrdinal: 'Rao Inderjit Singh',
    },
    {
      index: 2,
      designation: 'Labor and Employment',
      nameAndOrdinal: 'Santosh Kumar Gangwar',
    },
    {
      index: 3,
      designation: 'Shipping + Chemical and Fertilizers',
      nameAndOrdinal: 'Mansukh L Mandaviy',
    },
    {
      index: 4,
      designation: 'Youth Affairs & Sports + Minority Affairs',
      nameAndOrdinal: 'Kiran Rijiju',
    },
    {
      index: 5,
      designation: 'AAYUSH + Defense',
      nameAndOrdinal: 'Shripad Yesso Naik',
    },
    {
      index: 6,
      designation:
        'Power + New & Renewal Energy + Skill Development & Entrepreneurship',
      nameAndOrdinal: 'Raj Kumar Singh',
    },
    {
      index: 7,
      designation:
        'Development of North Eastern Region + Prime minister’s office + Personnel, Public grievances & Pensions + Department of Atomic energy + Department of Space',
      nameAndOrdinal: 'Dr. Jitendra Singh',
    },
    {
      index: 8,
      designation: 'Culture + Tourism',
      nameAndOrdinal: 'Prahlad Singh Patel',
    },
    {
      index: 9,
      designation:
        'Housing & Urban Affairs + Civil Aviation + Commerce & Industry',
      nameAndOrdinal: 'Hardeep Singh Puri',
    },
  ] satisfies WhoIsWhoItem[],
} as const

export const ministersOfState = {
  sectionTitle: 'Ministers of States',
  items: [
    {
      index: 1,
      designation: 'Steel',
      nameAndOrdinal: 'Faggansingh Kulaste',
    },
    {
      index: 2,
      designation:
        'Parliamentary Affairs + Heavy Industries & Public Enterprises',
      nameAndOrdinal: 'Arjun Ram Meghwal',
    },
    {
      index: 3,
      designation: 'Health & Family welfare',
      nameAndOrdinal: 'Ashwini Kumar Chaubey',
    },
    {
      index: 4,
      designation: 'Road Transports & Highways',
      nameAndOrdinal: 'Gen. Retd. V K Singh',
    },
    {
      index: 5,
      designation: 'Social justice & Empowerment',
      nameAndOrdinal: 'Krishna Pal',
    },
    {
      index: 6,
      designation: 'Consumer Affairs, Food & Public Distribution',
      nameAndOrdinal: 'Sri Dhanve Raosahebh Dadarao',
    },
    {
      index: 7,
      designation: 'Home affairs',
      nameAndOrdinal: 'G. Kishan Reddy',
    },
    {
      index: 8,
      designation: 'Agriculture & Farmers Welfare',
      nameAndOrdinal: 'Parshottham Rupala',
    },
    {
      index: 9,
      designation: 'Social Justice & Empowerment',
      nameAndOrdinal: 'Ramadas Athawale',
    },
    {
      index: 10,
      designation: 'Rural Development',
      nameAndOrdinal: 'Sadhvi Niranjan Jyoti',
    },
    {
      index: 11,
      designation: 'Environment, Forest & Climate Change',
      nameAndOrdinal: 'Babul Supriyo',
    },
    {
      index: 12,
      designation: 'Animal Husbandry, Dairying and Fisheries',
      nameAndOrdinal: 'Sanjay Kumar Balyan',
    },
    {
      index: 13,
      designation:
        'Human Resource Development + Communications + Electronics and Information Technology',
      nameAndOrdinal: 'Dhotre Sanjay Shamrao',
    },
    {
      index: 14,
      designation: 'Finance + Corporate Affairs',
      nameAndOrdinal: 'Anurag Singh Thakur',
    },
    {
      index: 15,
      designation: 'Railways',
      nameAndOrdinal: 'Angadi Suresh Channabasappa',
    },
    {
      index: 16,
      designation: 'Home Affairs',
      nameAndOrdinal: 'Nityanand Rai',
    },
    {
      index: 17,
      designation: 'Jal Shakti + Social Justice and Empowerment',
      nameAndOrdinal: 'Rattan Lal Kataria',
    },
    {
      index: 18,
      designation: 'External Affairs + Parliamentary Affairs',
      nameAndOrdinal: 'M. Muralidharan',
    },
    {
      index: 19,
      designation: 'Tribal Affairs',
      nameAndOrdinal: 'Renuka Singh Saruta',
    },
    {
      index: 20,
      designation: 'Commerce and Industry',
      nameAndOrdinal: 'Som Parkash',
    },
    {
      index: 21,
      designation: 'Food processing industries',
      nameAndOrdinal: 'Rameswar Teli',
    },
    {
      index: 22,
      designation:
        'Micro Small & Medium Enterprises + Animal Husbandry, Dairying and Fisheries',
      nameAndOrdinal: 'Pratap Chandra Sarangi',
    },
    {
      index: 23,
      designation: 'Agriculture and Farmers Welfare',
      nameAndOrdinal: 'Kailash Choudhary',
    },
    {
      index: 24,
      designation: 'Women & Child Development',
      nameAndOrdinal: 'Sushri Debasri Choudhary',
    },
  ] satisfies WhoIsWhoItem[],
} as const


export const chairmanDirectors = {
  sectionTitle: 'CHAIRMAN & CEO & DIRECTORS',
  items: [
    {
      index: 1,
      designation: 'World Bank',
      nameAndOrdinal: "David Robert Malpas (USA)",
    },
    {
      index: 2,
      designation: 'International Monetary Fund (IMF)',
      nameAndOrdinal: 'Kristalina Georgieva (Bulgaria)',
    },
    {
      index: 3,
      designation: 'Asian Development Bank (ADB)',
      nameAndOrdinal: 'Masatsugu Asakawa (Japan)',
    },
    {
      index: 4,
      designation: 'National Aeronautics & Space Administration (NASA)',
      nameAndOrdinal: 'Bill Nelson',
    },
    {
      index: 5,
      designation: 'International Machines Business (IBM)',
      nameAndOrdinal:
        'Jim Whitehurst (Director) : Arvind Krishna (Chairman and CEO)',
    },
    {
      index: 6,
      designation: 'Facebook CEO',
      nameAndOrdinal: "Mark Zuckerberg (USA)",
    },
    {
      index: 7,
      designation: 'Pepsico CEO',
      nameAndOrdinal: 'Ramon Laguarta',
    },
    {
      index: 8,
      designation: 'WhatsApp CEO',
      nameAndOrdinal: "John Kaum (USA)",
    },
    {
      index: 9,
      designation: 'Microsoft CEO',
      nameAndOrdinal: 'Satya Nadella',
    },
    {
      index: 10,
      designation: 'Twitter',
      nameAndOrdinal: 'Jack Dorsey (CEO) : Omid R. Kordestani (Chairman)',
    },
    {
      index: 11,
      designation: 'Bharat Sanchar Nigam Limited (BSNL)',
      nameAndOrdinal: 'Pravin Kumar Purvar',
    },
    {
      index: 12,
      designation: 'General Insurance Corporation of India',
      nameAndOrdinal: 'Devesh Srivastava',
    },
    {
      index: 13,
      designation: 'Indian Banks Association',
      nameAndOrdinal: 'Rajkiran Rai G',
    },
    {
      index: 14,
      designation: 'National Mineral Development Corporation (NMDC)',
      nameAndOrdinal: 'Sumit Deb',
    },
    {
      index: 15,
      designation: 'Railway Board, Chairman',
      nameAndOrdinal: 'Suneet Sharma',
    },
    {
      index: 16,
      designation: 'Press Trust of India (PTI)',
      nameAndOrdinal: 'Aveek Sarkar',
    },
    {
      index: 17,
      designation: 'Airport Authority of India (AAI)',
      nameAndOrdinal: 'Sanjeev Kumar',
    },
    {
      index: 18,
      designation: 'Air India Chairman',
      nameAndOrdinal: 'Rajiv Bansal',
    },
    {
      index: 19,
      designation: 'Intellectual Property Appellate Board (IPAB)',
      nameAndOrdinal: 'Justice Manmohan Singh',
    },
    {
      index: 20,
      designation: 'Central Board of Film Certification (CBFC)',
      nameAndOrdinal: 'Prasoon Joshi',
    },
    {
      index: 21,
      designation: 'Forward Market Commission (FMC)',
      nameAndOrdinal: 'Ramesh Abhishek',
    },
    {
      index: 22,
      designation: 'Director General of Civil Aviation',
      nameAndOrdinal: 'Arun Kumar',
    },
    {
      index: 23,
      designation: 'National Crime Records Bureau, Director',
      nameAndOrdinal: 'Rampal Pawar',
    },
    {
      index: 24,
      designation: 'Hindustan Aeronautics Limited (HAL)',
      nameAndOrdinal: 'Sajal Prakash',
    },
    {
      index: 25,
      designation: 'Indian Newspaper Society (INS)',
      nameAndOrdinal: 'Shailesh Gupta',
    },
    {
      index: 26,
      designation: 'National Hydroelectric Power Corporation (NHPC)',
      nameAndOrdinal: 'Abhay Kumar Singh',
    },
    {
      index: 27,
      designation: 'Press Council of India (PCI)',
      nameAndOrdinal: 'Chandramauli Kumar Prasad',
    },
    {
      index: 28,
      designation: 'Payments Council of India (PCI)',
      nameAndOrdinal: 'Vishwas Patel',
    },
    {
      index: 29,
      designation: 'Nokia Chairman',
      nameAndOrdinal: "Sari Baldauf : Pekka Lundmark (Director&CEO)",
    },
    {
      index: 30,
      designation: 'Wipro CEO',
      nameAndOrdinal: 'Rishad Premji',
    },
    {
      index: 31,
      designation: 'Infosys',
      nameAndOrdinal:
        'Salil S. Parekh (MD & CEO) : Nandan Nilekani (Chairman)',
    },
    {
      index: 32,
      designation: 'National Stock Exchange (NSE)',
      nameAndOrdinal: 'Girish Chandra Chaturvedi : Vikram Limiye (MD & CEO)',
    },
    {
      index: 33,
      designation: 'Bombay Stock Exchange (BSE)',
      nameAndOrdinal:
        'Vikramjit Sen (Chairman) : Ashish Kumar Chauhan (CEO)',
    },
    {
      index: 34,
      designation: 'Film & Television Institute of India (FTII)',
      nameAndOrdinal:
        'Shekar Kapur (Chairman) : Bhupendra Kainthola (Director)',
    },
    {
      index: 35,
      designation: 'Council of Scientific & Industrial Research (CSIR)',
      nameAndOrdinal:
        'Shekar C Mande (Director) : Prime Minister (Chairman)',
    },
    {
      index: 36,
      designation: 'National Safety Council, Chairman',
      nameAndOrdinal: 'S N Subramanyan (Chairman)',
    },
  ] satisfies WhoIsWhoItem[],
} as const
