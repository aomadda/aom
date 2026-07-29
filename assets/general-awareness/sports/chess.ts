export const chessPageTitle = 'CHESS' as const

export const chessOverviewSection = {
  intro:
    "Chess is a strategic board game played between two players on a square board consisting of 64 squares arranged in an 8×8 grid. It is one of the world's most popular games and is known for developing logical thinking, concentration, and decision-making skills.",
  keyFeaturesHeading: 'Key Features',
  keyFeatures: [
    { label: 'Players', value: '2 players.' },
    { label: 'Board', value: '8 × 8 squares (64 squares).' },
  ],
  piecesLabel: 'Pieces',
  piecesIntro: 'Each player starts with 16 pieces:',
  pieces: ['1 King', '1 Queen', '2 Rooks', '2 Bishops', '2 Knights', '8 Pawns'],
  objective: { label: 'Objective', value: "Checkmate the opponent's king." },
  basicRulesHeading: 'Basic Rules',
  basicRules: [
    'White moves first, followed by alternating turns.',
    'Each type of piece has its own movement pattern.',
    'The king must never be left in check.',
    "A player wins by checkmating the opponent's king, meaning the king is under attack and cannot escape.",
    'A game may also end in a draw under certain conditions.',
  ],
} as const

export const chessIntroParagraph =
  'The Chess is a two – player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in a 8 * 8 grid'

export const worldChessChampionshipSection = {
  heading: 'World Chess Championship (WCC)',
  introParagraphs: [
    'The World Chess Championship (WCC) is played to determine the World Champion in Chess.',
    'Since 2014, the schedule has settled on a two – year cycle with a championship held in every even year.',
  ],
  arrowBullets: [{ label: 'Since', value: '1834' }],
  blockTitle: 'For 2021',
  blockArrowBullets: [
    { label: 'Host city', value: 'Dubai (UAE)' },
    { label: 'Date', value: '24 November – 16 December 2021' },
    { label: 'Winner', value: '---' },
    { label: 'Runner', value: '---' },
  ],
} as const

export const worldChessOlympiadSection = {
  heading: 'World Chess Olympiad',
  introParagraphs: [
    'The Chess Olympiad is a biennial chess tournament in which teams from all over the world compete.',
    'FIDE organizes the tournament and selects the host nation.',
  ],
  arrowBullets: [{ label: 'Since', value: '1927' }],
  blockTitle: '2022 World Chess Olympiad (44th)',
  blockArrowBullets: [
    { label: 'Host city', value: 'Moscow (Russia)' },
    { label: 'Date', value: '2022' },
  ],
} as const

export const worldRapidChessChampionshipSection = {
  heading: 'World Rapid Chess Championship',
  introParagraphs: [
    'The World Rapid Chess Championship is a tournament to determine the ‘world champion’ in chess played under rapid time controls.',
  ],
  arrowBullets: [{ label: 'Since', value: '2012' }],
  for2019Title: 'For 2019',
  openTitle: 'Open',
  openArrowBullets: [
    { label: 'Winner', value: 'Magnus Carlsen (Norway)' },
    { label: 'Place', value: 'Moscow (Russia)' },
  ],
  womenTitle: 'Women',
  womenArrowBullets: [
    { label: 'Winner', value: 'Humpy Koneru (India)' },
    { label: 'Place', value: 'Moscow (Russia)' },
  ],
} as const

export const trophiesSection = {
  heading: 'Trophies',
  lines: ['Naidu Trophy, Khatan Trophy, Hawai Trophy'],
} as const

export const relatedTermsSection = {
  heading: 'Related Terms',
  text: 'Move, Check mate, Knight, Pawn, FIDE, Gambit, Double check, Promotion, Grand master, Attack, King, Queen, Rook, Bishops, draw, Kajil,  Check,  Stale mate, Grand master, Kyasil',
} as const

export const famousChessPlayersSection = {
  heading: 'Famous Chess Players',
  lines: [
    'ViswanathAnandh (Tamilanadu – India)',
    'Dronavalli Harika (India)',
    'Koneru Hampi (India)',
    'Hari Krishna (India)',
    'Nihal Sarin (India)',
    'Parimarjan Negi (India)',
    'K Sasikiran (India)',
    'Sandipan Chanda (India)',
    'Dibyendu Barua',
    'Tanya Sachdeva (India)',
    'Vaishali Narendra Salwakar (India)',
  ],
} as const
