import { estateLayers } from '../content/home'

const platformMarks = [
  {
    name: 'CivicPlus',
    src: '/platforms/civicplus-mark.svg',
  },
  {
    name: 'Granicus',
    src: '/platforms/granicus-mark.svg',
  },
  {
    name: 'Revize',
    src: '/platforms/revize-mark.webp',
  },
] as const

const otherPlatformMarks = [
  {
    name: 'WordPress',
    src: '/platforms/wordpress-mark.svg',
  },
  {
    name: 'Drupal',
    src: '/platforms/drupal-mark.svg',
  },
  {
    name: 'Umbraco',
    src: '/platforms/umbraco-mark.svg',
  },
] as const

export function DigitalEstate() {
  return (
    <div className="mt-10 border border-border bg-background md:mt-12">
      <div className="p-4 sm:p-5 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          The digital estate
        </p>

        <div className="mt-4 grid gap-2.5 sm:mt-5 md:grid-cols-3 md:gap-3">
          {estateLayers.map((layer) => (
            <article
              key={layer.name}
              className="border border-border p-4 md:p-5"
            >
              <h3 className="font-mono text-sm font-medium uppercase tracking-wide text-primary">
                {layer.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {layer.detail}
              </p>
            </article>
          ))}
        </div>

        <svg
          aria-hidden="true"
          className="hidden h-16 w-full text-primary/45 md:block"
          viewBox="0 0 960 64"
          preserveAspectRatio="none"
        >
          <path
            d="M160 0v24h320M480 0v40M800 0v24H480"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="m480 56-8-12h16Z" fill="currentColor" />
        </svg>
        <div
          aria-hidden="true"
          className="mx-auto flex h-12 w-px items-end bg-primary/45 md:hidden"
        >
          <span className="-translate-x-[5.5px] translate-y-1 text-primary">
            ▼
          </span>
        </div>

        <div className="mx-auto max-w-lg bg-primary p-6 text-center text-primary-foreground md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest opacity-75">
            One technical standard
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            WCAG 2.1 Level AA
          </h3>
          <p className="mt-2 text-sm opacity-80">
            One accessibility program across every resident-facing system.
          </p>
        </div>
      </div>

      <div className="border-t border-border p-4 sm:p-5 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Representative platforms
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Northline works within the systems already in place—not a prescribed
          technology stack.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {platformMarks.map((platform) => (
            <li key={platform.name}>
              <div className="flex min-h-14 items-center justify-center gap-3 border border-border px-3 py-2.5 sm:min-h-16 sm:px-4 sm:py-3">
                <img
                  src={platform.src}
                  alt=""
                  width="32"
                  height="32"
                  className="size-8 shrink-0 object-contain"
                />
                <span className="font-medium">{platform.name}</span>
              </div>
            </li>
          ))}
          <li>
            <div
              role="group"
              aria-label="Other content management systems, including WordPress, Drupal, and Umbraco"
              className="flex min-h-14 items-center justify-center gap-3 border border-border px-3 py-2.5 sm:min-h-16 sm:px-4 sm:py-3"
            >
              <span className="flex -space-x-2" aria-hidden="true">
                {otherPlatformMarks.map((platform) => (
                  <span
                    key={platform.name}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-secondary shadow-[0_0_0_1px_var(--border)]"
                  >
                    <img
                      src={platform.src}
                      alt=""
                      width="24"
                      height="24"
                      className="size-6 object-contain"
                    />
                  </span>
                ))}
              </span>
              <span className="font-medium" aria-hidden="true">
                <span className="sm:hidden">More</span>
                <span className="hidden whitespace-nowrap sm:inline">
                  More platforms
                </span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
