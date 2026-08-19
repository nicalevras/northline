import { ActionLink } from './ActionLink'
import { SiteMark } from './SiteMark'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4 md:flex-nowrap md:px-6">
        <a href="/" aria-label="Northline home">
          <SiteMark />
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 mt-3 flex w-full items-center justify-end gap-6 border-t border-border pt-3 text-sm font-medium text-muted-foreground md:order-none md:mr-8 md:ml-auto md:mt-0 md:w-auto md:gap-7 md:border-0 md:pt-0"
        >
          <a href="/#scope" className="transition-colors hover:text-foreground">
            Scope
          </a>
          <a
            href="/#mandate"
            className="transition-colors hover:text-foreground"
          >
            Mandate
          </a>
          <a
            href="/#experience"
            className="transition-colors hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="/#engagement"
            className="transition-colors hover:text-foreground"
          >
            Engagement
          </a>
        </nav>

        <ActionLink href="/#start" size="compact">
          Contact
        </ActionLink>
      </div>
    </header>
  )
}
