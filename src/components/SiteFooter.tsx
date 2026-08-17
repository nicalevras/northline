import { navigation, site } from '../site'
import { SiteMark } from './SiteMark'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-xs">
          <p>
            <SiteMark />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Professional services against WCAG 2.1 Level AA. Not a law firm. Not
            a certification body. We do not sell overlays.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
          <p className="mt-2">{site.region}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 font-mono text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} {site.legalName}. Messages to government
          addresses may be public records.
        </p>
      </div>
    </footer>
  )
}
