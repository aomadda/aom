export const indianCivilAwardsTitle = 'INDIAN CIVIL AWARDS' as const

export const indianCivilAwardsIntro = 'Indian Civil Awards are …' as const

export const indianCivilAwardsOutline = [
  { key: '1', text: 'Bharat Ratna' },
  {
    key: '2',
    text: 'Padma Awards',
    sub: [
      { key: 'a', text: 'Padma Vibhushan' },
      { key: 'b', text: 'Padma Bhushan' },
      { key: 'c', text: 'Padma Sri' },
    ],
  },
] as const

export const bharatRatnaSection = {
  heading: 'Bharat Ratna',
  paragraph: 'It is the highest civilian award in India',
  bullets: [
    { label: 'Since', value: '1954' },
    {
      label: '1st Person',
      value: 'Sarvepalli Radhakrishnan C Rajagopalachari C V Raman',
    },
    {
      label: 'For 2019',
      value: 'Nanaji Deshmukh Bhupen Hazarika Pranab Mukherjee',
    },
  ],
} as const

export const padmaAwardsHeader = 'PADMA AWARDS' as const

export const padmaAwardsTypesIntro = 'Padma Awards are 3 types' as const

export const padmaAwardsTypesBlock = `1.
Padma Vibhushan
2.
Padma Bhushan
3.
Padma Sri` as const

export const padmaVibhushanSection = {
  heading: 'Padma Vibhushan',
  paragraph:
    'Padma Vibhushan for “exceptional and distinguished service”. Padma Vibhushan is second highest civilian award in India.',
  since: '1954',
  for2021Label: 'For 2021 :',
  recipients2021: [
    '1.\nShinzo Abe Japan Public Affairs',
    '2.\nS P Balasubramanian Tamil Nadu Art',
    '3.\nDr. Belle Monappa Hedge Karnataka Medicine',
    '4.\nNarinder Singh Kapany USA Science & Engineering',
    '5.\nMaulana Wahiduddin Khan Delhi Spiritualism',
    '6.\nB B Lal Delhi Archaeology',
    '7.\nSudarshan Sahoo Odisha Art',
  ],
} as const

export const padmaBhushanSection = {
  heading: 'Padma Bhushan',
  paragraph:
    'Padma Bhushan Padma Bhushan for “distinguished service of a high order”. Padma Bhushan is third highest civilian award in India.',
  since: '1954',
  for2021Label: 'For 2021',
  recipients2021: [
    '1.\nKrishna Nair Shantha Kumari Chitra Kerala Art',
    '2.\nTarun Gogoi Assam Public Affairs',
    '3.\nChandrashekar Kambara Karnataka Literature & Education',
    '4.\nSumitra Mahajan Madhya Pradesh Public Affairs',
    '5.\nNripendra Mishra Uttar Pradesh Civil Services',
    '6.\nRam Vilas Paswan Bihar Public Affairs',
    '7.\nKeshubhai Patel Gujarat Public Affairs',
    '8.\nKalbe Sadiq Uttar Pradesh Spiritualism',
    '9.\nRajnikant Devidas Shroff Maharashtra Trade & Industry',
    '10.\nTarlochan Singh Haryana Public Affairs',
  ],
} as const

export const padmaSriSection = {
  heading: 'Padma Sri',
  paragraph:
    'Padma Shri is awarded for “distinguished service”. Padma Shri is last and fourth highest civilian award in India.',
  since: '1954',
  for2021Line: 'For 2021 : Given to 102 Members',
  teluguStatesLabel: 'From Telugu States …',
  teluguStatesRecipients: [
    '1.\nRamaswamy Annavarapu Andhra Pradesh Art',
    '2.\nPrakasarao Asavadi Andhra Pradesh Literature & Education',
    '3.\nKanaka Raju Telangana Art',
    '4.\nNidumolu Sumathi Andhra Pradesh Art',
  ],
} as const
