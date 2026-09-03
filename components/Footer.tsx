import Link from 'next/link'

const footerLinks = [
  { href: '/abbreviations', label: 'Abbreviations' },
  { href: '/definitions', label: 'Definitions' },
] as const

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-linear-to-r from-violet-700 via-indigo-700 to-blue-700"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 120% at 0% 50%, rgba(255,255,255,0.14), transparent 55%),
            radial-gradient(ellipse 70% 100% at 100% 80%, rgba(56,189,248,0.22), transparent 50%)
          `,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-white drop-shadow-sm transition hover:text-amber-200"
        >
          AOM Adda
        </Link>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-amber-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-sm text-white/85 sm:text-right">
          Copyright © {year}. For educational purposes only.
        </p>
      </div>
    </footer>
  )
}

export default Footer
