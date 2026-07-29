export type ElephantReserveEntry = {
  serial: number
  reserveName: string
  notificationYear: string
  unescoStatus: string
}

export type ElephantReserveStateGroup = {
  state: string
  reserves: readonly ElephantReserveEntry[]
}

export const elephantReservesByState: readonly ElephantReserveStateGroup[] = [
  {
    state: 'Andhra Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Rayala Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Arunachal Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Kameng Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'South Arunachal Elephant Reserve',
        notificationYear: '2008',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Assam',
    reserves: [
      {
        serial: 1,
        reserveName: 'Sonitpur Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Dihing-Patkai Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Kaziranga-Karbi Anglong ER',
        notificationYear: '2003',
        unescoStatus: 'Natural Site (Kaziranga)',
      },
      {
        serial: 4,
        reserveName: 'Dhansiri-Lungding Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Chirang-Ripu Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: 'Natural Site (Manas)',
      },
    ],
  },
  {
    state: 'Chhattisgarh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Lemru Elephant Reserve',
        notificationYear: '2022',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Badalkhol-Tamorpingla ER',
        notificationYear: '2011',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Jharkhand',
    reserves: [
      {
        serial: 1,
        reserveName: "Singhbhum ER (India's 1st)",
        notificationYear: '2001',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Karnataka',
    reserves: [
      {
        serial: 1,
        reserveName: 'Mysore Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 2,
        reserveName: 'Dandeli Elephant Reserve',
        notificationYear: '2015',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Kerala',
    reserves: [
      {
        serial: 1,
        reserveName: 'Wayanad Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 2,
        reserveName: 'Nilambur Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 3,
        reserveName: 'Anamudi Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 4,
        reserveName: 'Periyar Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
    ],
  },
  {
    state: 'Meghalaya',
    reserves: [
      {
        serial: 1,
        reserveName: 'Garo Hills Elephant Reserve',
        notificationYear: '2001',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Khasi Hills Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Nagaland',
    reserves: [
      {
        serial: 1,
        reserveName: 'Intanki Elephant Reserve',
        notificationYear: '2005',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Singphan Elephant Reserve',
        notificationYear: '2018',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Odisha',
    reserves: [
      {
        serial: 1,
        reserveName: 'Mayurbhanj Elephant Reserve',
        notificationYear: '2001',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Mahanadi Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
      {
        serial: 3,
        reserveName: 'Sambalpur Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Tamil Nadu',
    reserves: [
      {
        serial: 1,
        reserveName: 'Nilgiri Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 2,
        reserveName: 'Coimbatore Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 3,
        reserveName: 'Anamalai Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: 'Natural Site (Western Ghats)',
      },
      {
        serial: 4,
        reserveName: 'Srivilliputhur Elephant Reserve',
        notificationYear: '2003',
        unescoStatus: '—',
      },
      {
        serial: 5,
        reserveName: 'Agasthyamalai ER (32nd)',
        notificationYear: '2022',
        unescoStatus: 'Biosphere Reserve (UNESCO)',
      },
    ],
  },
  {
    state: 'Uttarakhand',
    reserves: [
      {
        serial: 1,
        reserveName: 'Shivalik Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'Uttar Pradesh',
    reserves: [
      {
        serial: 1,
        reserveName: 'Uttar Pradesh Elephant Reserve',
        notificationYear: '2009',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Terai Elephant Reserve (33rd)',
        notificationYear: '2022',
        unescoStatus: '—',
      },
    ],
  },
  {
    state: 'West Bengal',
    reserves: [
      {
        serial: 1,
        reserveName: 'Mayurjharna Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
      {
        serial: 2,
        reserveName: 'Eastern Dooars Elephant Reserve',
        notificationYear: '2002',
        unescoStatus: '—',
      },
    ],
  },
] satisfies readonly ElephantReserveStateGroup[]

export const elephantReservesTitleLine = 'Elephant Reserves of India (33)' as const
