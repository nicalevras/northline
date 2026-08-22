import { certifications } from '../content/home'

export function TeamCertifications() {
  return (
    <aside
      aria-label="Professional credentials"
      className="mx-auto mt-8 max-w-3xl text-center"
    >
      <ul
        aria-label="IAAP certifications held by Public Layer team members"
        className="mx-auto grid max-w-xs grid-cols-2 gap-12"
      >
        {certifications.map((certification) => (
          <li
            key={certification.abbreviation}
            className="flex flex-col items-center text-center"
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
            <p className="mt-4 font-mono text-sm font-medium tracking-wider text-foreground">
              IAAP {certification.abbreviation}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  )
}
