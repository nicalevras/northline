import { Link } from '@tanstack/react-router'
import { site } from '../site'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-serif text-2xl tracking-[-0.03em]">{site.name}</p>
          <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-paper/80">
            Professional services against WCAG 2.1 Level AA. Not a law firm. Not
            a certification body. We do not sell overlays.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.14em] text-paper/55 uppercase">
            Visit
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/approach"
                className="text-paper/90 underline-offset-4 hover:underline"
              >
                Approach
              </Link>
            </li>
            <li>
              <Link
                to="/fees"
                className="text-paper/90 underline-offset-4 hover:underline"
              >
                Fees
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-paper/90 underline-offset-4 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-paper/90 underline-offset-4 hover:underline"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.14em] text-paper/55 uppercase">
            Write
          </p>
          <p className="mt-3">
            <a
              href={`mailto:${site.email}`}
              className="text-paper/90 underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-paper/70">{site.region}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-paper/50 sm:px-8">
          © {new Date().getFullYear()} {site.legal}. Messages to government
          addresses may be public records.
        </p>
      </div>
    </footer>
  )
}
