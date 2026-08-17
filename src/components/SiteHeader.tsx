import { navigation } from '../site'
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
          <SiteMark showDescriptor />
        </a>

        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm">
            {navigation.filter((item) => item.showInHeader).map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ActionLink href="/#start" size="compact">
                Request a snapshot
              </ActionLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
