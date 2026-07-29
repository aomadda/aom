export const tennisPageTitle = 'TENNIS' as const

export const tennisOverviewSection = {
  intro:
    "Tennis is a popular racket sport played between two players (singles) or two teams of two players each (doubles). Players use rackets to hit a ball over a net, aiming to land it within the opponent's court and score points.",
  keyFeaturesHeading: 'Key Features',
  keyFeatures: [
    { label: 'Players', value: 'Singles (1 vs 1) or Doubles (2 vs 2).' },
    { label: 'Court', value: 'Rectangular court divided by a net.' },
    { label: 'Equipment', value: 'Tennis racket, tennis ball, net, and court.' },
    {
      label: 'Objective',
      value:
        'Score points by hitting the ball so that the opponent cannot return it legally.',
    },
    { label: 'Match Format', value: 'Usually best of 3 or 5 sets.' },
  ],
  basicRulesHeading: 'Basic Rules',
  basicRules: [
    "A player serves the ball from behind the baseline into the opponent's service box.",
    'Points are scored as 15, 30, 40, and Game.',
    'A set is usually won by the first player/team to win 6 games with a margin of at least 2 games.',
    'The player/team winning the required number of sets wins the match.',
  ],
} as const

export const australianOpenSection = {
  heading: 'Australian Open (Tennis)',
  introParagraphs: [
    'The Australian Open is a major Tennis tournament held annually over the last fortnight (14- days) of January in Melbourne, Australia',
  ],
  arrowBullets: [
    { label: 'Since', value: '1905' },
    { label: 'Country', value: 'Australia' },
  ],
  blockTitleFor2021: 'For 2021 (109th)',
  for2021ArrowBullets: [
    { label: 'Venue', value: 'Melbourne Park' },
    { label: 'Court', value: 'Hard Court' },
    { label: 'Date', value: '8 – 21 January 2021' },
  ],
  championsHeading: 'CHAMPIONS',
  championsArrowBullets: [
    { label: 'Men’s Singles', value: 'Novak Djokovic (Serbia)' },
    { label: 'Women’s Singles', value: 'Naomi Osaka (Japan)' },
    { label: 'Men’s Doubles', value: 'Ivan Dodig (Croatia) + Filip Polasek (Slovakia)' },
    { label: 'Women’s Doubles', value: 'Elise Mertens (Belgium) + Aryna Sabalenka (Belarus)' },
    { label: 'Mixed Doubles', value: 'Barbora Krejcikova (Chech Republic) + Rajiv Ram (USA)' },
  ],
} as const

export const frenchOpenSection = {
  heading: 'French Open (Tennis)',
  introParagraphs: [
    'The French Open, also called Roland – Garros is a major tennis tournament held over two weeks between late May and early June at the Stade Roland – Garros in Paris, France.',
    'Named after the Frence Aviator Roland Garros.',
  ],
  arrowBullets: [
    { label: 'Since', value: '1891' },
    { label: 'Country', value: 'France' },
  ],
  blockTitleFor2021: 'For 2021 (125th)',
  for2021ArrowBullets: [
    { label: 'Venue', value: 'Stade Roland Garros' },
    { label: 'Court', value: 'Clay Court' },
    { label: 'Date', value: '30 May to 13 June 2021' },
  ],
  championsHeading: 'CHAMPIONS',
  championsArrowBullets: [
    { label: 'Men’s Singles', value: 'Novak Djokovic (Serbia)' },
    { label: 'Women’s Singles', value: 'Barbora Krejcikova (Chez Republic)' },
    { label: 'Men’s Doubles', value: 'Pierre – Hugues Herbert (France) + Nicolas Mahut (France)' },
    { label: 'Women’s Doubles', value: 'Barbora Krejcikova (Chez Republic) + Katerina Sainikova (Chez Republic)' },
    { label: 'Mixed Doubles', value: 'Desirae Krawczyk (USA) + Joe Salisbury (UK)' },
  ],
} as const

