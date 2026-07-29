export type BiosphereReserveEntry = {
  serial: number
  reserveName: string
  year: string
  unescoStatus: string
}

export type BiosphereReserveStateGroup = {
  state: string
  reserves: readonly BiosphereReserveEntry[]
}

export const biosphereReservesByState: readonly BiosphereReserveStateGroup[] = [
  {
    state: 'Andaman & Nicobar',
    reserves: [
      {
        serial: 1,
        reserveName: 'Great Nicobar',
        year: '1989',
        unescoStatus: 'Recognized (2013)',
      },
    ],
  },
  {
    state: 'Andhra Pradesh',
    reserves: [
      {
        serial: 2,
        reserveName: 'Seshachalam Hills',
        year: '2010',
        unescoStatus: 'Not Recognized',
      },
    ],
  },
  {
    state: 'Arunachal Pradesh',
    reserves: [
      {
        serial: 3,
        reserveName: 'Dihang-Dibang',
        year: '1998',
        unescoStatus: 'Not Recognized',
      },
    ],
  },
  {
    state: 'Assam',
    reserves: [
      {
        serial: 4,
        reserveName: 'Manas',
        year: '1989',
        unescoStatus: 'Not Recognized',
      },
      {
        serial: 5,
        reserveName: 'Dibru-Saikhowa',
        year: '1997',
        unescoStatus: 'Not Recognized',
      },
    ],
  },
  {
    state: 'Chhattisgarh & MP',
    reserves: [
      {
        serial: 6,
        reserveName: 'Achanakmar-Amarkantak',
        year: '2005',
        unescoStatus: 'Recognized (2012)',
      },
    ],
  },
  {
    state: 'Gujarat',
    reserves: [
      {
        serial: 7,
        reserveName: 'Kachchh (Great Rann)',
        year: '2008',
        unescoStatus: 'Not Recognized',
      },
    ],
  },
  {
    state: 'Himachal Pradesh',
    reserves: [
      {
        serial: 8,
        reserveName: 'Cold Desert',
        year: '2009',
        unescoStatus: 'Recognized (2025)',
      },
    ],
  },
  {
    state: 'Karnataka, Kerala & TN',
    reserves: [
      {
        serial: 9,
        reserveName: "Nilgiri (India's 1st)",
        year: '1986',
        unescoStatus: 'Recognized (2000)',
      },
    ],
  },
  {
    state: 'Kerala & Tamil Nadu',
    reserves: [
      {
        serial: 10,
        reserveName: 'Agasthyamalai',
        year: '2001',
        unescoStatus: 'Recognized (2016)',
      },
    ],
  },
  {
    state: 'Madhya Pradesh',
    reserves: [
      {
        serial: 11,
        reserveName: 'Pachmarhi',
        year: '1999',
        unescoStatus: 'Recognized (2009)',
      },
      {
        serial: 12,
        reserveName: 'Panna',
        year: '2011',
        unescoStatus: 'Recognized (2020)',
      },
    ],
  },
  {
    state: 'Meghalaya',
    reserves: [
      {
        serial: 13,
        reserveName: 'Nokrek',
        year: '1988',
        unescoStatus: 'Recognized (2009)',
      },
    ],
  },
  {
    state: 'Odisha',
    reserves: [
      {
        serial: 14,
        reserveName: 'Simlipal',
        year: '1994',
        unescoStatus: 'Recognized (2009)',
      },
    ],
  },
  {
    state: 'Sikkim',
    reserves: [
      {
        serial: 15,
        reserveName: 'Khangchendzonga',
        year: '2000',
        unescoStatus: 'Recognized (2018)',
      },
    ],
  },
  {
    state: 'Tamil Nadu',
    reserves: [
      {
        serial: 16,
        reserveName: 'Gulf of Mannar',
        year: '1989',
        unescoStatus: 'Recognized (2001)',
      },
    ],
  },
  {
    state: 'Uttarakhand',
    reserves: [
      {
        serial: 17,
        reserveName: 'Nanda Devi',
        year: '1988',
        unescoStatus: 'Recognized (2004)',
      },
    ],
  },
  {
    state: 'West Bengal',
    reserves: [
      {
        serial: 18,
        reserveName: 'Sundarbans',
        year: '1989',
        unescoStatus: 'Recognized (2001)',
      },
    ],
  },
] satisfies readonly BiosphereReserveStateGroup[]

export const biosphereReservesTitleLine = 'Biosphere Reserves in India (18)' as const
