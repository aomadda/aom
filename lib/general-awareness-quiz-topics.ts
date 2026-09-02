export type GeneralAwarenessQuizTopic = {
  slug: string
  categoryId: string
  title: string
  examTitle: string
  icon: string
  color: string
  description: string
  quizIds: string[]
}

function quizIds(count: number) {
  return Array.from({ length: count }, (_, index) => `quiz-${index + 1}`)
}

export const GENERAL_AWARENESS_QUIZ_TOPICS: GeneralAwarenessQuizTopic[] = [
  {
    slug: 'art-culture',
    categoryId: 'general-awareness-art-culture',
    title: 'Art & Culture',
    examTitle: 'Art & Culture',
    icon: '🎭',
    color: 'from-rose-500 to-fuchsia-600',
    description:
      'Indian art, classical music, dance, architecture, literature, and cultural heritage for exam preparation.',
    quizIds: quizIds(2),
  },
  {
    slug: 'biology',
    categoryId: 'general-awareness-biology',
    title: 'Biology',
    examTitle: 'Biology',
    icon: '🧬',
    color: 'from-emerald-500 to-green-600',
    description:
      'Quiz questions on cells, physiology, ecology, genetics, and core concepts in biology for exam preparation.',
    quizIds: quizIds(2),
  },
  {
    slug: 'botany',
    categoryId: 'general-awareness-botany',
    title: 'Botany',
    examTitle: 'Botany',
    icon: '🌿',
    color: 'from-green-500 to-teal-600',
    description:
      'Plant morphology, taxonomy, physiology, ecology, and important botanical facts for GA practice.',
    quizIds: quizIds(2),
  },
  {
    slug: 'chemistry',
    categoryId: 'general-awareness-chemistry',
    title: 'Chemistry',
    examTitle: 'Chemistry',
    icon: '⚗️',
    color: 'from-cyan-500 to-blue-600',
    description:
      'Organic, inorganic, and physical chemistry questions covering periodic trends, reactions, and everyday concepts.',
    quizIds: quizIds(2),
  },
  {
    slug: 'current-affairs',
    categoryId: 'general-awareness-current-affairs',
    title: 'Current Affairs',
    examTitle: 'Current Affairs',
    icon: '📰',
    color: 'from-sky-500 to-indigo-600',
    description:
      'Recent events, appointments, indexes, honours, defence, economics, and global developments for GK.',
    quizIds: quizIds(1),
  },
  {
    slug: 'geography',
    categoryId: 'general-awareness-geography',
    title: 'Geography',
    examTitle: 'Geography',
    icon: '🌍',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Physical and human geography, Indian and world geography, maps, climates, rivers, and natural resources.',
    quizIds: quizIds(2),
  },
  {
    slug: 'history',
    categoryId: 'general-awareness-history',
    title: 'History',
    examTitle: 'History',
    icon: '📜',
    color: 'from-amber-500 to-orange-600',
    description:
      'Ancient, medieval, and modern history timelines, personalities, wars, treaties, and major movements.',
    quizIds: quizIds(13),
  },
  {
    slug: 'physics',
    categoryId: 'general-awareness-physics',
    title: 'Physics',
    examTitle: 'Physics',
    icon: '⚡',
    color: 'from-violet-500 to-purple-600',
    description:
      'Mechanics, heat, light, electricity, modern physics fundamentals, SI units, and formula-based revisions.',
    quizIds: quizIds(3),
  },
  {
    slug: 'polity',
    categoryId: 'general-awareness-polity',
    title: 'Polity',
    examTitle: 'Indian Polity',
    icon: '⚖️',
    color: 'from-blue-600 to-indigo-700',
    description:
      'Indian Constitution, central and state organs, judiciary, Panchayati Raj, and fundamental duties and rights.',
    quizIds: quizIds(10),
  },
  {
    slug: 'zoology',
    categoryId: 'general-awareness-zoology',
    title: 'Zoology',
    examTitle: 'Zoology',
    icon: '🦎',
    color: 'from-rose-500 to-pink-600',
    description:
      'Animal taxonomy, physiology, ecology, genetics, evolutionary concepts, and important species facts.',
    quizIds: quizIds(1),
  },
]

export function getGeneralAwarenessQuizTopic(slug: string) {
  return GENERAL_AWARENESS_QUIZ_TOPICS.find((topic) => topic.slug === slug)
}

export function formatGeneralAwarenessQuizLabel(quizId: string) {
  return quizId.replace(/^quiz-(\d+)$/i, (_, number) => `Quiz ${number}`)
}
