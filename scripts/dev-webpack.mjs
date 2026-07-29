/**
 * Forces `next dev --webpack` (avoids Turbopack /quizzes/* 404 in dev).
 */
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const require = createRequire(import.meta.url)
const nextBin = require.resolve('next/dist/bin/next')

const passArgs = process.argv.slice(2)
const child = spawn(
  process.execPath,
  [nextBin, 'dev', '--webpack', ...passArgs],
  { stdio: 'inherit', cwd: root }
)

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  process.exit(code ?? 1)
})
