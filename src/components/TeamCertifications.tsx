import { certifications } from '../content/home'

export function TeamCertifications() {
  return (
    <aside
      aria-labelledby="team-certifications-heading"
      className="pt-1 lg:pl-4"
    >
      <h3
        id="team-certifications-heading"
        className="font-mono text-xs uppercase tracking-widest text-primary"
      >
        Professional credentials
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Current IAAP credentials held by members of the Public Layer team.
      </p>

      <ul
        aria-label="IAAP certifications held by Public Layer team members"
        className="mt-7 space-y-7"
      >
        {certifications.map((certification) => (
          <li
            key={certification.abbreviation}
            className="flex items-center gap-4"
          >
            <img
              src={certification.image}
              alt=""
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
              className="size-16 shrink-0 sm:size-20"
            />
            <div>
              <p className="font-mono text-sm font-medium tracking-wider text-foreground">
                {certification.abbreviation}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {certification.name.replace('IAAP ', '')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
