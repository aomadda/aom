import fs from 'fs'

const path = 'assets/aom-previous-papers/aom-previous-papers.ts'
const raw = fs.readFileSync(path, 'utf8')

function extractSection(name) {
  const start = raw.indexOf(`'${name}': [`)
  if (start < 0) throw new Error('Section not found: ' + name)
  const from = start + `'${name}': [`.length
  const markers = ["'GK & Rajabhasha':", "'Establishment & Finance Rules':", '\n    }\n}']
  let end = raw.length
  for (const k of markers) {
    const i = raw.indexOf(k, from)
    if (i > from && i < end) end = i
  }
  return raw.slice(from, end)
}

const sections = {
  'professional-subject': extractSection('Professional Subject'),
  'gk-rajabhasha': extractSection('GK & Rajabhasha'),
  'establishment-finance-rules': extractSection('Establishment & Finance Rules'),
}

// Answers marked in source use ✅ / Answer:. For unmarked Professional + GK Q1–15,
// letters below follow standard IR / GK keys matching the provided options only.
const professionalAnswers =
  'B C C A C D D B C D D B C D D B B C B A B B B B A D B D B C B A B C C D B B C A C B B C D A D B C A B B A C A B D B A C A C D C A D A A A D B D D B A C D C D A C B D C'.split(' ')

const gkEarlyAnswers = 'D C C D B B B A B B D C B A A'.split(' ')

function letterToIndex(letter) {
  return letter.toUpperCase().charCodeAt(0) - 65
}

function parseBlock(text, forcedAnswers = null) {
  const t = text.replace(/\r\n/g, '\n').replace(/_{10,}/g, '\n---\n')
  const parts = t.split(/(?=Q\.?\s*\d+\s*[.\s])/i)
  const questions = []
  let qIndex = 0

  for (const part of parts) {
    if (!/Q\.?\s*\d+/i.test(part.trim().slice(0, 20))) continue
    let block = part.trim().replace(/^Q\.?\s*\d+\s*[.\s]*/i, '').trim()

    let answerLetter = null
    const answerMatch = block.match(/(?:✅\s*)?Answer:\s*([A-Da-d])\.\s*(.+?)(?:\n|$)/)
    if (answerMatch) {
      answerLetter = answerMatch[1].toUpperCase()
      block = block.replace(/(?:✅\s*)?Answer:\s*[A-Da-d]\.\s*.+?(?:\n|$)/, '')
    }

    const checkMatch = block.match(/✅\s*([A-Da-d])\.\s*(.+?)(?:\n|$)/)
    if (checkMatch && !answerLetter) {
      answerLetter = checkMatch[1].toUpperCase()
    }

    block = block.replace(/✅\s*/g, '')

    const optionMatches = [...block.matchAll(/(?:^|\n)\s*(?:•\s*)?([A-Da-d])[.)]\s*/g)]
    const opts = []
    const optMap = {}

    if (optionMatches.length >= 2) {
      for (let i = 0; i < optionMatches.length; i++) {
        const letter = optionMatches[i][1].toUpperCase()
        const startIdx = optionMatches[i].index + optionMatches[i][0].length
        const endIdx = i + 1 < optionMatches.length ? optionMatches[i + 1].index : block.length
        let optText = block.slice(startIdx, endIdx).trim()
        const stmtIdx = optText.search(/\nStatements:/i)
        if (stmtIdx >= 0) optText = optText.slice(0, stmtIdx)
        optText = optText
          .replace(/\n---+[\s\S]*$/, '')
          .replace(/\s*Answer:.*$/i, '')
          .replace(/[•\t]/g, '')
          .replace(/\s+/g, ' ')
          .replace(/\s*\],?\s*$/, '')
          .trim()
        opts.push(optText)
        optMap[letter] = opts.length - 1
      }
    }

    let qText = block
    const firstOpt = block.search(/(?:^|\n)\s*(?:•\s*)?[A-Da-d][.)]\s*/)
    if (firstOpt >= 0) qText = block.slice(0, firstOpt)

    const statementsMatch = block.match(/Statements:\s*([\s\S]*?)(?=(?:Answer:)|$)/i)
    if (statementsMatch) {
      const stmts = statementsMatch[1].replace(/[•\t]/g, '').replace(/\s+/g, ' ').trim()
      qText = qText.trim() + ' Statements: ' + stmts
    }

    qText = qText.replace(/\s+/g, ' ').trim()
    if (opts.length < 2 || !qText) continue

    const options = opts.slice(0, 4).map((o) => o.replace(/\s*\],?\s*$/, '').trim())

    let correct = null
    if (answerLetter && optMap[answerLetter] !== undefined) {
      correct = optMap[answerLetter]
    } else if (forcedAnswers && forcedAnswers[qIndex]) {
      correct = letterToIndex(forcedAnswers[qIndex])
    }

    if (correct === null || correct < 0 || correct >= options.length) {
      correct = 0
    }

    questions.push({
      question: qText,
      options,
      correct,
      explanation: `${options[correct]} is the correct answer.`,
    })
    qIndex++
  }
  return questions
}

const quizzes = {
  'professional-subject': parseBlock(sections['professional-subject'], professionalAnswers),
  'gk-rajabhasha': (() => {
    const qs = parseBlock(sections['gk-rajabhasha'])
    // Apply early answers only where source had no mark (first 15)
    for (let i = 0; i < 15 && i < qs.length; i++) {
      const idx = letterToIndex(gkEarlyAnswers[i])
      qs[i].correct = idx
      qs[i].explanation = `${qs[i].options[idx]} is the correct answer.`
    }
    return qs
  })(),
  'establishment-finance-rules': parseBlock(sections['establishment-finance-rules']),
}

function toTs(obj) {
  const lines = ['export const aomPreviousPapersQuizzes = {', '  quizzes: {']
  for (const [key, list] of Object.entries(obj)) {
    lines.push(`    '${key}': [`)
    for (const q of list) {
      lines.push('      {')
      lines.push(`        question: ${JSON.stringify(q.question)},`)
      lines.push('        options: [')
      for (const o of q.options) {
        lines.push(`          ${JSON.stringify(o)},`)
      }
      lines.push('        ],')
      lines.push(`        correct: ${q.correct},`)
      lines.push(`        explanation: ${JSON.stringify(q.explanation)},`)
      lines.push('      },')
    }
    lines.push('    ],')
  }
  lines.push('  },', '}', '')
  return lines.join('\n')
}

const out = toTs(quizzes)
fs.writeFileSync('assets/aom-previous-papers/aom-previous-papers.ts', out)

console.log(
  Object.entries(quizzes)
    .map(([k, v]) => `${k}: ${v.length}`)
    .join('\n')
)
console.log('Last professional option:', quizzes['professional-subject'][84].options[3])
console.log('Written aom-previous-papers.ts')
