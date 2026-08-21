import { useEffect, useRef, useState } from 'react'
import { ActionLink } from './ActionLink'
import { SiteMark } from './SiteMark'

const navigationItems = [
  { href: '/#scope', label: 'Scope' },
  { href: '/#mandate', label: 'Mandate' },
  { href: '/#process', label: 'Process' },
  { href: '/#experience', label: 'Experience' },
] as const

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return

      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center px-4 py-2.5 md:px-6">
        <a href="/" aria-label="Public Layer home" onClick={closeMenu}>
          <SiteMark />
        </a>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-8">
          <ActionLink href="/#start" size="compact" onClick={closeMenu}>
            Contact
          </ActionLink>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="border-t border-border bg-background md:hidden"
      >
        <div className="mx-auto max-w-6xl px-4 py-1">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex min-h-12 items-center border-b border-border text-base font-medium text-foreground transition-colors last:border-b-0 hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
