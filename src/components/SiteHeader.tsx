import { ActionLink } from './ActionLink'
import { SiteMark } from './SiteMark'

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="/" aria-label="Northline home">
          <SiteMark />
        </a>

        <ActionLink href="/#start" size="compact">
          Contact
        </ActionLink>
      </div>
    </header>
  )
}
