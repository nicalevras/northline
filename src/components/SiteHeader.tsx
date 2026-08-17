import { Link } from '@tanstack/react-router'
import { site } from '../site'

const nav = [
  { to: '/approach' as const, label: 'Approach' },
  { to: '/fees' as const, label: 'Fees' },
  { to: '/contact' as const, label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="group flex items-baseline gap-2 text-ink no-underline"
          aria-label={`${site.name} home`}
        >
          <span
            aria-hidden="true"
            className="block h-2 w-2 translate-y-[-1px] rounded-full bg-copper-deep"
          />
          <span className="font-serif text-[1.35rem] font-medium tracking-[-0.03em]">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-block px-2.5 py-1.5 text-[0.95rem] text-ink-soft no-underline hover:text-ink"
                  activeProps={{
                    className:
                      'inline-block px-2.5 py-1.5 text-[0.95rem] text-ink no-underline underline decoration-copper/70 decoration-1 underline-offset-[6px]',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
