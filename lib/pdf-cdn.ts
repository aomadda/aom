/** Build the CDN URL for a site PDF path such as `/circulars-pdfs/foo.pdf`. */
export function encodePathSegments(pathname: string) {
  return pathname
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

export function isPdfPath(pathname: string) {
  return pathname.toLowerCase().endsWith('.pdf')
}

/**
 * On Vercel, PDFs are stripped from the deployment and served from GitHub.
 * jsDelivr is not used: several WTT files exceed its 20 MB per-file limit.
 * Override with `PDF_CDN_ORIGIN` (no trailing slash), e.g. a Cloudflare R2 public URL.
 * Returns null locally so `public/` files keep working in `next dev`.
 */
export function getPdfCdnUrl(pathname: string): string | null {
  if (process.env.VERCEL !== '1') return null
  if (!isPdfPath(pathname)) return null

  const encodedPath = encodePathSegments(pathname)
  const customOrigin = process.env.PDF_CDN_ORIGIN?.replace(/\/$/, '')
  if (customOrigin) return `${customOrigin}${encodedPath}`

  const owner = process.env.VERCEL_GIT_REPO_OWNER || 'aomadda'
  const slug = process.env.VERCEL_GIT_REPO_SLUG || 'aom'
  const ref = process.env.VERCEL_GIT_COMMIT_SHA || 'main'
  return `https://raw.githubusercontent.com/${owner}/${slug}/${ref}/public${encodedPath}`
}
