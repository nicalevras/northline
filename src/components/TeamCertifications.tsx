import { certifications } from '../content/home'

export function TeamCertifications() {
  return (
    <div className="mt-8 w-full max-w-2xl border-t border-foreground/15 pt-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Team certifications
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        Active IAAP professional credentials held across the Northline team.
      </p>

      <ul
        aria-label="IAAP certifications held by Northline team members"
        className="mx-auto mt-5 grid max-w-xs grid-cols-2 gap-6"
      >
        {certifications.map((certification) => (
          <li key={certification.abbreviation} className="text-center">
            <img
              src={certification.image}
              alt=""
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="mx-auto size-20 sm:size-24"
            />
            <p
              aria-hidden="true"
              className="mt-3 font-mono text-xs font-medium tracking-wider text-foreground"
            >
              {certification.abbreviation}
            </p>
            <p
              aria-hidden="true"
              className="mt-1 text-xs leading-snug text-muted-foreground"
            >
              {certification.descriptor}
            </p>
            <span className="sr-only">{certification.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
