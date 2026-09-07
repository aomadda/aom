/**
 * Remove PDFs from `public/` before `next build` on Vercel so they are not
 * copied into each deployment (~550 MB). Files stay in GitHub and are served
 * via the PDF CDN redirect in middleware.
 *
 * Never runs on Windows/macOS, so a local `vercel build` cannot wipe PDFs.
 */
import { readdir, stat, unlink } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')

if (process.platform !== 'linux' || process.env.VERCEL !== '1') {
  console.log('[strip-static-pdfs] skip (not a Vercel Linux build)')
  process.exit(0)
}

let removed = 0
let bytes = 0

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    if (!entry.name.toLowerCase().endsWith('.pdf')) continue
    const info = await stat(full)
    bytes += info.size
    await unlink(full)
    removed += 1
  }
}

await walk(root)
const mb = (bytes / (1024 * 1024)).toFixed(1)
console.log(`[strip-static-pdfs] removed ${removed} PDFs (${mb} MB) from public/`)
