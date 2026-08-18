import { site } from '../site'
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
            Northline implements WCAG 2.1 Level AA for cities, towns, counties,
            and districts.
          </p>
        </div>
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
          © {new Date().getFullYear()} {site.legalName}. Correspondence with a
          public entity may be a public record.
        </p>
      </div>
    </footer>
  )
}
