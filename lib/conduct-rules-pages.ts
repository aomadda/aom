export type ConductRuleItem = {
  key: string
  chapter: string
  title: string
  label: string
  slug: string
}

const chapters: { chapter: string; rules: { label: string; title: string }[] }[] = [
  {
    chapter: 'Chapter I - Preliminary',
    rules: [
      { label: '1', title: 'Short title' },
      { label: '2', title: 'Definition' },
      { label: '3', title: 'General' },
    ],
  },
  {
    chapter: 'Chapter II - Employment and Political Activities',
    rules: [
      {
        label: '4',
        title: 'Employment of near relatives of railway servants in Company or firm enjoying Government patronage',
      },
      { label: '5', title: 'Taking part in politics and elections' },
      { label: '6', title: 'Joining of Associations or Unions by Railway Servants' },
      { label: '7', title: 'Demonstration' },
    ],
  },
  {
    chapter: 'Chapter III - Media and Communication',
    rules: [
      { label: '8', title: 'Connection with press or other media' },
      { label: '9', title: 'Criticism of Government' },
      { label: '10', title: 'Evidence before Committee or any other Authority' },
      { label: '11', title: 'Communication of Official Information' },
    ],
  },
  {
    chapter: 'Chapter IV - Financial and Property Matters',
    rules: [
      { label: '12', title: 'Subscription' },
      { label: '13', title: 'Gifts' },
      { label: '14', title: 'Public demonstrations in honour of Railway servants' },
      { label: '15', title: 'Private trade or Employment' },
      { label: '16', title: 'Investment, lending and borrowing' },
      { label: '17', title: 'Insolvency and Habitual indebtedness' },
      { label: '18', title: 'Movable, immovable and valuable Property' },
    ],
  },
  {
    chapter: 'Chapter V - Character and Conduct',
    rules: [
      { label: '19', title: 'Vindication of Acts and Character of Railway servants' },
      { label: '20', title: 'Canvassing of Non-official or other Influence' },
      { label: '21', title: 'Restrictions Regarding Marriage' },
      { label: '22', title: 'Consumption of intoxicating Drinks and Drugs' },
    ],
  },
  {
    chapter: 'Chapter VI - Miscellaneous',
    rules: [
      { label: '23', title: 'Interpretation' },
      { label: '24', title: 'Delegation of Powers' },
      { label: '25', title: 'Repeal and Savings' },
    ],
  },
]

export const conductRuleItems: ConductRuleItem[] = chapters.flatMap((chapter) =>
  chapter.rules.map((rule) => ({
    key: `${chapter.chapter}-${rule.label}`,
    chapter: chapter.chapter,
    title: rule.title,
    label: rule.label,
    slug: rule.label,
  })),
)

export function conductRuleHeading(item: ConductRuleItem) {
  return `Rule ${item.label}`
}
