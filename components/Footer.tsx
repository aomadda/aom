import Link from 'next/link'
import { FileText, ScrollText } from 'lucide-react'

type FooterNavItem = {
  href: string
  label: string
  Icon: typeof FileText
}

const EXPLORE_LINKS: FooterNavItem[] = [
  { href: '/pdfs', label: 'PDF Documents', Icon: FileText },
  { href: '/syllabus', label: 'Syllabus', Icon: ScrollText },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950 to-[#1a0f2e]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(139, 92, 246, 0.28), transparent),
            radial-gradient(ellipse 70% 50% at 100% 100%, rgba(59, 130, 246, 0.22), transparent)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mask-[linear-gradient(to_bottom,transparent,black_35%,black_90%,transparent)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.45) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.45) 1px,transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-20 -top-36 h-88 w-88 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="-bottom-24 -left-12 absolute h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 h-px w-full bg-linear-to-r from-transparent via-violet-400/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-14">
          

          <section
            aria-labelledby="footer-explore-heading"
            className="w-full lg:w-auto lg:shrink-0"
          >
            <ul className="flex flex-wrap items-center gap-3">
              {EXPLORE_LINKS.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 opacity-95" aria-hidden />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-6">
          <p className="text-center text-sm leading-relaxed text-indigo-200/70 sm:text-left">
            <Link href="/" className="font-semibold text-indigo-100 transition hover:text-white">
              AOM Aspirant
            </Link>{' '}
            Copyright © {year}
            {'. For educational purposes only.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
