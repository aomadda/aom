export type TigerReserveEntry = {
  serial: number
  reserveName: string
  notificationYear: string
  unescoStatus: string
}

export type TigerReserveStateGroup = {
  state: string
  reserves: readonly TigerReserveEntry[]
}

export const tigerReservesByState: readonly TigerReserveStateGroup[] = [
  {
    state: 'Andhra Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Nagarjunasagar Srisailam',
        notificationYear: '1982–83',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Arunachal Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Namdapha',
        notificationYear: '1982–83',
        unescoStatus: 'Tentative List (2006)',
      },
      {
        serial: 2,
        reserveName: 'Pakke (Pakhui)',
        notificationYear: '1999–00',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Kamlang',
        notificationYear: '2016',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Assam',
    reserves: [
      {
        serial: 1,
        reserveName: 'Manas',
        notificationYear: '1973–74',
        unescoStatus: 'Natural (1985)',
      },
      {
        serial: 2,
        reserveName: 'Nameri',
        notificationYear: '1999–00',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Kaziranga',
        notificationYear: '2006',
        unescoStatus: 'Natural (1985)',
      },
      {
        serial: 4,
        reserveName: 'Orang',
        notificationYear: '2016',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Bihar',
    reserves: [
      {
        serial: 1,
        reserveName: 'Valmiki',
        notificationYear: '1989–90',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Chhattisgarh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Indravati',
        notificationYear: '1982–83',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Udanti-Sitanadi',
        notificationYear: '2008–09',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Achanakmar',
        notificationYear: '2008–09',
        unescoStatus: '—',
      },
      {
        serial: 4,
        reserveName: 'Guru Ghasidas-Tamor Pingla (56th)',
        notificationYear: '2024',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Jharkhand',
    reserves: [
      {
        serial: 1,
        reserveName: 'Palamau',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Karnataka',
    reserves: [
      {
        serial: 1,
        reserveName: 'Bandipur',
        notificationYear: '1973–74',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 2,
        reserveName: 'Bhadra',
        notificationYear: '1998–99',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Nagarahole',
        notificationYear: '1999–00',
        unescoStatus: '—',
      },
      {
        serial: 4,
        reserveName: 'Dandeli-Anshi (Kali)',
        notificationYear: '2007',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Biligiri Ranganatha Temple (BRT)',
        notificationYear: '2011',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Kerala',
    reserves: [
      {
        serial: 1,
        reserveName: 'Periyar',
        notificationYear: '1978–79',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 2,
        reserveName: 'Parambikulam',
        notificationYear: '2008–09',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Madhya Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Kanha',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Pench (MP)',
        notificationYear: '1992–93',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Bandhavgarh',
        notificationYear: '1993–94',
        unescoStatus: '—',
      },
      {
        serial: 4,
        reserveName: 'Panna',
        notificationYear: '1994',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Satpura',
        notificationYear: '1999–00',
        unescoStatus: 'Tentative List (2021)',
      },
      {
        serial: 6,
        reserveName: 'Sanjay-Dubri',
        notificationYear: '2008–09',
        unescoStatus: '—',
      },
      {
        serial: 7,
        reserveName: 'Veerangana Durgavati',
        notificationYear: '2023',
        unescoStatus: '—',
      },
      {
        serial: 8,
        reserveName: 'Ratapani (57th)',
        notificationYear: '2024',
        unescoStatus: '—',
      },
      {
        serial: 9,
        reserveName: 'Madhav (58th)',
        notificationYear: '2025',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Maharashtra',
    reserves: [
      {
        serial: 1,
        reserveName: 'Melghat',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Tadoba-Andhari',
        notificationYear: '1993–94',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Pench (Maharashtra)',
        notificationYear: '1998–99',
        unescoStatus: '—',
      },
      {
        serial: 4,
        reserveName: 'Sahyadri',
        notificationYear: '2010',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 5,
        reserveName: 'Navegaon-Nagzira',
        notificationYear: '2013',
        unescoStatus: '—',
      },
      {
        serial: 6,
        reserveName: 'Bor (Smallest in India)',
        notificationYear: '2014',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Mizoram',
    reserves: [
      {
        serial: 1,
        reserveName: 'Dampa',
        notificationYear: '1994–95',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Odisha',
    reserves: [
      {
        serial: 1,
        reserveName: 'Similipal',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Satkosia',
        notificationYear: '2008–09',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Rajasthan',
    reserves: [
      {
        serial: 1,
        reserveName: 'Ranthambore',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Sariska',
        notificationYear: '1978–79',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Mukundra Hills',
        notificationYear: '2013',
        unescoStatus: '—',
      },
      {
        serial: 4,
        reserveName: 'Ramgarh Vishdhari',
        notificationYear: '2021',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Dholpur - Karauli',
        notificationYear: '2023',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Tamil Nadu',
    reserves: [
      {
        serial: 1,
        reserveName: 'Kalakad-Mundanthurai',
        notificationYear: '1988–89',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 2,
        reserveName: 'Mudumalai',
        notificationYear: '2007',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 3,
        reserveName: 'Anamalai',
        notificationYear: '2008–09',
        unescoStatus: 'Part of Western Ghats (2012)',
      },
      {
        serial: 4,
        reserveName: 'Sathyamangalam',
        notificationYear: '2013',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Srivilliputhur - Megamalai',
        notificationYear: '2021',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Telangana',
    reserves: [
      {
        serial: 1,
        reserveName: 'Kawal',
        notificationYear: '2012',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Amrabad',
        notificationYear: '2014',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Uttar Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Dudhwa',
        notificationYear: '1987–88',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Pilibhit',
        notificationYear: '2014',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Ranipur',
        notificationYear: '2022',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Uttarakhand',
    reserves: [
      {
        serial: 1,
        reserveName: 'Corbett (First in India)',
        notificationYear: '1973–74',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Rajaji',
        notificationYear: '2015',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'West Bengal',
    reserves: [
      {
        serial: 1,
        reserveName: 'Buxa',
        notificationYear: '1982–83',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Sundarbans',
        notificationYear: '1973–74',
        unescoStatus: 'Natural (1987)',
      },
    ],
  },
] satisfies readonly TigerReserveStateGroup[]

export const tigerReservesTitleLine = 'Tiger Reserves of India (58)' as const