export const wimbledonSection = {
  heading: 'WIMBLEDON (Tennis)',
  introParagraphs: [
    'The Championships, Wimbledon, commonly known simply as Wimbledon, is the oldest tennis tournament in the world, and is widely considered the most prestigious.',
    'It has been held at the All England Club in Wimbledon, London, since 1877 is played on outdoor grass court.',
  ],
  arrowBullets: [
    { label: 'Since', value: '1877' },
    { label: 'Country', value: 'England' },
  ],
  blockTitleFor2021: 'For 2021 (134th)',
  for2021ArrowBullets: [
    { label: 'Venue', value: 'All England Lawn Tennis & Croquet Club' },
    { label: 'Court', value: 'Grass Court' },
    { label: 'Date', value: '28 June – 11 July 2021' },
  ],
  championsHeading: 'CHAMPIONS',
  championsArrowBullets: [
    { label: 'Men’s Singles', value: 'Novak Djokovic (Serbia)' },
    { label: 'Women’s Singles', value: 'Ashleigh Barty (Australia)' },
    { label: 'Men’s Doubles', value: 'Nikola Mektic (Croatia) + Mate Pavic (Croatia)' },
    { label: 'Women’s Doubles', value: 'Hsieh Su – wei (Taiwan) + Elise Mertens (Belgium)' },
    { label: 'Mixed Doubles', value: 'Neal Skupski (UK) + Desirae Krawczyk (USA)' },
  ],
} as const

export const usOpenSection = {
  heading: 'US OPEN (Tennis)',
  introParagraphs: ['The United States Open Tennis Championships is a hard court tennis tournament'],
  arrowBullets: [
    { label: 'Since', value: '1881' },
    { label: 'Country', value: 'United States' },
  ],
  for2021Paragraph:
    'For 2021 (141st) The 2021 US Open was the 141st edition of tennis\' US Open and the fourth and final Grand Slam event of the year.',
  for2021ArrowBullets: [
    { label: 'Venue', value: 'USTA Billie Jean King National Tennis Center, New York' },
    { label: 'Court', value: 'Hard Court' },
    { label: 'Date', value: '30 August – 12 September 2021' },
  ],
  championsHeading: 'CHAMPIONS',
  championsArrowBullets: [
    { label: 'Men’s Singles', value: 'Daniil Medvedev (Russia)' },
    { label: 'Women’s Singles', value: 'Emma Raducanu (UK)' },
    { label: 'Men’s Doubles', value: 'Rajeev Ram (USA) + Joe Salisbury (UK)' },
    { label: 'Women’s Doubles', value: 'Samantha Stosur (Australia) + Zhang Shuai (China)' },
    { label: 'Mixed Doubles', value: 'Desirae Krawczyk (USA) + Joe Salisbury (UK)' },
  ],
} as const

export const trophiesSection = {
  heading: 'Trophies',
  lines: [
    'Australia Open, French Open, Wimbledon, US Open',
    'Davis Cup (World Cup of Tennis), Hopman Cup, Heineken Cup',
  ],
} as const

export const relatedTermsSection = {
  heading: 'Related Terms',
  text: 'Smash, Serve, Set, Duece, Ace, Slice, Love, Backhand, Forehand, Grand Slam, Lab',
} as const

export const famousTennisPlayersSection = {
  heading: 'Famous Tennis Players',
  lines: [
    'Sania Mirza (India)',
    'Guptha Jwala (India)',
    'Roger Federar (Argentina)',
    'Rafel Nadal (Spain)',
    'Novak Jacovich (Serbia)',
    'Andy Murray (UK)',
    'Sharapova (Russia)',
    'Serena Williams (USA)',
    'Martina Hingis (Switzerland)',
    'Jaidip Mukerjea (India)',
    'Vijay Amrijraj (India)',
    'Ramesh Krishnan (India)',
    'Leander Paes (India)',
    'Mahesh Bhupati (India)',
    'Rohan Bopanna (India)',
    'Simona Halep (Romania)',
    'Somdev Dev Varman',
    'Anand Amrtiraj',
  ],
} as const
